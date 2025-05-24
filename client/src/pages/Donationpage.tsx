import { useEffect } from "react";
import FeaturedDonations from "@/components/FeaturedDonations";
import DonationForm from "@/components/donation/DonationForm";

const Donationpage = () => {
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
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-purple-600 pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/lotus.png')] bg-repeat"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight animate-fade-in">
                No Amount is Insignificant, Everything Helps!
              </h1>
              <p className="text-lg md:text-xl mb-4 opacity-90 italic font-serif leading-relaxed">
                yajṣa-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat<br />
                yajṣo dānaṁ tapaś caiva pāvanāni manīṣiṇām
              </p>
              <p className="text-right font-medium text-sm mt-2">- Bhagavad Gita 18.5</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                <a
                  href="#donate-section"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Spiritual offering ceremony"
                className="rounded-2xl shadow-2xl border-4 border-white/30 max-w-full h-auto transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
              Welcome to Divine Offerings
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8 rounded-full animate-expand"></div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Acts of sacrifice, charity, and penance are not to be given up; they must be performed. Indeed, sacrifice, charity, and penance purify even the great souls.
            </p>
            <div className="italic text-lg text-gray-700 py-8 px-8 bg-gray-50 rounded-lg border-l-4 border-indigo-600 shadow-md">
              <p className="mb-4">
                India, since centuries, is a country well known for its Vedic culture, its famous temples, the righteous human beings, and above all the deep philosophy of Sanatana Dharma.
              </p>
              <p>
                By Krishna’s grace, even today’s society has a chance to become spiritually situated while living in a material world and harmonize the broken link between human and God.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Box 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lord Sri Krishna says in Bhagavad Gita 9.26:</h3>
              <p className="text-gray-600 leading-relaxed">
                “If one offers me with love and devotion a leaf, a flower, a fruit, or water, I will accept it.” The Supreme Lord, Sri Krishna, is not in need of anything from us; but when we offer Him something depending on our capacity, He blesses us with everything that we need to progress in achieving the ultimate goal of our life.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                It was a prime duty in the good olden days to build temples, conduct festivals, and enlighten people in knowledge about God and His activities. The Puranas also glorify the act of temple construction for Krishna in this way:
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">According to Vamana Purana:</h3>
              <p className="text-gray-600 leading-relaxed">
                “Whoever constructs or helps to construct a Vishnu temple will protect eight generations of fathers, grandfathers, and forefathers from falling into hell.”
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                “By building a temple for Sri Madhava, one can attain the eternal spiritual world (Vaikuntha).”
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Skanda Purana:</h3>
              <p className="text-gray-600 leading-relaxed">
                “Just by starting the construction of a temple for Lord, sins committed in seven births will be wiped out, and one will deliver his forefathers who are suffering in hellish planets.”
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                “Who sponsors a temple of Lord Vishnu, gains ten million times the merits accrued by Yajna, Austerities, Charities, Pilgrimage, and study of Vedas.”
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Padma Purana:</h3>
              <p className="text-gray-600 leading-relaxed">
                “Mortals who help to construct a temple of Lord Vishnu do not return to this world; they return to the abode of Lord Vishnu.”
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Srimad Bhagavatam 11.27.51:</h3>
              <p className="text-gray-600 leading-relaxed">
                Lord Krishna tells Uddhava: One who offers the Deity gifts of land, markets, cities, and villages so that the regular daily worship and special festivals of the Deity may go on continually will achieve opulence equal to My own.
              </p>
            </div>

            {/* Box 6 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Srimad Bhagavatam 11.27.52-53:</h3>
              <p className="text-gray-600 leading-relaxed">
                “By installing the Deity of the Lord, one becomes king of the entire earth; by building a temple for the Lord, one becomes ruler of the three worlds; by worshiping and serving the deity, one goes to the planet of Lord Brahma; and by performing all three of these activities, one achieves a transcendental form like My own. But one who simply engages in devotional service with no consideration of fruitive results attains Me. Thus, whoever worships Me according to the process I have described will ultimately attain pure devotional service unto Me.”
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-3">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-gray-600 leading-relaxed mb-4">
                  With love and affection, one should try to give something to Krishna from one’s source of income. Then one’s life will be successful. Krishna is full in all opulences; He does not need anything from anyone. But if one is prepared to give something to Krishna, that is for one’s own benefit.
                </p>
                <p className="text-lg font-semibold text-indigo-600">
                  For Donations, please contact:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedDonations />

      {/* Donate Section */}
      <section id="donate-section" className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Column: Payment Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col">
              <div className="space-y-8">
                {/* UPI & QR Section */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">For UPI & QR</h3>
                  <div className="flex justify-center mb-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <img
                        src="/hkmqr.jpg"
                        alt="UPI QR Code"
                        className="w-48 h-48 mx-auto"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 inline-flex items-center">
                    <span className="font-medium text-gray-700">goseva.augp@aubank</span>
                    <button
                      onClick={() => navigator.clipboard.writeText("goseva.augp@aubank")}
                      className="ml-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bank Transfer Section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">For Bank Transfer</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    {[
                      { label: "Account Name", value: "Hare Krishna Movement Jaipur" },
                      { label: "Account Number", value: "677501700696" },
                      { label: "Bank Name", value: "ICICI Bank" },
                      { label: "IFSC Code", value: "ICIC0007299" },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <span className="font-medium text-gray-700">{item.label}:</span>{" "}
                          <span className="text-gray-600">{item.value}</span>
                        </div>
                        <button
                          onClick={() => navigator.clipboard.writeText(item.value)}
                          className="text-indigo-600 hover:text-indigo-800 transition-colors"
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

                {/* Note */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Note:</span> Kindly send us a screenshot for your seva entry.
                  </p>
                </div>

                {/* Tax Exemption Info */}
                <div className="text-sm text-gray-600 space-y-2">
                  <p>*80G available as per Income Tax Act 1961 and rules made there under.</p>
                  <p>Tax Exemption Certificate Ref. No.: <span className="font-medium">AAATH7322QF20218</span></p>
                  <p>
                    *By proceeding, you are agreeing to our{" "}
                    <a href="#" className="text-indigo-600 hover:underline">Terms & Conditions</a> &{" "}
                    <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
                  </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {[
                    { value: "23,30,367", label: "No of meals served so far" },
                    { value: "6,00,000", subtext: "per month", label: "Amount required" },
                    { value: "1200", label: "Number of people served in a day on weekdays" },
                    { value: "2500", label: "Number of people served in a day on weekends" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-xl p-4 shadow-md transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="text-2xl font-bold">
                        {stat.value}{" "}
                        {stat.subtext && <span className="text-base font-medium">{stat.subtext}</span>}
                      </div>
                      <div className="text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote Section */}
                <div className="mt-8 rounded-xl overflow-hidden">
                  <div className="relative w-full h-64 md:h-80">
                    <img
                      src="/path-to-your-image/varaha-quote.png"
                      alt="Lord Varaha giving food quote"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-white text-center">
                      <p className="text-xl md:text-2xl font-medium leading-relaxed">
                        Lord Varaha says in the Varaha Purana, <br />
                        <span className="font-bold text-white">
                          "One who gives food, gives all that is worth giving in this world."
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Support and Footer */}
                <div className="pt-6 mt-8 border-t border-gray-200">
                  <p className="mb-3 font-semibold text-lg text-gray-800">Support</p>
                  <div className="space-y-2 mb-6">
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

                  {/* Badges and Payment Logos */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                      Tax Benefits
                    </span>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                      Assured
                    </span>
                    <div className="flex items-center gap-2 ml-2">
                      {['paytm', 'upi', 'mastercard', 'visa'].map((logo) => (
                        <img key={logo} src={`/logos/${logo}.svg`} alt={logo} className="h-6" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Donation Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
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
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 invisible z-50 transform hover:scale-110"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </a>
    </>
  );
};

export default Donationpage;