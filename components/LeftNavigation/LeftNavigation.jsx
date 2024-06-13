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
  FiLogOut,
  FiMail,
  FiLock,
} from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Tooltip, Button, Box } from "@mui/material";
import Logo from "../../public/Logo.svg";
import Link from "next/link";
import Cookies from "js-cookie";

const LeftNavigation = () => {
  const pathname = usePathname();

  const handleSignOut = () => {
    Cookies.remove("access_token");
    localStorage.removeItem("course-storage");
    localStorage.removeItem("cookie-storage");
    localStorage.removeItem("profile-storage");
    // Refresh the page
    window.location.reload();
    window.location.assign("/");
  };

  const isActive = (path) => pathname === path;

  const lockedPaths = [
   
    "/dashboard/refer-and-earn",
    "/dashboard/feed",
    "/dashboard/community",
  ];

  return (
    <nav className="bg-white w-[20vw] py-6 px-4 pl-2 flex flex-col justify-between items-center">
      <div className="mx-auto fixed">
        {/* Logo */}
        <Link href={"/dashboard/my-course"} className="flex items-center justify-center space-x-2">
          <Image className="w-10 h-10" src={Logo} alt="Techscholars-Logo" />
          <h1 className="text-gray-800 font-semibold">TECHSCHOLARS</h1>
        </Link>

      
        <ul className="mt-12 mx-auto font-Poppins">
          {[
            { path: "/dashboard/home", icon: FiHome, label: "Home" },
            { path: "/dashboard/my-course", icon: FiBookOpen, label: "My Course" },
            { path: "/dashboard/courses", icon: MdOutlineLibraryBooks, label: "Courses" },
            { path: "/dashboard/test/testdetail", icon: FiClipboard, label: "Test Series" },
            { path: "/dashboard/refer-and-earn", icon: FiUsers, label: "Refer and Earn" },
            { path: "/dashboard/feed", icon: FiRss, label: "Feed" },
            { path: "/dashboard/community", icon: FiMessageCircle, label: "Community" },
          ].map(({ path, icon: Icon, label }) => (
            <li key={path} className="flex items-center mb-6">
              <Tooltip
                title={lockedPaths.includes(path) ? "This feature is locked as of now. Coming soon!" : ""}
                placement="right"
                arrow
              >
                <Box
                  component="span"
                  className={`flex items-center ${lockedPaths.includes(path) ? "blur-[1px] cursor-not-allowed" : ""}`}
                >
                  <Icon
                    className={`mr-2 text-xl ${isActive(path) ? "text-[#0079FC]" : "text-gray-500"}`}
                  />
                  <Link
                    href={lockedPaths.includes(path) ? "#" : path}
                    className={`font-semibold flex items-center ${
                      isActive(path) ? "text-[#0079FC]" : "text-gray-500 hover:text-gray-400"
                    }`}
                  >
                    {label}
                    {lockedPaths.includes(path) && <FiLock className="ml-2 text-gray-500" />}
                  </Link>
                </Box>
              </Tooltip>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col">
          
          <Button
            onClick={handleSignOut}
            className="text-white  hover:text-gray-400 "
            startIcon={<FiLogOut className="text-[#E55858] text-xl" />}
          >
            <span className="text-[#E55858] font-bold mr-20">Sign Out</span>
          </Button>
        </div>
        
        <div className="relative flex flex-col mt-8 justify-center items-center align-middle bg-[#00003E] text-white rounded-xl h-32 w-48">
          <div className="absolute -top-6 flex justify-center items-center w-12 h-12 bg-[#00003E] text-white rounded-full border-4 border-white">
            <FiMail className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-center">Email us at</p>
            <p className="text-sm mt-1.5">ask@techscholars.in</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftNavigation;
