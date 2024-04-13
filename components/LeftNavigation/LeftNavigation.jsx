import Image from "next/image";
import React from "react";
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
    <nav className="h-[100vh] bg-slate-50  w-64 py-8 px-4 flex flex-col justify-between">
      <div className="ml-8">
        <div className="flex">
          <Image className="w-8 h-8" src={Logo}></Image>
          <h1 className="text-[#1A1A1A] font-[500] mb-4 ml-2 mt-1">
            TECHSCHOLARS
          </h1>
        </div>
        <ul className="mt-20">
          <li className="flex items-center mb-10">
            <FiHome className="mr-2 text-[20px]" />
            <a
              href="#"
              className="text-[#8A8A8A] font-[700] hover:text-gray-400"
            >
              Home
            </a>
          </li>
          <li className="flex items-center mb-10">
            <FiBookOpen className="mr-2 text-[20px]" />
            <a
              href="#"
              className="text-[#8A8A8A] font-[700]  hover:text-gray-400"
            >
              My Course
            </a>
          </li>
          <li className="flex items-center mb-10">
            <FiClipboard className="mr-2 text-[20px]" />
            <a
              href="#"
              className="text-[#8A8A8A] font-[700]  hover:text-gray-400"
            >
              Test Series
            </a>
          </li>
          <li className="flex items-center mb-10">
            <FiUsers className="mr-2 text-[20px]" />
            <a
              href="#"
              className="text-[#8A8A8A] font-[700]  hover:text-gray-400"
            >
              Refer and Earn
            </a>
          </li>
          <li className="flex items-center mb-10">
            <FiRss className="mr-2 text-[20px]" />
            <a
              href="#"
              className="text-[#8A8A8A] font-[700]  hover:text-gray-400"
            >
              Feed
            </a>
          </li>
          <li className="flex items-center mt-10">
            <FiMessageCircle className="mr-2 text-[20px]" />
            <a
              href="#"
              className="text-[#8A8A8A]  font-[700] hover:text-gray-400"
            >
              Community
            </a>
          </li>
          <li className="flex items-center mt-10">
            <FiSettings className="mr-2 text-[20px]" />
            <a
              href="#"
              className="text-[#8A8A8A] font-[700]  hover:text-gray-400"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button className="text-white ml-8 hover:text-gray-400 flex items-center ">
          <FiLogOut className="mr-2 text-[#E55858] text-[20px]" />
          <span className="text-[#E55858] font-[700] ">Sign Out</span>
        </button>
      </div>
    </nav>
  );
};

export default LeftNavigation;
