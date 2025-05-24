import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import * as schema from "@shared/schema";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Contact from "../db/contact.model";
import Razorpay from "razorpay"; // Import Razorpay

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

// Initialize Razorpay with your keys
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function registerRoutes(app: Express): Promise<Server> {
  router.post("/api/contact", async (req, res) => {
    try {
      const { name, mobile, email, dob } = req.body;
      console.log("Received contact data:", req.body);

      const newContact = new Contact({
        name,
        mobile,
        email,
        dob: new Date(dob),
      });

      console.log("Saving contact:", newContact);
      await newContact.save();
      console.log("Contact saved successfully");

      res.status(200).json({ message: "Contact saved successfully" });
    } catch (err) {
      console.error("Error saving contact:", err);
      res.status(500).json({ message: "Something went wrong" });
    }
  });

  // Add Razorpay order creation endpoint
  router.post("/api/create-order", async (req, res) => {
    const { amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    try {
      const order = await razorpay.orders.create({
        amount: amount * 100, // Convert to paise (Razorpay expects amount in paise)
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      res.json({ order });
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  // Updated donation form submission endpoint
  router.post("/api/donations", async (req, res) => {
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

      // Save the donation using storage.saveDonation
      const savedDonation = await storage.saveDonation(validatedData);

      res.status(201).json({
        success: true,
        message: "Donation saved successfully",
        donation: savedDonation,
      });
    } catch (error) {
      console.error("Error saving donation:", error);
      res.status(400).json({
        success: false,
        message: "Invalid donation data",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // Newsletter subscription endpoint
  router.post("/api/newsletter", async (req, res) => {
    try {
      const newsletterSchema = z.object({
        email: z.string().email(),
      });

      const validatedData = newsletterSchema.parse(req.body);

      // In a real application, we would save this email to a subscribers list
      // For this example, we'll just return success

      res.status(200).json({
        success: true,
        message: "Newsletter subscription successful",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Invalid email address",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // API routes prefix
  const apiPrefix = "/api";

  // Get all seva categories
  router.get(`${apiPrefix}/categories`, async (req, res) => {
    try {
      const categories = await storage.getAllSevaCategories();
      return res.status(200).json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      return res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // Get a single category by slug
  router.get(`${apiPrefix}/categories/:slug`, async (req, res) => {
    try {
      const { slug } = req.params;
      const category = await storage.getSevaCategoryBySlug(slug);

      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }

      const sevaOptions = await storage.getSevaOptionsByCategory(category.id);

      return res.status(200).json({
        ...category,
        sevaOptions,
      });
    } catch (error) {
      console.error("Error fetching category:", error);
      return res.status(500).json({ error: "Failed to fetch category" });
    }
  });

  // Get a specific seva option by id
  router.get(`${apiPrefix}/seva-options/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);

      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }

      const sevaOption = await storage.getSevaOptionById(String(id));

      if (!sevaOption) {
        return res.status(404).json({ error: "Seva option not found" });
      }

      return res.status(200).json(sevaOption);
    } catch (error) {
      console.error("Error fetching seva option:", error);
      return res.status(500).json({ error: "Failed to fetch seva option" });
    }
  });

  // Get recent donations
  router.get(`${apiPrefix}/recent-donations`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;
      const recentDonations = await storage.getRecentDonations(limit);
      return res.status(200).json(recentDonations);
    } catch (error) {
      console.error("Error fetching recent donations:", error);
      return res.status(500).json({ error: "Failed to fetch recent donations" });
    }
  });

  // Get testimonials
  router.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 5;
      const testimonials = await storage.getApprovedTestimonials(limit);
      return res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Add this new route at the end of registerRoutes function
  router.get("/api/public-images", (req, res) => {
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

  // Submit testimonial
  router.post(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const testimonialData = schema.testimonialInsertSchema.parse({
        donorId: req.body.donorId,
        testimonialText: req.body.testimonialText,
        rating: req.body.rating,
        isApproved: false, // All testimonials start unapproved
      });

      const testimonial = await storage.createTestimonial(testimonialData);

      return res.status(201).json({
        success: true,
        testimonialId: testimonial.id,
        message: "Thank you for your testimonial. It will be reviewed shortly.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error submitting testimonial:", error);
      return res.status(500).json({ error: "Failed to submit testimonial" });
    }
  });

  // Apply the router to the app
  app.use("/", router);

  const httpServer = createServer(app);
  return httpServer;
}