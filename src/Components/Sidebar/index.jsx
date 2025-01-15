import React, { useState } from "react";
import { motion } from "framer-motion";
import Advice from "./Advice";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 h-screen ${isOpen ? "w-[30vw]" : "w-0"} overflow-hidden bg-opacity-40 bg-white backdrop-blur-lg border-r border-white/20 shadow-lg`}
        initial={{ width: "0vw" }}
        animate={{ width: isOpen ? "30vw" : "0vw" }}
        transition={{ duration: 0.6, ease: "easeInOut" }} // Smoother transition
      >
        {/* Close Button */}
        
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold text-gray-700"></h2>
          <button
            className="text-xl font-bold text-gray-700 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Notepad Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border border-white/20 p-4 rounded-lg bg-opacity-50 bg-white/20">
              <h3 className="font-bold text-gray-600">Notepad</h3>
              <textarea
                className="w-full h-32 mt-2 p-2 bg-transparent border rounded-lg text-gray-700 border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 placeholder-gray-400"
                placeholder="Write a poem or quote here..."
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
          >
            <div className="border border-white/20 p-4 rounded-lg bg-opacity-50 bg-white/20">
              <h3 className="font-bold text-gray-600">Cookie:</h3>
              <Advice/>
            </div>
          </motion.div>

          {/* Streak Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="fixed w-11/12 bottom-3 border border-white/20 p-4 rounded-lg bg-opacity-50 bg-white/20">
              <h3 className="font-bold text-gray-600">Streaks</h3>
              <p className="mt-2 text-gray-500">You have a 7-day streak!</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Toggle Button */}
      {
        isOpen ? <></> :
        <button
          className="fixed top-1/2 left-0 transform -translate-y-1/2 p-2"
          onClick={() => setIsOpen(true)}
        >
          <img src='./icons/angles-right-solid.svg' alt="Angles icon" className='w-5 h-5 object-cover' />
        </button>
      }
    </div>
  );
};

export default Sidebar;
