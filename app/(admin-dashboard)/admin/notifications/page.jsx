"use client"

import React, { useEffect, useState } from 'react'
import Nav from '../../_components/Nav';
import AdminSidebar from '../../_components/AdminSidebar';
import { Option, Select } from '@material-tailwind/react';

const page = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (value) => {

        setSelectedValue(value)
        console.log(value);
    }

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
                            <div>
                                <h1 className='font-semibold text-xl ml-10 mt-2'>New Blog</h1>
                            </div>

                            <div className='h-[18vw] w-[80vw] flex ml-10 mt-3 '>
                                <div className='bg-white  w-[50vw] pl-3 flex flex-col gap-5 pt-5  rounded-l-md'>
                                    <h1 className='font-semibold text-[.9vw]'>Heading</h1>
                                    <p className='font-semibold text-[.85vw]'>Body</p>
                                </div>
                                <div className='w-[30vw] bg-[#012657] rounded-md text-white pl-3 flex flex-col gap-[3vw]'>
                                    <div id='option' className=' flex flex-col gap-4 mt-4'>
                                        <div className='flex items-center gap-[13vw]'>
                                            <h1 className='font-semibold text-[.8vw]'>Class</h1>
                                            <div className="w-30">
                                                <Select value={selectedValue} onChange={handleChange} label="Select Class" className='text-white'>
                                                    <Option>9th</Option>
                                                    <Option>10th</Option>
                                                    <Option>11th</Option>
                                                    <Option>12th</Option>
                                                </Select>
                                             
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-[13vw]'>
                                            <h1 className='font-semibold text-[.8vw]'>Types</h1>
                                            <div className="w-30">
                                                <Select label="Select Types" className='text-white'>
                                                    <Option>Foundation</Option>
                                                    <Option>Foundation</Option>
                                                    <Option>Foundation</Option>
                                                    <Option>Foundation</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-[13vw]'>
                                            <h1 className='font-semibold text-[.8vw]'>Plan</h1>
                                            <div className="w-30 ml-2">
                                                <Select label="Select Plan" className='text-white'>
                                                    <Option>Starter</Option>
                                                    <Option>Starter</Option>
                                                    <Option>Starter</Option>
                                                    <Option>Starter</Option>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <button className='absolute right-3 pl-3 pr-3 pt-1 pb-1 h-10 w-[8vw] bg-yellow-400 rounded-xl text-black hover:bg-yellow-700 hover:text-white transition-all ease-in-out duration-200'>Send</button>
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