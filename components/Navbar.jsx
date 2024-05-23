"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Logo from "../public/Logo.svg";
import { usePathname } from "next/navigation";
import giphy from "@/public/Home/giphy.gif";
import siren from "@/public/Home/siren.gif";
import speaker from "@/public/Home/speaker.gif";

const Navbar = () => {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const [top, setTop] = useState(true);
  const [popupVisibility, setpopupVisibility] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <div
        className={`bg-black text-white relative flex justify-center ${
          !popupVisibility && "hidden"
        } `}
      >
        <p className="font-Poppins py-4 md:py-0 text-center px-2 font-semibold text-xs md:text-sm lg:text-base uppercase flex items-center ">
          <Image className="hidden md:block w-10 md:mr-10 " src={siren}></Image>
          Enroll today and start your IITJEE and NEET preparation | batches are
          filling fast!
          <Image
            className="hidden md:block w-10 md:w-16 mb-3 md:ml-10 "
            src={speaker}
          ></Image>
        </p>
        <button
          onClick={() => {
            setpopupVisibility(false);
          }}
          className="absolute bottom-2 md:top-[33%] right-2  md:right-10"
        >
          <RxCross1 className="text-white" />
        </button>
      </div>
      <nav
        className={`bg-white font-Poppins border-b  text-stone-800 transition-all duration-700 py-6 md:py-6 w-full sticky top-0 z-10 ${
          !top && "shadow-lg"
        } `}
      >
        <ul className="flex w-5/6 mx-auto justify-between items-center font-Jost ">
          <h1 className="text-lg md:text-xl text-darkBlue font-medium justify-center font-Jost flex items-center ">
            <Image
              className="w-7 md:w-10  mr-2"
              src={Logo}
              alt="Techscholar-logo"
            />
            Techscholars
          </h1>

          {/* FOR BIG SCREENS */}

          <div className="hidden lg:flex justify-center lg:space-x-4 xl:space-x-10 font-Poppins  items-center  text-darkBlue pl-10">
            <li
              className={`cursor-pointer text-base ${
                pathname === "/" ? "text-TechBlue" : "text-darkBlue"
              } hover:underline hover:underline-offset-2 transition-all`}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className={`cursor-pointer text-base  ${
                pathname === "/course" ? "text-TechBlue" : "text-darkBlue"
              }   hover:underline hover:underline-offset-2 transition-all`}
            >
              <Link href="/course">Courses</Link>
            </li>
            <li
              className={`cursor-pointer text-base  ${
                pathname === "/exams" ? "text-TechBlue" : "text-darkBlue"
              }  hover:underline hover:underline-offset-2 transition-all`}
            >
              <Link href="/exams">Scholarships</Link>
            </li>
            <li
              className={`cursor-pointer text-base  ${
                pathname === "/councillor" ? "text-TechBlue" : "text-darkBlue"
              }  hover:underline hover:underline-offset-2 transition-all`}
            >
              <Link href="/councillor">Councillor</Link>
            </li>
          </div>
          <div className="lg:hidden flex justify-center items-center">
            <button
              onClick={() => {
                setIsBurgerClicked(!isBurgerClicked);
              }}
            >
              {!isBurgerClicked ? (
                <GiHamburgerMenu className="text-xl" />
              ) : (
                <RxCross1 className="text-xl" />
              )}
            </button>
          </div>
          <div className="hidden font-Poppins lg:flex justify-center space-x-4 items-center   ">
            <li
              className={`cursor-pointer text-base  hover:underline hover:underline-offset-2 transition-all`}
            >
              <Link className=" px-5 border py-3 rounded-full " href="/login">
                Login
              </Link>
            </li>

            <li
              className={`cursor-pointer text-base hover:underline hover:underline-offset-2 transition-all`}
            >
              <Link
                className="bg-TechBlue pl-4 py-1 text-white px-2 rounded-full flex items-center justify-center "
                href="/signin"
              >
                Get Started
                <Image
                  src={giphy}
                  className="  md:w-[30px] lg:w-[40px] ml-2  rounded-full "
                  alt="eyes"
                ></Image>
              </Link>
            </li>
          </div>
        </ul>

        {/* FOR SMALL SCREENS */}
        <div
          className={`bg-white min-h-40 w-full font-Poppins  py-6 z-100 transition-all absolute mt-4 text-stone-800 shadow-lg border-2 ${
            isBurgerClicked ? "flex opacity-100" : "hidden opacity-0"
          }`}
        >
          <ul className="  my-auto w-5/6 mx-auto font-Poppins flex flex-col space-y-6 font-Jost ">
            <li
              className={`text-base  ${
                pathname === "/" ? "text-TechBlue" : "text-darkBlue"
              } `}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`text-base  ${
                pathname === "/course" ? "text-TechBlue" : "text-darkBlue"
              } `}
            >
              <Link href="/course">Courses</Link>
            </li>
            <li
              className={`text-base  ${
                pathname === "/exams" ? "text-TechBlue" : "text-darkBlue"
              } `}
            >
              <Link href="/exams">Scholarships</Link>
            </li>
            <li
              className={`text-base  ${
                pathname === "/councillor" ? "text-TechBlue" : "text-darkBlue"
              } `}
            >
              <Link href="/councillor">Councillor</Link>
            </li>
            <li
              className={`text-base  ${
                pathname === "/login" ? "text-TechBlue" : "text-darkBlue"
              } `}
            >
              <Link href="/login">Login</Link>
            </li>
            <li className="text-base">
              <Link
                className=" py-2 rounded-full px-2 bg-TechBlue text-white"
                href="/signin"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
