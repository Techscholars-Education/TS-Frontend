import React from "react";
import Card from "./Card";
import jeePoster from "../../public/Course/jeePoster.jpg";
import neetPoster from "../../public/Course/neetPoster.svg";
import foundationPoster from "../../public/Course/foundationPoster.svg";

const Course = () => {
  const data = [
    {
      id: 1,
      title: "JEE",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson. Head of Product Customer Platform Gojek Indonesia",
      Poster: jeePoster,
    },
    {
      id: 2,
      title: "NEET",
      description:
        "Product Management Masterclass, you will learn with Sarah Johnson. Head of Product Customer Platform Gojek Indonesia",
      Poster: neetPoster,
    },
    {
      id: 3,
      title: "Foundation",
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
                image={item.Poster}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-24 ">
          <button className="bg-darkBlue text-white w-44 h-12 rounded-xl mx-8">
            Back
          </button>
          <button className="w-44 h-12 border-2  border-[#DCDCDC] rounded-xl">
            Back to home
          </button>
        </div>
      </div>
    </>
  );
};

export default Course;
