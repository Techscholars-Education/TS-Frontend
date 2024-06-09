import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import whatsapp from "@/public/Contact/whatsapp.png";
import gmail from "@/public/Contact/gmail.png";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="my-10 w-4/5 mx-auto  flex flex-col justify-center items-center">
        <h1 className="text-darkBlue  font-Poppins font-semibold text-xl md:text-4xl text-center">
          Contact us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <div className=" border shadow-md space-y-4 p-4">
            <div>
              <Image
                src={whatsapp}
                alt="whatsapp-icon"
                className="w-12"
              ></Image>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold">Whatsapp</h3>
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=8334860061&text&type=phone_number&app_absent=0"
              className=" text-sm md:text-lg font-medium text-blue-600 underline underline-offset-2 hover:underline-offset-4 transition-all hover:text-black"
            >
              Chat Now
            </Link>
          </div>
          <div className=" border shadow-md space-y-4 p-4">
            <div>
              <Image src={gmail} alt="gmail-icon" className="w-12"></Image>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold">Email</h3>
            </div>

            <span className=" text-sm md:text-lg font-medium text-blue-600 underline underline-offset-2 hover:underline-offset-4 transition-all hover:text-black">
              admin.hrm@techscholarseducation.com
            </span>
          </div>
        </div>

        {/* 
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
        </div> */}
        <div className="flex justify-center mt-24 items-center ">
          <Link
            href="/"
            className="bg-TechBlue text-sm md:text-lg text-white md:w-44 md:h-12 rounded-full  flex justify-center items-center  duration-300 px-4 py-2 "
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
