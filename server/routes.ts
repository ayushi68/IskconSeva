import express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import { storage } from "./storage";
import { z } from "zod";
import { join, resolve, dirname } from "path";
import { readdir } from "fs";
import { fileURLToPath } from "url";
import multer from "multer";
import Contact from "./db/contact.model"; // Corrected import for Contact model
import Donation from "./db/Donation.model"; // Corrected import for Donation model
import {
  GopalForm,
  CulturalForm,
  HeritageForm,
  FolkForm,
  IFolkForm,
} from "./db/registration.model";
import { connectDB } from "./storage";

// Define folkFormSchema based on IFolkForm interface
const folkFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  whatsapp: z.string().min(1, "WhatsApp number is required"),
  email: z.string().email("Invalid email format"),
  gender: z.string().min(1, "Gender is required"),
  course: z.string().min(1, "Course is required"),
  occupation: z.string().min(1, "Occupation is required"),
  qualification: z.string().min(1, "Qualification is required"),
  message: z.string().optional(),
  academicQual1: z.string().optional(),
  academicQual2: z.string().optional(),
  dob: z.string().refine(
    (val) => !isNaN(new Date(val).getTime()),
    { message: "Invalid date format for dob" }
  ),
  location: z.string().min(1, "Location is required"),
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// -------------------------
// Multer configuration
// -------------------------
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/pdf",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPEG, PNG, GIF, and PDF are allowed."));
    }
  },
});

// -------------------------
// Multer Error Handler
// -------------------------
function multerErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof multer.MulterError) {
    console.error("Multer error:", err);
    return res.status(400).json({ success: false, error: `Upload error: ${err.message}` });
  } else if (err) {
    console.error("File filter error:", err);
    return res.status(400).json({ success: false, error: err.message });
  }
  next();
}

