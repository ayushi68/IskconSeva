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
      
      
      <Hero /> 
       {/* ✅ New image block inserted here */}
      <div className="bg-white py-8">
        <div className="flex justify-center">
          <a href="/some-new-page" className="w-full max-w-5xl block">
            <div>
              <img
                src="/founder.jpg"
                alt="New Image"
                className="w-full h-auto object-contain "
              />
            </div>
          </a>
        </div>
      </div>

      {/* ✅ Sprabhupada block inserted here */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <a href="/philosophy/Sprabhpada" className="w-full max-w-5xl block">
              <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/sp1.png"
                  alt="ISKCON Logo"
                  className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>
          </div>
          <h2 className="text-4xl font-bold text-center mb-8">ACHARYA<br /> DIVINE GRACE A.C. BHAKTIVEDANTA SWAMI PRABHUPADA</h2>
        </div>
      </section>

      {/* ✅ New section inserted here */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-10">
            {[
              {
                title: "BOOKS ARE THE BASIS",
                description:
                  "The study and distribution of the Vedic literatures, presented by Srila Prabhuada, help to expand our spiritual knowledge, peace and well-being.",
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
                {/* Like Button */}
                <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors text-xl">
                  ♥
                </button>

                {/* Icon/Image */}
                <div className="w-28 h-28 flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-orange-500 font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Read More button below all boxes */}
          <div className="mt-12 text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md">
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* End of new section */}

      {/* ✅ wisdom section inserted here */}
      <section className="bg-gray-50 py-16">
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
      </section>

      {/* ✅ Donation component inserted here */}
      <section className="bg-[#e9d7cf] py-16 overflow-hidden">
        {/* Text & Image Section */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
              SPONSORSHIPS & DONATIONS
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0">
              All spiritual activities at Hare Krishna Movement : Bhilai-Raipur are funded by the
              donations and sponsorships received from our well-wishers. See how you can contribute!
            </p>
            <a
              href="/donate"
              className="inline-block bg-green-600 text-white px-8 py-3 font-semibold rounded-md hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg"
            >
              DONATE NOW
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="/path-to-image/00d8a8a0-35b2-47c1-9950-08796d381fd2.png"
              alt="Donate"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Auto-Scrolling Cards Section */}
        <div className="overflow-hidden mt-16">
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
        </div>
      </section>

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

      

      <section className="w-full py-12 bg-gradient-to-r from-[#2c3e50] to-[#27ae60]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">

            {/* Left Column: Centered Text */}
            <div className="flex-1 flex justify-center items-center text-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Quick Contact Through Whatsapp
              </h2>
            </div>

            {/* Right Column: White Box with Centered, Narrower Button */}
            <div className="flex-1 flex justify-center items-center">
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
      </section>

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
