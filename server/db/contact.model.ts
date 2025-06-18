import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  dob: Date,
  message: String,
  temple: String, 
});

export default mongoose.model("Contact", ContactSchema);
