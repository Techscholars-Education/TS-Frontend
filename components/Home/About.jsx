import React from "react";
import Aboutslider from "./Aboutslider";
const About = () => {
  return (
    <section className="bg-white py-6 font-Poppins w-11/12 mx-auto  ">
      <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-gray-300 text-TechBlue font-Poppins border py-1 rounded-full px-4 inline-block">
            Techscholars
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-4xl text-center my-4 font-Poppins ">
          Get ahead of your competition
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            An innovative Ed-tech organisation dedicated to democratising access
            to high-quality STEM education across India
          </p>
        </div>
      </div>

      <Aboutslider />
    </section>
  );
};

export default About;
