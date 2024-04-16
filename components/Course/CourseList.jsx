"use client";
import React, { useState } from "react";

const CourseList = () => {
  const [activeBatch, setActiveBatch] = useState("IIT");

  const handleClick = (batch) => {
    setActiveBatch(batch);
  };
  return (
    <div>
      <div className="flex justify-center mt-8">
        <button
          className={`rounded-md p-2 px-4 border ml-3 ${
            activeBatch === "IIT" ? "bg-[#002657] p-2 px-4 text-white" : ""
          }`}
          onClick={() => handleClick("IIT")}
        >
          JEE BATCH
        </button>
        <button
          className={`rounded-md p-2 px-4 border ml-3 ${
            activeBatch === "JEE" ? "bg-[#002657] p-2 px-4 text-white" : ""
          }`}
          onClick={() => handleClick("JEE")}
        >
          JEE BATCH
        </button>
        <button
          className={`rounded-md p-2 px-4 border ml-3 ${
            activeBatch === "NEET" ? "bg-[#002657] p-2 px-4 text-white" : ""
          }`}
          onClick={() => handleClick("NEET")}
        >
          NEET BATCH
        </button>
      </div>
    </div>
  );
};

export default CourseList;
