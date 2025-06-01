import { useState } from "react";
import { ChevronRight } from "lucide-react";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-8 flex flex-col md:flex-row gap-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8 md:hidden">Frequently Asked Questions</h1>
      <div className="w-full md:w-1/3 bg-gradient-to-br from-green-50 to-white border border-green-300 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-4 hidden md:block">Questions</h2>
        <ul className="space-y-3">
          {faqData.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleQuestionClick(index)}
                className={`w-full flex justify-between items-center p-3 text-left text-lg font-medium text-green-800 rounded-lg transition-all duration-200 hover:bg-green-100 focus:outline-none ${
                  selectedIndex === index ? "bg-green-200" : ""
                }`}
              >
                {item.question}
                <ChevronRight className="h-5 w-5 text-green-600" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-2/3 bg-gradient-to-br from-green-50 to-white border border-green-300 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-4 hidden md:block">Answer</h2>
        {selectedIndex !== null ? (
          <div className="text-gray-700 whitespace-pre-line text-justify">
            <h3 className="text-xl font-semibold text-green-800 mb-3">{faqData[selectedIndex].question}</h3>
            <p>{faqData[selectedIndex].answer}</p>
          </div>
        ) : (
          <p className="text-gray-600 italic">Select a question from the sidebar to view the answer.</p>
        )}
      </div>
    </div>
  );
}