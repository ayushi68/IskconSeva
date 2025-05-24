import React, { useState, useEffect } from 'react';

const Pranammantra: React.FC = () => {
  // Carousel images (replace with actual temple/deity-related image URLs)
  const images = [
    'https://via.placeholder.com/1200x500?text=Srila+Prabhupada+1',
    'https://via.placeholder.com/1200x500?text=Nitai-Gauranga+2',
    'https://via.placeholder.com/1200x500?text=Krishna+Consciousness+3',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-green-100">
      {/* Header Carousel Section */}
      <section className="w-full h-[500px] relative overflow-hidden shadow-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Pranam Mantra Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg transform transition-transform hover:scale-105">
            Pranam Mantra: Honoring the Divine
          </h1>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImage ? 'bg-white' : 'bg-gray-400'
              } shadow-md`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Srila Prabhupada Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">
          Srila Prabhupada: The Torchbearer of Krishna Consciousness
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, born in 1896 in
          Kolkata, founded the International Society for Krishna Consciousness
          (ISKCON) in 1966. Following his spiritual master’s instructions, he
          spread Krishna Consciousness worldwide, establishing over 100 temples,
          ashrams, schools, and cultural centers in just 12 years. His most
          significant contribution is his authoritative books, including
          <span className="italic"> Bhagavad-gita As It Is</span>,
          <span className="italic"> Srimad-Bhagavatam</span>, and
          <span className="italic"> Sri Caitanya-caritamrita</span>, translated
          into 76 languages and used in university courses.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-green-500 pl-4 my-4">
          om ajnana-timirandhasya jnananjana-salakaya<br />
          caksur unmilitam yena tasmai sri-gurave namah<br />
          <span className="text-sm">— Srila Prabhupada Pranama Mantra</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          This mantra honors Srila Prabhupada, who opened the eyes of the world
          with the torch of Vedic knowledge, delivering the West from
          impersonalism and voidism.
        </p>
      </section>

      {/* Their Lordships Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-green-50 to-teal-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Their Lordships: Sri Sri Nitai-Gauranga
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Lord Caitanya Mahaprabhu, known as Gauranga for His golden complexion,
          is the most munificent incarnation of Krishna, distributing pure love of
          God. Appearing 500 years ago in Navadwip, He embodied the role of a
          devotee to teach the glory of Radha’s love. Lord Nityananda, a
          manifestation of Balarama, serves as the spiritual master, guiding
          devotees to Krishna. Together, as Nitai-Gauranga, they inaugurated the
          congregational chanting of the Holy Names, bringing happiness and mercy
          to all.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-green-500 pl-4 my-4">
          namo mahā-vadānyāya kṛṣṇa-prema-pradāya te<br />
          kṛṣṇāya kṛṣṇa-caitanya-nāmne gaura-tviṣe namaḥ<br />
          <span className="text-sm">— Sri Gauranga Pranama Mantra</span>
        </blockquote>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-green-500 pl-4 my-4">
          nityānandaṁ ahaṁ naumi sarvānanda-karaṁ param<br />
          hari-nāma-pradaṁ devam avadhūta-śiromaṇim<br />
          <span className="text-sm">— Sri Nityananda Pranama Mantra</span>
        </blockquote>
      </section>

      {/* Prasadam Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Prasadam: The Mercy of Krishna
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Prasadam, meaning “mercy of Krishna,” transforms food into a spiritual
          offering. Srila Prabhupada humorously noted, “We’re not vegetarians, we’re
          Krsnatarians,” emphasizing that food offered to Krishna with devotion
          purifies the soul. As stated in
          <span className="italic"> Bhagavad-gita 3.13</span>, devotees eating
          sanctified food are freed from sins, unlike those who cook for personal
          enjoyment.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-green-500 pl-4 my-4">
          yajṣa-śiṣṭāśinaḥ santo mucyante sarva-kilbiṣaiḥ<br />
          <span className="text-sm">— Bhagavad-gita 3.13</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          Preparing bhoga (food) for Krishna involves using pure ingredients like
          milk products, vegetables, fruits, nuts, and grains, avoiding meat, eggs,
          onions, garlic, and caffeine. The kitchen, an extension of the altar,
          must be clean, and food is offered with prayers to Srila Prabhupada, Lord
          Caitanya, and Krishna, transforming it into prasadam.
        </p>
      </section>

      {/* Devotional Practices Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-teal-50 to-green-100 shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Living Krishna Consciousness
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Srila Prabhupada instructed devotees to chant at least 16 rounds of the
          Hare Krishna Mahamantra daily and follow four regulative principles:
          avoiding meat, gambling, intoxicants, and illicit sex. These practices
          purify the mind and align life with Krishna’s service.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Devotees engage in practical service, whether through temple activities,
          distributing literature, or offering their work to Krishna. As stated in
          <span className="italic"> Bhagavad-gita 3.9</span>, work done as a
          sacrifice for Vishnu frees one from material bondage.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-green-500 pl-4 my-4">
          yajñārthāt karmaṇo ’nyatra loko ’yaṁ karma-bandhanaḥ<br />
          <span className="text-sm">— Bhagavad-gita 3.9</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          The five pillars of bhakti-yoga—sadhu sanga, nama kirtana, bhagavata
          sravana, Mathura vasa, and deity worship—purify the heart. Associating
          with devotees, reading Srila Prabhupada’s books, and chanting the Lord’s
          names are essential for spiritual progress.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white shadow-xl rounded-lg mx-4 my-8 transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Embrace Krishna Consciousness
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Krishna Consciousness offers eternal bliss, as guaranteed in
          <span className="italic"> Bhagavad-gita 2.40</span>: even a small step
          protects from great fear. Srila Prabhupada’s teachings, embodied in his
          books, guide us to live for Krishna, transforming every action into
          devotional service.
        </p>
        <blockquote className="text-lg text-gray-600 italic border-l-4 border-green-500 pl-4 my-4">
          smartavyaḥ satataṁ viṣṇur vismartavyo na jātucit<br />
          <span className="text-sm">— Sri Caitanya-caritamrita Madhya-lila 22.113</span>
        </blockquote>
        <p className="text-lg text-gray-600 leading-relaxed">
          For guidance or to connect with devotees, contact HKM Bhilai at{' '}
          <a
            href="mailto:contact@hkmbhilai.org"
            className="text-green-600 hover:underline"
          >
            contact@hkmbhilai.org
          </a>{' '}
          or call{' '}
          <a
            href="tel:+919755098615"
            className="text-green-600 hover:underline"
          >
            +91 9755098615
          </a>.
        </p>
        <a
          href="mailto:contact@hkmbhilai.org"
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transform transition-transform hover:scale-105"
        >
          Connect with Us
        </a>
      </section>
    </div>
  );
};

export default Pranammantra;