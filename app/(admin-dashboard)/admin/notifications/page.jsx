"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";

const Page = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  // const [selectedValue, setSelectedValue] = useState('');

  // const handleChange = (value) => {

  //     setSelectedValue(value)
  //     console.log(value);
  // }

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded ? (
        <div className="h-screen w-full ">
          <Nav />
          <div>
            <div>
              <AdminSidebar />
            </div>
          </div>
          <div
            id="batches"
            className="bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
          >
            <div>
              <h1 className="font-semibold text-xl ml-10 mt-2">Notification</h1>
            </div>

            <div className="h-[18vw] w-[80vw] flex ml-10 mt-3 ">
              <div className="bg-white  w-[50vw] pl-3 flex flex-col gap-5 pt-5  rounded-l-md">
                <h1 className="font-semibold text-[.9vw]">Heading</h1>
                <p className="font-semibold text-[.85vw]">Body</p>
              </div>
              <div className="w-[30vw] bg-[#002956] text-white rounded-md flex flex-col gap-[3vw] pl-[5vw]">
                <div id="option" className=" flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-[8vw]">
                    <h1 className="font-semibold text-[.8vw]">Class</h1>
                    <div className="w-30">
                      <select
                        id="countries"
                        defaultValue={"9th"}
                        className="bg-[#002956] text-[.9vw] cursor-pointer text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[6vw] p-2.5 "
                      >
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-[8vw]">
                    <h1 className="font-semibold text-[.8vw]">Types</h1>
                    <div className="w-30">
                      <select
                        defaultValue={"foundation"}
                        id="countries"
                        className="bg-[#002956] cursor-pointer text-[.9vw] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[6vw] p-2.5 "
                      >
                        <option value="foundation">Foundation</option>
                        <option value="ceo">CEO</option>
                        <option value="cto">CTO</option>
                        <option value="manager">Manager</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-[8vw]">
                    <h1 className="font-semibold text-[.8vw]">Plan</h1>
                    <div className="w-30 ml-2">
                      <select
                        defaultValue={"starter"}
                        id="countries"
                        className="bg-[#002956] cursor-pointer text-[.9vw]  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[6vw] p-2.5 "
                      >
                        <option value="starter">Starter</option>
                        <option value="basic">Basic</option>
                        <option value="highest">Highest</option>
                        <option value="premium">Premium</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <button className="absolute right-3 pl-3 pr-3 pt-1 pb-1 h-10 w-[8vw] bg-yellow-400 rounded-xl text-black hover:bg-yellow-700 hover:text-white transition-all ease-in-out duration-200">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen w-full">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Page;
