"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import TsLogo from "../public/Logo.svg";
import { usePathname } from "next/navigation";
// import useSendmessage from "@/hooks/useSendmessage";
import "react-toastify/dist/ReactToastify.css";
import { FaXTwitter } from "react-icons/fa6";
import footer_left from "@/public/Home/footer_left.png";
import footer_right from "@/public/Home/footer_right.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMsgSent, setIsMsgSent] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const [currYear, setCurrYear] = useState("");

  // const { sendMessage } = useSendmessage();

  // Fields validators
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMessage = (message) => {
    return message.trim().length > 0;
  };

  const handleSubmit = async (e) => {
    // 3rd party mailing

    // e.preventDefault();
    // setIsloading(true);
    // try {
    //   await sendMessage(email, message);
    //   setIsMsgSent(true);
    //   setTimeout(() => setIsMsgSent(false), 3000);
    //   toast.success("Message sent successfully");
    //   setEmail("");
    //   setMessage("");
    // } catch (error) {
    //   toast.error("Email cannot be sent");
    //   console.log("Email can't be sent : ", error);
    // } finally {
    //   setIsloading(false); // Set loading to false whether it succeeds or fails
    // }

    // Updated footer mailing procedure
    e.preventDefault();

    const emailValid = validateEmail(email);
    const messageValid = validateMessage(message);

    if (!emailValid) return toast.error("Enter a valid email");
    if (!messageValid) return toast.error("Enter message you want to send");

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=admin.hrm@techscholarseducation.com&su=Message from ${email}&body=${encodeURIComponent(
      message
    )}`;
    window.open(mailtoLink, "_blank");
  };

  const pathname = usePathname();

  useEffect(() => {
    const currYear = new Date().getFullYear();
    setCurrYear(currYear);
  }, [currYear]);

  return (
    <>
      <ToastContainer />
      <footer className="bg-[#F7FAFF] md:pt-10 text-white body-font flex gap-36 font-Poppins w-full relative ">
        <Image
          src={footer_left}
          className="h-full w-auto absolute left-0 top-0"
          alt="footer_left"
        />
        <Image
          src={footer_right}
          className="h-full w-auto absolute right-0 top-0"
          alt="footer_right"
        />
        <div className="  px-5 pt-6 md:py-0 md:px-10 space-y-5 md:space-y-6 w-[20vw] xl:pl-24 relative">
          <div>
            <h1 className="text-sm md:text-xl font-semibold flex items-center  ">
              <Image
                className="mr-2 md:text-base md:w-8"
                src={TsLogo}
                alt="Techscholar-logo"
              ></Image>
              <span className="text-TechBlue">Techscholars</span>
            </h1>
          </div>
          <div className=" text-xs md:text-sm lg:text-base xl:text-sm ">
            <p className="text-gray-400">
              Transforming average students into toppers with our innovative
              teaching{" "}
            </p>
          </div>
          <div className="flex space-x-4 my-2 absolute">
            <Link
              href="https://www.instagram.com/techscholars.in/reels/"
              className="bg-black rounded-full p-2 hover:text-pink-600 duration-200"
            >
              <FaInstagram className="text-2xl md:text-2xl hover:text-pink-600 duration-200" />
            </Link>
            <Link
              href="https://www.facebook.com/"
           
            >
               <FaFacebook className="text-2xl md:text-4xl text-black hover:text-blue-600 duration-200" />
            </Link>
           

            <Link
              href="https://www.linkedin.com/company/techscholarsindia/mycompany/verification/"
              className="bg-black rounded-full p-2"
            >
              <FaLinkedinIn className="text-2xl md:text-2xl hover:text-blue-600 duration-200" />
            </Link>
            <Link
              href="https://twitter.com/Techscholars_"
              className="bg-black rounded-full p-2"
            >
              <FaXTwitter className="text-2xl md:text-2xl hover:text-blue-600 duration-200" />
            </Link>
          </div>
        </div>

        <div className="flex gap-28">
          <div className="bg-gray-400 h-[20vh] w-[0.1vw] rounded-md" />
          <div className="list-none flex flex-col gap-3 text-gray-500 text-sm">
            <ul className="font-semibold text-xl text-black">Company</ul>
            <li>
              <Link
                className="text-sm lg:text-base hover:text-TechBlue"
                href="/aboutus"
              >
                About us
              </Link>
            </li>
            <li className="text-sm lg:text-base hover:text-TechBlue cursor-pointer">
              Carrers
            </li>
            <li>
              <Link
                className="text-sm lg:text-base hover:text-TechBlue"
                href="/faqs"
              >
                Help/FAQ
              </Link>
            </li>
            <li>
              <Link
                className="text-sm lg:text-base hover:text-TechBlue"
                href={pathname === "/" ? "#testimonials" : "/#testimonials"}
              >
                Testimonials
              </Link>
            </li>
          </div>
          <div className="bg-gray-400 h-[20vh] w-[0.1vw] rounded-md" />
          <div className="list-none flex flex-col gap-3 text-gray-500 text-sm">
            <ul className="font-semibold text-xl text-black">Help Links</ul>
            <li>
              <Link
                className="text-sm lg:text-base hover:text-TechBlue"
                href="/privacy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-sm lg:text-base hover:text-TechBlue"
                href="/terms-conditions"
              >
                Terms of services
              </Link>
            </li>
            <li className="text-sm lg:text-base hover:text-TechBlue cursor-pointer">
              Schedule a Call
            </li>
            <li>
              <Link
                className="text-sm lg:text-base hover:text-TechBlue"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </div>
          <div className="bg-gray-400 h-[20vh] w-[0.15vw] rounded-md" />
          {/* 
          <Link className="text-sm lg:text-base" href="/aboutus">
            About us
          </Link>
          <Link className="text-sm lg:text-base" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-sm lg:text-base" href="/terms-conditions">
            Terms of services
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
          </Link> */}
        </div>

        <div className=" px-5 py-6 md:py-2 w-[24vw] ">
          <div className="flex flex-col space-y-4 xl:pr-16 ">
            <h3 className="text-base md:text-lg lg:text-xl text-black font-semibold">
              Let&#39;s Get in Touch
            </h3>

            <input
              className="my-2 py-4 rounded-md px-4 w-4/5 text-sm text-darkBlue"
              placeholder="Your email address"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              className="my-2 py-4 rounded-md px-4 w-4/5 text-sm text-darkBlue"
              placeholder="Your message"
              name="message"
              rows="4"
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
              }  text-white w-[160px] rounded-full hover:bg-black hover:shadow-sm hover:shadow-black transition-all ease-linear duration-200 px-3 py-3 font-medium text-sm`}
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
      <div className="flex space-x-4 w-full bg-[#EDF5FF] text-gray-500 py-4 items-center justify-center">
        <p className="text-sm md:text-base lg:text-base font-medium">
          © {currYear} Codementor Hub Education Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
