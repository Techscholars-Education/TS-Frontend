"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBookOpen, FiClipboard, FiUsers, FiRss, FiMessageCircle, FiSettings, FiLogOut } from "react-icons/fi";
import Logo from "../../public/Logo.svg";

const LeftNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="min-h-screen bg-slate-50  w-1/5 py-8 px-4 flex flex-col justify-between">
      <div className="mx-auto">
        <div className="flex items-center ">
          <Image
            className="w-12 h-12"
            src={Logo}
            alt="Techscholars-Logo"
          />
          <h1 className="text-gray-800 font-semibold ">TECHSCHOLARS</h1>
        </div>
        <ul className="mt-20 mx-auto font-Poppins">
          <li className={`flex items-center mb-10 ${pathname === "/home" ? 'text-[#002656] py-2 bg-slate-100' : 'text-[#8A8A8A]'}`}>
            <FiHome className="mr-2 text-xl" />
            <Link href="/home" passHref>
              <span className="font-semibold hover:text-gray-400">Home</span>
            </Link>
          </li>
          <li className={`flex items-center mb-10 ${pathname === "/my-course" ? 'text-[#002656] py-2 bg-slate-100' : 'text-[#8A8A8A]'}`}>
            <FiBookOpen className="mr-2 text-xl" />
            <Link href="/my-course" passHref>
              <span className="font-semibold hover:text-gray-400">My Course</span>
            </Link>
          </li>
          <li className={`flex items-center mb-10 ${pathname === "/test-series" ? 'text-[#002656] py-2 bg-slate-100' : 'text-[#8A8A8A]'}`}>
            <FiClipboard className="mr-2 text-xl" />
            <Link href="/test-series" passHref>
              <span className="font-semibold hover:text-gray-400">Test Series</span>
            </Link>
          </li>
          <li className={`flex items-center mb-10 ${pathname === "/referral" ? 'text-[#002656] py-2 bg-slate-100' : 'text-[#8A8A8A]'}`}>
            <FiUsers className="mr-2 text-xl" />
            <Link href="/referral" passHref>
              <span className="font-semibold hover:text-gray-400">Refer and Earn</span>
            </Link>
          </li>
          <li className={`flex items-center mb-10 ${pathname === "/feed" ? 'text-[#002656] py-2 bg-slate-100' : 'text-[#8A8A8A]'}`}>
            <FiRss className="mr-2 text-xl" />
            <Link href="/feed" passHref>
              <span className="font-semibold hover:text-gray-400">Feed</span>
            </Link>
          </li>
          <li className={`flex items-center mt-10 ${pathname === "/community" ? 'text-[#002656] py-2 bg-slate-100' : 'text-[#8A8A8A]'}`}>
            <FiMessageCircle className="mr-2 text-xl" />
            <Link href="/community" passHref>
              <span className="font-semibold hover:text-gray-400">Community</span>
            </Link>
          </li>
          <li className={`flex items-center mt-10 ${pathname === "/settings" ? 'text-[#002656] py-2 bg-slate-100' : 'text-[#8A8A8A]'}`}>
            <FiSettings className="mr-2 text-xl" />
            <Link href="/settings" passHref>
              <span className="font-semibold hover:text-gray-400">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="text-white ml-8 hover:text-gray-400 flex items-center ">
          <Link href="/" passHref>
            <span className="flex">
              <FiLogOut className="mr-2 text-[#E55858] text-xl" />
              <span className="text-[#E55858] font-bold ">Sign Out</span>
            </span>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default LeftNavigation;
