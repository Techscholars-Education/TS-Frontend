import React from "react";
import Image from "next/image";
import CouncillorPoster from "../../public/Councillor/CouncillorPoster.svg";
import Footer from "../Footer";

const Councillor = () => {
  return (
    <>
      <div className="bg-white font-Poppins py-10 w-full  ">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-xl md:text-4xl font-semibold text-darkBlue px-4 md:px-0">
            Get in touch with our councillor
          </h2>
          <p className="text-sm text-gray-600 px-10 md:px-40 xl:px-96">
            Set your future milestones with us.
          </p>
        </div>
        <div className=" w-11/12  mx-auto lg:flex lg:flex-row flex flex-col  space-y-12 md:space-y-0  justify-center items-center md:space-x-4 py-10 ">
          <div className=" w-full lg:w-1/2 ">
            <Image className="mx-auto" src={CouncillorPoster}></Image>
          </div>
          <form
            className=" w-full lg:w-1/2 font-Poppins  space-y-4 "
            action="submit"
          >
            <div className="flex flex-col space-y-2 w-full ">
              <label className="text-lg font-semibold text-darkBlue/70">
                Enter your Full Name
              </label>
              <input
                className="border-2 border-black/40  text-sm md:text-lg rounded-md p-2 w-full "
                placeholder="John Doe"
                type="text"
              />
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col space-y-2 w-[48%] ">
                <label className=" text-lg font-semibold text-darkBlue/70">
                  Email
                </label>
                <input
                  className="border-2 text-sm md:text-lg border-black/40 rounded-md p-2 "
                  placeholder="example@gmail.com"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-2  w-[48%]">
                <label className=" text-lg font-semibold text-darkBlue/70">
                  Phone Number
                </label>
                <input
                  className="border-2 text-sm md:text-lg border-black/40 rounded-md p-2 "
                  placeholder="+91 XXXXXXXXXX"
                  type="text"
                />
              </div>
            </div>

            <div className="flex justify-between text-darkBlue/70 ">
              <h3>Pick out a slot for our councilor to call you</h3>
            </div>
            <label className="text-darkBlue/70" htmlFor="timing">
              Choose a Time:
            </label>
            <select
              className="bg-white border-2 w-full rounded-xl p-2 outline-none"
              name="timing"
              id="time"
            >
              <option
                className="text-sm md:text-base text-darkBlue/70"
                value="10"
              >
                10 AM
              </option>
              <option
                className="text-sm md:text-base text-darkBlue/70"
                value="12"
              >
                12 PM
              </option>
              <option
                className="text-sm md:text-base text-darkBlue/70"
                value="2"
              >
                2 PM
              </option>
              <option
                className="text-sm md:text-base text-darkBlue/70"
                value="4"
              >
                4 PM
              </option>
            </select>

            <hr />

            <button className="bg-TechBlue rounded-full text-white px-4 py-3 text-sm md:w-44 md:h-12  ">
              Schedule a Call
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Councillor;
