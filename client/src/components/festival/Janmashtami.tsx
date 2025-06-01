import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DonationForm from '../donation/DonationForm';
import { Link } from "wouter";

interface DonationFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  festivalName?: string;
}

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  bgGradient: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface SevaOption {
  title: string;
  description: string;
  price: string;
  bgColor: string;
}

const Janmashtami: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const slides: Slide[] = [
    {
      title: "Sri Krishna Janmashtami",
      subtitle: "Birth of Lord Krishna",
      description: "Celebrate the divine appearance of Lord Krishna, the Supreme Personality of Godhead, with devotion and joy.",
      bgGradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Join the Festivities",
      subtitle: "Abhisheka & Bhoga Offering",
      description: "Participate in the grand maha abhisheka and offer over 500 bhoga items to Lord Krishna.",
      bgGradient: "from-orange-500 to-yellow-400",
    },
    {
      title: "Support the Celebration",
      subtitle: "Seek Krishna’s Blessings",
      description: "Your contribution helps spread the glories of Lord Krishna and His divine pastimes.",
      bgGradient: "from-yellow-400 to-orange-500",
    },
  ];

  const galleryImages: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Maha Abhisheka Ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1521747116042-5a7c2a0537bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Bhoga Offering",
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Cultural Program",
    },
    {
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Nandotsav Celebration",
    },
  ];

  const sevaOptions: SevaOption[] = [
    {
      title: "Maha Abhisheka Sponsorship Seva",
      description: "Sponsor the grand Sri Sri RadhaKrishna Maha Abhisheka ceremony during Janmashtami",
      price: "",
      bgColor: "bg-yellow-400",
    },
    {
      title: "Bhoga Offering Sponsorship Seva",
      description: "Support the offering of over 500 bhoga items to Lord Krishna on this auspicious day",
      price: "",
      bgColor: "bg-yellow-400",
    },
    {
      title: "Cultural Program Sponsorship Seva",
      description: "Sponsor the cultural programs during Nandotsav, celebrating Krishna’s divine pastimes",
      price: "",
      bgColor: "bg-yellow-400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToDonationForm = () => {
    document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animation-delay-200 {
            animation-delay: 200ms;
          }
          .animation-delay-400 {
            animation-delay: 400ms;
          }
          .animation-delay-600 {
            animation-delay: 600ms;
          }
          .animation-delay-800 {
            animation-delay: 800ms;
          }
          .animation-delay-1000 {
            animation-delay: 1000ms;
          }
          .animation-delay-1200 {
            animation-delay: 1200ms;
          }
          .animation-delay-1400 {
            animation-delay: 1400ms;
          }
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          .modal img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 8px;
          }
          .modal button {
            position: absolute;
            top: 20px;
            right: 20px;
            background: white;
            color: black;
            border: none;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
          }
        `}
      </style>
      <div className="min-h-screen font-sans bg-[url('https://www.transparenttextures.com/patterns/cream-pixels.png')] bg-orange-50">
        <div className="max-w-6xl mx-auto space-y-8 p-6">
          {/* Carousel Header Section */}
          <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
            {slides.map((slide: Slide, index: number) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-90`}></div>
                <div className="relative z-10 px-6">
                  <h1 className="text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn">{slide.title}</h1>
                  <p className="text-xl text-white mt-2 drop-shadow-md animate-fadeIn">{slide.subtitle}</p>
                  <p className="text-sm text-white mt-1 drop-shadow-md animate-fadeIn">{slide.description}</p>
                  <div className="flex justify-center space-x-4 mt-4 animate-fadeIn">
                    <Link to="/donate">
                      <Button className="bg-white text-orange-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-orange-100 transition duration-300">
                        Donate
                      </Button>
                    </Link>
                    <Button className="bg-white text-orange-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-orange-100 transition duration-300">
                      Register
                    </Button>
                    <Button
                      onClick={scrollToDonationForm}
                      className="bg-white text-orange-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-orange-100 transition duration-300"
                    >
                      Support Janmashtami
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_: Slide, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-300'} transition duration-300`}
                />
              ))}
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Column: About Janmashtami and Festival Schedule */}
            <div className="md:col-span-2 space-y-6">
              {/* About Janmashtami Card */}
              <Card className="bg-white p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-2">☀️</span>
                    <h2 className="text-xl font-bold text-orange-800">About Janmashtami</h2>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Sri Krishna Janmashtami celebrates the divine appearance of Lord Krishna, the Supreme Personality of Godhead, who descended to protect devotees and reestablish dharma. Devotees fast until midnight, offer bhoga, and participate in abhisheka and kirtans, followed by Nandotsav celebrations.
                  </p>
                </CardContent>
              </Card>

              {/* Festival Schedule Card */}
              <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-200">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-2">🎉</span>
                    <h2 className="text-xl font-bold text-orange-800">Festival Schedule</h2>
                  </div>
                  <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
                    <p><span className="font-bold">Date:</span> 28th August 2025</p>
                    <p><span className="font-bold">Venue Raipur:</span> Hukam’s Lalit Mahal, Naya Raipur Interchange, Serikhedi</p>
                    <p><span className="font-bold">Venue Bhilai:</span> HKM Bhilai Temple, Bhilai</p>
                    <p><span className="font-bold">Time:</span> Celebrations start at 7:30 PM, with Sri Sri RadhaKrishna Maha Abhisheka & Maha Arati</p>
                    <p><span className="font-bold">Activities:</span> Fasting until midnight, over 500 bhoga offerings, maha-arati, Nandotsav with cultural programs</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Support and Date Card */}
            <div className="space-y-6">
              {/* Support Janmashtami Card */}
              <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-400">
                <CardContent className="p-0">
                  <h2 className="text-xl font-bold text-orange-800 mb-4">Support Janmashtami</h2>
                  <div className="space-y-3">
                    <Button className="w-full bg-orange-400 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-orange-500 transition duration-300">
                      Donate Online
                    </Button>
                    <Button className="w-full bg-orange-400 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-orange-500 transition duration-300">
                      Become Volunteer
                    </Button>
                    <Button className="w-full bg-orange-400 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-orange-500 transition duration-300">
                      Sponsor Event
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Festival Date Card */}
              <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 text-center transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-600">
                <CardContent className="p-0">
                  <p className="text-lg font-bold text-gray-800">Festival Date: 28th August 2025</p>
                  <p className="text-sm text-gray-600 mt-2">Thursday</p>
                </CardContent>
              </Card>

              {/* Contact Info Card */}
              <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-800">
                <CardContent className="p-0">
                  <h2 className="text-xl font-bold text-orange-800 mb-4">Get Involved</h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    📞 +91-1234567890<br />
                    ✉️ info@janmashtami.org<br />
                    🌐 www.janmashtami.org
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Festival Highlights Section */}
          <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-1000">
            <CardContent className="p-0">
              <h2 className="text-xl font-bold text-orange-800 mb-4">Festival Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-bold">Maha Abhisheka</p>
                  <p>Grand bathing of Radha Krishna</p>
                </div>
                <div>
                  <p className="font-bold">Bhoga Offering</p>
                  <p>Over 500 items offered</p>
                </div>
                <div>
                  <p className="font-bold">Nandotsav</p>
                  <p>Cultural programs and feast</p>
                </div>
                <div>
                  <p className="font-bold">Maha Arati</p>
                  <p>Midnight ceremonial worship</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seva Options Section */}
          <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-1200">
            <CardContent className="p-0">
              <h2 className="text-xl font-bold text-orange-800 mb-4">Janmashtami Seva Options</h2>
              <p className="text-gray-600 mb-8 text-center">
                Choose a seva to support the Janmashtami celebrations and receive Krishna’s divine blessings
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sevaOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    className={`${option.bgColor} p-6 rounded-xl shadow-lg text-gray-800 transform transition-all duration-300 hover:scale-105`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-bold mb-2">{option.title}</h4>
                    <p className="text-sm mb-4">{option.description}</p>
                    <p className="text-md font-semibold">{option.price}</p>
                    <Button
                      className="mt-4 bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-500 transition duration-300"
                      onClick={scrollToDonationForm}
                    >
                      Sponsor Now
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Photo Gallery Section */}
          <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-1200">
            <CardContent className="p-0">
              <h2 className="text-xl font-bold text-orange-800 mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        if (e.target instanceof HTMLImageElement) {
                          e.target.src = 'https://via.placeholder.com/600x400?text=Janmashtami';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-sm font-semibold">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Donation Form Section */}
          <Card id="donation-form" className="bg-yellow-50 p-8 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-1400">
            <CardContent className="p-0">
              <h2 className="text-xl font-bold text-center text-orange-800 mb-6">
                Support the Festival – Make a Donation
              </h2>
              <DonationForm preselectedCategoryId="sri-krishna-janmashtami"/>
            </CardContent>
          </Card>

          {/* Image Modal */}
          {selectedImage && (
            <div className="modal" onClick={() => setSelectedImage(null)}>
              <img src={selectedImage} alt="Full-size image" />
              <button onClick={() => setSelectedImage(null)}>✕</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Janmashtami;