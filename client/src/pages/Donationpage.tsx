import { useEffect } from "react";
import FeaturedDonations from "@/components/FeaturedDonations";
import DonationForm from "@/components/donation/DonationForm";
import { Donation } from "@shared/schema";

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

      // Animate elements on scroll
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
    
    // Initial check for elements in view
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
      behavior: "smooth"
    });
  };

  return (
    <>
      <section className="hero-gradient lotus-pattern pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">No amount is insignificant, everything helps!</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">yajṣa-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat<br />yajṣo dānaṁ tapaś caiva pāvanāni manīṣiṇām</p>
            <p className="text-right font-medium mt-2">- Bhagavad Gita 18.5</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#donate-section" className="btn-primary px-8 py-3 rounded-full text-center text-black font-medium">
                Donate Now
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            {/* A serene image showcasing a spiritual offering ceremony with candles and flowers */}
            <img 
              src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Spiritual offering ceremony" 
              className="rounded-2xl shadow-2xl border-4 border-white/30 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
      {/* <Introduction /> */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Welcome to Divine Offerings</h2>
      <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
      <p className="text-neutral-dark mb-6 text-lg">Acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance purify even the great souls.</p>
      <div className="quote-box italic text-lg text-neutral-dark py-8 px-8 bg-[#f8f5f2] rounded-lg border-l-4 border-secondary">
        <p className="mb-4">India, since centuries, is a country well known for its Vedic culture, its famous temples, the righteous human beings and above all the deep philosophy of Sanatana Dharma.</p>
        <p>By Krishna’s grace, even today’s society has a chance to become spiritually situated, while living in a material world and harmonize the broken link between human and God.</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {/* Box 1 */}
      <div className="bg-[#f8f5f2] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
        <h3 className="font-heading text-xl font-bold mb-4">Lord Sri Krishna says in Bhagavad Gīta 9.26:</h3>
        <p className="text-gray-600 leading-relaxed">“If one offers me with love and devotion a leaf, a flower, a fruit or water, I will accept it.” The Supreme Lord, Sri Krishna, is not in need of anything from us; but when we offer Him something depending on our capacity, He blesses us with everything that we need to progress in achieving the ultimate goal of our life.</p>
        <p className="text-gray-600 mt-4 leading-relaxed">It was a prime duty in the good olden days, to build temples and conduct festivals and enlighten people in Knowledge about God and his activities. The Puranas also glorify the act of temple construction for Krishna in this way:</p>
      </div>

      {/* Box 2 */}
      <div className="bg-[#f8f5f2] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
        <h3 className="font-heading text-xl font-bold mb-4">According to Vamana Purana:</h3>
        <p className="text-gray-600 leading-relaxed">“Whoever constructs or helps to construct a Vishnu temple will protect eight generations of fathers, grandfathers, and forefathers from falling into hell.”</p>
        <p className="text-gray-600 mt-4 leading-relaxed">“By building a temple for Sri Madhava, one can attain the eternal spiritual world (Vaikuntha).”</p>
      </div>

      {/* Box 3 */}
      <div className="bg-[#f8f5f2] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
        <h3 className="font-heading text-xl font-bold mb-4">Skanda Purana:</h3>
        <p className="text-gray-600 leading-relaxed">“Just by starting the construction of a temple for Lord, sins committed in seven births will be wiped out and one will deliver his forefathers who are suffering in hellish planets”</p>
        <p className="text-gray-600 mt-4 leading-relaxed">“Who sponsors a temple of Lord Vishnu, gains ten million times the merits accrued by Yajna, Austerities, Charities, Pilgrimage and study of Vedas.”</p>
      </div>

      {/* Box 4 */}
      <div className="bg-[#f8f5f2] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
        <h3 className="font-heading text-xl font-bold mb-4">Padma Purana:</h3>
        <p className="text-gray-600 leading-relaxed">“Mortals who help to construct a temple of Lord Vishnu do not return to this world, they return to the abode of Lord Vishnu”.</p>
      </div>

      {/* Box 5 */}
      <div className="bg-[#f8f5f2] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
        <h3 className="font-heading text-xl font-bold mb-4">Srimad Bhagavatam 11.27.51:</h3>
        <p className="text-gray-600 leading-relaxed">Lord Krishna tells Uddhava: One who offers the Deity gifts of land, markets, cities and villages so that the regular daily worship and special festivals of the Deity may go on continually will achieve opulence equal to My own.</p>
      </div>

      {/* Box 6 */}
      <div className="bg-[#f8f5f2] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
        <h3 className="font-heading text-xl font-bold mb-4">Srimad Bhagavatam 11.27.52-53:</h3>
        <p className="text-gray-600 leading-relaxed">“By installing the Deity of the Lord, one becomes king of the entire earth, by building a temple for the Lord, one becomes ruler of the three worlds, by worshiping and serving the deity, one goes to the planet of Lord Brahma, and by performing all three of these activities one achieves a transcendental form like My own. But one who simply engages in devotional service with no consideration of fruitive results attains Me. Thus whoever worships Me according to the process I have described will ultimately attain pure devotional service unto Me.”</p>
      </div>

      {/* Contact Box */}
      <div className="bg-[#f8f5f2] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full md:col-span-2 lg:col-span-3">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">With love and affection, one should try to give something to Krishna from one’s source of income. Then one’s life will be successful. Krishna is full in all opulences; He does not need anything from anyone. But if one is prepared to give something to Krishna, that is for one’s own benefit.</p>
          <p className="text-lg font-semibold text-primary">For Donations, please contact:</p>
          {/* Add contact information here */}
        </div>
      </div>
    </div>
  </div>
</section>

      <FeaturedDonations />
      {/* {/* <DonationCategories />
      <CurrentProject /> */}
      <section id="donate-section" className="py-16 bg-[#fff9f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Text + Image */}
            <div className=" h-full w-full rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-md  font-sans">
              <div>
                {/* UPI & QR Section */}
                <h3 className="text-xl font-semibold mb-3">For UPI & QR</h3>
                <div className="flex justify-center mb-3">
                  <img
                    src="/path/to/qr-code.png" // Replace with your QR code path
                    alt="UPI QR Code"
                    className="w-48 h-48 rounded-md shadow"
                  />
                </div>
                <div className="text-center text-base font-medium">
                  <span>goseva.augp@aubank</span>
                  <button
                    onClick={() => navigator.clipboard.writeText("goseva.augp@aubank")}
                    className="ml-2 text-sm text-blue-700 underline"
                  >
                    Copy
                  </button>
                </div>

                {/* Bank Transfer Section */}
                <h3 className="text-xl font-semibold mt-8 mb-3">For Bank Transfer</h3>
                <div className="text-base space-y-2">
                  <div>
                    <strong>Account Name:</strong> Hare Krishna Movement Jaipur
                    <button
                      onClick={() => navigator.clipboard.writeText("Hare Krishna Movement Jaipur")}
                      className="ml-2 text-sm text-blue-700 underline"
                    >
                      Copy
                    </button>
                  </div>
                  <div>
                    <strong>Account Number:</strong> 677501700696
                    <button
                      onClick={() => navigator.clipboard.writeText("677501700696")}
                      className="ml-2 text-sm text-blue-700 underline"
                    >
                      Copy
                    </button>
                  </div>
                  <div>
                    <strong>Bank Name:</strong> ICICI Bank
                    <button
                      onClick={() => navigator.clipboard.writeText("ICICI Bank")}
                      className="ml-2 text-sm text-blue-700 underline"
                    >
                      Copy
                    </button>
                  </div>
                  <div>
                    <strong>IFSC Code:</strong> ICIC0007299
                    <button
                      onClick={() => navigator.clipboard.writeText("ICIC0007299")}
                      className="ml-2 text-sm text-blue-700 underline"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                {/* Note */}
                <p className="text-sm mt-3 text-gray-700 italic">
                  (Kindly send us a screenshot for your seva entry)
                </p>

                {/* Tax Exemption Info */}
                <div className="text-sm mt-5 space-y-1 text-gray-700">
                  <p>*80G available as per Income Tax Act 1961 and rules made there under.</p>
                  <p>Tax Exemption Certificate Ref. No.: <strong>AAATH7322QF20218</strong></p>
                  <p>
                    *By proceeding, you are agreeing to our{" "}
                    <span className="text-blue-700 underline">Terms & Conditions</span> &{" "}
                    <span className="text-blue-700 underline">Privacy Policy</span>
                  </p>
                </div>
              </div>

              {/* Stats Section */}
                <div className="flex flex-wrap justify-center gap-6 mt-10 mb-12">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl p-6 text-center shadow-md w-[300px] h-[180px] flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold mb-2">23,30,367</div>
                    <div className="text-lg text-center">No of meals served so far</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl p-6 text-center shadow-md w-[300px] h-[180px] flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold mb-2">
                      6,00,000 <span className="text-base font-medium">per month</span>
                    </div>
                    <div className="text-lg text-center">Amount required</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl p-6 text-center shadow-md w-[300px] h-[180px] flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold mb-2">1200</div>
                    <div className="text-lg text-center">Number of people served in a day on weekdays</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl p-6 text-center shadow-md w-[300px] h-[180px] flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold mb-2">2500</div>
                    <div className="text-lg text-center">Number of people served in a day on weekends</div>
                  </div>
                </div>

              <div className="w-full rounded-[40px] overflow-hidden mt-12">
                <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]">
                  <img
                    src="/path-to-your-image/varaha-quote.png" // Replace with your image path
                    alt="Lord Varaha giving food quote"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 md:px-16 text-white text-center">
                    <p className="text-lg md:text-2xl lg:text-3xl font-semibold leading-relaxed max-w-3xl">
                      Lord Varaha says in the Varaha Purana, <br />
                      <span className="font-bold">
                        “One who gives food, gives all that is worth giving in this world.”
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Support and Footer */}
              <div className="pt-6 mt-8 border-t border-[#c9d6a1] text-base">
                <p className="mb-2 font-semibold text-lg">Support</p>
                <div className="flex items-center gap-2 mb-1 text-gray-800">
                  <span>📱</span>
                  <span>919660071666</span>
                </div>
                <div className="flex items-center gap-2 mb-5 text-gray-800">
                  <span>📧</span>
                  <span>dmt@hkmjaipur.org</span>
                </div>

                {/* Buttons and Logos */}
                <div className="flex flex-wrap items-center gap-3">
                  <button className="bg-[#4caf50] text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
                    Tax Benefits
                  </button>
                  <button className="bg-[#f44336] text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
                    Assured
                  </button>
                  <img src="/logos/paytm.svg" alt="Paytm" className="h-6" />
                  <img src="/logos/upi.svg" alt="UPI" className="h-6" />
                  <img src="/logos/mastercard.svg" alt="Mastercard" className="h-6" />
                  <img src="/logos/visa.svg" alt="Visa" className="h-6" />
                </div>
              </div>
            </div>
            {/* Right Column: Donation Form */}
            <div>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      {/* <Testimonials />
      <AboutSection />
      <Newsletter />  */}
      
      
      {/* Back to top button */}
      <a 
        href="#" 
        onClick={scrollToTop}
        id="backToTop"
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 invisible z-50"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </a>
    </>
  );
};

export default Donationpage;
