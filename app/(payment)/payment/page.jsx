"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CourseList from "@/components/Course/CourseList";

const PricingTable = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const packages = [
    {
      id: 1,
      title: "Package1",
      price: "0/m",
      features: [
        { feature: "1 user" },
        { feature: "1 connected calendar" },
        { feature: "Up to 12 responses" },
        { feature: "Up to 3 survey results archived" },
      ],
    },
    {
      id: 2,
      title: "Package2",
      price: "$5/m",
      features: [
        { feature: "1 user" },
        { feature: "Up to 2 connected calendars" },
        { feature: "Up to 50 responses" },
        { feature: "Up to 10 survey results archived" },
      ],
    },
    {
      id: 3,
      title: "Package3",
      price: "$10/m",
      features: [
        { feature: "Per user in company domain" },
        { feature: "Single calendar integrations" },
        { feature: "Unlimited responses" },
        { feature: "Unlimited survey results archived" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const hoveredItem = {
    scale: 1.1,
    backgroundColor: "#111",
    transition: {
      duration: 0.2,
    },
  };

  return (
    <>
      <div>
        <Navbar />
        <CourseList />
        <div className="flex justify-center items-center font-Poppins ">
          <div className="p-4  w-full max-w-screen-lg flex flex-col justify-center items-center ">
            <motion.div
              className="flex flex-col w-[80vw] justify-center sm:flex-row "
              variants={container}
              initial="hidden"
              animate="show"
            >
              {packages.map((packageItem) => (
                <motion.div
                  key={packageItem.id}
                  className={` py-10  group flex flex-col justify-center hover:bg-darkBlue mx-2 p-4 sm:mb-0 rounded-lg border border-darkBlue ${
                    hoveredPackage === packageItem.id ? "scale-110" : ""
                  }`}
                  onHoverStart={() => setHoveredPackage(packageItem.id)}
                  onHoverEnd={() => setHoveredPackage(null)}
                  variants={item}
                  whileHover={{ scale: 1.1, color: "white" }}
                >
                  <div className="text-2xl font-semibold text-center mb-6">
                    {packageItem.title}
                  </div>
                  <div className="flex items-center  mx-auto mb-3">
                    <div className="text-4xl font-bold mr-2 text-center">
                      {packageItem.price}
                    </div>
                    <div className="text-gray-500">
                      {packageItem.currency || "Am"}
                    </div>
                  </div>
                  <ul className="list-disc group-hover:text-white list-inside text-gray-700 space-y-2">
                    {packageItem.features.map((feature) => (
                      <li key={feature.feature}>{feature.feature}</li>
                    ))}
                  </ul>
                  <div className="flex justify-center align-middle mt-8">
                    <motion.button
                      className="w-40 h-12 mt-4 py-2 px-4 bg-blue-900 text-white rounded-lg focus:outline-none focus:shadow-outline"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "white",
                        color: "blue",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Purchase Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTable;
