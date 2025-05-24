import React from 'react';
import DonationForm from '../donation/DonationForm'; // adjust this path if needed

const GaurPurnima = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/path-to-your-image/gaurapurnima.jpg"
              alt="Gaur Purnima Celebration"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-yellow-300/60 border-2 border-yellow-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-green-800 mb-4 underline underline-offset-4">
              Gaur Purnima Festival Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-green-700">AT RAIPUR:</p>
                <p>6TH SEPTEMBER 2023</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Celebrations would start from 7.30 PM onwards and will culminate with Sri Sri RadhaKrishna Maha Abhishek & Maha Arati.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-green-700">AT BHILAI:</p>
                <p>6TH SEPTEMBER 2023</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur.
                Celebrations would start from 7.30 PM onwards and will culminate with Sri Sri Radha
                Krishna Maha Abhishek & Maha Arati.
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                REGISTER
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02]">
          <div className="text-gray-700 text-sm space-y-4 leading-relaxed">
            <p>
            The Supreme Lord Sri Krishna appeared as Sri Chaitanya Mahaprabhu to establish Sankirtana Movement – the yuga dharma for this age of Kali. He appeared on Phalguni Purnima (the full moon day in the month of Phalguna) in the year 1486 AD (1407 Shakabda) at Sridham Mayapur 150 Kms North of Kolkata as the son of Sri Jagannath Mishra and Srimati Sachidevi. His parents named him Nimai since the child was born under a nimba (neem) tree in the courtyard of His paternal house.
            </p>
            <p>
            The Supreme Lord Sri Krishna wanted to personally inaugurate the sankirtana movement and teach us how to perform devotional service through His personal example. So He appeared as a devotee (bhakta rupa) accepting the mood of Radharani (the top-most devotee of the Lord). His appearance day is celebrated as Gaura Purnima.
            </p>
            <p>
            At Hare Krishna movement, BHILAI, the festival starts at 6:30 PM. The utsava Deities of Sri Sri Nitai Gauranga are carried in a palaki decorated with varieties of flowers, in a procession. Devotees perform maha sankirtana to please the Supreme Lord. The Hare Krishna Maha-Mantra vibrates in every corner of the temple. Harinam Sankirtan will be performed whole day by devotees highlighting the mission of Lord Chaitanya who spread the chanting of Lord Krishna’s holy names all over India.
            After the procession, the Deities of Nitai Gauranga (Lord Nityananda and Lord Chaitanya) receive a grand abhishekam
            </p>
            <p>
            As on this day Holika Dahan is done in the remembrance of Pure devotion of Bhakta Prahalad, A grand Pallaki of Nitai Gauranga Proceeds for Holika Dahan. After Holika Dahan, Holi of Flowers is celebrated. All devotees get opportunity to offer flowers to their lordship Radha Krishna and Nitai Gauranga. During this time whole environment of temple premises become colorful.
            </p>
            <p>
            Festival concludes with the feast to all the devotees.
            </p>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-xl">
          <h2 className="text-xl font-bold text-center text-green-700 mb-6">
            Support the Festival – Make a Donation
          </h2>
          <DonationForm />
        </div>
      </div>
    </div>
  );
};

export default GaurPurnima;
