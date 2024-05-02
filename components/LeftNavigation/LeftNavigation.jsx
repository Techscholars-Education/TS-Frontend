'use client'
import React from "react";
import Image from "next/image";
import { usePathname} from "next/navigation";
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
import Link from "next/link";

const LeftNavigation = () => {

  const pathname = usePathname()

  return (
<<<<<<< HEAD
    <nav className="bg-white w-[270px] py-8 px-4 flex flex-col justify-between items-center">
      <div className="mx-auto fixed">
        {/* Ist */}
        <div className="flex items-center justify-center space-x-2">
          <Image className="w-10 h-10" src={Logo} alt="Techscholars-Logo" />
          <h1 className="text-gray-800 font-semibold">TECHSCHOLARS</h1>
=======
    <nav className="min-h-screen bg-slate-50  w-1/5 py-8 px-4 flex flex-col justify-between">
      <div className="mx-auto">
        <div className="flex items-center ">
          <Image
            className="w-12 h-12"
            src={Logo}
            alt="Techscholars-Logo"
          ></Image>
          <h1 className="text-gray-800 font-semibold ">TECHSCHOLARS</h1>
>>>>>>> parent of 1a344dd (Merge branch 'Develop' of https://github.com/Techscholars-Education/TS-Frontend into ankit)
        </div>
        <ul className="mt-20 mx-auto font-Poppins">
          <li className={`flex items-center mb-10 ${pathname === "/home" ? 'text-[#002656]  py-2 bg-slate-100  ':'text-[#8A8A8A]'}`} >
            <FiHome className="mr-2 text-xl" />
            <a href="/home" className="font-semibold hover:text-gray-400">Home</a>
          </li>
          <li className={`flex items-center mb-10 ${pathname === "/my-course"  ? 'text-[#002656] py-2 bg-slate-100':'text-[#8A8A8A]'}`}>
            <FiBookOpen className="mr-2 text-xl" />
            <a href="#" className="font-semibold hover:text-gray-400">My Course</a>
          </li>
          <li className={`flex items-center mb-10 ${pathname === "/test-series"  ? 'text-[#002656] py-2 bg-slate-100':'text-[#8A8A8A]'}`}>
            <FiClipboard className="mr-2 text-xl" />
            <a href="test-series" className="font-semibold hover:text-gray-400">Test Series</a>
          </li>
          <li className={`flex items-center mb-10 ${pathname === "/referral"  ? 'text-[#002656] py-2 bg-slate-100':'text-[#8A8A8A]'}`}>
            <FiUsers className="mr-2 text-xl" />
            <a href="/referral" className="font-semibold hover:text-gray-400">Refer and Earn</a>
          </li>
          <li className={`flex items-center mb-10 ${pathname=== "/feed"  ? 'text-[#002656] py-2 bg-slate-100':'text-[#8A8A8A]'}`}>
            <FiRss className="mr-2 text-xl" />
            <a href="#" className="font-semibold hover:text-gray-400">Feed</a>
          </li>
          <li className={`flex items-center mt-10 ${pathname=== "/community"  ? 'text-[#002656] py-2 bg-slate-100':'text-[#8A8A8A]'}`}>
            <FiMessageCircle className="mr-2 text-xl" />
            <a href="/community" className="font-semibold hover:text-gray-400">Community</a>
          </li>
          <li className={`flex items-center mt-10 ${pathname === "/settings"  ? 'text-[#002656] py-2 bg-slate-100':'text-[#8A8A8A]'}`}>
            <FiSettings className="mr-2 text-xl" />
            <a href="/settings" className="font-semibold hover:text-gray-400">Settings</a>
          </li>
        </ul>
      </div>
      <div>
<<<<<<< HEAD
        <button className="text-white absolute bottom-6 left-12 hover:text-gray-400 flex items-center ">
          <Link href="/" className="flex">
=======
        <button className="text-white ml-8 hover:text-gray-400 flex items-center ">
>>>>>>> parent of 1a344dd (Merge branch 'Develop' of https://github.com/Techscholars-Education/TS-Frontend into ankit)
          <FiLogOut className="mr-2 text-[#E55858] text-xl" />
          
          <span className="text-[#E55858] font-bold ">Sign Out</span>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default LeftNavigation;
