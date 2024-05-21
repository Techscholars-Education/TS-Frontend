"use client";
import React from "react";
import Image from "next/image";
import ratings from "../../public/Home/ratings.svg";
import schdule_time from "../../public/Home/schdule_time.svg";
import live_class from "../../public/Home/live_class.svg";
import login from "../../public/Home/login.svg";

const Benefits = () => {
  return (
    <div className=" w-11/12 xl:w-10/12 grid grid-cols-1 md:grid-cols-2  mx-auto gap-4 ">
      {/* container -1 */}
      <div className=" bg-[#DCD9F866] rounded-xl  flex px-6 py-6 md:py-8 font-Poppins hover:shadow-xl duration-200 transition-all ">
        <div className="my-auto">
          <Image className=" w-full " src={ratings} alt="rating-icon"></Image>
        </div>
        <div className="w-full px-4 lg:px-10   ">
          <h3 className="text-darkBlue font-semibold mb-1 ">
            High quality Content
          </h3>
          <p className="text-xs md:text-sm text-gray-600">
            Experience unmatched quality in our courses: from basics to advanced
            mastery.
          </p>
          <button className="text-xs md:text-sm text-darkBlue rounded-full border border-gray-500 px-4 py-1 mt-5 ">
            Find out more
          </button>
        </div>
      </div>
      <div className=" bg-[#FFE6DF66] rounded-xl flex px-6 py-6 md:py-8 font-Poppins hover:shadow-xl duration-200 transition-all ">
        <div className="my-auto">
          <Image
            className=" w-full "
            src={schdule_time}
            alt="schedule-time"
          ></Image>
        </div>
        <div className="w-full px-4 lg:px-10   ">
          <h3 className="text-darkBlue font-semibold mb-1 ">
            Doubt Solving Classes
          </h3>
          <p className="text-xs md:text-sm text-gray-600">
            Unlock clarity in our Doubt Solving Classes: dedicated sessions with
            expert guidance.
          </p>
          <button className="text-xs md:text-sm text-darkBlue rounded-full border border-gray-500 px-4 py-1 mt-5 ">
            Find out more
          </button>
        </div>
      </div>
      <div className=" bg-[#FCE2EB4D] rounded-xl flex px-6 py-6 md:py-8 font-Poppins hover:shadow-xl duration-200 transition-all ">
        <div className="my-auto">
          <Image className=" w-full " src={live_class} alt="live-class"></Image>
        </div>
        <div className="w-full px-4 lg:px-10   ">
          <h3 className="text-darkBlue font-semibold mb-1 ">Weekly tests</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Embark on a journey of assessment excellence with our All India test
            series
          </p>
          <button className="text-xs md:text-sm text-darkBlue rounded-full border border-gray-500 px-4 py-1 mt-5 ">
            Find out more
          </button>
        </div>
      </div>
      <div className=" bg-[#DCF4F566] rounded-xl flex px-6 py-6 md:py-8 font-Poppins hover:shadow-xl duration-200 transition-all ">
        <div className="my-auto">
          <Image className=" w-full " src={login} alt="login-icon"></Image>
        </div>
        <div className="w-full px-4 lg:px-10   ">
          <h3 className="text-darkBlue font-semibold mb-1 ">DPPs</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Dive into enriched learning with our meticulously curated DPP and
            Study Material
          </p>
          <button className="text-xs md:text-sm text-darkBlue rounded-full border border-gray-500 px-4 py-1 mt-5 ">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
