"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import CouncillorPoster from "../../public/Councillor/CouncillorPoster.svg";
import Footer from "../Footer";
import axios from "axios";
import { tsUrl } from "@/config";

const Councillor = () => {
  // ! STATES
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [targetClass, setTargetClass] = useState();
  const [goal, setGoal] = useState("");
  const [program, setProgram] = useState("");
  const [state, setState] = useState("");
  const [timing, setTiming] = useState("");

  const [showLoader, setShowLoader] = useState(false);
  const [disableBTN, setDisableBTN] = useState(true);

  //! Validate email function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  //! Use effect to handle button enabling/disabling
  useEffect(() => {
    if (
      firstName &&
      lastName &&
      email &&
      phoneNo &&
      targetClass &&
      goal &&
      program &&
      state &&
      timing
    ) {
      setDisableBTN(false);
    } else {
      setDisableBTN(true);
    }
  }, [
    firstName,
    lastName,
    email,
    phoneNo,
    targetClass,
    goal,
    program,
    state,
    timing,
  ]);

  // Handle submit function
  const handleSubmit = async () => {
    // Validation checks
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
      const scheduleDate = new Date();
      scheduleDate.setHours(timing.split(" ")[0]);
      scheduleDate.setMinutes(0);
      scheduleDate.setSeconds(0);

      const formattedData = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_no: phoneNo,
        class_name: targetClass,
        goal: goal.toLowerCase(),
        program,
        state,
        schedule: scheduleDate.toISOString(),
      };

      const response = await axios.post(
        `${tsUrl}/auth/callcouncillor/apply`,
        formattedData
      );

      if (response.status === 200) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Our Team will connect with you soon");

        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNo("");
        setTargetClass();
        setGoal("");
        setProgram("");
        setState("");
        setTiming("");
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          `An error occurred: ${
            error.response.data.message || "Please try again later."
          }`
        );
      } else if (error.request) {
        toast.error("No response received from server. Please try again.");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      console.error("Error submitting form:", error);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <>
      <div className="bg-white font-Poppins py-10 w-full xl:w-9/12 2xl:w-[1100px] mx-auto  ">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-xl md:text-4xl font-semibold text-darkBlue px-4 md:px-0">
            Get in touch with our councillor
          </h2>
          <p className="text-sm text-gray-600 px-10 md:px-40 xl:px-96">
            Set your future milestones with us.
          </p>
        </div>

        <section className=" space-y-10 lg:space-y-0 lg:space-x-10 w-11/12 xl:w-full flex flex-col lg:flex lg:flex-row xl:space-x-20 mx-auto">
          <div className="mx-auto ">
            <Image src={CouncillorPoster} alt="councillor-icon"></Image>
          </div>
          <div className=" w-full lg:w-1/2  ">
            <div className="grid grid-cols-2 gap-4  ">
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg  ">
                <label htmlFor="fname">
                  First Name <span className="text-red-500">*</span>{" "}
                </label>
                <input
                  className=" p-2 border border-gray-400 w-full outline-none"
                  placeholder="Enter your first name"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className=" space-y-2  text-sm lg:text-base xl:text-lg">
                <label htmlFor="lname">
                  Last Name <span className="text-red-500">*</span>{" "}
                </label>
                <input
                  className=" p-2 border border-gray-400 w-full outline-none"
                  placeholder="Enter your last name"
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg ">
                <label htmlFor="email">
                  Email <span className="text-red-500">*</span>{" "}
                </label>
                <input
                  className=" p-2 border border-gray-400 w-full outline-none"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className=" space-y-2  text-sm lg:text-base xl:text-lg">
                <label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>{" "}
                </label>
                <input
                  className=" p-2 border border-gray-400 w-full outline-none"
                  placeholder="Enter your phone number"
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                  type="number"
                  value={phoneNo}
                  required
                />
              </div>
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg ">
                <label htmlFor="class">
                  Class <span className="text-red-500">*</span>{" "}
                </label>
                <br />
                <select
                  className="w-full bg-white border border-gray-400 p-2 text-sm lg:text-base xl:text-lg "
                  name="class"
                  onChange={(e) => {
                    setTargetClass(Number(e.target.value));
                  }}
                  value={targetClass}
                  id="class"
                  defaultValue=""
                >
                  <option
                    className="bg-white hover:bg-gray-200 p-2 disabled:cursor-not-allowed"
                    value=""
                    disabled
                  >
                    Select a class
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value={9}>
                    Class 9
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value={10}>
                    Class 10
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value={11}>
                    Class 11
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value={12}>
                    Class 12
                  </option>
                  <option className="bg-white hover:bg-gray-200 p-2" value={13}>
                    Class Target 13 (Droppers)
                  </option>
                </select>
              </div>
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg ">
                <label htmlFor="goal">
                  Goal <span className="text-red-500">*</span>{" "}
                </label>
                <br />
                <select
                  className="w-full bg-white border border-gray-400 p-2 text-sm lg:text-base xl:text-lg "
                  name="goal"
                  id="goal"
                  onChange={(e) => {
                    setGoal(e.target.value);
                  }}
                  value={goal}
                >
                  <option
                    className="bg-white hover:bg-gray-200 p-2 disabled:cursor-not-allowed"
                    value=""
                    disabled
                  >
                    Select a goal
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Doctor"
                  >
                    Doctor
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Engineer"
                  >
                    Engineer
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Entrepreneur"
                  >
                    Entrepreneur
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Teacher"
                  >
                    Teacher
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Defence"
                  >
                    Defence
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Others"
                  >
                    Others
                  </option>
                </select>
              </div>
              <div className=" space-y-2  text-sm lg:text-base xl:text-lg">
                <label htmlFor="program">
                  Preferred Programs <span className="text-red-500">*</span>{" "}
                </label>
                <br />
                <select
                  className="w-full bg-white border border-gray-400 p-2  text-sm lg:text-base xl:text-lg"
                  name="program"
                  value={program}
                  id="program"
                  onChange={(e) => {
                    setProgram(e.target.value);
                  }}
                >
                  <option
                    className="bg-white hover:bg-gray-200 p-2 disabled:cursor-not-allowed"
                    value=""
                    disabled
                  >
                    Select a program
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="NEET"
                  >
                    NEET
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="JEE"
                  >
                    JEE
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="JEE Adv"
                  >
                    JEE Adv.
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Foundation"
                  >
                    Foundation
                  </option>
                </select>
              </div>
              <div className=" space-y-2 text-sm lg:text-base xl:text-lg ">
                <label htmlFor="state">
                  State <span className="text-red-500">*</span>{" "}
                </label>
                <br />
                <select
                  className="w-full bg-white border border-gray-400 p-2 text-sm lg:text-base xl:text-lg"
                  name="state"
                  id="state"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                >
                  <option
                    className="bg-white hover:bg-gray-200 p-2 disabled:cursor-not-allowed"
                    value=""
                    disabled
                  >
                    Select the state
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Andhra Pradesh"
                  >
                    Andhra Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Arunachal Pradesh"
                  >
                    Arunachal Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Assam"
                  >
                    Assam
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Bihar"
                  >
                    Bihar
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Chhattisgarh"
                  >
                    Chhattisgarh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Gujarat"
                  >
                    Gujarat
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Haryana"
                  >
                    Haryana
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Himachal Pradesh"
                  >
                    Himachal Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Jammu and Kashmir"
                  >
                    Jammu and Kashmir
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Goa"
                  >
                    Goa
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Jharkhand"
                  >
                    Jharkhand
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Karnataka"
                  >
                    Karnataka
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Kerala"
                  >
                    Kerala
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Madhya Pradesh"
                  >
                    Madhya Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Maharashtra"
                  >
                    Maharashtra
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Manipur"
                  >
                    Manipur
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Meghalaya"
                  >
                    Meghalaya
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Mizoram"
                  >
                    Mizoram
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Nagaland"
                  >
                    Nagaland
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Odisha"
                  >
                    Odisha
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Punjab"
                  >
                    Punjab
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Rajasthan"
                  >
                    Rajasthan
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Sikkim"
                  >
                    Sikkim
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Tamil Nadu"
                  >
                    Tamil Nadu
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Telangana"
                  >
                    Telangana
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Tripura"
                  >
                    Tripura
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Uttarakhand"
                  >
                    Uttarakhand
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Uttar Pradesh"
                  >
                    Uttar Pradesh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="West Bengal"
                  >
                    West Bengal
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Andaman and Nicobar Islands"
                  >
                    Andaman and Nicobar Islands
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Chandigarh"
                  >
                    Chandigarh
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Dadra and Nagar Haveli"
                  >
                    Dadra and Nagar Haveli
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Daman and Diu"
                  >
                    Daman and Diu
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Delhi"
                  >
                    Delhi
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Lakshadweep"
                  >
                    Lakshadweep
                  </option>
                  <option
                    className="bg-white hover:bg-gray-200 p-2"
                    value="Puducherry"
                  >
                    Puducherry
                  </option>
                </select>
              </div>
            </div>
            <div className=" my-5 space-y-2 text-sm lg:text-base xl:text-lg">
              <label htmlFor="fname">
                Pick a slot for our councillor to call you{" "}
                <span className="text-red-500">*</span>{" "}
              </label>
              <select
                className="w-full bg-white border border-gray-400 p-2 text-sm lg:text-base xl:text-lg "
                name="callTiming"
                id="callTiming"
                value={timing}
                onChange={(e) => {
                  setTiming(e.target.value);
                }}
              >
                <option
                  className="bg-white hover:bg-gray-200 p-2 disabled:cursor-not-allowed"
                  value=""
                  disabled
                >
                  Select the timing
                </option>
                <option
                  className="bg-white hover:bg-gray-200 p-2"
                  value="10 AM"
                >
                  10 AM
                </option>
                <option
                  className="bg-white hover:bg-gray-200 p-2"
                  value="12 NOON"
                >
                  12 NOON
                </option>
                <option className="bg-white hover:bg-gray-200 p-2" value="2 PM">
                  2 PM
                </option>
                <option className="bg-white hover:bg-gray-200 p-2" value="4 PM">
                  4 PM
                </option>
              </select>
            </div>
            <div className="mb-4 font-medium">
              NOTE:
              <span className="text-red-600"> All fields are required.</span>
            </div>
            <button
              onClick={handleSubmit}
              disabled={showLoader || disableBTN}
              className=" px-2 py-2 text-sm md:text-lg md:px-4 md:py-3 bg-TechBlue rounded text-white hover:bg-black duration-200 disabled:bg-blue-200 disabled:text-red-500 disabled:cursor-not-allowed"
            >
              {showLoader ? (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200 animate-spin dark:text-white fill-blue-800"
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
                "Schedule a Call"
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
