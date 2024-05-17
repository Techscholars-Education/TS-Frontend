"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import { TransactionsTable } from "../../_components/Table";

const Page = () => {
  const [domLoaded, setDomLoaded] = useState(false);

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
              <h1 className="font-semibold text-xl ml-10 mt-2">Student Data</h1>
            </div>

            <div className="h-[37.4vw] w-[81vw] flex ml-10 mt-3 ">
              <div className="bg-white  w-full pl-3 flex flex-col gap-5 pt-5  rounded-l-md">
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
