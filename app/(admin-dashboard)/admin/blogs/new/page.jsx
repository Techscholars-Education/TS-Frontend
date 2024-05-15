"use client"

import AdminSidebar from '@/app/(admin-dashboard)/_components/AdminSidebar'
import Nav from '@/app/(admin-dashboard)/_components/Nav'
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Textarea } from "@material-tailwind/react";


const page = () => {
    const [heart, setHeart] = useState(false)
    const [input, setInput] = useState("")
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    

    return (
        <>
            {

                domLoaded ? (
                   
            
                
                    <div className='h-screen w-full'>
                        <Nav />
                        <div>
                            <div><AdminSidebar /></div>
                        </div>
                        <div id='batches' className='bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md'>
                            <div>
                                <h1 className='font-semibold text-xl ml-10 mt-2'>New Blog</h1>
                            </div>

                            <div className='bg-white h-[37.8vw] w-[76vw] ml-16 mt-3 rounded-md'>
                                <h1 className='font-semibold text-3xl text-[#012956] ml-5 mt-3'>Title</h1>
                                <div className='relative pl-2 pr-2'>
                                    <div  className='w-full bg-green-300 h-[9vw] rounded-md ' />
                                    <FaRegHeart className={`text-xl rounded-full p-1 cursor-pointer h-6 w-6 flex items-center justify-center absolute top-2 right-3 ${heart ? "bg-pink-400" : "bg-white"} ${heart ? "text-white" : "text-black"} transition-all ease-linear duration-200`} onClick={() => setHeart(!heart)} />
                                </div>
                                <div className='pl-2 pr-2'>
                                    <h1 className='font-semibold text-3xl text-[#012956] ml-3 mt-3' >Main Body</h1>
                                    <div className="w-full mt-2 ">
                                        <Textarea className='h-[21vw]' value={input} onChange={(e)=>setInput(e.target.value)} label="Message" />
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