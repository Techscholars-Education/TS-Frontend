import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Community from "@/components/Dashboard/Community";
const page = () => {
  return (
    <section className="flex">
      <LeftNavigation />
      <Community />
    </section>
  );
};

export default page;
