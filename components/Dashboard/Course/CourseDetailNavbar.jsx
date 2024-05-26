
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
        <div className='flex bg-slate-100 p-2 px-3 rounded-full w-24'>
           <IoMdArrowBack className='mt-1 mr-1'/>

        <Link href="/dashboard/home" className=''>
            Back
        </Link>
        </div>
        <nav>
        <ul className="mt-12 mx-auto font-Poppins flex ">
          <li className="flex items-center mb-6">
            
            <a
              href="/dashboard/my-course/coursedetail"
              className={`font-semibold ${isActive('/dashboard/my-course/coursedetail') ? 'text-[#0079FC] underline' : 'text-gray-500 hover:text-gray-400 '}`}
            >
              Description

            </a>
          </li>
          <li className="flex items-center mb-6">
           
            <a
              href="/dashboard/my-course/coursedetail/all-classes"
              className={`font-semibold ${isActive('/dashboard/my-course/coursedetail/all-classes') ? 'text-[#0079FC]' : 'text-gray-500 hover:text-gray-400 ml-12'}`}
            >
              All Classes

            </a>
          </li>
          <li className="flex items-center mb-6">
            
            <a
              href="/dashboard/my-course/coursedetail/tests"
              className={`font-semibold ${isActive('/dashboard/my-course/coursedetail/tests') ? 'text-[#0079FC]' : 'text-gray-500 hover:text-gray-400 ml-12'}`}
            >
              Tests
            </a>
          </li>
          <li className="flex items-center mb-6">
            
            <a
              href="/dashboard/my-course/coursedetail/announcements"
              className={`font-semibold ${isActive('/dashboard/my-course/coursedetail/announcements') ? 'text-[#0079FC]' : 'text-gray-500 hover:text-gray-400 ml-12'}`}
            >
             Announcements
            </a>
          </li>
         
          
         
        </ul>
        </nav>
    </div>
  )
}

export default CourseDetailNavbar