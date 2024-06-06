import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import React from 'react'
import Link from 'next/link';
import { IoMdArrowBack } from "react-icons/io";
import { FaBook, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

function page() {
  return (
    <div>
      <section className="flex w-full">
        <LeftNavigation />
        <div className='flex flex-col'>


          <div className=" font-Poppins min-h-screen  w-full bg-[#F0F7FF] ">
            <DashboardNavbar title="Test series Foundation" />
            <div className=" my-4 flex flex-col mx-8 ">
              <div className='flex bg-slate-200 p-2 px-3 rounded-full w-24'>
                <IoMdArrowBack className='mt-1 mr-1' />

                <Link href="/dashboard/home" className=''>
                  Back
                </Link>
              </div>
              <div className='flex flex-col mr-2 mt-12'>

                <h2 className='text-[22px] font-[550] mb-3'>Test 01</h2>
                <div className='flex m-1.5'> <FaBook className='mt-1 mr-2' /><p className='text-[#3D3D3D] text-[16px]'>155 Questions • 155 Marks • 180 Mins • Attempts: O</p></div>

              </div>
              <div className='flex flex-col bg-white rounded-xl p-8 mt-12'>
                <div className='flex flex-col'>

                  <h2 className='text-[22px] font-[550] mb-3'>Syllabus</h2>
                  <div className='flex m-1.5'> <p className='text-[#3D3D3D] text-[16px]'>Physics - FULL SYLLABUS</p></div>
                  <div className='flex m-1.5'> <p className='text-[#3D3D3D] text-[16px]'>Chemistry - FULL SYLLABUS</p></div>
                  <div className='flex m-1.5'>  <p className='text-[#3D3D3D]  text-[16px]'>Mathematics - FULL SYLLABUS</p></div>

                </div>
                <div className='flex flex-col mt-8'>

                  <h2 className='text-[22px] font-[550] mb-3'>Instructions</h2>
                  <div className='flex m-1.5'> <p className='text-[#3D3D3D] text-[16px]'>-Duration of the exam: 180 Minutes</p></div>
                  <div className='flex m-1.5'> <p className='text-[#3D3D3D] text-[16px]'>-Attempt all the questions</p></div>
                  <div className='flex m-1.5'>  <p className='text-[#3D3D3D]  text-[16px]'>-Marking is (+1) for every correct answer, (-0,2S) for every wrong answer,</p></div>
                  <div className='flex m-1.5'>  <p className='text-[#3D3D3D]  text-[16px]'>-Total Marks: ISS -The question paper consists of 3 sections:</p></div>
                  <div className='flex m-1.5'>  <p className='text-[#3D3D3D]  text-[16px]'>-Section -I: Physics (40 questions)</p></div>
                  <div className='flex m-1.5'>  <p className='text-[#3D3D3D]  text-[16px]'></p>-Section -II: Chemistry (40 questions)</div>
                  <div className='flex m-1.5'>  <p className='text-[#3D3D3D]  text-[16px]'>-Section -Ill: Mathematics (7S questions)</p></div>


                </div>
                <Link href="/dashboard/test/testdetail/alltestseries/test01detail/starttest" className="rounded-full mt-16 bg-blue-600 text-white text-sm w-60 py-2 px-20 mx-2">
                  Start Test
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default page