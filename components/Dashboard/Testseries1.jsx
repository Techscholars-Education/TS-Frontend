import React from "react";
import Testseries1card from "./Testseries1card";

const Testseries1 = () => {
  const classData = [
    { id: 1, class: "9th" },
    { id: 2, class: "10th" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F0F7FF] py-16 px-16 font-Poppins">
      <div className=" space-y-3 ">
        <h3 className="font-Poppins text-2xl font-semibold text-darkBlue">
          Test Series
        </h3>
        <div className="flex justify-between ">
          <p className="text-xl text-darkBlue">Course Type (Foundation)</p>
        </div>
      </div>

      <div className="grid grid-cols-3 py-12 ">
        {classData.map((item) => {
          return <Testseries1card key={item.id} className={item.class} />;
        })}
      </div>
    </div>
  );
};

export default Testseries1;
