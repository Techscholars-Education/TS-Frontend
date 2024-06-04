import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Testseries1 from "@/components/Dashboard/Testseries1";
const page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <Testseries1 />
    </section>
  );
};

export default page;
