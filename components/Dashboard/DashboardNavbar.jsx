"use client";
import React, { useEffect, useState } from "react";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";
import Image from "next/image";
import iconprofile from "../../public/Dashboard/social-page.gif";
import Link from "next/link";
import useProfile from "@/hooks/useProfile";
import { IoIosArrowDown } from "react-icons/io";

function DashboardNavbar(props) {
  const { useprofile } = useProfile();
  const [userImage, setUserImage] = useState();
  const [call, setCall] = useState(false);

  useEffect(() => {
    const image = window?.localStorage?.getItem("profile-storage");
    const imagejs = JSON.parse(image);
    setUserImage(imagejs.state.profiles.profile_image);
  }, [call]);

  useEffect(() => {
    useprofile();
    setCall(true);
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1]);

  const [search, setSearch] = useState(false);

  return (
    <div className="flex flex-wrap  place-items-center bg-white ">
      <nav className="flex justify-between text-black xl:w-[80vw] py-5 mt-[1vw] ">
        <div className="md:px-5 xl:px-12 flex w-full items-center justify-between">
          <div className="flex flex-col w-full md:w-96  xl:w-[500px]">
            <Link
              className="md:text-2xl font-semibold font-Poppins text-darkBlue font-heading "
              href="#"
            >
              {props.title}
            </Link>
          </div>

          <div className="hidden xl:flex items-center space-x-5 h-8 ">
            <form className={`max-w-md mx-auto ${search ? "block" : "hidden"}`}>
              <input
                type="search"
                id="default-search"
                className="block bg-blue-100 w-full px-3 py-2 ps-7 text-sm text-black rounded-full focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
              />
            </form>

            <button className="hover:bg-[#0079FC] border border-gray-200 hover:text-white hover:border-none bg-[#fcfafa] h-8 w-8 p-2 flex items-center justify-center rounded-md transition-all ease-linear duration-300">
              <FiSearch
                className="h-6 w-6"
                onClick={() => {
                  setSearch(!search);
                }}
              />
            </button>
            <a
              className="hover:bg-[#0079FC] hover:text-white border border-gray-200 hover:border-none bg-[#fcfafa] h-8 w-8 p-2 flex items-center justify-center rounded-md transition-all ease-linear duration-300 relative"
              href="#"
            >
              <FiBell className="h-6 w-6 " />
              <span className="flex absolute -mt-3 ml-3">
                <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
              </span>
            </a>

            <Link
              href={"/dashboard/profile"}
              className="flex items-center hover:text-TechBlue"
            >
              {userImage ? (
                <Image
                  className="h-8 w-8 rounded-md"
                  src={userImage || iconprofile}
                  alt="Profile"
                  width={32}
                  height={32}
                />
              ) : (
                <Image
                  className="h-8 w-8 rounded-md"
                  src={iconprofile}
                  unoptimized
                  alt="Profile"
                  width="auto"
                  height="auto"
                />
              )}
              <IoIosArrowDown className="ml-2" />
            </Link>
          </div>
        </div>
        <a className="xl:hidden flex mr-6 items-center" href="#">
          <FiBell className="h-6 w-6 hover:text-gray-200" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </a>
        <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <FiSearch className="h-6 w-6 hover:text-gray-200" />
        </a>
      </nav>
    </div>
  );
}

export default DashboardNavbar;
