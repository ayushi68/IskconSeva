import { Schema, model } from 'mongoose';
import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from 'zod';

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Seva Category schema - for types like Annadana, Gaushala, etc.
const sevaCategorySchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now, required: true }
});
export const SevaCategory = model('SevaCategory', sevaCategorySchema);

// Seva Options schema - for specific sevas within each category
const sevaOptionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  categoryId: { type: Schema.Types.ObjectId, ref: 'SevaCategory', required: true },
  createdAt: { type: Date, default: Date.now, required: true }
});
export const SevaOption = model('SevaOption', sevaOptionSchema);

// Seva Amounts schema - for different denomination options for each seva
const sevaAmountSchema = new Schema({
  sevaOptionId: { type: Schema.Types.ObjectId, ref: 'SevaOption', required: true },
  amount: { type: Number, required: true },
  isPopular: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, required: true }
});
export const SevaAmount = model('SevaAmount', sevaAmountSchema);

// Donors schema - for storing donor information
const donorSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  city: { type: String },
  pincode: { type: String },
  panCard: { type: String },
  createdAt: { type: Date, default: Date.now, required: true }
});
export const Donor = model('Donor', donorSchema);

// Donations schema - for tracking donations
const donationSchema = new Schema({
  donorId: { type: Schema.Types.ObjectId, ref: 'Donor', required: true },
  sevaOptionId: { type: Schema.Types.ObjectId, ref: 'SevaOption', required: true },
  amount: { type: Number, required: true },
  message: { type: String },
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, required: true },
  transactionId: { type: String },
  showPublicly: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now, required: true }
});
export const Donation = model('Donation', donationSchema);

// Testimonials schema - for donor testimonials
const testimonialSchema = new Schema({
  donorId: { type: Schema.Types.ObjectId, ref: 'Donor', required: true },
  testimonialText: { type: String, required: true },
  rating: { type: Number, required: true },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, required: true }
});
export const Testimonial = model('Testimonial', testimonialSchema);

// Schemas for validation
export const sevaCategoryInsertSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  slug: z.string().min(2, "Slug must be at least 2 characters"),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  createdAt: z.date().optional()
});
export type SevaCategoryInsert = z.infer<typeof sevaCategoryInsertSchema>;

export const sevaCategorySelectSchema = sevaCategoryInsertSchema.extend({
  _id: z.string()
});
export type SevaCategory = z.infer<typeof sevaCategorySelectSchema>;

export const sevaOptionInsertSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().optional(),
  categoryId: z.string(),
  createdAt: z.date().optional()
});
export type SevaOptionInsert = z.infer<typeof sevaOptionInsertSchema>;

export const sevaOptionSelectSchema = sevaOptionInsertSchema.extend({
  _id: z.string()
});
export type SevaOption = z.infer<typeof sevaOptionSelectSchema>;

export const sevaAmountInsertSchema = z.object({
  sevaOptionId: z.string(),
  amount: z.number().positive("Amount must be positive"),
  isPopular: z.boolean().optional(),
  createdAt: z.date().optional()
});
export type SevaAmountInsert = z.infer<typeof sevaAmountInsertSchema>;

export const sevaAmountSelectSchema = sevaAmountInsertSchema.extend({
  _id: z.string()
});
export type SevaAmount = z.infer<typeof sevaAmountSelectSchema>;

export const donorInsertSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Must provide a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  address: z.string().optional(),
  city: z.string().optional(),
  pincode: z.string().optional(),
  panCard: z.string().optional(),
  createdAt: z.date().optional()
});
export type DonorInsert = z.infer<typeof donorInsertSchema>;

export const donorSelectSchema = donorInsertSchema.extend({
  _id: z.string()
});
export type Donor = z.infer<typeof donorSelectSchema>;

export const donationInsertSchema = z.object({
  donorId: z.string(),
  sevaOptionId: z.string(),
  amount: z.number().positive("Amount must be positive"),
  message: z.string().optional(),
  paymentMethod: z.string().min(2, "Payment method must be at least 2 characters"),
  paymentStatus: z.string().min(2, "Payment status must be at least 2 characters"),
  transactionId: z.string().optional(),
  showPublicly: z.boolean().optional(),
  createdAt: z.date().optional()
});
export type DonationInsert = z.infer<typeof donationInsertSchema>;

export const donationSelectSchema = donationInsertSchema.extend({
  _id: z.string()
});
export type Donation = z.infer<typeof donationSelectSchema>;

export const testimonialInsertSchema = z.object({
  donorId: z.string(),
  testimonialText: z.string().min(10, "Testimonial must be at least 10 characters"),
  rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
  isApproved: z.boolean().optional(),
  createdAt: z.date().optional()
});
export type TestimonialInsert = z.infer<typeof testimonialInsertSchema>;

export const testimonialSelectSchema = testimonialInsertSchema.extend({
  _id: z.string()
});
export type Testimonial = z.infer<typeof testimonialSelectSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;