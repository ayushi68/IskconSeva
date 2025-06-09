import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import DonationForm from './DonationForm';
import Donar from './Donar';

// Define the type for the seva options
interface SevaOption {
  title: string;
  description: string;
  price: string;
  bgColor: string;
  category: string;
}

const Annadana: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1556911220-bff31c4c38eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
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

  // Seva options data based on the image
  const sevaOptions: SevaOption[] = [
    { title: ' Khichdi Seva', description: 'Nutritious prasadam for one day', price: '₹551', bgColor: 'bg-orange-400', category: 'Daily' },
    { title: 'Sunday Feast Morning', description: 'Special morning prasadam seva', price: '₹1,108', bgColor: 'bg-blue-500', category: 'Weekly' },
    { title: 'Sunday Feast Evening', description: 'Special evening prasadam seva', price: '₹1,108', bgColor: 'bg-blue-500', category: 'Weekly' },
    { title: 'Sunday Full Day Seva', description: 'Complete prasadam seva for a Sunday', price: '₹2,216', bgColor: 'bg-blue-500', category: 'Weekly' },
    { title: 'Feast Prasadam Seva for Festival', description: 'Special celebration prasadam', price: '₹2,108', bgColor: 'bg-purple-500', category: 'Festival' },
    { title: 'Annadana Serve on my special day', description: 'One time major festival seva', price: '₹11,108', bgColor: 'bg-purple-500', category: 'Festival' },
  ];

  // Filter seva options based on the selected category
  const filteredSevaOptions = selectedCategory === 'All Seva'
    ? sevaOptions
    : sevaOptions.filter((option) => option.category === selectedCategory);

  return (
    <div className="min-h-screen font-poppins bg-[linear-gradient(135deg,#fef3c7_0%,#f97316_100%)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Annadana Slide ${index + 1}`}
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
            Annadana Seva: Feed the Body, Nourish the Soul
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-semibold">
            “The giver of food is the giver of life.” – Lord Krishna, Bhavishya Purana
          </p>
          <motion.button
            className="mt-8 bg-amber-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-amber-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Offer Seva
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
          "Share a Meal, Spread Love – Annadana Seva"
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
            About Annadana Seva
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-amber-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Annadana, the sacred act of offering food, is deeply rooted in Vedic scriptures. Lord Krishna emphasizes in the Bhavishya Purana, “The world, both animate and inanimate, is sustained by food. The giver of food is the giver of life.” At HKM Bhilai, we distribute Krishna Prasadam to nourish both body and soul, fostering Krishna Consciousness.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Your support ensures that no one in our community goes hungry, embodying the Vedic principle of compassion and service. Join us in this divine mission to share the mercy of Lord Krishna.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-amber-100"
            >
              <h4 className="text-xl font-bold text-amber-800 mb-4">Srila Prabhupada Says:</h4>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                “If there is any temple in any neighborhood, nobody in that neighborhood should remain hungry.”<br />
                <span className="font-bold">– Conversation, April 22, 1972, Tokyo</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Visit HKM Bhilai to experience the transcendental joy of Prasadam or contribute through volunteering or donations.
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
          Select from the various seva options to serve Krishna Prasadam & support our temple community
        </p>
        {/* Tabs for filtering */}
        <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
          {['All Seva', 'Daily', 'Weekly', 'Festival'].map((category) => (
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
              <button className="mt-4 bg-amber-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-amber-700 transition duration-300">
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
            { number: '15,000+', label: 'Meals Served Monthly' },
            { number: '60+', label: 'Communities Reached' },
            { number: '100%', label: 'Love in Every Bite' },
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
              name: 'Radha Devi',
              quote: 'Serving Prasadam at HKM Bhilai has brought immense joy to my life. It’s a blessing to see smiles on people’s faces.',
            },
            {
              name: 'Vikram Sharma',
              quote: 'Donating to Annadana Seva feels like directly serving Lord Krishna. It’s a fulfilling experience.',
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

      {/* Recent Donors Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-[linear-gradient(135deg,#fef3c7_0%,#f97316_100%)]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Donar />
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
              Make a Difference Today
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
              Your contribution to Annadana Seva helps us provide nutritious Prasadam to those in need, spreading Lord Krishna’s mercy and fostering spiritual growth. Every meal you support is a step toward a hunger-free community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              Join us in this sacred mission. Your generosity can transform lives and bring joy to countless souls.
            </p>
            <div className="text-center">
              <motion.button
                className="bg-amber-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-amber-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
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
              Offer Seva to Annadana Seva
            </h3>
            <DonationForm preselectedCategoryId="annadana-seva"/>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      {/* <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-amber-800 mb-8 text-center">
          Experience Annadana Seva
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
              title="Annadana Seva at HKM Bhilai"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-lg text-gray-600 mt-4 text-center">
            Watch how your contributions make a difference in our community.
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
        onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Annadana;