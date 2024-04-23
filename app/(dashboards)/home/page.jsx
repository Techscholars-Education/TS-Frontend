import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Home from "@/components/Dashboard/Home";

const page = () => {
  return (
    <>
    <div className="flex w-full ">
      <LeftNavigation />
      <Home />

    </div>
    </>
  );
};

export default page;
