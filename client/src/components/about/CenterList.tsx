import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
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

const centers = [
  {
    title: 'ISKCON - BANGALORE',
    location: 'BANGALORE',
    address: `Hare Krishna Hill, Chord Road, Bangalore - 560062 (Karnataka)
Regd. & Head Office : Survey No. 55, Vaikuntha Hill, Vasanthapur, Kanakapura Road, Bangalore – 560062 (Karnataka)`,
    phone: '080-2256 0647',
    email: 'contact@iskconbangalore.org',
  },
  {
    title: 'Hare Krishna Movement – Nathdwara',
    location: 'Nathdwara',
    address: `Ganesh Tekari Road, Nathdwara – 313 301
Dist. Rajsamand, Rajasthan`,
    phone: '09828994218',
    email: 'info@hkmnathdwara.org',
  },
  {
    title: 'ISKCON Sri Krishna Balaram Mandir – Bellary',
    location: 'Bellary',
    address: `SG Colony, Sandur-Bellary Road, Toranagallu, Bellary – 583 123 (Karnataka)`,
    phone: '09449876380',
    fax: '08395-250 655',
    email: 'Info.Bellary@Hkm-Group.Org',
  },
];

const CenterList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-10 leading-tight">
          Our Spiritual Centers Across India
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {centers.map((center, index) => (
            <div
              key={index}
              className="bg-white border border-green-100 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 rounded-xl p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-green-700">{center.title}</h2>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {center.location}
                </span>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="text-sm whitespace-pre-line">{center.address}</p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="text-sm">{center.phone}</p>
                    {center.fax && (
                      <>
                        <div className="flex items-start gap-2 mt-2">
                          <Fax className="w-4 h-4 text-green-500 mt-1" />
                          <p className="text-sm">Fax: {center.fax}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div> */}

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-500 mt-1" />
                  <p className="text-sm break-all">{center.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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

export default CenterList;
