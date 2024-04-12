"use client";
import React from "react";
import { MdDone } from "react-icons/md";
const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Starter",
      price: "1999",
      features: [
        { feature: "1 user" },
        { feature: "1 connected calendar" },
        { feature: "Up to 12 responses" },
        { feature: "Up to 3 survey results archived" },
      ],
    },
    {
      id: 2,
      title: "Advanced",
      price: "7999",
      features: [
        { feature: "1 user" },
        { feature: "Up to 2 connected calendars" },
        { feature: "Up to 50 responses" },
        { feature: "Up to 10 survey results archived" },
      ],
    },
    {
      id: 3,
      title: "Ultimate",
      price: "17999",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },
  ];

  return (
    <section className="mb-20 py-24 bg-yellowish">
      <div className="flex justify-center mb-20 font-Poppins">
        <h1 className="text-5xl text-darkBlue font-semibold">
          Our Annual courses prices
        </h1>
      </div>

      <div className="p-4  w-full max-w-screen-lg flex flex-col justify-center items-center mx-auto ">
        <div
          className="flex flex-col w-[80vw] justify-center sm:flex-row "
          initial="hidden"
          animate="show"
        >
          {packages.map((packageItem) => (
            <div
              key={packageItem.id}
              className={`${
                packageItem.id === 2 ? "scale-125 bg-yellowish " : "exam-card"
              } h-[50vh] bg-white  group flex flex-col  justify-center transition-all duration-300 hover:bg-yellowish shadow-xl mx-2 w-1/4 px-10 py-0 sm:mb-0 rounded-lg border-2 border-darkBlue `}
            >
              <div className="text-4xl text-darkBlue font-semibold text-center mb-3 font-Poppins ">
                {packageItem.title}
              </div>
              {packageItem.id === 2 ? (
                <p className="text-darkBlue font-Poppins text-center pb-6 text-2xl">
                  (Popular)
                </p>
              ) : (
                <></>
              )}
              <div className="flex items-center text-darkBlue  mx-auto mb-2 font-Poppins">
                <div className="text-6xl font-semibold mr-2 text-center relative  ">
                  <span className="text-lg text-gray-500 absolute top-0 -left-4 ">
                    &#8377;
                  </span>
                  {packageItem.price}
                </div>
                <div className="text-gray-500">{packageItem.currency}</div>
              </div>
              <ul className="list-none  list-inside text-darkBlue space-y-2 font-Poppins">
                {packageItem.features.map((feature) => (
                  <li className="flex items-center " key={feature.feature}>
                    <MdDone className="mr-3" /> {feature.feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center align-middle mt-8">
                <button className="w-40 h-12 mt-4 py-2 px-4 group-hover:bg-white group-hover:text-darkBlue bg-darkBlue text-white  font-Poppins  rounded-lg focus:outline-none focus:shadow-outline">
                  Purchase Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
