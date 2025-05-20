import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Annadana Seva",
    description:
      "Support the sacred tradition of feeding devotees and the needy. Your contribution helps provide free, nutritious prasadam to thousands every day.",
    points: [
      
    ],
    image: "/annadana.jpg",
  },
  {
    title: "Gaushala",
    description:
      "Help protect and care for cows, considered sacred in Vedic tradition. Our Gaushala provides shelter, food, and medical care for rescued and temple cows.",
    points: [
      
    ],
    image: "/Gaushala.jpg",
  },
  {
    title: "Nitya Seva",
    description:
      "Support the daily worship and rituals offered to the Deities. Your seva ensures the temple's spiritual activities continue uninterrupted.",
    points: [
      
    ],
    image: "/nityaseva.jpg",
  },
  {
    title: "Sri Vigraha Seva",
    description:
      "Offer your devotion by contributing to the upkeep and adornment of the temple Deities. This seva includes jewelry, dresses, and altar decorations.",
    points: [
      "Deity Bhoga Seva",
      "Arati Seva",
      "Deity Seva"
    ],
    image: "/network-security.jpg",
  },
  {
    title: "Radharani’s Kitchen Seva",
    description:
      "Be a part of the divine kitchen where offerings for the Deities are prepared with devotion. Help sustain the preparation of sattvic meals for bhoga.",
    points: [
      
    ],
    image: "/network-security.jpg",
  },
  {
    title: "Rajbhog Seva",
    description:
      "Sponsor the most opulent daily offering made to the Deities, Rajbhog. This includes a variety of dishes offered with devotion at midday.",
    points: [
      
    ],
    image: "/network-security.jpg",
  },
  {
    title: "General Donation",
    description:
      "Make a general donation to support all temple activities including worship, maintenance, community service, and educational programs.",
    points: [
      
    ],
    image: "/network-security.jpg",
  },
  {
    title: "Offline Donation",
    description:
      "Prefer to give in person or via bank transfer? Contribute offline to any seva of your choice by contacting the temple office.",
    points: [
      
    ],
    image: "/network-security.jpg",
  },
  {
    title: "Become a Life Patron",
    description:
      "Join our family of Life Patrons and support the temple’s long-term sustainability. Patrons receive blessings and invitations to special events.",
    points: [
      "Life Membership Programme (Sevak)",
      "Life Membership Programme (Dharma Karta)",
      "Life Membership Programme (Dharmadhikari)",
      "Life Membership Programme (Maha Dharmadhikari)",
      "Life Membership Programme (Mukhya Dharmadhikari)",
    ],
    image: "/network-security.jpg",
  },
  {
    title: "Special Seva",
    description:
      "Sponsor a unique seva tailored for specific spiritual needs or occasions. These offerings bring blessings for personal or family welfare.",
    points: [
      "Sadhu Seva",
      "Ekadashi Seva",
      "Gyaan Daan Seva",
      "Gita Daan",
      "Bhagavatam Daan",
      "Sri Narasimha Yajna Seva ",
      "Maha Sudarshana Narasimha Yajna Seva ",
    ],
    image: "/network-security.jpg",
  },
  {
    title: "Youth Empowerment Seva",
    description:
      "Empower the next generation with values-based education, leadership training, and spiritual guidance through youth-centered programs.",
    points: [
      
    ],
    image: "/network-security.jpg",
  },
  {
    title: "Special Puja",
    description:
      "Offer a special puja for health, prosperity, or spiritual upliftment. Conducted by qualified priests according to Vedic rituals.",
    points: [
      
    ],
    image: "/network-security.jpg",
  },
  {
    title: "Festival Seva",
    description:
      "Participate in the joy of temple festivals by sponsoring decorations, feasts, and programs. Your support spreads divine celebration.",
    points: [
      "Sri Gaura Purnima",
      "Sri Rama Navami",
      "Sri Narasimha Jayanti",
      "Panihati Chida-Dahi Mahotsava",
      "Jhulan Utsava",
      "Sri Krishna Janmashtami",
      "Sri Vyasa Puja",
      "Sri Radhashtami",
      "Deepotsava",
      "Govardhana Puja",
      "Sri Vaikuntha Ekadashi",
      "Gita Jayanti",
     "Sri Nityananda Trayodashi",
    ],
    image: "/network-security.jpg",
  },
];


export default function ServicesPage() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <div className="bg-white py-16 px-[60px] md:px-[100px] lg:px-[150px] xl:px-[200px]">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Offer Seva
        </h1>
      </div>

      {/* Service Rows */}
      <div className="space-y-24">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            {/* Text Column */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-500 mb-6">{service.description}</p>
              {service.points.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="font-semibold text-black">
                      <span className="text-blue-600 mr-2">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <Link to="/donation">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition">
                  Donate Now <span className="ml-1">↗</span>
                </button>
              </Link>
            </div>

            {/* Image Column */}
            <div className="md:w-1/2 bg-orange-100 p-3 rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {!showAll && services.length > 3 && (
        <div className="text-center mt-16">
          <button
            onClick={() => setShowAll(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            See All Sevas ({services.length - 3} more)
          </button>
        </div>
      )}
    </div>
  );
}