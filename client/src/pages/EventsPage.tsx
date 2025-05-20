import React from 'react';
import EventsCalendar from '../components/EventsCalendar';


const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <EventsCalendar />
      </main>
      
    </div>
  );
};

export default Events;