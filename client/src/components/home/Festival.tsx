import React from "react";

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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-yellow-300 font-semibold tracking-wider uppercase">// Our Festivals</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Celebrate with Devotion</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Join us in celebrating the sacred festivals that bring us closer to the divine through devotion, love, and community.
          </p>
        </div>
      </section>

      {/* Festivals Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 group"
            >
              {/* Background Image with Fade Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                }}
              ></div>

              {/* Overlay with Subtle Tint */}
              <div
                className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700 delay-100"
              ></div>

              {/* Card Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="text-5xl mb-4 animate-bounce">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Festival;