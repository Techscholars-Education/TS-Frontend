import React from "react";
import Aboutslider from "./Aboutslider";
const About = () => {
  return (
    <section className="bg-gray-100 py-12 font-Poppins w-11/12 mx-auto">
      <div className=" w-9/12 mx-auto rounded-xl">
        <h5 className="text-lg text-center font-bold text-darkBlue font-Poppins">
          About Us
        </h5>

        <h2 className="text-darkBlue font-bold text-5xl text-center mt-10 mb-6 font-Poppins ">
          Get Ahead of your Competition
        </h2>

        <p className="text-lg text-darkBlue text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <Aboutslider />

      <h5 className="text-lg w-5/6 mx-auto my-4 text-start font-semibold text-darkBlue">
        Impact of our services
      </h5>

      <div className="mb-20 flex  space-x-4 w-5/6 mx-auto font-Poppins">
        <div className=" space-y-4 w-3/6 ">
          <h2 className="text-darkBlue font-bold text-5xl leading-snug">
            Crafted by talented and <br /> high quality material
          </h2>
        </div>
        <div className="w-3/6 flex  justify-between items-center ">
          <div className=" text-darkBlue flex flex-col items-start justify-center">
            <h1 className="text-6xl font-semibold">20+</h1>
            <p className="text-lg text-darkBlue/60">Students Enrolled</p>
          </div>
          <div className=" text-darkBlue flex flex-col items-center justify-center">
            <h1 className="text-6xl font-semibold">443</h1>
            <p className="text-lg text-darkBlue/60 ">Admissions</p>
          </div>
          <div className=" text-darkBlue flex flex-col items-start justify-center">
            <h1 className="text-6xl font-semibold">150+</h1>
            <p className="text-lg text-darkBlue/60">Targets achieved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
