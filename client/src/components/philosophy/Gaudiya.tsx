import React from 'react';

export default function Gaudiya() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* 1. Image + Heading */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/gaudiya3.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">The Disciplic Succession</h1>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="p-8 md:p-16">
      <p className="text-lg text-justify max-w-3xl mx-auto md:w-1/2">
        Padma Puräna
        sampradäya-vihén ye manträs te niñphalä matäù sampradäya-vihéna—without being connected with a bona fide sampradäya, or disciplic succession; ye—which; mantraù—mantras; te—those; niñphaläù—fruitless; matäù—are considered. If one is not actually connected with a bona fide disciplic succession, whatever mantras he chants will not bring the desired result. <br />


        Undoubtedly, a question arises in the minds of readers as to why should we receive knowledge from a Spiritual Master in Disciplic Succession? <br />
        Here’s the answer: The path of spiritual realization is undoubtedly difficult. The Lord therefore advises us to approach a bona fide spiritual master in the line of disciplic succession from the Lord Himself. No one can be a bona fide spiritual master without following this principle of disciplic succession. The Lord is the original spiritual master, and a person in the disciplic succession can convey the message of the Lord as it is to his disciple.	<br />

        Lord Krsna himself affirms in Bhagavad Gīta 4.2 : “Evam parampara-praptam imam rajarsayo viduh”, This Supreme science was thus received through the chain of Disciplic Succession, and the Saintly Kings understood it in this way”.
        Receiving Knowledge through disciplic succession is so important that Srila Prabhupada, gave the list of complete disciplic succession of the Brahma-Madhva-Gaudiya Sampradaya right away in the Introduction to Bhagavad Gīta As It Is.<br />

        </p>
      </section>

      {/* 3. List of Contents */}
