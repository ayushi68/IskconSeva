import React from "react";

const caseStudies = [
  {
    title: "Gaudiya Sampradaya",
    description:
      "The divine spiritual lineage originating from Lord Krishna through Brahma, Narada, Vyasa, and Sri Chaitanya Mahaprabhu, preserving pure bhakti yoga.",
    images: [ "/PHILOSOPHY SECTION/Gaudiya Sampradaya Chronology/Guruparampara.png" ,"/PHILOSOPHY SECTION/Gaudiya Sampradaya Chronology/4 Sampraday.jpg"],
    tag: "Lineage",
    background: "bg-[#7B9EFF]",
    link: "./philosophy/Gaudiya",
  },
  {
    title: "Srila Prabhupada",
    description:
      "Founder-Acharya of ISKCON who brought Krishna consciousness to the West, translating over 80 volumes of Vedic scriptures.",
    images: ["/PHILOSOPHY SECTION/Srila Prabhupada/SP-FullAltar.jpg", "/PHILOSOPHY SECTION/Srila Prabhupada/images (1).jpg"],
    tag: "Founder",
    background: "bg-[#D4FCE5]",
    link: "./philosophy/Sprabhpada",
  },
  {
    title: "Nityananda Prabhu",
    description:
      "The incarnation of Lord Balarama who appeared with Chaitanya Mahaprabhu to spread the sankirtan movement of congregational chanting.",
    images: ["/PHILOSOPHY SECTION/Nityananda Prabhu/lord-caitanyas-sankirtan-party.jpg", "/PHILOSOPHY SECTION/Nityananda Prabhu/The Liberation of Jagai and Madhai.jpg"],
    tag: "Avatar",
    background: "bg-[#FFB2B2]",
    link: "./philosophy/nityanand",
  },
  {
    title: "Chaitanya Mahaprabhu",
    description:
      "The golden avatar of Krishna who appeared in Mayapur to teach love of God through sankirtan and the Hare Krishna maha-mantra.",
    images: ["/PHILOSOPHY SECTION/Chaitanya Mahaprabhu/The Sankirtana Of Lord Chaitanya And His Associates.bmp", "/PHILOSOPHY SECTION/Chaitanya Mahaprabhu/Krishna, Radha-Krishna, and Chaitanya.bmp"],
    tag: "Avatar",
    background: "bg-[#FFD966]",
    link: "./philosophy/Chaitanya",
  },
  {
    title: "Divine Couple",
    description:
      "Radha and Krishna, the original feminine and masculine aspects of Godhead, whose loving pastimes exemplify pure devotion.",
    images: ["/PHILOSOPHY SECTION/Divine Couple (Radhakrishna)/Radha And Krishna And The Eight Chief Gopis.bmp", "/PHILOSOPHY SECTION/Divine Couple (Radhakrishna)/Radha And Krishna On A Swing.bmp"],
    tag: "Deities",
    background: "bg-[#B19CD9]",
    link: "./philosophy/Divinecouple",
  },
  {
    title: "Bhagavad Gītā",
    description:
      "Krishna's timeless spiritual instructions to Arjuna, containing the essence of Vedic knowledge and paths of yoga.",
    images: ["/PHILOSOPHY SECTION/Bhagavad Gītā/Gita Sandesh  (15).jpg", "/PHILOSOPHY SECTION/Bhagavad Gītā/Bhagvad Gita1.png"],
    tag: "Scripture",
    background: "bg-[#FF9E7D]",
    link: "./philosophy/Bhagavadgita",
  },
  {
    title: "Practicing Bhakti Yoga",
    description:
      "The science of devotional service through nine primary methods including hearing, chanting, and remembering the Supreme.",
    images: ["/PHILOSOPHY SECTION/Practicing Bhakti Yoga/Practicing Bhakti Yoga 4.jpeg", "/PHILOSOPHY SECTION/Practicing Bhakti Yoga/Bhakti Yoga4.png"],
    tag: "Practice",
    background: "bg-[#A8E6CF]",
    link: "./philosophy/Bhaktiyoga",
  },
  {
    title: "Practice Krishna Consciousness",
    description:
      "Awakening our natural state through daily spiritual practices, following four regulative principles and chanting Hare Krishna.",
    images: ["/PHILOSOPHY SECTION/Practise Krishna Consciousness/practice_krishna_consciousness 3.jpg", "/PHILOSOPHY SECTION/Practise Krishna Consciousness/practice_krishna_consciousness 2.jpg"],
    tag: "Lifestyle",
    background: "bg-[#FFAAA5]",
    link: "./philosophy/Krishna",
  },
  {
    title: "Chanting Hare Krishna Maha-mantra",
    description:
      "The supreme vibration for Kali-yuga: Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare / Hare Rama, Hare Rama, Rama Rama, Hare Hare.",
    images: ["/PHILOSOPHY SECTION/Chanting Hare Krishna Maha-mantra/Chanting Hare Krsna 4.png", "/PHILOSOPHY SECTION/Chanting Hare Krishna Maha-mantra/Chanting Hare Krsna 2.png"],
    tag: "Mantra",
    background: "bg-[#DCE2C8]",
    link: "./philosophy/Mahamantra",
  },
];

