"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";

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
            id="feedback"
            className="bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
          >
            <div>
              <h1 className="font-semibold text-xl ml-10 mt-2">Feedback</h1>
            </div>
            <div className="ml-10 mt-4">
              <div className="flex flex-col gap-5 bg-white h-[20vw] w-[20vw] p-4 rounded-md">
                <h1 className="font-semibold text-xl">+ Add Feedback</h1>
                <div className="flex flex-col gap-2">
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
