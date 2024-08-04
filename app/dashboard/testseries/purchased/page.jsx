import React from "react";
import TestItemList from "@/components/Dashboard/Test/TestItemList";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";

const Page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <TestItemList />
    </section>
  );
};

export default Page;
