"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import TsLogo from "../public/Home/TsLogo.svg";
const Footer = () => {
  return (
    <footer className="bg-darkBlue md:py-10 text-white body-font grid grid-cols-1 md:grid-cols-3 font-Poppins ">
      <div className="  px-5 py-4 md:py-0 md:pr-20 space-y-3 md:space-y-6  md:my-auto  ">
        <div>
          <h1 className="text-sm md:text-xl font-semibold flex items-center  ">
            <Image className="mr-4 md:text-base md:w-12" src={TsLogo}></Image>
            Techscholars
          </h1>
        </div>
        <div>
          <p className="text-sm md:text-base lg:text-base">
            Welcome to Techscholars. transforming average students
          </p>
        </div>
        <div className="flex space-x-4 my-2">
          <FaInstagram className="text-2xl md:text-3xl" />
          <FaFacebook className="text-2xl md:text-3xl" />
          <FaLinkedin className="text-2xl md:text-3xl" />
        </div>
      </div>
      <div className=" px-5 md:px-0   grid grid-cols-2 md:grid-cols-3 gap-3">
        <Link className="text-sm lg:text-base" href="/aboutus">
          About us
        </Link>
        <Link className="text-sm lg:text-base" href="/privacy">
          Privacy Policy
        </Link>
        <Link className="text-sm lg:text-base" href="/terms-conditions">
          Terms and services
        </Link>
        <Link className="text-sm lg:text-base" href="/">
          Careers
        </Link>
        <Link className="text-sm lg:text-base" href="/faqs">
          Help/FAQ
        </Link>
        <Link className="text-sm lg:text-base" href="/contact">
          Contact
        </Link>
        <Link className="text-sm lg:text-base" href="/shipping">
          Shipping
        </Link>
        <Link className="text-sm lg:text-base" href="/councillor">
          Schdedule a call
        </Link>
        <Link className="text-sm lg:text-base" href="/course">
          Courses
        </Link>
      </div>
      <div className=" px-5 py-2   ">
        <form>
          <h3 className="text-sm md:text-lg lg:text-xl">Get in Touch</h3>

          <input
            className="my-2 py-1 rounded-md px-2 w-4/5 text-sm text-darkBlue"
            placeholder="your email"
            type="email"
          />
          <textarea
            className="my-2 py-1 rounded-md px-2 w-4/5 text-sm text-darkBlue"
            placeholder="your message"
            name="message"
            id="message"
          ></textarea>

          <button className="bg-TechBlue text-white rounded-full px-3 py-1 text-sm">
            Send message
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
