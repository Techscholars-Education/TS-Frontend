"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import Jee from "./_components/Jee";
import Foundation from "./_components/Foundation";
import Neet from "./_components/Neet";
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
        <div className="h-screen w-full overflow-hidden">
          <Nav />
          <div>
            <div>
            <AdminSidebar mobile={mobile} setMobile={setMobile} />
            </div>
          </div>
        
            <div
              id="batches"
              className="bg-gray-100 overflow-y-auto lg:h-[41vw] lg:w-[85vw] relative lg:right-[-15vw] right-0 rounded-md h-screen w-full "
            >
              <div className={`button_admin lg:hidden absolute top-4 left-3 p-4 rounded-full bg-red-300 flex items-center justify-center`}>
              <HiMenuAlt4 className="text-[5vw] " onClick={()=>(setMobile(!mobile))}/>
              </div>
              <div className="lg:block flex justify-center ">
                <h1 className="font-semibold lg:text-xl text-[10vw] ml-10 lg:mt-2 mt-[4vw]">Category</h1>
              </div>
              <div className="ml-10 lg:mt-4 mt-8 lg:mb-0 mb-[3vw] lg:flex lg:flex-row lg:gap-7 flex flex-col gap-7 items-center  ">
               <Jee/>
               <Neet/>
               <Foundation/>
                
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
