import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from "./Card";
import coursePoster from "../../../../public/Dashboard/dashboardFeed.png";

const Feed = () => {
  const data = [
    {
      id: 1,
      btn: "Foundation",
      title: "Name of the subject",
      route: "/dashboard/courses/foundation",
      description:
        "When you enter into any new area of science, you almost always find.",
      name: "-By Md. Mahmodul Hasan",
      Poster: coursePoster,
    },
    {
      id: 2,
      btn: "Foundation",
      title: "Name of the subject",
      route: "/dashboard/courses/jee",
      description:
        "When you enter into any new area of science, you almost always find.",
      name: "-By Md. Mahmodul Hasan",
      Poster: coursePoster,
    },
    {
      id: 3,
      btn: "Foundation",
      title: "Name of the subject",
      route: "/dashboard/courses/neet",
      description:
        "When you enter into any new area of science, you almost always find.",
      name: "-By Md. Mahmodul Hasan",
      Poster: coursePoster,
    },
    {
      id: 4,
      btn: "Foundation",
      title: "Name of the subject",
      route: "/dashboard/courses/neet",
      description:
        "When you enter into any new area of science, you almost always find.",
      name: "-By Md. Mahmodul Hasan",
      Poster: coursePoster,
    },
    {
      id: 5,
      btn: "Foundation",
      title: "Name of the subject",
      route: "/dashboard/courses/neet",
      description:
        "When you enter into any new area of science, you almost always find.",
      name: "-By Md. Mahmodul Hasan",
      Poster: coursePoster,
    },
    {
      id: 6,
      btn: "Foundation",
      title: "Name of the subject",
      route: "/dashboard/courses/neet",
      description:
        "When you enter into any new area of science, you almost always find.",
      name: "-By Md. Mahmodul Hasan",
      Poster: coursePoster,
    },
  ];

  return (
    <div className="bg-white font-Poppins h-screen w-full flex flex-col ">
      <DashboardNavbar title={"Feed"} />
      <div className="my-6 flex flex-col mr-2 bg-gray-100/60 h-[85vh] max-w-full pl-5 pr-5 pt-6 overflow-y-auto">
        <div className="flex justify-between items-center ml-8">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold font-Poppins text-xl text-darkBlue">
              Stay updated with Techscholars
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 my-10 mx-4 ">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                route={item.route}
                image={item.Poster}
                btn={item.btn}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
