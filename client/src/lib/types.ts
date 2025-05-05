// Seva Category type
export interface SevaCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  createdAt: string;
  sevaOptions?: SevaOption[];
}

// Seva Option type
export interface SevaOption {
  id: number;
  name: string;
  description: string | null;
  categoryId: number;
  createdAt: string;
  amounts?: SevaAmount[];
  category?: SevaCategory;
}

// Seva Amount type
export interface SevaAmount {
  id: number;
  sevaOptionId: number;
  amount: string;
  isPopular: boolean;
  createdAt: string;
}

// Donor type
export interface Donor {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  address: string | null;
  city: string | null;
  pincode: string | null;
  panCard: string | null;
  createdAt: string;
}

// Donation type
export interface Donation {
  id: number;
  donorId: number;
  sevaOptionId: number;
  amount: string;
  message: string | null;
  paymentMethod: string;
  paymentStatus: string;
  transactionId: string | null;
  showPublicly: boolean;
  createdAt: string;
  donor?: Donor;
  sevaOption?: SevaOption;
}

// Testimonial type
export interface Testimonial {
  id: number;
  donorId: number;
  testimonialText: string;
  rating: number;
  isApproved: boolean;
  createdAt: string;
  donor?: Donor;
}

// Forms
export interface DonationFormData {
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  pincode?: string;
  panCard?: string;
  message?: string;
  paymentMethod: string;
  sevaOptionId: number;
  amount: string;
  showPublicly: boolean;
  termsAgree: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
