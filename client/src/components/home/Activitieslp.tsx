import React, { useState } from 'react';

const services = [
  {
    title: "Annadana Seva ",
    img: "/Activity/annadana_seva_02.jpg",
    description: "Annadana Seva is a noble initiative to provide free meals to those in need, ensuring that no one goes hungry.",
    link: "/Annadana"
  },
  {
    title: "Gaushala Seva",
    img: "/Activity/gaushala_01.jpg",
    description: "Gaushala Seva is dedicated to the care and protection of cows, promoting their well-being and importance in our culture.",
    link: "/Gaushala"
  },
  {
    title: "Youth's Corner(FOLK)",
    img: "/Activity/folk_yatra_02.jpg",
    description: "Youth's Corner (FOLK) is a vibrant space for young people to explore their creativity and cultural heritage through folk arts.",
    link: "/Youthcorner"
  },
  {
    title: "Kid's Corner",
    img: "/Activity/culture_camp_02.jpg",
    description: "Kid's Corner is a playful and educational space designed for children to learn and grow through interactive activities.",
    link: "/Kidscorner"
  },
  {
    title: "Family's Corner",
    img: "/Activity/hare_krishna_satsang _01.jpg",
    description: "Family's Corner is a welcoming space for families to come together, share experiences, and participate in community activities.",
    link: "/Familycorner"
  },
  {
    title: "Book Distribution",
    img: "/Activity/gifts_and_araphernalia_02.jpg",
    description: "Book Distribution is a community initiative aimed at promoting literacy and education by providing free books to those in need.",
    link: "/Bookscorner"
  },
  {
    title: "Harinam Mantapa",
    img: "/Activity/harinaam_mandap_01.jpg",
    description: "Harinam Mantapa is a spiritual space dedicated to the chanting of the holy names and fostering a sense of community.",
    link: "/Harinam"
  },
  {
    title: "Gifts ",
    img: "/Activity/gifts_and_araphernalia_01.jpg",
    description: "Gifts is a thoughtful initiative aimed at providing meaningful presents to those in need, spreading joy and kindness.",
    link: "/Gifts"
  },
  {
    title: "Catering Services",
    img: "/Activity/catering_service_01.jpg",
    description: "Catering Services offers a range of delicious and nutritious meal options for events and gatherings.",
    link: "/Catering"
  },
  {
    title: "Akshaya Patra",
    img: "/Activity/akshaya_patra_02.jpg",
    description: "Akshaya Patra is a mid-day meal program aimed at combating hunger and promoting education.",
    link: "/Akshaypatra"
  },
  {
    title: "Pilgrimage Tours",
    img: "/Activity/vrindavan_dham_yatra.jpg",
    description: "Pilgrimage Tours offers curated travel experiences to sacred sites, fostering spiritual growth and community.",
    link: "/Pilgrimage"
  },
];

const Activitieslp: React.FC = () => {
  // Function to handle navigation
  const navigateToService = (link: string) => {
    window.location.href = link; // Traditional page navigation
  };

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
                  <button 
                    onClick={() => navigateToService(service.link)}
                    className="mt-4 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                  >
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
