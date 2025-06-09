import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FeaturedDonation, featuredDonations } from "../data/donationdata";

const FeaturedDonations = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedDonation, setSelectedDonation] = useState<FeaturedDonation | null>(null);
  const [selectedSubDonation, setSelectedSubDonation] = useState<FeaturedDonation | null>(null);
  const [view, setView] = useState<"main" | "sub" | "details">("main");

  const handleDonationSelect = (donation: FeaturedDonation) => {
    setSelectedDonation(donation);
    setView(donation.hasSubDonations && donation.subDonations ? "sub" : "details");
    setSelectedSubDonation(null);
    document.getElementById("donation-info-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubDonationSelect = (subDonation: FeaturedDonation) => {
    setSelectedSubDonation(subDonation);
    setView("details");
  };

  const handleBackToMain = () => {
    setSelectedDonation(null);
    setSelectedSubDonation(null);
    setView("main");
  };

  const handleBackToSub = () => {
    setSelectedSubDonation(null);
    setView("sub");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const renderSubDonations = () => {
    if (!selectedDonation || !selectedDonation.subDonations) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-xl p-6 md:p-8"
      >
        <div className="flex items-center mb-6">
          <motion.button
            onClick={handleBackToMain}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {selectedDonation.title} Options
          </h2>
        </div>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-center">
          {selectedDonation.subDonationsDescription || "Explore specific categories to support this cause."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedDonation.subDonations.map((subDonation, index) => (
            <motion.div
              key={subDonation.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer"
              onClick={() => handleSubDonationSelect(subDonation)}
            >
              <div className={`relative h-48 bg-gradient-to-br ${subDonation.bgColor}`}>
                <motion.img
                  src={subDonation.image}
                  alt={subDonation.title}
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold">{subDonation.title}</h3>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <span className="text-indigo-600 font-medium text-sm">Explore More</span>
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className={`relative h-40 md:h-56 bg-gradient-to-r ${donationToShow.bgColor}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
              {detailedInfo.heading}
            </h2>
          </motion.div>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <motion.button
              onClick={selectedSubDonation ? handleBackToSub : handleBackToMain}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{donationToShow.title}</h3>
              {selectedSubDonation && selectedDonation && (
                <p className="text-gray-500 text-sm">Part of {selectedDonation.title}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-6">
              {detailedInfo.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
              {detailedInfo.quote && (
                <motion.blockquote
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="border-l-4 border-indigo-600 pl-4 py-2 italic text-gray-600"
                >
                  <p className="mb-2">{detailedInfo.quote.text}</p>
                  <footer className="text-sm font-medium text-gray-500">— {detailedInfo.quote.author}</footer>
                </motion.blockquote>
              )}
              {detailedInfo.importantPoints && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {detailedInfo.importantPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
            <div className="md:col-span-2 space-y-6">
              {detailedInfo.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg overflow-hidden shadow-md"
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Initiatives</h3>
                  <ul className="space-y-2">
                    {detailedInfo.activities.map((activity, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-indigo-600 font-bold mr-2">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center"
              >
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Explore Donation Categories
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-gray-600 mt-4">
              Discover meaningful ways to contribute to our spiritual initiatives and make a lasting impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDonations.map((item, index) => (
              <motion.div
                key={item.id}
                className="rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={() => handleDonationSelect(item)}
              >
                <div className={`relative h-56 bg-gradient-to-br ${item.bgColor}`}>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    {item.hasSubDonations && (
                      <motion.span
                        className="text-xs bg-white/20 px-2 py-1 rounded-full inline-block mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Multiple Options
                      </motion.span>
                    )}
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span className="text-indigo-600 font-medium text-sm">
                    {item.hasSubDonations ? "View Options" : "Learn More"}
                  </span>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="donation-info-section" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatePresence>
            {view === "sub" && renderSubDonations()}
            {view === "details" && renderDetailedInfo()}
            {view === "main" && !selectedDonation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-xl mx-auto py-12"
              >
                <motion.div
                  className="text-5xl mb-6 text-indigo-200"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  🙏
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Select a Devotional Service
                </h3>
                <p className="text-gray-600">
                  Choose a category above to explore its significance and how your support fuels our spiritual mission.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default FeaturedDonations;