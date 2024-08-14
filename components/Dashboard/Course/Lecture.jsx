"use client"
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import coursePoster from "@/public/Course/coursePoster.svg";
import pause from "@/public/Dashboard/Subject/pause.png"

const Lecture = () => {
  return (
    <div className=" font-Poppins min-h-screen py-6 md:full md:mr-8 flex flex-col bg-[#f7faff] ">
    <div className='flex bg-slate-200 p-2 px-3 rounded-full w-24 md:mx-10'>
            <IoMdArrowBack className='mt-1 mr-1' />
    
            <button onClick={() => router.back()} className=''>
              Back
            </button>
          </div>
          <div className='flex flex-col  bg-white rounded-xl p-3 md:mr-10 mt-4 md:ml-10'>
    
          <div className="grid md:grid-cols-2 grid-cols-1">

                 </div>
            </div>
    </div>
  )
}

export default Lecture