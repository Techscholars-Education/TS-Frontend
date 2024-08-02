import React from "react";
import Syllabusview from "@/components/Dashboard/Test/Syllabusview";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";

const Page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <Syllabusview />
    </section>
  );
};

export default Page;