<section className="bg-white py-12">
  <div className="max-w-6xl mx-auto text-center">

    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-left">
      {[
        ["Krishna", "कृष्ण", "The Supreme Lord"],
        ["Brahma", "ब्रह्मा", "Creator of the universe"],
        ["Narada", "नारद", "Divine sage and messenger"],
        ["Vyasa", "व्यास", "Compiler of Vedas"],
        ["Madhava", "माधव", "A name of Krishna"],
        ["Padmanabha", "पद्मनाभ", "Lord with lotus-navel"],
        ["Nrhari", "नृसिंह", "Half-man, half-lion form"],
        ["Madhva", "मध्व", "Dvaita Vedanta philosopher"],
        ["Akshobhya", "अक्षोभ्य", "Unshakable sage"],
        ["Jaya Tirtha", "जय तीर्थ", "Philosopher-saint"],
        ["Jnanasindhu", "ज्ञानसिन्धु", "Ocean of knowledge"],
        ["Dayanidhi", "दयानिधि", "Treasure of compassion"],
        ["Vidyanidhi", "विद्यानिधि", "Treasure of wisdom"],
        ["Rajendra", "राजेन्द्र", "Lord of kings"],
        ["Jayadharma", "जयधर्म", "Victor of Dharma"],
        ["Purusottama", "पुरुषोत्तम", "The Supreme Being"],
        ["Brahmanya Tirtha", "ब्राह्मण्य तीर्थ", "Scholar and monk"],
        ["Vyasa Tirtha", "व्यास तीर्थ", "Saint of Madhva lineage"],
        ["Laxmipati", "लक्ष्मीपति", "Consort of Lakshmi"],
        ["Madhavendra Puri", "माधवेन्द्र पुरी", "Pioneer of Bhakti"],
        ["Isvara Puri", "ईश्वर पुरी", "Guru of Lord Caitanya"],
        ["Lord Caitanya", "चैतन्य", "Incarnation of Krishna"],
        ["Rupa", "रूप", "Associate of Caitanya"],
        ["Raghunatha", "रघुनाथ", "Saint and poet"],
        ["Krsnadasa", "कृष्णदास", "Author of Caitanya Caritamrita"],
        ["Narottama", "नरोत्तम", "Saint and composer"],
        ["Visvanatha", "विश्वनाथ", "Bhakti scholar"],
        ["Jagannatha", "जगन्नाथ", "Lord of the Universe"],
        ["Bhaktivinoda", "भक्तिविनोद", "Visionary reformer"],
        ["Gaurakisora", "गौरकिशोर", "Renunciate and mystic"],
        ["Bhaktisiddhanta Sarasvati", "भक्तिसिद्धान्त", "Preacher and teacher"],
        ["Srila Prabhupada", "श्रील प्रभुपाद", "Founder of ISKCON"]
      ].map(([name, sanskrit, desc], index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">{name} <span className="text-sm text-gray-600">({sanskrit})</span></h3>
          <p className="text-sm text-gray-700 mt-1">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. Image with Text on the Left */}
      <section className="p-8 flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* <div className="md:w-1/2">
          <img className="rounded-lg w-full max-w-sm mx-auto" src="/gaudiya.jpg" alt="Informative Visual" />
        </div> */}
        {/* <p className="text-lg text-justify max-w-3xl mx-auto md:w-1/2">
          
        </p> */}
      </section>

      <section className="p-8 flex flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <img className="rounded-lg w-full max-w-sm mx-auto" src="/gaudiya2.jpg" alt="Another Image" />
        </div>
        <p className="text-lg text-justify max-w-3xl mx-auto md:w-1/2">
        Here's an in-depth explanation or narrative that helps readers understand the subject matter more thoroughly.
        The name of our sampradaya — Brahma-Madhva-Gaudiya-sampradaya – suggests three distinct phases, or links in the disciplic chain. The disciplic succession begins with Lord Brahma, who first received it in his heart directly from Lord Krsna and then instructed his disciple Narada. Narada Muni in turn enlightened Srila Vyasa Dev and the second phase is marked after Vyasadev with Sripada Madhvacarya. He took his birth at Udupi in the year of A.D. 1119 and from his base in Udupi, he went on to establish what continues today as a strict system of succession. Although between Vyasadeva and Madhva there is a big gap. But it is sometimes said that Vyasadeva is still living, and Madhva was fortunate enough to meet him directly.<br />


        The third phase of the succession is marked by the appearance of Lord Caitanya in Gauda-desa, Bengal. Lord Caitanya took birth in Navadvipa, Bengal in the year A.D. 1407. Lord Caitanya did not formally initiate anyone, and it is stated by Sanatana Goswami that, as an incarnation, he would not personally do so.<br />


        Prior to Lord Caitanya’s appearance Madhavendra Puri appeared, and he initiated several of Caitanya’s associates, including Sri Advaita Acharya and Sri Nityananda prabhu. Madhavendra Puri also initiated Lord Caitanya’s own guru, Isvara Puri. As stated in Caitanya-caritamrta, Madhya lila 4:197, Sri Madhavendra Puri introduced the conception of conjugal love for the first time in the Madhvacharya-sampradaya, and this conclusion was later revealed by Sri Caitanya Mahaprabhu.<br />


        Later, in the disciplic chain of  Lord Caitanya, came many Acharyas and the most recent five Acharyas are Srila Jagannath Das Babaji Maharaj, Srila Bhaktivinode Thakur, Srila Gaurakishore Das Babaji Maharaj, Srila Bhaktisiddhanta Saraswati Thakur who became the spiritual master of A.C. Bhaktivedanta Swami Prabhupada, the most recent Sampradaya Acarya, who appeared in 1896 in Calcutta.<br />

        </p>
      </section>

      <section className="p-8 flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <img className="rounded-lg w-full max-w-sm mx-auto" src="/gaudiya.jpg" alt="Third Visual" />
        </div>
        <p className="text-lg text-justify max-w-3xl mx-auto md:w-1/2">
        Bhaktivinode Thakur vehemently protested against the principles of the then pseudo-transcendentalists who passed in the name of Lord Chaitanya. He initiated the reformatory movement by literary contributions while he still engaged as a high Government Officer. During his householder life and serving as a Magistrate, he wrote books of various descriptions in Bengali, English, Sanskrit & etc. to present an actual picture of pure devotional activities to Lord Chaitanya. <br />
        Srila Bhakti Siddhanta Saraswati Goswami Maharaj got inspiration from his very Childhood all about Sreela Thakur Bhaktivinode’s movement. The founder of Gaudiya Math and also known as Simha Guru, he took up reins of the reformatory movement after Srilla Bhaktivinode Thakur’s departure,
        Apart from our Sampradaya, there are 3 more Sampradayas, viz., Sri Sampradaya, Rudra Sampradaya and Kumara Sampradaya.<br />

        </p>
      </section>

      {/* 9. Text Content */}
      <section className="p-8">
      <p className="text-lg text-justify max-w-3xl mx-auto md:w-1/2">
        In Sri Sampradaya, the prominent Acharya Sri Ramanujacharya wrote The commentary known as Śrī-bhāṣya which establishes the viśiṣṭādvaita-vāda philosophy. Similarly, in the Brahma-sampradāya, Madhvācārya’s Pūrṇaprajña-bhāṣya establishes śuddha-dvaita-vāda. In the Kumāra-sampradāya, or Nimbārka-sampradāya, Śrī Nimbārka establishes the philosophy of dvaitādvaita-vāda in the Pārijāta-saurabha-bhāṣya. And in the Viṣṇu-svāmi-sampradāya, or Rudra-sampradāya, which comes from Lord Śiva, Viṣṇu Svāmī has written a commentary called Sarvajñabhāṣya, which establishes śuddhādvaita-vāda.  <br />

        Srila Prabhupada often quotes the word:  Ācāryopāsanam which means one should worship an ācārya, a spiritual master who knows things as they are. The spiritual master must be in the disciplic succession from Kṛṣṇa.<br /><br />

        The importance of Spiritual master is also explained in Śrimad Bhāgavatm:
        <br />

        </p>
      </section>

      {/* Section 10 – Styled like Gita verse layout */}
      <section className="py-16 px-6 mx-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10 border-b-2 border-green-400 inline-block">
          ŚB 11.3.21
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto">
          {/* Sanskrit Column */}
          <div className="bg-green-100 text-gray-800 p-6 rounded-lg border border-green-200 w-full md:w-1/2 shadow-md">
            <p className="text-lg leading-relaxed whitespace-pre-line font-medium">
              tasmād guruṁ prapadyeta{'\n'}
              jijñāsuḥ śreya uttamam{'\n'}
              śābde pare ca niṣṇātaṁ{'\n'}
              brahmaṇy upaśamāśrayam
            </p>
          </div>

          {/* Translation Column */}
          <div className="bg-gray-100 text-gray-700 p-6 rounded-lg border border-gray-200 w-full md:w-1/2 shadow-md">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Translation:</span> Therefore, any person who seriously desires real happiness must seek a bona fide spiritual master and take shelter of him by initiation. 
              The qualification of the bona fide guru is that he has realized the conclusions of the scriptures by deliberation and is able to convince others of these conclusions. 
              Such great personalities, who have taken shelter of the Supreme Godhead, leaving aside all material considerations, should be understood to be bona fide spiritual masters.
            </p>
          </div>
        </div>
      </section>


      {/* Section 12 – Styled like “Setting Up Your Altar” */}
      <section className="py-16 px-6 mx-6">
        <div className="bg-blue-100 text-gray-800 p-6 rounded-lg border border-blue-300 max-w-5xl mx-auto text-center shadow-md">
          <p className="text-lg leading-relaxed font-medium">
            Material knowledge needs teachers, experts, philosophers to explain how things work. <br />
            Will not the Spiritual Science, which is an Ocean, need a Spiritual Master???
          </p>
        </div>
      </section>


    </div>
  );
}
