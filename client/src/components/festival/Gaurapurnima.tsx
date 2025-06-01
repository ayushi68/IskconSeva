import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DonationForm from '../donation/DonationForm';
import { Link } from "wouter";

// Define props interface for DonationForm to fix TypeScript error
interface DonationFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  festivalName?: string;
}

// Define the type for the slide objects in the carousel
interface Slide {
  title: string;
  subtitle: string;
  description: string;
  bgGradient: string;
}

// Define the type for gallery items (images and videos)
interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt?: string; // For images
  title?: string; // For videos
}

const GaurPurnima: React.FC = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; src: string } | null>(null); // State for modal media

  const slides: Slide[] = [
    {
      title: "Gaura Purnima",
      subtitle: "The Golden Avatar’s Appearance Day",
      description: "Celebrating the most merciful incarnation of the Supreme Lord, Sri Chaitanya Mahaprabhu, for the benefits of all.",
      bgGradient: "from-orange-400 to-yellow-500",
    },
    {
      title: "Join the Celebration",
      subtitle: "Festival of Love & Devotion",
      description: "Experience the joy of sankirtana and the divine mercy of Lord Chaitanya on this auspicious day.",
      bgGradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Support the Festival",
      subtitle: "Be a Part of Gaura Purnima",
      description: "Your contribution helps spread the message of love and devotion across the world.",
      bgGradient: "from-orange-500 to-yellow-400",
    },
  ];

  // Gallery items (images and videos)
  const galleryItems: GalleryItem[] = [
    {
      type: 'image',
      src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Gaura Purnima Procession",
    },
    {
      type: 'image',
      src: "https://images.unsplash.com/photo-1521747116042-5a7c2a0537bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Chaitanya Mahaprabhu Abhishek",
    },
    {
      type: 'video',
      src: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL
      title: "Gaura Purnima Kirtan",
    },
    {
      type: 'image',
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Sankirtana Celebration",
    },
    {
      type: 'image',
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Prasadam Distribution",
    },
    {
      type: 'video',
      src: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample video URL (same for simplicity)
      title: "Cultural Program Highlights",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Debugging logs for rendering
  console.log("GaurPurnima component rendered");
  console.log("Slides:", slides);
  console.log("Gallery Items:", galleryItems);

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
          .modal img, .modal video {
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
          .play-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .gallery-item:hover .play-icon {
            opacity: 1;
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
                      onClick={() => setSelectedMedia(null)}
                      className="bg-white text-orange-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-orange-100 transition duration-300"
                    >
                      Support Gaura Purnima
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            {/* Carousel Dots */}
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
            {/* Left Column: Golden Avatar and Festival Schedule */}
            <div className="md:col-span-2 space-y-6">
              {/* The Golden Avatar Card */}
              <Card className="bg-white p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-2">☀️</span>
                    <h2 className="text-xl font-bold text-orange-800">The Golden Avatar</h2>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Sri Chaitanya Mahaprabhu appeared on the most auspicious full moon day in Mayapur, West Bengal, 500 years ago, as Sri Krishna Himself in the mood of Srimati Radharani.
                    <br /><br />
                    Lord Chaitanya’s mission was to deliver the most sublime gift of unalloyed devotion to Lord Krishna through the simplest process of chanting His holy names, yet He had spiritual perfection accessible to all.
                    <br /><br />
                    This festival marks His divine appearance, the beginning of the sankirtana movement that continues to spread love and consciousness throughout the world today.
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
                    <p><span className="font-bold">4:30 AM:</span> Mangala & Tulsi Puja</p>
                    <p><span className="font-bold">7:00 AM:</span> Guru Puja & Shringar Darshan</p>
                    <p><span className="font-bold">11:00 AM:</span> Grand Abhishek of Sri Chaitanya Mahaprabhu</p>
                    <p><span className="font-bold">1:00 PM:</span> Maha Prasadam Distribution</p>
                    <p><span className="font-bold">4:00 PM:</span> Nama Sankirtan Procession</p>
                    <p><span className="font-bold">7:00 PM:</span> Evening Aarti & Cultural Program</p>
                    <p><span className="font-bold">8:30 PM:</span> Special Discourse & Prasadam</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Support and Date Card */}
            <div className="space-y-6">
              {/* Support Gaura Purnima Card */}
              <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-400">
                <CardContent className="p-0">
                  <h2 className="text-xl font-bold text-orange-800 mb-4">Support Gaura Purnima</h2>
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
                  <p className="text-lg font-bold text-gray-800">Festival Date: March 3, 2026</p>
                  <p className="text-sm text-gray-600 mt-2">Tuesday – Phalguna Purnima</p>
                </CardContent>
              </Card>

              {/* Contact Info Card */}
              <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-800">
                <CardContent className="p-0">
                  <h2 className="text-xl font-bold text-orange-800 mb-4">Get Involved</h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    📞 +91-1234567890<br />
                    ✉️ info@gaurapurnima.org<br />
                    🌐 www.gaurapurnima.org
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
                  <p className="font-bold">Grand Procession</p>
                  <p>Of Sri Chaitanya Mahaprabhu with beautifully decorated palanquin</p>
                </div>
                <div>
                  <p className="font-bold">24-hour Kirtan</p>
                  <p>Continuous kirtan throughout the day & night</p>
                </div>
                <div>
                  <p className="font-bold">Cultural Programs</p>
                  <p>Depicting pastimes of Lord Chaitanya</p>
                </div>
                <div>
                  <p className="font-bold">Prasadam Distribution</p>
                  <p>Free meals for thousands of devotees</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo and Video Gallery Section */}
          <Card className="bg-yellow-50 p-6 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-1200">
            <CardContent className="p-0">
              <h2 className="text-xl font-bold text-orange-800 mb-4">Photo & Video Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 gallery-item"
                    onClick={() => setSelectedMedia({ type: item.type, src: item.src })}
                  >
                    {item.type === 'image' ? (
                      <>
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-40 object-cover rounded-lg"
                          onError={(e) => {
                            if (e.target instanceof HTMLImageElement) {
                              e.target.src = 'https://via.placeholder.com/600x400?text=Gaura+Purnima';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white text-sm font-semibold">{item.alt}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <video
                          src={item.src}
                          className="w-full h-40 object-cover rounded-lg"
                          muted
                          onMouseOver={(e) => e.currentTarget.play()}
                          onMouseOut={(e) => e.currentTarget.pause()}
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white text-sm font-semibold">{item.title}</p>
                        </div>
                        <div className="play-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="black"
                            className="w-6 h-6"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Donation Form Section */}
          <Card className="bg-yellow-50 p-8 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-500 hover:scale-[1.02] animate-fadeIn animation-delay-1400">
            <CardContent className="p-0">
              <h2 className="text-xl font-bold text-center text-orange-800 mb-6">
                Support the Festival – Make a Donation
              </h2>
              <DonationForm preselectedCategoryId="sri-gaura-purnima" />
            </CardContent>
          </Card>

          {/* Media Modal */}
          {selectedMedia && (
            <div className="modal" onClick={() => setSelectedMedia(null)}>
              {selectedMedia.type === 'image' ? (
                <img src={selectedMedia.src} alt="Full-size image" />
              ) : (
                <video src={selectedMedia.src} controls autoPlay className="rounded-lg" />
              )}
              <button onClick={() => setSelectedMedia(null)}>✕</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GaurPurnima;