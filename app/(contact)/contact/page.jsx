import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="my-10 w-4/5 mx-auto  flex flex-col justify-center items-center">
        <h1 className="text-darkBlue  font-Poppins font-semibold text-4xl text-center">
          Contact us
        </h1>
        <div className=" mx-auto my-10 text-xl font-Poppins text-center">
          <h3 className="font font-bold py-4 text-darkBlue text-center">
            WhatsApp:
          </h3>

          <Link
            className="underline underline-offset-4 hover:underline-offset-8  transition-all text-indigo-700 "
            href="https://api.whatsapp.com/send/?phone=8334860061&text&type=phone_number&app_absent=0"
          >
            Chat Now
          </Link>
          <h3 className="font font-bold py-4 text-darkBlue text-center">
            Email:
          </h3>

          <p className="underline underline-offset-4 hover:underline-offset-8  transition-all text-indigo-700">
            admin.hrm@techscholarseducation.com
          </p>
        </div>
        <div className="flex justify-center mt-24 items-center ">
          <Link
            href="/"
            className="bg-darkBlue text-white w-44 h-12 rounded-xl  flex justify-center items-center mx-8 auth-btn duration-300"
          >
            Back
          </Link>
        </div>
      </section>
    </>
  );
};
export default page;
