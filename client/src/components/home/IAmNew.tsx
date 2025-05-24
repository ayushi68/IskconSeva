import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Who am I?",
    answer: `Am I the body, mind or something more? These are the age old questions that every philosopher throughout the ages has tried to grasp and understand.

Srimad-Bhagavatam (7.2.22) explains that the spirit soul has no death and is eternal and inexhaustible. He is completely different from the material body, but because of being misled by misuse of his slight independence, he is obliged to accept subtle and gross bodies created by the material energy and thus be subjected to so-called material happiness and distress.

Also Mundaka Upanishad (3.1.9) explains that the living being is the soul, and that:
"The soul is atomic in size and can be perceived by perfect intelligence. This atomic soul is situated within the heart, and spreads its influence all over the body of the embodied living entities. When the soul is purified from the contamination of the five kinds of material air, its spiritual influence is exhibited."

The Katha Upanishad relates that within the body, higher than the senses and the sense objects, exists the mind. More subtle than the mind is the intelligence, and higher and more subtle than the intellect is the self. That self is hidden in all beings and does not shine forth, but is seen by subtle seers through their sharp intellect.`
  },
  {
    question: "What is the goal of life?",
    answer: "(Add the answer here)"
  }
];

export default function IAmNew() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-green-50 to-white border border-green-300 rounded-2xl shadow-lg mb-6 overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <button
            onClick={() => toggleAnswer(index)}
            className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold text-green-800 focus:outline-none"
          >
            {item.question}
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-green-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-green-600" />
            )}
          </button>
          <div
            className={`px-6 pb-5 text-gray-700 whitespace-pre-line text-justify transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
