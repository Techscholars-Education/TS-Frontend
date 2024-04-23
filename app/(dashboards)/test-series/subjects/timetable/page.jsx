import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Testseries3 from "@/components/Dashboard/Testseries3";
const page = () => {
  return (
    <div className="h-screen overflow-auto">
      <section className="flex">
        <LeftNavigation />
        <Testseries3 />
      </section>
    </div>
  );
};

export default page;
