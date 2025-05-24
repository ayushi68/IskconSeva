import React from "react";
import { useState } from "react";

const heroSlides = [
  {
    image: "/sp1.png",
    title: "CC Madhya 22.54",
    subtitle: "‘sādhu-saṅga’, ‘sādhu-saṅga’ — sarva-śāstre kaya,lava-mātra sādhu-saṅge sarva-siddhi haya",
  },
  {
    image: "/sp2.jpg",
    title: "Accomplishments of Srila Prabhupada",
    subtitle: "Accomplishments of Srila Prabhupada",
  },
  {
    image: "/sp3.jpg",
    title: "Scholars’ Appreciation of Srila Prabhupada’s Books",
    subtitle: "Scholars’ Appreciation of Srila Prabhupada’s Books",
  },
];

const menuItems = [
  {
    title: "English Breakfast",
    price: "$12.95",
    description: "Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.",
  },
  {
    title: "Lasagna Classica",
    price: "$19.55",
    description: "Broccoli rabe, italian sausage, peperoncino, tomatoes, flour and roasted garlic.",
  },
  {
    title: "Vegetables Soup",
    price: "$9.95",
    description: "Papaya salsa, sliced red radishes, avocado, corn tortilla, spicy tomato ketchup.",
  },
  {
    title: "Toffee Pudding",
    price: "$10.50",
    description: "Baked caramel colored sponge cake with raisins, ladled with warm toffee sauce.",
  },
];

