import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DonationForm from './DonationForm';
import Donor from './Donar';

// Define the type for the seva options
interface SevaOption {
  title: string;
  description: string;
  price: string;
  bgColor: string;
}

const Vigrahaseva: React.FC = () => {
  // Carousel images (replace with actual temple/deity-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=Vigraha+Seva+1',
    'https://via.placeholder.com/1200x500?text=Vigraha+Seva+2',
    'https://via.placeholder.com/1200x500?text=Vigraha+Seva+3',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Bhoga Seva options
  const bhogaSevaOptions: SevaOption[] = [
    { title: 'Balya Bhoga Seva at 4:00 AM', description: 'Offer Balya Bhoga to the deity at 4:00 AM', price: '', bgColor: 'bg-orange-400' },
    { title: 'Pratah Bhoga Seva at 6:45 AM', description: 'Offer Pratah Bhoga to the deity at 6:45 AM', price: '', bgColor: 'bg-orange-400' },
    { title: 'Sakalika Bhoga Seva at 8:15 AM', description: 'Offer Sakalika Bhoga to the deity at 8:15 AM', price: '', bgColor: 'bg-orange-400' },
    { title: 'Vaikalika Bhoga Seva at 4:15 PM', description: 'Offer Vaikalika Bhoga to the deity at 4:15 PM', price: '', bgColor: 'bg-orange-400' },
    { title: 'Utthapana Bhoga Seva at 5:00 PM', description: 'Offer Utthapana Bhoga to the deity at 5:00 PM', price: '', bgColor: 'bg-orange-400' },
    { title: 'Sayana Bhoga Seva at 8:00 PM', description: 'Offer Sayana Bhoga to the deity at 8:00 PM', price: '', bgColor: 'bg-orange-400' },
    { 
      title: 'Full Day Bhoga Seva', 
      description: 'Balya, Pratah, Sakalika, Raj, Vaikalika, Utthapana, Sayana Bhoga Seva for one day', 
      price: '', 
      bgColor: 'bg-orange-400' 
    },
    { title: 'Vishesha Naivedya Seva', description: 'Offer special Naivedya to the deity', price: '', bgColor: 'bg-orange-400' },
  ];

  // Arati Seva options
  const aratiSevaOptions: SevaOption[] = [
    { title: 'Mangala Arati Seva at 4:30 AM', description: 'Participate in Mangala Arati at 4:30 AM', price: '', bgColor: 'bg-blue-500' },
    { title: 'Sringar Darshan Arati Seva at 7:30 AM', description: 'Participate in Sringar Darshan Arati at 7:30 AM', price: '', bgColor: 'bg-blue-500' },
    { title: 'Raj Bhoga Arati Seva at 12:00 PM', description: 'Participate in Raj Bhoga Arati at 12:00 PM', price: '', bgColor: 'bg-blue-500' },
    { title: 'Utthapana Arati Seva at 4:30 PM', description: 'Participate in Utthapana Arati at 4:30 PM', price: '', bgColor: 'bg-blue-500' },
    { title: 'Sandhya Arati Seva at 7:00 PM', description: 'Participate in Sandhya Arati at 7:00 PM', price: '', bgColor: 'bg-blue-500' },
    { title: 'Sayana Arati Seva at 8:15 PM', description: 'Participate in Sayana Arati at 8:15 PM', price: '', bgColor: 'bg-blue-500' },
    { 
      title: 'Full Day Arati Seva', 
      description: 'Mangala, Sringar, Raj Bhoga, Utthapana, Sandhya, Sayana Arati Seva for one day', 
      price: '', 
      bgColor: 'bg-blue-500' 
    },
  ];

  // Deity Seva options
  const deitySevaOptions: SevaOption[] = [
    { title: 'Archana Seva for one day', description: 'Offer Archana to the deity for one day', price: '', bgColor: 'bg-purple-500' },
    { title: 'Panchamrata Abhishek & Sringar Seva for one day', description: 'Perform Panchamrata Abhishek and Sringar Seva for one day', price: '', bgColor: 'bg-purple-500' },
    { title: 'Dhoop & Deep Daan Seva for one day', description: 'Offer Dhoop and Deep Daan for one day', price: '', bgColor: 'bg-purple-500' },
    { title: 'Sugandha Seva for one day', description: 'Offer Sugandha (fragrance) Seva for one day', price: '', bgColor: 'bg-purple-500' },
    { title: 'Pushpa Seva for one day', description: 'Offer Pushpa (flowers) Seva for one day', price: '', bgColor: 'bg-purple-500' },
    { title: 'Tulsi Archana on Ekadashi', description: 'Offer Tulsi Archana on Ekadashi', price: '', bgColor: 'bg-purple-500' },
    { title: 'Tulasi Daan Seva', description: 'Donate Tulasi for deity worship', price: '', bgColor: 'bg-purple-500' },
  ];

  // Function to scroll to the donation form
  const scrollToDonationForm = () => {
    document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Vigraha Seva Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Sri Vigraha Seva: Devotion to the Divine
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
        <h2 className="text-4xl font-bold text-amber-800 mb-6 text-center">
          Sri Vigraha Seva: An Ancient Practice of Devotion
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Vigraha Seva, or Deity worship, holds a significant place in Sanatana
          Dharma. It is the sacred practice of honoring and serving a sanctified
          image or form of a deity, believed to personify the divine presence of
          the Supreme Personality and Srimati Radharani. This pious practice
          fosters a personal connection with the Divine through offerings, prayers,
          and meditations.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          In the Vedic tradition, deities are not mere symbols but sacred forms in
          which the Divine descends, accepting the love and service of devotees.
          Vigraha Seva provides a tangible way to focus the mind and heart on God,
          helping devotees transcend worldly distractions.
        </p>
      </section>

      {/* Scriptural Significance Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-yellow-50 to-amber-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          Scriptural Significance of Deity Worship
        </h2>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-amber-500 pl-4 mb-4">
          “man-manā bhava mad-bhakto mad-yājī māṁ namaskuru<br />
          mām evaiṣyasi kaunteya yuktvaivam mat-parāyaṇaḥ”<br />
          <span className="text-sm">— Bhagavad Gita 9.34</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          Lord Krishna emphasizes that worshiping Him through devotion and
          obeisances leads to liberation. Deity worship is a vital practice for
          devotees seeking to engage their mind in divine contemplation.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-amber-500 pl-4 my-4">
          “śailī dāru-mayī lauhī lepyā lekhyā ca saikatī<br />
          mano-mayī maṇi-mayī pratimāṣṭa-vidhā smṛtā”<br />
          <span className="text-sm">— Srimad Bhagavatam 11.27.12</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          The Lord instructs devotees to worship Him in His deity form with the
          best offerings, such as garments, fragrant oils, flowers, and sacred
          foodstuffs, offered with sincerity and devotion.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-amber-500 pl-4 my-4">
          “By serving the Deity with faith and devotion, one attains liberation.”<br />
          <span className="text-sm">— Padma Purana, Uttara Khanda 93.9</span>
        </blockquote>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-amber-500 pl-4 my-4">
          “By installing the Deity of the Lord one becomes king of the entire
          earth, by building a temple for the Lord one becomes ruler of the three
          worlds...”<br />
          <span className="text-sm">— Śrīmad-Bhāgavatam 11.27.52</span>
        </blockquote>
      </section>

      {/* Transformative Power Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          The Transformative Power of Vigraha Seva
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Engaging in Vigraha Seva purifies the mind and heart, cultivating
          humility, devotion, and surrender. Acts such as bathing, clothing, and
          offering food to the deity symbolize cleansing one’s own heart, offering
          one’s life in service to the Supreme.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          As Srila Prabhupada says: “Decorate the Deity as nicely as possible with
          nice flowers and dress. You will forget all other false beauty.”<br />
          <span className="text-sm">— Srila Prabhupada’s Letter, 22 October 1968, Seattle</span>
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Deity worship cleanses the heart of material desires, engages devotees in
          constant thought of Krishna, and brings spiritual growth. Whether through
          monetary support, collecting flowers, making garlands, or cooking for
          Krishna, all acts of service are rewarded multifariously by the Lord.
        </p>
      </section>

      {/* Deity Bhoga Seva Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-4 text-center">
          Deity Bhoga Seva
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Offer sacred food to the deity at various times of the day
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bhogaSevaOptions.map((option, index) => (
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

      {/* Arati Seva Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-4 text-center">
          Arati Seva
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Participate in the sacred Arati ceremonies throughout the day
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {aratiSevaOptions.map((option, index) => (
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

      {/* Deity Seva Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-4 text-center">
          Deity Seva
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Offer various services to the deity to enhance your devotion
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {deitySevaOptions.map((option, index) => (
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

      {/* Call to Support Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-amber-50 to-yellow-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          Support Vigraha Seva
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Maintaining the sacred tradition of Deity worship requires effort and
          resources. Your donations help sustain daily worship, acquire offerings,
          maintain temple grounds, and organize festivals that share the joy of
          divine service with the community.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          HKM Bhilai-Raipur invites you to participate in this divine cause. Your
          kindness ensures the Lord’s mercy flows to all, fostering a loving
          exchange with the Supreme. For details or to donate, contact us at{' '}
          <a
            href="mailto:contact@hkmbhilai.org"
            className="text-amber-600 hover:underline"
          >
            contact@hkmbhilai.org
          </a>{' '}
          or call{' '}
          <a
            href="tel:+919755098615"
            className="text-amber-600 hover:underline"
          >
            +91 9755098615
          </a>.
        </p>
        <button 
          className="mt-6 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transform transition-transform hover:scale-105"
          onClick={scrollToDonationForm}
        >
          Support Now
        </button>
      </section>

      {/* Donation Form Section */}
      <section 
        id="donation-form"
        className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">
          Contribute to Vigraha Seva
        </h2>
        <DonationForm preselectedCategoryId="Sri-Vigraha-Seva"/>
      </section>
    </div>
  );
};

export default Vigrahaseva;