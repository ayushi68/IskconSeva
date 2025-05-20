import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const vaishnavEvents = [
  { date: "2025-03-25", title: "Gaura Purnima" },
  { date: "2025-04-04", title: "Papamocani Ekadasi" },
  { date: "2025-04-14", title: "Sri Rama Navami" },
  { date: "2025-05-02", title: "Mohini Ekadasi" },
  { date: "2025-05-11", title: "Narasimha Chaturdashi" }, // Added Narasimha Chaturdashi
  { date: "2025-07-18", title: "Guru Purnima" },
  { date: "2025-08-17", title: "Jhulan Yatra Begins" },
  { date: "2025-08-19", title: "Balarama Jayanti" },
  { date: "2025-08-27", title: "Sri Krishna Janmashtami" },
  { date: "2025-08-28", title: "Nandotsava" },
  { date: "2025-09-04", title: "Radhastami" },
  { date: "2025-11-05", title: "Govardhan Puja" },
  { date: "2025-12-21", title: "Gita Jayanti" }
];

const VaishnavCalendar = () => {
  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">Vaishnav Calendar 2025</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vaishnavEvents.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-green-50 border border-green-200 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <CalendarDays className="mx-auto text-green-600 mb-2" size={36} />
                <h2 className="text-xl font-semibold text-green-900">{event.title}</h2>
                <p className="text-md text-green-700 mt-1">{new Date(event.date).toDateString()}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const events = [
    {
      title: "Nrsimha Caturdasi",
      subtitle: "The Festival of the Divine Protector",
      date: "May 11, 2025",
      time: "4:30 am - 9:30 am",
      description:
        "This festival is one of remembrance of the Lord as the protector of His devotees and the remover of all obstacles and difficulties on the path of devotion to the Lord. Lord Nrsimhadeva, an incarnation of Lord Krishna, is known for His appearance in the world in order to save His devotee, a young child Prahlada. Devotees fast till dusk on this day, followed by a feast in His honour.",
      schedule: [
        "07.00 am Deity Greetings",
        "07.05 am Guru Puja",
        "07.45 am Class by HH Indradyumna Swami",
        "09.00 am Initiations (only for initiates + 1)",
        "12.30 pm Raj Bhoga Arati",
        "01.00 pm Maha Harinam",
        "03.00 pm Class",
        "04.15 pm Dhoopa Arati",
        "04.40 pm Drama",
        "05.20 pm Kirtan",
        "07.00 pm Sandhya Arati & Kirtan continues",
        "07.05 pm Prasadam Feast (takeaway)",
        "09.00 pm Sayana Arti & Kirtan continues",
      ],
    },
  ];

  return (
    <section className="p-6 md:p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-800">
        Upcoming Events & Festivals
      </h2>
      <h4 className="text-xl text-center mb-4 text-green-600">Celebrate With Love & Devotion</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-green-50 border border-green-200 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <CalendarDays className="mx-auto text-green-600 mb-2" size={36} />
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-md text-green-700 mb-2">{event.subtitle}</p>
                <p className="text-sm text-green-600 mb-2">{event.date}</p>
                <p className="text-sm text-green-600 mb-4">{event.time}</p>
                <p className="text-sm text-green-700 mb-4">{event.description}</p>
                <ul className="text-sm text-green-700 list-disc list-inside">
                  {event.schedule.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { VaishnavCalendar, UpcomingEvents };
