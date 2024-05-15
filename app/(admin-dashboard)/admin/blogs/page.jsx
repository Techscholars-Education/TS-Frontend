"use client"
import React, { useEffect, useState } from 'react'
import Nav from '../../_components/Nav'
import AdminSidebar from '../../_components/AdminSidebar'
import Image from 'next/image'
import blogs1 from "../../../../public/AdminDashboard/admin_blogs.avif"
import blogs2 from "../../../../public/AdminDashboard/admin-blogs-2.avif"
import blogs3 from "../../../../public/AdminDashboard/admin-blogs-3.avif"
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link'

const page = () => {
    const [heart, setHeart] = useState(false)
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
      setDomLoaded(true);
  }, []);
    return (
        <>
        { domLoaded ? (
        <div>
            <Nav />
            <div>
                <div><AdminSidebar /></div>
            </div>
            <div id='feedback' className='bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md'>
                <div>
                    <h1 className='font-semibold text-xl ml-10 mt-2'>Feed</h1>
                </div>
                <div className='ml-10 mt-4 flex gap-7'>
                    <Link href="/admin/blogs/new" className='flex flex-col items-center justify-center gap-5 bg-white h-[20vw] w-[20vw] p-4 rounded-md cursor-pointer'>
                        <h1 className='font-bold text-2xl text-[#032756]'>+ New Blog</h1>
                    </Link>
                    <div className='flex flex-col  gap-2 bg-white h-[20vw] w-[20vw] p-2 rounded-md '>
                        <div className='w-full bg-green-300 h-[8vw] rounded-md relative'>
                              <FaRegHeart className={`text-xl rounded-full p-1 cursor-pointer h-6 w-6 flex items-center justify-center absolute top-2 right-3 ${heart ? "bg-pink-400": "bg-white"} ${heart ? "text-white" : "text-black"} transition-all ease-linear duration-200`} onClick={()=> setHeart(!heart)}/>
                        </div>
                        <div id='sec' className='flex flex-col gap-20'>
                            <div id='n-sec ' className='flex justify-between'>
                                <h1 className='font-normal text-[1.1vw]'>How to Crack JEE ?</h1>

                                <div className=' flex flex-col gap-2'>
                                    <p className='text-[.7vw] text-blue-400 font-semibold ml-4'>Liked By</p>
                                    <div className ="flex -space-x-5 rtl:space-x-reverse">
                                        <Image className="w-8 h-8 border-2 border-white rounded-full dark:border-white" src={blogs1} alt=""/>
                                            <Image className="w-8 h-8 border-2 border-white rounded-full dark:border-white" src={blogs2} alt=""/>
                                                <Image className="w-8 h-8 border-2 border-white rounded-full dark:border-white"src={blogs3} alt=""/>
                                                    <a className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                                                </div>

                                            </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='text-[.8vw] text-blue-400 font-semibold flex flex-col'>
                                            <p>Edit Blog</p>
                                            <p>Edit Posters</p>
                                        </div>
                                        <button className='pl-3 pr-3 pt-1 pb-1 rounded-xl bg-yellow-400 hover:bg-yellow-700 transition-all duration-200 ease-in-out hover:text-white'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ):(
    <div className='flex items-center justify-center h-screen w-full'>
                    <div className="loader"></div>
                    </div>
  )
        }
        </>
                )
}

                export default page