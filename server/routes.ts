import express, { type Express, type Request, type Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import * as schema from "@shared/schema";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Contact from "../db/contact.model";
import multer from "multer";
import { GopalForm, CulturalForm, HeritageForm, FolkForm } from "../db/registration.model";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Multer config with enhanced file validation
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPEG, PNG, GIF, and PDF are allowed."));
    }
  },
});

// Multer error handling middleware
router.use((err: any, req: Request, res: Response, next: Function) => {
  if (err instanceof multer.MulterError) {
    console.error("Multer error:", err);
    return res.status(400).json({
      success: false,
      error: `File upload error: ${err.message}`,
    });
  } else if (err) {
    console.error("File filter error:", err);
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
  next();
});

// Folkform validation schema
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

export async function registerRoutes(app: Express): Promise<Server> {
  // Global error handler to ensure JSON responses
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
      const { name, mobile, email, dob } = req.body;

      const newContact = new Contact({
        name,
        mobile,
        email,
        dob: new Date(dob),
      });

      await newContact.save();
      res.status(200).json({ message: "Contact saved successfully" });
    } catch (err) {
      console.error("Error saving contact:", err);
      res.status(500).json({ message: "Something went wrong" });
    }
  });

  // Donation form submission
  router.post("/donations", async (req: Request, res: Response) => {
    try {
      const donationSchema = z.object({
        firstName: z.string().min(2),
        email: z.string().email(),
        phoneNumber: z.string().optional(),
        donationCategory: z.string(),
        subCategory: z.string().optional(),
        superSubCategory: z.string().optional(),
        customAmount: z.string(),
        message: z.string().optional(),
        receiptNeeded: z.boolean().default(false),
        paymentMethod: z.enum(["credit_card", "paypal", "bank_transfer", "upi"]),
        razorpay_payment_id: z.string(),
        razorpay_order_id: z.string(),
        razorpay_signature: z.string(),
        amount: z.number(),
      });

      const validatedData = donationSchema.parse(req.body);
      const savedDonation = await storage.saveDonation(validatedData);

      res.status(201).json({
        success: true,
        message: "Donation saved successfully",
        donation: savedDonation,
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
    async (req: Request, res: Response) => {
      try {
        console.log("Gopal Request body:", req.body);
        console.log("Gopal Files:", req.files);

        const {
          name,
          gender,
          contact,
          dob,
          classGroup,
          schoolName,
          address,
          center,
          bloodGroup,
          guardianName,
          guardianOccupation,
          guardianContact,
          guardianEmail,
          referralSource,
          issues,
          joiningDate,
          reason,
          regTxnId,
          regReceiptNo,
          transTxnId,
          transReceiptNo,
        } = req.body;

        // Validate required fields
        const requiredFields = {
          name,
          gender,
          contact,
          dob,
          classGroup,
          schoolName,
          address,
          center,
          bloodGroup,
          guardianName,
          guardianContact,
          guardianEmail,
          referralSource,
          issues,
          joiningDate,
          reason,
          regTxnId,
        };
        for (const [field, value] of Object.entries(requiredFields)) {
          if (!value) {
            return res.status(400).json({
              success: false,
              error: `Missing required field: ${field}`,
            });
          }
        }

        // Safely access files
        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
        if (!files || !files["regTxnFile"] || files["regTxnFile"].length === 0) {
          return res.status(400).json({
            success: false,
            error: "Registration transaction file is required",
          });
        }

        // Prepare form data
        const formData = {
          name,
          gender,
          contact,
          dob,
          classGroup,
          schoolName,
          address,
          center,
          bloodGroup,
          guardianName,
          guardianOccupation,
          guardianContact,
          guardianEmail,
          referralSource,
          issues,
          joiningDate,
          reason,
          regTxnId,
          regReceiptNo,
          transTxnId,
          transReceiptNo,
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

        res.status(201).json({ success: true, message: "Form submitted successfully" });
      } catch (error) {
        console.error("Error submitting Gopal form:", error);
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
    async (req: Request, res: Response) => {
      try {
        console.log("Cultural Request body:", req.body);
        console.log("Cultural Files:", req.files);

        const {
          registrationId,
          childName,
          dob,
          gender,
          classGroup,
          schoolName,
          fatherName,
          fatherPhone,
          fatherOccupation,
          motherName,
          motherPhone,
          motherOccupation,
          address,
          landline,
          mobile,
          email,
          referralSource,
          attendedBefore,
          isClubMember,
          issues,
          module,
          regFeeMethod,
          regTxnId,
          transportFeeArea,
          transFeeAmount,
          transTxnId,
          transReceiptNo,
          acceptTerms,
        } = req.body;

        // Validate required fields
        const requiredFields = {
          registrationId,
          childName,
          dob,
          gender,
          schoolName,
          mobile,
          module,
          acceptTerms,
        };
        for (const [field, value] of Object.entries(requiredFields)) {
          if (!value) {
            console.log(`Missing required field: ${field}`);
            return res.status(400).json({
              success: false,
              error: `Missing required field: ${field}`,
            });
          }
        }

        // Validate acceptTerms
        if (acceptTerms !== "true") {
          console.log("acceptTerms must be true");
          return res.status(400).json({
            success: false,
            error: "You must accept the terms and conditions",
          });
        }

        // Validate regTxnFile
        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
        if (!files || !files?.["regTxnFile"]?.[0]) {
          console.log("Registration transaction file is required");
          return res.status(400).json({
            success: false,
            error: "Registration transaction file is required",
          });
        }

        // Prepare form data
        const formData = {
          registrationId,
          childName,
          dob,
          classGroup,
          gender,
          schoolName,
          fatherName,
          fatherPhone,
          fatherOccupation,
          motherName,
          motherPhone,
          motherOccupation,
          address,
          landline,
          mobile,
          email,
          referralSource,
          attendedBefore,
          isClubMember,
          issues,
          module,
          regFeeMethod,
          regTxnId,
          regTxnFile: {
            data: files["regTxnFile"][0].buffer,
            contentType: files["regTxnFile"][0].mimetype,
          },
          transportFeeArea,
          transFeeAmount,
          transTxnId,
          transReceiptNo,
          acceptTerms: acceptTerms === "true",
        };

        console.log("Saving Cultural form data to MongoDB:", formData);
        const savedForm = await storage.saveCulturalForm(formData);
        console.log("Cultural form saved successfully");

        res.status(201).json({ success: true, message: "Cultural form submitted successfully", form: savedForm });
      } catch (error: any) {
        console.error("Error submitting Cultural form:", error);
        if (error.code === 11000) {
          return res.status(400).json({
            success: false,
            error: `Registration ID '${req.body.registrationId}' is already in use`,
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
  router.post(
    "/heritage-form",
    upload.fields([{ name: "photo", maxCount: 1 }]),
    async (req: Request, res: Response) => {
      try {
        console.log("Heritage Request body:", req.body);
        console.log("Heritage Files:", req.files);

        const {
          registrationId,
          name,
          gender,
          dateOfBirth,
          class: classGroup,
          schoolName,
          bloodGroup,
          address,
          contactNumber,
          email,
          guardianName,
          guardianContactNumber,
          guardianEmail,
          howHeard,
          issues,
          dateOfJoining,
          reasonForJoining,
          registrationReceiptNumber,
          regTxnId,
        } = req.body;

        // Validate required fields
        const requiredFields = {
          registrationId,
          name,
          gender,
          dateOfBirth,
          classGroup,
          schoolName,
          bloodGroup,
          address,
          contactNumber,
          email,
          guardianName,
          guardianContactNumber,
          guardianEmail,
          howHeard,
          issues,
          dateOfJoining,
          regTxnId,
        };
        for (const [field, value] of Object.entries(requiredFields)) {
          if (!value) {
            console.log(`Missing required field: ${field}`);
            return res.status(400).json({
              success: false,
              error: `Missing required field: ${field}`,
            });
          }
        }

        // Prepare form data
        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
        const formData = {
          registrationId,
          name,
          gender,
          dob: dateOfBirth,
          classGroup,
          schoolName,
          bloodGroup,
          address,
          contactNumber,
          email,
          guardianName,
          guardianContactNumber,
          guardianEmail,
          referralSource: howHeard,
          issues,
          joiningDate: dateOfJoining,
          reasonForJoining,
          registrationReceiptNumber,
          regTxnId,
          photo: files?.["photo"]?.[0]
            ? {
                data: files["photo"][0].buffer,
                contentType: files["photo"][0].mimetype,
              }
            : undefined,
        };

        console.log("Saving Heritage form data to MongoDB:", formData);
        const savedForm = await storage.saveHeritageForm(formData);
        console.log("Heritage form saved successfully");

        res.status(201).json({ success: true, message: "Heritage form submitted successfully", form: savedForm });
      } catch (error: any) {
        console.error("Error submitting Heritage form:", error);
        if (error.code === 11000) {
          return res.status(400).json({
            success: false,
            error: `Registration ID '${req.body.registrationId}' is already in use`,
          });
        }
        res.status(500).json({
          success: false,
          error: error instanceof Error ? error.message : "Failed to submit form",
        });
      }
    }
  );

  // Folkform registration route
  router.post("/register", async (req: Request, res: Response) => {
    try {
      console.log("Request URL:", req.originalUrl);
      console.log("Request Headers:", req.headers);
      console.log("Folkform Request body:", req.body);

      // Validate request body
      const validatedData = folkFormSchema.parse(req.body);

      console.log("Saving Folkform data to MongoDB:", validatedData);
      console.log("Attempting to save Folkform...");
      const savedForm = await storage.saveFolkForm(validatedData);
      console.log("Folkform saved successfully");

      res.status(201).json({ success: true, message: "Form submitted successfully", form: savedForm });
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
      const recentDonations = await storage.getRecentDonations(limit);
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
    const publicDir = path.resolve(__dirname, "../public");

    fs.readdir(publicDir, (err, files) => {
      if (err) {
        console.error("Error reading public directory:", err);
        return res.status(500).json({ error: "Failed to read images" });
      }

      const imageFiles = files.filter((file) =>
        /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
      );

      const imageUrls = imageFiles.map((file) => `/${file}`);
      res.json(imageUrls);
    });
  });

  // Testimonial submission
  router.post("/testimonials", async (req: Request, res: Response) => {
    try {
      const testimonialData = schema.testimonialInsertSchema.parse({
        donorId: req.body.donorId,
        testimonialText: req.body.testimonialText,
        rating: req.body.rating,
        isApproved: false,
      });

      const testimonial = await storage.createTestimonial(testimonialData);
      res.status(201).json({
        success: true,
        testimonialId: testimonial.id,
        message: "Thank you for your testimonial. It will be reviewed shortly.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error submitting testimonial:", error);
      res.status(500).json({ error: "Failed to submit testimonial" });
    }
  });

  // Attach router to app with /api prefix
  app.use("/api", router);

  const httpServer = createServer(app);
  return httpServer;
}