import React from "react";
//import spinachImg from "./assets/spinach.jpg"; // Adjust the path based on your project structure
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
  } from 'lucide-react';
  
  const socialIcons = [
      { icon: <Facebook size={16} />, href: 'https://facebook.com' },
      { icon: <Twitter size={16} />, href: 'https://twitter.com' },
      { icon: <Linkedin size={16} />, href: 'https://linkedin.com' },
      { icon: <Instagram size={16} />, href: 'https://instagram.com' },
    ];

const History: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug mb-4">
        It Is Said In Srimad Bhagavatham,
        <br />
        <span className="italic">
          Yathā Taror Mūla-Niṣecanena Tṛpyanti Tat-Skandha-Bhujopasākhāḥ Prāṇop….
        </span>
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        If you serve Krishna, then Krishna gives you the opportunity to serve everyone. To serve Krishna is the best service to the nation, to the family, to self, to everybody.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        To make this true, by following the teachings of the Founder Acharya of the World wide Hare Krishna Movement, His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada, Hare Krishna movement, Bhilai started providing humble services to the society in the year 2008.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The movement follows the principles of the Gaudiya Vaishnava spiritual tradition that dates back to Krishna Himself, the Supreme Personality of Godhead – who appeared on the earth and spoke the Bhagavad Gita over five thousand years ago. The goal of bhakti yoga is to recover our natural sense of connectedness with that one Supreme God by serving Him with love.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div>
          <img
            src={"/cp1.jpg"}
            alt="Spinach"
            className="rounded-md shadow-md w-full"
          />
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed">
            The temple at Bhilai had a very humble beginning with few devotees and a small temporary set up but gradually by the blessings of Their Lordships Sri Sri Radhakrishnachandra the temple took an elegant form. In the year 2010 Nitai Gauranga blessed the Bhilaians in the form of archa vigraha. Finally the Supreme Lord, Krishna along with His eternal consort, Radharani blessed the residents of Bhilai when they arrived in the form of archa vigraha in 2012.
          </p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mt-6">
        The temple is constructed with exquisite marble and the ambience is very soothing and pleasing. The temple is situated in the city but the structure of the temple is traditional and the attraction towards its scenic beauty is enhanced by the tall trees, pond and the thatched roofs. Anyone who enters the temple gets carried away by the charisma of Their Lordships and the spectacular natural beauty of the temple. Prabhupad’s life size deity looks so magnificent placed inside the temple adjacent to the main altar. The interiors of the temple is decorated by beautiful pictures of Chaitanya Mahaprabhu and Prabhupad. The peaceful and tranquil atmosphere is the major factor that attracts people to visit repeatedly.
      </p>

      <p className="text-gray-700 leading-relaxed mt-6">
        The culmination of all forms of yoga, knowledge, meditation and spirituality is the awareness of love and affection for the Supreme person, Krishna. This is the mission of Chaitanya Mahaprabhu who is Krishna Himself who appeared almost five hundred twenty five years back. HKM Bhilai propagates these teachings in various activities conducted at our temple premises and outside too. The cultural and educational programs includes special Sunday programs, Bhagavatham and Bhagavad Gita classes, Youth Empowering Programs like Vedic Science class, Yoga Retreat classes, Kid’s Club like Gopal Sakha, Cultural Camp and Heritage Festival, Vedanta study classes like Krishna Aashraya Programs , seminars for students and corporate officers, House Programs, Bhajans, Kirtans, etcs. These kinds of practices are meant to free us from the root cause of all anxiety by reawakening our normal eternal happiness.
      </p>
      <div className="flex items-center space-x-3 mt-8">
      <span className="text-gray-700 font-semibold">Share:</span>
      {socialIcons.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
        >
          {item.icon}
        </a>
      ))}
    </div>
    </div>
  );
};

export default History;
