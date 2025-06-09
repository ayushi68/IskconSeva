import React from 'react';

const BooksCorner: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 font-inter">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 animate-slide-in">Books Corner</h1>
          <p className="text-2xl mb-8 text-blue-100">
            Discover the transcendental wisdom of Srila Prabhupada’s books and share the light of knowledge.
          </p>
          <button
            onClick={() => document.getElementById('book-distribution')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-200 text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-300 transition transform hover:scale-105 shadow-md"
          >
            Explore Book Distribution
          </button>
        </div>
      </header>

      {/* Book Distribution Section */}
      <main className="max-w-6xl mx-auto p-8 space-y-12">
        <section id="book-distribution" className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12 animate-fade-in">
            Book Distribution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/Activity/gifts_and_araphernalia_01.jpg"
                alt="Srila Prabhupada's Books"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
            <div>
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-4">
                “I was born in the darkness of ignorance, and my spiritual master opened my eyes with the torchlight of knowledge.”<br />
                <span className="text-sm">(Gautamīya Tantra)</span>
              </blockquote>
              <p className="text-gray-700 mb-4">
                Srila Prabhupada’s books are a beacon of spiritual wisdom, illuminating the path to transcendence. Through his Brihat Mridanga (book distribution), he opened the doors to knowledge that liberates us from ignorance.
              </p>
              <p className="text-gray-700 mb-4">
                He said, “There is no literature throughout the Universe like Śrimad Bhāgavatam. Every word is for the good of human society. Somehow or other, if a book goes in one’s hands, he will be benefited.”
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Following the instructions of his Spiritual Master, Srila Bhaktisiddhanta Saraswati Thakur, Srila Prabhupada made book distribution his life’s mission. In the lineage of Sri Chaitanya Mahaprabhu, these books carry wisdom beyond any worldly philosophy.
              </p>
              <p className="text-gray-700 mb-4">
                As Lord Krishna states in Bhagavad-Gita (18.68-69):<br />
                <em>“For one who explains this supreme secret to the devotees, pure devotional service is guaranteed, and at the end he will come back to Me. There is no servant in this world more dear to Me than he.”</em>
              </p>
            </div>
            <div>
              <img
                src="/Activity/gifts_and_araphernalia_02.jpg"
                alt="Book Distribution"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              Prabhupada said, “Book distribution is solid. Even by touching, they are benefited. It is so powerful.” (Correspondence, Honolulu, 2/2/75)
            </p>
            <p className="text-gray-700 mb-4">
              Seize this rare opportunity to share transcendental wisdom. Help spread happiness through Srila Prabhupada’s books.
            </p>
            <p className="text-gray-700">
              For queries or to participate in book distribution,{' '}
              <button onClick={scrollToForm} className="text-blue-600 underline hover:text-blue-800">
                contact us
              </button>{' '}
              at: +91-97550 98617.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BooksCorner;