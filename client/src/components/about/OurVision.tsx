import React from 'react';
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

const OurVision = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white font-sans">
      {/* Header Section */}
      <header className="bg-green-800 text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Vision
        </h1>
        <p className="text-xl md:text-2xl italic">
          We Are Trying To Give Human Society An Opportunity For A Life Of Happiness, Good Health, Peace Of Mind And All Good Qualities Through God Consciousness
        </p>
      </header>

      {/* Main Content Section */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Vedas say we are all spiritual beings—eternal, blissful, full of knowledge—and so is God. The difference is God is infinite and we are not. In this world, everyone mistakenly thinks their temporary body is their real self. We belong in the spiritual world with God (one of Whose names is Krishna, "the ALL-attractive one"). But until our pure love for Him awakens—and we no longer want to try to enjoy separately from Him—we must stay in the material world. We need to understand the problems of life in the material world, such as:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>We suffer from old age, disease, and eventually die.</li>
            <li>The reactions to our activities, or karma, force us to take repeated births in various species.</li>
            <li>Whatever sensual pleasure we do get is temporary and ultimately disappointing.</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our life is perfect once we find a teacher, or guru, who can show us how to purify our consciousness and reestablish our love and service attitude for God. The easiest (and most highly recommended) method of self-purification is to chant the holy names of God—the Hare Krishna mantra—in the company of like-minded spiritual seekers, or devotees of Krishna.
          </p>
        </section>

        {/* Quote Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
          <blockquote className="text-xl italic text-gray-800 border-l-4 border-green-600 pl-4">
            The teachings of the worldwide Krishna consciousness movement are based on ancient Vaishnava scriptures: Srimad-Bhagavatam (commentary on the Vedas), Srimad Bhagavad-gita (the personal teachings of Lord Krishna), and Sri Chaitanya-Charitamrta (the teachings of Lord Chaitanya).
          </blockquote>
          <p className="mt-4 text-gray-600">
            The basic tenet of these teachings is that each living entity is an eternal spirit soul and has a distinct relationship with God, Krishna.
          </p>
        </section>

        {/* Image Section (Placeholder) */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Image Placeholder: Fresh greens in a colander</p>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lord Chaitanya distinguished Gaudiya Vaishnavism from other sampradayas through the understanding that the spirit soul is "inconceivably one and different" from the Supreme Lord: acintya bheda bheda tattva. Qualitatively, both are of the same spiritual nature, but in quantity, the Lord is unlimited and the spirit soul is His tiny servant. As such, the monotheist philosophy is based on a personal concept of the Absolute Truth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission of Human Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">What is The Mission of Human Life?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a frigate’s anchors for my bride-bits and fasces of harpoons for spurs, would I could mount that whale and leap the topmost skies, to see whether the fabled heavens with all their countless tents really lie encamped beyond! The mission of human life is to end the miseries of material existence and attain real happiness. We are constantly searching after happiness, but we often fail in our pursuit. We may get a glimpse of happiness, but it does not last forever. We do not want miseries, but we cannot avoid them. Scriptures inform us that we are spiritual beings, part and parcel of the Supreme Lord Sri Krishna, and by nature we are full of happiness—“anandamayo ‘bhyasat (Vedanta-sutra). Then, why do we suffer? How do we rediscover the lost happiness and lead a blissful life? Srila Prabhupada, beloved spiritual master and the founder-Acharya of worldwide Krishna Consciousness Movement has blessed us with this opportunity for a happy and peaceful life. We just have to practice the following principles:
          </p>
          <ol className="list-decimal list-inside mt-4 text-gray-700">
            <li>Chant the holy names, Hare Krishna maha-mantra every day.</li>
            <li>Read the Srimad Bhagavatam, the spotless purana that glorifies the Supreme Lord.</li>
            <li>Honor prasadam, the food sanctified by offering to the Supreme Lord.</li>
          </ol>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Just by following the above three principles one can achieve real happiness in life.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">How Does This Work?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The soul’s journey progresses through various bodies until he reaches the supreme goal of complete love for Krishna. At that time, when all thoughts and actions are performed solely for Krishna’s pleasure, when the soul has regained its original purity, it goes to Krishna’s eternal, spiritual realm and does not take a new body in this material world again.
          </p>
          <div className="mt-6 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Image Placeholder: Healthy toast with avocado, bananas, and tomatoes</p>
          </div>
        </section>

        {/* Devotional Service Section */}
        <section className="mb-12">
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
            The eternal relationship between Krishna and the devotee (bhakta) can be revived through bhakti-yoga, the process of serving the Lord with love and devotion, and most importantly by chanting his holy names Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare, Hare Rama, Hare Rama, Rama Rama, Hare Hare. They also promise to daily chant a minimum of 16 rounds, where each round is made up of 108 beads, of the Hare Krishna maha-mantra on sacred beads. Our miseries are due to the sinful reactions and when we follow these three principles, all the material contaminations and sins are washed away; consequently, we are reestablished in our real constitutional position of unlimited bliss and happiness.
          </p>
        </section>

        {/* Chaitanya Mahaprabhu Quote */}
        <section className="bg-green-100 p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Sri Chaitanya Mahaprabhu said:</h3>
          <blockquote className="text-xl italic text-gray-800">
            "ceto-darpana-marjanam bhava-maha-davagni-nirvapanam"
          </blockquote>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Chanting the holy names of the Lord cleanses the mirror of the heart and stops the miseries of the blazing fire of material existence.
          </p>
        </section>

        {/* Additional Teachings Section */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Srimad Bhagavatam says: "nasta-prayesv abhadresu nityam bhagavata-sevaya" All the inauspicious things in our heart are completely destroyed by reading Srimad Bhagavatam every day. The darkness of ignorance is dissipated and we become situated in the mode of goodness and develop all good qualities equivalent to that of the demigods.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            By honoring prasadam (food offered to the Lord) we do not incur further sinful reactions. Krishna says in the Bhagavad-gita (3.13):
          </p>
          <blockquote className="text-xl italic text-gray-800 mt-4">
            yajña-śiṣṭāśinaḥ santo mucyante sarva-kilbiṣaiḥ; devotees who eat food offered first in sacrifice (as an offering to the Lord) are released from all kinds of sins.
          </blockquote>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Thus, by following these three simple, but effective principles given by Srila Prabhupada, we can achieve a life of happiness, good health, peace of mind, and all good qualities. The term "Hare Krishna" or "The Hare Krishna Movement" formally The International Society for Krishna Consciousness (ISKCON) is the orthodox core of Hinduism. It was registered in the West (in New York) in July 1966, but dates back over 5000 years. Lord Chaitanya Mahaprabhu (1486-1532) popularized the movement all over India. Hinduism is the world’s third largest religion with over 900 million adherents, second to Christianity and Islam (according to various leading encyclopedias, websites, and almanacs). The principal scriptures are The Bhagavad-Gita (The Song of God), and the Srimad Bhagavatam (the story of the Personality of Godhead Sri Krishna Bhagavan). The Hare Krishnas believe in one God.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            This is our mission. We have to simply speak about Krishna all over the world. Yare dekha tare kaha krsna-katha, krsna-upadesa. So if one is not interested in krsna-katha, in the topics of Krishna, then sastra says, srama eva hi kevalam. Whether rightly or sincerely he’s doing on the material bodily concept of life, srama eva hi kevalam. Simply he’s wasting time. Now it is very difficult to understand this philosophy. If we go to the businessman or politician or scientist, if we say, "Sir, you have got any interest in Krishna consciousness?" "No, why shall I do it? I don’t want." Then if I say, "You are wasting your time, sir," he will accept? But this is the position, actually. He’s simply wasting his time. Srama eva hi kevalam (SB 1.2.8).
          </p>
        </section>

        {/* Krishna Consciousness Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Krishna Consciousness – A Philosophy For Everyone</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The philosophy of the Hare Krishna movement is a non-sectarian monotheistic tradition. The International Society for Krishna Consciousness (ISKCON) is a worldwide community of devotees practicing bhakti-yoga, the eternal science of loving service to God. The Society was founded in 1966 by His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, a pure devotee of God representing an unbroken chain of spiritual masters originating with Lord Krishna Himself. The following eight principles are the basis of the Krishna consciousness movement.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We invite all of our readers to consider them with an open mind and then visit one of the ISKCON center to see how they are being applied in everyday life.
          </p>
          <ol className="list-decimal list-inside mt-4 text-gray-700">
            <li>By sincerely cultivating a bona fide spiritual science, we can be free from anxiety and come to a state of pure, unending, blissful consciousness in this lifetime.</li>
            <li>We are not our bodies but eternal spirit souls, parts and parcels of God (Krishna). As such, we are all brothers, and Krishna is ultimately our common father.</li>
            <li>Krishna is the eternal, all-knowing, omnipresent, all-powerful, and all-attractive Personality of Godhead. He is the seed-giving father of all living beings, and He is the sustaining energy of the entire cosmic creation.</li>
            <li>The Absolute Truth is contained in all the great scriptures of the world. However, the oldest know revealed scriptures in existence are the Vedic literatures, most notably the Bhagavad-gita, which is the literal record of God’s actual words.</li>
            <li>We should learn the Vedic knowledge from a genuine spiritual master one who has no selfish motives and whose mind is firmly fixed on Krishna.</li>
            <li>Before we eat, we should offer to the Lord the food that sustains us. Then Krishna becomes the offering and purifies us.</li>
            <li>We should perform all our actions as offerings to Krishna and do nothing for our own sense gratification.</li>
            <li>The recommended means for achieving the mature stage of love of God in this age of Kali, or quarrel, is to chant the holy names of the Lord. The easiest method for most people is to chant the Hare Krishna mantra:</li>
          </ol>
          <blockquote className="text-xl italic text-gray-800 mt-4 text-center">
            Hare Krishna Hare Krishna – Krishna Krishna Hare Hare – Hare Rama Hare Rama – Rama Rama Hare Hare<br/>
            हरे कृष्ण हरे कृष्ण – कृष्ण कृष्ण हरे हरे – हरे राम हरे राम – राम राम हरे हरे
          </blockquote>
        </section>
      </main>

      {/* Footer Section */}
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

export default OurVision;