"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import { HiMenuAlt4 } from "react-icons/hi";

const Page = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [mobile,setMobile] = useState(false)
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded ? (
        <div>
          <Nav />
          <div>
            <div>
            <AdminSidebar mobile={mobile} setMobile={setMobile} />
            </div>
          </div>
          <div
            id="feedback"
            className="bg-gray-100 overflow-y-auto lg:h-[41vw] lg:w-[85vw] relative lg:right-[-15vw] right-0 h-screen w-full rounded-md"
          >
          <div className={`button_admin lg:hidden absolute top-4 left-3 p-4 rounded-full bg-red-300 flex items-center justify-center`}>
              <HiMenuAlt4 className="text-[5vw] " onClick={()=>(setMobile(!mobile))}/>
              </div>
              <div className="lg:block flex justify-center ">
                <h1 className="font-semibold lg:text-xl text-[10vw] ml-10 lg:mt-2 mt-[4vw]">Feedback</h1>
            </div>
            <div className="ml-10 mt-4 max-lg:mt-7">
              <div className="flex flex-col gap-5 bg-white lg:h-[20vw] lg:w-[20vw] p-4 rounded-md h-[40vh] w-[75vw] max-lg:pt-6">
                <h1 className="font-semibold lg:text-xl text-2xl">+ Add Feedback</h1>
                <div className="flex flex-col gap-2 max-lg:text-2xl">
                  <p>Name</p>
                  <p>Upload Pic</p>
                  <p>Feedback</p>
                  <p>Rating</p>
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
