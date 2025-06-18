import React, { useState, useEffect, useRef } from 'react';
import { events as allEvents } from '@/data/events';
import { format } from 'date-fns';
import CountdownTimer from '../components/CountdownTimer';
import { FestivalEvent } from '../data/events';
import EventModal from '../components/Eventmodal';

const AnimatedHeading: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const words = ['Love', 'Devotion'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mt-4">
      <div className="bg-blue-400 px-8 py-2 rounded-full shadow-md">
        <h4 className="text-2xl text-white font-medium italic h-8 overflow-hidden relative">
          <span className="inline-block w-[150px] text-center relative h-8">
            {words.map((word, index) => (
              <span
                key={word}
                className={`absolute left-0 right-0 transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
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

const UpcomingEvents: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<FestivalEvent | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter events for current or upcoming dates (on or after June 18, 2025, 01:03 PM IST)
  const today = new Date('2025-06-18T13:03:00+05:30'); // Updated to current date and time
  const upcomingEvents = allEvents
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getTime() >= today.getTime(); // Only include events on or after today
    })
    .filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort by date ascending

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' }); // Scroll by width of 1 card (400px)
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' }); // Scroll by width of 1 card (400px)
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto text-left">
        <div className="mb-10">
          <h2 className="text-4xl italic text-black font-dmserif text-center uppercase">
            Upcoming Events
          </h2>
          <h3 className="text-4xl italic text-black font-dmserif text-center uppercase mb-4">
            & Festivals
          </h3>
          <div className="text-xl text-black text-center uppercase tracking-wider flex justify-center items-center gap-2">
            <span>Celebrate with</span>
            <AnimatedHeading />
          </div>
        </div>

        <div className="flex items-center justify-center mb-10 gap-4">
          <button
            onClick={goToPreviousMonth}
            className="text-2xl text-white bg-blue-400 hover:bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-300"
            aria-label="Previous Month"
          >
            <i className="fa fa-chevron-left" />
          </button>
          <h2 className="text-4xl font-bold text-black font-dmserif text-center mx-4">
            {format(currentDate, 'MMMM, yyyy')}
          </h2>
          <button
            onClick={goToNextMonth}
            className="text-2xl text-white bg-blue-400 hover:bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-300"
            aria-label="Next Month"
          >
            <i className="fa fa-chevron-right" />
          </button>
        </div>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="text-2xl text-white bg-blue-400 hover:bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-300 mr-4"
            aria-label="Scroll Left"
          >
            <i className="fa fa-chevron-left" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-10 flex-1 scrollbar-none"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => {
                const eventDate = new Date(event.date);

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedEvent(event)}
                    className="snap-start flex-shrink-0 w-[400px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group transform hover:scale-[1.02] min-h-[500px] flex flex-col justify-end"
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
                          className="text-sm bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition"
                        >
                          Donate
                        </a>
                        <div className="text-xs">
                          <span className="block text-white mb-1">
                            This event ends in...
                          </span>
                          <CountdownTimer eventDate={eventDate} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-600 w-full py-8">
                No upcoming events this month.
              </p>
            )}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="text-2xl text-white bg-blue-400 hover:bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-300 ml-4"
            aria-label="Scroll Right"
          >
            <i className="fa fa-chevron-right" />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            href="/all-events"
            className="inline-block bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition"
          >
            See All Events
          </a>
        </div>
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      {/* Custom Scrollbar Hiding */}
      <style>
        {`
          .scrollbar-none {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .scrollbar-none::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}
      </style>
    </section>
  );
};

export default UpcomingEvents;