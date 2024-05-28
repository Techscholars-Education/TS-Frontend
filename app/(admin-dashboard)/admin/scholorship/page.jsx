"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import Quiz from "./_components/Quiz";
import Calender from "./_components/Calender";
import { HiMenuAlt4 } from "react-icons/hi";

const Page = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [test, setTest] = useState(false);
  const [mobile,setMobile] = useState(false)

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded ? (
        <div className="h-screen w-full">
          <Nav />
          <div>
            <div>
            <AdminSidebar mobile={mobile} setMobile={setMobile} />
            </div>
          </div>
          <div
            id="scholorship"
            className="bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw] rounded-md max-lg:w-full max-lg:h-screen max-lg:right-0"
          >
           <div className={`button_admin lg:hidden absolute top-4 left-3 p-4 rounded-full bg-red-300 flex items-center justify-center`}>
              <HiMenuAlt4 className="text-[5vw] " onClick={()=>(setMobile(!mobile))}/>
              </div>
            <div className="lg:block flex justify-center ">
                <h1 className="font-semibold lg:text-xl text-[10vw] ml-10 lg:mt-2 mt-[4vw]">
                Scholarship Test
              </h1>
            </div>

            <div className="h-[37.4vw] w-[81vw] flex ml-10 mt-3 gap-[11vw] max-lg:h-[40vh] max-lg:w-[87vw] max-lg:flex-col max-lg:items-center max-lg:gap-6">
              {test ? (
                <button
                  onClick={() => setTest(false)}
                  className="bg-white  h-[25vw] w-[35vw] pl-3 flex flex-col gap-5 pt-5  rounded-l-md  items-center justify-center "
                >
                  <h1 className="font-semibold text-2xl"> + Add New Test</h1>
                </button>
              ) : (
                <div className="bg-white  h-[33vw] w-[35vw] pl-3 pr-3 flex flex-col gap-5 pt-5  rounded-l-md max-lg:h-[70vh] max-lg:w-[85vw] max-lg:mr-5">
                  <h1 className="font-semibold text-xl fonts max-lg:text-2xl">Test Name</h1>
                  <div id="1st">
                    <div className="relative">
                      <ul className="flex text-[.8vw] max-lg:text-[2.5vw] gap-3 font-semibold">
                        <button className="pl-2 pr-2 pt-1 pb-1 border-gray-300 border-2 rounded-lg hover:border-gray-600 transition-all ease-in-out duration-200">
                          Maths
                        </button>
                        <button className="pl-2 pr-2 pt-1 pb-1 border-gray-300 border-2 rounded-lg hover:border-gray-600 transition-all ease-in-out duration-200">
                          Physics
                        </button>
                        <button className="pl-2 pr-2 pt-1 pb-1 border-gray-300 border-2 rounded-lg hover:border-gray-600 transition-all ease-in-out duration-200">
                          chemitry
                        </button>
                        <button className="pl-2 pr-2 pt-1 pb-1 border-gray-300 border-2 rounded-lg hover:border-gray-600 transition-all ease-in-out duration-200">
                          + Add Subject
                        </button>
                      </ul>
                      <button className="absolute font-semibold text-[.8vw] max-lg:text-[2.5vw] max-lg:top-10 right-3">
                        Add Timer
                      </button>
                    </div>
                  </div>
                  <div>
                    <Quiz />
                  </div>
                </div>
              )}

              <div className="flex flex-col max-lg:gap-3">
                <div className="bg-white  h-[20.5vw] w-[23vw] rounded-l-md  p-5 max-lg:h-[35vh] max-lg:w-[85vw] max-lg:mr-5 ">
                  <Calender />
                </div>
                <div className="bg-white  h-[20vw] w-[23vw]  gap-5 rounded-l-md mt-2 pt-2 pl-2 pr-2 max-lg:h-[28vh] max-lg:w-[85vw] max-lg:mr-5 max-lg:mb-4">
                  <h1 className="pl-3 pr-3 pt-1 pb-1 bg-[#B7AFE7] rounded-lg text-gray-700  text-xl font-semibold flex items-center justify-center ">
                    Upcoming Scholorship Tests
                  </h1>

                  <div className="flex flex-col gap-[2vw]">
                    <div className="mt-1">
                      <h1 className="font-semibold "> Foundation</h1>
                      <ul className="flex justify-between text-[.7vw] max-lg:text-[2.6vw]">
                        <li>S.No</li>
                        <li>Exam Date</li>
                        <li>Exam Time</li>
                        <li>Exam Duration</li>
                        <li>Class</li>
                      </ul>
                    </div>
                    <div className="mt-1">
                      <h1 className="font-semibold "> JEE</h1>
                      <ul className="flex justify-between text-[.7vw] max-lg:text-[2.6vw]">
                        <li>S.No</li>
                        <li>Exam Date</li>
                        <li>Exam Time</li>
                        <li>Exam Duration</li>
                        <li>Class</li>
                      </ul>
                    </div>
                    <div className="mt-1">
                      <h1 className="font-semibold "> NEET</h1>
                      <ul className="flex justify-between text-[.7vw] max-lg:text-[2.6vw]">
                        <li>S.No</li>
                        <li>Exam Date</li>
                        <li>Exam Time</li>
                        <li>Exam Duration</li>
                        <li>Class</li>
                      </ul>
                    </div>
                  </div>
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
