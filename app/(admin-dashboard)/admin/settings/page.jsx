"use client"

import React, { useEffect, useState } from 'react'
import Nav from '../../_components/Nav'
import AdminSidebar from '../../_components/AdminSidebar'
import { IoCamera } from "react-icons/io5";


const page = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
}, []);

  return (
<>
  { domLoaded ? (
    <div>
        <Nav/>
        <div>
            <div><AdminSidebar/></div>
        </div>
        <div id='feedback' className='bg-gray-100 overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md'>
                  <div className=' flex justify-between mt-2 pr-2'>
                    <h1 className='font-semibold text-xl ml-10 '>Team</h1>
                  </div>

                     <div className='ml-10 mt-4 flex flex-wrap gap-5'>

                     <div className='bg-white h-[35vw] w-[80vw] pl-7 rounded-md  pt-5 pb-5'>

<form >
    <div className='flex flex-col items-center gap-2'>
        <div className='camera'>
            <label htmlFor="image">
                <IoCamera className='p-3 h-[4vw] w-[4vw] text-[.9vw] cursor-pointer bg-slate-200 rounded-full' />
            </label>
            <input type="file" id='image' className='outline-none hidden' />
        </div>
        <h1 className='text-[#11047A] text-[.9vw] font-normal'> Upload Logo</h1>
    </div>

    <div className='flex flex-col gap-5'>

    <div className='flex gap-10'>
        <div className='flex flex-col'>
            <label htmlFor="name" className=" mb-2 text-sm font-medium text-gray-600 ">Name</label>
            <input type="text" id="name" className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5" />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="designation" className=" mb-2 text-sm font-medium text-gray-600 ">Designation</label>
            <input type="text" id="designation" className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5" />
        </div>
    </div>

    <div className='flex flex-col gap-5'>
        <div className='flex flex-col'>
            <label htmlFor="email" className=" mb-2 text-sm font-medium text-gray-600 ">Email</label>
            <input type="email" id="email" className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5" />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="number" className=" mb-2 text-sm font-medium text-gray-600 ">Phone Number</label>
            <input type="number" id="number" className="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5" />
        </div>
    </div>
         <div>
         <button className='border-none outline-none text-gray-600'>Forget Password?</button>
         </div>
           
       <div className='flex items-center justify-center'>
       <button className='pl-3 pr-3 pt-2 pb-2 text-white bg-[#002956] rounded-md w-32 hover:bg-black hover:text-white transition-all ease-in-out duration-200'>Save</button>
       </div>


    </div>
</form>


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


