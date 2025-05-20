import { db } from "@db";
import { ObjectId } from "mongodb";
import { type User, type InsertUser } from "@shared/schema";

export async function saveContactForm(data: {
  name: string;
  mobile: string;
  email: string;
  dob: string;
}) {
  const collection = db.collection("contact_forms");
  const result = await collection.insertOne(data);
  return result;
}

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MongoStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const doc = await db.collection("users").findOne({ id });
    if (!doc) return undefined;

    // Convert to `unknown` first, then assert to `User`
    return doc as unknown as User;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const doc = await db.collection("users").findOne({ username });
    if (!doc) return undefined;

    return doc as unknown as User;
  }

  async createUser(user: InsertUser): Promise<User> {
    const lastUser = await db.collection("users").find().sort({ id: -1 }).limit(1).toArray();
    const nextId = lastUser[0]?.id + 1 || 1;
    const newUser: User = { ...user, id: nextId };
    await db.collection("users").insertOne(newUser);
    return newUser;
  }

  // --- Category methods ---

  async getAllSevaCategories() {
    return db.collection("sevaCategories").find({}).sort({ name: 1 }).toArray();
  }

  async getSevaCategoryBySlug(slug: string) {
    return db.collection("sevaCategories").findOne({ slug });
  }

  // --- Seva Option methods ---

  async getSevaOptionsByCategory(categoryId: string) {
    return db.collection("sevaOptions").find({ categoryId: new ObjectId(categoryId) }).toArray();
  }

  async getSevaOptionById(id: string) {
    return db.collection("sevaOptions").findOne({ _id: new ObjectId(id) });
  }

  // --- Donor / Donation methods ---

  async createDonor(donor: any) {
    try {
      const result = await db.collection("donors").insertOne(donor);
      return { ...donor, _id: result.insertedId };
    } catch (error) {
      console.error("Error creating donor:", error);
      throw error;
    }
  }

  async createDonation(donation: any) {
    try {
      const result = await db.collection("donations").insertOne(donation);
      return { ...donation, _id: result.insertedId };
    } catch (error) {
      console.error("Error creating donation:", error);
      throw error;
    }
  }

  async getRecentDonations(limit = 10) {
    try {
      return db.collection("donations").find({ showPublicly: true }).sort({ createdAt: -1 }).limit(limit).toArray();
    } catch (error) {
      console.error("Error fetching recent donations:", error);
      throw error;
    }
  }

  // --- Testimonial methods ---

  async getApprovedTestimonials(limit = 5) {
    try {
      return db.collection("testimonials").find({ isApproved: true }).sort({ createdAt: -1 }).limit(limit).toArray();
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      throw error;
    }
  }

  async createTestimonial(testimonial: any) {
    try {
      const result = await db.collection("testimonials").insertOne(testimonial);
      return { ...testimonial, _id: result.insertedId };
    } catch (error) {
      console.error("Error creating testimonial:", error);
      throw error;
    }
  }
}

// Export singleton instance
export const storage = new MongoStorage();
