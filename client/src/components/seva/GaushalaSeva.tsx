import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { SevaOption, SevaAmount, SevaCategory } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import  DonationForm  from "@/components/donation/DonationForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface GaushalaSevaProps {
  categorySlug: string;
}

export default function GaushalaSeva({ categorySlug }: GaushalaSevaProps) {
  const [selectedOption, setSelectedOption] = useState<SevaOption | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<SevaAmount | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: category, isLoading, error } = useQuery<SevaCategory>({
    queryKey: [`/api/categories/${categorySlug}`],
  });

  if (isLoading) {
    return (
      <section id="gaushala-seva" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-1 bg-secondary mr-3"></div>
            <Skeleton className="h-8 w-48" />
            <div className="w-16 h-1 bg-secondary ml-3"></div>
          </div>
          <Skeleton className="h-16 w-full max-w-4xl mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-80 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="gaushala-seva" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Gaushala Seva</h2>
          <div className="text-center text-red-500">
            Failed to load seva options. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  const handleAmountSelect = (option: SevaOption, amount: SevaAmount) => {
    setSelectedOption(option);
    setSelectedAmount(amount);
  };

  const handleDonateClick = (option: SevaOption, amount: SevaAmount) => {
    setSelectedOption(option);
    setSelectedAmount(amount);
    setIsDialogOpen(true);
  };

  const backgroundClass = categorySlug === "gaushala-seva" 
    ? "bg-[hsl(var(--deep-blue))]" 
    : "bg-[hsl(var(--spiritual-green))]";

  const title = category?.name || "Loading...";

  return (
    <section id={categorySlug} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-1 bg-secondary mr-3"></div>
          <h2 className="font-poppins text-3xl font-bold text-primary">{title}</h2>
          <div className="w-16 h-1 bg-secondary ml-3"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-center text-gray-700">
            {category?.description || "Cows are considered sacred in Vedic tradition. By supporting our Gaushala, you contribute to the protection and care of cows while receiving spiritual benefits."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category?.sevaOptions?.map((option: SevaOption) => (
            <div key={option.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className={`${backgroundClass} text-white p-3`}>
                <h3 className="font-poppins font-bold text-lg">{option.name}</h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-primary mb-2">Select Amount</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {option.amounts?.map((amount: SevaAmount) => (
                      <button
                        key={amount.id}
                        className={`amount-btn ${selectedOption?.id === option.id && selectedAmount?.id === amount.id ? 'amount-btn-active' : ''}`}
                        onClick={() => handleAmountSelect(option, amount)}
                      >
                        {formatCurrency(amount.amount)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full bg-secondary hover:bg-primary text-white"
                      onClick={() => {
                        // If no amount is selected, use the first one
                        const amountToUse = selectedOption?.id === option.id && selectedAmount
                          ? selectedAmount
                          : option.amounts?.[0];
                          
                        if (amountToUse) {
                          handleDonateClick(option, amountToUse);
                        }
                      }}
                    >
                      Donate Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    {selectedOption && selectedAmount && (
                      <DonationForm 
                        sevaOption={selectedOption} 
                        selectedAmount={selectedAmount}
                        onClose={() => setIsDialogOpen(false)}
                      />
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="inline-block text-primary hover:text-secondary font-medium underline">
            View All {title} Options
          </a>
        </div>
      </div>
    </section>
  );
}
