import React from "react";
import Image from "next/image";
import scholar from "../../public/Exams/scholar.svg";
import Footer from "../Footer";

const Councillor = () => {
  return (
    <>
      <div className="bg-white font-Poppins py-10 w-full xl:w-9/12 mx-auto  ">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-xl md:text-4xl font-semibold text-darkBlue px-4 md:px-0">
            Apply for Scholarship Admission Test
          </h2>
          <p className="text-sm text-gray-600 px-10 md:px-40 xl:px-40">
            Be in the Top 5%ile and get upto 50% Scholarship
          </p>
        </div>

        <section className=" space-y-10 lg:space-y-0 lg:space-x-10 w-11/12 xl:w-full flex flex-col lg:flex lg:flex-row xl:space-x-20 mx-auto">
          <div className="mx-auto ">
            <Image src={scholar}></Image>
          </div>
          <div className=" w-full lg:w-1/2  ">
            <div className="grid grid-cols-2 gap-4  ">
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg ">
                <label htmlFor="fname">First Name</label>
                <input
                  className=" p-2 border border-gray-400 w-full outline-none"
                  placeholder="Enter you first name"
                  type="text"
                  required
                />
              </div>
              <div className=" space-y-2  text-sm lg:text-base xl:text-lg">
                <label htmlFor="lname">Last Name</label>
                <input
                  className=" p-2 border border-gray-400 w-full outline-none"
                  placeholder="Enter you last name"
                  type="text"
                  required
                />
              </div>
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg ">
                <label htmlFor="email">Email</label>
                <input
                  className=" p-2 border border-gray-400 w-full outline-none"
                  placeholder="Enter you Email"
                  type="email"
                  required
                />
              </div>
              <div className=" space-y-2  text-sm lg:text-base xl:text-lg">
                <label htmlFor="fname">Phone Number</label>
                <input
                  className=" p-2 border border-gray-400 w-full outline-none"
                  placeholder="+91 XXXXXXXXXX"
                  type="number"
                  required
                />
              </div>
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg ">
                <label htmlFor="fname">Class</label>
                <br />
                <select
                  className="w-full bg-white border border-gray-400 p-2 text-sm lg:text-base xl:text-lg "
                  name="class"
                  id="class"
                >
                  <option className="bg-white hover:bg-gray-200 p-2" value="9">
                    Class 9
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="10">
                    Class 10
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="11">
                    Class 11
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="12">
                    Class 12
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="13">
                    Class Target 13 (Droppers)
                  </option>
                </select>
              </div>
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg ">
                <label htmlFor="fname">Target Exam</label>
                <br />
                <select
                  className="w-full bg-white border border-gray-400 p-2 text-sm lg:text-base xl:text-lg "
                  name="exam"
                  id="exam"
                >
                  <option className="bg-white hover:bg-gray-200 p-2" value="9">
                    JEE
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="10">
                    NEET
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="11">
                    Foundation
                  </option>
                </select>
              </div>
              <div className=" space-y-2  text-sm lg:text-base xl:text-lg">
                <label htmlFor="fname">Target Year </label>
                <br />
                <select
                  className="w-full bg-white border border-gray-400 p-2  text-sm lg:text-base xl:text-lg"
                  name="year"
                  id="year"
                >
                  <option className="bg-white hover:bg-gray-200 p-2" value="9">
                    2025
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="10">
                    2026
                  </option>
                </select>
              </div>
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg ">
                <label htmlFor="fname">State</label>
                <br />
                <select
                  className="w-full bg-white border border-gray-400 p-2 text-sm lg:text-base xl:text-lg"
                  name="state"
                  id="state"
                >
                  <option className="bg-white hover:bg-gray-200 p-2" value="AP">
                    Andhra Pradesh
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="AR">
                    Arunachal Pradesh
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="AS">
                    Assam
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="BR">
                    Bihar
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="CT">
                    Chhattisgarh
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="GA">
                    Gujarat
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="HR">
                    Haryana
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="HP">
                    Himachal Pradesh
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="JK">
                    Jammu and Kashmir
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="GA">
                    Goa
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="JH">
                    Jharkhand
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="KA">
                    Karnataka
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="KL">
                    Kerala
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="MP">
                    Madhya Pradesh
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="MH">
                    Maharashtra
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="MN">
                    Manipur
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="ML">
                    Meghalaya
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="MZ">
                    Mizoram
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="NL">
                    Nagaland
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="OR">
                    Odisha
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="PB">
                    Punjab
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="RJ">
                    Rajasthan
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="SK">
                    Sikkim
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="TN">
                    Tamil Nadu
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="TG">
                    Telangana
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="TR">
                    Tripura
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="UT">
                    Uttarakhand
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="UP">
                    Uttar Pradesh
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="WB">
                    West Bengal
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="AN">
                    Andaman and Nicobar Islands
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="CH">
                    Chandigarh
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="DN">
                    Dadra and Nagar Haveli
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="DD">
                    Daman and Diu
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="DL">
                    Delhi
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="LD">
                    Lakshadweep
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value="PY">
                    Puducherry
                  </option>
                </select>
              </div>
            </div>
            <div className=" my-10 space-y-2 text-sm lg:text-base xl:text-lg">
              <p className="text-gray-400">
                * Our scholarship exam is held every Sunday for 3 hours which is
                from 10 A.M to 1 P.M{" "}
              </p>
            </div>

            <button className=" px-2 py-2 text-sm md:text-lg md:px-4 md:py-3 bg-TechBlue rounded text-white hover:bg-black duration-200">
              Apply Now
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Councillor;
