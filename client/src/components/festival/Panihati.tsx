import React from 'react';
import DonationForm from '../donation/DonationForm'; // Adjust this path if needed

const Panihati = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Image and Schedule Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image with 3D tilt effect and TypeScript fix */}
          <div className="bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:rotate-1">
            <img
              src="/images/panihati.jpg"
              alt="Cida-dahi Mahotsav Celebration"
              className="w-full h-full rounded-xl object-cover"
              onError={(e) => ((e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Cida-dahi+Mahotsav')}
            />
          </div>

          {/* Festival Schedule Card */}
          <div className="bg-yellow-300/60 border-2 border-yellow-400 backdrop-blur-md rounded-xl p-6 shadow-2xl transform hover:rotate-[-1deg] transition-transform duration-300">
            <h2 className="text-2xl font-extrabold text-green-800 mb-4 underline underline-offset-4">
              Cida-dahi Mahotsav Schedule
            </h2>

            <div className="space-y-3 text-gray-800 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-green-700">AT RAIPUR:</p>
                <p>Annual Celebration (Date TBD, 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Celebrations start from 7:30 PM onwards, culminating with a grand prasadam feast of yoghurt and chipped rice.
                </p>
              </div>
              <div className="pt-2">
                <p className="font-bold text-green-700">AT BHILAI:</p>
                <p>Annual Celebration (Date TBD, 2025)</p>
              </div>
              <div>
                <p className="font-bold">VENUE:</p>
                <p>
                  Hukam’s Lalit Mahal Naya Raipur Interchange, Serikhedi, Raipur. <br />
                  Join the ecstatic feast and kirtan in honor of Srila Raghunatha dasa Goswami and Lord Nityananda Prabhu.
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
              The Cida-dahi Mahotsav, also known as the Chipped Rice Festival of Panihati, is a yearly celebration of the pastimes of Srila Raghunatha dasa Goswami and Lord Nityananda Prabhu.
            </p>
            <p>
              This astonishing pastime took place on the banks of the Ganges at Panihati, which is just north of Calcutta. Lord Caitanya and his associates enjoyed many transcendental pastimes here. Cida-dahi Mahotsav remembers how the Lord mercifully reciprocated with His devotees by arranging, through Nityananda Prabhu and Raghunatha dasa, to provide an ecstatic feast of yoghurt and chipped rice, along with various other nectar foodstuffs. The Cida-dahi Mahotsava is celebrated every year in commemoration of this wonderful pastime. This festival is also known as Danda Mahotsava (the Festival of Punishment). We finish the day by sharing a prasadam feast.
            </p>
            <p className="italic font-semibold bg-yellow-100 p-4 rounded-lg text-center">
              “Join us in celebrating the divine mercy of Lord Nityananda Prabhu and Srila Raghunatha dasa Goswami, as we partake in the ecstatic feast of chipped rice and yoghurt on the sacred banks of the Ganges.”
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

export default Panihati;