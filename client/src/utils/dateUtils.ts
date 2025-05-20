/**
 * Parse an event date string into a JavaScript Date object
 * Example formats:
 * "Thu May 29th - Sun Jun 1st (EDT)"
 * "Wed Jun 4th 6:30pm - 8:30pm (EDT)"
 */
export function parseEventDate(dateTimeString: string): Date | null {
    try {
      // Extract components from the date string
      const dateMatch = dateTimeString.match(/(\w{3}) (\w+) (\d{1,2})(?:th|st|nd|rd)? (?:(\d{1,2}):(\d{2})([ap]m))?/i);
      
      if (!dateMatch) return null;
      
      const [, dayOfWeek, monthName, dayStr, hourStr, minuteStr, ampm] = dateMatch;
      const day = parseInt(dayStr);
      
      // Convert month name to month number (0-indexed)
      let month = 0;
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      for (let i = 0; i < months.length; i++) {
        if (monthName.startsWith(months[i])) {
          month = i;
          break;
        }
      }
      
      const year = 2025; // Use a fixed year for demonstration
      
      // Parse time if available
      let hour = 0;
      let minute = 0;
      
      if (hourStr && minuteStr && ampm) {
        hour = parseInt(hourStr);
        
        // Convert from 12-hour to 24-hour format
        if (ampm.toLowerCase() === 'pm' && hour < 12) {
          hour += 12;
        } else if (ampm.toLowerCase() === 'am' && hour === 12) {
          hour = 0;
        }
        
        minute = parseInt(minuteStr);
      }
      
      return new Date(year, month, day, hour, minute);
    } catch (error) {
      console.error("Error parsing date:", error);
      return null;
    }
  }
  
  /**
   * Determines if the event is upcoming (in the future)
   */
  export function isUpcomingEvent(eventDateString: string): boolean {
    const eventDate = parseEventDate(eventDateString);
    if (!eventDate) return false;
    
    return eventDate.getTime() > new Date().getTime();
  }
  
  /**
   * Gets the current year to keep dates relevant
   */
  export function getCurrentYear(): number {
    return new Date().getFullYear();
  }