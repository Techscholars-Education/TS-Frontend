"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import { HiMenuAlt4 } from "react-icons/hi";

const Page = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [mobile,setMobile] = useState(false)

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
            <AdminSidebar mobile={mobile} setMobile={setMobile} />
            </div>
          </div>
          <div
            id="batches"
            className="bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw] max-lg:h-full max-lg:w-full max-lg:right-0  rounded-md"
          >
          <div className={`button_admin lg:hidden absolute top-4 left-3 p-4 rounded-full bg-red-300 flex items-center justify-center`}>
              <HiMenuAlt4 className="text-[5vw] " onClick={()=>(setMobile(!mobile))}/>
              </div>
            <div className="lg:block flex justify-center ">
                <h1 className="font-semibold lg:text-xl text-[10vw] ml-10 lg:mt-2 mt-[4vw]">Notification</h1>
            </div>

            <div className="h-[18vw] w-[80vw] flex ml-10 mt-3 max-lg:h-screen max-lg:w-full max-lg:ml-0 max-lg:flex-col max-lg:items-center">
              <div className="bg-white  w-[50vw] pl-3 flex flex-col gap-5 pt-5  rounded-l-md max-lg:h-[26vh] max-lg:w-[80vw] ">
                <h1 className="font-semibold text-[.9vw] max-lg:text-xl">Heading</h1>
                <p className="font-semibold text-[.85vw] max-lg:text-xl">Body</p>
              </div>
              <div className="w-[30vw] max-lg:w-[80vw] max-lg:h-[30vh] bg-[#002956] text-white rounded-md flex flex-col gap-[3vw] pl-[5vw] ">
                <div id="option" className=" flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-[8vw]">
                    <h1 className="font-semibold text-[.8vw] max-lg:text-xl">Class</h1>
                    <div className="w-30">
                      <select
                        id="countries"
                        defaultValue={"9th"}
                        className="bg-[#002956] text-[.9vw]  cursor-pointer text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[6vw] p-2.5 "
                      >
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center gap-[8vw]">
                    <h1 className="font-semibold text-[.8vw] max-lg:text-xl">Types</h1>
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
                    <h1 className="font-semibold text-[.8vw] max-lg:text-xl">Plan</h1>
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
                  <button className="absolute right-3 pl-3 pr-3 pt-1 pb-1 h-10 w-[8vw] max-lg:h-14 max-lg:text-xl max-lg:w-[30vw] max-lg:right-[8vw] bg-yellow-400 rounded-xl text-black hover:bg-yellow-700 hover:text-white transition-all ease-in-out duration-200">
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
