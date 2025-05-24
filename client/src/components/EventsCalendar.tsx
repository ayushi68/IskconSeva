import React, { useState } from "react";
import EventCard from "@/components/EventCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { events } from "@/data/events";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  parseISO,
} from "date-fns";
import { CalendarDays } from "lucide-react";

// Events Header
const EventsHeader = () => (
  <header className="bg-blue-700 py-10 md:py-14">
    <div className="container mx-auto px-8 md:px-12 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
        Events Calendar
      </h1>
    </div>
  </header>
);

const EventsCalendar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeView, setActiveView] = useState("Agenda");

  const currentMonth = format(currentDate, "MMMM yyyy");

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setCurrentDate(date);
    }
  };

  const goToPreviousMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const generateCalendarDays = (): Date[] => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days: Date[] = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  const matchesSearch = (event: any) => {
    const term = searchTerm.toLowerCase();
    return (
      event.title.toLowerCase().includes(term) ||
      event.description.toLowerCase().includes(term) ||
      event.date.toLowerCase().includes(term) ||
      event.day.toLowerCase().includes(term) ||
      event.month.toLowerCase().includes(term) ||
      event.time.toLowerCase().includes(term) ||
      event.foodRestriction.toLowerCase().includes(term)
    );
  };

  const filteredEvents = events.filter((event) => {
    const eventDate = parseISO(event.date);
    return (
      isSameMonth(eventDate, currentDate) &&
      (searchTerm.trim() === "" || matchesSearch(event))
    );
  });

  return (
    <>
      <EventsHeader />

      <div className="container mx-auto px-8 md:px-12 py-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-t border-b border-gray-200 py-4">
          {/* Search */}
          <div className="flex items-center flex-wrap gap-3 w-full md:w-auto mb-4 md:mb-0">
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search by name, date, time..."
                className="border border-gray-300 rounded px-4 py-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute right-3 top-2.5 text-gray-400">
                <i className="fas fa-search" />
              </span>
            </div>
            {/* Month Navigator */}
            <button onClick={goToPreviousMonth} className="text-gray-600 px-3 text-xl">
              &lt;
            </button>
            <div className="text-gray-800 font-medium">
              {currentDate ? format(currentDate, "dd/MM/yyyy") : "Select date"}
            </div>
            <button onClick={goToNextMonth} className="text-gray-600 px-3 text-xl">
              &gt;
            </button>

            <DatePicker
              selected={currentDate}
              onChange={handleDateChange}
              customInput={
                <CalendarDays className="w-5 h-5 text-blue-600 cursor-pointer" />
              }
            />
          </div>

          {/* View Selector */}
          <div className="flex gap-2 w-full md:w-auto justify-center md:justify-end flex-wrap">
            {["Agenda", "Pinboard", "Monthly", "Subscribe"].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-4 py-2 text-sm font-medium border rounded ${
                  activeView === view
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* Views */}
        {activeView === "Monthly" && (
          <div className="mb-8">
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="py-2 text-center font-semibold text-gray-600"
                >
                  {day}
                </div>
              ))}

              {generateCalendarDays().map((day, i) => (
                <div
                  key={i}
                  className={`h-24 p-1 border text-sm ${
                    !isSameMonth(day, currentDate)
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white"
                  }`}
                >
                  <div className="text-right p-1">{format(day, "d")}</div>
                  <div className="mt-1 space-y-1">
                    {filteredEvents
                      .filter((event) => isSameDay(parseISO(event.date), day))
                      .map((event) => (
                        <div
                          key={event.id}
                          className="text-xs p-1 truncate bg-orange-200 text-orange-800 rounded"
                        >
                          {event.title}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === "Pinboard" && (
          <>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} layout="grid" />
              ))}
            </div>
          </>
        )}

        {activeView === "Agenda" && (
          <>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Events for {currentMonth}
            </h2>
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} layout="list" />
              ))}
            </div>
          </>
        )}

        {activeView === "Subscribe" && (
          <div className="text-center py-12 text-gray-600">
            <h2 className="text-xl font-semibold mb-4">Subscribe to Event Updates</h2>
            <p className="mb-4">Coming soon: Stay informed about upcoming ISKCON events.</p>
            <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
              Notify Me
            </button>
          </div>
        )}

        {(activeView === "Agenda" || activeView === "Pinboard") && filteredEvents.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button className="px-8 py-2 bg-white text-gray-700 border rounded hover:bg-gray-50 transition-all">
              Load More Events
            </button>
          </div>
        )}

        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-400 mt-10">No events found for this month.</p>
        )}

        <div className="mt-16 text-center text-gray-400 text-xs">
          <p>calendar by Tockify</p>
        </div>
      </div>
    </>
  );
};

export default EventsCalendar;
