import React from "react";
import Image from "next/image";
import Subjects from "../../public/Dashboard/Subjects.jpg";
const Testseries2card = (props) => {
  return (
    <div className="bg-white max-w-xs  font-Poppins rounded-xl p-6">
      <div className=" flex justify-start space-x-4">
        <div className="space-x-4">
          <span className="text-sm rounded-md py-1 px-2  bg-yellow-100">
            9th{" "}
          </span>
          <span className="text-sm rounded-md py-1 px-2  bg-red-100">
            Foundation
          </span>
          <span className="text-sm rounded-md py-1 px-2  bg-cyan-100">
            2024
          </span>
        </div>
      </div>
      <div className="rounded-xl my-4">
        <Image src={Subjects} alt="Subjects-thumbnail" />
      </div>

      <div className="font-Poppins ">
        <div>
          <h4 className="font text-darkBlue text-lg">Mathematics</h4>
        </div>
        <div className="py-2">
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            voluptatum?
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <p className="text-sm text-sky-600 ">Varun Sharma</p>
      </div>
    </div>
  );
};

export default Testseries2card;
