"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import TsLogo from "../public/Home/TsLogo.svg";
import { usePathname } from "next/navigation";
import useSendmessage from "@/hooks/useSendmessage";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const { sendMessage } = useSendmessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      await sendMessage(email, message);
      setIsMsgSent(true);
      setTimeout(() => setIsMsgSent(false), 3000);
      toast.success("Email sent successfully");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Email cannot be sent");
      console.log("Email can't be sent : ", error);
    } finally {
      setIsloading(false); // Set loading to false whether it succeeds or fails
    }
  };

  const pathname = usePathname();
  return (
    <>
      <ToastContainer />
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
          <div className="flex flex-col space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
              Get in Touch
            </h3>

            <input
              className="my-2 py-2 rounded-md px-2 w-4/5 text-sm text-darkBlue"
              placeholder="your email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              className="my-2 py-2 rounded-md px-2 w-4/5 text-sm text-darkBlue"
              placeholder="your message"
              name="message"
              value={message}
              id="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>

            <button
              onClick={handleSubmit}
              className={`bg-TechBlue ${
                isLoading ? "xl:w-[60px]" : "xl:w-[180px]"
              }  text-white w-[160px] rounded-full hover:bg-black hover:shadow-sm hover:shadow-black transition-all ease-linear duration-200 px-3 py-2 text-sm`}
            >
              {isLoading ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-white fill-blue-800"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </>
              ) : (
                <> {isMsgSent ? "Message sent" : "Send message"}</>
              )}
            </button>
          </div>
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
