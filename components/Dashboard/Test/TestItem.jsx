import Link from 'next/link'
import React from 'react'
import { FaBook, FaCalendarAlt, FaArrowRight,FaLock} from 'react-icons/fa';


function TestItem() {
  return (
    <div className='flex md:flex-row flex-col justify-between bg-white rounded-xl p-8 md:m-4 mx-1 md:mx-6 '>
        <div className='flex flex-col blur-[1px]'>

        <h2 className='text-[22px] font-[550] mb-3'>Test 01</h2>
         <div className='flex m-1.5'> <FaBook className='mt-1 mr-2'/><p className='text-[#3D3D3D] text-[16px]'>155 Questions • 155 Marks • 180 Mins • Attempts: O</p></div>
         <div className='flex m-1.5'> <FaCalendarAlt className='mt-1 mr-2'/><p className='text-[#3D3D3D] text-[16px]'>Held on 22 Mar 2024 at 05:00 PM</p></div>
         <div className='flex m-1.5'> <FaBook className='mt-1 mr-2'/> <p className='text-blue-400 underline text-[16px]'>View Syllabus</p></div>
         
        </div>
        <div className='relative bottom-44 right-72'>
          <FaLock className='text-gray-600 h-6 w-6 blur-[1px]'/>
        </div>
        <Link href="/dashboard/test/testdetail/alltestseries/test01detail" className='md:mt-12'>
        <FaArrowRight className='rounded-full bg-blue-600 text-white h-8 w-8 p-2'/>
          Start
        </Link>
    </div>
  )
}

export default TestItem