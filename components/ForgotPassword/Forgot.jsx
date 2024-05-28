"use client";
import useFpassword from "@/hooks/useFpassword";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgot = () => {
  const { forgotPassword } = useFpassword();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

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

    setLoading(true);
    try {
      const response = await forgotPassword(email);
      if (response.type === "success") {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Entered email is not registered");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" h-[80vh]  flex flex-col justify-center items-center font-Poppins">
      <form className=" max-w-xl lg:max-w-md px-4 md:px-10 mx-auto bg-gray-50 shadow-md  w-full rounded-xl">
        <div className="py-10">
          <h3 className=" text-lg md:text-2xl font-Poppins font-semibold">
            Forgot Password?
          </h3>
          <p className="text-gray-500 text-xs md:text-sm pt-2">
            No worriest! Just enter your registered email and we will send you a
            reset password link in no time.
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
            placeholder="Your registered email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
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
            "Send Email"
          )}
        </button>
      </form>
    </div>
  );
};

export default Forgot;
