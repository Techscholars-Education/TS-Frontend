import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Testseries3 from "@/components/Dashboard/Testseries3";
const page = () => {
  return (
    <section className="flex">
      <LeftNavigation />
      <Testseries3 />
    </section>
  );
};

export default page;
