import React, { useState } from 'react'

import Image from "next/image";
import blogs1 from "../../../../../public/AdminDashboard/blogs-1.avif";
import blogs2 from "../../../../../public/AdminDashboard/blog-2.avif";
import blogs3 from "../../../../../public/AdminDashboard/blogs-3.avif";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';

const Foundation = () => {

    const [heart, setHeart] = useState(false);
    return (
        <div>
           <div className="flex flex-col  gap-2 bg-white lg:h-[23vw] lg:w-[22vw]  p-2 pl-5 pr-5 pt-5 rounded-md lg:mr-0 mr-[8vw]  h-[32vh] w-[75vw]">
                <div className="w-full bg-green-300 lg:h-[12vw] h-[13vh] rounded-md relative">
                <div className='rounded-full p-2 cursor-pointer h-10 w-10 flex items-center justify-center bg-white  absolute top-2 right-3'>
                   <FaRegHeart className={`text-xl   ${heart ? "text-pink-600" : "text-black"
                            } transition-all ease-linear duration-200  `} onClick={() => setHeart(!heart)}/>
                </div>
                   
                </div>
                <div id="sec" className="flex flex-col gap-5">
                   <div className='n-first flex flex-col '>
                   <div id="n-sec " className="flex justify-between">
                   <h1 className="lg:text-[1.1vw] text-[7vw] font-semibold">
                          Foundation
                        </h1>

                        <div className=" flex">
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
                    <div>
                        <p className='font-normal  lg:text-[.8vw] text-[3vw]] text-gray-300'>Ramesh,Suresh and many more...</p>
                    </div>
                   </div>
                   <Link href={"/admin/batches/foundation"} className='btn flex justify-end'>
                    <button className='bg-TechBlue  pl-4 pr-4 pt-2 pb-2 rounded-xl text-white  lg:text-[.9vw] text-[3vw] flex hover:bg-black transition-all ease-in-out duration-200'>Place Bids</button>
                   </Link>
                </div>
            </div>

        </div>
    )
}

export default Foundation