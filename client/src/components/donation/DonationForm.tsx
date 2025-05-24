import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { donationCategories, DonationCategory, SubCategory, SuperSubCategory } from "@/lib/donationdata";
import { motion } from "framer-motion";
import axios from 'axios';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  dob: z.string().refine(val => {
    const date = new Date(val);
    return !isNaN(date.getTime()) && date < new Date();
  }, { message: "Please enter a valid date of birth" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.string().optional(),
  donationCategory: z.string(),
  subCategory: z.string().optional(),
  superSubCategory: z.string().optional(),
  customAmount: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid amount",
  }),
  message: z.string().optional(),
  receiptNeeded: z.boolean().default(false),
  paymentMethod: z.enum(["credit_card", "paypal", "bank_transfer", "upi"]),
});

type FormValues = z.infer<typeof formSchema>;

const DonationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<DonationCategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);
  const [selectedSuperSub, setSelectedSuperSub] = useState<SuperSubCategory | null>(null);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [superSubCategories, setSuperSubCategories] = useState<SuperSubCategory[]>([]);
  const [predefinedAmounts, setPredefinedAmounts] = useState<number[]>([1100, 2100, 5100, 11000]);
  
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      dob: "",
      email: "",
      phoneNumber: "",
      donationCategory: "",
      subCategory: "",
      superSubCategory: "",
      customAmount: "",
      message: "",
      receiptNeeded: false,
      paymentMethod: "credit_card",
    },
  });

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (amount: number, formData: FormValues) => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      toast({
        title: "Payment Error",
        description: "Failed to load payment processor. Please try again.",
        variant: "destructive",
      });
      return;
    }

    try {
      // In a real app, you would call your backend to create an order
      // This is a mock implementation - replace with actual API call
      const orderResponse = {
        data: {
          order: {
            id: 'order_mock_' + Math.random().toString(36).substring(2, 9),
            amount: amount * 100, // Razorpay expects amount in paise
            currency: 'INR'
          }
        }
      };

      const options = {
        key: 'rzp_live_EdsZTyd9tKGyHF', // Your Razorpay key
        amount: orderResponse.data.order.amount,
        currency: orderResponse.data.order.currency,
        name: 'Spiritual Organization',
        description: `Donation for ${formData.donationCategory}`,
        order_id: orderResponse.data.order.id,
        handler: async function (response: any) {
          // On successful payment
          try {
            const donationPayload = {
              ...formData,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              amount: amount,
            };

            // Save donation to your database
            await apiRequest("POST", "/api/donations", donationPayload);

            toast({
              title: "Donation Successful!",
              description: "Thank you for your generous contribution!",
            });

            // Reset form
            form.reset();
            setSelectedCategory(null);
            setSelectedSubCategory(null);
            setSelectedSuperSub(null);
            setSubCategories([]);
            setSuperSubCategories([]);
            setPredefinedAmounts([1100, 2100, 5100, 11000]);
          } catch (error) {
            console.error("Error saving donation:", error);
            toast({
              title: "Donation Record Error",
              description: "Payment was successful but we encountered an issue recording your donation. Please contact support.",
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: formData.firstName,
          email: formData.email,
          contact: formData.phoneNumber || '',
        },
        theme: {
          color: '#0F172A',
        },
        modal: {
          ondismiss: function() {
            toast({
              title: "Payment Cancelled",
              description: "You cancelled the payment process.",
              variant: "default",
            });
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Update subCategories when main category changes
  useEffect(() => {
    const categoryId = form.getValues().donationCategory;
    if (categoryId) {
      const category = donationCategories.find(cat => cat.id === categoryId);
      if (category) {
        setSelectedCategory(category);
        setSubCategories(category.subCategories ?? []);
        // Reset subcategory and super subcategory when main category changes
        form.setValue("subCategory", "");
        form.setValue("superSubCategory", "");
        setSelectedSubCategory(null);
        setSelectedSuperSub(null);
      }
    } else {
      setSubCategories([]);
      setSuperSubCategories([]);
    }
  }, [form.watch("donationCategory")]);

  // Update superSubCategories when subcategory changes
  useEffect(() => {
    const subCategoryId = form.getValues().subCategory;
    if (subCategoryId && selectedCategory) {
      const subCategory = selectedCategory.subCategories?.find(sub => sub.id === subCategoryId);
      if (subCategory) {
        setSelectedSubCategory(subCategory);

        // Reset super subcategory-related fields
        form.setValue("superSubCategory", "");
        setSelectedSuperSub(null);

        if (subCategory.superSubCategories?.length) {
          setSuperSubCategories(subCategory.superSubCategories);
          setPredefinedAmounts([]);
        } else {
          setSuperSubCategories([]);
          setPredefinedAmounts(subCategory.amounts ?? []);
        }

        // Clear custom amount field
        form.setValue("customAmount", "");
      }
    } else {
      setSuperSubCategories([]);
      setPredefinedAmounts([]);
    }
  }, [form.watch("subCategory"), selectedCategory]);

  // Update predefined amounts when super subcategory changes
  useEffect(() => {
    const superSubId = form.getValues().superSubCategory;
    if (superSubId && selectedSubCategory) {
      const superSub = selectedSubCategory.superSubCategories?.find(ss => ss.id === superSubId);
      if (superSub) {
        setSelectedSuperSub(superSub);
        setPredefinedAmounts(superSub.amounts ?? []);
        form.setValue("customAmount", "");
      }
    }
  }, [form.watch("superSubCategory"), selectedSubCategory]);

  const setAmount = (amount: string) => {
    form.setValue("customAmount", amount);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const amount = parseInt(data.customAmount || "0");
    if (!amount || amount < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await handlePayment(amount, data);
    } catch (error) {
      console.error("Donation submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-[#f8f5f2] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Make Your Contribution
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-secondary mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            ></motion.div>
            <motion.p 
              className="text-neutral-dark text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Your generosity helps sustain our spiritual and humanitarian missions.
            </motion.p>
          </div>

          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 space-y-8 border border-neutral-medium"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                {/* Section Title Animation */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">👤 Personal Information</h3>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                  <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} className="w-full px-4 py-3 rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              {...field} 
                              className="w-full px-4 py-3 rounded-lg"
                              max={new Date().toISOString().split('T')[0]} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} className="w-full px-4 py-3 rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} className="w-full px-4 py-3 rounded-lg" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </motion.div>

                <div className="space-y-4">
                  {/* Category, SubCategory, SuperSubCategory */}
                  <FormField
                    control={form.control}
                    name="donationCategory"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Select Donation Category</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a donation category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {donationCategories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {subCategories.length > 0 && (
                    <FormField
                      control={form.control}
                      name="subCategory"
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel>Select Sub-Category</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a sub-category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {subCategories.map((subCategory) => (
                                <SelectItem key={subCategory.id} value={subCategory.id}>
                                  {subCategory.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {superSubCategories.length > 0 && (
                    <FormField
                      control={form.control}
                      name="superSubCategory"
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel>Select Specific Donation Option</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a specific donation option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {superSubCategories.map((superSub) => (
                                <SelectItem key={superSub.id} value={superSub.id}>
                                  {superSub.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {selectedSuperSub && (
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-primary mb-2">{selectedSuperSub.title}</h4>
                      <p className="text-neutral-dark text-sm">{selectedSuperSub.description}</p>
                    </div>
                  )}

                  <div className="mt-6">
                    <FormLabel>Donation Amount</FormLabel>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 mt-2">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant="outline"
                          onClick={() => setAmount(amount.toString())}
                          className={`px-4 py-3 rounded-lg hover:border-primary hover:bg-primary/5 ${
                            form.getValues().customAmount === amount.toString()
                              ? "bg-primary/10 border-primary"
                              : ""
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <FormField
                      control={form.control}
                      name="customAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-dark">₹</span>
                              <Input 
                                type="text" 
                                placeholder="Custom amount" 
                                className="w-full pl-8 pr-4 py-3 rounded-lg" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mt-6 mb-6">💳 Payment Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Payment Method</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                          >
                            <div className="flex items-center p-3 bg-white rounded-lg border border-neutral-medium cursor-pointer hover:border-primary transition-all">
                              <RadioGroupItem value="credit_card" id="credit_card" className="mr-3" />
                              <label htmlFor="credit_card" className="flex items-center cursor-pointer">
                                <i className="ri-bank-card-line text-xl mr-2 text-primary"></i>
                                Credit/Debit Card
                              </label>
                            </div>

                            <div className="flex items-center p-3 bg-white rounded-lg border border-neutral-medium cursor-pointer hover:border-primary transition-all">
                              <RadioGroupItem value="paypal" id="paypal" className="mr-3" />
                              <label htmlFor="paypal" className="flex items-center cursor-pointer">
                                <i className="ri-paypal-line text-xl mr-2 text-primary"></i>
                                PayPal
                              </label>
                            </div>

                            <div className="flex items-center p-3 bg-white rounded-lg border border-neutral-medium cursor-pointer hover:border-primary transition-all">
                              <RadioGroupItem value="bank_transfer" id="bank_transfer" className="mr-3" />
                              <label htmlFor="bank_transfer" className="flex items-center cursor-pointer">
                                <i className="ri-bank-line text-xl mr-2 text-primary"></i>
                                Bank Transfer
                              </label>
                            </div>

                            <div className="flex items-center p-3 bg-white rounded-lg border border-neutral-medium cursor-pointer hover:border-primary transition-all">
                              <RadioGroupItem value="upi" id="upi" className="mr-3" />
                              <label htmlFor="upi" className="flex items-center cursor-pointer">
                                <i className="ri-smartphone-line text-xl mr-2 text-primary"></i>
                                UPI Payment
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mt-6 mb-6">📝 Additional Info</h3>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter any additional message or prayer request" 
                            className="w-full px-4 py-3 rounded-lg" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <p>For more details, see our <a href="/home/terms-and-conditions" className="text-primary underline hover:text-primary-dark">Terms & Conditions</a>.</p>

                  <FormField
                    control={form.control}
                    name="receiptNeeded"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>I would like to receive Mahaprasad</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-center pt-6"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg transition-transform hover:scale-105"
                  >
                    {isSubmitting ? "Processing..." : "Complete Donation"}
                  </Button>
                  <p className="text-sm text-neutral-dark mt-4">
                    Your information is secure and encrypted. We never store your payment details.
                  </p>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationForm;