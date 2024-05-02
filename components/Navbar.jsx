import React from "react";
import Logo from "@/public/Logo.svg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className=" bg-gray-100  sticky left-0 right-0 top-0 z-[50] ">
      <nav className=" w-9/12 mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image
            className="w-12 h-12"
            src={Logo}
            alt="Techscholars-Logo"
          ></Image>
          <Link
            href="/"
            className="font-Inter text-lg font-medium cursor-pointer pl-4 transition-all duration-300"
          >
            TECHSCHOLARS
          </Link>
        </div>
        <ul className="font-Poppins flex gap-10  text-lg ">
          <li>
            <Link href="/course">Courses</Link>
          </li>
          <li>
            <Link href="/exams">Scholarship</Link>
          </li>

          <li>
            <Link
              href="/councillor
            "
            >
              Councillor
            </Link>
          </li>
        </ul>

        <div className="flex justify-center items-center gap-6 font-Inter">
          <Link href="/login">
            <button className="border border-black/40 rounded-xl px-4 py-2 text-lg text-neutral-800 hover:-translate-y-2 duration-300 auth-btn">
              Login
            </button>
          </Link>
          <Link href="/signin">
            <button className=" border border-black/40 rounded-xl px-4 py-2 bg-yellowish text-lg text-neutral-800 hover:-translate-y-2  duration-300  auth-btn">
              Signup
            </button>
          </Link>
        </div>
      </nav>
      <div className="bg-yellowish drop-shadow-2xl">
        <p className="font-Inter text-darkBlue font-semibold text-center py-2 text-md tracking-widest uppercase font-base">
          Your unfair advantage - Accelerate your journey towards success!
        </p>
      </div>
    </header>
  );
};

export default Navbar;
