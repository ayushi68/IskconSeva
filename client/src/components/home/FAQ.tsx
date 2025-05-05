import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs: FAQ[] = [
    {
      question: "How are the donations utilized?",
      answer: "All donations are utilized for the specific seva that you choose. The temple management ensures that your contribution is used exactly for the purpose it was intended for, whether it's Annadana, Gaushala, or temple development."
    },
    {
      question: "Are donations tax-deductible?",
      answer: "Yes, all donations to ISKCON are eligible for tax exemption under Section 80G. You will receive a receipt that can be used for tax deduction purposes."
    },
    {
      question: "Can I make a recurring donation?",
      answer: "Yes, we offer options for recurring donations on a monthly, quarterly, or annual basis. This can be set up during the donation process or by contacting our donation office."
    },
    {
      question: "How do I get updates about my donation's impact?",
      answer: "We regularly send updates and reports to our donors through email. You can also visit the temple to see firsthand how your contributions are being utilized for various activities."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-poppins text-2xl text-center font-bold text-primary mb-10">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button 
                className="w-full py-4 px-6 text-left font-medium flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`text-secondary transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`px-6 pb-4 text-gray-600 ${openIndex === index ? 'block' : 'hidden'}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
