import React from 'react';
import { FestivalEvent } from '../data/events';
import CountdownTimer from './CountdownTimer'; // adjust the path if needed

interface EventModalProps {
  event: FestivalEvent;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 relative max-h-[90vh] flex flex-col overflow-hidden">

        {/* Updated Fixed Header */}
        <div className="bg-[#2f1b40] text-white px-6 py-6 sticky top-0 z-10 flex items-center justify-between gap-4 text-sm md:text-base">
          
          {/* Column 1: Date + Day */}
          <div className="flex-[10%] text-center">
            <p className="font-semibold uppercase">{event.day}</p>
            <p className="text-xs md:text-sm">{event.dateDisplay}</p> {/* Format: e.g., 15 May 2025 */}
          </div>

          {/* Column 2: Event Info */}
          <div className="flex-[45%] space-y-1">
            <h1 className="text-lg md:text-xl font-bold uppercase">{event.title}</h1>
            <p className="text-sm text-gray-300">⏰ Time: <strong>{event.time}</strong></p>
            <p className="text-sm text-gray-300">🚫 Prohibited From: <strong>{event.prohibited}</strong></p>
            <p className="text-sm text-gray-300">🍽️ Breakfast: <strong>{event.breakfastTime} - {event.breakfast}</strong></p>
          </div>

          {/* Column 3: Donate + Countdown */}
          <div className="flex-[45%] flex flex-col items-end gap-2 md:gap-3">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-md font-medium">
              Donate
            </button>
            <div className="text-right">
              <p className="text-xs text-gray-300">Coming up in</p>
              <CountdownTimer eventDate={new Date(event.date)} className="font-bold text-sm text-white" />
            </div>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-400"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-4 py-4 space-y-4">
          
          {/* Banner Image */}
          <img src={event.image} alt={event.title} className="w-full rounded-md" />

          {/* Event Details */}
          <section className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold"><i className="fas fa-bars" />  Event Details</h2><br />
            <p className="text-sm text-gray-700">{event.description}</p>
          </section>

          {/* Time */}
          <section className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold"> <i className="fas fa-clock" />  Time</h2><br />
            <p className="text-sm text-gray-700">{event.date}</p>
          </section>

          {/* Calendar Links */}
          <section className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold"><i className="fas fa-calendar-alt" /> Calendar</h2><br />
            <div className="space-x-4">
              <a href={event.calendarLink} className="text-blue-600 underline">Calendar</a>
              <a href={event.googleCalLink} className="text-blue-600 underline">GoogleCal</a>
            </div>
          </section>

          {/* Sponsorship */}
          <section className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold"> <i className="fas fa-hand-holding-usd" />Sponsorship Opportunities</h2><br />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Donate</button>
          </section>

          {/* Breakfast */}
          <section className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold"><i className="fas fa-utensils" /> Breakfast</h2><br />
            <p className="text-sm text-gray-700">{event.breakfast}</p>
          </section>

          {/* Prohibited */}
          <section className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold"><i className="fas fa-bowl-rice" /> Prohibited From</h2><br />
            <p className="text-sm text-gray-700">{event.prohibited}</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default EventModal;
