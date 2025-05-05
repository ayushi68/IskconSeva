import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import * as schema from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiPrefix = "/api";

  // Get all seva categories
  app.get(`${apiPrefix}/categories`, async (req, res) => {
    try {
      const categories = await storage.getAllSevaCategories();
      return res.status(200).json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      return res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // Get a single category by slug
  app.get(`${apiPrefix}/categories/:slug`, async (req, res) => {
    try {
      const { slug } = req.params;
      const category = await storage.getSevaCategoryBySlug(slug);
      
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      
      const sevaOptions = await storage.getSevaOptionsByCategory(category.id);
      
      return res.status(200).json({
        ...category,
        sevaOptions
      });
    } catch (error) {
      console.error("Error fetching category:", error);
      return res.status(500).json({ error: "Failed to fetch category" });
    }
  });

  // Get a specific seva option by id
  app.get(`${apiPrefix}/seva-options/:id`, async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
      
      const sevaOption = await storage.getSevaOptionById(id);
      
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
  app.get(`${apiPrefix}/recent-donations`, async (req, res) => {
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
  app.get(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 5;
      const testimonials = await storage.getApprovedTestimonials(limit);
      return res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Submit donation
  app.post(`${apiPrefix}/donate`, async (req, res) => {
    try {
      // First validate and create donor
      const donorData = schema.donorInsertSchema.parse({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address || null,
        city: req.body.city || null,
        pincode: req.body.pincode || null,
        panCard: req.body.panCard || null
      });
      
      const donor = await storage.createDonor(donorData);
      
      // Then create donation
      const donationData = schema.donationInsertSchema.parse({
        donorId: donor.id,
        sevaOptionId: parseInt(req.body.sevaOptionId, 10),
        amount: req.body.amount,
        message: req.body.message || null,
        paymentMethod: req.body.paymentMethod,
        paymentStatus: "pending", // Initial status
        transactionId: null,
        showPublicly: req.body.showPublicly !== false
      });
      
      const donation = await storage.createDonation(donationData);
      
      // In a real application, here you would integrate with a payment gateway
      // and update the payment status and transaction ID afterwards
      
      return res.status(201).json({
        success: true,
        donationId: donation.id,
        message: "Donation initiated successfully. Proceed to payment."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error processing donation:", error);
      return res.status(500).json({ error: "Failed to process donation" });
    }
  });

  // Submit testimonial
  app.post(`${apiPrefix}/testimonials`, async (req, res) => {
    try {
      const testimonialData = schema.testimonialInsertSchema.parse({
        donorId: req.body.donorId,
        testimonialText: req.body.testimonialText,
        rating: req.body.rating,
        isApproved: false // All testimonials start unapproved
      });
      
      const testimonial = await storage.createTestimonial(testimonialData);
      
      return res.status(201).json({
        success: true,
        testimonialId: testimonial.id,
        message: "Thank you for your testimonial. It will be reviewed shortly."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error("Error submitting testimonial:", error);
      return res.status(500).json({ error: "Failed to submit testimonial" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
