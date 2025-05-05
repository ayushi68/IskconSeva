import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSevaCategories = () => {
    const element = document.getElementById('seva-categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-primary py-16 md:py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604824376542-50e9e4c9f833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-poppins text-white text-3xl md:text-4xl font-bold mb-6">Offer Seva / Donation</h2>
          <div className="bg-white/90 p-6 md:p-8 rounded-lg shadow-lg">
            <p className="font-medium text-xl text-primary mb-4">No amount is insignificant, everything helps!</p>
            <p className="text-lg text-[hsl(var(--gold))] font-medium italic mb-2">
              yajṣa-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat<br />
              yajṣo dānaṁ tapaś caiva pāvanāni manīṣiṇām
            </p>
            <p className="text-gray-600 mb-2">- Bhagavad Gita 18.5</p>
            <p className="text-gray-800 mb-4">
              Acts of sacrifice, charity and penance are not to be given up; they must be
              performed. Indeed, sacrifice, charity and penance purify even the great souls.
            </p>
            <Button 
              onClick={scrollToSevaCategories}
              className="bg-secondary hover:bg-primary text-white mt-2"
            >
              Explore Sevas <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