export async function registerRoutes(app: Express): Promise<void> {
  // Ensure MongoDB connection
  await connectDB();

  // Global error handler for JSON responses
  app.use((err: any, req: Request, res: Response, next: Function) => {
    console.error("Global error handler:", err);
    res.status(500).json({
      success: false,
      error: err instanceof Error ? err.message : "Internal server error",
    });
  });

  // Contact form route
  router.post("/contact", async (req: Request, res: Response) => {
    try {
      const contactSchema = z.object({
        name: z.string().min(1, "Name is required"),
        mobile: z.string().min(1, "Mobile is required"),
        email: z.string().email("Invalid email format"),
        dob: z.string().refine(
          (val) => !isNaN(new Date(val).getTime()),
          { message: "Invalid date format for dob" }
        ),
        message: z.string().optional(),
        temple: z.string().optional(),
      });
      const validatedData = contactSchema.parse(req.body);
      const { name, mobile, email, dob, message, temple } = validatedData;
      const newContact = new Contact({
        name,
        mobile,
        email,
        dob: new Date(dob),
        message,
        temple,
      });
      await newContact.save();
      res.status(200).json({ success: true, message: "Contact saved successfully" });
    } catch (err) {
      console.error("Error saving contact:", err);
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: err.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }
      res.status(500).json({
        success: false,
        error: err instanceof Error ? err.message : "Something went wrong",
      });
    }
  });

  // Donation form submission
  router.post("/donations", async (req: Request, res: Response) => {
    try {
      const donationSchema = z.object({
        firstName: z.string().min(2, "First name is required"),
        email: z.string().email("Invalid email format"),
        phoneNumber: z.string().optional(),
        donationCategory: z.string().min(1, "Donation category is required"),
        subCategory: z.string().optional(),
        superSubCategory: z.string().optional(),
        customAmount: z.string().min(1, "Custom amount is required"),
        message: z.string().optional(),
        receiptNeeded: z.boolean().default(false),
        paymentMethod: z.enum(["credit_card", "paypal", "bank_transfer", "upi"]),
        razorpay_payment_id: z.string().min(1, "Razorpay payment ID is required"),
        razorpay_order_id: z.string().min(1, "Razorpay order ID is required"),
        razorpay_signature: z.string().min(1, "Razorpay signature is required"),
        amount: z.number().min(1, "Amount is required"),
      });

      const validatedData = donationSchema.parse(req.body);
      const newDonation = new Donation(validatedData);
      await newDonation.save();

      res.status(201).json({
        success: true,
        message: "Donation saved successfully",
        donation: newDonation,
      });
    } catch (error) {
      console.error("Error saving donation:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }
      res.status(400).json({
        success: false,
        message: "Invalid donation data",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // Gopal registration form route
  router.post(
    "/gopal-form",
    upload.fields([
      { name: "regTxnFile", maxCount: 1 },
      { name: "transTxnFile", maxCount: 1 },
    ]),
    multerErrorHandler,
    async (req: Request, res: Response) => {
      try {
        console.log("Gopal Request body:", req.body);
        console.log("Gopal Files:", req.files);

        const gopalSchema = z.object({
          name: z.string().min(1, "Name is required"),
          gender: z.string().min(1, "Gender is required"),
          contact: z.string().min(1, "Contact is required"),
          dob: z.string().min(1, "Date of birth is required"),
          classGroup: z.string().min(1, "Class group is required"),
          schoolName: z.string().min(1, "School name is required"),
          address: z.string().min(1, "Address is required"),
          center: z.string().min(1, "Center is required"),
          bloodGroup: z.string().min(1, "Blood group is required"),
          guardianName: z.string().min(1, "Guardian name is required"),
          guardianOccupation: z.string().optional(),
          guardianContact: z.string().min(1, "Guardian contact is required"),
          guardianEmail: z.string().email("Invalid email format"),
          referralSource: z.string().min(1, "Referral source is required"),
          issues: z.string().min(1, "Issues field is required"),
          joiningDate: z.string().min(1, "Joining date is required"),
          reason: z.string().min(1, "Reason is required"),
          regTxnId: z.string().min(1, "Registration transaction ID is required"),
          regReceiptNo: z.string().optional(),
          transTxnId: z.string().optional(),
          transReceiptNo: z.string().optional(),
        });

        const validatedData = gopalSchema.parse(req.body);
        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

        if (!files || !files["regTxnFile"] || files["regTxnFile"].length === 0) {
          return res.status(400).json({
            success: false,
            error: "Registration transaction file is required",
          });
        }

        const formData = {
          ...validatedData,
          regTxnFile: {
            data: files["regTxnFile"][0].buffer,
            contentType: files["regTxnFile"][0].mimetype,
          },
          transTxnFile: files["transTxnFile"]?.[0]
            ? {
                data: files["transTxnFile"][0].buffer,
                contentType: files["transTxnFile"][0].mimetype,
              }
            : undefined,
        };

        console.log("Saving Gopal form data to MongoDB:", formData);
        const form = new GopalForm(formData);
        await form.save();
        console.log("Gopal form saved successfully");

        res.status(201).json({ success: true, message: "Gopal form submitted successfully" });
      } catch (error) {
        console.error("Error submitting Gopal form:", error);
        if (error instanceof z.ZodError) {
          return res.status(400).json({
            success: false,
            errors: error.errors.map((e) => ({
              field: e.path.join("."),
              message: e.message,
            })),
          });
        }
        res.status(500).json({
          success: false,
          error: error instanceof Error ? error.message : "Failed to submit form",
        });
      }
    }
  );

  // Cultural registration form route
  router.post(
    "/cultural-form",
    upload.fields([
      { name: "regTxnFile", maxCount: 1 },
      { name: "transFeeFile", maxCount: 1 },
    ]),
    multerErrorHandler,
    async (req: Request, res: Response) => {
      try {
        console.log("Cultural Request body:", req.body);
        console.log("Cultural Files:", req.files);

        const culturalSchema = z.object({
          registrationId: z.string().min(1, "Registration ID is required"),
          childName: z.string().min(1, "Child's name is required"),
          dob: z.string().min(1, "Date of birth is required"),
          gender: z.string().min(1, "Gender is required"),
          classGroup: z.string().optional(),
          schoolName: z.string().min(1, "School name is required"),
          GuardianName: z.string().optional(),
          GuardianPhone: z.string().optional(),
          GuardianOccupation: z.string().optional(),
          address: z.string().optional(),
          landline: z.string().optional(),
          mobile: z.string().min(1, "Mobile number is required"),
          email: z.string().email("Invalid email format").optional(),
          referralSource: z.string().optional(),
          attendedBefore: z.string().optional(),
          isClubMember: z.string().optional(),
          issues: z.string().optional(),
          module: z.string().min(1, "Module is required"),
          regFeeMethod: z.string().optional(),
          transportFeeArea: z.string().optional(),
          acceptTerms: z
            .any()
            .refine((val) => val === true || val === "true", {
              message: "You must accept the terms and conditions",
            }),
        });

        const validatedData = culturalSchema.parse(req.body);
        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

        if (!files || !files["regTxnFile"] || files["regTxnFile"].length === 0) {
          return res.status(400).json({
            success: false,
            error: "Registration transaction file is required",
          });
        }

        const formData = {
          ...validatedData,
          acceptTerms: validatedData.acceptTerms === "true" || validatedData.acceptTerms === true,
          regTxnFile: {
            data: files["regTxnFile"][0].buffer,
            contentType: files["regTxnFile"][0].mimetype,
          },
          transFeeFile: files["transFeeFile"]?.[0]
            ? {
                data: files["transFeeFile"][0].buffer,
                contentType: files["transFeeFile"][0].mimetype,
              }
            : undefined,
        };

        console.log("Saving Cultural form data to MongoDB:", formData);
        const form = new CulturalForm(formData);
        await form.save();
        console.log("Cultural form saved successfully");

        res.status(201).json({
          success: true,
          message: "Cultural form submitted successfully",
          form,
        });
      } catch (error: any) {
        console.error("Error submitting Cultural form:", error);
        if (error.code === 11000) {
          return res.status(400).json({
            success: false,
            error: `Registration ID '${req.body.registrationId}' is already in use`,
          });
        }
        if (error instanceof z.ZodError) {
          return res.status(400).json({
            success: false,
            errors: error.errors.map((e) => ({
              field: e.path.join("."),
              message: e.message,
            })),
          });
        }
        res.status(500).json({
          success: false,
          error: error instanceof Error ? error.message : "Failed to submit form",
        });
      }
    }
  );

  // Heritage registration form route
  router.post("/heritage-form", async (req: Request, res: Response) => {
    try {
      console.log("Heritage Request body:", JSON.stringify(req.body, null, 2));

      const heritageSchema = z.object({
        registrationId: z.string().min(1, "Registration ID is required"),
        name: z.string().min(1, "Name is required"),
        gender: z.string().min(1, "Gender is required"),
        dateOfBirth: z.string().min(1, "Date of birth is required"),
        category: z.string().min(1, "Category is required"),
        schoolName: z.string().optional(),
        customSchoolName: z.string().optional(),
        address: z.string().min(1, "Address is required"),
        contactNumber: z.string().min(1, "Contact number is required"),
        email: z.string().email("Invalid email format"),
        guardianName: z.string().min(1, "Guardian name is required"),
        guardianContactNumber: z.string().min(1, "Guardian contact number is required"),
        activities: z.any().refine((val) => Array.isArray(val) || typeof val === "string", {
          message: "Activities must be a string or array",
        }),
        regTxnId: z.string().min(1, "Registration transaction ID is required"),
      });

      const validatedData = heritageSchema.parse(req.body);

      let activities: string[];
      try {
        const activitiesString = validatedData.activities;
        if (Array.isArray(activitiesString)) {
          activities = activitiesString;
        } else if (typeof activitiesString === "string") {
          activities = activitiesString.trim().startsWith("[")
            ? JSON.parse(activitiesString)
            : [activitiesString];
        } else {
          throw new Error("Activities must be a string or array");
        }

        if (!Array.isArray(activities)) {
          throw new Error("Activities must be an array");
        }
      } catch (error) {
        console.error("Error parsing activities:", error);
        return res.status(400).json({
          success: false,
          error: "Invalid activities format",
        });
      }

      if (!validatedData.schoolName && !validatedData.customSchoolName) {
        return res.status(400).json({
          success: false,
          error: "School name or custom school name is required",
        });
      }

      if (!/^[0-9]{10}$/.test(validatedData.contactNumber) || !/^[0-9]{10}$/.test(validatedData.guardianContactNumber)) {
        return res.status(400).json({
          success: false,
          error: "Contact numbers must be 10 digits",
        });
      }

      const formData = {
        registrationId: validatedData.registrationId,
        name: validatedData.name,
        gender: validatedData.gender,
        dob: validatedData.dateOfBirth,
        category: validatedData.category,
        schoolName: validatedData.schoolName || validatedData.customSchoolName || "",
        customSchoolName: validatedData.customSchoolName || "",
        address: validatedData.address,
        contactNumber: validatedData.contactNumber,
        email: validatedData.email,
        guardianName: validatedData.guardianName,
        guardianContactNumber: validatedData.guardianContactNumber,
        activities,
        regTxnId: validatedData.regTxnId,
      };

      console.log("Saving Heritage form data to MongoDB:", JSON.stringify(formData, null, 2));
      const form = new HeritageForm(formData);
      await form.save();
      console.log("Heritage form saved successfully");

      res.status(201).json({
        success: true,
        message: "Heritage form submitted successfully",
        form,
      });
    } catch (error: any) {
      console.error("Error submitting Heritage form:", error);
      if (error.code === 11000) {
        return res.status(400).json({
          success: false,
          error: `Registration ID '${req.body.registrationId}' is already in use`,
        });
      }
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "Failed to submit form",
      });
    }
  });

  // Folkform registration route
  router.post("/folk-form", async (req: Request, res: Response) => {
    try {
      console.log("Folkform Request body:", req.body);

      const validatedData = folkFormSchema.parse(req.body);

      const formData = {
        ...validatedData,
        dob: new Date(validatedData.dob),
      };

      console.log("Saving Folkform data to MongoDB:", formData);
      const form = new FolkForm(formData);
      await form.save();
      console.log("Folkform saved successfully");

      res.status(201).json({
        success: true,
        message: "Folkform submitted successfully",
        form,
      });
    } catch (error: any) {
      console.error("Error submitting Folkform:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "Failed to submit form",
      });
    }
  });

  // GopalSakha registration form route
  router.post(
    "/gopal-sakha-form",
    upload.fields([
      { name: "regTxnFile", maxCount: 1 },
      { name: "transTxnFile", maxCount: 1 },
    ]),
    multerErrorHandler,
    async (req: Request, res: Response) => {
      try {
        console.log("GopalSakha Request body:", req.body);
        console.log("GopalSakha Files:", req.files);

        const gopalSakhaSchema = z.object({
          name: z.string().min(1, "Name is required"),
          gender: z.string().min(1, "Gender is required"),
          contact: z.string().min(1, "Contact is required"),
          dob: z.string().min(1, "Date of birth is required"),
          classGroup: z.string().min(1, "Class group is required"),
          schoolName: z.string().min(1, "School name is required"),
          address: z.string().min(1, "Address is required"),
          center: z.string().min(1, "Center is required"),
          bloodGroup: z.string().min(1, "Blood group is required"),
          guardianName: z.string().min(1, "Guardian name is required"),
          guardianOccupation: z.string().optional(),
          guardianContact: z.string().min(1, "Guardian contact is required"),
          guardianEmail: z.string().email("Invalid email format"),
          referralSource: z.string().min(1, "Referral source is required"),
          issues: z.string().min(1, "Issues field is required"),
          joiningDate: z.string().min(1, "Joining date is required"),
          reason: z.string().min(1, "Reason is required"),
          regTxnId: z.string().min(1, "Registration transaction ID is required"),
          regReceiptNo: z.string().optional(),
          transTxnId: z.string().optional(),
          transReceiptNo: z.string().optional(),
        });

        const validatedData = gopalSakhaSchema.parse(req.body);
        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

        if (!files || !files["regTxnFile"] || files["regTxnFile"].length === 0) {
          return res.status(400).json({
            success: false,
            error: "Registration transaction file is required",
          });
        }

        const formData = {
          ...validatedData,
          regTxnFile: {
            data: files["regTxnFile"][0].buffer,
            contentType: files["regTxnFile"][0].mimetype,
          },
          transTxnFile: files["transTxnFile"]?.[0]
            ? {
                data: files["transTxnFile"][0].buffer,
                contentType: files["transTxnFile"][0].mimetype,
              }
            : undefined,
        };

        console.log("Saving GopalSakha form data to MongoDB:", formData);
        const form = new GopalForm(formData); // Using GopalForm model as assumed
        await form.save();
        console.log("GopalSakha form saved successfully");

        res.status(201).json({
          success: true,
          message: "GopalSakha form submitted successfully",
          form,
        });
      } catch (error) {
        console.error("Error submitting GopalSakha form:", error);
        if (error instanceof z.ZodError) {
          return res.status(400).json({
            success: false,
            errors: error.errors.map((e) => ({
              field: e.path.join("."),
              message: e.message,
            })),
          });
        }
        res.status(500).json({
          success: false,
          error: error instanceof Error ? error.message : "Failed to submit form",
        });
      }
    }
  );

  // HeritageFest registration form route
  router.post("/heritage-fest-form", async (req: Request, res: Response) => {
    try {
      console.log("HeritageFest Request body:", JSON.stringify(req.body, null, 2));

      const heritageFestSchema = z.object({
        registrationId: z.string().min(1, "Registration ID is required"),
        name: z.string().min(1, "Name is required"),
        gender: z.string().min(1, "Gender is required"),
        dateOfBirth: z.string().min(1, "Date of birth is required"),
        category: z.string().min(1, "Category is required"),
        schoolName: z.string().optional(),
        customSchoolName: z.string().optional(),
        address: z.string().min(1, "Address is required"),
        contactNumber: z.string().min(1, "Contact number is required"),
        email: z.string().email("Invalid email format"),
        guardianName: z.string().min(1, "Guardian name is required"),
        guardianContactNumber: z.string().min(1, "Guardian contact number is required"),
        activities: z.any().refine((val) => Array.isArray(val) || typeof val === "string", {
          message: "Activities must be a string or array",
        }),
        regTxnId: z.string().min(1, "Registration transaction ID is required"),
      });

      const validatedData = heritageFestSchema.parse(req.body);

      let activities: string[];
      try {
        const activitiesString = validatedData.activities;
        if (Array.isArray(activitiesString)) {
          activities = activitiesString;
        } else if (typeof activitiesString === "string") {
          activities = activitiesString.trim().startsWith("[")
            ? JSON.parse(activitiesString)
            : [activitiesString];
        } else {
          throw new Error("Activities must be a string or array");
        }

        if (!Array.isArray(activities)) {
          throw new Error("Activities must be an array");
        }
      } catch (error) {
        console.error("Error parsing activities:", error);
        return res.status(400).json({
          success: false,
          error: "Invalid activities format",
        });
      }

      if (!validatedData.schoolName && !validatedData.customSchoolName) {
        return res.status(400).json({
          success: false,
          error: "School name or custom school name is required",
        });
      }

      if (!/^[0-9]{10}$/.test(validatedData.contactNumber) || !/^[0-9]{10}$/.test(validatedData.guardianContactNumber)) {
        return res.status(400).json({
          success: false,
          error: "Contact numbers must be 10 digits",
        });
      }

      const formData = {
        registrationId: validatedData.registrationId,
        name: validatedData.name,
        gender: validatedData.gender,
        dob: validatedData.dateOfBirth,
        category: validatedData.category,
        schoolName: validatedData.schoolName || validatedData.customSchoolName || "",
        customSchoolName: validatedData.customSchoolName || "",
        address: validatedData.address,
        contactNumber: validatedData.contactNumber,
        email: validatedData.email,
        guardianName: validatedData.guardianName,
        guardianContactNumber: validatedData.guardianContactNumber,
        activities,
        regTxnId: validatedData.regTxnId,
      };

      console.log("Saving HeritageFest form data to MongoDB:", JSON.stringify(formData, null, 2));
      const form = new HeritageForm(formData); // Using HeritageForm model as assumed
      await form.save();
      console.log("HeritageFest form saved successfully");

      res.status(201).json({
        success: true,
        message: "HeritageFest form submitted successfully",
        form,
      });
    } catch (error: any) {
      console.error("Error submitting HeritageFest form:", error);
      if (error.code === 11000) {
        return res.status(400).json({
          success: false,
          error: `Registration ID '${req.body.registrationId}' is already in use`,
        });
      }
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "Failed to submit form",
      });
    }
  });

  // Fetch categories
  router.get("/categories", async (req: Request, res: Response) => {
    try {
      const categories = await storage.getAllSevaCategories();
      res.status(200).json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // Recent donations
  router.get("/recent-donations", async (req: Request, res: Response) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;
      const category = req.query.category as string | undefined;
      const recentDonations = await storage.getRecentDonations(limit, category);
      res.status(200).json(recentDonations);
    } catch (error) {
      console.error("Error fetching recent donations:", error);
      res.status(500).json({ error: "Failed to fetch recent donations" });
    }
  });

  // Testimonials fetch
  router.get("/testimonials", async (req: Request, res: Response) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 5;
      const testimonials = await storage.getApprovedTestimonials(limit);
      res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Public image access
  router.get("/public-images", (req: Request, res: Response) => {
    const publicDir = resolve(__dirname, "../public");

    readdir(publicDir, (err: NodeJS.ErrnoException | null, files: string[]) => {
      if (err) {
        console.error("Error reading public directory:", err);
        return res.status(500).json({ error: "Failed to read images" });
      }

      const imageFiles = files.filter((file: string) =>
        /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
      );

      const imageUrls = imageFiles.map((file: string) => `/${file}`);
      res.json(imageUrls);
    });
  });

  // Attach router to app with /api prefix
  app.use("/api", router);
}