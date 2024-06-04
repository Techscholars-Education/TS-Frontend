"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
const recommendations = {
  j: [{ option: "JEE", route: "/course" }],
  n: [{ option: "NEET", route: "/course" }],
  f: [{ option: "Foundation", route: "/course" }],
  c: [
    { option: "Courses", route: "/course" },
    { option: "Call a councillor", route: "/councillor" },
  ],
  p: ["Privacy policy", "Parents reviews"],
  s: ["Students reviews", "Parents reviews"],
};

function App() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    if (value.length > 0) {
      setSuggestions(recommendations[value[0]] || []);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className=" flex items-center justify-between  my-4 font-Poppins rounded-full border md:w-1/2 lg:w-4/12 pl-4 mx-4 md:mx-0 bg-white ">
      <div className="flex justify-start rounded-full ">
        <CiSearch className=" text-xl md:text-5xl text-gray-400" />
      </div>
      <div className="w-full relative ">
        <input
          type="text"
          className="w-full p-3 border-gray-300 rounded-md focus:outline-none "
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <div className="mt-2 border border-gray-300 rounded-md bg-white absolute w-full z-50">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer w-full"
                >
                  <Link href={suggestion.route} className="block w-full">
                    {suggestion.option}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <button
          className="cursor-pointer text-sm transition-all bg-TechBlue text-white px-6 py-2 rounded-full
              border-blue-600
              border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
