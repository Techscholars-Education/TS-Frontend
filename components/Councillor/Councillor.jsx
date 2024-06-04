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
            <Image
              className="mt-[-12vw] ml-[2vw]"
              src={CouncillorPoster}
              alt="councillor-svg"
            ></Image>
          </div>
          <form
            className=" w-full lg:w-1/2 font-Poppins  space-y-4 "
            action="submit"
          >
            <div className="flex justify-between ">
              <div className="flex flex-col space-y-2 w-[48%] ">
                <label className=" text-lg font-semibold text-darkBlue/70">
                  First Name
                </label>
                <input
                  className="border-2 text-sm md:text-lg border-black/40 rounded-md p-2 "
                  placeholder="Enter your first name"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2  w-[48%]">
                <label className=" text-lg font-semibold text-darkBlue/70">
                  Last Name
                </label>
                <input
                  className="border-2 text-sm md:text-lg border-black/40 rounded-md p-2 "
                  placeholder="Enter your last name"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col space-y-2 w-[48%] ">
                <label className=" text-lg font-semibold text-darkBlue/70">
                  Email
                </label>
                <input
                  className="border-2 text-sm md:text-lg border-black/40 rounded-md p-2 "
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2  w-[48%]">
                <label className=" text-lg font-semibold text-darkBlue/70">
                  Phone Number
                </label>
                <input
                  className="border-2 text-sm md:text-lg border-black/40 rounded-md p-2 "
                  placeholder="Enter your phone number"
                  type="number"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col space-y-2  w-[48%]">
                <label
                  htmlFor="designation"
                  className="text-lg font-semibold text-darkBlue/70 "
                >
                  Class
                </label>
                <select
                  id="countries"
                  className="border-2 border-black/40 text-sm md:text-lg text-darkBlue/70 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2"
                  required
                >
                  <option value="" disabled selected>
                    {" "}
                    Select class
                  </option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2  w-[48%]">
                <label
                  htmlFor="designation"
                  className="text-lg font-semibold text-darkBlue/70 "
                >
                  Goal
                </label>
                <select
                  id="countries"
                  className="border-2 border-black/40 text-sm md:text-lg text-darkBlue/70 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2"
                  required
                >
                  <option value="" disabled selected>
                    {" "}
                    Select your goal
                  </option>
                  <option value="CEO">CEO</option>
                  <option value="CTO">CTO</option>
                  <option value="Digital Marketer">Digital Marketer</option>
                  <option value="Strategist">Strategist</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col space-y-2  w-[48%]">
                <label
                  htmlFor="designation"
                  className="text-lg font-semibold text-darkBlue/70 "
                >
                <span className="max-lg:hidden inline">Preferred </span>Programs
                </label>
                <select
                  id="countries"
                  className="border-2 border-black/40 text-sm md:text-lg text-darkBlue/70 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2"
                  required
                >
                  <option value="" disabled selected>
                    {" "}
                   Select Mode
                  </option>
                  <option value="NEEt">NEET</option>
                  <option value="JEE">JEE</option>
                  <option value="JEE Add">JEE Add.</option>
                  <option value="Foundation">Foundation</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2  w-[48%]">
                <label
                  htmlFor="designation"
                  className="text-lg font-semibold text-darkBlue/70 "
                >
                State
                </label>
                <select
                  id="countries"
                  className="border-2 border-black/40 text-sm md:text-lg text-darkBlue/70 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2"
                  required
                >
                  <option value="" disabled selected>
                    {" "}
                    Select State
                  </option>
                  <option value="UP">UP</option>
                  <option value="MP">MP</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
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
              required
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

            <button className="bg-TechBlue rounded-full text-white px-4 py-3 text-sm md:w-44 md:h-12 hover:bg-black transition-all ease-linear duration-200 hover:shadow-md hover:shadow-black  ">
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
