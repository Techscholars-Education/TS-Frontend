import React from "react";
import Image from "next/image";
import Communitycards from "./Communitycards";
const Community = () => {
  const data = [
    {
      id: 1,
      title: "Class 11th JEE",
      students: "Ram, Sham and many more...",
    },
    {
      id: 2,
      title: "Class 12th JEE",
      students: "Ram, Sham and many more...",
    },
    {
      id: 3,
      title: "Target 13th JEE",
      students: "Ram, Sham and many more...",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F0F7FF] py-16 px-16">
      <div className=" space-y-3 ">
        <h3 className="font-Poppins text-2xl font-semibold text-darkBlue">
          Student Community
        </h3>
        <div className="flex justify-between ">
          <p className="text-xl text-darkBlue">Welcome to JEE community</p>
          <ul className="flex space-x-10">
            <li>11th </li>
            <li>12th </li>
            <li>Target 13th </li>
          </ul>
        </div>

        <div className="grid grid-cols-3 py-12 ">
          {data.map((item) => {
            return (
              <Communitycards
                title={item.title}
                key={item.id}
                students={item.students}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Community;
