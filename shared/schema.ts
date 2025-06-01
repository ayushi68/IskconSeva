import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import Donation, { type IDonation } from "../db/donation.model";
import { Schema, model } from "mongoose";

// Drizzle ORM schema for PostgreSQL users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type User = {
  id: number;
  username: string;
};

export type InsertUser = Omit<User, "id">;

// Mongoose schemas for MongoDB
// Seva Category schema
const sevaCategorySchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  slug: { type: String, required: [true, "Slug is required"], unique: true },
  description: { type: String },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now, required: true },
});
export const SevaCategory = model("SevaCategory", sevaCategorySchema, "sevaCategories");

// Seva Options schema
const sevaOptionSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  description: { type: String },
  categoryId: { type: Schema.Types.ObjectId, ref: "SevaCategory", required: [true, "Category ID is required"] },
  createdAt: { type: Date, default: Date.now, required: true },
});
export const SevaOption = model("SevaOption", sevaOptionSchema, "sevaOptions");

// Seva Amounts schema
const sevaAmountSchema = new Schema({
  sevaOptionId: { type: Schema.Types.ObjectId, ref: "SevaOption", required: [true, "Seva option ID is required"] },
  amount: { type: Number, required: [true, "Amount is required"] },
  isPopular: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, required: true },
});
export const SevaAmount = model("SevaAmount", sevaAmountSchema, "sevaAmounts");

// Donors schema
const donorSchema = new Schema({
  fullName: { type: String, required: [true, "Full name is required"] },
  email: { type: String, required: [true, "Email is required"], match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"] },
  phone: { type: String, required: [true, "Phone is required"] },
  address: { type: String },
  city: { type: String },
  pincode: { type: String },
  panCard: { type: String },
  createdAt: { type: Date, default: Date.now, required: true },
});
export const Donor = model("Donor", donorSchema, "donors");

// Testimonials schema
const testimonialSchema = new Schema({
  donorId: { type: Schema.Types.ObjectId, ref: "Donor", required: [true, "Donor ID is required"] },
  testimonialText: { type: String, required: [true, "Testimonial text is required"] },
  rating: { type: Number, required: [true, "Rating is required"], min: 1, max: 5 },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, required: true },
});
export const Testimonial = model("Testimonial", testimonialSchema, "testimonials");

// Zod schemas for validation
export const donationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
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
  amount: z.number().min(1, "Amount must be greater than 0"),
});

export const testimonialInsertSchema = z.object({
  donorId: z.string().min(1, "Donor ID is required"),
  testimonialText: z.string().min(10, "Testimonial must be at least 10 characters"),
  rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
  isApproved: z.boolean().default(false),
  createdAt: z.date().optional(),
});

export const testimonialSelectSchema = testimonialInsertSchema.extend({
  _id: z.string(),
});

export const sevaCategoryInsertSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  slug: z.string().min(2, "Slug must be at least 2 characters"),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  createdAt: z.date().optional(),
});

export const sevaCategorySelectSchema = sevaCategoryInsertSchema.extend({
  _id: z.string(),
});

export const sevaOptionInsertSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().optional(),
  categoryId: z.string(),
  createdAt: z.date().optional(),
});

export const sevaOptionSelectSchema = sevaOptionInsertSchema.extend({
  _id: z.string(),
});

export const sevaAmountInsertSchema = z.object({
  sevaOptionId: z.string(),
  amount: z.number().positive("Amount must be positive"),
  isPopular: z.boolean().optional(),
  createdAt: z.date().optional(),
});

export const sevaAmountSelectSchema = sevaAmountInsertSchema.extend({
  _id: z.string(),
});

export const donorInsertSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Must provide a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  address: z.string().optional(),
  city: z.string().optional(),
  pincode: z.string().optional(),
  panCard: z.string().optional(),
  createdAt: z.date().optional(),
});

export const donorSelectSchema = donorInsertSchema.extend({
  _id: z.string(),
});

export const donationInsertSchema = z.object({
  donorId: z.string(),
  sevaOptionId: z.string(),
  amount: z.number().positive("Amount must be positive"),
  message: z.string().optional(),
  paymentMethod: z.string().min(2, "Payment method must be at least 2 characters"),
  paymentStatus: z.string().min(2, "Payment status must be at least 2 characters"),
  transactionId: z.string().optional(),
  showPublicly: z.boolean().optional(),
  createdAt: z.date().optional(),
});

export const donationSelectSchema = donationInsertSchema.extend({
  _id: z.string(),
});

// Export types
export type SevaCategoryInsert = z.infer<typeof sevaCategoryInsertSchema>;
export type SevaCategory = z.infer<typeof sevaCategorySelectSchema>;
export type SevaOptionInsert = z.infer<typeof sevaOptionInsertSchema>;
export type SevaOption = z.infer<typeof sevaOptionSelectSchema>;
export type SevaAmountInsert = z.infer<typeof sevaAmountInsertSchema>;
export type SevaAmount = z.infer<typeof sevaAmountSelectSchema>;
export type DonorInsert = z.infer<typeof donorInsertSchema>;
export type Donor = z.infer<typeof donorSelectSchema>;
export type DonationInsert = z.infer<typeof donationInsertSchema>;
export type DonationType = z.infer<typeof donationSelectSchema>;
export type TestimonialInsert = z.infer<typeof testimonialInsertSchema>;
export type Testimonial = z.infer<typeof testimonialSelectSchema>;
export type InsertUserType = z.infer<typeof insertUserSchema>;
export type UserType = typeof users.$inferSelect;

// Export the Donation model
export { Donation, IDonation };