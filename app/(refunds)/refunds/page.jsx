import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <section className=" my-12 md:my-20 xl:mt-20 xl:mb-32 2xl:my-40 w-4/5 mx-auto">
        <h1 className="text-darkBlue  font-Poppins font-semibold text-xl md:text-4xl text-center">
          Cancellation and refund
        </h1>

        <p className=" text-sm md:text-base text-darkBlue 2xl:w-[1100px] font-Poppins mt-6 md:my-10">
          You are entitled to a refund in the case of the purchased course not
          being assigned to you within the expiration date from your date of
          purchase or if you have paid twice for the same course. Under any
          other circumstance, we will not consider any requests for refund as
          this is a digital course purchase.
        </p>
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
