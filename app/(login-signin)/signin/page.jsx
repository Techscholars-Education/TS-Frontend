"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosEyeOff } from "react-icons/io";
import signin from "@/public/Auth/signin.svg";
import useSignup from "@/hooks/useSignup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import gif1 from "@/public/Ts-Loader.gif";
import axios from "axios";

const Page = () => {
  // ! MAIN FORM STATE
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    phoneno: "",
    email: "",
    password: "",
  });

  // ! HELPER STATES
  const [domLoaded, setDomLoaded] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [activationMsg, setActivationMsg] = useState(false);
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [emailResent, setEmailResent] = useState(false);

  // ! USE SIGNUP HOOK
  const { loading, signup } = useSignup();

  // ! DOUBLE CHECK PASSWORD
  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setIsPasswordMatch(confirmPasswordValue === inputs.password);
  };

  // ! MAIN SUBMIT BUTTON
  const submitForm = () => {
    handleSubmit();
  };

  // ! SUBMIT USER DATA ( IF SUCCESS -> START TIMER FOR RESEND VERIFICATION EMAIL)
  const handleSubmit = async () => {
    if (confirmPassword !== inputs.password) {
      setIsPasswordMatch(false);
      return;
    }
    try {
      const res = await signup(inputs);

      if (res) {
        setActivationMsg(true);
        startTimer();
      }
    } catch (error) {
      setInputs({});
      console.log("Some error occured");
    }
  };

  // ! TRACK THE STATUS OF DOM (FOR INITIAL LOADER)
  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 2000);
  }, []);

  // ! FOR RESEND VERIFICATION TIMER
  useEffect(() => {
    let interval = null;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  //! START THE TIMER
  const startTimer = () => {
    setIsRunning(true);
    setTime(60);
  };

  // ! POST REQUEST TO RESEND ACCOUNT ACTIVATION LINK
  const resendEmail = async (uEmail) => {
    try {
      await axios.post(
        `https://api.techscholars.co.in/auth/v1/resend/email?email=${uEmail}`
      );
      console.log(uEmail);
      setEmailResent(true);
      setInputs({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {domLoaded ? (
        <>
          <ToastContainer />
          <section className="  flex justify-between items-center lg:overflow-hidden  h-screen w-full ">
            <div className=" w-full px-4 py-12 lg:w-1/2 h-screen lg:p-12 lg:mx-20   ">
              <div>
                <Link
                  href="/"
                  className="rounded-full fixed top-10 left-10 border border-black/50 h-12 w-12 flex justify-center items-center"
                >
                  <IoIosArrowRoundBack className="text-3xl text-gray-700" />
                </Link>
              </div>

              <div className=" lg:h-[75vh] h-screen lg:mt-8 flex flex-col justify-center items-center font-Poppins">
                <div className=" max-w-xl lg:max-w-md px-4 md:px-10 mx-auto bg-gray-50 shadow-md  w-full rounded-xl lg:h-screen">
                  <div className="py-4">
                    <h3 className=" text-lg md:text-2xl font-Poppins font-semibold">
                      Register your Account
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm pt-2">
                      Hey there, You are at the right place
                    </p>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-3.5 outline-none "
                      placeholder="johndoe@example.com"
                      required
                      value={inputs.email}
                      onChange={(e) =>
                        setInputs({ ...inputs, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 flex gap-2">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-500  "
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-3.5 outline-none "
                        placeholder="John"
                        required
                        value={inputs.first_name}
                        onChange={(e) =>
                          setInputs({ ...inputs, first_name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block mb-2 text-sm font-medium text-gray-500  "
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-3.5 outline-none "
                        placeholder="Doe"
                        required
                        value={inputs.last_name}
                        onChange={(e) =>
                          setInputs({ ...inputs, last_name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      Phone Number
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-3.5 outline-none "
                      placeholder="XXXXXXXXXX"
                      required
                      value={inputs.phoneno}
                      onChange={(e) =>
                        setInputs({ ...inputs, phoneno: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      Password
                    </label>
                    <div className="flex justify-end items-center border border-gray-300 rounded-lg focus-within:border-black focus-within:border ">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="bg-gray-50 text-gray-700 text-sm focus:ring-0 focus:outline-none block w-full px-2 rounded-lg  py-3.5"
                        placeholder="@Example$1234"
                        required
                        onChange={(e) =>
                          setInputs({ ...inputs, password: e.target.value })
                        }
                      />
                      <div
                        className="cursor-pointer mr-2"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? (
                          <IoIosEye className="w-10 rounded-xl h-full py-1 text-gray-500" />
                        ) : (
                          <IoIosEyeOff className="w-10 rounded-xl h-full py-1 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-500 ">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-3.5 outline-none "
                      placeholder="@Example$1234"
                      required
                      onChange={handleConfirmPasswordChange}
                    />
                  </div>
                  <div className="py-2 font-Poppins">
                    <p className="text-xs md:text-sm text-red-600 font-normal">
                      {!isPasswordMatch && "Passwords does not match"}
                    </p>
                  </div>
                  {activationMsg ? (
                    <>
                      <div className=" bg-green-100 rounded-xl py-4 pl-4">
                        <h5 className="text-black/80 text-sm md:text-base font-medium">
                          Activation required
                        </h5>
                        <p className=" text-xs md:text-sm text-gray-700">
                          Account activation link has been send to your
                          registered email id.
                        </p>
                        <div className=" text-xs md:text-sm text-gray-700">
                          Didn&apos;t recieve activation link?{" "}
                          <button
                            disabled={isRunning || emailResent}
                            onClick={() => {
                              resendEmail(inputs.email);
                            }}
                            className=" py-1 px-2 bg-green-600 text-white rounded-md disabled:bg-green-400 disabled:cursor-not-allowed text-xs"
                          >
                            {emailResent
                              ? "Link sent"
                              : `Resend link ${
                                  isRunning ? `in ${time} sec` : ""
                                }`}
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={submitForm}
                        type="submit"
                        className={`bg-TechBlue text-white rounded-full py-3  mb-4 text-sm md:text-md w-full font-base mt-1 hover:bg-black transition-all ease-in-out duration-200 flex items-center justify-center ${
                          !isPasswordMatch
                            ? "cursor-not-allowed hover:bg-TechBlue"
                            : ""
                        } `}
                      >
                        {loading ? (
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
                          "Create"
                        )}
                      </button>
                    </>
                  )}
                  <div className="mb-10 mt-6 text-xs md:text-sm flex">
                    <p className="text-gray-600">Already have an account ?</p>{" "}
                    <Link href="/login" className="text-TechBlue mx-2">
                      Login
                    </Link>
                  </div>
                </div>
              </div>

              {/* Privacy policy container */}
              <div className="font-Poppins flex justify-between items-center h-[20vh] lg:mt-6">
                <div>
                  <Link
                    href="/privacy"
                    className="text-gray-600 text-xs md:text-sm underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <p className="text-gray-600 text-xs md:text-sm underline underline-offset-2">
                    All rights reserved &copy; 2024
                  </p>
                </div>
              </div>
            </div>

            <div className=" hidden lg:block  ">
              <div className="h-[100vh] w-full">
                <Image
                  src={signin}
                  alt="signin-svg"
                  className="h-screen w-full"
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <Image src={gif1} alt="gif-loader" className="w-[180px]" />
        </div>
      )}
    </>
  );
};

export default Page;
