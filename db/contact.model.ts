import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  dob: Date,
});

export default mongoose.model("Contact", ContactSchema);
