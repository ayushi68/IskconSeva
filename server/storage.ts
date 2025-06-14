import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { log } from "./vite.js";
import Donation, { type IDonation } from "../db/Donation.model.js";
import {
  GopalForm,
  CulturalForm,
  HeritageForm,
  FolkForm,
  type IFolkForm,
} from "../db/registration.model.js";

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
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "SevaCategory",
    required: [true, "Category ID is required"],
  },
  createdAt: { type: Date, default: Date.now, required: true },
});
export const SevaOption = model("SevaOption", sevaOptionSchema, "sevaOptions");

// Seva Amounts schema
const sevaAmountSchema = new Schema({
  sevaOptionId: {
    type: Schema.Types.ObjectId,
    ref: "SevaOption",
    required: [true, "Seva option ID is required"],
  },
  amount: { type: Number, required: [true, "Amount is required"] },
  isPopular: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, required: true },
});
export const SevaAmount = model("SevaAmount", sevaAmountSchema, "sevaAmounts");

// Donors schema
const donorSchema = new Schema({
  fullName: { type: String, required: [true, "Full name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"],
  },
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
  donorId: {
    type: Schema.Types.ObjectId,
    ref: "Donor",
    required: [true, "Donor ID is required"],
  },
  testimonialText: { type: String, required: [true, "Testimonial text is required"] },
  rating: { type: Number, required: [true, "Rating is required"], min: 1, max: 5 },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, required: true },
});
export const Testimonial = model("Testimonial", testimonialSchema, "testimonials");

// MongoDB connection setup using Mongoose
export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined in .env file");
    }

    if (mongoose.connection.readyState === 1) {
      log(`MongoDB already connected to ${uri.split("?")[0]}`);
      return;
    }

    await mongoose.connect(uri, {
      connectTimeoutMS: 30000,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 2,
      retryWrites: true,
      w: "majority",
      bufferCommands: false,
    });

    log(`MongoDB connected successfully to ${uri.split("?")[0]}`);
  } catch (error) {
    log(`MongoDB connection failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    throw error;
  }
};

// Handle Mongoose connection events
mongoose.connection.on("error", (err) => {
  log(`MongoDB connection error: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  log("MongoDB disconnected");
});

mongoose.connection.on("reconnected", () => {
  log("MongoDB reconnected");
});

