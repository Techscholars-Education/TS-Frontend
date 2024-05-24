"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import Jee from "./_components/Jee";
import Foundation from "./_components/Foundation";
import Neet from "./_components/Neet";

const Page = () => {

  const [domLoaded, setDomLoaded] = useState(false);

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
              <AdminSidebar />
            </div>
          </div>
        
            <div
              id="batches"
              className="bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
            >
              <div>
                <h1 className="font-semibold text-xl ml-10 mt-2">Category</h1>
              </div>
              <div className="ml-10 mt-4 flex gap-7">
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
