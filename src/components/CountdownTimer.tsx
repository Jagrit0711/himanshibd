
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  nextBirthday: string;
}

const CountdownTimer = ({ nextBirthday }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(nextBirthday);
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    
    // Initial calculation
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [nextBirthday]);
  
  return (
    <div className="bg-gradient-to-br from-pink-400 to-pink-500 px-3 py-2 text-white rounded-full border-2 border-pink-300 shadow-[3px_3px_0px_0px_rgba(236,72,153,0.3)]">
      <div className="text-xs font-pixelify">
        Next birthday in:
      </div>
      <div className="font-pixelify font-bold">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
    </div>
  );
};

export default CountdownTimer;
