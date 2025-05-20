import React, { useState } from "react";

const services = [
  {
    title: "Gaura Purnima",
    description: "Celebration of Lord Chaitanya Mahaprabhu's appearance day, the golden avatar of love and devotion.",
    icon: "🟡",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop"
  },
  {
    title: "Rama Navami",
    description: "Commemoration of Lord Rama's birth, celebrating the ideals of righteousness and dharma.",
    icon: "🏹",
    bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop"
  },
  {
    title: "Narasimha Chaturdashi",
    description: "Festival honoring Lord Narasimha's appearance to protect His devotee Prahlada.",
    icon: "🦁",
    bgImage: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop"
  },
  {
    title: "Panihati Chida-dahi Mahotsava",
    description: "Celebration of Raghunatha dasa Goswami's mercy through the distribution of chipped rice and yogurt.",
    icon: "🍚",
    bgImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&auto=format&fit=crop"
  },
  {
    title: "Jhulan Yatra",
    description: "The swing festival celebrating the divine love of Radha and Krishna during summer months.",
    icon: "🌺",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  },
  {
    title: "Sri Krishna Janmashtami",
    description: "Joyous celebration of Lord Krishna's birth with fasting, kirtan, and midnight festivities.",
    icon: "🪕",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  },
  {
    title: "SP's Vyasa Puja",
    description: "Annual worship ceremony honoring the spiritual master's appearance day.",
    icon: "📿",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  },
  {
    title: "Radhashtami",
    description: "Celebration of Srimati Radharani's appearance day, the embodiment of divine love.",
    icon: "🌹",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  },
  {
    title: "Deepotsava",
    description: "Festival of lights celebrating Lord Rama's return to Ayodhya (Diwali in Vaishnava tradition).",
    icon: "🪔",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  },
  {
    title: "Govardhan Puja",
    description: "Worship of Govardhan Hill commemorating Krishna's lifting of the hill to protect Vrindavan.",
    icon: "⛰️",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  },
  {
    title: "Gita Jayanti",
    description: "Celebration of the day Lord Krishna spoke the Bhagavad-gita to Arjuna on the battlefield.",
    icon: "📖",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  },
  {
    title: "Vaikuntha Ekadashi",
    description: "Most auspicious Ekadashi when the gates to Vaikuntha (spiritual world) are opened.",
    icon: "🚪",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  },
  {
    title: "Akhanda Harinaam Sankirtan",
    description: "24-hour continuous chanting of the holy names in congregational worship.",
    icon: "🕉️",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  },
  {
    title: "Nityananda Trayodashi",
    description: "Appearance day celebration of Lord Nityananda, the most merciful incarnation of the Lord.",
    icon: "🌿",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop"
  }
];

const Festival = () => {
  return (
    <div className="bg-white py-16 text-center">
      <p className="text-purple-600 font-semibold">// OUR FESTIVAL</p>
      <h2 className="text-3xl font-bold mb-12">FESTIVALS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative service-card overflow-hidden bg-white shadow-md rounded-lg p-8 transition-all duration-300 h-full group"
          >
            {/* Background image that will slide in */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"
              style={{ 
                backgroundImage: `url(${service.bgImage})`,
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="icon text-4xl text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>

            {/* Sliding effect overlay */}
            <div 
              className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 delay-100"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Festival;
