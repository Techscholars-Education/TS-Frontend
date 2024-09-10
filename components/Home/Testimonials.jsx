"use client";
import Link from "next/link";
import React, { useState } from "react";
import InfiniteMovingCards from "./InfiniteMovingCards";
import fungs from "@/public/Home/fungs.png";
import axies from "@/public/Home/axies.png";
import chemical from "@/public/Home/chemical.png";
import reactimg from "@/public/Home/react.png";
import Image from "next/image";

const Testimonials = () => {
  const [isParents, setisParents] = useState(true);

  const handleToggle = () => {
    setisParents(!isParents);
    // console.log("Switch is now:", isParents ? "Parents" : "Student");
  };


  const items = [
    {
      quote:
        "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      name: "Janne Cooper",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      name: "Janne Cooper",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      name: "Janne Cooper",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      name: "Janne Cooper",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      name: "Janne Cooper",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
      name: "Janne Cooper",
      title: "A Tale of Two Cities",
    },
    
  ];

  return (
    <section
      id="testimonials"
      className=" pb-16 bg-[#F7FAFF] font-Poppins w-full mx-auto relative "
    >
      <Image src={axies} alt="axies" className="h-16 w-16 absolute left-[7vw] top-16"/>
      <Image src={reactimg} alt="react" className="h-16 w-16 absolute left-[12vw] bottom-16"/>
      <Image src={fungs} alt="react" className="h-16 w-16 absolute right-[12vw] top-16"/>
      <Image src={chemical} alt="react" className="h-20 w-20 absolute right-[3vw] bottom-[10vw] z-10"/>
      <div className=" w-full mx-auto  rounded-xl">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-white text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block uppercase">
            Testimonials
          </h5>
        </div>

        <div className=" w-full h-20 flex items-center justify-center mt-4">
          <div className="flex justify-center items-center h-[100vh] w-full">
            <label className="relative inline-block w-[240px] h-[50px] cursor-pointer select-none">
              <input
                type="checkbox"
                className="sr-only"
                checked={isParents}
                onChange={handleToggle}
              />
              <span
                className={`block w-full h-full rounded-full transition-all duration-300 relative cursor-pointer bg-white border-[1px] border-gray-400`}
              >
                {/* Circle button */}
                <span
                  className={`absolute  w-[130px] h-full bg-[#0079FC] text-white rounded-full transition-all duration-300 flex justify-center items-center text-[16px] font-medium shadow-md ${
                    isParents ? "left-0" : "left-[108px]"
                  }`}
                >
                  {" "}
                  <div className="w-6 h-6 rounded-full bg-white mr-1" />
                  {isParents ? "PARENTS" : "STUDENTS"}
                </span>
              </span>
              {/* Text for both sides */}
              <span
                className={`absolute top-[14px] left-[14px] font-semibold text-[16px] ${
                  isParents ? "text-white" : "text-gray-500"
                }`}
              >
                {isParents ? "" : "PARENTS"}
              </span>
              <span
                className={`absolute top-[14px] right-[14px] font-semibold text-[16px] ${
                  isParents ? "text-gray-500" : "text-white"
                }`}
              >
                {isParents ? "STUDENTS" : ""}
              </span>
            </label>
          </div>
        </div>

        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl px-10 md:px-4 text-center my-4 font-Poppins ">
          Hear from our {isParents ? "parents" : "students"}
        </h2>
        {/* Moving cards */}
        <div id="slider" className="w-full ">
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-[#F7FAFF] items-center justify-center relative -z-0 overflow-hidden ">
        <InfiniteMovingCards items={items} direction="left" speed="normal" />
        <InfiniteMovingCards items={items} direction="right" speed="normal" />
        
       
    </div>

        </div>

        <div className="flex justify-center items-center mt-14 pb-10">
          <Link
            className="text-center bg-TechBlue text-white font-Poppins font-medium rounded-full px-6 py-3 text-sm hover:bg-black hover:shadow-sm hover:shadow-black transition-all ease-linear duration-200"
            href="/course"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

{
  /* <div className="mt-16 md:mb-10">
<iframe
  className="mx-auto rounded-xl h-[169px] w-[300px] md:h-[282px] md:w-[500px]  lg:w-[860px] lg:h-[484px] xl:w-[1060px] xl:h-[596px]"
  src="https://www.youtube.com/embed/lCcr2OpPrj0?si=D-_03h1-4tWrUwDa"
  title="Techscholars | Bharat's best educational platform"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
</div> */
}
