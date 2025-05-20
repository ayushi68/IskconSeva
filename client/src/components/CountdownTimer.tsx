import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  eventDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ eventDate, className = '' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Calculate on mount
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval
    return () => clearInterval(timer);
  }, [eventDate]);

  if (isExpired) {
    return (
      <div className={`text-xs font-medium text-red-600 ${className}`}>
        Event has started/ended
      </div>
    );
  }

  return (
    <div className={`text-xs font-medium text-iskcon-orange ${className}`}>
      {timeLeft.days > 0 && (
        <span className="mr-1">{timeLeft.days}d</span>
      )}
      <span className="mr-1">{String(timeLeft.hours).padStart(2, '0')}h</span>
      <span className="mr-1">{String(timeLeft.minutes).padStart(2, '0')}m</span>
      <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
      <span className="ml-1">remaining</span>
    </div>
  );
};

export default CountdownTimer;