import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Profile from "./_components/Profile";
const page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <Profile />
    </section>
  );
};

export default page;
