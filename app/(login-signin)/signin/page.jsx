'use client'
import React, { useState } from "react";
import Sidenavigation from "@/components/Sidenavigation";
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { signIn } from 'next-auth/react';
import axios from "axios";

const Page = () => {
  const [userData, setUserData] = useState({
    email: "",
    fName: "",
    lName: "",
    password: "",
    phoneno: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [id]: value,
    }));

    if (id === "password") {
      const complexity = calculatePasswordComplexity(value);
      setProgress(complexity);
    }
  };

  const calculatePasswordComplexity = (password) => {
    const length = password.length;
    if (length <= 4) return 20;
    if (length <= 8) return 50;
    return 100;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://api.techscholars.co.in/auth/v1/signup", {
        first_name: userData.fName,
        email: userData.email,
        password: userData.password,
        last_name: userData.lName,
        phoneno: userData.phoneno
      });
      console.log(response.data);
      console.log('Signup successful');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <div className="flex w-full h-screen font-Poppins">
        <Sidenavigation />
        <div className="flex flex-col justify-center items-center h-screen w-full ">
          <nav className="flex w-full justify-end pt-12 ">
            <span>Already have an account?</span>
            <a href="/login" className="font-lg font-semibold mr-10 ml-2">
              Login
            </a>
          </nav>
          <div className="flex flex-col justify-center items-center h-screen w-full">
            <div className=" w-[568] h-[418] p-8">
              <form className=" px-8 pt-6 mb-4 h-[463px]  w-[418px] ">
                <h1 className="mb-6 text-[24px] font-[600]">Sign Up</h1>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 flex">
                  <input
                    className="shadow appearance-none border rounded w-full mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="fName"
                    type="text"
                    placeholder="First name"
                    value={userData.fName}
                    onChange={handleChange}
                  />
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lName"
                    type="text"
                    placeholder="Last name"
                    value={userData.lName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 relative">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                  <span
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                  </span>
                </div>
                {userData.password && (
                  <div className="mb-4">
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
                        style={{
                          height: "4px",
                          borderRadius: "10px",
                          color: progress < 50 ? "#FF0000" : progress < 100 ? "#FFA500" : "#008000",
                          backgroundColor: "#DCDCDC",
                        }}
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-[#898989] text-[12px] font-[400]">
                          {progress < 50 ? "Your password is Weak" : progress < 100 ? "Medium" : "Your password is great. Nice work!"}
                        </span>
                        <span className="text-[#898989] text-[12px] font-[400]">
                          {progress === 0 ? "" : progress + "%"}
                        </span>
                      </div>
                    </Box>
                  </div>
                )}
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneno"
                    type="tel"
                    placeholder="Phone Number"
                    value={userData.phoneno}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col  items-center justify-between">
                  <button
                    className="bg-[#FFE01B]  mt-5 w-full font-medium py-2 px-4 rounded"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Sign In
                  </button>
                  <div className="flex w-full  mt-5">
                    <hr className="w-40 h-px my-3 bg-[#DCDCDC] border-0" />
                    <span className=" mx-4 text-[#DCDCDC]">or</span>
                    <hr className="w-40 h-px my-3 bg-[#DCDCDC] border-0" />
                  </div>
                  <button
                    className="flex items-center ml-4 font-medium py-2 mt-4 border-2 px-12 border-[#DCDCDC] rounded-md"
                    type="button" onClick={() => signIn('google')}
                  >
                    <FcGoogle className="mr-2" />
                    Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
