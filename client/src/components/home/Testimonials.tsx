import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, StarIcon } from "lucide-react";
import { getInitials } from "@/lib/utils";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['/api/testimonials'],
  });
  
  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-2xl text-center font-bold text-primary mb-2">Donor Testimonials</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Read about the experiences of devotees who have contributed to our various sevas.
          </p>
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-72 w-full rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !testimonials || testimonials.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-2xl text-center font-bold text-primary mb-2">Donor Testimonials</h2>
          <p className="text-center text-gray-500">
            {error ? "Failed to load testimonials." : "No testimonials available at the moment."}
          </p>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[activeTestimonial];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon key={i} className={`h-5 w-5 ${i < rating ? 'text-[hsl(var(--gold))]' : 'text-gray-300'}`} />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins text-2xl text-center font-bold text-primary mb-2">Donor Testimonials</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Read about the experiences of devotees who have contributed to our various sevas.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md relative">
            <div className="absolute top-4 left-4 text-5xl text-secondary opacity-20" aria-hidden="true">
              <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarFallback className="bg-primary text-white">
                    {getInitials(currentTestimonial.donor.fullName)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-poppins font-semibold text-primary text-lg">
                    {currentTestimonial.donor.fullName}
                  </h3>
                  <p className="text-gray-600">Regular Donor since 2018</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-4">
                "{currentTestimonial.testimonialText}"
              </p>
              
              <div className="flex text-[hsl(var(--gold))] text-lg">
                {renderStars(currentTestimonial.rating)}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${activeTestimonial === index ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
