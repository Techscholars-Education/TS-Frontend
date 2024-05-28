"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import usePupdate from "@/hooks/usePupdate";

const Update = (props) => {
  const { updatePassword } = usePupdate();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    setIsPasswordMatch(confirmPassword === password);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      toast.error(`Password must be at least ${minLength} characters long.`);
      return false;
    }
    if (!hasUpperCase) {
      toast.error(`Password must be at least 1 uppercase character.`);
      return false;
    }
    if (!hasLowerCase) {
      toast.error(`Password must be at least 1 lowercase character.`);
      return false;
    }
    if (!hasNumbers) {
      toast.error(`Password must be at least 1 number.`);
      return false;
    }
    if (!hasSpecialChar) {
      toast.error(`Password must be at least 1 special character.`);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validatePassword(password)) {
      setLoading(true);
      try {
        const response = await updatePassword(password, props.accessToken);
        if (response.type === "success") {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error("Something went wrong while updating the password");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className=" h-[80vh]  flex flex-col justify-center items-center font-Poppins">
      <form className=" max-w-xl lg:max-w-md px-4 md:px-10 mx-auto bg-gray-50 shadow-md  w-full rounded-xl">
        <div className="py-10">
          <h3 className=" text-lg md:text-2xl font-Poppins font-semibold">
            New Password
          </h3>
          <p className="text-gray-500 text-xs md:text-sm pt-2">
            Please add a new{" "}
            <span className="font-semibold text-red-500">Strong</span> password.
          </p>
        </div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-500  "
        >
          New Password
        </label>
        <div className="flex justify-end items-center">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2 "
            placeholder="your new strong password"
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
        <label
          htmlFor="email"
          className="block mt-6 mb-2 text-sm font-medium text-gray-500  "
        >
          Confirm New Password
        </label>
        <div className="flex justify-end items-center mb-5">
          <input
            type={"password"}
            id="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2 "
            placeholder="your new strong password"
            required
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="py-2 font-Poppins">
          <p className="text-xs md:text-sm text-red-600 font-normal">
            {!isPasswordMatch && "Passwords does not match"}
          </p>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-TechBlue text-white rounded-full py-3  mb-10 text-sm md:text-md w-full font-base mt-1 hover:bg-black transition-all ease-in-out duration-200 flex items-center justify-center"
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
            "Update Password"
          )}
        </button>
      </form>
    </div>
  );
};

export default Update;
