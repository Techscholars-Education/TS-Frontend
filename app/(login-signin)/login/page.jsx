"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Google from "@/public/Auth/Google.png";
import Login from "@/public/Auth/login.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLogin from "@/hooks/useLogin";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import gif1 from "@/public/Ts-Loader.gif";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [authg, setAuthg] = useState("");

  const router = useRouter();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const { login } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      const res = await login(email, password);
      setLoading(false);
      router.replace("/dashboard/home");
    } catch (error) {
      console.log("Some error occured in login");
    }
  };

  const glogin =  useGoogleLogin ({
    onSuccess: (tokenResponse) =>  setAuthg(tokenResponse.access_token),
  });

  useEffect(() => {
    if (authg === "") return;
    if (authg) {
      const sessionExpirationTime = new Date(new Date().getTime() + 5 * 60 * 60 * 1000);
      Cookies.set("authCookie", authg, { expires: sessionExpirationTime });

      router.replace("/dashboard/home");
      // window.location.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authg]);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {domLoaded ? (
        <>
          {" "}
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

              <div className=" h-[80vh]  flex flex-col justify-center items-center font-Poppins">
                <form className=" max-w-xl lg:max-w-md px-4 md:px-10 mx-auto bg-gray-50 shadow-md  w-full rounded-xl">
                  <div className="py-10">
                    <h3 className=" text-lg md:text-2xl font-Poppins font-semibold">
                      Welcome to Techscholars
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm pt-2">
                      Login to your account
                    </p>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-500  "
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="johndoe@example.com"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-500 "
                    >
                      Password
                    </label>
                    <div className="flex justify-end items-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2 "
                        placeholder="@Example$1234"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? (
                          <IoIosEye className="w-10  rounded-xl h-full py-1 text-gray-500" />
                        ) : (
                          <IoIosEyeOff className="w-10  rounded-xl h-full py-1 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs md:text-sm flex justify-end my-2">
                    <Link href="/forgot-password" className="text-red-500 mx-2">
                      Forgot password ?
                    </Link>
                  </div>

                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-TechBlue text-white rounded-full py-3  mb-4 text-sm md:text-md w-full font-base mt-1 hover:bg-black transition-all ease-in-out duration-200 flex items-center justify-center"
                  >
                    {loading ? (
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-200 animate-spin dark:text-white fill-blue-800"
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
                    ) : (
                      "Login"
                    )}
                  </button>
                  <button
                    onClick={glogin}
                    className="bg-gray-100 text-darkBlue rounded-full py-2 text-sm md:text-md w-full font-normal mt-4 flex items-center justify-center "
                  >
                    <Image src={Google} className="w-8" alt="google-logo" />{" "}
                    Google
                  </button>
                  <div className="mb-10 mt-6 text-xs md:text-sm flex">
                    <p className="text-gray-600">Do not have an account ?</p>{" "}
                    <Link href="/signin" className="text-TechBlue mx-2">
                      Register
                    </Link>
                  </div>
                </form>
              </div>

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
              <Image src={Login} alt="login-svg" className="h-screen w-full" />
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

export default Page;
