import { db } from "@db";
import * as schema from "@shared/schema";
import { eq, desc, and } from "drizzle-orm";

export const storage = {
  // Category methods
  async getAllSevaCategories() {
    return db.query.sevaCategories.findMany({
      orderBy: schema.sevaCategories.name
    });
  },

  async getSevaCategoryBySlug(slug: string) {
    return db.query.sevaCategories.findFirst({
      where: eq(schema.sevaCategories.slug, slug)
    });
  },

  // Seva Option methods
  async getSevaOptionsByCategory(categoryId: number) {
    return db.query.sevaOptions.findMany({
      where: eq(schema.sevaOptions.categoryId, categoryId),
      with: {
        amounts: true
      }
    });
  },

  async getSevaOptionById(id: number) {
    return db.query.sevaOptions.findFirst({
      where: eq(schema.sevaOptions.id, id),
      with: {
        amounts: true,
        category: true
      }
    });
  },

  // Donation methods
  async createDonor(donor: schema.DonorInsert) {
    try {
      const [newDonor] = await db.insert(schema.donors)
        .values(donor)
        .returning();
      return newDonor;
    } catch (error) {
      console.error("Error creating donor:", error);
      throw error;
    }
  },

  async createDonation(donation: schema.DonationInsert) {
    try {
      const [newDonation] = await db.insert(schema.donations)
        .values(donation)
        .returning();
      return newDonation;
    } catch (error) {
      console.error("Error creating donation:", error);
      throw error;
    }
  },

  async getRecentDonations(limit = 10) {
    try {
      return db.query.donations.findMany({
        where: eq(schema.donations.showPublicly, true),
        orderBy: desc(schema.donations.createdAt),
        limit,
        with: {
          donor: true,
          sevaOption: {
            with: {
              category: true
            }
          }
        }
      });
    } catch (error) {
      console.error("Error fetching recent donations:", error);
      throw error;
    }
  },

  // Testimonial methods
  async getApprovedTestimonials(limit = 5) {
    try {
      return db.query.testimonials.findMany({
        where: eq(schema.testimonials.isApproved, true),
        orderBy: desc(schema.testimonials.createdAt),
        limit,
        with: {
          donor: true
        }
      });
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      throw error;
    }
  },

  async createTestimonial(testimonial: schema.TestimonialInsert) {
    try {
      const [newTestimonial] = await db.insert(schema.testimonials)
        .values(testimonial)
        .returning();
      return newTestimonial;
    } catch (error) {
      console.error("Error creating testimonial:", error);
      throw error;
    }
  }
};
