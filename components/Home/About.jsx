import React from "react";
import Aboutslider from "./Aboutslider";
import fungs from "@/public/Home/fungs.png";
import axies from "@/public/Home/axies.png";
import chemical from "@/public/Home/chemical.png";
import Image from "next/image";
const About = () => {
  return ( 
    <section className="bg-white md:pb-6 font-Poppins w-full mx-auto py-10 relative  overflow-hidden">
      <div className="absolute flex -rotate-[10deg] -right-[4vw] -top-11">
        <div id="1st" className="bg-[#F2F6FF] h-[80vh] w-[3vw] "></div>
        <div id="2nd" className="bg-[#E2EBFF] h-[70vh] w-[4vw]"></div>
        </div>
      <div>
    <div id="top" className=" flex items-center w-full relative">
      <Image src={axies} alt="axies" className="h-16 w-16 absolute left-[15vw]"/>
    <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-semibold uppercase bg-[#F2F8FF] text-TechBlue font-Poppins py-2 rounded-full px-4 inline-block">
          Exclusive Features
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-2xl  md:text-4xl text-center my-4 font-Poppins px-2 ">
        Get ahead of your competition
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
          Secure your place among the toppers and set yourself apart from the competition
          </p>
        </div>
      </div>
      <Image src={fungs} alt="fungs" className="h-16 w-16 absolute right-[18vw]"/>
    </div>

      <Aboutslider />
      </div>
      <div className="absolute flex -rotate-[10deg] -left-20 -bottom-10">
        <div id="2nd" className="bg-[#E2EBFF] h-[80vh] w-[4vw]"></div>
        <div id="1st" className="bg-[#F2F6FF] h-[80vh] w-[3vw] "></div>
        </div>
        <Image src={chemical} alt="chemical" className="h-16 w-16 absolute bottom-3 right-[10vw]"/>
    </section>
  );
};

export default About;
