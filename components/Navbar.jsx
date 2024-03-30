import React from "react";
import Logo from "@/public/Logo.svg";
import Link from "next/link";

import Image from "next/image";




const Navbar = () => {
  
  return (
    <header className="py-2 bg-gray-100 sticky top-0 z-20 border-b  ">
      <nav className=" w-9/12 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image className="w-16 h-16" src={Logo}></Image>
          <h2 className="font-Poppins text-lg font-base">TECHSCHOLARS</h2>
        </div>
        <ul className="font-Poppins flex gap-10  text-lg ">
          <li>
            <Link href="/course">Courses</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/payment">Payment</Link>
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

        <div className="flex justify-center items-center gap-6 font-Inter">
        <Link href='/login'>
          <button className="border border-black/40 rounded-xl px-4 py-2 text-lg text-neutral-800 hover:-translate-y-2 duration-300 auth-btn"  >
           Login
          </button>
          </Link>
          <Link href='/signin'>
          <button className=" border border-black/40 rounded-xl px-4 py-2 bg-yellowish text-lg text-neutral-800 hover:-translate-y-2  duration-300  auth-btn">
            Signup
          </button>
          </Link>
        </div>
      </nav>
      <div className="bg-yellowish">
      <p className="font-Inter text-darkBlue font-semibold text-center py-2 text-md tracking-widest uppercase font-base">
        Your unfair advantage - Accelerate your journey towards success!
      </p>
    </div>
    </header>
  );
};

export default Navbar;
