
"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { IoMdArrowBack } from "react-icons/io";

function CourseDetailNavbar() {
    const pathname = usePathname();


  
    const isActive = (path) => pathname === path;
  return (
    <div className='flex flex-col mx-10'>
        <div className='flex bg-slate-200 p-2 px-3 rounded-full w-24'>
           <IoMdArrowBack className='mt-1 mr-1'/>

        <Link href="/dashboard/home" className=''>
            Back
        </Link>
        </div>
        <nav className=''>
        <ul className="mt-4 mx-auto font-Poppins flex bg-white rounded-xl items-center align-middle p-4 ">
          <li className="flex items-center ">
            
            <Link
              href="/dashboard/my-course/coursedetail"
              className={`font-semibold ${isActive('/dashboard/my-course/coursedetail') ? 'text-[#0079FC] underline' : 'text-gray-500 hover:text-gray-400 mr-12 '}`}
            >
              Description

            </Link>
          </li>
          <li className="flex items-center ">
           
            <Link
              href="/dashboard/my-course/coursedetail/classes"
              className={`font-semibold ${isActive('/dashboard/my-course/coursedetail/classes') ? 'text-[#0079FC] underline' : 'text-gray-500 hover:text-gray-400 ml-12'}`}
            >
              All Classes

            </Link>
          </li>
          <li className="flex items-center ">
            
            <Link
              href="/dashboard/test"
              className={`font-semibold ${isActive('/dashboard/test') ? 'text-[#0079FC] underline' : 'text-gray-500 hover:text-gray-400 ml-12'}`}
            >
              Tests
            </Link>
          </li>
          <li className="flex items-center ">
            
            <Link
              href="/dashboard/my-course/coursedetail/announcements"
              className={`font-semibold ${isActive('/dashboard/my-course/coursedetail/announcements') ? 'text-[#0079FC] underline' : 'text-gray-500 hover:text-gray-400 ml-12'}`}
            >
             Announcements
            </Link>
          </li>
         
          
         
        </ul>
        </nav>
    </div>
  )
}

export default CourseDetailNavbar