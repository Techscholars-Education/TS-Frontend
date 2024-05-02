import React from "react";
import Card from "./Card";
import Link from "next/link";
import jeePoster from "../../public/Course/jeePoster.jpg";
import neetPoster from "../../public/Course/neetPoster.svg";
import foundationPoster from "../../public/Course/foundationPoster.svg";

const Course = () => {
  const data = [
    {
      id: 1,
      title: "JEE",
      route: "/course/jee",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson. Head of Product Customer Platform Gojek Indonesia",
      Poster: jeePoster,
    },
    {
      id: 2,
      title: "NEET",
      route: "/course/neet",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson. Head of Product Customer Platform Gojek Indonesia",
      Poster: neetPoster,
    },
    {
      id: 3,
      title: "Foundation",
      route: "/course/foundation",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson. Head of Product Customer Platform Gojek Indonesia",
      Poster: foundationPoster,
    },
  ];

  return (
    <>
      <div className="bg-slate-100 font-Poppins min-h-screen pt-24 w-full ">
        <div className="flex justify-center  mt-4 ">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                route={item.route}
                image={item.Poster}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-24 items-center ">
          <Link
            href="/"
            className="bg-darkBlue text-white w-44 h-12 rounded-xl  flex justify-center items-center mx-8 auth-btn duration-300"
          >
            Back
          </Link>
          <Link
            href="/"
            className="w-44 h-12 border-2  border-gray-300 flex justify-center items-center rounded-xl auth-btn duration-300"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Course;
