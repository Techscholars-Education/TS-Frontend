"use client"

import React, { useEffect, useState } from 'react'
import Nav from '../../_components/Nav';
import AdminSidebar from '../../_components/AdminSidebar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Quiz from './_components/Quiz';


const page = () => {


    const [domLoaded, setDomLoaded] = useState(false);
    const [test, setTest] = useState(false)

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
                                <h1 className='font-semibold text-xl ml-10 mt-2'>Scholarship Test</h1>
                            </div>

                            <div className='h-[37.4vw] w-[81vw] flex ml-10 mt-3 gap-[11vw]'>
                                {test ? (
                                    <button onClick={() => setTest(false)} className='bg-white  h-[25vw] w-[35vw] pl-3 flex flex-col gap-5 pt-5  rounded-l-md  items-center justify-center'>
                                        <h1 className='font-semibold text-2xl'> + Add New Test</h1>
                                    </button>
                                ) : (
                                    <div className='bg-white  h-[33vw] w-[35vw] pl-3 pr-3 flex flex-col gap-5 pt-5  rounded-l-md'>
                                        <h1 className='font-semibold text-xl fonts'>Test Name</h1>
                                       <div id='1st'>
                                       <div className='relative'>
                                        <ul className='flex text-[.8vw] gap-3 font-semibold'>
                                           <button className='pl-2 pr-2 pt-1 pb-1 border-gray-300 border-2 rounded-lg hover:border-gray-600 transition-all ease-in-out duration-200'>Maths</button>
                                           <button className='pl-2 pr-2 pt-1 pb-1 border-gray-300 border-2 rounded-lg hover:border-gray-600 transition-all ease-in-out duration-200'>Physics</button>
                                           <button className='pl-2 pr-2 pt-1 pb-1 border-gray-300 border-2 rounded-lg hover:border-gray-600 transition-all ease-in-out duration-200'>chemitry</button>
                                           <button className='pl-2 pr-2 pt-1 pb-1 border-gray-300 border-2 rounded-lg hover:border-gray-600 transition-all ease-in-out duration-200'>+ Add Subject</button>
                                        </ul>
                                       <button className='absolute font-semibold text-[.8vw] right-3'>Add Timer</button>
                                        </div> 
                                       </div>
                                       <div>
                                        <Quiz/>
                                       </div>
                                       
                                    </div>
                                )}

                               <div className='flex flex-col'>
                               <div className='bg-white  h-[20vw] w-[23vw]  gap-5   rounded-l-md  '>
                                    
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DateCalendar sx={{ width: "240px", height:'300px',marginTop:"-5px" }} />
                                    </LocalizationProvider>
                                
                                </div>
                                <div className='bg-white  h-[20vw] w-[23vw]  gap-5   rounded-l-md mt-2 pt-2 pl-2 pr-2 '>
                                <h1 className='pl-3 pr-3 pt-1 pb-1 bg-[#B7AFE7] rounded-lg text-gray-700  text-xl font-semibold flex items-center justify-center '>Upcoming Scholorship Tests</h1>
                                  
                                 <div className='flex flex-col gap-[2vw]'>
                                 <div className='mt-1'>
                                 <h1 className='font-semibold '> Foundation</h1>
                                 <ul className='flex justify-between text-[.7vw]'>
                                    <li>S.No</li>
                                    <li>Exam Date</li>
                                    <li>Exam Time</li>
                                    <li>Exam Duration</li>
                                    <li>Class</li>
                                  </ul>
                                 </div>
                                 <div className='mt-1'>
                                 <h1 className='font-semibold '> JEE</h1>
                                 <ul className='flex justify-between text-[.7vw]'>
                                    <li>S.No</li>
                                    <li>Exam Date</li>
                                    <li>Exam Time</li>
                                    <li>Exam Duration</li>
                                    <li>Class</li>
                                  </ul>
                                 </div>
                                 <div className='mt-1'>
                                 <h1 className='font-semibold '> NEET</h1>
                                 <ul className='flex justify-between text-[.7vw]'>
                                    <li>S.No</li>
                                    <li>Exam Date</li>
                                    <li>Exam Time</li>
                                    <li>Exam Duration</li>
                                    <li>Class</li>
                                  </ul>
                                 </div>
                                 </div>

                                </div>
                               </div>

                            </div>


                        </div>
                    </div>
                ) : (
                    <div className='flex items-center justify-center h-screen w-full'>
                        <div className="loader"></div>
                    </div>

                )

            }
        </>
    )
}

export default page
















