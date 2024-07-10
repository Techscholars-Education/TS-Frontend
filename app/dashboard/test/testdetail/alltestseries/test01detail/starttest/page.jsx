import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import LeftNavigation from '@/components/LeftNavigation/LeftNavigation'
import Link from 'next/link'
import React from 'react'
import { FaBook } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'
import { FaLock } from 'react-icons/fa';
import { IoAlarmOutline } from "react-icons/io5";


function page() {
    const questions = Array.from({ length: 30 }, (_, index) => index + 1);
    return (

        <div className="flex w-full overflow-x-hidden ">
            <LeftNavigation />
            <div className='flex flex-col'>


                <div className=" font-Poppins min-h-screen  w-[80vw] bg-[#f7faff] ">
                    <DashboardNavbar title="Test series Foundation" />
                    <div className=" my-4 flex flex-col mx-8 blur-[1.5px]">
                        <div className='flex justify-between'>

                        <div className='flex flex-col mr-2 my-8'>

                            <h2 className='text-[22px] font-[550] mb-3'>Test 01</h2>
                            <div className='flex m-1.5'> <IoAlarmOutline className='h-5 w-5 mr-2' /><p className='text-[#3D3D3D] text-[16px]'>00:20:30</p></div>

                        </div>
                        <div className='flex mx-4 justify-center align-middle items-center'>
                        <Link href="#" className='border rounded-full ml-6    text-center border-gray-400 h-10   p-2.5 px-6 text-sm m-2'>
                                    View Instructions
                                    </Link>
                                    <Link href="#" className='bg-[#0079FC] ml-6 rounded-full text-white h-10  text-center p-2.5 px-6 text-sm m-2'>
                                    Submit Test
                                    </Link>
                        </div>
                        </div>
                        <div className='grid grid-cols-3'>
                            <div className='flx flex-col col-span-2'>
                                <div className='bg-white rounded-xl flex'>
                                    <Link href="#" className='bg-[#0079FC] ml-6 rounded-md h-8 w-8 text-white text-center pt-1.5 text-sm m-2'>
                                        1.
                                    </Link>
                                    <div className='bg-[#0079FC] rounded-lg w-[4px] my-2 mx-6'>

                                    </div>
                                    <div className='border rounded-full my-1.5  text-center'>
                                        <p className='text-sm px-4 py-2'>
                                            Marks: <span className='text-green-600'>+1</span> <span className='text-red-600'>-0.25</span>
                                        </p>
                                    </div><div className='border rounded-full my-1.5  mx-6 text-center'>
                                        <p className='text-sm px-4 py-2'>
                                            Type:Single
                                        </p>
                                    </div>



                                </div>
                                <div className='mt-4 bg-white rounded-xl p-6 flex flex-col'>
                                    <h3 className='text-lg font-[500]'>
                                        * The first ionisation potential of Na is 5. lev . The value of electron gain enthalpy of Na+ will be
                                    </h3>
                                    <div className='border rounded-xl flex justify-between p-3 mt-4'>
                                        <div className='flex'>
                                            <p className='font-[500] text-[20px]'>01</p>
                                            <div className='bg-[#0079FC] w-[4px] my-0.5 rounded-lg mx-6 '>

                                            </div>
                                            <p className='text-[16px] mt-1 text-gray-500'>123</p>
                                        </div>
                                        <div>
                                            <input type='radio'></input>

                                        </div>


                                    </div>
                                    <div className='border rounded-xl flex justify-between p-3 mt-4'>
                                        <div className='flex'>
                                            <p className='font-[500] text-[20px]'>02</p>
                                            <div className='bg-[#0079FC] w-[4px] my-0.5 rounded-lg mx-6 '>

                                            </div>
                                            <p className='text-[16px] mt-1 text-gray-500'>123</p>
                                        </div>
                                        <div>
                                            <input type='radio'></input>

                                        </div>


                                    </div>
                                    <div className='border rounded-xl flex justify-between p-3 mt-4'>
                                        <div className='flex'>
                                            <p className='font-[500] text-[20px]'>03</p>
                                            <div className='bg-[#0079FC] w-[4px] my-0.5 rounded-lg mx-6 '>

                                            </div>
                                            <p className='text-[16px] mt-1 text-gray-500'>123</p>
                                        </div>
                                        <div>
                                            <input type='radio'></input>

                                        </div>


                                    </div>
                                    <div className='border rounded-xl flex justify-between p-3 mt-4'>
                                        <div className='flex'>
                                            <p className='font-[500] text-[20px]'>04</p>
                                            <div className='bg-[#0079FC] w-[4px] my-0.5 rounded-lg mx-6 '>

                                            </div>
                                            <p className='text-[16px] mt-1 text-gray-500'>123</p>
                                        </div>
                                        <div>
                                            <input type='radio'></input>

                                        </div>


                                    </div>


                                </div>
                            </div>
                            <div className='bg-white rounded-xl ml-4'>
                                <div className='grid grid-cols-2'>
                                    <div className='flex'>

                                        <Link href="#" className='bg-green-600 ml-6 rounded-md h-8 w-8 text-white text-center pt-1.5 text-sm m-2'>
                                            01
                                        </Link>
                                        <p className='text-gray-500 text-sm  mt-2.5'>
                                            Answered

                                        </p>
                                    </div>
                                    <div className='flex'>

                                        <Link href="#" className='bg-red-600 ml-6 rounded-md h-8 w-8 text-white text-center pt-1.5 text-sm m-2'>
                                            00
                                        </Link>
                                        <p className='text-gray-500 text-sm mt-2.5'>
                                            Not Answered


                                        </p>
                                    </div>
                                    <div className='flex'>

                                        <Link href="#" className='bg-gray-400 ml-6 rounded-md h-8 w-8 text-white text-center pt-1.5 text-sm m-2'>
                                            00
                                        </Link>
                                        <p className='text-gray-500 text-sm mt-2.5'>
                                            Not Visited


                                        </p>
                                    </div>
                                    <div className='flex'>

                                        <Link href="#" className='bg-red-600 ml-6  rounded-md h-8 w-8 p-2 text-white text-center pt-1.5 text-sm m-2'>
                                            00
                                        </Link>
                                        <p className='text-gray-500 mt-2.5 text-sm'>
                                            Answered & Marked for Review

                                        </p>
                                    </div>
                                    <div className='flex'>

                                        <Link href="#" className='bg-[#0079FC] ml-6 rounded-md h-8 w-8 text-white text-center pt-1.5 text-sm m-2'>
                                            00
                                        </Link>
                                        <p className='text-gray-500 text-sm mt-2.5'>
                                            Marked for Review


                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 gap-3 p-6">
                                    {questions.map((question, index) => (
                                        <Link key={index} href="#" passHref className={`${index === 0 ? 'bg-[#0079FC] text-white' : 'bg-blue-100 text-[#0079FC]'
                                            } rounded-md  text-center flex items-center justify-center text-sm m-2  h-10 w-10 `}>

                                            {question}.

                                        </Link>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-72 ml-96 '>
                  <FaLock className='text-gray-600 h-8 w-8 blur-[1px]' />
                </div>
                </div>
            </div>

        </div>

    )
}

export default page