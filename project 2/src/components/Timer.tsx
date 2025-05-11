import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialMinutes: number;
  initialSeconds: number;
}

export const Timer: React.FC<TimerProps> = ({ initialMinutes, initialSeconds }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    
    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);
  
  return (
    <div className="flex items-center justify-center gap-1 my-3">
      <div className="bg-[#c20000] text-white px-3 py-2 rounded-md font-mono text-xl font-bold">
        {minutes < 10 ? `0${minutes}` : minutes}
      </div>
      <span className="text-[#c20000] text-xl font-bold">:</span>
      <div className="bg-[#c20000] text-white px-3 py-2 rounded-md font-mono text-xl font-bold">
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <span className="ml-2 text-gray-600 animate-pulse">⏱️ Ne ratez pas cette opportunité!</span>
    </div>
  );
};