// Ensure connection is ready before operations
const ensureConnection = async (retryCount = 3, retryDelay = 1000): Promise<mongoose.mongo.Db> => {
  for (let i = 0; i < retryCount; i++) {
    try {
      if (mongoose.connection.readyState === 0) {
        await connectDB();
      }
      if (mongoose.connection.readyState === 1 && mongoose.connection.db) {
        log(`MongoDB connection successful, state: ${mongoose.connection.readyState}`);
        return mongoose.connection.db;
      }
      throw new Error(
        `MongoDB connection not ready: state ${mongoose.connection.readyState}, db ${
          mongoose.connection.db ? "exists" : "undefined"
        }`
      );
    } catch (error) {
      log(
        `Connection attempt ${i + 1} failed, retrying in ${retryDelay}ms: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
      if (i === retryCount - 1) {
        throw new Error(
          `Failed to connect to MongoDB after ${retryCount} attempts: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }
  throw new Error("Failed to establish MongoDB connection after retries");
};

// Save contact form using Mongoose
export async function saveContactForm(data: {
  name: string;
  mobile: string;
  email: string;
  dob: string;
  message: string;
  temple: string;
}) {
  try {
    const db = await ensureConnection();
    const result = await db.collection("contact_forms").insertOne(data);
    return result;
  } catch (error) {
    console.error("Error saving contact form:", error);
    throw error;
  }
}

// User and InsertUser interfaces (placeholder, replace with actual definitions)
export interface User {
  id: number;
  username: string;
}

export interface InsertUser {
  username: string;
}

// Storage interface
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveDonation(donation: any): Promise<IDonation>;
  getAllSevaCategories(): Promise<any[]>;
  getSevaCategoryBySlug(slug: string): Promise<any>;
  getSevaOptionsByCategory(categoryId: string): Promise<any[]>;
  getSevaOptionById(id: string): Promise<any>;
  createDonor(donor: any): Promise<any>;
  createDonation(donation: any): Promise<any>;
  getRecentDonations(limit?: number, category?: string): Promise<any[]>;
  getApprovedTestimonials(limit?: number): Promise<any[]>;
  createTestimonial(testimonial: any): Promise<any>;
  saveGopalForm(formData: any): Promise<any>;
  saveCulturalForm(formData: any): Promise<any>;
  saveHeritageForm(formData: any): Promise<any>;
  saveFolkForm(formData: IFolkFormData): Promise<IFolkForm>;
}

export interface IFolkFormData {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  gender: string;
  course: string;
  occupation: string;
  qualification: string;
  message?: string;
  academicQual1?: string;
  academicQual2?: string;
  dob: string;
  location: string;
}

export class MongoStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    try {
      const db = await ensureConnection();
      const doc = await db.collection("users").findOne({ id });
      return doc as unknown as User;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const db = await ensureConnection();
      const doc = await db.collection("users").findOne({ username });
      return doc as unknown as User;
    } catch (error) {
      console.error("Error fetching user by username:", error);
      throw error;
    }
  }

  async createUser(user: InsertUser): Promise<User> {
    try {
      const db = await ensureConnection();
      const lastUser = await db.collection("users").find().sort({ id: -1 }).limit(1).toArray();
      const nextId = lastUser[0]?.id + 1 || 1;
      const newUser: User = { ...user, id: nextId };
      await db.collection("users").insertOne(newUser);
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async saveDonation(donation: any): Promise<IDonation> {
    try {
      console.log("Saving Donation to MongoDB:", donation);
      const donationDoc = new Donation(donation);
      const savedDonation = await donationDoc.save();
      console.log("Donation saved:", savedDonation);
      return savedDonation;
    } catch (error) {
      console.error("Error saving donation:", error);
      throw error;
    }
  }

  async getAllSevaCategories() {
    try {
      const db = await ensureConnection();
      return await db.collection("sevaCategories").find({}).sort({ name: 1 }).toArray();
    } catch (error) {
      console.error("Error fetching seva categories:", error);
      throw error;
    }
  }

  async getSevaCategoryBySlug(slug: string) {
    try {
      const db = await ensureConnection();
      return await db.collection("sevaCategories").findOne({ slug });
    } catch (error) {
      console.error("Error fetching seva category by slug:", error);
      throw error;
    }
  }

  async getSevaOptionsByCategory(categoryId: string) {
    try {
      const db = await ensureConnection();
      return await db
        .collection("sevaOptions")
        .find({ categoryId: new mongoose.Types.ObjectId(categoryId) })
        .toArray();
    } catch (error) {
      console.error("Error fetching seva options by category:", error);
      throw error;
    }
  }

  async getSevaOptionById(id: string) {
    try {
      const db = await ensureConnection();
      return await db
        .collection("sevaOptions")
        .findOne({ _id: new mongoose.Types.ObjectId(id) });
    } catch (error) {
      console.error("Error fetching seva option by ID:", error);
      throw error;
    }
  }

  async createDonor(donor: any) {
    try {
      const db = await ensureConnection();
      const result = await db.collection("donors").insertOne(donor);
      return { ...donor, _id: result.insertedId };
    } catch (error) {
      console.error("Error creating donor:", error);
      throw error;
    }
  }

  async createDonation(donation: any) {
    try {
      const db = await ensureConnection();
      const result = await db.collection("donations").insertOne(donation);
      return { ...donation, _id: result.insertedId };
    } catch (error) {
      console.error("Error creating donation:", error);
      throw error;
    }
  }

  async getRecentDonations(limit: number = 10, category?: string): Promise<any[]> {
    try {
      const db = await ensureConnection();
      const query: any = { showPublicly: true };
      if (category) {
        query.donationCategory = category;
      }
      return await db
        .collection("donations")
        .find(query)
        .sort({ createdAt: -1 })
        .limit(limit)
        .project({ _id: 1, firstName: 1, amount: 1, createdAt: 1 })
        .toArray();
    } catch (error) {
      console.error("Error fetching recent donations:", error);
      throw error;
    }
  }

  async getApprovedTestimonials(limit: number = 5): Promise<any[]> {
    try {
      const db = await ensureConnection();
      return await db
        .collection("testimonials")
        .find({ isApproved: true })
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      throw error;
    }
  }

  async createTestimonial(testimonial: any) {
    try {
      const db = await ensureConnection();
      const result = await db.collection("testimonials").insertOne(testimonial);
      return { ...testimonial, _id: result.insertedId };
    } catch (error) {
      console.error("Error creating testimonial:", error);
      throw error;
    }
  }

  async saveGopalForm(formData: any): Promise<any> {
    try {
      const form = new GopalForm(formData);
      const result = await form.save();
      return result;
    } catch (error) {
      console.error("Error saving Gopal form:", error);
      throw error;
    }
  }

  async saveCulturalForm(formData: any): Promise<any> {
    try {
      console.log("Saving Cultural form to MongoDB:", formData);
      const form = new CulturalForm(formData);
      const savedForm = await form.save();
      console.log("Cultural form saved:", savedForm);
      return savedForm;
    } catch (error) {
      console.error("Error saving Cultural form:", error);
      throw error;
    }
  }

  async saveHeritageForm(formData: any): Promise<any> {
    try {
      console.log("Saving Heritage form to MongoDB:", formData);
      const form = new HeritageForm(formData);
      const savedForm = await form.save();
      console.log("Heritage form saved:", savedForm);
      return savedForm;
    } catch (error) {
      console.error("Error saving Heritage form:", error);
      throw error;
    }
  }

  async saveFolkForm(formData: IFolkFormData): Promise<IFolkForm> {
    try {
      console.log("Saving Folkform to MongoDB:", formData);
      const folkForm = new FolkForm({
        name: formData.name,
        phone: formData.phone,
        whatsapp: formData.whatsapp,
        email: formData.email,
        gender: formData.gender,
        course: formData.course,
        occupation: formData.occupation,
        qualification: formData.qualification,
        message: formData.message,
        academicQual1: formData.academicQual1,
        academicQual2: formData.academicQual2,
        dob: new Date(formData.dob),
        location: formData.location,
      });
      const savedForm = await folkForm.save();
      console.log("Folkform saved:", savedForm);
      return savedForm;
    } catch (error) {
      console.error("Error saving Folkform:", error);
      throw error;
    }
  }
}

export const storage = new MongoStorage();

// Export Donation model
export { Donation, IDonation };