"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import Image from "next/image";
import blogs1 from "../../../../public/AdminDashboard/blogs-1.avif";
import blogs2 from "../../../../public/AdminDashboard/blog-2.avif";
import blogs3 from "../../../../public/AdminDashboard/blogs-3.avif";
import { FaRegHeart } from "react-icons/fa";

const Page = () => {
  const [heart, setHeart] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [blogs, setBlogs] = useState(true);
  const [input, setInput] = useState("");
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
          {blogs ? (
            <div
              id="feedback"
              className="bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
            >
              <div>
                <h1 className="font-semibold text-xl ml-10 mt-2">Feed</h1>
              </div>
              <div className="ml-10 mt-4 flex gap-7">
                <button
                  onClick={() => setBlogs(!blogs)}
                  className="flex flex-col items-center justify-center gap-5 bg-white h-[20vw] w-[20vw] p-4 rounded-md cursor-pointer"
                >
                  <h1 className="font-bold text-2xl text-[#032756]">
                    + New Blog
                  </h1>
                </button>
                <div className="flex flex-col  gap-2 bg-white h-[20vw] w-[20vw] p-2 rounded-md ">
                  <div className="w-full bg-green-300 h-[8vw] rounded-md relative">
                    <FaRegHeart
                      className={`text-xl rounded-full p-1 cursor-pointer h-6 w-6 flex items-center justify-center absolute top-2 right-3 ${
                        heart ? "bg-pink-400" : "bg-white"
                      } ${
                        heart ? "text-white" : "text-black"
                      } transition-all ease-linear duration-200`}
                      onClick={() => setHeart(!heart)}
                    />
                  </div>
                  <div id="sec" className="flex flex-col gap-20">
                    <div id="n-sec " className="flex justify-between">
                      <h1 className="font-normal text-[1.1vw]">
                        How to Crack JEE ?
                      </h1>

                      <div className=" flex flex-col gap-2">
                        <p className="text-[.7vw] text-blue-400 font-semibold ml-4">
                          Liked By
                        </p>
                        <div className="flex -space-x-5 rtl:space-x-reverse">
                          <Image
                            className="w-8 h-8 border-2 border-white rounded-full dark:border-white"
                            src={blogs1}
                            alt=""
                          />
                          <Image
                            className="w-8 h-8 border-2 border-white rounded-full dark:border-white"
                            src={blogs2}
                            alt=""
                          />
                          <Image
                            className="w-8 h-8 border-2 border-white rounded-full dark:border-white"
                            src={blogs3}
                            alt=""
                          />
                          <a
                            className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                            href="#"
                          >
                            +99
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-[.8vw] text-blue-400 font-semibold flex flex-col">
                        <p>Edit Blog</p>
                        <p>Edit Posters</p>
                      </div>
                      <button className="pl-3 pr-3 pt-1 pb-1 rounded-xl bg-yellow-400 hover:bg-yellow-700 transition-all duration-200 ease-in-out hover:text-white">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              id="batches"
              className="bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
            >
              <div>
                <h1 className="font-semibold text-xl ml-10 mt-2">New Blog</h1>
              </div>

              <div className="bg-white h-[37.8vw] w-[76vw] ml-16 mt-3 rounded-md relative">
                <h1 className="font-semibold text-3xl text-[#012956] ml-5 mt-3">
                  Title
                </h1>
                <div className="relative pl-2 pr-2">
                  <div className="w-full bg-green-300 h-[9vw] rounded-md " />
                  <FaRegHeart
                    className={`text-xl rounded-full p-1 cursor-pointer h-6 w-6 flex items-center justify-center absolute top-2 right-3 ${
                      heart ? "bg-pink-400" : "bg-white"
                    } ${
                      heart ? "text-white" : "text-black"
                    } transition-all ease-linear duration-200`}
                    onClick={() => setHeart(!heart)}
                  />
                </div>
                <div className="pl-2 pr-2 ">
                  <h1 className="font-semibold text-3xl text-[#012956] ml-3 mt-3">
                    Main Body
                  </h1>
                  <div className="w-full mt-2">
                    <textarea
                      name=""
                      id=""
                      className="h-[17vw] w-full border-2 border-gray-400 focus:border-black transition-all ease-in-out duration-200 rounded-lg p-2"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <button
                  onClick={() => setBlogs(!blogs)}
                  className="bg-yellow-500 p-3 rounded-xl font-semibold absolute bottom-2 right-5 hover:bg-yellow-700 hover:text-white transition-all ease-in-out duration-200 "
                >
                  Publish
                </button>
              </div>
            </div>
          )}
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
