import React from "react";
import { MdOutlineLock } from "react-icons/md";
import Testseries2card from "./Testseries2card";

const Testseries2 = () => {
  const subjectData = [
    { id: 1, class: "9th" },
    { id: 2, class: "10th" },
    { id: 3, class: "10th" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fcfafa] py-16 px-16 font-Poppins">
      <div className=" space-y-6 ">
        <h3 className="font-Poppins text-2xl font-semibold text-darkBlue">
          Test Series
        </h3>
        <div className="flex justify-between ">
          <p className="text-xl text-darkBlue">Course Type (Foundation)</p>
        </div>

        <div className="flex space-x-4  ">
          <button className="bg-darkBlue px-4 py-3 rounded-xl text-white">
            Purchased
          </button>
          <button className=" px-4 py-3 rounded-xl text-darkBlue border bg-gray-200 flex  items-center ">
            <MdOutlineLock className="text-xl mb-1 mr-1" />
            All Courses
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 py-12 ">
        {subjectData.map((item) => {
          return <Testseries2card key={item.id} class={item.class} />;
        })}
      </div>
    </div>
  );
};

export default Testseries2;
