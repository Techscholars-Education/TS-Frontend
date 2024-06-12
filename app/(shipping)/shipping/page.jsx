import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="my-10 w-4/5 2xl:w-[1100px] mx-auto">
        <h1 className="text-darkBlue  font-Poppins font-semibold text-xl md:text-4xl text-center">
          Shipping Policy
        </h1>

        <p className="text-sm md:text-base text-darkBlue  font-Poppins my-10">
          Welcome to our EdTech platform, where knowledge knows no bounds.
          Unlike traditional e-commerce sites, we pride ourselves on delivering
          a digital experience tailored solely to your intellectual growth.
          <br /> <br /> As pioneers in online education, we offer a diverse
          array of courses and resources designed to empower minds and transform
          lives. Given our exclusively digital offerings, we do not impose any
          shipping fees, as there are no physical products to dispatch. Rest
          assured, your journey with us transcends the limitations of physical
          delivery, navigating instead through the boundless expanse of virtual
          learning. <br /> <br /> Join us on this exciting voyage, where
          education knows no borders, and embark on a transformative learning
          adventure from the comfort of your own screen
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
