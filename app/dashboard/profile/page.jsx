import React from "react";
import Profile from "@/components/Dashboard/Profile";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
const page = () => {
  return (
    <section className="flex">
      <LeftNavigation />
      <Profile />
    </section>
  );
};

export default page;
