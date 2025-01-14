import React, { useEffect, useState } from 'react';
import Time from './Components/Time';
import GoogleSearchBar from './Components/GoogleSearchBar';
import TodoApp from './Components/To-Do';

const getTimeOfDay = () => {
  const hours = new Date().getHours();

  if (hours >= 0 && hours < 5) {
    return 'midnight';
  } else if (hours >= 5 && hours < 7) {
    return 'dawn';
  } else if (hours >= 7 && hours < 12) {
    return 'morning';
  } else if (hours >= 12 && hours < 17) {
    return 'afternoon';
  } else if (hours >= 17 && hours < 19) {
    return 'evening';
  } else if (hours >= 19 && hours < 24) {
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
      case 'midnight':
        return 'bg-gradient-to-r from-gray-900 via-black to-gray-800';
      case 'dawn':
        return 'bg-gradient-to-r from-purple-200 via-pink-200 to-blue-300';
      case 'morning':
        return 'bg-gradient-to-r from-blue-300 via-sky-400 to-indigo-500';
      case 'afternoon':
        return 'bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500';
      case 'evening':
        return 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600';
      case 'night':
        return 'bg-gradient-to-r from-purple-800 via-indigo-900 to-gray-900';
      default:
        return 'bg-white';
    }
  };

  const getTextClass = () => {
    if (timeOfDay === 'night' || timeOfDay === 'midnight') {
      return 'text-gray-100';
    }
    return 'text-gray-900';
  };

  const getInputClass = () => {
    switch (timeOfDay) {
      case 'midnight':
        return 'bg-black text-gray-200 placeholder-gray-400';
      case 'dawn':
        return 'bg-purple-100 text-gray-800 placeholder-gray-500';
      case 'morning':
        return 'bg-white text-black placeholder-gray-400';
      case 'afternoon':
        return 'bg-yellow-200 text-gray-800 placeholder-yellow-500';
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
      case 'midnight':
        return 'bg-gray-700 text-white hover:bg-gray-800';
      case 'dawn':
        return 'bg-purple-500 text-white hover:bg-purple-600';
      case 'morning':
        return 'bg-green-500 text-white hover:bg-green-600';
      case 'afternoon':
        return 'bg-orange-500 text-white hover:bg-orange-600';
      case 'evening':
        return 'bg-pink-500 text-white hover:bg-pink-600';
      case 'night':
        return 'bg-blue-500 text-white hover:bg-blue-600';
      default:
        return 'bg-blue-500 text-white hover:bg-blue-600';
    }
  };

  return (
    <div className={`${getBackgroundClass()} min-h-screen transition-all duration-1500 ease-in-out`}>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <Time
          textClass={getTextClass()}
        />
        <GoogleSearchBar
          textClass={getTextClass()}
          inputClass={getInputClass()}
          buttonClass={getButtonClass()}
        />

        <TodoApp/>

    </div>
    </div>
  );
}

export default App;
