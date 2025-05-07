import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSevaCategories = () => {
    const element = document.getElementById("seva-categories");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 py-16 md:py-24">
      {/* Background Overlay Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
        style={{ backgroundImage: "url('/src/public/banner-_2267eccbf51f030.jpeg')" }}
        aria-hidden="true"
      />

      {/* Content Wrapper */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-serif text-white text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 drop-shadow-xl">
            Support Our Mission
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">
            Join hands with us to make a difference. Your contributions help us build temples, serve communities, and spread Krishna Consciousness worldwide.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={scrollToSevaCategories}
              className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center"
            >
              Explore Sevas <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => window.location.href = '/donate'}
              className="bg-white text-primary px-8 py-4 text-lg font-bold rounded-full shadow-lg transition duration-300 transform hover:scale-105 flex items-center"
            >
              Donate Now
            </Button>
          </div>

          {/* Text Matter Section */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mt-8">
            <div className="text-center">
                <p className="font-bold text-black text-xl mb-4 font-serif">
                  No amount is insignificant, everything helps!
                </p><br></br>
              <blockquote className="italic text-gray-600 mb-4 font-serif bg-yellow-100 p-4 rounded-lg shadow-md inline-block">
              yajṣa-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat<br />
              yajṣo dānaṁ tapaś caiva pāvanāni manīṣiṇām
              </blockquote>
              <p className="text-sm text-gray-600 mb-4 font-serif">
              - Bhagavad Gita 18.5
              </p>
            </div>
            <p className="mb-4 text-justify font-serif">
              Acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance purify even the great souls.
            </p>
            <p className="mb-4 text-justify font-serif">
              India, since centuries, is a country well known for its Vedic culture, its famous temples, the righteous human beings and above all the deep philosophy of Sanatana Dharma. By Krishna’s grace, even today’s society has a chance to become spiritually situated, while living in a material world and harmonize the broken link between human and God.
            </p>
            <p className="mb-4 text-justify font-serif">
              By the mercy of HDG Srila Prabhupada, the Founder Acharya of the World wide Hare Krishna Movement, today, in India and in many parts of the World, beautiful temples are being built which are bringing together people from various walks of life to Krishna Consciousness.
            </p>
            <div className="flex justify-center items-center mb-4">
              <img src="/src/public/annadana.jpg" alt="Annadana" className="w-1/2 h-auto rounded-lg shadow-md mr-4" />
              <img src="/src/public/gaushala.jpg" alt="Gaushala" className="w-1/2 h-auto rounded-lg shadow-md" />
            </div>
            <p className="mb-4 text-justify font-serif">
              Lord Sri Krishna says in Bhagavad Gīta 9.26: “If one offers me with love and devotion a leaf, a flower, a fruit or water, I will accept it.” The Supreme Lord, Sri Krishna, is not in need of anything from us; but when we offer Him something depending on our capacity, He blesses us with everything that we need to progress in achieving the ultimate goal of our life.
            </p>
            <p className="mb-4 text-justify font-serif">
              It was a prime duty in the good olden days, to build temples and conduct festivals and enlighten people in Knowledge about God and his activities. The Puranas also glorify the act of temple construction for Krishna in this way:
            </p>
            <ul className="list-disc list-inside mb-4 text-justify font-serif">
              <li>According to Vamana Purana: “Whoever constructs or helps to construct a Vishnu temple will protect eight generations of fathers, grandfathers, and forefathers from falling into hell.”</li>
              <li>Skanda Purana: “Just by starting the construction of a temple for Lord, sins committed in seven births will be wiped out and one will deliver his forefathers who are suffering in hellish planets.”</li>
              <li>Padma Purana: “Mortals who help to construct a temple of Lord Vishnu do not return to this world, they return to the abode of Lord Vishnu.”</li>
              <li>Srimad Bhagavatam 11.27.51: Lord Krishna tells Uddhava: “One who offers the Deity gifts of land, markets, cities and villages so that the regular daily worship and special festivals of the Deity may go on continually will achieve opulence equal to My own.”</li>
            </ul>
            <p className="mb-4 text-justify font-serif">
              With love and affection, one should try to give something to Krishna from one’s source of income. Then one’s life will be successful. Krishna is full in all opulences; He does not need anything from anyone. But if one is prepared to give something to Krishna, that is for one’s own benefit.
            </p>
            <p className="font-bold text-justify font-serif">For Donations, please contact: ………………………..</p>
          </div>
        </div>
      </div>
    </section>
  );
}
