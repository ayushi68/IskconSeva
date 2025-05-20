import React from "react";
import { Link } from "react-router-dom";

const Sprabhupada: React.FC = () => {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r p-6">
        <nav className="space-y-4">
          <h2 className="text-lg font-bold text-gray-700 mb-4">About ISKCON</h2>
          <ul className="space-y-2">
            <li><a href="/accomplishments" className="hover:underline">Accomplishments</a></li>
            <li><a href="/books-appreciation" className="hover:underline">Scholars’ Appreciation</a></li>
            <li><a href="/milestones" className="hover:underline">Milestones</a></li>
            <li><a href="/catalog" className="hover:underline">Catalog of Books</a></li>
            <li><a href="/guide" className="hover:underline">Reading & Hearing Guide</a></li>
            <li><a href="/quotes" className="hover:underline">Quotes</a></li>
            <li><a href="/gallery" className="hover:underline">Photo Gallery</a></li>
            <li><a href="/videos" className="hover:underline">Video Gallery</a></li>
            <li><a href="/audio" className="hover:underline">Audio Lectures</a></li>
            <li><a href="/360-view" className="hover:underline">360 View & More</a></li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-10">
      <div className="max-w-5xl mx-auto text-justify">

        {/* Title */}
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Founder Acharya</h1>
        <p className="text-lg font-semibold text-gray-800 mb-6">
          His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
        </p>

        {/* Verse and Image Row */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Image Left */}
          <img
            src="/sp2.jpg"
            alt="Srila Prabhupada"
            className="w-full md:w-1/2 rounded-lg shadow"
          />

          {/* Slogan and Translation Box */}
          <div className="bg-gray-100 p-6 rounded-lg shadow w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">CC Madhya 22.54</h2>
            <p className="font-medium text-green-700 italic mb-4">
              ‘sādhu-saṅga’, ‘sādhu-saṅga’ — sarva-śāstre kaya<br />
              lava-mātra sādhu-saṅge sarva-siddhi haya
            </p>
            <p className="text-gray-700">
              <strong>Translation:</strong> The verdict of all revealed scriptures is that by even a moment’s association with a pure devotee, one can attain all success. What is not possible to achieve in thousands of lives can be achieved in one moment if there is an opportunity to meet a saintly person...<br />
              <em>Śrīmad Bhāgavatam: 3.22.5, Purport</em>
            </p>
          </div>
        </div>

        {/* Introduction Paragraph */}
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        On September 1st 1896, the day after Sri Krishna Janmashtami, the pure devotee for the 20th century World: Srila Prabhupada, took his birth in Calcutta. As quoted in the above verses, he proved to be that sādhu whose moment’s association was remembered and awaited by many.
        Sometimes people have considered him to be a scholar, at other times a philosopher, a cultural ambassador, a prolific author, a religious leader, a spiritual teacher, a social critic, and a holy man. In truth, he was all these things and more.
        The prophecy of Lord Chaitanya, that the ‘chanting of His holy names would spread beyond the shores of India to every town and village in the world’, came true and it was Srila Prabhupada, who accomplished  this mission.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
            {/* Section 1 */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-purple-800 mb-4">Childhood and Youth</h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                On September 1st 1896,he was born in Calcutta. Soon after his birth, an Astrologer predicted that: When this child reaches the age of seventy, he will cross the ocean, become a great teacher of religion and establish 108 Krishna temples. And yes, he did so…
                His parents Sri Gour Mohan De and Smt. Rajani, were Vaishnavas and dear Abhay Charan (his childhood name), grew up observing the Vaishnava Principles and practices. He was gifted Deity of Sri Sri Radha Krishna for worship and out of his fondness, he conducted a small “Ratha Yatra” of Lord Jagannath, at his home, with his tiny abilities/at a very young age.
                All his knowledge, Vaishnava qualities and formal education, got him a Superlative service at the Lotus feet of Radha Krishna. In the year 1922, he met his Spiritual Master, Srila Bhaktisiddhanta Saraswati Thakur for the first time. At the very first meeting he was instructed to preach in English in the West. By this time, he was already married to Radha Rani and was having a child.
                </p>
            </div>
            {/* 📸 Image 1 */}
            <img
            src="/sp3.jpg"
            alt="Introduction"
            className="rounded-xl shadow-lg mb-10 w-full md:w-2/3 lg:w-1/2 max-h-[480px] object-cover mx-auto"
            />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
            {/* 📸 Image 2 */}
            <img src="/sp4.jpg" alt="Childhood" className="rounded-xl shadow-lg mb-10 w-full md:w-2/3 lg:w-1/2 max-h-[480px] object-cover mx-auto" />    
            <div className="w-full md:w-1/2">
                {/* Section 2 */}
                <h2 className="text-3xl font-bold text-purple-800 mb-4">Initial Years In Spiritual Life</h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Although ten years spanned in between his first meeting with Srila Bhaktisiddhanta Saraswati Thakur and his First Initiation in 1932, he had already assisted Gaudiya math in many activities, like establishing a center at Allahabad. In the following years, he received instructions from his Spiritual master and helped establish many Gaudiya Math centers. In 1936, the final orders came from his Spiritual Master, to preach in the West. His specific instruction was to print books as and when there’s money.
                Prabhupada tried to preach in India, but very few people received it favorably. His struggles to write, print, proofread and sell the magazines were all getting very few responses. 
                </p>
            </div>
        </div>

        {/* 📸 Image 3 */}
        <img src="/sp5.jpg" alt="Spiritual beginnings" className="rounded-xl shadow-lg mb-10 w-full max-h-[480px] object-cover" />

        {/* Section 3 */}
        <h2 className="text-3xl font-bold text-purple-800 mb-4">
          Acceptance of Sannyasa & Krishna Consciousness in West
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        In the years following, he accepted Vanaprastha and later Sannyasa and prepared to go to the West. His stay at Radha Damodar Temple in Vrindavan was an important phase. This was the time when the greatest epic, Amalam Puranam, the Śrimad Bhāgavatam was being translated. 
        Finally in 1965, on board the ship Jaladuta, at the age of 69, Srila Prabhupada arrived in Boston, America surviving Sea Sickness and two massive Heart Attacks. He had no possessions except 40/- Indian Rupees and a trunk load of books of Srimad Bhagavatam 1st Canto. With great feelings of anxiety and assuming the difficulties of the sacred mission of spreading Krishna Consciousness in the West, he composed the Historic Poem, “Markine Bhagavata Dharma”.
        Despite facing failures and going through very difficult times, in the year 1966, the International Society for Krishna Consciousness was incorporated in America. With that marking the beginning, Prabhupada encircled the Globe minimum 14 times, delivering lectures, establishing more than 108 temples, opening God-centered self-sufficient farm communities based on the principles of Simple Living High Thinking and the foremost change he brought was: converting “Hippies to Happies”. They were fed sumptuously, the Krishna Prasadam and danced to the tunes of Hare Krishna which purified them and many became his disciples. Majority of them accepted this deep philosophy, the way of Krishna Conscious life, gave up unclean habits, started deity worship, helped in typing and distributing Prabhupada's books.A few moments meeting with Prabhupada left significant remarks on their minds. 
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="w-full md:w-1/2">
                {/* Section 4 */}
                <h2 className="text-3xl font-bold text-purple-800 mb-4">Bringing Back Krishna Consciousness To India</h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                With the desire to revive the forgotten Krishna Consciousness in his homeland, India, he came back with his foreign disciples sporting shaven heads and saffron robes. When these foreigners did Nagar Sankīrtan, the onlookers would be dumbstruck to see their faith and ecstasy.
                Kīrtans, Pandal Programmes, meetings with religious leaders and so on so forth, Prabhupada was completely occupied. With the help of his English disciples, Prabhupada opened big big temples in Vrindavan, Mayapur, Bombay, Hyderabad etc.  
                </p>
            </div>

            {/* 📸 Image 4 */}
            <img src="/sp6.jpg" alt="Preaching in the West" className="rounded-xl shadow-lg mb-10 w-full md:w-2/3 lg:w-1/2 max-h-[480px] object-cover mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
            {/* 📸 Image 5 */}
            <img src="/sp1.png" alt="Krishna Consciousness in India" className="rounded-xl shadow-lg mb-10 w-full md:w-2/3 lg:w-1/2 max-h-[480px] object-cover mx-auto" />

            <div className="w-full md:w-1/2">
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">Srila Prabhupada often said: “If you want to serve me best, then distribute my books”. His instructions were mostly alike to everyone and the most basic, like chanting of minimum 16 rounds in a day. Of all his contributions, Srila Prabhupada considered his books to be of utmost significance. These books present the timeless wisdom of Vedic scriptures in modern English with simple language and eloquence. These books have changed the lives of millions and are still doing…<br />
                His outstanding personality, simple life, depth of knowledge, faith and kindness were all so appreciated and made young and old love Prabhupada, unconditionally. 
                </p>
            </div>

        </div>

        {/* Final Thoughts */}
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        Even the devotees of other Sampradayas, deeply respected Prabhupada for his preaching work. The Bhagavad-gita, Srimad Bhagavatam, Chaitanya Charitamrita, Bhakti Rasamrita Sindhu list 85 qualities a true spiritualist should possess and one can note that Srila Prabhupada had all of the above qualities in completeness. Dr. Thomas J. Hopkins mentioned Prabhupada as:“He was a genuine holy person with enormous integrity and compassion, and he had a powerful impact on those who met him. He never claimed authority and respect for himself; what he said and did was always in the name of Krishna”With interest in preparing children as next generation preachers, he opened gurukuls and Vedic schools both in and outside India. He persuaded that the greatest necessity of present day society is Krishna Consciousness which helps in discovering the self and importance of relating ourselves to God. When a reporter once queried Prabhupada about his successor, Srila Prabhupada, sounding like the personification of the voice of eternity, boomed forth, <strong>“I shall never die. I will live forever in my books.”</strong>
        </p>

        <p className="text-2xl font-bold text-purple-700 mb-12">All Glories to Srila Prabhupada!!</p>

        {/* Links Section */}
        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Explore More:</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 text-lg">
            <li><a href="/accomplishments" className="hover:underline">Accomplishments</a></li>
            <li><a href="/books-appreciation" className="hover:underline">Scholars’ Appreciation</a></li>
            <li><a href="/milestones" className="hover:underline">Milestones</a></li>
            <li><a href="/catalog" className="hover:underline">Catalog of Books</a></li>
            <li><a href="/guide" className="hover:underline">Reading & Hearing Guide</a></li>
            <li><a href="/quotes" className="hover:underline">Quotes</a></li>
            <li><a href="/gallery" className="hover:underline">Photo Gallery</a></li>
            <li><a href="/videos" className="hover:underline">Video Gallery</a></li>
            <li><a href="/audio" className="hover:underline">Audio Lectures</a></li>
            <li><a href="/360-view" className="hover:underline">360 View & More</a></li>
          </ul>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Sprabhupada;
