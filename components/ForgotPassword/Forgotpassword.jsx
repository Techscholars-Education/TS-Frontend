"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import forgot from "@/public/Auth/forgot.png";
import "react-toastify/dist/ReactToastify.css";
import Forgot from "@/components/ForgotPassword/Forgot";
import Update from "@/components/ForgotPassword/Update";
import { IoIosArrowRoundBack } from "react-icons/io";
import gif1 from "@/public/Ts-Loader.gif";
import Cookies from "js-cookie";

const Forgotpassword = () => {
  const searchParams = useSearchParams();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {domLoaded ? (
        <>
          <ToastContainer />
          <section className="  flex justify-between items-center ">
            <div className=" w-full px-4 py-12 lg:w-1/2 h-screen lg:p-12 mx-auto ">
              <div>
                <Link
                  href="/"
                  className="rounded-full fixed top-10 left-10 border border-black/50 h-12 w-12 flex justify-center items-center"
                >
                  <IoIosArrowRoundBack className="text-3xl text-gray-700" />
                </Link>
              </div>

              {searchParams.get("token") ? (
                <Update accessToken={searchParams.get("token")} />
              ) : (
                <Forgot />
              )}

              <div className="font-Poppins mt-[3vw] flex justify-between items-center">
                <div>
                  <Link
                    href="/privacy"
                    className="text-gray-600 text-xs md:text-sm underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <p className="text-gray-600 text-xs md:text-sm underline underline-offset-2">
                    All rights reserved &copy; 2024
                  </p>
                </div>
              </div>
            </div>

            <div className=" hidden lg:block">
              <Image
                src={forgot}
                alt="forgot-password-png"
                className="h-screen w-full"
              />
            </div>
          </section>
        </>
      ) : (
        <>
          <div className="h-screen w-full flex items-center justify-center">
            <Image
              src={gif1}
              alt="gif-loader"
              className="lg:h-[20vh] lg:w-[10vw] h-[20vh] w-[35vw]  "
            />
          </div>
        </>
      )}
    </>
  );
};

export default Forgotpassword;
