"use client";
import React from "react";
import Image from "next/image";
import ratings from "../../public/Home/ratings.svg";
import schdule_time from "../../public/Home/schdule_time.svg";
import live_class from "../../public/Home/live_class.svg";
import login from "../../public/Home/login.svg";

const Benefits = () => {
  return (
    <div className=" w-11/12 mx-auto flex justify-between items-center  ">
      <div className="font-Poppins inline-block space-y-2 text-center">
        <div>
          <Image className="mx-auto mb-4" src={ratings} alt="star-icon"></Image>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-darkBlue">
            High Quality Classes
          </h4>
        </div>
        <div className="w-4/5 mx-auto">
          <p className="text-darkBlue font-base">
            Experience unmatched quality in our courses: from basics to advanced
            mastery.
          </p>
        </div>
      </div>
      <div className="font-Poppins inline-block space-y-2 text-center">
        <div>
          <Image
            className="mx-auto mb-4"
            src={schdule_time}
            alt="managing-time"
          ></Image>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-darkBlue">
            Doubt Solving Classes
          </h4>
        </div>
        <div className="w-4/5 mx-auto">
          <p className="text-darkBlue font-base">
            Unlock clarity in our Doubt Solving Classes: dedicated sessions with
            expert guidance.
          </p>
        </div>
      </div>
      <div className="font-Poppins inline-block space-y-2 text-center">
        <div>
          <Image
            className="mx-auto mb-4"
            src={live_class}
            alt="live-class"
          ></Image>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-darkBlue">Weekly tests</h4>
        </div>
        <div className="w-4/5 mx-auto">
          <p className="text-darkBlue font-base">
            Embark on a journey of assessment excellence with our All India test
            series
          </p>
        </div>
      </div>
      <div className="font-Poppins inline-block space-y-2 text-center">
        <div>
          <Image className="mx-auto mb-4" src={login} alt="login-icon"></Image>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-darkBlue">DPPs</h4>
        </div>
        <div className="w-4/5 mx-auto">
          <p className="text-darkBlue font-base">
            Dive into enriched learning with our meticulously curated DPP and
            Study Material
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
