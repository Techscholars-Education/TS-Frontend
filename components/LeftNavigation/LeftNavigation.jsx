import React from "react";
import Image from "next/image";
import {
  FiHome,
  FiBookOpen,
  FiClipboard,
  FiUsers,
  FiRss,
  FiMessageCircle,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import Logo from "../../public/Logo.svg";
const LeftNavigation = () => {
  return (
    <nav className=" bg-slate-50   w-[16%] py-8 px-4 flex flex-col justify-between items-center">
      <div className="mx-auto fixed  ">
        {/* Ist */}
        <div className="flex items-center  justify-center space-x-2 ">
          <Image
            className="w-10 h-10"
            src={Logo}
            alt="Techscholars-Logo"
          ></Image>
          <h1 className="text-gray-800 font-semibold ">TECHSCHOLARS</h1>
        </div>

        {/* IInd */}
        <ul className="mt-20 mx-auto font-Poppins">
          <li className="flex items-center mb-10">
            <FiHome className="mr-2 text-xl" />
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-gray-400"
            >
              Home
            </a>
          </li>
          <li className="flex items-center mb-10">
            <FiBookOpen className="mr-2 text-xl" />
            <a
              href="#"
              className="text-gray-500 font-semibold  hover:text-gray-400"
            >
              My Course
            </a>
          </li>
          <li className="flex items-center mb-10">
            <FiClipboard className="mr-2 text-xl" />
            <a
              href="#"
              className="text-gray-500 font-semibold  hover:text-gray-400"
            >
              Test Series
            </a>
          </li>
          <li className="flex items-center mb-10">
            <FiUsers className="mr-2 text-xl" />
            <a
              href="#"
              className="text-gray-500 font-semibold  hover:text-gray-400"
            >
              Refer and Earn
            </a>
          </li>
          <li className="flex items-center mb-10">
            <FiRss className="mr-2 text-xl" />
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-gray-400"
            >
              Feed
            </a>
          </li>
          <li className="flex items-center mt-10">
            <FiMessageCircle className="mr-2 text-xl" />
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-gray-400"
            >
              Community
            </a>
          </li>
          <li className="flex items-center mt-10">
            <FiSettings className="mr-2 text-xl" />
            <a
              href="#"
              className="text-gray-500 font-semibold  hover:text-gray-400"
            >
              Settings
            </a>
          </li>
        </ul>

        {/* 3rd */}
      </div>
      <div>
        <button className="text-white absolute bottom-6 left-12  hover:text-gray-400 flex items-center ">
          <FiLogOut className="mr-2 text-[#E55858] text-xl" />
          <span className="text-[#E55858] font-bold ">Sign Out</span>
        </button>
      </div>
    </nav>
  );
};

export default LeftNavigation;