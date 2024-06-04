import React from "react";
import Aboutslider from "./Aboutslider";
const About = () => {
  return (
    <section className="bg-white pt-6 font-Poppins w-full mx-auto bg-gradient-to-r from-TechBlue/5 to-white ">
      <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-300 text-TechBlue font-Poppins border py-1 rounded-full px-4 inline-block">
            Our Features
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-2xl  md:text-4xl text-center my-4 font-Poppins px-2 ">
          Exclusive features to get ahead of your competition
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            Secure your place among the toppers and set yourself apart from the
            competition
          </p>
        </div>
      </div>

      <Aboutslider />
    </section>
  );
};

export default About;
