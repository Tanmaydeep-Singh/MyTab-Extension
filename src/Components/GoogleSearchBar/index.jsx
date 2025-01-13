import React from "react";

function GoogleSearchBar() {
  return (
    <div className="flex items-center justify-center m-5 p-5 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Google</h1>

        <form
        className="flex items-center w-full max-w-xl shadow-md rounded-full overflow-hidden"
        action="https://www.google.com/search"
        method="GET"
        target="_blank"
      >
        <input
          type="text"
          name="q"
          placeholder="Search Google"
          className="w-full px-6 py-3 text-lg border-none focus:ring-0 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-[#1DB954] text-white px-6 py-3 text-lg font-medium hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
    
        </form>
      </div>
    </div>
  );
}

export default GoogleSearchBar;
