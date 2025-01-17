import React, { useState } from "react";

const Search = () => {
  const [vegOnly, setVegOnly] = useState(false);

  const handleToggle = () => {
    setVegOnly(!vegOnly);
  };

  return (
    <div className="flex flex-row items-center justify-between lg:shadow-sm rounded-lg p-3 w-full mx-0 max-w-full lg:max-w-5xl lg:mx-auto">
      {/* Search Bar */}
      <div className="flex items-center flex-grow w-full md:w-auto">
        <span className="text-primary text-base sm:text-lg pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.45 11.25a5.2 5.2 0 11-10.4 0 5.2 5.2 0 0110.4 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search Our Regular Menu"
          className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-500 text-sm sm:text-base w-full"
        />
      </div>

      {/* Veg Only Toggle */}
      <div className="flex items-center space-x-2 w-auto">
        <span className="text-xs sm:text-sm font-medium text-gray-700">
          Veg
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={vegOnly}
            onChange={handleToggle}
          />
          <div className="w-8 h-4 sm:w-9 sm:h-5 bg-gray-300 rounded-full peer peer-checked:bg-primary"></div>
          <div className="absolute left-[2px] top-[1px] w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full transition-transform peer-checked:translate-x-4 sm:peer-checked:translate-x-5 outline-none"></div>
        </label>
      </div>
    </div>
  );
};

export default Search;
