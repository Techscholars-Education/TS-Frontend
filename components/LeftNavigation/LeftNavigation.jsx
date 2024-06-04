"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiBookOpen,
  FiClipboard,
  FiUsers,
  FiRss,
  FiMessageCircle,
  FiSettings,
  FiLogOut,
  FiMail,
} from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Logo from "../../public/Logo.svg";
import Link from "next/link";

import Cookies from "js-cookie";

const LeftNavigation = () => {
  const pathname = usePathname();

  const handleSignOut = () => {
    Cookies.remove("authCookie");
    // Refresh the page
    window.location.reload();
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white w-[20vw] py-6 px-4 pl-2 flex flex-col justify-between items-center">
      <div className="mx-auto fixed">
        {/* Logo */}
        <Link href={"/"} className="flex items-center justify-center space-x-2">
          <Image className="w-10 h-10" src={Logo} alt="Techscholars-Logo" />
          <h1 className="text-gray-800 font-semibold">TECHSCHOLARS</h1>
        </Link>

        {/* Navigation Links */}
        <ul className="mt-12 mx-auto font-Poppins">
          <li className="flex items-center mb-6">
            <FiHome
              className={`mr-2 text-xl ${
                isActive("/dashboard/home") ? "text-[#0079FC]" : "text-gray-500"
              }`}
            />
            <a
              href="/dashboard/home"
              className={`font-semibold ${
                isActive("/dashboard/home")
                  ? "text-[#0079FC]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Home
            </a>
          </li>
          <li className="flex items-center mb-6">
            <FiBookOpen
              className={`mr-2 text-xl ${
                isActive("/dashboard/my-course")
                  ? "text-[#0079FC]"
                  : "text-gray-500"
              }`}
            />
            <a
              href="/dashboard/my-course"
              className={`font-semibold ${
                isActive("/dashboard/my-course")
                  ? "text-[#0079FC]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              My Course
            </a>
          </li>
          <li className="flex items-center mb-6">
            <MdOutlineLibraryBooks
              className={`mr-2 text-xl ${
                isActive("/dashboard/courses") ||
                isActive("/dashboard/courses/neet") ||
                isActive("/dashboard/courses/jee") ||
                isActive("/dashboard/courses/foundation")
                  ? "text-[#0079FC]"
                  : "text-gray-500"
              }`}
            />
            <Link
              href="/dashboard/courses"
              className={`font-semibold ${
                isActive("/dashboard/courses") ||
                isActive("/dashboard/courses/neet") ||
                isActive("/dashboard/courses/jee") ||
                isActive("/dashboard/courses/foundation")
                  ? "text-[#0079FC]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Courses
            </Link>
          </li>
          <li className="flex items-center mb-6">
            <FiClipboard
              className={`mr-2 text-xl ${
                isActive("/dashboard/test") ? "text-[#0079FC]" : "text-gray-500"
              }`}
            />
            <a
              href="/dashboard/test"
              className={`font-semibold ${
                isActive("/dashboard/test")
                  ? "text-[#0079FC]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Test Series
            </a>
          </li>
          <li className="flex items-center mb-6">
            <FiUsers
              className={`mr-2 text-xl ${
                isActive("/dashboard/refer-and-earn")
                  ? "text-[#0079FC]"
                  : "text-gray-500"
              }`}
            />
            <a
              href="/dashboard/refer-and-earn"
              className={`font-semibold ${
                isActive("/dashboard/refer-and-earn")
                  ? "text-[#0079FC]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Refer and Earn
            </a>
          </li>
          <li className="flex items-center mb-6">
            <FiRss
              className={`mr-2 text-xl ${
                isActive("/dashboard/feed") ? "text-[#0079FC]" : "text-gray-500"
              }`}
            />
            <a
              href="/dashboard/feed"
              className={`font-semibold ${
                isActive("/dashboard/feed")
                  ? "text-[#0079FC]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Feed
            </a>
          </li>
          <li className="flex items-center mt-6">
            <FiMessageCircle
              className={`mr-2 text-xl ${
                isActive("/dashboard/community")
                  ? "text-[#0079FC]"
                  : "text-gray-500"
              }`}
            />
            <a
              href="/dashboard/community"
              className={`font-semibold ${
                isActive("/dashboard/community")
                  ? "text-[#0079FC]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Community
            </a>
          </li>
        </ul>
        <div className="mt-12 flex flex-col">
          <p className="text-[12px]">Other</p>
          <li className="flex items-center mt-3 ">
            <FiSettings
              className={`mr-2 text-xl ${
                isActive("/dashboard/settings")
                  ? "text-[#0079FC]"
                  : "text-gray-500"
              }`}
            />
            <a
              href="/dashboard/settings"
              className={`font-semibold ${
                isActive("/dashboard/settings")
                  ? "text-[#0079FC]"
                  : "text-gray-500 hover:text-gray-400"
              }`}
            >
              Settings
            </a>
          </li>
          <button
            onClick={handleSignOut}
            className="text-white  bottom-6 mt-3 left-12 hover:text-gray-400 flex items-center"
          >
            <FiLogOut className="mr-2 text-[#E55858] text-xl" />
            <span className="text-[#E55858] font-bold">Sign Out</span>
          </button>
        </div>
        <div className="relative flex flex-col mt-8 justify-center items-center align-middle bg-[#00003E] text-white rounded-xl h-32 w-48">
          <div className="absolute -top-6 flex justify-center items-center w-12 h-12 bg-[#00003E] text-white rounded-full border-4 border-white">
            <FiMail className="h-6 w-6" />
          </div>
          <div className="">
            <p className="text-sm text-center">Email us at</p>
            <p className="text-sm mt-1.5">ask@techscholars.in</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftNavigation;
