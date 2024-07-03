import React from "react";
import Link from "next/link";
import Faqs from "../Faqs/Faqs";
const Referrals = () => {
  return (
    <div className="w-full min-h-screen bg-[#f7faff] py-16 px-16 font-Poppins">
      <div className=" space-y-3 font-Poppins ">
        <h3 className="font-Poppins text-2xl font-semibold text-darkBlue">
          Refer and Earn
        </h3>
        <div className="flex justify-between ">
          <p className="text-xl text-darkBlue">
            Refer your friends and earn rewards
          </p>
        </div>
      </div>

      <div className=" my-16 flex  pl-60  font-Poppins items-center space-x-4 ">
        <div className="bg-white w-80 h-60 flex flex-col justify-center px-10 rounded-xl space-y-4 relative ">
          <h3 className="text-lg">Total rewards earned</h3>
          <p className="text-gray-700">The amount in INR</p>
          <Link
            href="#"
            className="rounded-2xl text-xs bg-yellowish text-darkBlue w-[50%] px-4 py-2"
          >
            Redeem Now
          </Link>
          <div className="bg-white w-80 h-40 flex flex-col font-Poppins justify-center px-6  rounded-xl left-72 absolute shadow-xl space-y-4 bottom-0">
            <h3 className="text-lg ">Share your referal code</h3>
            <p className="text-gray-700">UWIP030FS</p>
            <div className="flex justify-between  w-full">
              <p className="text-gray-700">Invite via</p>
              <p className="text-gray-700">Whatsapp</p>
            </div>
          </div>
        </div>
      </div>

      <Faqs />
    </div>
  );
};

export default Referrals;
