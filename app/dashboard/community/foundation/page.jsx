import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Community from "@/components/Dashboard/Community";
const page = () => {
  const data = [
    {
      id: 1,
      title: "Foundation - Class 9",
      subhead: "Connect with peers across the country and learn together !",
      btnText: "Join",
      linkTo: "#",
    },
    {
      id: 2,
      title: "Foundation - Class 10",
      subhead: "Connect with peers across the country and learn together !",
      btnText: "Join",
      linkTo: "#",
    },
  ];

  return (
    <section className="flex">
      <LeftNavigation />
      <Community data={data} pageTitle={"FOUNDATION Community"} />
    </section>
  );
};

export default page;
