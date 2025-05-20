import React, { useState } from 'react';

const services = [
  {
    title: "Annadana Seva ",
    img: "/Annadana.jpg",
    description: "We provide comprehensive outsourcing solutions tailored to your business needs."
  },
  {
    title: "Gaushala Seva",
    img: "/gaushala.jpg",
    description: "Bespoke software development designed to solve your unique business challenges."
  },
  {
    title: "Youth's Corner(FOLK)",
    img: "/download.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Kid's Corner",
    img: "/festivalpuja.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Family's Corner",
    img: "/nityaseva.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Book Distribution",
    img: "/vigraha.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Harinam Mantapa",
    img: "/youthseva.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Gifts and Paraphernalia ",
    img: "/specialpuja.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Catering Services",
    img: "/hq720.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Akshaya Patra",
    img: "/rajbhogseva.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Book a ceremony (Samskaras and Ceremonies)",
    img: "/hkm-logo.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Open Lawn/Banquet Hall",
    img: "/radharaniseva.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Guest House",
    img: "/generaldonation.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
  {
    title: "Pilgrimage Tours",
    img: "/download.jpg",
    description: "Innovative product design services from concept to final implementation."
  },
];

const Activitieslp: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 lg:px-24">
      {/* Full-width heading background with increased height */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[rgb(206,204,204)] pt-14 pb-24 mb-[-80px]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Activities
          </h2>
        </div>
      </div>

      {/* Regular content container */}
      <div className="max-w-7xl mx-auto relative z-10 pt-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group h-72 [perspective:1000px]">
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className={`absolute inset-0 w-full h-full rounded-xl shadow-lg [backface-visibility:hidden] overflow-hidden ${idx % 3 === 0 ? 'bg-[rgb(242,242,242)]' : ''}`}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className={`w-full h-full object-cover ${idx % 3 === 0 ? 'mix-blend-multiply' : ''}`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex flex-col items-center justify-center text-center"
                  style={{ backgroundColor: 'rgb(38, 32, 81)' }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                  <button className="mt-4 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activitieslp;