export default function Srilaprabhupada() {
  const displayedStudies = caseStudies;

  return (
    <div className="min-h-screen bg-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">PHILOSOPHY</h2>
          <p className="text-lg text-gray-500 mx-auto max-w-2xl">
            At ISKCON, we follow the timeless wisdom of Bhagavad-gita and Srimad-Bhagavatam,
            teaching that each soul is eternal and inherently connected to the Supreme Lord, Krishna.
          </p>
        </div>

        <div className="space-y-40">
          {displayedStudies.map((study, index) => (
            <div key={index} className="relative h-auto lg:h-[450px]">
              <div
                className={`relative rounded-2xl p-10 md:p-14 ${study.background} h-full ${
                  index % 2 === 0 ? "mr-0 lg:mr-48" : "ml-0 lg:ml-48"
                }`}
              >
                <div
                  className={`relative z-10 h-full flex flex-col justify-center ${
                    index % 2 === 0 ? "lg:w-1/2" : "lg:w-1/2 lg:ml-auto"
                  }`}
                >
                  <span className="text-xs font-medium text-gray-700 mb-4">
                    {study.tag}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                    {study.title}
                  </h3>

                  <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  <a
                    href={study.link}
                    className="text-blue-900 hover:underline font-medium text-lg mt-2"
                  >
                    View More Details →
                  </a>
                </div>
              </div>

              {/* Desktop Image - Absolute Positioned */}
              <div
                className={`hidden lg:block absolute ${
                  index % 2 === 0
                    ? "right-0 lg:right-24 top-[25%]"
                    : "left-0 lg:left-24 top-[25%]"
                } -translate-y-[15%] z-20 w-[300px] lg:w-[400px]`}
              >
                <div className="relative">
                  <img
                    src={study.images[0]}
                    alt={study.title}
                    className="rounded-xl shadow-xl object-cover w-full h-[250px] absolute z-20 rotate-[-5deg]"
                  />
                  <img
                    src={study.images[1]}
                    alt={study.title}
                    className="rounded-xl shadow-xl object-cover w-full h-[250px] absolute top-3 left-3 z-10 rotate-[3deg]"
                  />
                </div>
              </div>

              {/* Mobile Image - Below Content */}
              <div className="lg:hidden mt-6 w-full flex justify-center">
                <div className="relative w-[90%] max-w-[350px] h-[200px]">
                  <img
                    src={study.images[0]}
                    alt={study.title}
                    className="rounded-xl shadow-xl object-cover w-full h-[200px] absolute z-20 rotate-[-5deg]"
                  />
                  <img
                    src={study.images[1]}
                    alt={study.title}
                    className="rounded-xl shadow-xl object-cover w-full h-[200px] absolute top-3 left-3 z-10 rotate-[3deg]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
