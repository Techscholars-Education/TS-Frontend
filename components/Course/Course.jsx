import React from "react";
import Card from "./Card";

const Course = () => {
  return (
    <>
      <div>
        <div className="flex justify-center mt-8">
          <button className="bg-[#002657] p-2 px-4 text-white rounded-md">
            IIT BATCH
          </button>
          <button className="rounded-md p-2 px-4 border ml-3">JEE BATCH</button>
          <button className="rounded-md p-2 px-4 border ml-3">
            NEET BATCH
          </button>
        </div>
        <div className="flex justify-center items-center my-8">
          <h1>Welcome Harsh</h1>
          <span>Select your package</span>
        </div>

        <div className="flex justify-around w-[100vw] mt-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Course;
