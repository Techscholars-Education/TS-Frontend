"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-yellowish w-full rounded-t-3xl shadow-2xl p-10 flex font-Poppins">
      <div className=" w-3/5 py-10 space-y-4  ">
        <table className=" w-full mx-10 text-darkBlue">
          <tbody className="text-2xl ">
            <tr>
              <th className=" text-start -4">
                <Link
                  className="hover:underline hover:underline-offset-2 transition-all"
                  href="/aboutus"
                >
                  About Us
                </Link>
              </th>
              <th className=" text-start py-4">
                <Link
                  className="hover:underline hover:underline-offset-2 transition-all"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </th>
              <th className=" text-start py-4">Testimonials</th>
            </tr>
            <tr>
              <th className=" text-start py-4">Careers</th>
              <th className=" text-start py-4">
                <Link
                  className="hover:underline hover:underline-offset-2 transition-all"
                  href="/terms-conditions"
                >
                  Terms and Services
                </Link>
              </th>
              <th className=" text-start py-4">
                <Link
                  className="hover:underline hover:underline-offset-2 transition-all"
                  href="/councillor"
                >
                  Schedule a Call
                </Link>
              </th>
            </tr>
            <tr>
              <th className="text-start py-4">
                <Link
                  className="hover:underline hover:underline-offset-2 transition-all"
                  href="/faqs"
                >
                  Help/FAQs
                </Link>
              </th>
              <th className="text-start py-4">
                <Link
                  className="hover:underline hover:underline-offset-2 transition-all"
                  href="/contact"
                >
                  {" "}
                  Contact
                </Link>
              </th>
              <th className="text-start py-4">
                <Link
                  className="hover:underline hover:underline-offset-2 transition-all"
                  href="/course"
                >
                  Courses
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
        <div className="font-Poppins mx-10">
          <button className="text-darkBlue text-xl font-bold">Email Us</button>
        </div>
      </div>

      <div className=" w-2/5 flex flex-col  ">
        <h2 className="text-darkBlue text-4xl font-semibold my-10 ">
          Lets Get in Touch
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
            <button className="text-2xl bg-darkBlue text-white w-2/5 px-4 py-3 rounded-xl">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
