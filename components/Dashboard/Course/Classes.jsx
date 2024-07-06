import React from 'react'
import CourseDetailNavbar from './CourseDetailNavbar'
import { FaSquareRootAlt, FaAtom, FaFlask, FaVial } from 'react-icons/fa';
function Classes() {
    const subjects = [
        { id:1, subject: 'Mathematics', chapters: 16, icon: <FaSquareRootAlt className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { id:2, subject: 'Physics', chapters: 21, icon: <FaAtom className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { id:3, subject: 'Chemistry', chapters: 30, icon: <FaFlask className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { id:4, subject: 'Organic Chemistry', chapters: 10, icon: <FaVial className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { id:5, subject: 'Inorganic Chemistry', chapters: 12, icon: <FaFlask className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { id:6, subject: 'Physical Chemistry', chapters: 8, icon: <FaFlask className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
        { id:7, subject: 'Mathematics Advanced', chapters: 14, icon: <FaSquareRootAlt className=' h-7 w-7 mr-3 mt-2 text-blue-600' /> },
      ];
      
  return (
    <div className=" font-Poppins min-h-screen py-6 md:w-[82vw] flex flex-col bg-[#f7faff] ">
    <CourseDetailNavbar/>
    <div className='flex flex-col  bg-white rounded-xl p-3 mt-4 md:ml-10'>
        <div className='m-4'>
            <h2 className='text-[22px] font-[550]'>Subject</h2>
            <p className='text-[14px] text-gray-500 mt-2'>Select your subjects & start learning</p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1">
            {
                subjects.map((ele)=>(   
                      <div className='flex m-4' key={ele.id}>
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
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Classes