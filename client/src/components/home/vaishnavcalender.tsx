import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const vaishnavEvents = [
  { date: "2025-03-25", title: "Gaura Purnima" },
  { date: "2025-04-04", title: "Papamocani Ekadasi" },
  { date: "2025-04-14", title: "Sri Rama Navami" },
  { date: "2025-05-02", title: "Mohini Ekadasi" },
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

export default VaishnavCalendar;
