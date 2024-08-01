import React from "react";
import TestDetail from "@/components/Dashboard/Test/TestDetail";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";

const Page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <TestDetail />
    </section>
  );
};

export default Page;
