import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Community from "@/components/Dashboard/Community";
const page = () => {
  const data = [
    {
      id: 1,
      title: "NEET - Class 11",
      subhead: "Connect with peers across the country and learn together !",
      btnText: "Join",
      linkTo: "#",
    },
    {
      id: 2,
      title: "NEET - Class 12",
      subhead: "Connect with peers across the country and learn together !",
      btnText: "Join",
      linkTo: "#",
    },
    {
      id: 3,
      title: "NEET - Droppers",
      subhead: "Connect with peers across the country and learn together !",
      btnText: "Join",
      linkTo: "#",
    },
  ];

  return (
    <section className="flex">
      <LeftNavigation />
      <Community data={data} pageTitle={"NEET Community"} />
    </section>
  );
};

export default page;
