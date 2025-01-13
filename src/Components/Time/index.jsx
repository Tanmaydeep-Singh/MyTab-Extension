import React, { useState, useEffect } from 'react';

function Time() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center time   ">
      <div className="time text-8xl font-bold ">
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        })}
      </div>
      <div className="time text-lg text-gray-500 mt-2">
        {dateState.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </div>
    </div>
  );
}

export default Time;