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
    phone: '080-2256-0647',
    email: 'contact@iskconbangalore.org',
  },
  {
    title: 'Hare Krishna Movement – Nathdwara',
    location: 'Nathdwara',
    address: `Ganesh Tekari Road, Nathdwara – 313 301
Dist. Rajsamand, Rajasthan`,
    phone: '09828994218',
    email: 'info@hkmnathdwara.org', // Retained original email to avoid duplication with Mysore
  },
  {
    title: 'ISKCON Sri Krishna Balaram Mandir – Bellary',
    location: 'Bellary',
    address: `SG Colony, Sandur-Bellary Road, Toranagallu, Bellary – 583 123 (Karnataka)`,
    phone: '09449876380',
    fax: '08395-250 655',
    email: 'Info.Bellary@Hkm-Group.Org',
  },
  {
    title: 'Hare Krishna Movement – Chennai',
    location: 'Chennai',
    address: `No.63 1st Seaward Road
Valmikinagar, Thiruvanmiyur
Chennai – 600041 (Tamil Nadu)`,
    phone: '044-24455100 / 097890 57105',
    email: 'info.chennai@hkm-group.org',
    website: 'www.hkm-chennai.org',
  },
  {
    title: 'Hare Krishna Movement – Delhi',
    location: 'Delhi',
    address: `57A, Akash Neem Marg
DLF Phase-2, Near Sikanderpur Metro
Gurgaon – 122 002`,
    phone: '096504 99732 / 087559 03396',
    email: 'info.delhi@hkm-group.org', // Corrected email to match website
    website: 'info.delhi@hkm-group.org',
  },
  {
    title: 'ISKCON Sri Krishna Balaram Mandir – Dharwad',
    location: 'Dharwad',
    address: `Pune – Bangalore Road
Rayapur, Dharwad – 580009 (Karnataka)`,
    phone: '+91-9228023235',
    telefax: '079-23287304',
    email: 'ahmedabad.hkm@hkm-group.org',
  },
  {
    title: 'Hare Krishna Movement – Guwahati',
    location: 'Guwahati',
    address: `C/o The Akshaya Patra Foundation
Numalijuala, Sila Sidhuri Gopa, NH-31
Amingaon, Guwahati-781 031 (Assam)`,
    phone: '0361-273 5421 / 09678007302',
    email: 'info.guwahati@hkm-group.org',
  },
  {
    title: 'Hare Krishna Movement – Hyderabad',
    location: 'Hyderabad',
    address: `Swayambhu Sri Lakshmi Narasimha Swamy Kshetram
Hare Krishna Hill, Road #12, N. B. T. Nagar
Banjara Hills, Hyderabad – 500034 (Andhra Pradesh)`,
    phone: '040-23326999 / 093917 72355',
    email: 'info.hyd@hkm-group.org',
    website: 'www.hkm-hyderabad.org',
  },
  {
    title: 'ISKCON – Mangalore',
    location: 'Mangalore',
    address: `Arya Samaj Road
Balmatta, Mangalore – 575 003 (Karnataka)`,
    phone: '0824-241 0722 / 244 3784',
    email: 'info.mangalore@hkm-group.org',
  },
  {
    title: 'Hare Krishna Movement – Mumbai',
    location: 'Mumbai',
    address: `Kukreja Residency, 1st Floor "A" Wing, 101
Opp. Dukes Company, Waman Tukaram Patil Marg
Deonar, Borla (Near RK Studios), Chembur, Mumbai (Maharashtra)`,
    phone: '09799999865',
    email: 'info.mumbai@hkm-group.org',
  },
  {
    title: 'ISKCON Nava Brindavan Dham – Mysore',
    location: 'Mysore',
    address: `No. 31, 18th Cross
Jayanagar, Mysore -570 014 (Karnataka)`,
    phone: '0821-250 0582 / 656 7333',
    email: 'mysore.iskcon@gmail.com',
    website: 'www.iskconmysore.org',
  },
  {
    title: 'Hare Krishna Movement – Puri',
    location: 'Puri',
    address: `C/o Ashaya Patra Foundation
Grand Road, Balagandi
Puri – 752 001 (Orissa)`,
    phone: '09937057524',
    email: 'Info.Puri@Hkm-Group.Org',
    website: 'www.hkmpuri.org',
  },
  {
    title: 'Hare Krishna Movement – Visakhapatnam',
    location: 'Visakhapatnam',
    address: `Plot no. 212, Double Road
MVP Colony, Sector IV
Visakhapatnam – 530 017 (Andra Pradesh)`,
    phone: '0891-270 5295 / 09666611108',
    email: 'info.vizag@hkm-group.org',
    website: 'www.hkm-vizag.org',
  },
  {
    title: 'Sri Radha Vrindavanchandra Mandir – Vrindavan',
    location: 'Vrindavan',
    address: `Gopal Garh, Chhatikara Road
Vrindavan – 281 121, Mathura Dt. (Uttar Pradesh)`,
    phone: '0565-600 0727 / 291 3095',
    email: 'info.vrn@hkm-group.org',
    website: 'www.harekrishna-movement.org',
  },
  {
    title: 'Hare Krishna Farm – Srirangapatna',
    location: 'Srirangapatna',
    address: `Mahadevapura
Srirangapatna Taluk, Mandya Dt. (Karnataka)`,
    phone: '0823-625 0391 / 92 / 93',
    email: 'info.vrn@hkm-group.org',
  },
  {
    title: 'Sri Krishna Balaram Mandir – Sunnyvale, USA',
    location: 'Sunnyvale, USA',
    address: `1235 Reamwood Ave
Sunnyvale, CA – 94089 (California, USA)`,
    phone: '+1-408-657-8485',
    email: 'info@kbmandir.org',
    website: 'www.kbmandir.org',
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
