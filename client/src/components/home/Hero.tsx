import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Hero() {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sevaCategoriesRef = useRef<HTMLDivElement>(null);

  const scrollToSevaCategories = () => {
    const element = document.getElementById("seva-categories");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Fetch image list from backend
  useEffect(() => {
    fetch("/api/public-images")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setImages(data);
        }
      })
      .catch((err) => console.error("Failed to fetch images:", err));
  }, []);

  // Rotate image every 5 seconds
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      {/* Rotating Background Image */}
      {images.length > 0 && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        />
      )}

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 drop-shadow-xl">
            Support Our Mission
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Join hands with us to make a difference. Your contributions help us build temples, serve communities, and spread Krishna Consciousness worldwide.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center"
            >
              Explore Sevas 
            </Button>
            <Link to="/donation">
            <Button className="bg-white text-primary px-8 py-4 text-lg font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center">
              Donate Now
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
