// Clock.tsx
import React, { useEffect, useState } from 'react';

// Define a TypeScript interface for the props if needed
interface ClockProps {
  // Optional props can be added here
}

const Clock: React.FC<ClockProps> = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  // Function to format and update the time
  const updateTime = () => {
    const now = new Date();
    
    // Format the date to "26 Sep 2024"
    const formattedDate = now.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    // Format the time to "hh:mm:ss AM/PM"
    const formattedTime = now.toLocaleTimeString(); 

    // Update the currentTime state with the formatted date and time
    setCurrentTime(`${formattedDate} ${formattedTime}`);
  };

  useEffect(() => {
    // Update time immediately
    updateTime();

    // Set interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='text-sm mt-2 text-gray-400 font-semibold'>
      {currentTime}
    </div>
  );
};

export default Clock;