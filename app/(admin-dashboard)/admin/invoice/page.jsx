"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import { AiFillPrinter } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";

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
            className="bg-[#e6f0ff] overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
          >
            <div>
              <h1 className="font-semibold text-xl ml-10 mt-2">Invoice</h1>
            </div>

            <div className="h-[37.4vw] w-[81vw] flex ml-10 mt-3 bg-white ">
              <div className="flex flex-col ">
                <div className="w-[76vw] h-[13vw]  pt-[2vw] pl-[3vw] pr-[3vw] flex gap-[18vw]">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <h1 className="text-[.9vw]">Invoice From :</h1>
                      <h2 className="text-[.9vw] font-semibold">
                        Codementor Hub Education Pvt Ltd
                      </h2>
                    </div>
                    <div className="flex gap-2">
                      <h1 className="text-[.9vw]">Invoice To :</h1>
                      <div>
                        <h2 className="text-[.9vw] ">Austin Miller</h2>
                        <h2 className="text-[.9vw] ">M : +91 2342748724</h2>
                        <h2 className="text-[.9vw] ">
                          Email ID : dsjhdjhsd@gmail.com
                        </h2>
                        <h2 className="text-[.9vw] ">
                          A-4, XYZ Street, XYZ City, XYZ State, PIN : XYZ ,INDIA{" "}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <div className="flex gap-2">
                      <h1 className="text-[.9vw]">Invoice From :</h1>
                      <h2 className="text-[.9vw] ">12 Nov 2023</h2>
                    </div>
                    <div className="flex gap-2">
                      <h1 className="text-[.9vw]">Invoice Number :</h1>
                      <h2 className="text-[.9vw] ">122342</h2>
                    </div>
                    <div className="flex gap-2">
                      <h1 className="text-[.9vw]">Payment Mode :</h1>
                      <h2 className="text-[.9vw] ">Online - UPI</h2>
                    </div>
                  </div>
                </div>

                <div className="w-[76vw] h-[9vw] pl-[3vw] pr-[3vw]">
                  <div className="w-[65vw] h-[4vw] bg-[#e6f0ff] pt-[1vw] pb-[1vw] pl-[3vw] pr-[3vw] rounded-lg ">
                    <div className="flex gap-[7vw] items-center">
                      <h1>Serial No.</h1>
                      <h1>Items & Description</h1>
                      <h1>Amount</h1>
                      <h1>GST (18%)</h1>
                      <h1>Total Cost</h1>
                    </div>
                  </div>

                  <div className="w-[65vw] h-[4vw] pt-[1vw] pb-[1vw] pl-[3vw] pr-[3vw] rounded-lg border-b-2 border-b-gray-300">
                    <div className="flex gap-[7vw] items-center ml-[2vw]">
                      <h1>1</h1>
                      <h1 className="ml-[2vw]">Ignite Batch Class 9</h1>
                      <h1>Rs. 2499</h1>
                      <h1 className="ml-[-1vw]">Rs. 449.82</h1>
                      <h1 className="ml-[.5vw]">Rs. 2948.82</h1>
                    </div>
                  </div>
                </div>

                <div className="w-[76vw] h-[9vw] pl-[3vw] pr-[3vw]">
                  <div className="flex flex-col gap-5 mt-[2vw] ">
                    <div className="font-semibold text-[.9vw]">
                      <h1>Amount Received: Rs.2948.82 </h1>
                      <h1>
                        Amount Received in words : Rupees Two Thousand Nine
                        Hundred Forty Eight Rupees and Eighty Two Paisa Only.
                      </h1>
                    </div>

                    <h1>
                      Notes:  This is a computer generated pay receipt ,does not
                      require signature
                    </h1>
                  </div>
                </div>
                <div className="w-[76vw] h-[9vw] pl-[3vw] pr-[3vw] relative ">
                  <div className="absolute right-5 flex gap-3">
                    <AiFillPrinter className="p-2 h-10 w-10 border-2 border-gray-300 rounded-lg cursor-pointer text-TechBlue hover:text-black hover:border-black transition-all ease-in-out duration-200" />
                    <button className="pl-3 pr-3 pt-2 pb-2 text-white bg-TechBlue rounded-md flex items-center hover:bg-black transition-all ease-in-out duration-200 gap-1">
                      Upload <FaRegPaperPlane />
                    </button>
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
