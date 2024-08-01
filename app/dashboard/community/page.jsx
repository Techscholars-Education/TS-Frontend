import React from "react";
import LeftNavigation from "@/components/LeftNavigation/LeftNavigation";
import Community from "@/components/Dashboard/Community";
const page = () => {
  const data = [
    {
      id: 1,
      title: "JEE ",
      subhead: "Connect with peers across the country and learn together !",
      btnText: "Explore",
      linkTo: "/dashboard/community/jee",
    },
    {
      id: 2,
      title: "NEET ",
      subhead: "Connect with peers across the country and learn together !",
      btnText: "Explore",
      linkTo: "/dashboard/community/neet",
    },
    {
      id: 3,
      title: "Foundation",
      subhead: "Connect with peers across the country and learn together !",
      btnText: "Explore",
      linkTo: "/dashboard/community/foundation",
    },
  ];
  return (
    <section className="flex">
      <LeftNavigation />
      <Community data={data} pageTitle={"Student Community"} />
    </section>
  );
};

export default page;
