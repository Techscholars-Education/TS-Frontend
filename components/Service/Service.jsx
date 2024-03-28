import React from "react";
import Card from "../Course/Card";

const Service = () => {
  return (
    <>
      <div className="bg-slate-100 font-Poppins py-10 ">
        <div className="flex justify-center items-center  flex-col">
          <h1 className="font-semibold text-5xl text-darkBlue ">
            Welcome Harsh
          </h1>
          <span className="font-semibold text-[20px] text-darkBlue ">
            Select your package
          </span>
        </div>

        <div className="flex justify-center  mt-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center mt-24 ">
          <button className="bg-darkBlue text-white w-44 h-12 rounded-xl mx-8">
            Back
          </button>
          <button className="w-44 h-12 border-2  border-[#DCDCDC] rounded-xl">
            Back to home
          </button>
        </div>
      </div>
    </>
  );
};

export default Service;
