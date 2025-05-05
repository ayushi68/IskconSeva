import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Introduction() {
  const scrollToSevaCategories = () => {
    const element = document.getElementById('seva-categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-4">
            India, since centuries, is a country well known for its Vedic culture, its famous temples,
            the righteous human beings and above all the deep philosophy of Sanatana Dharma.
            By Krishna's grace, even today's society has a chance to become spiritually situated,
            while living in a material world and harmonize the broken link between human and God.
          </p>
          <p className="text-gray-700 mb-4">
            By the mercy of HDG Srila Prabhupada, the Founder Acharya of the World wide Hare
            Krishna Movement, today, in India and in many parts of the World, beautiful temples are
            being built which are bringing together people from various walks of life to Krishna
            Consciousness.
          </p>
          <p className="text-gray-700 mb-4">
            Lord Sri Krishna says in Bhagavad Gīta 9.26: "If one offers me with love and devotion
            a leaf, a flower, a fruit or water, I will accept it."
          </p>
          <p className="text-gray-700 mb-4">
            The Supreme Lord, Sri Krishna, is not in need of anything from us; but when we offer
            Him something depending on our capacity, He blesses us with everything that we need to
            progress in achieving the ultimate goal of our life.
          </p>
          
          <div className="flex justify-center mt-8">
            <Button 
              onClick={scrollToSevaCategories}
              className="bg-secondary hover:bg-primary text-white font-medium rounded-full transition duration-300 shadow-md flex items-center"
            >
              <span>Explore Seva Categories</span>
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
