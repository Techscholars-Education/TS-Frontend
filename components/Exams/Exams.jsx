"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import scholar from "../../public/Exams/scholar.svg";
import Footer from "../Footer";
import axios from "axios";
import { tsUrl } from "@/config";

const Councillor = () => {
  // STATES
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [targetClass, setTargetClass] = useState(); //class_name
  const [targetExam, setTargetExam] = useState(""); //goal
  const [targetYear, setTargetYear] = useState(""); //Program
  const [state, setState] = useState("");

  const [showLoader, setShowLoader] = useState(false);
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [year0, setYear0] = useState("");
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [year3, setYear3] = useState("");

  // VALIDATE EMAIL
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  //! Use Effect to fetch the current year
  useEffect(() => {
    const currYear = new Date().getFullYear();
    const year0 = currYear + 1;
    const year1 = currYear + 2;
    const year2 = currYear + 3;
    const year3 = currYear + 4;
    setYear0(year0);
    setYear1(year1);
    setYear2(year2);
    setYear3(year3);
  }, []);

  //! handle submit
  const handleSubmit = async () => {
    const fields = {
      firstName,
      lastName,
      email,
      phoneNo,
      targetClass,
      targetExam,
      targetYear,
      state,
    };

    if (Object.values(fields).some((field) => !field)) {
      toast.error("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (phoneNo.length !== 10) {
      toast.error("Phone number is not valid");
      return;
    }

    try {
      setShowLoader(true);

      const formattedData = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_no: phoneNo,
        class_name: targetClass,
        goal: targetExam,
        program: targetYear,
        state,
      };

      const response = await axios.post(
        `${tsUrl}/auth/sat/apply`,
        formattedData
      );

      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Successfully Applied for SAT");
        resetForm();
        setIsMsgSent(true);
      }
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      handleError(error);
    } finally {
      setShowLoader(false);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNo("");
    setTargetClass();
    setTargetExam("");
    setTargetYear("");
    setState("");
  };

  const handleError = (error) => {
    if (error.response) {
      if (
        error.response.status === 400 &&
        error.response.data.detail === "Email already exists."
      ) {
        toast("This email already exists.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } else if (error.request) {
      toast.error("No response received from the server.");
    } else {
      toast.error("An error occurred while setting up the request.");
    }
    console.error("Error details:", error);
  };

  return (
    <>
      <div className="bg-white font-Poppins py-10 w-full xl:w-9/12 2xl:w-[1100px] mx-auto  ">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-xl md:text-4xl font-semibold text-darkBlue px-4 md:px-0">
            Apply for Scholarship Admission Test
          </h2>
          <p className="text-sm text-gray-600 px-10 md:px-40 xl:px-40">
            Be in the Top 5%ile and get upto 50% Scholarship
          </p>
        </div>

        <section className=" space-y-10 lg:space-y-0 lg:space-x-10 w-11/12 xl:w-full flex flex-col lg:flex lg:flex-row xl:space-x-20 mx-auto    my-10 ">
          <div className="mx-auto ">
            <Image src={scholar} alt="scholarship-icon"></Image>
          </div>
          <div className=" w-full lg:w-1/2  ">
            <div className="grid grid-cols-2 gap-4 mb-8  ">
              <div className=" space-y-2 text-sm lg:text-sm  ">
                <label className="font-medium text-darkBlue/60" htmlFor="fname">
                  First Name
                </label>
                <input
                  className=" p-2 border  rounded-sm w-full outline-none focus:border focus:border-TechBlue"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className=" space-y-2 text-sm lg:text-sm  ">
                <label className="font-medium text-darkBlue/60" htmlFor="lname">
                  Last Name
                </label>
                <input
                  className=" p-2 border  rounded-sm w-full outline-none focus:border focus:border-TechBlue"
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className=" space-y-2 text-sm lg:text-sm  ">
                <label
                  className="font-medium  text-darkBlue/60"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className=" p-2 border  rounded-sm w-full outline-none focus:border focus:border-TechBlue"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className=" space-y-2 text-sm lg:text-sm  ">
                <label
                  className="font-medium  text-darkBlue/60"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className=" p-2 border  rounded-sm w-full outline-none focus:border focus:border-TechBlue"
                  type="number"
                  value={phoneNo}
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                  required
                />
              </div>
              <div
                className={`space-y-2 text-sm lg:text-sm ${
                  !targetClass ? "text-gray-500 font-normal " : ""
                } `}
              >
                <label
                  className="font-medium  text-darkBlue/60"
                  htmlFor="class"
                >
                  Class
                </label>
                <br />
                <select
                  className="w-full bg-white border  p-2 outline-none  focus:border focus:border-TechBlue  rounded"
                  name="class"
                  id="class"
                  onChange={(e) => {
                    setTargetClass(Number(e.target.value));
                  }}
                  value={targetClass}
                  defaultValue=""
                >
                  <option
                    className=" text-darkBlue/60 p-2 disabled:cursor-not-allowed "
                    value=""
                    disabled
                  >
                    Select Class
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value={9}
                  >
                    Class 9
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value={10}
                  >
                    Class 10
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value={11}
                  >
                    Class 11
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value={12}
                  >
                    Class 12
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value={13}
                  >
                    Class Target 13 (Droppers)
                  </option>
                </select>
              </div>
              <div
                className={`space-y-2 text-sm lg:text-sm ${
                  targetExam === "" ? "text-gray-500 font-normal " : ""
                } `}
              >
                <label className="font-medium  text-darkBlue/60" htmlFor="Exam">
                  Target Exam
                </label>
                <br />
                <select
                  className="w-full bg-white border  p-2 outline-none focus:border focus:border-TechBlue  rounded"
                  name="exam"
                  onChange={(e) => {
                    setTargetExam(e.target.value);
                  }}
                  value={targetExam}
                  id="exam"
                >
                  <option
                    className=" text-darkBlue/60 p-2 disabled:cursor-not-allowed "
                    value=""
                    disabled
                  >
                    Select your goal
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="JEE"
                  >
                    JEE
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="JEE Adv"
                  >
                    JEE Adv.
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="NEET"
                  >
                    NEET
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="FOUNDATION"
                  >
                    Foundation
                  </option>
                </select>
              </div>
              <div
                className={`space-y-2 text-sm lg:text-sm ${
                  targetYear === "" ? "text-gray-500 font-normal " : ""
                } `}
              >
                <label className="font-medium  text-darkBlue/60" htmlFor="year">
                  Target Year
                </label>
                <br />

                <select
                  className="w-full bg-white border  p-2 outline-none focus:border focus:border-TechBlue rounded "
                  name="year"
                  id="year"
                  onChange={(e) => {
                    setTargetYear(e.target.value);
                  }}
                  value={targetYear}
                >
                  <option
                    className="w-full bg-white border  p-2 outline-none "
                    value=""
                    disabled
                  >
                    Select Preffered
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800 "
                    value={year0}
                  >
                    {year0}
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value={year1}
                  >
                    {year1}
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value={year2}
                  >
                    {year2}
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value={year3}
                  >
                    {year3}
                  </option>
                </select>
              </div>
              <div
                className={`space-y-2 text-sm lg:text-sm ${
                  state === "" ? "text-gray-500 font-normal " : ""
                } `}
              >
                <label
                  className="font-medium  text-darkBlue/60"
                  htmlFor="state"
                >
                  State
                </label>
                <br />
                <select
                  className="w-full bg-white border  p-2 outline-none focus:border focus:border-TechBlue  rounded"
                  name="state"
                  id="state"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                >
                  <option
                    className="w-full bg-white border p-2 outline-none"
                    value=""
                    disabled
                  >
                    Select state
                  </option>

                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Andhra Pradesh"
                  >
                    Andhra Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Arunachal Pradesh"
                  >
                    Arunachal Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Assam"
                  >
                    Assam
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Bihar"
                  >
                    Bihar
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Chhattisgarh"
                  >
                    Chhattisgarh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Gujarat"
                  >
                    Gujarat
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Haryana"
                  >
                    Haryana
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Himachal Pradesh"
                  >
                    Himachal Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Jammu and Kashmir"
                  >
                    Jammu and Kashmir
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Goa"
                  >
                    Goa
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Jharkhand"
                  >
                    Jharkhand
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Karnataka"
                  >
                    Karnataka
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Kerala"
                  >
                    Kerala
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Madhya Pradesh"
                  >
                    Madhya Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Maharashtra"
                  >
                    Maharashtra
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Manipur"
                  >
                    Manipur
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Meghalaya"
                  >
                    Meghalaya
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Mizoram"
                  >
                    Mizoram
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Nagaland"
                  >
                    Nagaland
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Odisha"
                  >
                    Odisha
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Punjab"
                  >
                    Punjab
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Rajasthan"
                  >
                    Rajasthan
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Sikkim"
                  >
                    Sikkim
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Tamil Nadu"
                  >
                    Tamil Nadu
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Telangana"
                  >
                    Telangana
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Tripura"
                  >
                    Tripura
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Uttarakhand"
                  >
                    Uttarakhand
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Uttar Pradesh"
                  >
                    Uttar Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="West Bengal"
                  >
                    West Bengal
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Andaman and Nicobar Islands"
                  >
                    Andaman and Nicobar Islands
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Chandigarh"
                  >
                    Chandigarh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Dadra and Nagar Haveli"
                  >
                    Dadra and Nagar Haveli
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Daman and Diu"
                  >
                    Daman and Diu
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Delhi"
                  >
                    Delhi
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Lakshadweep"
                  >
                    Lakshadweep
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2 text-gray-800"
                    value="Puducherry"
                  >
                    Puducherry
                  </option>
                </select>
              </div>
            </div>
            <hr />
            <div className=" my-6 space-y-2 text-sm lg:text-base ">
              <p className="text-gray-400 font-light">
                * Our scholarship exam is held every Sunday for 3 hours which is
                from 10 A.M to 1 P.M{" "}
              </p>
            </div>
            <button
              onClick={handleSubmit}
              disabled={isMsgSent}
              className=" px-2 py-2 text-sm md:text-lg md:px-6 md:py-2.5 bg-TechBlue rounded-md text-white hover:bg-black duration-200 disabled:cursor-not-allowed disabled:hover:bg-TechBlue "
            >
              {showLoader ? (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200 animate-spin dark:text-white fill-blue-800 font-medium"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                <> {isMsgSent ? "Applied" : "Apply Now"}</>
              )}
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Councillor;
