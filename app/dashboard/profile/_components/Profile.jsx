import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import Image from 'next/image'
import React from 'react'
import men from "../../../../public/Dashboard/men_nav.jpg"
import { TbEdit } from "react-icons/tb";


const Profile = () => {
    return (
        <div className="bg-white font-Poppins w-full overflow-hidden">
            <DashboardNavbar title={"Profile"} />
            <div className="flex flex-col mr-2 bg-blue-50 h-[86vh] max-w-full pl-5 pr-5 pt-5 gap-1">
                <div className='flex flex-col gap-1'>
                    <h1 className='font-semibold text-xl'>Edit Profile</h1>
                    <p className=' font-normal text-gray-400 text-[.9vw]'>Personal Info</p>
                </div>
                <div className='bg-white h-[73vh] w-full rounded-lg flex flex-col gap-1 pt-2 pl-8 pr-4'>
                    <div className='w-full h-[16vh]'>
                        <div className="flex items-center gap-2 relative">
                            <div className="camera">
                                <label htmlFor="image">
                                    <Image src={men} alt='imageuser' className='rounded-full h-[7vw] w-[7vw] cursor-pointer'/>
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    className="outline-none hidden "
                                />
                            </div>
                            <h1 className=" text-[.9vw] font-semibold">
                                Upload Photo
                            </h1>
                        <div className='bg-white text-black h-8 w-8 rounded-full p-2 shadow-lg absolute left-20 top-16'> <TbEdit className='cursor-pointer'/></div>
                        </div>
                    </div>
                    <div className=' w-full h-[44vh] flex flex-col gap-2'>
                    <div className="flex gap-24">
                        <div className="flex flex-col">
                          <label
                            htmlFor="full_name"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                           Full Name
                          </label>
                          <input
                            type="text"
                            placeholder='Please enter your name'
                            id="full_name"
                            className="bg-blue-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="email"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                          Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder='Please enter your email'
                            className="bg-blue-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5"
                          />
                        </div>
                      </div>
                    <div className="flex gap-24">
                        <div className="flex flex-col">
                          <label
                            htmlFor=" Username"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                          Username
                          </label>
                          <input
                            type="text"
                            placeholder='Please enter your name'
                            id=" Username"
                            className="bg-blue-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="Phone_Number"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                         Phone Number
                          </label>
                          <input
                            type="number"
                            id="Phone_Number"
                            placeholder='+880 123 456 789'
                            className="bg-blue-50   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30vw] p-2.5"
                          />
                        </div>
                      </div>
                    <div className="">
                        <div className="flex flex-col">
                          <label
                            htmlFor="Bio"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                          Bio
                          </label>
                          <textarea
                            type="text"
                            placeholder='Write your Bio here e.g your hobbies, interests ETC'
                            id="Bio"
                            className="bg-blue-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[16vh] p-2.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex gap-9'>
                                <button className='outline-none bg-[#0079FC] flex items-center justify-center h-14 text-white text-[.9vw] w-40 rounded-full hover:bg-black transition-all ease-linear duration-300'>Save Change</button>
                                <button className='outline-none flex items-center justify-center h-14 text-black border-2 border-black text-[.9vw] w-40 rounded-full'>Reset All</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile