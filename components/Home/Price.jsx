"use client";
import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Price = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const listItems = [
    { text: "Lectures", checked: true },
    { text: "DPPs", checked: true },
    { text: "Weekly test series", checked: true },
    { text: "All India Test series", checked: false },
    { text: "LIVE doubt clearing sessions", checked: false },
    { text: "Access to smartest student community", checked: false },
    { text: "One shot Revision series", checked: false },
    { text: "Scholars AI (beta)", checked: false },
    { text: "Personalised Performance Analysis", checked: false },
    { text: "One - One Mentorship sessions", checked: false },
    { text: "Access to Digital student library", checked: false },

    {
      text: "Strategy Workshops(with certifications)",
      checked: false,
    },
    {
      text: "Councilling Workshops(with certifications)",
      checked: false,
    },
  ];
  const listItems2 = [
    { text: "Lectures", checked: true },
    { text: "DPPs", checked: true },
    { text: "Weekly test series", checked: true },
    { text: "All India Test series", checked: true },
    { text: "LIVE doubt clearing sessions", checked: true },
    { text: "Access to smartest student community", checked: true },
    { text: "One shot Revision series", checked: true },
    { text: "Scholars AI (beta)", checked: false },
    { text: "Personalised Performance Analysis", checked: false },
    { text: "One - One Mentorship sessions", checked: false },
    { text: "Access to Digital student library", checked: false },

    {
      text: "Strategy Workshops(with certifications)",
      checked: false,
    },
    {
      text: "Councilling Workshops(with certifications)",
      checked: false,
    },
  ];
  const listItems3 = [
    { text: "Lectures", checked: true },
    { text: "DPPs", checked: true },
    { text: "Weekly test series", checked: true },
    { text: "All India Test series", checked: true },
    { text: "LIVE doubt clearing sessions", checked: true },
    { text: "Access to smartest student community", checked: true },
    { text: "One shot Revision series", checked: true },
    { text: "Scholars AI (beta)", checked: true },
    { text: "Personalised Performance Analysis", checked: true },
    { text: "One - One Mentorship sessions", checked: true },
    { text: "Access to Digital student library", checked: true },

    {
      text: "Strategy Workshops(with certifications)",
      checked: true,
    },
    {
      text: "Councilling Workshops(with certifications)",
      checked: true,
    },
  ];

  return (
    <section className="bg-[#F7FAFF] py-16 font-Poppins w-full  mx-auto ">
      {/* Headings */}
      <div className=" xl:w-11/12 2xl:w-[1100px] mx-auto  rounded-xl  ">
        <div className=" text-center">
          <h5 className="text-xs font-medium bg-blue-100 text-TechBlue bg-TechBlue/10 font-Poppins py-2 rounded-full px-4 inline-block">
            Pricing
          </h5>
        </div>
        <h2 className="text-darkBlue font-semibold text-xl  md:text-4xl text-center my-4 font-Poppins ">
          Our annual courses prices starts from
        </h2>
        <div className="my-4 text-center  ">
          <p className="font-Poppins px-6 leading-normal  md:px-20 lg:px-44 text-xs md:text-sm text-gray-600 tracking-wide ">
            Unlock Excellence: Where High-Quality Education Meets Unbeatable
            Affordability
          </p>
        </div>
      </div>

      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-5 my-10 w-full lg:w-11/12  ${
          props.Calling ? "xl:w-11/12" : "xl:w-10/12"
        } 2xl:w-[1200px]  px-10 lg:px-2 mx-auto `}
      >
        {/* 1st */}
        <div className="border rounded-xl hover:shadow-xl  transition-all duration-200 bg-white font-Inter ">
          <div className="px-6 pt-6">
            <h4 className="text-lg font-Inter font-semibold text-darkBlue/90">
              Starter
            </h4>
            <h2 className="text-3xl font-bold text-TechBlue py-2">
              &#8377;1999
              <span className="text-xs font-normal text-gray-500">/Year</span>
            </h2>
            <hr />
          </div>

          <div className="relative pt-6 px-6 font-Inter">
            <ul className="space-y-4">
              {listItems.slice(0, 5).map((item, index) => (
                <ListItem key={index} item={item} />
              ))}
            </ul>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <ul className="space-y-4">
                {listItems.slice(5).map((item, index) => (
                  <ListItem
                    key={index + 5}
                    item={item}
                    style={{
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `opacity 500ms, transform 500ms`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                ))}
              </ul>
            </div>
            {!isExpanded && (
              <div className="flex justify-center mt-4">
                <button
                  className="text-xl font-bold"
                  onClick={() => setIsExpanded(true)}
                >
                  ...
                </button>
              </div>
            )}
          </div>

          <div className="w-full flex justify-center items-center my-6">
            <Link
              href="/dashboard/courses"
              className="border border-gray-400 w-5/6 rounded-full px-4 md:px-6 py-2 md:py-3 text-center hover:bg-black hover:text-white duration-200 font-Poppins font-semibold "
            >
              Purchase Now
            </Link>
          </div>
        </div>

        {/* 2nd */}
        <div className="border relative rounded-xl bg-TechBlue   transition-all duration-200 font-Inter">
          <div className="px-6 pt-6">
            <h4 className="text-lg font-semibold text-white">Advanced</h4>
            <h2 className="text-3xl font-bold text-white py-2">
              &#8377;6999
              <span className="text-xs font-normal text-gray-100">/Year</span>
            </h2>
            <hr className="border-gray-400" />
          </div>

          <div className="relative pt-6 px-6 font-Inter ">
            <ul className="space-y-4">
              {listItems2.slice(0, 5).map((item, index) => (
                <ListItem key={index} item={item} isSecond={true} />
              ))}
            </ul>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <ul className="space-y-4">
                {listItems2.slice(5).map((item, index) => (
                  <ListItem
                    isSecond={true}
                    key={index + 5}
                    item={item}
                    style={{
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `opacity 500ms, transform 500ms`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                ))}
              </ul>
            </div>
            {!isExpanded && (
              <div className="flex justify-center mt-4">
                <button
                  className="text-xl font-bold text-white"
                  onClick={() => setIsExpanded(true)}
                >
                  ...
                </button>
              </div>
            )}
          </div>
          <div className="w-full flex justify-center items-center my-6">
            <Link
              href="/dashboard/courses"
              className="border border-gray-400 w-5/6 rounded-full bg-white text-TechBlue px-4 md:px-6 py-2 md:py-3 text-center hover:bg-black hover:text-white duration-200 font-Poppins font-semibold"
            >
              Purchase Now
            </Link>
          </div>
          <span
            datacontent="MOST POPULAR"
            className="w-[100px] h-[100px] absolute font-bold flex justify-center items-center -top-2 -right-2 overflow-hidden before:w-[180px] before:h-8 before:bg-white before:absolute before:rotate-45 before:-translate-y-4 before:content-[attr(dataContent)] before:flex before:justify-center before:items-center before:text-xs before:pl-6 before:text-TechBlue before:shadow-md"
          ></span>
        </div>

        {/* 3rd */}
        <div className="border rounded-xl hover:shadow-xl  transition-all duration-200 bg-white font-Inter">
          <div className="px-6 pt-6">
            <h4 className="text-lg font-Inter font-semibold text-darkBlue/90">
              Ultimate
            </h4>
            <h2 className="text-3xl font-bold text-TechBlue py-2">
              &#8377;16999
              <span className="text-xs font-normal text-gray-500">/Year</span>
            </h2>
            <hr />
          </div>

          <div className="relative pt-6 px-6 font-Inter">
            <ul className="space-y-4">
              {listItems3.slice(0, 5).map((item, index) => (
                <ListItem key={index} item={item} />
              ))}
            </ul>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <ul className="space-y-4">
                {listItems3.slice(5).map((item, index) => (
                  <ListItem
                    key={index + 5}
                    item={item}
                    style={{
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `opacity 500ms, transform 500ms`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                ))}
              </ul>
            </div>
            {!isExpanded && (
              <div className="flex justify-center mt-4">
                <button
                  className="text-xl font-bold"
                  onClick={() => setIsExpanded(true)}
                >
                  ...
                </button>
              </div>
            )}
          </div>
          <div className="w-full flex justify-center items-center my-6">
            <Link
              href="/dashboard/courses"
              className="border border-gray-400 w-5/6 rounded-full px-4 md:px-6 py-2 md:py-3 text-center hover:bg-black hover:text-white duration-200 font-Poppins font-semibold "
            >
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;

const ListItem = ({ item, style, isSecond }) => (
  <li
    className="flex justify-start space-x-2 items-center my-2.5"
    style={style}
  >
    {item.checked ? (
      <MdDone
        className={`${
          !isSecond ? "bg-blue-600  text-white" : "bg-white text-TechBlue"
        }  text-xl rounded-full p-1`}
      />
    ) : (
      <RxCross2 className="bg-red-400 text-xl text-white rounded-full p-1" />
    )}
    <span
      className={`${
        isSecond ? `text-white` : "text-gray-500"
      } font-medium font-Poppins text-xs md:text-sm ${
        !item.checked && "line-through"
      }`}
    >
      {item.text}
    </span>
  </li>
);
