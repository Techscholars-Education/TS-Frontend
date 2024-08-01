import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Detailedview from "@/components/Dashboard/Test/Detailedview";
const Page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <Detailedview />
    </section>
  );
};

export default Page;
