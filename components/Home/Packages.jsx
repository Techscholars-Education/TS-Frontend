"use client";
import Link from "next/link";
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
              }  bg-white  group flex flex-col  justify-center transition-all duration-300 hover:bg-yellowish shadow-xl mx-2 w-1/4 px-10 sm:mb-0 py-6 rounded-lg border-2 border-darkBlue `}
            >
              <div className="text-2xl text-darkBlue font-semibold text-center font-Poppins pb-2">
                {packageItem.title}
              </div>
              {packageItem.id === 2 ? (
                <p className="text-darkBlue font-Poppins text-center text-base ">
                  (Popular)
                </p>
              ) : (
                <></>
              )}
              <div className="flex items-center text-darkBlue  mx-auto mb-2 font-Poppins">
                <div className="text-5xl font-semibold mr-2 text-center relative  ">
                  <span className="text-lg text-gray-500 absolute top-0 -left-4 ">
                    &#8377;
                  </span>
                  {packageItem.price}
                </div>
                <div className="text-gray-500">{packageItem.currency}</div>
              </div>
              <ul className="list-none text-darkBlue space-y-2 font-Poppins ">
                {packageItem.features.map((feature, index) => (
                  <li
                    className={`flex items-center ${
                      packageItem.features.length - index <= 2 ? "blur-sm" : ""
                    }`}
                    key={feature.feature}
                  >
                    <MdDone className="mr-3" />
                    {feature.feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center py-4 items-center ">
                <Link
                  href="/course"
                  className="w-40 text-center  py-4 px-4  hover:bg-white hover:text-darkBlue bg-darkBlue text-white  font-Poppins transition-all  rounded-lg "
                >
                  Purchase Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-24">
        <Link
          href="/course"
          className=" font-Poppins text-white border  border-black/40 rounded-xl px-10 py-3 bg-darkBlue text-2xl font-medium  hover:-translate-y-2  duration-300  auth-btn"
        >
          Get started
        </Link>
      </div>
    </section>
  );
};

export default Packages;
