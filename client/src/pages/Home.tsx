import Hero from "@/components/home/Hero";
import { Helmet } from "react-helmet";
import UpcomingEvents from "../components/UpcomingEvents";


export default function Home() {
  return (
    <>
      <Helmet>
        <title>ISKCON Bhilai - Offer Seva</title>
        <meta name="description" content="Contribute to ISKCON Bhilai through various seva options including Annadana, Gaushala and Temple Development." />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      
      
      <Hero /> <br /><br /><br />

      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Images */}
        <div className="grid grid-cols-4 gap-0 w-full lg:w-1/2 overflow-hidden">
          <img src="/images/img1.jpg" alt="img1" className="h-full w-full object-cover" />
          <img src="/images/img2.jpg" alt="img2" className="h-full w-full object-cover" />
          <img src="/images/img3.jpg" alt="img3" className="h-full w-full object-cover" />
          <img src="/images/img4.jpg" alt="img4" className="h-full w-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="mt-10 lg:mt-0 lg:ml-12 text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-4xl font-light italic text-blue-500">Discover</h2>
          <h3 className="text-4xl font-bold text-gray-900 mt-2">OUR STORY</h3>
          <p className="text-gray-600 mt-6 leading-relaxed">
            Curabitur quas nets lacus ets nulat iaculis loremis etis nislle varius vitae seditum
            fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit rutrum eleif arcu sit aspernatur nets fugit, sed quia.
          </p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 border-2 border-blue-700">
            OUR RECEIPES
          </button>
        </div>
      </div>
    </section><br /><br /><br />


      <section className="bg-white py-16 px-4 text-center">
        {/* Clickable Banner */}
        <div className="flex justify-center mb-12">
          <a href="/philosophy/Sprabhpada" className="w-full max-w-5xl block">
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/sp1.png"
                alt="Srila Prabhupada"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-serif text-gray-800 mb-2">FOUNDER-ACARYA</h2>
        <h3 className="text-lg md:text-xl text-[#6b4c32] mb-10 font-serif">
          HIS DIVINE GRACE A.C. BHAKTIVEDANTA SWAMI SRILA PRABHUPADA
        </h3>

        {/* Images Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          <img
            src="/images/founder1.jpg"
            alt="Founder 1"
            className="w-[280px] h-[300px] object-cover rounded-md shadow-md"
          />
          <img
            src="/images/founder2.jpg"
            alt="Founder 2"
            className="w-[280px] h-[300px] object-cover rounded-md shadow-md"
          />
          <img
            src="/images/founder3.jpg"
            alt="Founder 3"
            className="w-[280px] h-[300px] object-cover rounded-md shadow-md"
          />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-sm text-gray-700 leading-relaxed mb-12">
          <p className="mb-4">
            ISKCON was founded in 1966 in New York by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada,
            affectionately known as Srila Prabhupada by his followers. With great effort and determination,
            at the age of 69 (when most people are retired), he journeyed from Kolkata to New York by cargo
            ship hoping to help the people of the Western world to reconnect with their spiritual essence.
            He sought to pass on the ancient teachings of bhakti-yoga and demonstrated how to practically
            apply this knowledge to live a happy and fulfilling life.
          </p>
          <p>
            Srila Prabhupada has unlocked the secrets and sacred spiritual knowledge in the Vedic tradition
            and made them accessible to everyone. His “Bhagavad-Gita As It Is” is the largest selling edition
            of the Bhagavad-Gita in the Western world and translated in over 76 languages.
          </p>
        </div>

        {/* Four Principle Cards */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-10">
            {[
              {
                title: "BOOKS ARE THE BASIS",
                description:
                  "The study and distribution of the Vedic literatures, presented by Srila Prabhupada, help to expand our spiritual knowledge, peace and well-being.",
                image: "/images/icons/book.png",
              },
              {
                title: "PURITY IS THE FORCE",
                description:
                  "Clean living and coming together as a community in our spiritual practice has a profound effect on our consciousness and the world.",
                image: "/images/icons/diamond.png",
                highlight: true,
              },
              {
                title: "PREACHING IS THE ESSENCE",
                description:
                  "Sharing is caring. Spiritual knowledge is the one wealth that actually grows as we give it away.",
                image: "/images/icons/sharing.png",
              },
              {
                title: "UTILITY IS THE PRINCIPLE",
                description:
                  "Sharing is caring. Spiritual knowledge is the one wealth that actually grows as we give it away.",
                image: "/images/icons/utility.png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-xl shadow-md p-6 flex space-x-6 min-h-[220px] transform transition-all duration-300 hover:shadow-xl hover:scale-[1.03] ${
                  item.highlight
                    ? "border border-green-400 hover:border-green-500"
                    : "border border-transparent hover:border-gray-300"
                }`}
              >
                {/* Icon */}
                <div className="w-28 h-28 flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-orange-500 font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Signature and Button */}
          <div className="mt-16 text-center">
            <img src="/images/signature.png" alt="Signature" className="mx-auto h-10 mb-6" />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md">
              Read More
            </button>
          </div>
        </div>
      </section><br /><br /><br />

      {/* ✅ wisdom section inserted here */}
      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">EXPLORE ANCIENT SPIRITUAL WISDOM</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            We offer a variety of opportunities for those interested in the timeless wisdom of the ancient Vedic texts.
            If you’re looking for answers, are intellectually inquisitive, or just interested, find out more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                image: "/images/spiritual/kids.jpg",
                label: "INVITING KIDS",
              },
              {
                image: "/images/spiritual/youth.jpg",
                label: "INVITING YOUTHS",
              },
              {
                image: "/images/spiritual/families.jpg",
                label: "INVITING FAMILIES",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Image Box */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full">
                  <img src={item.image} alt={item.label} className="w-full h-64 object-cover" />
                </div>

                {/* Button Below Box */}
                <button className="mt-6 inline-flex items-center justify-center px-6 py-2 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-100 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section><br /><br /><br />

      {/* ✅ Donation component inserted here */}
      <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 to-white py-16">
        {/* Text & Image Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="text-center lg:text-left space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
              SPONSORSHIPS & DONATIONS
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
              All spiritual activities at Hare Krishna Movement : Bhilai-Raipur are funded by the
              donations and sponsorships received from our well-wishers. See how you can contribute!
            </p>
            <div className="pt-4">
              <a
                href="/donate"
                className="inline-block bg-green-600 text-white px-8 py-3 font-semibold rounded-md hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg"
              >
                DONATE NOW
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center p-8 relative">
            <div className="relative w-full max-w-4xl h-[500px]"> {/* Set a fixed height for the collage container */}
              
              {/* Main featured image - largest and at the back */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-2xl group z-10">
                <img
                  src="/path-to-image/main-featured.jpg"
                  alt="Main donation"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white text-xl font-bold bg-black/60 px-4 py-2 rounded-full">Donate Now</span>
                </div> */}
              </div>
              
              {/* Secondary image 1 - overlapping top right */}
              <div className="absolute top-10 right-10 w-1/2 h-1/2 rounded-lg overflow-hidden shadow-xl group z-20">
                <img
                  src="/path-to-image/secondary-1.jpg"
                  alt="Community"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Secondary image 2 - overlapping bottom left */}
              <div className="absolute bottom-10 left-10 w-1/2 h-1/2 rounded-lg overflow-hidden shadow-xl group z-20">
                <img
                  src="/path-to-image/secondary-2.jpg"
                  alt="Volunteers"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Small accent image 1 - top left corner */}
              <div className="absolute top-0 left-0 w-1/4 h-1/4 rounded-lg overflow-hidden shadow-lg group z-30 rotate-6">
                <img
                  src="/path-to-image/tertiary-1.jpg"
                  alt="Event"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Small accent image 2 - bottom right corner */}
              <div className="absolute bottom-0 right-0 w-1/4 h-1/4 rounded-lg overflow-hidden shadow-lg group z-30 -rotate-6">
                <img
                  src="/path-to-image/tertiary-2.jpg"
                  alt="Celebration"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Optional decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-32 h-32 border-4 border-yellow-400 rounded-lg z-0"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 border-4 border-green-400 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
        {/* Auto-Scrolling Cards Section */}
        {/* <div className="overflow-hidden mt-16">
          <div className="flex w-max animate-scroll-left gap-6">
            {[...Array(2)].flatMap(() =>
              [
                { title: "Annadana Seva", img: "/donation1.jpg" },
                { title: "Gyaan Daan Seva", img: "/donation2.jpg" },
                { title: "Nitya Seva", img: "/donation3.jpg" },
                { title: "DEITY SERVICES", img: "/donation4.jpg" },
                { title: "GAU SEVA", img: "/donation5.jpg" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="/donate"
                  className="inline-block w-60 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                      <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                      <span className="text-sm mt-1 underline">Read More</span>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div> */}
      </section><br /><br />

      {/* Existing UpcomingEvents component */}
      <UpcomingEvents />

      { /* About us section */ }
      <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Know More About Us
        </h2>
        <div className="flex flex-wrap justify-center gap-10 px-4">
          {[
            {
              title: "Our Vision",
              img: "/our-vision.png",
              link: "/vision",
            },
            {
              title: "Our Objectives",
              img: "/objectives.png",
              link: "/objectives",
            },
            {
              title: "Media",
              img: "/media.png",
              link: "/media",
            },
            {
              title: "Festivals",
              img: "/festivals.png",
              link: "/festivals",
            },
            {
              title: "Activities",
              img: "/activities.png",
              link: "/activities",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center group">
              <a href={item.link}>
                <div className="w-40 h-40 rounded-full border-2 border-dashed border-gray-300 mx-auto flex items-center justify-center overflow-hidden bg-white transition-all duration-700 group-hover:border-green-500 group-hover:rotate-[360deg]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-w-[70%] max-h-[70%] object-contain transition duration-500 ease-in-out group-hover:blur-sm"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <span className="text-blue-600 font-medium text-sm">Read</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/cp1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/40 to-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">INTERESTED IN OUR ACTIVITIES?</h2>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          What's your best way to a great place to have a much more<br />
          great power than having relationships between us...
        </p>
        
        {/* <div className="flex flex-col items-center space-y-4 mb-8">
          <span className="text-sm font-medium">Made in the workplace</span>
          <span className="text-sm font-medium">Notable about</span>
        </div> */}

        <div className="flex flex-col items-center space-y-4">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-sm font-semibold rounded-full w-full max-w-xs">
            FOLLOW ON WHATSAPP
          </button>
          <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-3 text-sm font-semibold rounded-full w-full max-w-xs">
            TELEGRAM GROUP
          </button>
        </div>
      </div>

      {/* SVG Wave */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-[120px] block text-[#fff7e9] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
          >
            {/* Main mirrored wave (flipped vertically) */}
            <path 
              d="M0,120 C150,40 450,100 600,40 S1050,110 1200,40 L1200,120 Z" 
              fill="currentColor"
              className="opacity-90 animate-[wave_8s_ease-in-out_infinite_alternate]"
            />
            
            {/* Secondary mirrored wave with delayed animation */}
            <path 
              d="M0,100 C200,30 400,110 600,60 S1000,90 1200,50 L1200,120 Z" 
              fill="currentColor"
              className="opacity-40 animate-[wave_12s_ease-in-out_-2s_infinite_alternate]"
            />
          </svg>
        </div>
    </section>

      {/* <section className="w-full py-12 bg-gradient-to-r from-[#2c3e50] to-[#27ae60]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8"> */}

            {/* Left Column: Centered Text */}
            {/* <div className="flex-1 flex justify-center items-center text-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Quick Contact Through Whatsapp
              </h2>
            </div> */}

            {/* Right Column: White Box with Centered, Narrower Button */}
            {/* <div className="flex-1 flex justify-center items-center">
              <div className="bg-white rounded-lg px-10 py-5 shadow-md w-full max-w-md">
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white font-semibold rounded-md px-4 py-2 block mx-auto w-48 text-center hover:bg-green-700 transition duration-300"
                >
                  @ CLICK TO CHAT
                </a>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      <section className="bg-[#f9fefa] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            
            {/* Card 1 */}
            <div className="flex items-center gap-4 group cursor-pointer transition-all">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-green-500 group-hover:text-white text-green-600 bg-white">
                <i className="fas fa-truck text-xl transition-all duration-300 group-hover:text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Free Home Delivery</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 group cursor-pointer transition-all">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-green-500 group-hover:text-white text-green-600 bg-white">
                <i className="fas fa-sync-alt text-xl transition-all duration-300 group-hover:text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Instant Return Policy</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 group cursor-pointer transition-all">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-green-500 group-hover:text-white text-green-600 bg-white">
                <i className="fas fa-headset text-xl transition-all duration-300 group-hover:text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Quick Support System</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-center gap-4 group cursor-pointer transition-all">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-green-500 group-hover:text-white text-green-600 bg-white">
                <i className="fas fa-lock text-xl transition-all duration-300 group-hover:text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Secure Payment Way</h4>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
}
