import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Referrals from "@/components/Dashboard/Referrals";
const page = () => {
  return (
    <div className="h-screen overflow-auto">
      <section className="flex">
        <LeftNavigation />
        <Referrals />
      </section>
    </div>
  );
};

export default page;

