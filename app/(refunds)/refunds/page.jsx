import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="my-10 w-4/5 mx-auto">
        <h1 className="text-darkBlue  font-Poppins font-semibold text-4xl text-center">
          Cancellation and refund
        </h1>

        <p className="text-base text-darkBlue font-Poppins my-10">
          You are entitled to a refund in the case of the purchased course not
          being assigned to you within the expiration date from your date of
          purchase or if you have paid twice for the same course. Under any
          other circumstance, we will not consider any requests for refund as
          this is a digital course purchase.
        </p>
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
