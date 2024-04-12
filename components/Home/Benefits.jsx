"use client";
import React from "react";
import Image from "next/image";
import ratings from "../../public/Home/ratings.svg";
import schdule_time from "../../public/Home/schdule_time.svg";
import live_class from "../../public/Home/live_class.svg";
import login from "../../public/Home/login.svg";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div className=" w-9/12 mx-auto flex justify-between items-center ">
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 0.7 }}
        className="font-Poppins inline-block space-y-2 text-center"
      >
        <div>
          <Image className="mx-auto mb-4" src={ratings}></Image>
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 0.7 }}
        className="font-Poppins inline-block space-y-2 text-center"
      >
        <div>
          <Image className="mx-auto mb-4" src={schdule_time}></Image>
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 0.7 }}
        className="font-Poppins inline-block space-y-2 text-center"
      >
        <div>
          <Image className="mx-auto mb-4" src={live_class}></Image>
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 0.7 }}
        className="font-Poppins inline-block space-y-2 text-center"
      >
        <div>
          <Image className="mx-auto mb-4" src={login}></Image>
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
      </motion.div>
    </div>
  );
};

export default Benefits;
