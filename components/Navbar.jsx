"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Logo from "../public/Logo.svg";
import { usePathname } from "next/navigation";
import siren from "@/public/Home/siren.gif";
import speaker from "@/public/Home/speaker.gif";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const [top, setTop] = useState(true);
  const [popUp, setPopUp] = useState(true);
  const [popupVisibility, setPopupVisibility] = useState(false);
  const pathname = usePathname();

  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  useEffect(() => {
    setTimeout(() => {
      setPopUp(true);
      setPopupVisibility(true);
    }, 5000);
    setAccessToken(Cookies.get("access_token"));
  }, []);

  const handleClose = () => {
    setPopUp(false);
    setTimeout(() => setPopupVisibility(false), 100);
  };

  return (
    <>
      {/* {popUp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: popUp ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={`bg-black text-white relative flex justify-center ${
            !popupVisibility && "hidden"
          } `}
        >
          <p className="font-Poppins md:pt-2 px-6 font-normal text-xs md:text-sm lg:text-base flex items-center py-3 md:py-0 ">
            <Image
              className="hidden md:block w-8 md:mr-10 "
              src={siren}
              unoptimized={true}
              alt="siren-gif"
            ></Image>
            Enroll today and start your IITJEE and NEET preparation | batches
            are filling fast!
            <Image
              className="hidden md:block w-10 md:w-12 mb-3 md:ml-10 "
              src={speaker}
              unoptimized={true}
              alt="speaker-gif"
            ></Image>
          </p>
          <button
            onClick={() => {
              setpopupVisibility(false);
            }}
            className="absolute top-[4vw]   md:top-[33%] right-2 md:right-4 xl:right-8"
          >
            <RxCross1 className="text-white text-2xl" />
          </button>
        </motion.div>
      )} */}

      <AnimatePresence>
        {popupVisibility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: popUp ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="bg-black text-white relative flex justify-center"
          >
            <p className="font-Poppins md:pt-2 px-6 font-normal text-xs md:text-sm lg:text-base flex items-center py-3 md:py-0 ">
              <Image
                className="hidden md:block w-8 md:mr-10"
                src={siren}
                alt="siren-gif"
                unoptimized={true}
              />
              Enroll today and start your IITJEE and NEET preparation | batches
              are filling fast!
              <Image
                className="hidden md:block w-10 md:w-12 mb-3 md:ml-10"
                src={speaker}
                alt="speaker-gif"
                unoptimized={true}
              />
            </p>
            <button
              onClick={handleClose}
              className="absolute top-[4vw] md:top-[33%] right-2 md:right-4 xl:right-8"
            >
              <RxCross1 className="text-white text-2xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={`bg-white font-Poppins border-b  text-stone-800 transition-all duration-200 py-6 md:py-6 w-full sticky top-0 z-10 ${
          !top && "shadow-lg bg-white"
        } `}
      >
        <div className="flex w-11/12 mx-auto justify-between items-center font-Jost  ">
          <div className="lg:w-1/4">
            <Link
              href="/"
              className="text-lg md:text-xl text-darkBlue font-medium justify-center font-Jost flex items-center hover:text-TechBlue "
            >
              <Image
                className="w-7 md:w-10  mr-2"
                src={Logo}
                alt="Techscholar-logo"
              />
              Techscholars
            </Link>
          </div>

          {/* FOR BIG SCREENS */}
          <ul className="hidden lg:flex justify-center lg:space-x-4 xl:space-x-10 font-Poppins  items-center lg:w-[60%]  text-darkBlue mx-auto ">
            <li
              className={`cursor-pointer text-base p-2 rounded-md ${
                pathname === "/" ? "text-TechBlue" : "text-darkBlue"
              } hover:bg-blue-200 hover:underline-offset-2 transition-all`}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              className={`cursor-pointer text-base p-2 rounded-md  ${
                pathname === "/course" ||
                pathname == "/course/jee" ||
                pathname == "/course/neet" ||
                pathname == "/course/foundation"
                  ? "text-TechBlue"
                  : "text-darkBlue"
              }   hover:bg-blue-200 hover:underline-offset-2 transition-all`}
            >
              <Link href="/course">Courses</Link>
            </li>
            <li
              className={`cursor-pointer text-base p-2 rounded-md  ${
                pathname === "/exams" ? "text-TechBlue" : "text-darkBlue"
              }  hover:bg-blue-200 hover:underline-offset-2 transition-all`}
            >
              <Link href="/exams">Scholarships</Link>
            </li>
            <li
              className={`cursor-pointer text-base p-2 rounded-md ${
                pathname === "/councillor" ? "text-TechBlue" : "text-darkBlue"
              }  hover:bg-blue-200 transition-all`}
            >
              <Link href="/councillor">Councillor</Link>
            </li>
          </ul>

          {/* Hamburger */}
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

          <ul className="hidden font-Poppins lg:flex justify-center items-center space-x-3 lg:w-1/4 ">
            {!accessToken ? (
              <>
                <li className={`cursor-pointer text-base transition-all`}>
                  <Link
                    className=" px-4 border py-3 rounded-md hover:bg-black hover:text-white duration-200 "
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className={`cursor-pointer text-base`}>
                  <Link
                    className=" bg-TechBlue text-white px-4 py-3 rounded-md hover:bg-black duration-200 "
                    href="/signin"
                  >
                    Get Started
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className={`cursor-pointer text-base`}>
                  <Link
                    className=" bg-TechBlue text-white px-4 py-3 rounded-md hover:bg-black duration-200 "
                    href="/dashboard/home"
                  >
                    My Dashboard
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

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
            {!accessToken ? (
              <>
                {" "}
                <li
                  className={`text-base  ${
                    pathname === "/login" ? "text-TechBlue" : "text-darkBlue"
                  } `}
                >
                  <Link href="/login">Login</Link>
                </li>
                <li className="text-base">
                  <Link
                    className=" py-2 rounded-md px-2 bg-TechBlue text-white"
                    href="/signin"
                  >
                    Get Started
                  </Link>
                </li>
              </>
            ) : (
              <li className="text-base">
                <Link
                  className=" py-2 rounded-md px-2 bg-TechBlue text-white"
                  href="/dashboard/home"
                >
                  My Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
