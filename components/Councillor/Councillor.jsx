import React from "react";
import Image from "next/image";
import councillor from "../../public/Councillor/councillor.svg";
const Councillor = () => {
  return (
    <section className="font-Poppins">
      {/*   Heading */}
      <div className="py-10 text-center space-y-4">
        <h1 className="text-5xl text-darkBlue font-semibold">
          Get in Touch with our Councillor
        </h1>

        <p className="text-xl text-darkBlue">
          Set your future milestones with us
        </p>
      </div>

      {/* Main section */}

      <div className="w-9/12  mx-auto p-10 flex justify-between flex-wrap ">
        <div className=" w-1/2 flex justify-center items-center">
          <Image src={councillor} alt="Councillor"></Image>
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

          <div className="flex justify-between  ">
            <h3>Pick out a slot for our councilor to call you</h3>
          </div>
          <label htmlFor="timing">Choose a Time:</label>
          <select
            className="bg-white border-2 w-full rounded-xl p-2 outline-none"
            name="timing"
            id="time"
          >
            <option value="10">10 AM</option>
            <option value="12">12 PM</option>
            <option value="2">2 PM</option>
            <option value="4">4 PM</option>
          </select>

          <hr />

          <button className="bg-darkBlue text-white w-44 h-12 rounded-xl ">
            Schedule a Call
          </button>
        </form>
      </div>
    </section>
  );
};

export default Councillor;
