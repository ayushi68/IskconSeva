import { Helmet } from "react-helmet";
import UpcomingEvents from "../components/UpcomingEvents";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

interface WisdomItem {
  image: string;
  label: string;
  path: string;
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/home/Aboutus/1.jpg',
    '/home/Aboutus/2.jpg',
    '/home/Aboutus/3.jpg',
    '/home/Aboutus/4.jpg',
    '/home/Aboutus/5.jpg',
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

    const items: WisdomItem[] = [
    {
      image: '/home/KIDS CORNER.jpg',
      label: 'KIDS CORNER',
      path: '/Kidscorner',
    },
    {
      image: '/home/YOUTH CORNER.jpg',
      label: 'YOUTH CORNER',
      path: '/Youthcorner',
    },
    {
      image: '/home/FAMILY CORNER.png',
      label: 'FAMILY CORNER',
      path: '/Familycorner',
    },
  ];

  return (
    <>
      <Helmet>
        <title>ISKCON Bhilai - Offer Seva</title>
        <meta name="description" content="Contribute to ISKCON Bhilai through various seva options including Annadana, Gaushala and Temple Development." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      
      <section
        className="relative overflow-hidden bg-black bg-cover bg-center py-16 md:py-24 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${"/home/hkm_01.png"})`, // Replace with your hero background image
        }}
      >
        
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 drop-shadow-xl">
            Support Our Mission
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Join hands with us to make a difference. Your contributions help us build temples, serve communities, and spread Krishna Consciousness worldwide.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/donation">
              <Button
              className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center"
            >
              Explore Sevas 
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

      <section className="relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Images */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-5 gap-0">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left animate-[fade-in-up_0.8s_ease-out]">
          <h2 className="text-4xl font-light italic text-blue-500 tracking-wide">Discover</h2>
          <h3 className="text-5xl font-bold text-gray-900 mt-2">OUR STORY</h3>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Curabitur quas nets lacus ets nulat iaculis loremis etis nislle varius vitae seditum
            fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit rutrum eleif arcu sit aspernatur nets fugit, sed quia.
          </p>
          <a href="/History" className="inline-block">
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full border-2 border-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              OUR RECIPES
            </button>
          </a>
        </div>
      </div>

      {/* Modal for Image Popout */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-[fade-in_0.3s_ease-out]" onClick={closeModal}>
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage}
              alt="Selected Image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-900 transition"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>


      <section className="relative py-24 px-6 bg-gradient-to-b from-amber-50 via-white to-amber-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[url('')] bg-no-repeat bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-transparent to-orange-100/30" />

        {/* Define Principles */}
        {(() => {
          interface Principle {
            title: string;
            description: string;
            image: string;
            highlight?: boolean;
          }

        const principles: Principle[] = [
          {
            title: "BOOKS ARE THE BASIS",
            description: "The study and distribution of the Vedic literatures, presented by Srila Prabhuada, help to expand our spiritual knowledge, peace and well-being.",
            image: "/home/Srilaprabhupada/Books are the Basis logo.png",
          },
          {
            title: "PURITY IS THE FORCE",
            description: "Clean living and coming together as a community in our spiritual practice has a profound effect on our consciousness and the world.",
            image: "/home/Srilaprabhupada/PURITY IS THE FORCE logo.png",
            highlight: true,
          },
          {
            title: "PREACHING IS THE ESSENCE",
            description: "Sharing is caring. Spiritual knowledge is the one wealth that actually grows as we give it away.",
            image: "/home/Srilaprabhupada/PREACHING IS THE ESSENCE logo.png",
          },
          {
            title: "UTILITY IS THE PRINCIPLE",
            description: "Yukta-vairagya - combination of connecting and renouncing. Use things around you in service to Bhagavan, but become detached at the same time.",
            image: "/home/Srilaprabhupada/Utility is Principle logo.png",
          },
        ];

        return (
          <>
            {/* Banner */}
            <div className="flex justify-center mb-16 relative z-10">
              <a href="/Sprabhpada" className="w-full max-w-5xl block group">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-orange-100 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl">
                  <img
                    src="/home/Srilaprabhupada/SP Cover Photo.jpg"
                    alt="Srila Prabhupada"
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
              </a>
            </div>

            {/* Heading */}
            <div className="text-center mb-12 relative z-10 animate-[fade-in-up_0.8s_ease-out]">
              <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-4 tracking-tight">FOUNDER-ACARYA</h2>
              <h3 className="text-xl md:text-3xl text-orange-700 font-serif tracking-wide">
                HIS DIVINE GRACE A.C. BHAKTIVEDANTA SWAMI SRILA PRABHUPADA
              </h3>
            </div>

            {/* Images Row */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 relative z-10">
              {[
                '/home/Srilaprabhupada/1.jpg',
                '/home/Srilaprabhupada/2(Only Saviour  Srila Prabhupada).jpg',
                '/home/Srilaprabhupada/3.jpg'
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Founder ${i + 1}`}
                  className="w-[280px] h-[320px] object-cover rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.05] hover:shadow-3xl"
                />
              ))}
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto text-base text-gray-700 leading-relaxed mb-16 relative z-10 animate-[fade-in-up_1s_ease-out] text-justify">
              <p className="mb-6">
                A.C. Bhaktivedanta Swami Prabhupada, affectionately known as <b>Srila Prabhupada</b>, was born Abhay Charan De in Calcutta, India, on September 1st, 1896. He is primarily known as the <b>founder-acharya of the International Society for Krishna Consciousness (ISKCON)</b>.
              </p>
              <p>
                His <b>life's mission was to spread Lord Chaitanya's message and Krishna consciousness throughout the entire world</b>, a direct instruction he received from his spiritual master, Srila Bhaktisiddhanta Saraswati Thakur Prabhupada. His guiding motto was: <b>"Preaching is the essence, purity is the force, books are the basis, and utility is the principal"</b>
              </p>
            </div>

            {/* Four Principle Cards */}
            <div className="max-w-6xl mx-auto px-4 relative z-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {principles.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                      item.highlight
                        ? "border-2 border-orange-400 hover:border-orange-500"
                        : "border border-gray-200"
                    }`}
                  >
                    <div className="w-16 h-16 mb-4">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-orange-600 font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div><br/><br/>

            <div className="max-w-4xl mx-auto text-base text-gray-700 leading-relaxed mb-16 relative z-10 animate-[fade-in-up_1s_ease-out] text-justify">
              <p className="mb-6">
                Srila Prabhupada is remembered for his <b>profound humility, unwavering faith, dedication, and compassion</b>, serving as a pure representative of the Brahma Madhwa Gaudiya Sampradaya. He consistently acted in a way pleasing to the Lord, even risking his own safety and comfort for the service of mankind and all living entities.
              </p>
              <p>
                Srila Prabhupada departed from this world on November 14th, 1977, in Vrindavan, surrounded by disciples chanting the Holy Name. He continued translating Srimad Bhagavatam until his last breath. Despite his immense success, he remained meek and humble, attributing all credit to his spiritual master for arranging everything. His life itself is considered a living example of the Vedanta Sutras, embodying pure devotion and selfless service to the Lord. He left a wealth of practical guidance, transforming countless lives and spreading the teachings of the Brahma Madhwa Gaudiya Sampradaya globally. His impact is so profound that many devotees feel that without him, they would not have been able to understand the spiritual path.
              </p>
            </div>

            {/* Signature and Button */}
            <div className="mt-16 text-center relative z-10">
              <img src="/images/signature.png" alt="Signature" className="mx-auto h-12 mb-8 opacity-90" />
              <a href="/Sprabhpada">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  KNOW MORE ABOUT HIS JOURNEY
                </button>
              </a>
            </div>
          </>
        );
      })()}
    </section>


      {/* ✅ wisdom section inserted here */}
      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 to-white py-16">
              <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading and Description */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4 animate-[fade-in-up_0.8s_ease-out]">
          EXPLORE ANCIENT SPIRITUAL WISDOM
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed animate-[fade-in-up_1s_ease-out]">
          Dive into the timeless wisdom of the ancient Vedic texts. Whether seeking answers, intellectual curiosity, or spiritual growth, our programs offer something for everyone.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="group flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Card */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-full hover:shadow-2xl transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Button */}
              <div className="mt-6 inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold group-hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      </section>

    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('')] bg-repeat bg-[length:150px_150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Images Row */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-0 mb-12 relative z-10">
          <div className="relative w-full lg:w-1/2 group overflow-hidden">
            <img
              src="/home/festival_1.jpg"
              alt="Festival Main"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative w-full lg:w-1/2 group overflow-hidden">
            <img
              src="/home/festival_2.jpg"
              alt="Festival Second"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center mx-auto bg-white/80 rounded-2xl shadow-lg p-8 md:p-12 mb-8 animate-[fade-in-up_0.8s_ease-out] border border-blue-100">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-700 mb-6 tracking-tight drop-shadow">
            CELEBRATE SACRED FESTIVALS
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mx-auto mb-8 font-light">
            Observe many festivals that keep both public and devotees spiritually enlivened.<br />
            <span className="block my-4 font-semibold text-blue-800">
              Temple means festivals, and festivals mean chanting and distribution of Prasadam.
            </span>
            <span className="block italic text-base text-blue-900 my-4">
              “Utsava means ‘pleasure.’ Whenever some function takes place to express happiness, it is called utsava. Utsava, the expression of complete happiness, is always present, uninterrupted in the Vaikuṇṭhalokas, the abode of the Lord, who is worshipable even by demigods like Brahmā.”
            </span>
            <span className="block text-sm text-gray-500 mb-2">
              (Śrīmad Bhāgavatam 3.19.31 Purport)
            </span>
            The spiritual discourses, myriad of colorful altar decorations, flower garlands, multi-course food feasts, elaborate offerings of Arati and Grand Abhishek, melodious Kīrtans, Pallaki Utsava, etc., bring transcendental joy that nothing in this world can match.<br /><br />
            <span className="block font-medium text-blue-700 mt-4">
              Prabhupada says: “Taking part in these festivals means a step forward for our self-realization. Even if you don’t understand what the festival is about, simply by taking part in chanting, dancing, and eating prasādam, your life will gradually progress in spiritual advancement.”
            </span>
          </p>
          <Link to="/festival" className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Explore Festivals
            </button>
          </Link>
        </div>
      </div>
    </section>

      {/* ✅ Donation component inserted here */}
      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 to-white py-16">
        {/* Text & Image Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="text-center lg:text-left space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
              SPONSORSHIPS & DONATIONS
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
              All spiritual activities at Hare Krishna Movement : Bhilai-Raipur are funded by the donations and sponsorships received from our well-wishers. See how you can contribute!
            </p>
            <div className="pt-4">
              <a
                href="/donate"
                className="inline-block bg-blue-600 text-white px-8 py-3 font-semibold rounded-md hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg"
              >
                OFFER SEVA
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center p-8 relative">
            <div className="relative w-full max-w-4xl h-[500px]"> {/* Set a fixed height for the collage container */}
              
              {/* Main featured image - largest and at the back */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-2xl group z-10">
                <img
                  src="/home/donation/3.jpg"
                  alt="Main donation"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Secondary image 1 - overlapping top right */}
              <div className="absolute top-10 right-10 w-1/2 h-1/2 rounded-lg overflow-hidden shadow-xl group z-20">
                <img
                  src="/home/donation/4.jpg"
                  alt="Community"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Secondary image 2 - overlapping bottom left */}
              <div className="absolute bottom-10 left-10 w-1/2 h-1/2 rounded-lg overflow-hidden shadow-xl group z-20">
                <img
                  src="/home/donation/10.jpg"
                  alt="Volunteers"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Small accent image 1 - top left corner */}
              <div className="absolute top-0 left-0 w-1/4 h-1/4 rounded-lg overflow-hidden shadow-lg group z-30 rotate-6">
                <img
                  src="/home/donation/8 (2).jpg"
                  alt="Event"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Small accent image 2 - bottom right corner */}
              <div className="absolute bottom-0 right-0 w-1/4 h-1/4 rounded-lg overflow-hidden shadow-lg group z-30 -rotate-6">
                <img
                  src="/home/donation/1.jpg"
                  alt="Celebration"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Optional decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-32 h-32 border-4 border-yellow-400 rounded-lg z-0"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 border-4 border-green-400 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
        {/* Auto-Scrolling Cards Section */}
        {/* <div className="overflow-hidden mt-16">
          <div className="flex w-max animate-scroll-left gap-6">
            {[...Array(2)].flatMap(() =>
              [
                { title: "Annadana Seva", img: "/donation1.jpg" },
                { title: "Gyaan Daan Seva", img: "/donation2.jpg" },
                { title: "Nitya Seva", img: "/donation3.jpg" },
                { title: "DEITY SERVICES", img: "/donation4.jpg" },
                { title: "GAU SEVA", img: "/donation5.jpg" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="/donate"
                  className="inline-block w-60 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                      <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                      <span className="text-sm mt-1 underline">Read More</span>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div> */}
      </section>

      {/* Existing UpcomingEvents component */}
      <UpcomingEvents />

      { /* About us section */ }
      <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Know More About Us
        </h2>
        <div className="flex flex-wrap justify-center gap-10 px-4">
          {[
            {
              title: "Our Vision",
              img: "/our-vision.png",
              link: "/OurVision",
            },
            {
              title: "Our Objectives",
              img: "/objectives.png",
              link: "/Objectives",
            },
            {
              title: "Media",
              img: "/media.png",
              link: "/Media",
            },
            {
              title: "Activities",
              img: "/activities.png",
              link: "/Activitieslp",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center group">
              <a href={item.link}>
                <div className="w-40 h-40 rounded-full border-2 border-dashed border-gray-300 mx-auto flex items-center justify-center overflow-hidden bg-white transition-all duration-700 group-hover:border-green-500 group-hover:rotate-[360deg]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-w-[70%] max-h-[70%] object-contain transition duration-500 ease-in-out group-hover:blur-sm"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <span className="text-blue-600 font-medium text-sm">Read</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/cp1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/40 to-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">INTERESTED IN OUR ACTIVITIES?</h2>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          What's your best way to a great place to have a much more<br />
          great power than having relationships between us...
        </p>
        
        {/* <div className="flex flex-col items-center space-y-4 mb-8">
          <span className="text-sm font-medium">Made in the workplace</span>
          <span className="text-sm font-medium">Notable about</span>
        </div> */}

        <div className="flex flex-col items-center space-y-4">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-sm font-semibold rounded-full w-full max-w-xs">
            FOLLOW ON WHATSAPP
          </button>
          <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-3 text-sm font-semibold rounded-full w-full max-w-xs">
            TELEGRAM GROUP
          </button>
        </div>
      </div>

      {/* SVG Wave */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-[120px] block text-[#fff7e9] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
          >
            {/* Main mirrored wave (flipped vertically) */}
            <path 
              d="M0,120 C150,40 450,100 600,40 S1050,110 1200,40 L1200,120 Z" 
              fill="currentColor"
              className="opacity-90 animate-[wave_8s_ease-in-out_infinite_alternate]"
            />
            
            {/* Secondary mirrored wave with delayed animation */}
            <path 
              d="M0,100 C200,30 400,110 600,60 S1000,90 1200,50 L1200,120 Z" 
              fill="currentColor"
              className="opacity-40 animate-[wave_12s_ease-in-out_-2s_infinite_alternate]"
            />
          </svg>
        </div>
    </section>

      {/* <section className="w-full py-12 bg-gradient-to-r from-[#2c3e50] to-[#27ae60]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8"> */}

            {/* Left Column: Centered Text */}
            {/* <div className="flex-1 flex justify-center items-center text-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Quick Contact Through Whatsapp
              </h2>
            </div> */}

            {/* Right Column: White Box with Centered, Narrower Button */}
            {/* <div className="flex-1 flex justify-center items-center">
              <div className="bg-white rounded-lg px-10 py-5 shadow-md w-full max-w-md">
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white font-semibold rounded-md px-4 py-2 block mx-auto w-48 text-center hover:bg-green-700 transition duration-300"
                >
                  @ CLICK TO CHAT
                </a>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      <section className="bg-[#f9fefa] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            
            {/* Card 1 */}
            <div className="flex items-center gap-4 group cursor-pointer transition-all">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-green-500 group-hover:text-white text-green-600 bg-white">
                <i className="fas fa-truck text-xl transition-all duration-300 group-hover:text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Free Home Delivery</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 group cursor-pointer transition-all">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-green-500 group-hover:text-white text-green-600 bg-white">
                <i className="fas fa-sync-alt text-xl transition-all duration-300 group-hover:text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Instant Return Policy</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 group cursor-pointer transition-all">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-green-500 group-hover:text-white text-green-600 bg-white">
                <i className="fas fa-headset text-xl transition-all duration-300 group-hover:text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Quick Support System</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-center gap-4 group cursor-pointer transition-all">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-green-500 group-hover:text-white text-green-600 bg-white">
                <i className="fas fa-lock text-xl transition-all duration-300 group-hover:text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Secure Payment Way</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
}
