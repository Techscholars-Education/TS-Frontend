import React from "react";
import Aboutslider from "./Aboutslider";
const About = () => {
  return (
    <section className="bg-gray-100 py-12 font-Poppins w-11/12 mx-auto ">
      <div className=" w-9/12 mx-auto rounded-xl">
        <h5 className="text-lg text-center font-bold text-darkBlue font-Poppins">
          About Us
        </h5>

        <h2 className="text-darkBlue font-bold text-5xl text-center mt-10 mb-6 font-Poppins ">
          Get Ahead of your Competition
        </h2>

        <p className="text-lg text-darkBlue text-center font-base">
          An innovative Ed-tech organization dedicated to democratizing <br />
          access to high-quality STEM education across India
        </p>
      </div>

      <Aboutslider />
    </section>
  );
};

export default About;
