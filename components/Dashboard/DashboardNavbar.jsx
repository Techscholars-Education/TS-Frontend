"use client";
import React, { useState } from "react";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";
import Image from "next/image";
import men from "../../public/Dashboard/men_nav.jpg";
import Link from "next/link";

function DashboardNavbar(props) {
  const [search, setSearch] = useState(false);

  return (
    <div className="flex flex-wrap max-w-full place-items-center py-6 bg-white">
      <section className="relative mx-auto">
        <nav className="flex justify-between text-black w-[82vw] ">
          <div className="px-5 xl:px-12 flex w-full items-center justify-between">
            <div className="flex flex-col">
              <a className="text-2xl font-bold font-heading " href="#">
                {props.title}
              </a>
              <p className="text-[14px] text-gray-400">{props.subtitle}</p>
            </div>

            <div className="hidden xl:flex items-center space-x-5 h-8">
              <form
                className={`max-w-md mx-auto ${search ? "block" : "hidden"}`}
              >
                <input
                  type="search"
                  id="default-search"
                  className="block bg-blue-100 w-full px-3 py-2 ps-7 text-sm text-black rounded-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                />
              </form>

              <button className="hover:bg-[#0079FC] hover:text-white bg-blue-100 h-8 w-8 p-2 flex items-center justify-center rounded-md transition-all ease-linear duration-300">
                <FiSearch
                  className="h-6 w-6"
                  onClick={() => {
                    setSearch(!search);
                  }}
                />
              </button>
              <a
                className="hover:bg-[#0079FC] hover:text-white bg-blue-100 h-8 w-8 p-2 flex items-center justify-center rounded-md transition-all ease-linear duration-300"
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
                className="flex items-center hover:text-gray-200"
              >
                <Image
                  className="h-8 w-8 rounded-md"
                  src={men}
                  alt="Profile"
                  width={32}
                  height={32}
                />
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
      </section>
    </div>
  );
}

export default DashboardNavbar;
