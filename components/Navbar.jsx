import React from "react";
import Logo from "@/public/Logo.svg";
import Link from "next/link";

import Image from "next/image";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const Navbar = () => {
  return (
    <header className="py-2 bg-gray-100">
      <nav className=" w-5/6 mx-auto flex justify-evenly items-center">
        <div className="flex items-center">
          <Image className="w-20 h-20" src={Logo}></Image>
          <h2 className={`${poppins.className} text-xl`}>TECHSCHOLARS</h2>
        </div>
        <ul className={`${poppins.className} flex gap-10  text-xl `}>
          <li>
            <Link href="/">Courses</Link>
          </li>
          <li>
            <Link href="/">Partners</Link>
          </li>
          <li>
            <Link href="/">Exams</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
        </ul>

        <div className="flex justify-center items-center gap-6">
          <button className="border border-black/40 rounded-xl px-4 py-2 text-lg text-neutral-800 hover:-translate-y-2 duration-300 auth-btn">
            Login
          </button>
          <button className=" border border-black/40 rounded-xl px-4 py-2 bg-yellow-500 text-lg text-neutral-800 hover:-translate-y-2 duration-300  auth-btn">
            Signup
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
