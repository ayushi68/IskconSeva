import React from 'react';

const chantingAudios = [
  {
    title: 'Japa Round 1',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'Japa Round 2',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: 'Japa Round 3',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

const AudioPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 min-h-screen py-10 px-6">
      {/* Section 1 */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 drop-shadow-md">
            Chant with Śrīla Prabhupāda
          </h1>
          <p className="text-lg mt-4 text-gray-700">
            Chanting different Rounds with Prabhupāda
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chantingAudios.map((track, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl p-5 border border-pink-100"
            >
              <h2 className="text-lg font-semibold text-pink-700 mb-2">{track.title}</h2>
              <audio controls className="w-full rounded">
                <source src={track.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Want More?</h2>
        <p className="text-gray-700 mb-6">
          Dive deeper into the transcendental experience of chanting with Śrīla Prabhupāda
        </p>
        <a
          href="https://www.iskconpune.com/chant-with-prabhupada/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
        >
          Go to Full Chanting Page →
        </a>
      </div>
    </div>
  );
};

export default AudioPage;
