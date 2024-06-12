import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import blog from "@/public/Blogs/blog.png";
const page = () => {
  return (
    <>
      <Navbar />
      <section className=" flex justify-center items-center pb-24  space-x-5 px-4 min-h-[800px]">
        <Image
          src={blog}
          className="w-40 drop-shadow-xl"
          alt="blog-icon"
        ></Image>
        <h4 className=" text-base sm:text-lg md:text-2xl text-black font-medium ">
          Hey Techscholars! <br />
          our blogs will be coming soon...
          <br />
          <span className="text-TechBlue">stay tuned!</span>
          <br />
          <Link
            href="/"
            className="text-blue-600 text-sm underline underline-offset-2 hover:text-blue-700"
          >
            {" "}
            Go to home{" "}
          </Link>
        </h4>
      </section>
      <Footer />
    </>
  );
};

export default page;
