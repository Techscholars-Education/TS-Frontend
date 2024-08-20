"use client";
import React, { useState } from "react";

function AmPmToggle({ onToggle }) {
  const [isAm, setIsAm] = useState(true);

  const handleToggle = () => {
    const newIsAm = !isAm;
    setIsAm(newIsAm);
    if (onToggle) {
      onToggle(newIsAm ? "AM" : "PM");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex border border-gray-600 rounded-full p-1">
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            isAm ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          AM
        </button>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            !isAm ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
        >
          PM
        </button>
      </div>
    </div>
  );
}

export default AmPmToggle;
