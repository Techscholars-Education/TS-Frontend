"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import Google from "@/public/Auth/Google.png";
import signin from "@/public/Auth/signin.svg";
const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <section className="  flex justify-between items-center ">
        <div className=" w-full lg:w-1/2 h-screen p-12   mx-auto ">
          <div>
            <Link
              href="/"
              className="rounded-full fixed top-10 left-10 border border-black/50 h-12 w-12 flex justify-center items-center"
            >
              <IoIosArrowRoundBack className="text-3xl text-gray-700" />
            </Link>
          </div>

          <div className=" h-screen  flex flex-col justify-center items-center font-Poppins">
            <form className=" max-w-xl lg:max-w-md px-10 mx-auto bg-gray-50 shadow-md  w-full rounded-xl">
              <div className="py-10">
                <h3 className=" text-lg md:text-2xl font-Poppins font-semibold">
                  Register your Account
                </h3>
                <p className="text-gray-500 text-xs md:text-sm pt-2">
                  Hey there, You are at the right place
                </p>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-500  "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-500  "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-500  "
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="XXXXXXXXXX"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-500 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="@Example$1234"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-TechBlue text-white rounded-full py-3 text-sm md:text-md w-full font-base mt-2"
              >
                Create
              </button>
              <button
                type="submit"
                className="bg-gray-100 text-darkBlue rounded-full py-2 text-sm md:text-md w-full font-normal mt-4 flex items-center justify-center "
              >
                <Image src={Google} className="w-8" alt="google-logo" /> Google
              </button>
              <div className="mb-10 mt-6 text-xs md:text-sm flex">
                <p className="text-gray-600">Already have an account ?</p>{" "}
                <Link href="/login" className="text-TechBlue mx-2">
                  Login
                </Link>
              </div>
            </form>
          </div>

          <div className="font-Poppins flex justify-between pb-10 items-center">
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

        <div className=" hidden lg:block h-screen">
          <Image src={signin} alt="signin-svg" />
        </div>
      </section>
    </>
  );
};

export default Page;
