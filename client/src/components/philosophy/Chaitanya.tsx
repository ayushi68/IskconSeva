// app/nityanand.tsx or components/Nityanand.tsx

import React from "react";

const quotes = [
  {
    text: "Happiness is a state of mind that comes from appreciating what you have.",
    author: "Srila Prabhupada",
  },
  {
    text: "Chant and be happy.",
    author: "A.C. Bhaktivedanta Swami",
  },
  {
    text: "True knowledge means knowing who you are.",
    author: "Bhagavad Gita",
  },
];

const Chaitanya = () => {
  return (
    <main className="flex-1 p-10">
      <div className="max-w-5xl mx-auto text-justify">
        {/* Title */}
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Lord Sri Chaitanya Mahaprabhu</h1>

        {/* Verse and Image Row */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src="/philosophy/cp1.jpg"
            alt="Sri Nityananda Prabhu"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <div className="bg-gray-100 p-6 rounded-lg shadow w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">CC Ādi 2.22</h2>
            <p className="font-medium text-green-700 italic mb-4">
            seita govinda sākṣāc caitanya gosāñi<br />
            jīva nistārite aiche dayālu āra nāi
            </p>
            <p className="text-gray-700">
              <strong>Translation:</strong>That Govinda personally appears as Caitanya Gosāñi. No other Lord is as merciful in delivering the fallen souls.
            </p>
          </div>
        </div>

        {/* Introduction Paragraph */}
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Who is Lord Chaitanya?</h2>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="bg-gray-100 p-6 rounded-lg shadow w-full">
            <h2 className="text-xl font-semibold mb-2">Srimad-Bhagavatam (11.5.32)</h2>
            <p className="font-medium text-green-700 italic mb-4 text-center">
            kṛṣṇa-varṇaṁ tviṣākṛṣṇaṁ
            sāṅgopāṅgāstra-pārṣadam<br />
            yajñaiḥ saṅkīrtana-prāyair
            yajanti hi su-medhasaḥ
            </p>
            <p className="text-gray-700">
            <strong>Translation:</strong>“In the age of Kali, intelligent persons perform congregational chanting to worship the incarnation of Godhead who constantly sings the holy name of Krishna. Although His complexion is not blackish, He is Krishna Himself. He is accompanied by His associates, servants, weapons and confidential companions”.<br />

            Sri Chaitanya Mahaprabhu, the most munificent incarnation of all, is none other than Supreme Lord Sri Krishna, who appeared in this Kali-yuga to inaugurate the yuga dharma for this age – Harinām Sankīrtana, the congregational chanting of the Holy Names of the Lord. Krishna taught Bhagavad Gīta to liberate all souls, and He returned as Sri Chaitanya to show us how to live by the Gita’s teachings. <br />
            His teachings and life have influenced people not only in India, but outside too. The Encyclopaedia  Brittanica also states that Lord Chaitanya propagated “the community celebration [sankirtana] of Krishna as the most powerful means of bringing about the proper bhakti attitude.”
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-purple-800 mb-4">His Appearance</h2>
        
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        Sri Chaitanya Mahaprabhu appeared at Sridhama Mayapura, in the city of Navadvipa in Bengal, on the auspicious Phalguni Purnima (full moon day) evening during a lunar eclipse, in the year 1486 AD. Even before his birth, Lord Chaitanya made people chant the Holy Names, by taking birth at eclipse time when people bathe in the Ganges and chant the Lord’s holy names for spiritual purification. The moment was so auspicious and awaited that even demigods came down and blessed the child. There was joy and smile on everyone’s face and an atmosphere of jubilation filled the home.<br />
 
        His parents Sri Jagannatha Mishra and Srimati Sachidevi, a learned Brahminical couple lived on the banks of Ganges. Their youngest son, who was named Vishvambhara, later came to be known as Nimai (as he was born under a neem tree) Pandita and then, after accepting the renounced order of life, Sri Chaitanya Mahaprabhu.
        Nilambara Chakravarti, a very learned scholar and maternal grandfather of baby Nimai observed specific marks of Lord Vishnu namely the flag, thunderbolt, conchshell, disc, and fish on his sole and understood that  he was not an ordinary child but an incarnation of Narayana. As the Lord began to crawl on His knees, He caused various wonderful things to be seen.
        </p>

        {/* 📸 Image */}
        <img
          src="/philosophy/cp2.jpg"
          alt="Nityananda Prabhu"
          className="rounded-xl shadow-lg mb-10 w-full max-h-[480px] object-cover"
        />

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Childhood Pastimes </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        The Lord, although a baby, would perform extraordinary pastimes and would fill blissfulness in the minds of his devotees. Once baby Nimai was found to be resting on a snake’s back. Everyone was feared except Nimai. The snake who was Ananta Sesha himself slowly slithered away and the ladies took Nimai into their arms and started reciting benefice mantras and pouring Ganga water.<br />
        The Lord, even as a child, was so fond of hearing Holy Names, that when the ladies in the home stopped chanting “Hari Hari”, he would start crying and when they would start again, he would smile pleasingly.<br />
        Baby Nimai, revealed his identity to very few. One such fortunate person happened to be a Brahmana, who came as a guest to Jagannath Misra’s home, cooked food and offered it to Gopala Deity. Soon baby Nimai crawled and ate the offerings. The brahmana repeated the process for twice and the same thing happened. The third time Lord revealed himself to the brahmana and blessed him.<br />
        There are many more such blissful pastimes of Lord which filled, surprise and simultaneously love and affection in the hearts of the devotees.<br />
        </p>
        </div>

        <img
            src="/philosophy/cp29.bmp"
            alt="Early Life"
            className="rounded-xl shadow-lg w-full md:w-1/2 max-h-[480px] object-cover"
        />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Left: Image */}
        <img
            src="/philosophy/cp3.jpg"
            alt="Early Life"
            className="rounded-xl shadow-lg w-full md:w-1/2 max-h-[480px] object-cover"
        />

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Pastimes in Kaiśora Age And Youth
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Between the ages of eleven to fifteen, Nimai exhibited extraordinary qualities, even having philosophical discussions with His mother. While growing, His brilliant intelligence began to become apparent. While still a child, He mastered Sanskrit and logic. The Lord defeated all kinds of scholars in discourses about all the scriptures, yet because of His gentle behavior, none of them were unhappy. He was becoming more and more famous for his teachings and students from far and wide came to learn from him. It was at this time, the Lord defeated the Digvijayī, Keshav Kashmiri, a very famous pandit, puffed up with his intelligence. Later by the order of Mother Saraswati, he understood his mistake and surrendered to the Lord’s Lotus feet.<br /><br />
            </p>
        </div>
        </div>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">By this time Lord was married to Lakshmi devi but later she died due to a snake bite.<br /><br />

        In his youth, Lord enjoyed doing Kīrtan with his confidential devotees. At Gaya, Lord Chaitanya received Vaishnava Initiation from Ishvara Puri. After returning home he displayed more signs of Love of Godhead. He delivered Krishna prema to many. Lord performed many pastimes which made his devotees just love him all the more. The deliverance of Gopala Chapala, the deliverance of Jagai and Madhai, Amra Ghata lila, Murari Gupta being named Ramadasa, and many more pastimes happened in Lord’s youth, before accepting Sannyasa.<br /><br /></p>


        <div className="flex flex-col md:flex-row gap-6 mb-10">

        {/* Left: Text */}
        <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Lord Chaitanya Accepts Sannyasa
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            For twenty-four years, Lord Śrī Caitanya Mahāprabhu remained at home, and whatever pastimes He performed during that time are called the ādi-līlā. At the end of His twenty-fourth year, in the month of Māgha, during the fortnight of the waxing moon, the Lord accepted the renounced order of life, sannyāsa.
            To deliver more people and to awaken Bhakti in the hearts of even disobedient students, Lord accepted Sannyasa, from Keśava Bhāratī at Katwa. Thereafter, Lord Chaitanya became extremely attached to Krishna and his pastimes and felt great separation from him. <br />

            KrishnadaKaviraja Goswami in his Chaitanya Charitamrita writes: For the twenty-four years after Śrī Caitanya Mahāprabhu accepted the renounced order, whatever pastimes He executed were unlimited and unfathomable. Who can understand the purport of such pastimes?<br />
            </p>
        </div>

        {/* Right: Image */}
        <img
            src="/philosophy/cp26.jpg"
            alt="Early Life"
            className="rounded-xl shadow-lg w-full md:w-1/2 max-h-[480px] object-cover"
        />
        </div>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed"> Then Lord went to Jagannath Puri on the order of his mother. At Puri, Sarvabhauma Bhattacharya was bestowed with mercy by Lord Chaitanya who showed his original form. Then Lord Toured South India, and transformed many devotees, discovered the Brahma Samhita at Adi Keshava Temple in Tiruvattar. On the way he met Ramanda Raya and had highly elevated spiritual discussions with him. Then the Lord visited Vrindavana, traveled extensively with ecstatic emotions. During this time, Lord Gauranga discovered Radha Kund and Shyam Kund. Whoever met Śrī Caitanya Mahāprabhu became a Vaiṣṇava, and whoever met that Vaiṣṇava also became a Vaiṣṇava. In this way, all the towns and villages became Vaiṣṇava, one after the other. The Lord’s visit to Vrindavan, Prayag and many other holy places transformed many people to Vaishnavas. <br />
        Lord Chaitanya’s  instructions to Srila Rupa Gosvami and Srila Sanatana Gosvami, His discussions with Ramananda Raya, the debate with the Mayavadi sannyasi Prakashananda Sarasvati and the Vedanta Sutra, the discussion between Him and Sarvabhauma Bhattacharya are excellent sources through which we understand His teachings in detail.<br /></p>
        

        <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Left: Image */}
        <img
            src="/philosophy/cp17.bmp"
            alt="Early Life"
            className="rounded-xl shadow-lg w-full md:w-1/2 max-h-[480px] object-cover"
        />

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Lord Gauranga’s (Final) Pastimes in Antya Lila</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        After the Lord returns to Puri from Vrindavana, many devotees come to meet him. At 
        This time the two glorious books written by Sri Rupa Goswami, Lalita Madhava and Vidagdha Madhava were appreciated. <br />
        The pastimes of the great devotee Haridas Thakur, who was chanting 300,000 names a day, are also described here.<br /> 
        The nectar of Antya Lila lies in the ending chapters in which there is description of feelings of Lord Gauranga’s ecstasy, his feelings of separation from Krishna and finally, the eight prayers of Shikshashtakam that Lord Chaitanya, though spoken by himself, relished hearing its meaning from his devotees.<br />
        </p>
        </div>
        </div>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">The Lord’s loving pastimes with many of his devotees, his instructions, passing away of Haridas Thakur etc fill the Antya Lila and at the end after hinting about the disappearance of the Lord, the author says: The pastimes of Śrī Caitanya Mahāprabhu are like the unlimited sky. How, then, can an ordinary living being describe them all?<br /></p>

        <img
          src="/philosophy/cp6.jpg"
          alt="Mercy"
          className="rounded-xl shadow-lg mb-10 w-full max-h-[480px] object-cover"
        />

        {/* Section 3 */}
        <h2 className="text-3xl font-bold text-purple-800 mb-4">His Mission – The Universal Religion</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        His mission was to preach the importance of chanting the holy names of the Lord in this age of Kali (quarrel). This, Lord Gauranga emphasized so much and gave purport to the shloka, which is meant for the spiritual upliftment of kali yuga people.
        </p>

        <div className="flex flex-col gap-6 mb-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow w-full justify-center">
                <h2 className="text-xl font-semibold mb-2">CC Adi 17.21</h2>
                <p className="font-medium text-green-700 italic mb-4 text-center">
                harer nāma harer nāma<br />
                harer nāmaiva kevalam<br />
                kalau nāsty eva nāsty eva<br />
                nāsty eva gatir anyathā
                </p>
                <p className="text-gray-700">
                <strong>Translation:</strong> “In this Age of Kali there is no other means, no other means, no other means for self-realization than chanting the holy name, chanting the holy name, chanting the holy name of Lord Hari.”<br />
                His pastimes, described in <em>Chaitanya Charitamrita</em> by Krishnadasa Kaviraja Goswami and in <em>Chaitanya Mangala</em> by Srila Vrindavan Dasa Thakur are full of nectar, and one who reads and understands them thoroughly can be saved from falling again into the cycle of birth and death.
                </p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="bg-gray-100 p-6 rounded-lg shadow w-full ">
            <h2 className="text-xl font-semibold mb-2">CC Ādi 17.331</h2>
            <p className="font-medium text-green-700 italic mb-4 text-center">
            śrī-kṛṣṇa-caitanya-līlā — adbhuta, ananta<br />
            brahmā-śiva-śeṣa yāṅra nāhi pāya anta
            </p>
            <p className="text-gray-700">
              <strong>Translation:</strong>The pastimes of Lord Śrī Caitanya Mahāprabhu are wonderful and unlimited. Even personalities like Lord Brahmā, Lord Śiva and Śeṣa Nāga cannot find their end.
            </p>
          </div>
        </div>
        
      </div>

      <section className="bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">Inspirational Quotes</h2>
        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <p className="text-lg text-gray-700 italic">“{quote.text}”</p>
              <p className="text-sm text-green-600 font-semibold mt-4">— {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
};

export default Chaitanya;
