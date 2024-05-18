"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Logo from "../public/Logo.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="bg-black text-white">
        <p className="py-3 font-Poppins text-center px-2 text-xs md:text-base ">
          YOUR UNFAIR ADVANTAGE - ACCELERATE YOUR JOURNEY TOWARDS SUCCESS!
        </p>
      </div>
      <nav
        className={`bg-white font-Poppins border-b  text-stone-800 py-6 md:py-6 w-full sticky top-0 z-10 shadow-md `}
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

          <div className="hidden lg:flex justify-center lg:space-x-4 xl:space-x-10 font-Poppins  items-center  text-darkBlue   pl-10">
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
          <div className="hidden font-Poppins lg:flex justify-center space-x-4 items-center  ">
            <li
              className={`cursor-pointer text-base  hover:underline hover:underline-offset-2 transition-all`}
            >
              <Link className=" border px-5 py-2 rounded-full" href="/login">
                Login
              </Link>
            </li>

            <li
              className={`cursor-pointer text-base hover:underline hover:underline-offset-2 transition-all`}
            >
              <Link
                className="bg-TechBlue text-white px-3 py-2 rounded-full"
                href="/signin"
              >
                Get Started
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
