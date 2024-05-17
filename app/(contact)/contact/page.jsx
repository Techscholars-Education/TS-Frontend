import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="my-10 w-4/5 mx-auto  flex flex-col justify-center items-center">
        <h1 className="text-darkBlue  font-Poppins font-semibold text-xl md:text-4xl text-center">
          Contact us
        </h1>
        <div className=" mx-auto my-10  text-lg md:text-xl font-Poppins text-center ">
          <h3 className="font font-bold py-4 text-darkBlue text-center">
            WhatsApp:
          </h3>

          <Link
            className="underline underline-offset-4 hover:underline-offset-8  transition-all text-TechBlue text-sm md:text-base "
            href="https://api.whatsapp.com/send/?phone=8334860061&text&type=phone_number&app_absent=0"
          >
            Chat Now
          </Link>
          <h3 className="font font-bold py-4 text-darkBlue text-center text-sm md:text-base ">
            Email:
          </h3>

          <p className="underline underline-offset-4 hover:underline-offset-8  transition-all text-TechBlue text-sm md:text-base ">
            admin.hrm@techscholarseducation.com
          </p>
        </div>
        <div className="flex justify-center mt-24 items-center ">
          <Link
            href="/"
            className="bg-TechBlue text-sm text-white md:w-44 md:h-12 rounded-full  flex justify-center items-center  duration-300 px-4 py-2 "
          >
            Back
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default page;
