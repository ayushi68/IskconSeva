import { db } from "@db";
import { ObjectId } from "mongodb";

export const storage = {
  // Category methods
  async getAllSevaCategories() {
    return db.collection("sevaCategories").find({}).sort({ name: 1 }).toArray();
  },

  async getSevaCategoryBySlug(slug: string) {
    return db.collection("sevaCategories").findOne({ slug });
  },

  // Seva Option methods
  async getSevaOptionsByCategory(categoryId: string) {
    return db.collection("sevaOptions").find({ categoryId: new ObjectId(categoryId) }).toArray();
  },

  async getSevaOptionById(id: string) {
    return db.collection("sevaOptions").findOne({ _id: new ObjectId(id) });
  },

  // Donation methods
  async createDonor(donor: any) {
    try {
      const result = await db.collection("donors").insertOne(donor);
      return { ...donor, _id: result.insertedId };
    } catch (error) {
      console.error("Error creating donor:", error);
      throw error;
    }
  },

  async createDonation(donation: any) {
    try {
      const result = await db.collection("donations").insertOne(donation);
      return { ...donation, _id: result.insertedId };
    } catch (error) {
      console.error("Error creating donation:", error);
      throw error;
    }
  },

  async getRecentDonations(limit = 10) {
    try {
      return db.collection("donations").find({ showPublicly: true }).sort({ createdAt: -1 }).limit(limit).toArray();
    } catch (error) {
      console.error("Error fetching recent donations:", error);
      throw error;
    }
  },

  // Testimonial methods
  async getApprovedTestimonials(limit = 5) {
    try {
      return db.collection("testimonials").find({ isApproved: true }).sort({ createdAt: -1 }).limit(limit).toArray();
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      throw error;
    }
  },

  async createTestimonial(testimonial: any) {
    try {
      const result = await db.collection("testimonials").insertOne(testimonial);
      return { ...testimonial, _id: result.insertedId };
    } catch (error) {
      console.error("Error creating testimonial:", error);
      throw error;
    }
  }
};
