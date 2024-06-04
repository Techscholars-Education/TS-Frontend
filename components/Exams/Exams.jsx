import React from "react";
import Image from "next/image";
import scholar from "../../public/Exams/scholar.svg";
import Footer from "../Footer";
const Exams = () => {
  return (
    <>
      <div className="bg-white font-Poppins py-10 w-full  ">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-xl md:text-4xl font-semibold text-darkBlue px-4 md:px-0">
            Apply for Scholarship Admission Test
          </h2>
          <p className="text-sm text-gray-600 px-10 md:px-40 xl:px-96">
            Be in the Top 5%ile and get upto 50% Scholarship
          </p>
        </div>
        <div className=" w-11/12  mx-auto lg:flex lg:flex-row flex flex-col  space-y-12 md:space-y-0  justify-center items-center md:space-x-4 py-10 ">
          <div className=" w-full lg:w-1/2 ">
            <Image
              className="mx-auto"
              src={scholar}
              alt="councillor-svg"
            ></Image>
          </div>
          <form
            className=" w-full lg:w-1/2 font-Poppins  space-y-4 "
            action="submit"
          >
            <div className="flex flex-col space-y-2 w-full ">
              <label className="text-lg font-semibold text-darkBlue/70">
                Full Name
              </label>
              <input
                className="border-2 border-black/40  text-sm md:text-lg rounded-md p-2 w-full "
                placeholder="Enter your full name"
                type="text"
                required
              />
            </div>

            <div className="flex justify-between ">
              <div className="flex flex-col space-y-2 w-[48%] ">
                <label className=" text-lg font-semibold text-darkBlue/70">
                  Email
                </label>
                <input
                  className="border-2 text-sm md:text-lg border-black/40 rounded-md p-2 "
                  placeholder="Enter your email address"
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
                Gender
                </label>
                <select
                  id="countries"
                  className="border-2 border-black/40 text-sm md:text-lg text-darkBlue/70 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2"
                  required
                >
                  <option value="" disabled selected>
                    {" "}
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2  w-[48%]">
                <label
                  htmlFor="designation"
                  className="text-lg font-semibold text-darkBlue/70 "
                >
                  Target Exam
                </label>
                <select
                  id="countries"
                  className="border-2 border-black/40 text-sm md:text-lg text-darkBlue/70 rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2"
                  required
                >
                  <option value="" disabled selected>
                    {" "}
                    Select your target
                  </option>
                  <option value="Jee">JEE</option>
                  <option value="Neet">NEET</option>
                  <option value="foundation">Foundation</option>

                </select>
              </div>
            </div>


            <hr />

            <div>
              <p className="text-gray-600">
                * Our scholarship exam is held every Sunday for 3 hours which is
                from 10 A.M to 1 P.M
              </p>
            </div>

            <button className="bg-TechBlue rounded-full text-white px-4 py-3 text-sm md:w-44 md:h-12 hover:bg-black hover:shadow-md hover:shadow-black transition-all ease-linear duration-200 ">
              Apply Now
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Exams;
