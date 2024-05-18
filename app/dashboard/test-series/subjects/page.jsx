import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Testseries2 from "@/components/Dashboard/Testseries2";
const page = () => {
  return (
    <section className="flex">
      <LeftNavigation />
      <Testseries2 />
    </section>
  );
};

export default page;
