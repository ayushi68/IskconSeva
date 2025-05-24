import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Tahmina Labonno",
    role: "Former MD – joomtech.com",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit neque earum sapiente vitae obcaecati magnam doloribus magni provident ab ipsam sint dolores repellat inventore sequi temporibus natus.",
    image: "/annadana.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "CEO – GreenTech",
    message:
      "This company changed the way we think about giving back. Their commitment to community service is truly inspiring.",
    image: "/annadana.jpg",
  },
  {
    name: "Aisha Khan",
    role: "Founder – CarePlus",
    message:
      "I’ve never seen such passionate individuals working towards such a noble cause. It's amazing to be part of it.",
    image: "/annadana.jpg",
  },
];

const AboutUs = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const total = testimonials.length;

  const triggerChange = (nextIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setIndex(nextIndex);
      setFade(true);
    }, 200); // delay before showing next testimonial
  };

  const handlePrev = () => {
    const newIndex = index === 0 ? total - 1 : index - 1;
    triggerChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = index === total - 1 ? 0 : index + 1;
    triggerChange(newIndex);
  };

  const { name, role, message, image } = testimonials[index];

  return (
    
    <div className="w-full text-gray-800 font-sans">
      {/* Hero Banner */}
      <section
        className="bg-cover bg-center py-32 text-white relative"
        style={{ backgroundImage: "url('/annadana.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">
            ABOUT OUR COMPANY
          </h1>
          <p className="text-sm">
            Home{" "}
            <a
              href="https://mironmahmud.com/"
              className="underline hover:text-yellow-400"
            >
              https://mironmahmud.com/
            </a>{" "}
            / About
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-6 md:px-16 bg-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            Our Motive Is To Provide Best For Those Who Deserve
          </h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis exercitationem commodi aliquam necessitatibus vero
            reiciendis quaerat illo est fuga ea temporibus natus doloremque ipsum voluptas quod deserunt expedita reprehenderit pariatur
            quidem quisquam, recusandae animi non!
          </p>
          <div className="grid grid-cols-3 text-center gap-4">
            {[
              { count: "34785", label: "Registered Users" },
              { count: "2623", label: "Per Day Visitors" },
              { count: "189", label: "Total Products" },
            ].map((stat, i) => (
              <div key={i} className="p-4 shadow-md rounded-lg bg-gray-50 hover:shadow-xl transition">
                <h3 className="text-3xl font-bold text-indigo-600">{stat.count}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2" data-aos="fade-left">
            {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="p-1">
                <img
                    src="/annadana.jpg"
                    alt={`Office ${i + 1}`}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-100 scale-95"
                />
                </div>
            ))}
            </div>
      </section>

      {/* Testimonial */}
       <section className="relative py-24 px-6 md:px-16 bg-gray-50 text-center overflow-hidden">
      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-gray-400 hover:text-indigo-600 z-10 transition duration-300"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-gray-400 hover:text-indigo-600 z-10 transition duration-300"
      >
        &gt;
      </button>

      {/* Testimonial with Fade Animation */}
      <div
        className={`max-w-3xl mx-auto transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={image}
          alt={name}
          className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 shadow-lg mb-6"
        />
        <p className="text-xl italic text-gray-700 mb-6">"{message}"</p>
        <h4 className="font-bold text-lg text-indigo-700">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-16">Why People Choose Their Daily Organic Life With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "100% Fresh Organic Food", icon: "Organic Food" },
            { title: "Delivery Within One Hour", icon: "Fast Delivery" },
            { title: "Quickly Return Policy", icon: "Return Policy" },
            { title: "Instant Support Team", icon: "Support" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start" data-aos="fade-up" data-aos-delay={i * 100}>
              <img src="/annadana.jpg" alt={item.icon} className="w-14 h-14 rounded shadow" />
              <div>
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident anim.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-16">Our Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { name: "Jhonson Hononr", role: "Founder & CEO" },
            { name: "Jhonson Hononr", role: "Web Developer" },
            { name: "Jhonson Hononr", role: "Graphics Designer" },
            { name: "Jhonson Hononr", role: "Digital Marketer" },
          ].map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow hover:shadow-xl transition">
              <img src="/annadana.jpg" alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold text-xl text-indigo-600">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
