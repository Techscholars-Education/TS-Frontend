import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import React from "react";
import Feedblog from "../_Components/Feedblog";

const Page = () => {
  return (
    <section className="flex w-full">
      <LeftNavigation />
      <Feedblog />
    </section>
  );
};

export default Page;
