import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DonationForm from '../donation/DonationForm';

// Define the type for the seva options
interface SevaOption {
  title: string;
  description: string;
  price: string;
  bgColor: string;
  category: string;
}

const Gyaandaan: React.FC = () => {
  // State for filtering seva options
  const [selectedCategory, setSelectedCategory] = useState<string>('All Seva');

  // Seva options data (consolidated duplicates)
  const sevaOptions: SevaOption[] = [
    { 
      title: 'Bhagavad Gita Prachara - English', 
      description: 'Sponsor the distribution of Bhagavad Gita in English (1, 11, 21, 51, or 108 books)', 
      price: '', 
      bgColor: 'bg-indigo-500', 
      category: 'Bhagavad Gita Prachara' 
    },
    { 
      title: 'Bhagavad Gita Prachara - Hindi', 
      description: 'Sponsor the distribution of Bhagavad Gita in Hindi (1, 11, 21, 51, or 108 books)', 
      price: '', 
      bgColor: 'bg-indigo-500', 
      category: 'Bhagavad Gita Prachara' 
    },
    { 
      title: 'Srimad Bhagavatam Prachara - 18 Volume Set (English)', 
      description: 'Sponsor the distribution of an 18-volume set of Srimad Bhagavatam in English', 
      price: '', 
      bgColor: 'bg-indigo-500', 
      category: 'Srimad Bhagavatam Prachara' 
    },
    { 
      title: 'Srimad Bhagavatam Prachara - 18 Volume Set (Hindi)', 
      description: 'Sponsor the distribution of an 18-volume set of Srimad Bhagavatam in Hindi', 
      price: '', 
      bgColor: 'bg-indigo-500', 
      category: 'Srimad Bhagavatam Prachara' 
    },
    { 
      title: 'Krishna Book Prachara - English', 
      description: 'Sponsor the distribution of Krishna Book in English (21 books in a box)', 
      price: '', 
      bgColor: 'bg-indigo-500', 
      category: 'Krishna Book Prachara' 
    },
    { 
      title: 'Krishna Book Prachara - Hindi', 
      description: 'Sponsor the distribution of Krishna Book in Hindi (21 books in a box)', 
      price: '', 
      bgColor: 'bg-indigo-500', 
      category: 'Krishna Book Prachara' 
    },
    { 
      title: 'Medium Book Set Distribution Seva', 
      description: 'Sponsor the distribution of a medium book set (11 books per box)', 
      price: '', 
      bgColor: 'bg-indigo-500', 
      category: 'Book Set Distribution' 
    },
    { 
      title: 'Small Book Set Distribution Seva', 
      description: 'Sponsor the distribution of a small book set (11 books per box)', 
      price: '', 
      bgColor: 'bg-indigo-500', 
      category: 'Book Set Distribution' 
    },
  ];

  // Filter seva options based on the selected category
  const filteredSevaOptions = selectedCategory === 'All Seva'
    ? sevaOptions
    : sevaOptions.filter((option) => option.category === selectedCategory);

  // Function to scroll to the donation form
  const scrollToDonationForm = () => {
    document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-blue-900 text-white font-sans">
      {/* Hero Section with 3D Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')] bg-cover bg-center opacity-20"></div>
        <div className="text-center z-10 transform perspective-1000 rotateY-10 scale-100 hover:scale-105 transition-transform duration-500">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Gyaandaan: Spread the Light of Krishna Consciousness
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">
            Join the mission of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada to share the timeless wisdom of Vedic texts.
          </p>
        </div>
      </section>

      {/* About Prabhupada Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8">A Fearless Warrior of Lord Sri Krishna</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="transform perspective-1000 rotateX-5 hover:rotateX-0 transition-transform duration-500">
              <p className="text-lg leading-relaxed">
                In a world submerged in darkness, one man in his seventies, surviving two massive heart attacks, carried the torch of Krishna Consciousness to the West. His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, under the guidance of his Spiritual Master, Srila Bhaktisiddhanta Saraswati Thakur, translated sacred Vedic texts into English, spreading the teachings of Sri Chaitanya worldwide.
              </p>
              <p className="mt-4 text-lg">
                With only a trunk full of books, Prabhupada transformed countless lives, bringing happiness and purpose through Krishna Consciousness. His books have touched scientists, scholars, philosophers, and philanthropists, earning global recognition.
              </p>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
                alt="Srila Prabhupada"
                className="rounded-lg shadow-lg transform group-hover:scale-105 group-hover:rotateY-10 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">A Legacy of Wisdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-800">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic font-light transform perspective-1000 rotateX-10 hover:rotateX-0 transition-transform duration-500">
            “In this modern Godless civilization, everyone is greatly suffering due to lack of the real knowledge of Krishna consciousness, and our task is very great and very important.”
            <footer className="mt-4 text-lg font-semibold">
              — Srila Prabhupada, Hawaii, 5/5/72
            </footer>
          </blockquote>
          <p className="mt-6 text-lg">
            “Book distribution is solid. Even if they do not read, simply by touching they are benefited. It is so much powerful.”
            <span className="block mt-2">— Srila Prabhupada, Honolulu, 2/2/75</span>
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">A Lasting Impact</h2>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform perspective-1000 rotateY-5 hover:rotateY-0 transition-transform duration-500">
            <p className="text-lg italic">
              “I am impressed with how much the teachings of one man and the spiritual tradition he brought impacted themselves into the lives of so many people... Srila Prabhupada is one in a thousand, maybe one in a million.”
            </p>
            <p className="mt-4 font-semibold">— Harvey Cox, Professor of Divinity, Harvard University</p>
          </div>
        </div>
      </section>

      {/* Gyaandaan Seva Options Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-4">Gyaandaan Seva Options</h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Choose a seva to support the distribution of sacred Vedic texts and spread Krishna Consciousness
          </p>
          {/* Tabs for filtering */}
          <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
            {['All Seva', 'Bhagavad Gita Prachara', 'Srimad Bhagavatam Prachara', 'Krishna Book Prachara', 'Book Set Distribution'].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Grid of Seva Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredSevaOptions.map((option, index) => (
              <motion.div
                key={index}
                className={`${option.bgColor} p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-2">{option.title}</h4>
                <p className="text-sm mb-4">{option.description}</p>
                <p className="text-lg font-semibold">{option.price}</p>
                <button
                  className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
                  onClick={scrollToDonationForm}
                >
                  Sponsor Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action and Donation Form */}
      <section id="donation-form" className="py-16 px-4 md:px-16 bg-gradient-to-b from-blue-900 to-indigo-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Be Part of the Mission</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            At HKM Bhilai, we continue Srila Prabhupada’s legacy by distributing his transformative books. Whether as a reader, distributor, or donor, you can help spread Krishna Consciousness and uplift souls from the illusion of material life. Join us today!
          </p>
          <div className="transform perspective-1000 rotateX-5 hover:rotateX-0 transition-transform duration-500">
            <DonationForm preselectedCategoryId="Gyaan-Daan-Seva"/>
          </div>
          <p className="mt-8 text-lg">
            For more details or to get involved, contact us at: <br />
            <a href="mailto:info@hkmbhilai.org" className="underline hover:text-yellow-300">info@hkmbhilai.org</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-indigo-950 text-center">
        <p className="text-lg">HKM Bhilai | Spreading Krishna Consciousness Worldwide</p>
        <p className="mt-2 text-sm">© 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Gyaandaan;