import Link from 'next/link'
import React from 'react'
import { FaBook, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';


function TestItem() {
  return (
    <div className='flex justify-between bg-white rounded-xl p-8 m-4 mx-6'>
        <div className='flex flex-col'>

        <h2 className='text-[22px] font-[550] mb-3'>Test 01</h2>
         <div className='flex m-1.5'> <FaBook className='mt-1 mr-2'/><p className='text-[#3D3D3D] text-[16px]'>155 Questions • 155 Marks • 180 Mins • Attempts: O</p></div>
         <div className='flex m-1.5'> <FaCalendarAlt className='mt-1 mr-2'/><p className='text-[#3D3D3D] text-[16px]'>Held on 22 Mar 2024 at 05:00 PM</p></div>
         <div className='flex m-1.5'> <FaBook className='mt-1 mr-2'/> <p className='text-blue-400 underline text-[16px]'>View Syllabus</p></div>
         
        </div>
        <Link href="/dashboard/test/testdetail/alltestseries/test01detail" className='mt-12'>
        <FaArrowRight className='rounded-full bg-blue-600 text-white h-8 w-8 p-2'/>
          Start
        </Link>
    </div>
  )
}

export default TestItem