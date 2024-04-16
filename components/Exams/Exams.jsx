import React from "react";
import Image from "next/image";
import Lightbulb from "../../public/Exams/Lightbulb.svg";
const Exams = () => {
  return (
    <section className="font-Poppins">
      {/*   Heading */}
      <div className="py-10 text-center space-y-4">
        <h1 className="text-5xl text-darkBlue font-semibold">
          Apply for TS-SAT (Scholarship Admission Test)
        </h1>

        <p className="text-xl text-darkBlue">
          Be in the Top 5%ile and get upto 50% Scholarship
        </p>
      </div>

      {/* Main section */}

      <div className="w-9/12  mx-auto p-10 flex justify-between flex-wrap ">
        <div className=" w-1/2 flex justify-center items-center">
          <Image src={Lightbulb} alt="idea-svg"></Image>
        </div>

        <form className=" w-1/2 space-y-4 " action="submit">
          <div className="flex flex-col space-y-2 w-full ">
            <label className="text-lg font-semibold text-darkBlue">
              Enter your Full Name
            </label>
            <input
              className="border-2 border-black/40 text-lg rounded-md p-2 w-full "
              placeholder="John Doe"
              type="text"
            />
          </div>

          <div className="flex justify-between ">
            <div className="flex flex-col space-y-2 w-[48%] ">
              <label className="text-lg font-semibold text-darkBlue">
                Email
              </label>
              <input
                className="border-2 text-lg border-black/40 rounded-md p-2 "
                placeholder="example@gmail.com"
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2  w-[48%]">
              <label className="text-lg font-semibold text-darkBlue">
                Phone Number
              </label>
              <input
                className="border-2 text-lg border-black/40 rounded-md p-2 "
                placeholder="+91 XXXXXXXXXX"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-between pb-12 ">
            <div className="flex flex-col space-y-2 w-[48%] ">
              <label className="text-lg font-semibold text-darkBlue">
                Gender
              </label>
              <input
                className="border-2 text-lg border-black/40 rounded-md p-2 "
                placeholder="Male/Female"
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-2  w-[48%] ">
              <label className="text-lg font-semibold text-darkBlue">
                Enter your target Exam
              </label>
              <input
                className="border-2 text-lg border-black/40 rounded-md p-2 "
                placeholder="JEE/NEET"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="my-6">
            <p className="font-Poppins text-lg">
              Our scholarship exam is held every Sunday for 3 hours which is
              from 10 A.M to 1 P.M
            </p>
          </div>
          <button className="bg-darkBlue text-white w-44 h-12 rounded-xl">
            Apply Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Exams;
