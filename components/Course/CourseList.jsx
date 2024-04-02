import React from "react";

const CourseList = () => {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#002657] p-2 px-4 text-white rounded-md">
          IIT BATCH
        </button>
        <button className="rounded-md p-2 px-4 border ml-3">JEE BATCH</button>
        <button className="rounded-md p-2 px-4 border ml-3">NEET BATCH</button>
      </div>
      <div className="flex justify-center items-center my-8 flex-col">
        <h1 className="font-[600] text-[44px] text-[#002657] ">
          Welcome Harsh
        </h1>
        <span className="font-[500] text-[20px] text-[#002657] ">
          Select your package
        </span>
      </div>
    </div>
  );
};

export default CourseList;
