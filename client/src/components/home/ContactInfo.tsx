import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactInfo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // In a real app, you'd send this data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setIsSubmitting(false);
      reset();
    }, 1000);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 text-white">
              <h2 className="font-poppins text-2xl font-bold mb-4">Contact For Donations</h2>
              <p className="mb-6">For any inquiries regarding donations or to discuss customized seva options, please reach out to us.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-secondary mr-3 mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary mr-3 mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>donations@hkmraipur-bhilai.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-secondary mr-3 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>ISKCON Temple, Raipur-Bhilai, Chhattisgarh, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white p-8">
              <h3 className="font-poppins text-xl font-bold text-primary mb-4">Have Questions?</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 space-y-2">
                  <Label htmlFor="contactName">Name</Label>
                  <Input 
                    id="contactName" 
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="mb-4 space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input 
                    id="contactEmail" 
                    type="email" 
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="mb-4 space-y-2">
                  <Label htmlFor="contactMessage">Message</Label>
                  <Textarea 
                    id="contactMessage" 
                    rows={3} 
                    {...register("message")}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-secondary hover:bg-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
