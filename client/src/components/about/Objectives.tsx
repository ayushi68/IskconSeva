import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
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

const Objectives = () => {
  const objectives = [
    "To promote an understanding of the universal and axiomatic principles of sanatana-dharma and varnasrama-dharma as revealed through the Vedic scriptures and as particularly embodied by Vaishnavism, and to explain how these relate to the tradition generally called Hinduism.",
    "To counteract the portrayal of Hindu theology as either (a) exclusively impersonal or (b) impersonal at best (i.e. monistic, polytheistic, anthropomorphic, but never monotheistic).",
    "To counteract the general portrayal of the Vedic tradition as primitive and superstitious.",
    "To promote the study of religion in general (and Hinduism in particular) from the experiential and faith perspective as well as from (or in preference to) the empirical and academic point of view.",
    "To demonstrate the influence of the British on Hinduism, especially with reference to the reform movements, and how this may still colour our comprehension of the tradition.",
    "To redress the exclusive adherence to modern empiricism to date the history and development of Hinduism, neglecting to mention the opinions of the tradition itself.",
    "To establish understanding and appreciation of the principles behind the original caste system, i.e. varnasrama-dharma.",
    "To abolish other misconceptions about practices which fall under “dismissive designations” such as untouchability, ritual purity / pollution, child marriage, sati, image worship, the Hindu pantheon, the sacred cow, etc.",
    "To promote the prominence of certain historical figures. These would include Madhva, Ramanuja and Caitanya, perhaps mentioning the latter’s contribution as a social reformer. In more recent history we could include the names of Bhaktivinoda, Bhaktisiddhanta and Çréla Prabhupäda.",
    "To demonstrate the relevance of the Vedic scriptures to personal, social and moral education and the issues it raises such as health, the environment, violence etc.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Hare Krishna Movement Is A Charitable Society<br />With The Following Objectives:
        </h1>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="bg-white p-6 rounded-md relative">
            <FaQuoteLeft className="text-green-600 text-3xl absolute -top-4 -left-4 bg-white p-1 rounded-full shadow" />
            <ol className="list-decimal list-inside space-y-4 text-gray-800 text-sm md:text-base">
              {objectives.map((obj, index) => (
                <li key={index}>{obj}</li>
              ))}
            </ol>
          </div>
        </div>
        {/* <div className="flex justify-center mt-8 space-x-4">
          {['facebook', 'twitter', 'linkedin', 'pinterest', 'instagram'].map((platform, idx) => (
            <button
              key={idx}
              className="bg-white rounded-full p-2 shadow hover:scale-105 transition-transform"
              aria-label={platform}
            >
              <img src={`/icons/${platform}.svg`} alt={platform} className="w-5 h-5" />
            </button>
          ))}
        </div> */}
      </div>
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

export default Objectives;
