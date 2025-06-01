import mongoose, { Schema, Document, Model } from "mongoose";

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
  createdAt: Date;
  updatedAt: Date;
}

const DonationSchema: Schema<IDonation> = new Schema(
  {
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    donationCategory: { type: String, required: true },
    subCategory: { type: String, required: false },
    superSubCategory: { type: String, required: false },
    customAmount: { type: String, required: true },
    message: { type: String, required: false },
    receiptNeeded: { type: Boolean, default: false, required: true },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "bank_transfer", "upi"],
      required: true,
    },
    razorpay_payment_id: { type: String, required: true },
    razorpay_order_id: { type: String, required: true },
    razorpay_signature: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Check if the model already exists (avoids OverwriteModelError)
const Donation: Model<IDonation> =
  mongoose.models.Donation || mongoose.model<IDonation>("Donation", DonationSchema);

export default Donation;
