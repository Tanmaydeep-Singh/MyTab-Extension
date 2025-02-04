/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const Menu = ({ setTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState('default');

  useEffect(() => {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
      setSelectedTheme(storedTheme);
      setTheme(storedTheme);
    }
  }, [setTheme]);

  const handleThemeChange = (event) => {
    const theme = event.target.value;
    setSelectedTheme(theme);
    setTheme(theme);
    localStorage.setItem('selectedTheme', theme); 
  };

  return (
    <div className="absolute w-[90vw] h-[90vh] top-[5vh] left-[5vw] bg-white/30 backdrop-blur-lg border-2 border-black rounded-2xl p-8 shadow-lg">
      <div className="text-4xl font-semibold text-gray-800 mb-6">Menu</div>

      <div className="mb-6">
        <label htmlFor="theme-select" className="block text-xl text-gray-800 mb-2">Customize Background Color / Cycle</label>
        <select
          id="theme-select"
          className="mt-2 w-full p-3 rounded-md bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTheme}
          onChange={handleThemeChange}
        >
          <option value="default">Default (Cycle Based)</option>
          <option value="late-night">Late Night</option>
          <option value="early-morning">Early Morning</option>
          <option value="sunrise">Sunrise</option>
          <option value="morning">Morning</option>
          <option value="midday">Midday</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
          <option value="night">Night</option>
        </select>
      </div>

      <div className="text-lg text-gray-600">
        <p>Manage Components</p>
      </div>
    </div>
  );
};

export default Menu;
