import { useEffect } from "react";
import FeaturedDonations from "../components/FeaturedDonations";
import DonationForm from "../components/donation/DonationForm";

const DonationPage = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById("backToTop");

    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopButton?.classList.remove("opacity-0", "invisible");
        backToTopButton?.classList.add("opacity-100", "visible");
      } else {
        backToTopButton?.classList.add("opacity-0", "invisible");
        backToTopButton?.classList.remove("opacity-100", "visible");
      }

      const animateElements = document.querySelectorAll(".animate-on-scroll");
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(() => handleScroll(), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/0088_SP-CT051_054 V5.29.jpg')] opacity-10 bg-repeat"></div>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white space-y-6 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Support Spirituality with Your Gift
              </h1>
              <p className="text-lg md:text-xl italic font-serif opacity-90 leading-relaxed">
                yajṣa-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat<br />
                yajṣo dānaṁ tapaś caiva pāvanāni manīṣiṇām
              </p>
              <p className="text-right text-sm font-medium">- Bhagavad Gita 18.5</p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="#donate-section"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Offer Seva
                </a>
                {/* <a
                  href="#learn-more"
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn More
                </a> */}
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
              <img
                src="/0088_SP-CT051_054 V5.29.jpg"
                alt="Spiritual offering ceremony"
                className="rounded-3xl shadow-2xl border-4 border-white/20 w-full h-auto hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "23,30,367", label: "Meals Served" },
              { value: "₹6,00,000", subtext: "/month", label: "Funds Needed" },
              { value: "1,200", label: "Served Daily (Weekdays)" },
              { value: "2,500", label: "Served Daily (Weekends)" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 text-center animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out"
              >
                <div className="text-3xl font-bold">
                  {stat.value}
                  {stat.subtext && <span className="text-lg font-medium"> {stat.subtext}</span>}
                </div>
                <div className="text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction & Scriptures Section */}
      <section id="learn-more" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Divine Offerings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto my-4 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your generosity fuels the Vedic tradition, nurturing spiritual growth and devotion as taught by sacred scriptures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bhagavad Gita 9.26",
                content: "Lord Krishna says, 'If one offers Me with love and devotion a leaf, a flower, a fruit, or water, I will accept it.'"
              },
              {
                title: "Vamana Purana",
                content: "Building a Vishnu temple protects eight generations and grants entry to Vaikuntha."
              },
              {
                title: "Skanda Purana",
                content: "Starting a temple erases sins of seven births and liberates ancestors."
              },
              {
                title: "Padma Purana",
                content: "Those who construct a temple for Lord Vishnu ascend to His divine abode."
              },
              {
                title: "Srimad Bhagavatam 11.27.51",
                content: "Offering gifts for the Deity’s worship brings opulence equal to Lord Krishna’s."
              },
              {
                title: "Srimad Bhagavatam 11.27.52-53",
                content: "Building a temple makes one ruler of the three worlds; serving the Deity leads to pure devotion."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105  animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedDonations />

      {/* Donation Section */}
      <section id="donate-section" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Make an Impact Today</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Your donation supports temple construction, festivals, and community service, deepening your connection with Lord Krishna.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payment Information */}
            <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pay via UPI</h3>
                <img
                  src="/hkmqr.jpg"
                  alt="UPI QR Code"
                  className="w-48 h-48 mx-auto rounded-lg border-2 border-gray-200"
                />
                <div className="mt-4 inline-flex items-center bg-gray-100 rounded-lg p-3">
                  <span className="font-medium text-gray-700">goseva.augp@aubank</span>
                  <button
                    onClick={() => navigator.clipboard.writeText("goseva.augp@aubank")}
                    className="ml-3 text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bank Transfer</h3>
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  {[
                    { label: "Account Name", value: "Hare Krishna Movement" },
                    { label: "Account Number", value: "6711946637" },
                    { label: "Bank Name", value: "Kotak Mahindra Bank" },
                    { label: "IFSC Code", value: "KKBK0006424" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{item.label}: <span className="text-gray-600">{item.value}</span></span>
                      <button
                        onClick={() => navigator.clipboard.writeText(item.value)}
                        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Note:</span> After a bank transfer, email <a href="mailto:hkmbhilai@gmail.com" className="text-indigo-600 underline hover:text-indigo-800">hkmbhilai@gmail.com</a> with:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Your Name</li>
                    <li>Phone Number</li>
                    <li>Transaction ID</li>
                    <li>PAN Number</li>
                  </ul>
                </p>
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <p>80G tax exemption available under Income Tax Act 1961. For receipts, share your legal name, address, PIN code, and PAN at <a href="mailto:hkmbhilai@gmail.com" className="text-indigo-600 underline hover:text-indigo-800">hkmbhilai@gmail.com</a>.</p>
                <p>By donating, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.</p>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/path-to-your-image/varaha-quote.png"
                  alt="Lord Varaha quote"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
                  <p className="text-white text-lg font-medium text-center">
                    Lord Varaha says, <br />
                    <span className="font-bold">"One who gives food, gives all that is worth giving."</span>
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="font-semibold text-lg text-gray-900 mb-3">Support</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>919660071666</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>dmt@hkmjaipur.org</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Tax Benefits</span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">Assured</span>
                  <div className="flex gap-2">
                    {['paytm', 'upi', 'mastercard', 'visa'].map((logo) => (
                      <img key={logo} src={`/logos/${logo}.svg`} alt={logo} className="h-6" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Donation Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <a
        href="#"
        onClick={scrollToTop}
        id="backToTop"
        className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 invisible z-50 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  );
};

export default DonationPage;