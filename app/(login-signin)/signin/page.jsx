"use client";
import Sidenavigation from "@/components/Sidenavigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const page = () => {
  const [userData, setUserData] = useState({
    email: "",
    fNmae: "",
    lName: "",
    mobNumber: "",
    password: "",
  });
  const [progress, setProgress] = React.useState(2);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handChange = (e) => {
    setUserData(e.target.value);
  };

  const handleSubmit = () => {
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
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
                    onChange={handChange}
                  />
                </div>
                <div className="mb-4 flex">
                  <input
                    className="shadow appearance-none border rounded w-full mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="First name"
                    value={userData.fNmae}
                    onChange={handChange}
                  />
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Last name"
                    value={userData.lName}
                    onChange={handChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="number"
                    placeholder="Add your phone number"
                    value={userData.mobNumber}
                    onChange={handChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="password"
                    value={userData.password}
                    onChange={handChange}
                  />
                </div>

                <div className="flex flex-col  items-center justify-between">
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      height="20"
                      variant="determinate"
                      value={progress}
                      style={{
                        height: "4px",
                        borderRadius: "10px",
                        color: "#041C3B",
                        backgroundColor: "#DCDCDC",
                      }}
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-[#898989] text-[12px] font-[400]">
                        Your password is great. Nice work!
                      </span>
                      <span className="text-[#898989] text-[12px] font-[400]">
                        Strong
                      </span>
                    </div>
                  </Box>

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
                    type="button"
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

export default page;
