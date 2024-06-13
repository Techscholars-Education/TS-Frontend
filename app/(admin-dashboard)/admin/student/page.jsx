"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import { TransactionsTable } from "../../_components/Table";
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
        <div className="h-screen w-full ">
          <Nav />
          <div>
            <div>
            <AdminSidebar mobile={mobile} setMobile={setMobile} />
            </div>
          </div>
          <div
            id="batches"
            className="bg-[#e6f0ff] overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw] max-lg:right-0 max-lg:w-full max-lg:h-screen  rounded-md"
          >
          <div className={`button_admin lg:hidden absolute top-4 left-3 p-4 rounded-full bg-red-300 flex items-center justify-center`}>
              <HiMenuAlt4 className="text-[5vw] " onClick={()=>(setMobile(!mobile))}/>
              </div>
              <div className="lg:block flex justify-center ">
                <h1 className="font-semibold lg:text-xl text-[10vw] ml-10 lg:mt-2 mt-[4vw]">Student Data</h1>
            </div>

            <div className="h-[37.4vw] w-[81vw] flex ml-10 mt-3 max-lg:h-[87vh] ">
              <div className="bg-white  w-full pl-3 flex flex-col gap-5 pt-5 rounded-l-md ">
                <TransactionsTable />
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
