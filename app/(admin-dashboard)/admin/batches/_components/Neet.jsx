import React, { useState } from 'react'

import Image from "next/image";
import blogs1 from "../../../../../public/AdminDashboard/blogs-1.avif";
import blogs2 from "../../../../../public/AdminDashboard/blog-2.avif";
import blogs3 from "../../../../../public/AdminDashboard/blogs-3.avif";
import { FaRegHeart } from "react-icons/fa";

const Neet = () => {

    const [heart, setHeart] = useState(false);
  return (
    <div>
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
  )
}

export default Neet