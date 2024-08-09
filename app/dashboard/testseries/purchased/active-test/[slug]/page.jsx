import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Activetest from "@/components/Dashboard/Test/Activetest";
const Page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <Activetest />
    </section>
  );
};

export default Page;
