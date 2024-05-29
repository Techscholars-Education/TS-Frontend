import React from 'react'
import CourseDetailNavbar from './CourseDetailNavbar'
import { FaSquareRootAlt, FaAtom, FaFlask, FaVial } from 'react-icons/fa';
function Classes() {
    const subjects = [
        { subject: 'Mathematics', chapters: 16, icon: <FaSquareRootAlt className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { subject: 'Physics', chapters: 21, icon: <FaAtom className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { subject: 'Chemistry', chapters: 30, icon: <FaFlask className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { subject: 'Organic Chemistry', chapters: 10, icon: <FaVial className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { subject: 'Inorganic Chemistry', chapters: 12, icon: <FaFlask className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { subject: 'Physical Chemistry', chapters: 8, icon: <FaFlask className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { subject: 'Mathematics Advanced', chapters: 14, icon: <FaSquareRootAlt className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
      ];
      
  return (
    <div className=" font-Poppins min-h-screen py-10 w-[82vw] flex flex-col bg-[#F0F7FF] ">
    <CourseDetailNavbar/>
    <div className='flex flex-col  bg-white rounded-xl p-3 mt-4 ml-10'>
        <div className='m-4'>
            <h2 className='text-[22px] font-[550]'>Subject</h2>
            <p className='text-[14px] text-gray-500 mt-2'>Select your subjects & start learning</p>
        </div>
        <div className="grid grid-cols-4">
            {
                subjects.map((ele)=>{
                    return <>
                      <div className='flex m-4'>
                        <div>{ele.icon}</div>
                        <div className='flex flex-col'>
                           
                                <h2 className='text-[16px]'>
                                    {ele.subject}
                                </h2>
                              <p className='text-[14px]'>
                                {ele.chapters} chapters
                              </p>
                        </div>
                      </div>
                    </>
                })
            }
        </div>
    </div>
    </div>
  )
}

export default Classes