import mongoose, { Schema, Document } from "mongoose";

// Gopal Form Model
interface IGopalForm extends Document {
  name: string;
  gender: string;
  contact: string;
  dob: string;
  classGroup: string;
  schoolName: string;
  address: string;
  center: string;
  bloodGroup: string;
  guardianName: string;
  guardianOccupation?: string;
  guardianContact: string;
  guardianEmail: string;
  referralSource: string;
  issues: string;
  joiningDate: string;
  reason: string;
  regTxnId: string;
  regReceiptNo?: string;
  transTxnId?: string;
  transReceiptNo?: string;
  regTxnFile: { data: Buffer; contentType: string };
  transTxnFile?: { data: Buffer; contentType: string };
}

const GopalFormSchema: Schema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    gender: { type: String, required: [true, "Gender is required"] },
    contact: { type: String, required: [true, "Contact is required"] },
    dob: { type: String, required: [true, "Date of birth is required"] },
    classGroup: { type: String, required: [true, "Class group is required"] },
    schoolName: { type: String, required: [true, "School name is required"] },
    address: { type: String, required: [true, "Address is required"] },
    center: { type: String, required: [true, "Center is required"] },
    bloodGroup: { type: String, required: [true, "Blood group is required"] },
    guardianName: { type: String, required: [true, "Guardian name is required"] },
    guardianOccupation: { type: String },
    guardianContact: { type: String, required: [true, "Guardian contact is required"] },
    guardianEmail: { type: String, required: [true, "Guardian email is required"] },
    referralSource: { type: String, required: [true, "Referral source is required"] },
    issues: { type: String, required: [true, "Issues field is required"] },
    joiningDate: { type: String, required: [true, "Joining date is required"] },
    reason: { type: String, required: [true, "Reason is required"] },
    regTxnId: { type: String, required: [true, "Registration transaction ID is required"] },
    regReceiptNo: { type: String },
    transTxnId: { type: String },
    transReceiptNo: { type: String },
    regTxnFile: {
      data: { type: Buffer, required: [true, "Registration transaction file is required"] },
      contentType: { type: String, required: [true, "File content type is required"] },
    },
    transTxnFile: {
      data: { type: Buffer },
      contentType: { type: String },
    },
  },
  { timestamps: true }
);

// Cultural Form Model
interface ICulturalForm extends Document {
  registrationId: string;
  childName: string;
  dob: string;
  gender: string;
  classGroup?: string;
  schoolName: string;
  GuardianName?: string;
  GuardianPhone?: string;
  GuardianOccupation?: string;
  address?: string;
  landline?: string;
  mobile: string;
  email?: string;
  referralSource?: string;
  attendedBefore?: string;
  isClubMember?: string;
  issues?: string;
  module: string;
  regFeeMethod?: string;
  transportFeeArea?: string;
  acceptTerms: boolean;
}

const CulturalFormSchema: Schema = new Schema(
  {
    registrationId: { type: String, required: [true, "Registration ID is required"], unique: true },
    childName: { type: String, required: [true, "Child's name is required"] },
    dob: { type: String, required: [true, "Date of birth is required"] },
    gender: { type: String, required: [true, "Gender is required"] },
    classGroup: { type: String },
    schoolName: { type: String, required: [true, "School name is required"] },
    GuardianName: { type: String },
    GuardianPhone: { type: String },
    GuardianOccupation: { type: String },
    address: { type: String },
    landline: { type: String },
    mobile: { type: String, required: [true, "Mobile number is required"] },
    email: { type: String, match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"] },
    referralSource: { type: String },
    attendedBefore: { type: String },
    isClubMember: { type: String },
    issues: { type: String },
    module: { type: String, required: [true, "Module is required"] },
    regFeeMethod: { type: String },
    transportFeeArea: { type: String },
    acceptTerms: { type: Boolean, required: [true, "You must accept the terms and conditions"] },
  },
  { timestamps: true, collection: "culturalforms" }
);

// Heritage Form Model
interface IHeritageForm extends Document {
  registrationId: string;
  name: string;
  gender: string;
  dob: string;
  category: string;
  schoolName: string;
  customSchoolName?: string;
  address: string;
  contactNumber: string;
  email: string;
  guardianName: string;
  guardianContactNumber: string;
  activities: string[];
  regTxnId: string;
}

const HeritageFormSchema: Schema = new Schema(
  {
    registrationId: { type: String, required: [true, "Registration ID is required"], unique: true },
    name: { type: String, required: [true, "Name is required"] },
    gender: { type: String, required: [true, "Gender is required"] },
    dob: { type: String, required: [true, "Date of birth is required"] },
    category: { type: String, required: [true, "Category is required"] },
    schoolName: { type: String, required: [true, "School name is required"] },
    customSchoolName: { type: String },
    address: { type: String, required: [true, "Address is required"] },
    contactNumber: { type: String, required: [true, "Contact number is required"] },
    email: { type: String, required: [true, "Email is required"], match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"] },
    guardianName: { type: String, required: [true, "Guardian name is required"] },
    guardianContactNumber: { type: String, required: [true, "Guardian contact number is required"] },
    activities: { type: [String], required: [true, "At least one activity is required"] },
    regTxnId: { type: String, required: [true, "Registration transaction ID is required"] },
  },
  { timestamps: true, collection: "heritageforms" }
);

// Folkform Model
export interface IFolkForm extends Document {
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
  dob: Date;
  location: string;
}

const FolkFormSchema: Schema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    phone: { type: String, required: [true, "Phone is required"] },
    whatsapp: { type: String, required: [true, "WhatsApp number is required"] },
    email: { type: String, required: [true, "Email is required"], match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"] },
    gender: { type: String, required: [true, "Gender is required"] },
    course: { type: String, required: [true, "Course is required"] },
    occupation: { type: String, required: [true, "Occupation is required"] },
    qualification: { type: String, required: [true, "Qualification is required"] },
    message: { type: String },
    academicQual1: { type: String },
    academicQual2: { type: String },
    dob: { type: Date, required: [true, "Date of birth is required"] },
    location: { type: String, required: [true, "Location is required"] },
  },
  { timestamps: true, collection: "folkforms" }
);

// Export all models
export const GopalForm = mongoose.model<IGopalForm>("GopalForm", GopalFormSchema);
export const CulturalForm = mongoose.model<ICulturalForm>("CulturalForm", CulturalFormSchema);
export const HeritageForm = mongoose.model<IHeritageForm>("HeritageForm", HeritageFormSchema);
export const FolkForm = mongoose.model<IFolkForm>("FolkForm", FolkFormSchema);