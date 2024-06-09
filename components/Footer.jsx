"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import TsLogo from "../public/Home/TsLogo.svg";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <footer className="bg-gray-900 md:pt-10 text-white body-font grid grid-cols-1 md:grid-cols-3 font-Poppins w-full ">
        <div className="  px-5 pt-6 md:py-0 md:px-10 space-y-5 md:space-y-6  ">
          <div>
            <h1 className="text-sm md:text-xl font-semibold flex items-center  ">
              <Image
                className="mr-4 md:text-base md:w-12"
                src={TsLogo}
                alt="Techscholar-logo"
              ></Image>
              Techscholars
            </h1>
          </div>
          <div className="flex space-x-4 my-2">
            <Link href="https://www.instagram.com/techscholars.in/reels/">
              <FaInstagram className="text-2xl md:text-3xl hover:text-pink-600 duration-200" />
            </Link>
            <FaFacebook className="text-2xl md:text-3xl" />
            <Link href="https://www.linkedin.com/company/techscholarsindia/mycompany/verification/">
              <FaLinkedin className="text-2xl md:text-3xl hover:text-blue-600 duration-200" />
            </Link>
          </div>
        </div>
        <div className=" px-5 md:px-0  py-6 md:py-2  grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link className="text-sm lg:text-base" href="/aboutus">
            About us
          </Link>
          <Link className="text-sm lg:text-base" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-sm lg:text-base" href="/terms-conditions">
            Terms and services
          </Link>
          <Link
            className="text-sm lg:text-base"
            href={pathname === "/" ? "#testimonials" : "/#testimonials"}
          >
            Testimonials
          </Link>
          <Link className="text-sm lg:text-base" href="/faqs">
            Help/FAQ
          </Link>
          <Link className="text-sm lg:text-base" href="/contact">
            Contact
          </Link>
          <Link className="text-sm lg:text-base" href="/councillor">
            Schedule a call
          </Link>
          <Link className="text-sm lg:text-base" href="/course">
            Courses
          </Link>
          <Link className="text-sm lg:text-base" href="/blogs">
            Blogs
          </Link>
        </div>
        <div className=" px-5 py-6 md:py-2   ">
          <form>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
              Get in Touch
            </h3>

            <input
              className="my-2 py-2 rounded-md px-2 w-4/5 text-sm text-darkBlue"
              placeholder="your email"
              type="email"
            />
            <textarea
              className="my-2 py-2 rounded-md px-2 w-4/5 text-sm text-darkBlue"
              placeholder="your message"
              name="message"
              id="message"
            ></textarea>

            <button className="bg-TechBlue text-white rounded-full hover:bg-black hover:shadow-sm hover:shadow-black transition-all ease-linear duration-200 px-3 py-2 text-sm">
              Send message
            </button>
          </form>
        </div>
      </footer>
      <div className="flex space-x-4 w-full bg-gray-900 text-white py-4  px-8 ">
        <p className="text-sm md:text-base lg:text-base">
          Copyright © 2024 Codementor Hub Education Pvt. Ltd. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
