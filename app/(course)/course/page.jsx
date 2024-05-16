import React from "react";
import Navbar from "@/components/Navbar";
import Course from "@/components/Course/Course";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Course />
      </div>
      <Footer />
    </>
  );
};

export default page;
