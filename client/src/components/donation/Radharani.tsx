import React, { useState, useEffect } from 'react';
import DonationForm from './DonationForm'; // Replace with actual donation form component path

const Radharani: React.FC = () => {
  // Carousel images (replace with actual temple-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=Radharani+Kitchen+1',
    'https://via.placeholder.com/1200x500?text=Radharani+Kitchen+2',
    'https://via.placeholder.com/1200x500?text=Radharani+Kitchen+3',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-rose-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Radharani Kitchen Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Radharani's Kitchen Seva
          </h1>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImage ? 'bg-white' : 'bg-gray-400'
              } shadow-md`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-rose-800 mb-6 text-center">
          Srimati Radharani's Divine Kitchen
        </h2>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-rose-500 pl-4 mb-4">
          “râdhikâra pakka anna vividha byañjana<br />
          parama ânande krishna korena bhojana”<br />
          <span className="text-sm">
            — Srila Bhaktivinode Thakura, Bhoga Arati
          </span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          In great ecstasy and joy, Krishna eats the rice, curried vegetables,
          sweets, and pastries cooked by Srimati Radharani. Krishna is pleased
          when He honors foodstuffs prepared by His devotees, with Srimati
          Radharani being the best among them, delighting Him with her divine
          culinary offerings.
        </p>
      </section>

      {/* Pastime Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-rose-50 to-amber-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">
          The Divine Cooking of Srimati Radharani
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Radharani once pleased Durvasa Muni with a delicious preparation of
          sweet rice. Enchanted by its nectarean taste, Durvasa Muni blessed her:
          <span className="italic">
            “Radha, may the grains You cook taste sweeter than nectar, and may
            anyone who eats them be blessed with a long life span.”
          </span>
          Thus, Mother Yasoda invited Srimati Radharani to cook for Krishna,
          nourishing Him with good health and the taste of nectar.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          The pastimes of Vrindavana reveal that Radharani never cooked a dish
          twice, showcasing her adorable skill and devotion as the best devotee.
          Every kitchen where foodstuffs are prepared for the Deities represents
          Radharani’s kitchen, and devotees seek her blessings to cook delectable
          food for Krishna.
        </p>
      </section>

      {/* Donation Call-to-Action Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">
          Join Radharani’s Kitchen Seva
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          You can be a part of this great service to the Divine Couple by donating
          to Radharani’s Kitchen Seva. Each contribution adds to the delicacies
          prepared to please Krishna, bringing manifold blessings in return. Come
          forward and join hands to be part of Srimati Radharani’s party to please
          Krishna!
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          For more details and donations, please contact:{' '}
          <a
            href="tel:+919755098615"
            className="text-rose-600 hover:underline"
          >
            +91 9755098615
          </a>
        </p>
        <button className="mt-6 px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 transform transition-transform hover:scale-105">
          Donate Now
        </button>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-amber-50 to-rose-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-rose-800 mb-6 text-center">
          Support Radharani’s Kitchen
        </h2>
        <DonationForm />
      </section>
    </div>
  );
};

export default Radharani;