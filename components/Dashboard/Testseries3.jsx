import React from "react";
import Testseries3card from "./Testseries3card";
const Testseries3 = () => {
  return (
    <div className="  w-full bg-[#F0F7FF] py-16 px-16 font-Poppins">
      <div className=" space-y-3 ">
        <h3 className="font-Poppins text-2xl font-semibold text-darkBlue">
          Test Series
        </h3>
        <div className="flex justify-between ">
          <p className="text-xl text-darkBlue">You have 3 tests to complete</p>
        </div>
      </div>

      <Testseries3card />
      <Testseries3card />
      <Testseries3card />
      <Testseries3card />
    </div>
  );
};

export default Testseries3;
