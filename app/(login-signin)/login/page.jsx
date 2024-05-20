"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import Google from "@/public/Auth/Google.png";
import Login from "@/public/Auth/login.svg";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLogin from "@/hooks/useLogin";



import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

import { useGoogleLogin } from '@react-oauth/google';

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")

  const [authg, setAuthg] = useState("")

  const router = useRouter()


  // const validateEmail = (email) => {
  //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return re.test(String(email).toLowerCase());
  // };

  const {login} = useLogin()

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (!username) {
      toast.error("Email is required");
      return;
    }
    // if (!validateEmail(email)) {
    //   toast.error("Invalid email format");
    //   return;
    // }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // toast.success("Login successful");

    // Here you can add further logic for successful login, like API call

    await login(username,password)

    
    router.replace("/dashboard/home")


  
  };


  const glogin = useGoogleLogin({
    onSuccess: tokenResponse => setAuthg(tokenResponse.access_token)

  });


  useEffect(()=> {
    if(authg==='') return
    if(authg){
      const sessionExpirationTime = 5 * 60 * 60
      Cookies.set('authCookie',authg,{ expires: sessionExpirationTime } )

      router.push("/dashboard/home")

    }
  },[authg])



  return (
    <>
      <ToastContainer />
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
                  Welcome to Techscholars
                </h3>
                <p className="text-gray-500 text-xs md:text-sm pt-2">
                  Login to your account
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
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="johndoe@example.com"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="text-xs md:text-sm flex justify-end my-2">
                <Link href="/signin" className="text-red-500 mx-2">
                  Forgot password ?
                </Link>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-TechBlue text-white rounded-full py-3 text-sm md:text-md w-full font-base mt-2"
              >
                Login
              </button>
              <button
               onClick={glogin}
                className="bg-gray-100 text-darkBlue rounded-full py-2 text-sm md:text-md w-full font-normal mt-4 flex items-center justify-center "
              >
                <Image src={Google} className="w-8" alt="google-logo" /> Google
              </button>
              <div className="mb-10 mt-6 text-xs md:text-sm flex">
                <p className="text-gray-600">Do not have an account ?</p>{" "}
                <Link href="/signin" className="text-TechBlue mx-2">
                  Register
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
          <Image src={Login} alt="login-svg" />
        </div>
      </section>
    </>
  );
};

export default Page;
