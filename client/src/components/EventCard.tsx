import { FestivalEvent } from "../data/events";
import CountdownTimer from "./CountdownTimer";
import { parseEventDate, isUpcomingEvent } from "../utils/dateUtils";

interface EventCardProps {
  event: FestivalEvent;
  layout?: "grid" | "list";
}

const EventCard = ({ event, layout = "grid" }: EventCardProps) => {
  const eventDate = parseEventDate(event.dateTime);
  const isUpcoming = isUpcomingEvent(event.dateTime);
  // Extract title for colored title display
  const titleParts = event.title.split(": ");
  const mainTitle = titleParts.length > 1 ? titleParts[0] : "";
  const subTitle = titleParts.length > 1 ? titleParts[1] : event.title;
  
  // Handle special case for Online Class
  const isOnlineClass = event.title.includes("Online Class");
  
  // List layout component (for Agenda view)
  if (layout === "list") {
    return (
      <div className="flex flex-col md:flex-row border-b pb-8 mb-8"> {/* Increased padding and margin */}
        <div className="md:w-1/4 mb-4 md:mb-0 md:pr-4"> {/* Adjusted width */}
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="md:w-3/4"> {/* Adjusted width */}
          {isOnlineClass ? (
            <h3 className="text-iskcon-orange text-xl font-semibold mb-2"> {/* Adjusted margin */}
              {mainTitle}: {subTitle}
            </h3>
          ) : (
            <h3 className="text-iskcon-orange text-xl font-semibold mb-2"> {/* Adjusted margin */}
              {event.title}
            </h3>
          )}
          <p className="text-gray-700 font-medium mb-2">{event.dateTime}</p> {/* Adjusted margin */}
          {isUpcoming && eventDate && (
            <div className="mb-4"> {/* Adjusted margin */}
              <CountdownTimer eventDate={eventDate} />
            </div>
          )}
          <p className="text-gray-700 mb-4">{event.description}</p> {/* Adjusted margin */}
          {event.tags && event.tags.length > 0 && (
            <div className="mt-4"> {/* Adjusted margin */}
              {event.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // Grid layout component (for Pinboard view)
 // Inside the grid layout condition
return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg text-white h-96 flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${event.image})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
  
      {/* Date & Title */}
      <div className="relative z-10 p-4">
        <div className="flex justify-between items-start mb-2">
          {/* Date block */}
          <div className="text-center leading-tight">
            <div className="text-3xl font-bold">
              {new Date(event.dateTime).getDate()}
            </div>
            <div className="text-sm uppercase">
              {new Date(event.dateTime).toLocaleString('default', { month: 'short' })}
            </div>
            <div className="text-xs">{new Date(event.dateTime).getFullYear()}</div>
          </div>
  
          {/* Tags */}
          <div className="space-y-1 text-right">
            {event.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
  
        {/* Title */}
        <div className="mt-2">
          {isOnlineClass ? (
            <>
              <h3 className="text-xl font-semibold">{mainTitle}:</h3>
              <h4 className="text-lg font-medium italic">{subTitle}</h4>
            </>
          ) : (
            <h3 className="text-xl font-semibold">{event.title}</h3>
          )}
          <p className="text-sm italic mt-1">{event.dateTime}</p>
        </div>
      </div>
  
      {/* Description + Countdown + Action */}
      <div className="relative z-10 p-4 text-sm">
        <p className="mb-2 line-clamp-3">{event.description}</p>
  
        {isUpcoming && eventDate && (
          <div className="mb-2">
            <CountdownTimer eventDate={eventDate} />
          </div>
        )}
  
        <button className="bg-[#c6a87d] text-white text-xs px-4 py-1 rounded hover:bg-[#b98b5a]">
          Donate
        </button>
      </div>
    </div>
  );
};

export default EventCard;
