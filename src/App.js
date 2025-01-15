import React, { useEffect, useState } from 'react';
import Time from './Components/Time';
import GoogleSearchBar from './Components/GoogleSearchBar';
import TodoApp from './Components/To-Do';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const getTimeOfDay = () => {
  const hours = new Date().getHours();

  if (hours >= 0 && hours < 3) {
    return 'late-night';
  } else if (hours >= 3 && hours < 6) {
    return 'early-morning';
  } else if (hours >= 6 && hours < 9) {
    return 'sunrise';
  } else if (hours >= 9 && hours < 12) {
    return 'morning';
  } else if (hours >= 12 && hours < 15) {
    return 'midday';
  } else if (hours >= 15 && hours < 18) {
    return 'afternoon';
  } else if (hours >= 18 && hours < 21) {
    return 'evening';
  } else if (hours >= 21 && hours < 24) {
    return 'night';
  }
};

function App() {
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getBackgroundClass = () => {
    switch (timeOfDay) {
      case 'late-night':
        return 'bg-gradient-to-r from-gray-900 via-black to-gray-700';
      case 'early-morning':
        return 'bg-gradient-to-r from-gray-800 via-purple-900 to-blue-900';
      case 'sunrise':
        return 'bg-gradient-to-r from-orange-300 via-pink-400 to-yellow-500';
      case 'morning':
        return 'bg-gradient-to-r from-blue-300 via-sky-400 to-indigo-500';
      case 'midday':
        return 'bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500';
      case 'afternoon':
        return 'bg-gradient-to-r from-orange-400 via-red-500 to-pink-500';
      case 'evening':
        return 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600';
      case 'night':
        return 'bg-gradient-to-r from-purple-800 via-indigo-900 to-gray-900';
      default:
        return 'bg-white';
    }
  };

  const getTextClass = () => {
    if (['late-night', 'early-morning', 'night'].includes(timeOfDay)) {
      return 'text-gray-100';
    }
    return 'text-gray-900';
  };

  const getInputClass = () => {
    switch (timeOfDay) {
      case 'late-night':
        return 'bg-gray-900 text-gray-200 placeholder-gray-400';
      case 'early-morning':
        return 'bg-purple-900 text-gray-200 placeholder-gray-500';
      case 'sunrise':
        return 'bg-orange-100 text-gray-900 placeholder-orange-400';
      case 'morning':
        return 'bg-white text-gray-900 placeholder-gray-400';
      case 'midday':
        return 'bg-yellow-200 text-gray-800 placeholder-yellow-500';
      case 'afternoon':
        return 'bg-orange-200 text-gray-900 placeholder-orange-500';
      case 'evening':
        return 'bg-purple-200 text-gray-800 placeholder-purple-400';
      case 'night':
        return 'bg-gray-800 text-white placeholder-gray-600';
      default:
        return 'bg-white text-gray-800 placeholder-gray-400';
    }
  };

  const getButtonClass = () => {
    switch (timeOfDay) {
      case 'late-night':
        return 'bg-gray-800 text-white hover:bg-gray-900';
      case 'early-morning':
        return 'bg-purple-700 text-white hover:bg-purple-800';
      case 'sunrise':
        return 'bg-orange-500 text-white hover:bg-orange-600';
      case 'morning':
        return 'bg-blue-500 text-white hover:bg-blue-600';
      case 'midday':
        return 'bg-yellow-500 text-white hover:bg-yellow-600';
      case 'afternoon':
        return 'bg-red-500 text-white hover:bg-red-600';
      case 'evening':
        return 'bg-pink-500 text-white hover:bg-pink-600';
      case 'night':
        return 'bg-indigo-500 text-white hover:bg-indigo-600';
      default:
        return 'bg-blue-500 text-white hover:bg-blue-600';
    }
  };

  return (
    <div className={`${getBackgroundClass()} min-h-screen transition-all duration-1500 ease-in-out`}>
        <Sidebar/>

    <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <Time
          textClass={getTextClass()}
        />
        <GoogleSearchBar
          textClass={getTextClass()}
          inputClass={getInputClass()}
          buttonClass={getButtonClass()}
        />
        <TodoApp 
                  buttonClass={getButtonClass()}
                  />
      </div>
    </div>
  );
}

export default App;
