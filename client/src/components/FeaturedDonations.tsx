import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FeaturedDonation, featuredDonations } from "../data/donationdata";

const FeaturedDonations = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedDonation, setSelectedDonation] = useState<FeaturedDonation | null>(null);
  const [selectedSubDonation, setSelectedSubDonation] = useState<FeaturedDonation | null>(null);
  const [view, setView] = useState<'main' | 'sub' | 'details'>('main');

  const handleDonationSelect = (donation: FeaturedDonation) => {
    setSelectedDonation(donation);

    if (donation.hasSubDonations && donation.subDonations) {
      setView('sub');
      setSelectedSubDonation(null);
    } else {
      setView('details');
      setSelectedSubDonation(null);
    }

    document.getElementById('donation-info-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleSubDonationSelect = (subDonation: FeaturedDonation) => {
    setSelectedSubDonation(subDonation);
    setView('details');
  };

  const handleBackToMain = () => {
    setSelectedDonation(null);
    setSelectedSubDonation(null);
    setView('main');
  };

  const handleBackToSub = () => {
    setSelectedSubDonation(null);
    setView('sub');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      rotateY: 5,
      z: 50,
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      transition: { duration: 0.3 },
    },
  };

  const renderSubDonations = () => {
    if (!selectedDonation || !selectedDonation.subDonations) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden p-8"
      >
        <div className="flex items-center mb-8">
          <motion.button
            onClick={handleBackToMain}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mr-4 p-2 rounded-full hover:bg-gray-100"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </motion.button>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {selectedDonation.title} Categories
          </h2>
        </div>

        <p className="text-gray-600 mb-8 max-w-3xl">
          {selectedDonation.subDonationsDescription || 'Select a specific category to learn more about it.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedDonation.subDonations.map((subDonation, index) => (
            <motion.div
              key={subDonation.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => handleSubDonationSelect(subDonation)}
            >
              <div className={`h-40 bg-gradient-to-br ${subDonation.bgColor} relative overflow-hidden`}>
                <motion.img
                  src={subDonation.image}
                  alt={subDonation.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                  variants={imageVariants}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-xl drop-shadow-md">{subDonation.title}</h3>
                </div>
              </div>
              <div className="bg-white p-4">
                <div className="flex justify-between items-center">
                  <span className="text-primary text-sm font-medium">Learn more</span>
                  <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center text-primary">
                    <i className="ri-arrow-right-line text-sm"></i>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderDetailedInfo = () => {
    const donationToShow = selectedSubDonation || selectedDonation;
    if (!donationToShow) return null;

    const { detailedInfo } = donationToShow;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-xl overflow-hidden mt-20"
      >
        <div className={`h-32 md:h-48 bg-gradient-to-r ${donationToShow.bgColor} relative`}>
          <motion.div
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-4 drop-shadow-lg">
              {detailedInfo.heading}
            </h2>
          </motion.div>
        </div>

        <div className="p-6 md:p-10">
          <div className="flex items-start mb-6">
            <motion.button
              onClick={selectedSubDonation ? handleBackToSub : handleBackToMain}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mr-4 p-2 rounded-full hover:bg-gray-100"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </motion.button>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{donationToShow.title}</h3>
              {selectedSubDonation && selectedDonation && (
                <p className="text-gray-500 text-sm">Under {selectedDonation.title}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              {detailedInfo.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                  className="text-gray-700 mb-4 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              {detailedInfo.quote && (
                <motion.blockquote
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="border-l-4 border-primary pl-4 my-6 italic text-gray-600"
                >
                  <p className="mb-2">{detailedInfo.quote.text}</p>
                  <footer className="text-sm font-medium text-gray-500">— {detailedInfo.quote.author}</footer>
                </motion.blockquote>
              )}

              {detailedInfo.importantPoints && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Important Points</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {detailedInfo.importantPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            <div className="md:col-span-2">
              {detailedInfo.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={detailedInfo.image}
                    alt={donationToShow.title}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              )}

              {detailedInfo.activities && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Our Activities</h3>
                  <ul className="space-y-3">
                    {detailedInfo.activities.map((activity, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                        className="flex items-start"
                      >
                        <span className="text-primary font-bold mr-2">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8 text-center"
              >
                <Button
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium"
                  onClick={() => window.location.href = donationToShow.link}
                >
                  Support This Cause
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <section className="py-16 bg-[#f8f5f2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Donation Categories
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-secondary mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </div>

          {/* Grid View for All Devices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDonations.map((item, index) => (
              <motion.div
                key={item.id}
                className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={() => handleDonationSelect(item)}
              >
                <div className={`relative h-56 bg-gradient-to-br ${item.bgColor} overflow-hidden`}>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                    variants={imageVariants}
                    style={{ filter: "contrast(1.1)" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    variants={{ hover: { opacity: 0.7 } }}
                  ></motion.div>

                  <motion.div
                    className="absolute bottom-4 left-4 right-4 text-white"
                    variants={{ hover: { y: -5 } }}
                  >
                    <h3 className="text-xl font-bold drop-shadow-md">{item.title}</h3>
                    {item.hasSubDonations && (
                      <motion.span
                        className="text-xs bg-white/20 px-2 py-1 rounded-full inline-block mt-1"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        Multiple options
                      </motion.span>
                    )}
                  </motion.div>
                </div>

                <div className="bg-white p-4">
                  <div className="flex justify-between items-center">
                    <motion.span
                      className="text-primary font-medium text-sm"
                      variants={{ hover: { opacity: 1 } }}
                      initial={{ opacity: 0.7 }}
                    >
                      {item.hasSubDonations ? 'View options' : 'Click to learn more'}
                    </motion.span>

                    <motion.div
                      className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="ri-arrow-right-line"></i>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section id="donation-info-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {view === 'sub' && renderSubDonations()}
          {view === 'details' && renderDetailedInfo()}
          {view === 'main' && !selectedDonation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto py-16"
            >
              <div className="text-6xl mb-6 text-primary-light opacity-60">🙏</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-700">Click on any devotional service above</h3>
              <p className="text-gray-600">
                Select one of our featured devotional services to learn more about its importance, our activities, and how your support helps sustain these spiritual initiatives.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedDonations;