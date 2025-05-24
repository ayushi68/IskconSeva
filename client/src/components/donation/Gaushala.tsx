import React, { useState, useEffect, useRef } from 'react';
import DonationForm from './DonationForm';
import { motion, useAnimation, useInView } from 'framer-motion';

const Gaushala: React.FC = () => {
  // Carousel images (replace with actual image URLs)
  const images = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Carousel Section with 3D Parallax Effect */}
      <section className="w-full h-[70vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Annadana Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-all duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
          />
        ))}
        
        {/* 3D Floating Text Over Carousel */}
        <motion.div 
          className="absolute z-20 text-center w-full top-1/2 left transform -translate-x-1/2 -translate-y-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow-lg shadow-black/50">
          GOPAL’S GAUSHALA
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-bold">
          namo brahmanya-devaya go-brahmana-hitaya ca<br />jagad-dhitaya krsnaya govindaya namo namah
          </p>
        </motion.div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentImage ? 'bg-amber-500 scale-125' : 'bg-white/70'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Slogan Section with 3D Flip Effect */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-center"
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white px-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          "Gau Seva is not charity; it is duty."
        </motion.h2>
      </motion.section>

      {/* Text Section with Scroll Animation */}
      <section 
        ref={ref}
        className="py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-b from-amber-50 to-white"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h3 className="text-3xl font-bold text-amber-800 mb-8 text-center">
            About Gaushala Seva
          </h3>
          
          <div className="grid  gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-amber-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                The Supreme Lord Sri Krishna is worshipped thus: "My Lord, You are the well-wisher of the Cows and the brahmanas, and You are the well-wisher of the entire human society and world." (Visnu Purana 1.19.65)<br />
                Srila Prabhupada says, "Lord Krishna, the Supreme Personality of Godhead, is the prime protector of brahminical culture and the Cow. Without knowing and respecting these pleasing personalities, one cannot realize the science of God, and without this knowledge, any welfare activities or humanitarian propaganda cannot be successful."<br />
                In the Srimad Bhagavatam it is said: gavah panca pavitrani: the cows deliver five products and all of them are pure and uncontaminated. The five products received from the cow are milk, ghee, yogurt, cow dung and urine. These five products, called pancha-gavya, are required in all ritualistic ceremonies performed according to the Vedic directions.<br />
                In Vedic tradition, cows are worshipped as mothers. Just as the child feeds on the milk of the mother, human society takes milk from the cow. Srila Prabhupada always emphasized that the human society should recognize the importance of the cow and the bull and thus give all protection to these important animals.<br />
                Following the teachings of Srila Prabhupada, Hare Krishna Mandir is maintaining a Gaushala with 30 healthy well-built cows and bulls of Gir breed with their beautiful calves in the service of Their Lordships Sri Sri Radha Krishna Chandra.<br />
                Hare Krishna mandir is also setting up a Gau Shala in 10 acre land at the beautiful bank of Shivnath river.<br />
              </p>
            </motion.div>
            
            {/* <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-amber-100"
            >
                <h3 className="text-3xl font-bold text-amber-800 mb-8 text-center">
                Prabhupada says:
                </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
              It was a very nice system that nobody should remain hungry. That is the system. If there is any temple in any neighborhood, in that neighborhood nobody should remain hungry. The Vedic system is that in your house, a householder shall see that even a lizard in the house is not hungry.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-bold">(Conversation with Dai Nippon — April 22, 1972, Tokyo)</p>

              <p className="text-lg text-gray-700 leading-relaxed">
              Visit our HKM Bhilai temple to taste and honor the transcendental, nutritious and wholesome prasādam. You could also be a part of it either by being a volunteer for prasadam distribution or by donating for the same cause.
              </p>
            </motion.div> */}
          </div>
        </motion.div>
      </section>

      {/* Stats Section with 3D Cards */}
      {/* <section className="py-16 bg-amber-600 text-white">
        <h3 className="text-3xl font-bold text-center mb-12">Our Impact</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 lg:px-32">
          {[
            { number: "10,000+", label: "Meals Served Monthly" },
            { number: "50+", label: "Communities Reached" },
            { number: "100%", label: "Love in Every Bite" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">{stat.number}</p>
              <p className="text-xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Form Section with 3D Depth */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-b from-white to-amber-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-amber-800 mb-2 text-center">
            Join Our Mission
          </h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Your support can help feed someone today
          </p>
          
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-amber-100"
          >
            <DonationForm />
          </motion.div>
        </motion.div>
      </section>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 bg-amber-600 text-white p-4 rounded-full shadow-xl cursor-pointer z-50"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Gaushala;