const Sprabhupada = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");

  const prev = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  const next = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % menuItems.length);
  };

  return (
    <div className="space-y-16 p-6">
      {/* Section 1: Banner */}
      <section
        className="relative w-full h-screen bg-cover bg-center text-white transition-all duration-700"
        style={{
          backgroundImage: `url(${heroSlides[currentSlide].image})`,
        }}
      >
        {/* Centered Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold">{heroSlides[currentSlide].title}</h1>
          <p className="mt-4 text-xl">{heroSlides[currentSlide].subtitle}</p>
          <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-semibold">
            Srila Prabhupada - Our Achraya
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                currentSlide === index ? "bg-white border-white" : "bg-transparent border-white"
              } hover:bg-white`}
            ></button>
          ))}
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Text */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Discover Title */}
          <h3 className="text-yellow-500 text-5xl italic font-serif mb-2">Discover</h3>
          
          {/* Our Story Title */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">OUR STORY</h2>
          
          {/* Paragraph */}
          <p className="text-gray-700 text-base leading-relaxed max-w-md mb-8 text-justify">
            “The verdict of all revealed scriptures is that by even a moment’s association with a pure devotee, one can attain all success.

            "What is not possible to achieve in thousands of lives can be achieved in one moment if there is an opportunity to meet a saintly person. It is therefore enjoined in Vedic literature that one should always try to associate with saintly persons and try to disassociate oneself from the common man, because by one word of a saintly person one can be liberated from material entanglement."
            Śrimad Bhāgavatam: 3.22.5, Purport.
            On September 1st 1896, the day after Sri Krishna Janmashtami, the pure devotee for the 20th century World: Srila Prabhupada, took his birth in Calcutta. As quoted in the above verses, he proved to be that sādhu whose moment’s association was remembered and awaited by many.
            Sometimes people have considered him to be a scholar, at other times a philosopher, a cultural ambassador, a prolific author, a religious leader, a spiritual teacher, a social critic, and a holy man. In truth, he was all these things and more.
            The prophecy of Lord Chaitanya, that the ‘chanting of His holy names would spread beyond the shores of India to every town and village in the world’, came true and it was Srila Prabhupada, who accomplished  this mission.
          </p>

          {/* Button */}
          {/* <button className="border-4 border-yellow-500 text-yellow-50 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 uppercase tracking-widest font-semibold shadow-lg transition duration-300">
            Our Receipes
          </button> */}
        </div>

        {/* Right Column - Image */}
        <div className="relative">
          <img
            src="/sp3.jpg"
            alt="Seafood Platter"
            className="w-full rounded border border-gray-300"
          />

          {/* Carousel Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
            <span className="h-3 w-3 border-2 border-yellow-500 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* Section 3: Visual/Spacer Section (No Text Detected) */}
      <section
        className="relative h-[90vh] bg-fixed bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/sp4.jpg')",
        }}
      >
        {/* Overlay (optional darken effect) */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-yellow-500 text-5xl italic font-serif mb-2">Childhood and Youth</h3>
          <p className="text-white text-lg leading-relaxed mb-6 text-justify px-4 sm:px-6 md:px-8 lg:px-10">On September 1st 1896,he was born in Calcutta. Soon after his birth, an Astrologer predicted that: When this child reaches the age of seventy, he will cross the ocean, become a great teacher of religion and establish 108 Krishna temples. And yes, he did so…
            His parents Sri Gour Mohan De and Smt. Rajani, were Vaishnavas and dear Abhay Charan (his childhood name), grew up observing the Vaishnava Principles and practices. He was gifted Deity of Sri Sri Radha Krishna for worship and out of his fondness, he conducted a small “Ratha Yatra” of Lord Jagannath, at his home, with his tiny abilities/at a very young age.
            All his knowledge, Vaishnava qualities and formal education, got him a Superlative service at the Lotus feet of Radha Krishna. In the year 1922, he met his Spiritual Master, Srila Bhaktisiddhanta Saraswati Thakur for the first time. At the very first meeting he was instructed to preach in English in the West. By this time, he was already married to Radha Rani and was having a child.</p>
        </div>
      </section>

      {/* Section 4: Our Chefs */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* left Column - Image */}
        <div className="relative">
          <img
            src="/sp3.jpg"
            alt="Seafood Platter"
            className="w-full rounded border border-gray-300"
          />

          {/* Carousel Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
            <span className="h-3 w-3 border-2 border-yellow-500 rounded-full"></span>
          </div>
        </div>

        {/* right Column - Text */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Discover Title */}
          <h3 className="text-yellow-500 text-5xl italic font-serif mb-2"> Initial Years In Spiritual Life</h3>
          
          {/* Our Story Title */}
          {/* <h2 className="text-4xl font-extrabold text-gray-900 mb-6">OUR STORY</h2> */}
          
          {/* Paragraph */}
          <p className="text-gray-700 text-base leading-relaxed max-w-md mb-8">
            Although ten years spanned in between his first meeting with Srila Bhaktisiddhanta Saraswati Thakur and his First Initiation in 1932, he had already assisted Gaudiya math in many activities, like establishing a center at Allahabad. In the following years, he received instructions from his Spiritual master and helped establish many Gaudiya Math centers. In 1936, the final orders came from his Spiritual Master, to preach in the West. His specific instruction was to print books as and when there’s money.

            Prabhupada tried to preach in India, but very few people received it favorably. His struggles to write, print, proofread and sell the magazines were all getting very few responses. 
          </p>

          {/* Button */}
          {/* <button className="border-4 border-yellow-500 text-yellow-50 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 uppercase tracking-widest font-semibold shadow-lg transition duration-300">
            Our Receipes
          </button> */}
        </div>
      </section>

      {/* Section 3.1: Visual/Spacer Section (No Text Detected) */}
      <section
        className="relative h-[90vh] bg-fixed bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/sp4.jpg')",
        }}
      >
        {/* Overlay (optional darken effect) */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-yellow-500 text-5xl italic font-serif mb-2">Acceptance of Sannyasa and Krishna Consciousness in West</h3>
          <p className="text-white text-lg leading-relaxed mb-6 text-justify px-4 sm:px-6 md:px-8 lg:px-10">In the years following, he accepted Vanaprastha and later Sannyasa and prepared to go to the West. His stay at Radha Damodar Temple in Vrindavan was an important phase. This was the time when the greatest epic, Amalam Puranam, the Śrimad Bhāgavatam was being translated. 
            Finally in 1965, on board the ship Jaladuta, at the age of 69, Srila Prabhupada arrived in Boston, America surviving Sea Sickness and two massive Heart Attacks. He had no possessions except 40/- Indian Rupees and a trunk load of books of Srimad Bhagavatam 1st Canto. With great feelings of anxiety and assuming the difficulties of the sacred mission of spreading Krishna Consciousness in the West, he composed the Historic Poem, “Markine Bhagavata Dharma”.
            Despite facing failures and going through very difficult times, in the year 1966, the International Society for Krishna Consciousness was incorporated in America. With that marking the beginning, Prabhupada encircled the Globe minimum 14 times, delivering lectures, establishing more than 108 temples, opening God-centered self-sufficient farm communities based on the principles of Simple Living High Thinking and the foremost change he brought was: converting “Hippies to Happies”. They were fed sumptuously, the Krishna Prasadam and danced to the tunes of Hare Krishna which purified them and many became his disciples. Majority of them accepted this deep philosophy, the way of Krishna Conscious life, gave up unclean habits, started deity worship, helped in typing and distributing Prabhupada's books.A few moments meeting with Prabhupada left significant remarks on their minds. </p>
        </div>
      </section>

      {/* Section 4.1: Our Chefs */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* left Column - Image */}
        <div className="relative">
          <img
            src="/sp3.jpg"
            alt="Seafood Platter"
            className="w-full rounded border border-gray-300"
          />

          {/* Carousel Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
            <span className="h-3 w-3 border-2 border-yellow-500 rounded-full"></span>
          </div>
        </div>

        {/* right Column - Text */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Discover Title */}
          <h3 className="text-yellow-500 text-5xl italic font-serif mb-2"> Bringing Back Krishna Consciousness To India</h3>
          
          {/* Our Story Title */}
          {/* <h2 className="text-4xl font-extrabold text-gray-900 mb-6">OUR STORY</h2> */}
          
          {/* Paragraph */}
          <p className="text-gray-700 text-justify">
            With the desire to revive the forgotten Krishna Consciousness in his homeland, India, he came back with his foreign disciples sporting shaven heads and saffron robes. When these foreigners did Nagar Sankīrtan, the onlookers would be dumbstruck to see their faith and ecstasy.
            Kīrtans, Pandal Programmes, meetings with religious leaders and so on so forth, Prabhupada was completely occupied. With the help of his English disciples, Prabhupada opened big big temples in Vrindavan, Mayapur, Bombay, Hyderabad etc. 
            Srila Prabhupada often said: “If you want to serve me best, then distribute my books”.His instructions were mostly alike to everyone and the most basic, like chanting of minimum 16 rounds in a day.  Of all his contributions, Srila Prabhupada considered his books to be of utmost significance. 
          </p>

          {/* Button */}
          {/* <button className="border-4 border-yellow-500 text-yellow-50 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 uppercase tracking-widest font-semibold shadow-lg transition duration-300">
            Our Receipes
          </button> */}
        </div>
        
      </section>
      <p className="text-gray-700 text-justify px-4 sm:px-6 md:px-8 lg:px-10"> These books present the timeless wisdom of Vedic scriptures in modern English with simple language and eloquence. These books have changed the lives of millions and are still doing…
            His outstanding personality, simple life, depth of knowledge, faith and kindness were all so appreciated and made young and old love Prabhupada, unconditionally. Even the devotees of other Sampradayas, deeply respected Prabhupada for his preaching work. The Bhagavad-gita, Srimad Bhagavatam, Chaitanya Charitamrita, Bhakti Rasamrita Sindhu list 85 qualities a true spiritualist should possess and one can note that Srila Prabhupada had all of the above qualities in completeness. Dr. Thomas J. Hopkins mentioned Prabhupada as:“He was a genuine holy person with enormous integrity and compassion, and he had a powerful impact on those who met him. He never claimed authority and respect for himself; what he said and did was always in the name of Krishna”
            With interest in preparing children as next generation preachers, he opened gurukuls and Vedic schools both in and outside India. He persuaded that the greatest necessity of present day society is Krishna Consciousness which helps in discovering the self and importance of relating ourselves to God. 
            When a reporter once queried Prabhupada about his successor, Srila Prabhupada, sounding like the personification of the voice of eternity, boomed forth, “I shall never die. I will live forever in my books.” 
            All Glories to Srila Prabhupada!!</p>

      {/* Section 5: Awarded Chefs/Menu */}
      <section
        className="relative bg-fixed bg-center bg-cover text-white py-20 px-4"
        style={{
          backgroundImage: "url('/sp5.jpg')",
        }}
      >
        <div className="max-w-5xl mx-auto justify-center">
          {/* Section Title */}
          <h3 className="text-yellow-500 text-5xl italic font-serif mb-2">Srila Prabhupada</h3>
          <h2 className="text-white text-4xl font-extrabold tracking-wider mb-10">Milestones</h2>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 gap-y-10 gap-x-16 text-left">
            {/* Left Column */}
            <div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>BOOKS</span>
                {/* <span className="text-yellow-500">$12.95</span> */}
              </div>
              {/* <p className="text-gray-200 text-sm">Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p> */}
            </div>

            <div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Quotes</span>
                {/* <span className="text-yellow-500">$19.55</span> */}
              </div>
              {/* <p className="text-gray-200 text-sm">Broccoli rabe, italian sausage, peperoncino, tomatoes, flour and roasted garlic.</p> */}
            </div>

            {/* Second Row */}
            <div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Gallery</span>
                {/* <span className="text-yellow-500">$9.95</span> */}
              </div>
              {/* <p className="text-gray-200 text-sm">Papaya salsa, sliced red radishes, avocado, corn tortilla, spicy tomato ketchup.</p> */}
            </div>

            <div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Others</span>
                {/* <span className="text-yellow-500">$10.50</span> */}
              </div>
              {/* <p className="text-gray-200 text-sm">Baked caramel colored sponge cake with raisins, ladled with warm toffee sauce.</p> */}
            </div>
          </div>

          {/* Button */}
          {/* <div className="mt-12">
            <button className="border border-white text-white font-bold py-2 px-6 inline-flex items-center gap-2 hover:bg-yellow-500 hover:text-black transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8m-8-4h8M4 6h16v12H4z" />
              </svg>
              FULL CONTENTS
            </button>
          </div> */}
        </div>
      </section>

      {/* Section 6: Delicious Recipes */}
      {/* <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto"> */}
          {/* Section Header */}
          {/* <div className="text-center mb-16">
            <h3 className="text-yellow-500 text-4xl italic font-serif mb-2">Srila Prabhupada</h3>
            <h2 className="text-4xl font-extrabold text-gray-900">Our Achraya </h2>
          </div> */}

          {/* Recipe Cards with Images */}
          {/* <div className="grid md:grid-cols-3 gap-8"> */}
            {/* Card 1 */}
            {/* <div className="group">
              <div className="h-64 overflow-hidden mb-6">
                <img 
                  src="/sp3.jpg" 
                  alt="Brownies and Coffee"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Accomplishments of Srila Prabhupada</h3>
                <p className="text-gray-700 mb-6">
                  
                </p>
                <a href="#" className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors inline-block border-b border-yellow-500 pb-1">
                  DISCOVER MORE
                </a>
              </div>
            </div> */}

            {/* Card 2 */}
            {/* <div className="group">
              <div className="h-64 overflow-hidden mb-6">
                <img 
                  src="/sp4.jpg" 
                  alt="Oldest London Pub"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholars’ Appreciation of Srila Prabhupada’s Books</h3>
                <p className="text-gray-700 mb-6">
                  
                </p>
                <a href="#" className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors inline-block border-b border-yellow-500 pb-1">
                  DISCOVER MORE
                </a>
              </div>
            </div> */}

            {/* Card 3 */}
            {/* <div className="group">
              <div className="h-64 overflow-hidden mb-6">
                <img 
                  src="/sp5.jpg" 
                  alt="New Cooking Recipes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Milestone of Srila Prabhupada</h3>
                <p className="text-gray-700 mb-6">
                  
                </p>
                <a href="#" className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors inline-block border-b border-yellow-500 pb-1">
                  DISCOVER MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 7: Cooking Recipes Header */}
      <section className="relative py-24 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h3 className="text-[#d4a533] text-3xl italic font-serif mb-3 tracking-wide">Srila Prabhupada</h3>
            <h2 className="text-5xl font-bold text-[#333] uppercase tracking-tight">OUR ACHARYA</h2>
          </div>

          {/* Carousel Container */}
          <div className="relative group">
            {/* Navigation Arrows */}
            <button className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-[#d4a533] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-[#d4a533] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Recipe Cards Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Recipe Card 1 - Active/Featured */}
              <div className="relative transform transition-all duration-500 hover:scale-105">
                <div className="absolute -inset-1 bg-[#d4a533] rounded-lg blur opacity-75"></div>
                <div className="relative bg-white rounded-lg overflow-hidden shadow-xl h-full">
                  <img 
                    src="/sp3.jpg" 
                    alt="Featured Recipe" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      {/* <span className="bg-[#d4a533] text-white text-xs px-3 py-1 rounded-full">FEATURED</span>
                      <span className="text-gray-500 text-sm">30 Min</span> */}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Catalog of Srila Prabhupada’s Books</h3>
                    <p className="text-gray-600 mb-6"></p>
                    <button className="text-[#d4a533] font-semibold hover:text-[#b38d2a] border-b border-[#d4a533] pb-1 transition-colors">
                      VIEW  →
                    </button>
                  </div>
                </div>
              </div>

              {/* Recipe Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-full transform transition-all duration-500 hover:scale-105">
                <img 
                  src="/sp4.jpg" 
                  alt="Recipe 2" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 text-sm">SP Book Reading and Hearing Guide</span>
                    {/* <span className="text-gray-500 text-sm">45 Min</span> */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">SP Book Reading and Hearing Guide</h3>
                  <p className="text-gray-600 mb-6"></p>
                  <button className="text-[#d4a533] font-semibold hover:text-[#b38d2a] border-b border-[#d4a533] pb-1 transition-colors">
                    VIEW  →
                  </button>
                </div>
              </div>

              {/* Recipe Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-full transform transition-all duration-500 hover:scale-105">
                <img 
                  src="/sp5.jpg" 
                  alt="Recipe 3" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 text-sm">Srila Prabhupada - Books</span>
                    {/* <span className="text-gray-500 text-sm">60 Min</span> */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">BBT Books</h3>
                  <p className="text-gray-600 mb-6"></p>
                  <button className="text-[#d4a533] font-semibold hover:text-[#b38d2a] border-b border-[#d4a533] pb-1 transition-colors">
                    VIEW  →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Spicy Chili (incomplete OCR) */}
      <section className="bg-[#f8f5f0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Image and heading */}
            <div className="relative">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="block">Srila Prabhupada</span>
                <span className="block text-[#d4a533]">Sections</span>
              </h2>
              <img 
                src="/sp6.jpg" 
                alt="Srila Prabhupada" 
                className="w-full rounded-lg shadow-lg"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 bg-[#d4a533] w-16 h-16 rounded-full flex items-center justify-center text-white font-bold">
                Important
              </div>
            </div>

            {/* Right column - Grid of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Quotes", "Photo Gallery", "Video Gallery", "Bhajan-Kirtans", "Audio Lectures",
                "360 View Lila Sthali", "Story", "Analog", "Letter", "Article",
                "Photo Pasttimes", "News Articles", "Memories", "Accolade by Eminent Personality",
                "Predictions", "Quick Facts", "108 Temples", "Poetry"
              ].map((title, index) => (
                <div
                  key={index}
                  className="bg-white h-32 flex items-center justify-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-gray-800 text-center">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sprabhupada;
