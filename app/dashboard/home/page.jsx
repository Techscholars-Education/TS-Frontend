import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import HomePageWeb from "@/components/Dashboard/HomePageWeb";


const page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <HomePageWeb/>
    </section>
  );
};

export default page;
