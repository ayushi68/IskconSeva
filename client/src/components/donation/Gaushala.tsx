import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import DonationForm from './DonationForm';
import Donor from './Donar';

// Define the type for the seva options
interface SevaOption {
  title: string;
  description: string;
  price: string;
  bgColor: string;
  category: string;
}

const Gaushala: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1519823551278-8fd1f51e3465?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1519823551278-8f1e51c3465?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // State for filtering seva options
  const [selectedCategory, setSelectedCategory] = useState<string>('All Seva');

  // Seva options data
  const sevaOptions: SevaOption[] = [
    { title: 'Gau Seva', description: 'Feed one cow for a day', price: '', bgColor: 'bg-orange-400', category: 'Daily' },
    { title: 'Gau poshan Seva(medical expenses)', description: 'Provide grass for one cow for a day', price: '', bgColor: 'bg-orange-400', category: 'Daily' },
    { title: 'Green grass for all cows for a day', description: 'Provide green grass for all cows for a day', price: '', bgColor: 'bg-orange-400', category: 'Daily' },
    { title: 'Gau Puja', description: 'Provide fodder for all cows for a day', price: '', bgColor: 'bg-orange-400', category: 'Daily' },
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
    <div className="min-h-screen font-poppins bg-[linear-gradient(135deg,#fef3c7_0%,#f97316_100%)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {images.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt={`Gaushala Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-all duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: 'linear' }}
          />
        ))}
        <motion.div
          className="absolute z-20 text-center w-full top-1/2 transform -translate-y-1/2 px-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-white mb-6 text-shadow-lg">
            Gopal’s Gaushala: Serve the Sacred Cow
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-semibold">
            “Namo brahmanya-devaya go-brahmana-hitaya ca” – Vishnu Purana
          </p>
          <motion.button
            className="mt-8 bg-amber-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-amber-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToDonationForm}
          >
            Support Gau Seva
          </motion.button>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImage ? 'bg-amber-400 scale-125' : 'bg-white/60'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Slogan Section */}
      <motion.section
        className="py-12 bg-gradient-to-r from-amber-500 to-orange-600 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-white">
          "Gau Seva is not charity; it is our sacred duty."
        </h2>
      </motion.section>

      {/* About Section */}
      <section ref={ref} className="py-20 px-4 md:px-16 lg:px-32 bg-[linear-gradient(135deg,#fef3c7_0%,#f97316_100%)]">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-amber-800 mb-8 text-center">
            About Gaushala Seva
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-amber-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                In Vedic tradition, cows are revered as mothers, providing nourishment through their milk, ghee, yogurt, and more. The Vishnu Purana states, “My Lord, You are the well-wisher of the cows and brahmanas.” At HKM Bhilai, our Gaushala houses 30 healthy Gir breed cows and bulls, serving Sri Sri Radha Krishna Chandra.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We are also establishing a new Gaushala on 10 acres along the Shivnath River, expanding our mission to protect and honor these sacred animals. Your support ensures their care and sustains this divine seva.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-amber-100"
            >
              <h4 className="text-xl font-bold text-amber-800 mb-4">Srila Prabhupada Says:</h4>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                “The Supreme Personality of Godhead is the prime protector of the cow. Without respecting these, one cannot realize the science of God.”<br />
                <span className="font-bold">– Srimad Bhagavatam Commentary</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Join us at HKM Bhilai to participate in Gau Seva through volunteering or donations, fulfilling our Vedic duty.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Choose Your Seva Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-amber-800 mb-4 text-center">
          Choose Your Seva
        </h3>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Select from the various seva options to support our sacred cows & sustain our Gaushala
        </p>
        {/* Tabs for filtering */}
        <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
          {['All Seva'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Grid of Seva Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                className="mt-4 bg-amber-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-amber-700 transition duration-300"
                onClick={scrollToDonationForm}
              >
                Sponsor Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-amber-600 text-white">
        <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-center mb-12">Our Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 lg:px-32">
          {[
            { number: '30+', label: 'Cows & Bulls Cared For' },
            { number: '10 Acres', label: 'New Gaushala Expansion' },
            { number: '100%', label: 'Devotion in Every Act' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-amber-800 mb-12 text-center">
          Voices of Our Community
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: 'Gopal Das',
              quote: 'Serving the cows at HKM Bhilai’s Gaushala has deepened my connection with Lord Krishna. It’s a divine experience.',
            },
            {
              name: 'Lakshmi Devi',
              quote: 'Donating to Gau Seva feels like a sacred offering to Mother Cow and Lord Krishna. I’m grateful to contribute.',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-amber-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-amber-800 font-bold">– {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 md:px-16 lg:px-32 bg-[linear-gradient(135deg,#fef3c7_0%,#f97316_100%)]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Donor />
        </motion.div>
      </section>

      {/* Donation and Content Section */}
      <div className="py-20 px-4 md:px-16 lg:px-32 bg-[linear-gradient(135deg,#fef3c7_0%,#f97316_100%)]">
        <div className="max-w-4xl mx-auto">
          {/* Motivational Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-amber-800 mb-6 text-center">
              Join Our Sacred Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
              Your support for Gau Seva at HKM Bhilai helps us care for our sacred cows, ensuring their well-being and honoring Lord Krishna’s teachings. Every contribution protects Mother Cow and spreads spiritual joy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              Be a part of this divine duty. Your generosity sustains our Gaushala and transforms lives through seva.
            </p>
            <div className="text-center">
              <motion.button
                className="bg-amber-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-amber-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToDonationForm}
              >
                Support Now
              </motion.button>
            </div>
          </motion.div>

          {/* Donation Form */}
          <motion.div
            id="donation-form"
            className="md:sticky md:top-[100px] bg-white p-8 rounded-2xl shadow-2xl border-2 border-amber-300 w-full mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-['Playfair_Display'] font-bold text-amber-800 mb-6 text-center">
              Gau Seva
            </h3>
            <DonationForm preselectedCategoryId="Gaushala-Seva"/>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      {/* <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-amber-800 mb-8 text-center">
          Experience Gau Seva
        </h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Gau Seva at HKM Bhilai"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-lg text-gray-600 mt-4 text-center">
            Watch how your contributions nurture our sacred cows and uplift our community.
          </p>
        </motion.div>
      </section> */}

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 bg-amber-600 text-white p-4 rounded-full shadow-xl cursor-pointer z-50"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToDonationForm}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Gaushala;