import React from 'react';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
} from 'lucide-react';

const socialIcons = [
    { icon: <Facebook size={16} />, platform: 'Facebook', href: 'https://facebook.com' },
    { icon: <Twitter size={16} />, platform: 'Twitter', href: 'https://twitter.com' },
    { icon: <Linkedin size={16} />, platform: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <Instagram size={16} />, platform: 'Instagram', href: 'https://instagram.com' },
];

const OurVision: React.FC = () => {
  // Define the page URL, title, and summary for sharing
  const pageUrl = encodeURIComponent('/OurVision'); // Replace with actual page URL
  const pageTitle = encodeURIComponent('Our Vision - Krishna Consciousness');
  const pageSummary = encodeURIComponent('Learn about the philosophy of Krishna Consciousness and how it brings happiness, peace, and spiritual growth.');

  // Define sharing URLs for each platform
  const shareLinks = {
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    Twitter: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageSummary}`,
    LinkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${pageSummary}`,
    Instagram: 'https://instagram.com', // Direct sharing not supported; link to Instagram page
  };

  return (
    <div className=" bg-gradient-to-b from-blue-500 to-blue-500 font-sans">
      {/* Header Section */}
      <header className="bg-blue-800 text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Vision
        </h1>
        <p className="text-xl md:text-2xl italic">
          We Are Trying To Give Human Society An Opportunity For A Life Of Happiness, Good Health, Peace Of Mind And All Good Qualities Through God Consciousness
        </p>
      </header>

      {/* Main Content Section */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction Section with Image */}
        <section className="mb-12 bg-white shadow-xl rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Understanding Our Spiritual Nature
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Vedas say we are all spiritual beings—eternal, blissful, full of knowledge—and so is God. The difference is God is infinite and we are not. In this world, everyone mistakenly thinks their temporary body is their real self. We belong in the spiritual world with God (one of Whose names is Krishna, "the ALL-attractive one"). But until our pure love for Him awakens—and we no longer want to try to enjoy separately from Him—we must stay in the material world.
              </p>
              
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <img
                src="/about/Our Vision/ABOUT US 1ST PHOTO REF IMAGE.jpg"
                alt="Devotees chanting Hare Krishna mantra"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            Challenges of Material Life
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>We suffer from old age, disease, and eventually die.</li>
            <li>The reactions to our activities, or karma, force us to take repeated births in various species.</li>
            <li>Whatever sensual pleasure we do get is temporary and ultimately disappointing.</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our life is perfect once we find a teacher, or guru, who can show us how to purify our consciousness and reestablish our love and service attitude for God. The easiest (and most highly recommended) method of self-purification is to chant the holy names of God—the Hare Krishna mantra—in the company of like-minded spiritual seekers, or devotees of Krishna.
          </p>
        </section>

        {/* Quote Section with Sanskrit Verse */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
            स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Svalpam apy asya dharmasya trāyate mahato bhayāt<br />
            <span className="text-sm">— Bhagavad-gita 2.40</span>
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Devotional service is so pure and perfect that once having begun, one is forcibly dragged to ultimate success. The process of Krishna Consciousness offers a chance to everyone to advance step-by-step towards the Supreme Personality of Godhead, the ultimate goal of life.
          </p>
        </section>

        {/* Mission of Human Life Section with Image */}
        <section className="mb-12 bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            What is The Mission of Human Life?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The mission of human life is to end the miseries of material existence and attain real happiness. We are constantly searching after happiness, but we often fail in our pursuit. We may get a glimpse of happiness, but it does not last forever. We do not want miseries, but we cannot avoid them. Scriptures inform us that we are spiritual beings, part and parcel of the Supreme Lord Sri Krishna, and by nature we are full of happiness—“anandamayo ‘bhyasat (Vedanta-sutra). Then, why do we suffer? How do we rediscover the lost happiness and lead a blissful life?
              </p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <img
                src="/about/Our Vision/ABOUT US PHOTO 2.jpeg"
                alt="Srila Prabhupada teaching devotees"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            Principles for a Happy Life
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Srila Prabhupada, beloved spiritual master and the founder-Acharya of the worldwide Krishna Consciousness Movement, has blessed us with this opportunity for a happy and peaceful life. We just have to practice the following principles:
          </p>
          <ol className="list-decimal list-inside mt-4 text-gray-700">
            <li>Chant the holy names, Hare Krishna maha-mantra every day.</li>
            <li>Read the Srimad Bhagavatam, the spotless purana that glorifies the Supreme Lord.</li>
            <li>Honor prasadam, the food sanctified by offering to the Supreme Lord.</li>
          </ol>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Just by following the above three principles, one can achieve real happiness in life.
          </p>
        </section>

        {/* How It Works Section with Image */}
        <section className="mb-12 bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            How Does This Work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <img
                src="/about/Our Vision/SOUL JOURNEY (about us photo 3).jpeg"
                alt="Representation of the soul's journey to Krishna"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The soul’s journey progresses through various bodies until it reaches the supreme goal of complete love for Krishna. At that time, when all thoughts and actions are performed solely for Krishna’s pleasure, and the soul has regained its original purity, it goes to Krishna’s eternal, spiritual realm and does not take a new body in this material world again.
              </p>
              <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
                The Essence of Devotional Service
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Devotional service to the Lord is the prime necessity of all living entities. It is so pure and perfect that once begun, one is forcibly dragged to ultimate success. The process involves purifying the heart and mind, developing love for Krishna, and ultimately attaining the supreme goal of life.
              </p>
            </div>
          </div>
        </section>

        {/* Devotional Service Section */}
        <section className="mb-12 bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            Principles of Devotional Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To successfully follow the process of devotional service, one should accept initiation and instruction from a genuine spiritual master in Lord Krishna’s parampara. At the time of initiation, followers take vows to abstain from:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Eating meat, fish, and eggs.</li>
            <li>Intoxication (through drugs and alcohol).</li>
            <li>Gambling.</li>
            <li>Illicit sexual connections.</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            The eternal relationship between Krishna and the devotee (bhakta) can be revived through bhakti-yoga, the process of serving the Lord with love and devotion, and most importantly by chanting His holy names: Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare. Devotees also promise to daily chant a minimum of 16 rounds, where each round is made up of 108 beads, of the Hare Krishna maha-mantra on sacred beads.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our miseries are due to sinful reactions, and when we follow these principles, all material contaminations and sins are washed away; consequently, we are reestablished in our real constitutional position of unlimited bliss and happiness.
          </p>
        </section>

        {/* Chaitanya Mahaprabhu Quote */}
        <section className="bg-blue-100 p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
            Sri Chaitanya Mahaprabhu said:
          </h3>
          <blockquote className="text-xl italic text-gray-800 text-center">
            "ceto-darpana-marjanam bhava-maha-davagni-nirvapanam"
          </blockquote>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center">
            Chanting the holy names of the Lord cleanses the mirror of the heart and stops the miseries of the blazing fire of material existence.
          </p>
        </section>

        {/* Additional Teachings Section */}
        <section className="mb-12 bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            Transformative Power of Krishna Consciousness
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Srimad Bhagavatam says: "nasta-prayesv abhadresu nityam bhagavata-sevaya" All the inauspicious things in our heart are completely destroyed by reading Srimad Bhagavatam every day. The darkness of ignorance is dissipated, and we become situated in the mode of goodness, developing all good qualities equivalent to that of the demigods.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            By honoring prasadam (food offered to the Lord), we do not incur further sinful reactions. Krishna says in the Bhagavad-gita (3.13):
          </p>
          <blockquote className="text-xl italic text-gray-800 mt-4 text-center">
            yajña-śiṣṭāśinaḥ santo mucyante sarva-kilbiṣaiḥ; devotees who eat food offered first in sacrifice (as an offering to the Lord) are released from all kinds of sins.
          </blockquote>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Thus, by following these three simple but effective principles given by Srila Prabhupada, we can achieve a life of happiness, good health, peace of mind, and all good qualities. The term "Hare Krishna" or "The Hare Krishna Movement," formally The International Society for Krishna Consciousness (ISKCON), is the orthodox core of Hinduism. It was registered in the West (in New York) in July 1966, but dates back over 5000 years. Lord Chaitanya Mahaprabhu (1486-1532) popularized the movement all over India. Hinduism is the world’s third largest religion with over 900 million adherents, second to Christianity and Islam (according to various leading encyclopedias, websites, and almanacs). The principal scriptures are The Bhagavad-Gita (The Song of God), and the Srimad Bhagavatam (the story of the Personality of Godhead Sri Krishna Bhagavan). The Hare Krishnas believe in one God.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            This is our mission. We have to simply speak about Krishna all over the world. Yare dekha tare kaha krsna-katha, krsna-upadesa. So if one is not interested in krsna-katha, in the topics of Krishna, then sastra says, srama eva hi kevalam. Whether rightly or sincerely he’s doing on the material bodily concept of life, srama eva hi kevalam. Simply he’s wasting time. Now it is very difficult to understand this philosophy. If we go to the businessman or politician or scientist, if we say, "Sir, you have got any interest in Krishna consciousness?" "No, why shall I do it? I don’t want." Then if I say, "You are wasting your time, sir," he will accept? But this is the position, actually. He’s simply wasting his time. Srama eva hi kevalam (SB 1.2.8).
          </p>
        </section>

        {/* Krishna Consciousness Section with Image */}
        <section className="mb-12 bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            Krishna Consciousness – A Philosophy For Everyone
          </h2>
          <div className="grid grid-cols-1  gap-6 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The philosophy of the Hare Krishna movement is a non-sectarian monotheistic tradition. The International Society for Krishna Consciousness (ISKCON) is a worldwide community of devotees practicing bhakti-yoga, the eternal science of loving service to God. The Society was founded in 1966 by His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, a pure devotee of God representing an unbroken chain of spiritual masters originating with Lord Krishna Himself.
              </p>
              <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
                Eight Principles of Krishna Consciousness
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The following eight principles are the basis of the Krishna consciousness movement. We invite all of our readers to consider them with an open mind and then visit one of the ISKCON centers to see how they are being applied in everyday life.
              </p>
              <ol className="list-decimal list-inside mt-4 text-gray-700">
                <li>By sincerely cultivating a bona fide spiritual science, we can be free from anxiety and come to a state of pure, unending, blissful consciousness in this lifetime.</li>
                <li>We are not our bodies but eternal spirit souls, parts and parcels of God (Krishna). As such, we are all brothers, and Krishna is ultimately our common father.</li>
                <li>Krishna is the eternal, all-knowing, omnipresent, all-powerful, and all-attractive Personality of Godhead. He is the seed-giving father of all living beings, and He is the sustaining energy of the entire cosmic creation.</li>
                <li>The Absolute Truth is contained in all the great scriptures of the world. However, the oldest known revealed scriptures in existence are the Vedic literatures, most notably the Bhagavad-gita, which is the literal record of God’s actual words.</li>
                <li>We should learn the Vedic knowledge from a genuine spiritual master, one who has no selfish motives and whose mind is firmly fixed on Krishna.</li>
                <li>Before we eat, we should offer to the Lord the food that sustains us. Then Krishna becomes the offering and purifies us.</li>
                <li>We should perform all our actions as offerings to Krishna and do nothing for our own sense gratification.</li>
                <li>The recommended means for achieving the mature stage of love of God in this age of Kali, or quarrel, is to chant the holy names of the Lord. The easiest method for most people is to chant the Hare Krishna mantra:</li>
              </ol>
              <blockquote className="text-xl italic text-gray-800 mt-4 text-center">
                Hare Krishna Hare Krishna – Krishna Krishna Hare Hare – Hare Rama Hare Rama – Rama Rama Hare Hare<br/>
                हरे कृष्ण हरे कृष्ण – कृष्ण कृष्ण हरे हरे – हरे राम हरे राम – राम राम हरे हरे
              </blockquote>
            </div>
            {/* <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <img
                src="https://via.placeholder.com/400x300?text=ISKCON+Temple+Activity"
                alt="ISKCON temple activity with devotees"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div> */}
          </div>
        </section>
      </main>

      {/* Footer Section with Social Media Sharing */}
      <footer className="flex items-center space-x-3 mt-8 px-6 py-4 bg-blue-800 text-white">
        <span className="font-semibold">Share this page:</span>
        {socialIcons.map((item, idx) => (
          <a
            key={idx}
            href={shareLinks[item.platform as keyof typeof shareLinks]}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-500 transition"
            title={`Share on ${item.platform}`}
          >
            {item.icon}
          </a>
        ))}
      </footer>
    </div>
  );
};

export default OurVision;