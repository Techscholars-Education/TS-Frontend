"use client";
import React from "react";
import Image from "next/image";
import fb from "../public/Home/fb.svg";
import ins from "../public/Home/ins.svg";
import linkedin from "../public/Home/linkedin.svg";
import twitter from "../public/Home/twitter.svg";
const Footer = () => {
  return (
    <footer className=" bg-yellowish w-full rounded-t-3xl shadow-2xl p-10 flex font-Poppins">
      <div className=" w-3/5 py-10 space-y-4  ">
        <table className=" w-full mx-10 text-darkBlue">
          <tbody className="text-2xl ">
            <tr>
              <th className=" text-start -4">About Us</th>
              <th className=" text-start py-4">Privacy Policy</th>
              <th className=" text-start py-4">Testimonials</th>
            </tr>
            <tr>
              <th className=" text-start py-4">Careers</th>
              <th className=" text-start py-4">Terms and Services</th>
              <th className=" text-start py-4">Schedule a Call</th>
            </tr>
            <tr>
              <th className="text-start py-4">Help/FAQs</th>
              <th className="text-start py-4">Contact</th>
              <th className="text-start py-4">Courses</th>
            </tr>
          </tbody>
        </table>
        <ul className="flex space-x-4 mx-10 py-10">
          <li>
            <Image src={fb}></Image>
          </li>
          <li>
            <Image src={linkedin}></Image>
          </li>
          <li>
            <Image src={twitter}></Image>
          </li>
          <li>
            <Image src={ins}></Image>
          </li>
        </ul>
      </div>

      <div className=" w-2/5 flex flex-col  ">
        <h2 className="text-darkBlue text-4xl font-semibold my-10 ">
          Let's Get in Touch
        </h2>

        <form className="flex flex-col space-y-4">
          <div className="space-y-10  mb-6  ">
            <input
              className="py-4 outline-none rounded-xl px-4 w-4/5 "
              placeholder="Your email address"
              type="text"
            />
            <input
              className="py-4 outline-none  rounded-xl px-4 w-4/5 "
              placeholder="Your message"
              type="text"
            />
          </div>
          <div>
            <button className="text-2xl bg-darkBlue text-white w-1/3 px-4 py-3 rounded-xl">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
