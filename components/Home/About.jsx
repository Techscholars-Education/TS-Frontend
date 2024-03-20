import React from "react";
import Image from "next/image";
import arrowRight from "../../public/Home/arrow-right.svg";
import laptop from "../../public/Home/laptop.svg";
import Agreement from "../../public/Home/Agreement.svg";
import mentor from "../../public/Home/mentor.svg";
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

      <div className="flex justify-between items-center my-16">
        <div className="bg-white flex justify-center items-center w-16 h-16">
          <Image src={arrowRight}></Image>
        </div>

        <div className="flex gap-16 font-Poppins">
          <div className="max-w-sm rounded overflow-hidden ">
            <Image
              className="w-full"
              src={laptop}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-base text-lg mb-2">Every Sunday</div>
              <div className="font-bold text-3xl text-darkBlue mb-2">
                Scholarship admission exam
              </div>
              <p className="text-darkBlue text-base">
                Techscholars scholarship test
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden ">
            <Image
              className="w-full"
              src={Agreement}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-base text-lg mb-2">Contact Us</div>
              <div className="font-bold text-3xl text-darkBlue mb-2">
                Schedule a call with our councillor
              </div>
              <p className="text-darkBlue text-base">
                Learn what techscholars can offer
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden ">
            <Image
              className="w-10/12"
              src={mentor}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-base text-lg mb-2">Faculty</div>
              <div className="font-bold text-3xl text-darkBlue mb-2">
                Personalized expert mentorship
              </div>
              <p className="text-darkBlue text-base">
                Attention on what you need
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellowish flex justify-center items-center w-16 h-16">
          <Image className="rotate-180" src={arrowRight}></Image>
        </div>
      </div>

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
