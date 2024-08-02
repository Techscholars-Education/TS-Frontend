import React from "react";
import TestItem from "./TestItem";
import DashboardNavbar from "../DashboardNavbar";

export default function TestItemList() {
  const data = [
    { id: 1, title: "Class 9 Maths" },
    { id: 2, title: "Class 10 Maths" },
    { id: 3, title: "Class 11 Maths" },
    { id: 4, title: "Class 12 Maths" },
    { id: 5, title: "Droppers 13 Maths" },
    { id: 6, title: "Droppers 13 Biology" },
  ];

  return (
    <div className="bg-white font-Poppins w-full flex flex-col ">
      <DashboardNavbar title={"Test series purchased"} />
      <div className="flex flex-col mr-2 bg-gray-100/60 h-[85vh] max-w-full pl-5 pr-5 pt-6 overflow-y-auto ">
        <div>
          {data.map((item) => {
            return <TestItem key={item.id} title={item.title} />;
          })}
        </div>
      </div>
    </div>
  );
}
