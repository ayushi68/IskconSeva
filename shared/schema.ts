import { pgTable, text, serial, integer, timestamp, decimal, boolean } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { relations } from 'drizzle-orm';
import { z } from 'zod';

// Seva Category table - for types like Annadana, Gaushala, etc.
export const sevaCategories = pgTable('seva_categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

// Seva Options table - for specific sevas within each category
export const sevaOptions = pgTable('seva_options', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  categoryId: integer('category_id').references(() => sevaCategories.id).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

// Seva Amounts table - for different denomination options for each seva
export const sevaAmounts = pgTable('seva_amounts', {
  id: serial('id').primaryKey(),
  sevaOptionId: integer('seva_option_id').references(() => sevaOptions.id).notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  isPopular: boolean('is_popular').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

// Donors table - for storing donor information
export const donors = pgTable('donors', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  address: text('address'),
  city: text('city'),
  pincode: text('pincode'),
  panCard: text('pan_card'),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

// Donations table - for tracking donations
export const donations = pgTable('donations', {
  id: serial('id').primaryKey(),
  donorId: integer('donor_id').references(() => donors.id).notNull(),
  sevaOptionId: integer('seva_option_id').references(() => sevaOptions.id).notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  message: text('message'),
  paymentMethod: text('payment_method').notNull(),
  paymentStatus: text('payment_status').notNull(),
  transactionId: text('transaction_id'),
  showPublicly: boolean('show_publicly').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

// Testimonials table - for donor testimonials
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  donorId: integer('donor_id').references(() => donors.id).notNull(),
  testimonialText: text('testimonial_text').notNull(),
  rating: integer('rating').notNull(),
  isApproved: boolean('is_approved').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

// Relations
export const sevaCategoriesRelations = relations(sevaCategories, ({ many }) => ({
  sevaOptions: many(sevaOptions)
}));

export const sevaOptionsRelations = relations(sevaOptions, ({ one, many }) => ({
  category: one(sevaCategories, { fields: [sevaOptions.categoryId], references: [sevaCategories.id] }),
  amounts: many(sevaAmounts),
  donations: many(donations)
}));

export const sevaAmountsRelations = relations(sevaAmounts, ({ one }) => ({
  sevaOption: one(sevaOptions, { fields: [sevaAmounts.sevaOptionId], references: [sevaOptions.id] })
}));

export const donorsRelations = relations(donors, ({ many }) => ({
  donations: many(donations),
  testimonials: many(testimonials)
}));

export const donationsRelations = relations(donations, ({ one }) => ({
  donor: one(donors, { fields: [donations.donorId], references: [donors.id] }),
  sevaOption: one(sevaOptions, { fields: [donations.sevaOptionId], references: [sevaOptions.id] })
}));

export const testimonialsRelations = relations(testimonials, ({ one }) => ({
  donor: one(donors, { fields: [testimonials.donorId], references: [donors.id] })
}));

// Schemas for validation
export const sevaCategoryInsertSchema = createInsertSchema(sevaCategories, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  slug: (schema) => schema.min(2, "Slug must be at least 2 characters")
});
export type SevaCategoryInsert = z.infer<typeof sevaCategoryInsertSchema>;
export const sevaCategorySelectSchema = createSelectSchema(sevaCategories);
export type SevaCategory = z.infer<typeof sevaCategorySelectSchema>;

export const sevaOptionInsertSchema = createInsertSchema(sevaOptions, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters")
});
export type SevaOptionInsert = z.infer<typeof sevaOptionInsertSchema>;
export const sevaOptionSelectSchema = createSelectSchema(sevaOptions);
export type SevaOption = z.infer<typeof sevaOptionSelectSchema>;

export const sevaAmountInsertSchema = createInsertSchema(sevaAmounts, {
  amount: (schema) => schema.refine((val) => parseFloat(val) > 0, {
    message: "Amount must be positive"
  })
});
export type SevaAmountInsert = z.infer<typeof sevaAmountInsertSchema>;
export const sevaAmountSelectSchema = createSelectSchema(sevaAmounts);
export type SevaAmount = z.infer<typeof sevaAmountSelectSchema>;

export const donorInsertSchema = createInsertSchema(donors, {
  fullName: (schema) => schema.min(2, "Full name must be at least 2 characters"),
  email: (schema) => schema.email("Must provide a valid email"),
  phone: (schema) => schema.min(10, "Phone number must be at least 10 characters")
});
export type DonorInsert = z.infer<typeof donorInsertSchema>;
export const donorSelectSchema = createSelectSchema(donors);
export type Donor = z.infer<typeof donorSelectSchema>;

export const donationInsertSchema = createInsertSchema(donations, {
  amount: (schema) => schema.refine((val) => parseFloat(val) > 0, {
    message: "Amount must be positive"
  }),
  paymentMethod: (schema) => schema.min(2, "Payment method must be at least 2 characters"),
  paymentStatus: (schema) => schema.min(2, "Payment status must be at least 2 characters")
});
export type DonationInsert = z.infer<typeof donationInsertSchema>;
export const donationSelectSchema = createSelectSchema(donations);
export type Donation = z.infer<typeof donationSelectSchema>;

export const testimonialInsertSchema = createInsertSchema(testimonials, {
  testimonialText: (schema) => schema.min(10, "Testimonial must be at least 10 characters"),
  rating: (schema) => schema.min(1, "Rating must be at least 1").max(5, "Rating must be at most 5")
});
export type TestimonialInsert = z.infer<typeof testimonialInsertSchema>;
export const testimonialSelectSchema = createSelectSchema(testimonials);
export type Testimonial = z.infer<typeof testimonialSelectSchema>;
