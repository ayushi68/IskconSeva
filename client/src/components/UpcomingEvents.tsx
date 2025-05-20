import React, { useState, useEffect } from "react";
import { events as allEvents } from "@/data/events";
import { format } from "date-fns";
import CountdownTimer from "@/components/CountdownTimer";
import { FestivalEvent } from "../data/events";
import EventModal from "@/components/Eventmodal";


const AnimatedHeading = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const words = ["Love", "Devotion"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mt-4">
      <div className="bg-[#eba55d] px-8 py-2 rounded-full shadow-md">
        <h4 className="text-2xl text-white font-medium italic h-8 overflow-hidden relative">
          <span className="inline-block w-[150px] text-center relative h-8">
            {words.map((word, index) => (
              <span
                key={word}
                className={`absolute left-0 right-0 transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                {word}
              </span>
            ))}
          </span>
        </h4>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<FestivalEvent | null>(null);

  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getMonth() === currentDate.getMonth() &&
      eventDate.getFullYear() === currentDate.getFullYear()
    );
  });

  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <section className="bg-[#f9f1dd] py-12 px-4">
      <div className="max-w-screen-xl mx-auto text-left">
        <div className="mb-10">
          <h2 className="text-4xl italic text-[#3C3629] font-dmserif text-center uppercase">
            Upcoming Events
          </h2>
          <h3 className="text-4xl italic text-[#3C3629] font-dmserif text-center uppercase mb-4">
            & Festivals
          </h3>
          <p className="text-xl text-[#3C3629] text-center uppercase tracking-wider">
            Celebrate with Devotion
          </p>
          <AnimatedHeading />
        </div>

        <div className="flex items-center mb-10 gap-4">
          <h2 className="text-4xl font-bold text-[#3C3629] font-dmserif text-center mx-4">
            {format(currentDate, "MMMM, yyyy")}
          </h2>
          <button
            onClick={goToPreviousMonth}
            className="text-2xl hover:text-[#b28e65] bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-300"
          >
            &lt;
          </button>
          <button
            onClick={goToNextMonth}
            className="text-2xl hover:text-[#b28e65] bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-300"
          >
            &gt;
          </button>
        </div>

        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3 mt-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => {
              const eventDate = new Date(event.date);
              const isPast = eventDate.getTime() < new Date().getTime();

              return (
                <div
                  key={index}
                  onClick={() => setSelectedEvent(event)}
                  className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group transform hover:scale-[1.02] min-h-[500px] flex flex-col justify-end"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-300"
                    style={{ backgroundImage: `url(${event.image})` }}
                  ></div>

                  <div className="relative z-10 bg-black bg-opacity-60 text-white p-6 h-full flex flex-col justify-between group-hover:backdrop-blur-sm transition-all duration-500">
                    <div className="transform transition-transform duration-500 group-hover:translate-x-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-sm font-bold">
                          <div>{event.day}</div>
                          <div className="text-lg">{event.month}</div>
                        </div>
                        <h3 className="text-2xl font-bold uppercase mt-1">
                          {event.title}
                        </h3>
                      </div>

                      <p className="text-sm mt-2">
                        <i className="fa fa-clock-o mr-2" />
                        {event.time}
                      </p>
                      <p className="text-sm mt-1">
                        <i className="fa fa-bowl-rice mr-2" />
                        {event.foodRestriction}
                      </p>
                      <p className="text-sm mt-1">
                        <i className="fa fa-cutlery mr-2" />
                        {event.breakfast}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-2 items-start">
                      <a
                        href={event.donateLink}
                        className="text-sm bg-[#b28e65] hover:bg-white hover:text-black px-5 py-2 rounded-full transition"
                      >
                        Donate
                      </a>
                      {isPast ? (
                        <span className="text-xs bg-red-600 px-3 py-1 rounded-full">
                          THIS EVENT HAS ENDED
                        </span>
                      ) : (
                        <div className="text-xs">
                          <span className="block text-white mb-1">
                            This event ends in..
                          </span>
                          <CountdownTimer eventDate={eventDate} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No events this month.
            </p>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="/all-events"
            className="inline-block bg-[#3C3629] text-white px-6 py-3 rounded-full hover:bg-[#b28e65] transition"
          >
            See All Events
          </a>
        </div>
      </div>

      {selectedEvent && (
  <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
)}

    </section>
  );
};

export default UpcomingEvents;
