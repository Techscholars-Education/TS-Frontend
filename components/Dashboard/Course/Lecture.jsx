"use client"
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import coursePoster from "@/public/Course/coursePoster.svg";
import pause from "@/public/Dashboard/Subject/pause.png"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdPlayLesson } from "react-icons/md";

const Lecture = ({lecture}) => {
    const router = useRouter()
     
    
    const lect = [
        { id:1, head: <h1>Hero to Zero-UX design with Don Norman -  <span className='text-TechBlue font-normal'>Class 8</span> </h1>,date:{day:28,month:"Jul",year:2024},time:"01:30:00",class:"Class-08" },
        { id:1, head: <h1>Hero to Zero-UX design with Don Norman - <span className='text-TechBlue font-normal'>Class 7</span></h1>,date:{day:28,month:"Jul",year:2024},time:"01:30:00",class:"Class-07" },
        { id:1, head: <h1>Hero to Zero-UX design with Don Norman - <span className='text-TechBlue font-normal'>Class 6</span></h1>,date:{day:28,month:"Jul",year:2024},time:"01:30:00",class:"Class-06" },
        { id:1, head: <h1>Hero to Zero-UX design with Don Norman - <span className='text-TechBlue font-normal'>Class 5</span></h1>,date:{day:28,month:"Jul",year:2024},time:"01:30:00",class:"Class-05" },
        { id:1, head: <h1>Hero to Zero-UX design with Don Norman - <span className='text-TechBlue font-normal'>Class 4</span></h1>,date:{day:28,month:"Jul",year:2024},time:"01:30:00",class:"Class-04" },
        { id:1, head: <h1>Hero to Zero-UX design with Don Norman - <span className='text-TechBlue font-normal'>Class 3</span></h1>,date:{day:28,month:"Jul",year:2024},time:"01:30:00",class:"Class-03" },
       
       
       
      ];

  return (
    <div className=" font-Poppins min-h-screen py-6 md:full md:mr-8 flex flex-col bg-[#f7faff] ">
    <div className='flex bg-slate-200 p-2 px-3 rounded-full w-24 md:mx-10'>
            <IoMdArrowBack className='mt-1 mr-1' />
    
            <button onClick={() => router.back()} className=''>
              Back
            </button>
          </div>
          <div className=' bg-white rounded-xl p-3 md:mr-10 mt-4 md:ml-10'>
    
          <div className="grid md:grid-cols-3 grid-cols-1">
          {
                lect.map((ele)=>(   
                      <div className='flex flex-col m-4 border border-gray-100 rounded-lg w-[20vw]' key={ele.id}>
                        <div className='' id='image'>
                                  <Image src={coursePoster} alt='img' className='h-[20vh] w-full object-cover rounded-t-lg'/>
                        </div>
                        <div id='para' className='pl-4 pr-4'>
                               <div className='font-medium text-[19px]'>{ele.head}</div>
                               <div className='bg-gray-200 h-[0.15vh] w-full rounded-lg'></div>
                               <div id='icons' className='flex'>
                                 <div id='icons_1' className='flex'>
                                          <FaCalendarAlt className='text-[1.2vw] text-gray-400'/>
                                          <h1>{ele.date.day} {ele.date.month},<span>{ele.date.year}</span></h1>
                                 </div>
                                 <div className='h-5 w-[0.1vw] bg-red-500'></div>
                                 

                               </div>
                        </div>
                      </div>
                ))
            }
                 </div>
            </div>
    </div>
  )
}

export default Lecture