import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { SevaOption, SevaAmount } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  address: z.string().optional(),
  city: z.string().optional(),
  pincode: z.string().optional(),
  panCard: z.string().optional(),
  message: z.string().optional(),
  paymentMethod: z.enum(["upi", "netbanking", "card"]),
  termsAgree: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms",
  }),
  showPublicly: z.boolean().default(true),
});

type FormData = z.infer<typeof formSchema>;

interface DonationFormProps {
  sevaOption: SevaOption;
  selectedAmount: SevaAmount;
  onClose: () => void;
}

export function DonationForm({ sevaOption, selectedAmount, onClose }: DonationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "upi",
      termsAgree: false,
      showPublicly: true,
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest('POST', '/api/donate', {
        ...data,
        sevaOptionId: sevaOption.id,
        amount: selectedAmount.amount,
      });
    },
    onSuccess: async () => {
      toast({
        title: "Donation Submitted",
        description: "Thank you for your generous contribution! Redirecting to payment...",
      });
      
      // In a real app, we would redirect to payment gateway
      setTimeout(() => {
        onClose();
      }, 2000);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to process donation: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };

  return (
    <div className="px-1 py-4">
      <h2 className="text-2xl font-bold text-primary mb-6">Make a Donation</h2>
      
      <div className="mb-6">
        <h3 className="font-poppins text-xl font-semibold text-primary mb-4">Selected Seva Information</h3>
        
        <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">{sevaOption.name}</p>
              <p className="text-secondary font-bold">{formatCurrency(selectedAmount.amount)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              {...register("fullName")}
              className={errors.fullName ? "border-red-500" : ""}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              {...register("phone")}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address")} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" {...register("city")} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode</Label>
            <Input id="pincode" {...register("pincode")} />
          </div>
        </div>
        
        <div className="mb-6 space-y-2">
          <Label htmlFor="pancard">PAN Card (Optional, for tax benefit)</Label>
          <Input id="pancard" {...register("panCard")} />
          <p className="text-xs text-gray-500">Your donation is eligible for tax exemption under 80G.</p>
        </div>
        
        <div className="mb-6 space-y-2">
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea id="message" rows={3} {...register("message")} />
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-2">Payment Method</h4>
          <RadioGroup defaultValue="upi">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="upi" id="upi" {...register("paymentMethod")} />
                <Label htmlFor="upi">UPI</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="netbanking" id="netbanking" {...register("paymentMethod")} />
                <Label htmlFor="netbanking">Net Banking</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" {...register("paymentMethod")} />
                <Label htmlFor="card">Card</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        
        <div className="flex items-start mb-2 space-x-2">
          <Checkbox id="showPublicly" {...register("showPublicly")} />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="showPublicly" className="text-sm font-normal">
              Show my name in the donors list (No personal details will be shared)
            </Label>
          </div>
        </div>
        
        <div className="flex items-start mb-6 space-x-2">
          <Checkbox 
            id="termsAgree" 
            {...register("termsAgree")} 
            className={errors.termsAgree ? "border-red-500" : ""}
          />
          <div className="grid gap-1.5 leading-none">
            <Label 
              htmlFor="termsAgree" 
              className={`text-sm font-normal ${errors.termsAgree ? "text-red-500" : ""}`}
            >
              I agree to the terms and conditions and authorize ISKCON to process my donation.
            </Label>
            {errors.termsAgree && (
              <p className="text-red-500 text-xs">{errors.termsAgree.message}</p>
            )}
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-secondary hover:bg-primary" 
          disabled={isSubmitting || mutation.isPending}
        >
          {isSubmitting || mutation.isPending ? "Processing..." : "Proceed to Payment"}
        </Button>
      </form>
    </div>
  );
}
