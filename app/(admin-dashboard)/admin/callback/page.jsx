"use client"

import React, { useEffect, useState } from 'react'
import Nav from '../../_components/Nav'
import AdminSidebar from '../../_components/AdminSidebar'
import { TransactionsTable } from '../../_components/Table'

const page = () => {


    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);
    return (
        <>
            {
                domLoaded ? (
                    <div className='h-screen w-full '>
                        <Nav />
                        <div>
                            <div><AdminSidebar /></div>
                        </div>
                        <div id='batches' className='bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md'>
                            <div className='flex justify-between mr-4 mt-4'>
                                <h1 className='font-semibold text-xl ml-10 mt-2'>Callback Requests</h1>
                                <button className='pl-3 pr-3 pt-2 pb-2 text-white bg-[#11047A] rounded-md'>Add New Task</button>
                            </div>

                            <div className='h-[13vw] w-[81vw] flex ml-10 mt-3 pl-8 pr-8 pt-2 pb-2 bg-white rounded-lg'>
                            <form className=' mt-5' >
                                  <div className='flex gap-[15vw] items-center'>
                                  <div className='flex gap-2 flex-col'>
                                        <div className='flex gap-[3.1vw] items-center'>
                                            <label for="first_name" className="text-[1vw] ">First name</label>
                                            <input type="text" id="first_name" className="border-2 p-1  rounded-md" placeholder="John" required />
                                        </div>
                                        <div className='flex gap-3 items-center'>
                                            <label for="first_name" className="text-[1vw] ">Mobile Number</label>
                                            <input type="number" id="first_name" className="border-2 p-1 rounded-md" placeholder="John" required />
                                        </div>
                                        <div className='flex gap-[3.5vw] items-center'>
                                            <label for="first_name" className="text-[1vw] ">Email ID</label>
                                            <input type="email" id="first_name" className="border-2 p-1 rounded-md" placeholder="John" required />
                                        </div>   
                                    </div>
                                  <div className='flex gap-2 flex-col'>
                                        <div className='flex gap-5 items-center'>
                                            <label for="first_name" className="text-[1vw]">Class</label>
                                            <input type="text" id="first_name" className="border-2 p-1 rounded-md" placeholder="John" required />
                                        </div>
                                        <div className='flex gap-6 items-center'>
                                            <label for="first_name" className="text-[1vw] ">Goal</label>
                                            <input type="text" id="first_name" className="border-2 p-1 rounded-md" placeholder="John" required />
                                        </div>
                                        <div className='flex gap-5 items-center'>
                                            <label for="first_name" className="text-[1vw]">State</label>
                                            <input type="text" id="first_name" className="border-2 p-1 rounded-md" placeholder="John" required />
                                        </div>   
                                    </div>
                                      <button className='pl-3 pr-3 pt-2 pb-2 text-white bg-[#11047A] h-[3.4vw] w-[6vw] rounded-md'>Done</button>
                                  </div>

                                </form>


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



