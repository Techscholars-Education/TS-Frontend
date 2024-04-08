import Navbar from "@/components/Navbar";

import React from "react";
import Course from "@/components/Course/Course";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Course />
      </div>
    </>
  );
};

export default page;
