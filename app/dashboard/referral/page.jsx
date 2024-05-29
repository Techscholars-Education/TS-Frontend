import React from "react";
import Referrals from "@/components/Dashboard/Referrals";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
const page = () => {
  return (
    <section className="flex">
        <LeftNavigation />
        <Referrals />
      </section>

  );
};

export default page;
