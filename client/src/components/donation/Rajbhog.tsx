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

const Rajbhog: React.FC = () => {
  // Carousel images (replace with actual temple-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=Rajbhog+Seva+1',
    'https://via.placeholder.com/1200x500?text=Rajbhog+Seva+2',
    'https://via.placeholder.com/1200x500?text=Rajbhog+Seva+3',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Seva options data
  const sevaOptions: SevaOption[] = [
    { title: 'Raj Bhoga Seva at 12:00 PM', description: 'Offer a special Raj Bhoga meal to the deity at 12:00 PM', price: '', bgColor: 'bg-orange-400' },
    { title: 'Raj Bhoga Arati Seva at 12:00 PM', description: 'Participate in the Raj Bhoga Arati ceremony at 12:00 PM', price: '', bgColor: 'bg-orange-400' },
  ];

  // Function to scroll to the donation form
  const scrollToDonationForm = () => {
    document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Rajbhog Seva Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Rajbhog Seva: Nourishing the Divine
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
        <h2 className="text-4xl font-bold text-orange-800 mb-6 text-center">
          Rajbhog Seva: Offering Nourishment to the Divine
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Bhog Seva, the offering of food to the deity, is a key aspect of Deity
          worship in Sanatana Dharma. This sacred tradition embodies the heart of
          devotion—offering what we have with love and gratitude to the Supreme
          Being. Through Bhog Seva, devotees present food to the deity, nourishing
          the physical form of the Lord and receiving His divine blessings in
          return.
        </p>
      </section>

      {/* Spiritual Significance Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-orange-50 to-yellow-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
          The Spiritual Significance of Rajbhog Seva
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          In Vedic culture, food is a gift from God, and offering it back to Him
          is an act of gratitude and devotion. The deity, or vigraha, is the
          living embodiment of the Divine, and Bhog Seva is a way to serve and
          nourish the Lord. The food offered becomes <span className="italic">prasadam</span>—sanctified food imbued with the deity’s grace, purifying the mind and heart.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-orange-500 pl-4 my-4">
          “Patram pushpam phalam toyam yo me bhaktyā prayacchati,<br />
          Tad aham bhakty-upahritam asnāmi prayatātmanah.”<br />
          <span className="text-sm">— Bhagavad Gita 9.26</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          This verse reveals that it is the love and devotion behind the offering,
          not its opulence, that pleases the Lord. The story of Sudama in the
          Srimad Bhagavatam (10.81.4) illustrates this, where Krishna joyfully
          accepted a handful of flat rice offered with love.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-orange-500 pl-4 my-4">
          “One who offers food to the deity with devotion will never suffer from
          hunger, nor will they be deprived of life’s necessities.”<br />
          <span className="text-sm">— Padma Purana, Uttara Khanda 9.37</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          This affirms the spiritual and material benefits of Bhog Seva, ensuring
          the devotee’s sustenance and well-being.
        </p>
      </section>

      {/* Practice Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
          The Practice of Rajbhog Seva
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Bhog Seva is performed daily in temples and homes with clean, freshly
          prepared vegetarian food, cooked with devotion. The food is placed
          before the deity on a clean plate, and prayers are recited to invoke the
          Lord’s presence and acceptance. This humble act is a great blessing for
          the devotee.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          At HKM Bhilai, the Rajbhog offered to the Lord is an array of choicest
          delicacies, prepared with grains, ghee, milk, vegetables, sugar, and
          yogurt, all made with love and sanctity. This special seva offers a
          unique opportunity to deepen your love for the Lord.
        </p>
      </section>

      {/* Blessings of Prasadam Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-yellow-50 to-orange-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
          The Blessings of Prasadam
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          After the offering, the food becomes <span className="italic">prasadam</span>, sanctified by the Lord’s touch. Consuming
          prasadam uplifts the devotee spiritually, purifying material desires.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-orange-500 pl-4 my-4">
          “Maha-prasade govinde, nama-brahmani vaisnave,<br />
          Svalpa-punya-vatam rajan visvaso naiva jayate.”<br />
          <span className="text-sm">— Chaitanya Charitamrita, Antya 16.60</span>
        </blockquote>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-orange-500 pl-4 my-4">
          “By eating sanctified foodstuffs, one’s existence becomes purified; by
          the purification of existence, memory becomes sanctified, leading to
          Krishna consciousness.”<br />
          <span className="text-sm">— Chandogya Upanishad 7.26.2, quoted in Bhagavad Gita 3.11 Purport</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          Out of causeless love, Krishna provides all necessities, and offering
          Him food with devotion pleases Him, showering blessings and prosperity
          upon the devotee.
        </p>
      </section>

      {/* Rajbhog Seva Options Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-orange-800 mb-4 text-center">
          Rajbhog Seva Options
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Participate in the sacred Rajbhog Seva by offering a meal or joining the Arati ceremony
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {sevaOptions.map((option, index) => (
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
                className="mt-4 bg-orange-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-orange-700 transition duration-300"
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
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
          Support Rajbhog Seva
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Maintaining the tradition of Bhog Seva requires care and resources for
          high-quality food offerings and temple kitchen maintenance. Your
          donations ensure the Lord is served with devotion and that prasadam is
          available to all devotees.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          To support Rajbhog Seva, you can donate online at{' '}
          <a
            href="https://iskcondelhiofferings.com/donate/rajbhoga-seva"
            className="text-orange-600 hover:underline"
          >
            ISKCON Delhi
          </a>{' '}
          or{' '}
          <a
            href="https://iskconmumbai.com/donation/google-don-N"
            className="text-orange-600 hover:underline"
          >
            ISKCON Mumbai
          </a>, or contact the temple office.
        </p>
        <button 
          className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transform transition-transform hover:scale-105"
          onClick={scrollToDonationForm}
        >
          Offer Seva
        </button>
      </section>

      {/* Donation Form Section */}
      <section 
        id="donation-form"
        className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-orange-50 to-yellow-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
          Contribute to Rajbhog Seva
        </h2>
        <DonationForm preselectedCategoryId="Rajbhog-Seva" />
      </section>
    </div>
  );
};

export default Rajbhog;