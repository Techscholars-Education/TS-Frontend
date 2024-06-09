import React from "react";
import Image from "next/image";
import page404 from "@/public/page404.svg";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <section className=" flex flex-col lg:flex lg:flex-row justify-center items-center min-h-screen space-y-10 lg:space-y-0">
        <Image src={page404}></Image>
        <div>
          <h4>Hey Techscholar, Looks like you have lost.</h4>

          <Link
            className="text-sm text-blue-600 underline hover:underline-offset-4 transition-all duration-200"
            href="/"
          >
            Go to home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
