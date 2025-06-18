import mongoose, { Schema, Document } from "mongoose";

// Define the IDonation interface
export interface IDonation extends Document {
  firstName: string;
  email: string;
  phoneNumber?: string;
  donationCategory: string;
  subCategory?: string;
  superSubCategory?: string;
  customAmount: string;
  message?: string;
  receiptNeeded: boolean;
  paymentMethod: "credit_card" | "paypal" | "bank_transfer" | "upi";
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the Donation schema
const DonationSchema: Schema = new Schema(
  {
    firstName: { type: String, required: [true, "First name is required"] },
    email: { type: String, required: [true, "Email is required"], match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"] },
    phoneNumber: { type: String },
    donationCategory: { type: String, required: [true, "Donation category is required"] },
    subCategory: { type: String },
    superSubCategory: { type: String },
    customAmount: { type: String, required: [true, "Custom amount is required"] },
    message: { type: String },
    receiptNeeded: { type: Boolean, default: false },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "bank_transfer", "upi"],
      required: [true, "Payment method is required"],
    },
    razorpay_payment_id: { type: String, required: [true, "Razorpay payment ID is required"] },
    razorpay_order_id: { type: String, required: [true, "Razorpay order ID is required"] },
    razorpay_signature: { type: String, required: [true, "Razorpay signature is required"] },
    amount: { type: Number, required: [true, "Amount is required"] },
  },
  { timestamps: true, collection: "donations" }
);

// Prevent model overwrite by checking if the model already exists
const Donation = mongoose.models.Donation || mongoose.model<IDonation>("Donation", DonationSchema);

export default Donation;