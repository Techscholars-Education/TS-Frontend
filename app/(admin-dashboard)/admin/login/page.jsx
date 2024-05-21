import React from 'react'

const Page = () => {
  return (
    <div className='h-screen w-full'>
        <div className='bg-[#4880FF] h-screen w-full flex items-center justify-center'>
         
        <div className='bg-white rounded-lg h-[70vh] w-[30vw] flex flex-col gap-4 pt-7 pr-[3.5vw] pl-[3.5vw] pb-5'>
        <div className=' flex flex-col items-center'>
            <h1 className='font-bold text-2xl'>Login to Account</h1>
            <p className='font-normal text-[.9vw] mt-2'>Please enter your email and password to continue</p>
        </div>
        
        <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                          <label
                            className=" mb-2 text-sm font-medium text-gray-500 "
                          >
                           Email address
                          </label>
                          <input
                          placeholder='estaban_schiller@gmail.com'
                            type="text"
                            className="bg-[#F1F4F9] border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          />
                        </div>
                        <div className='flex items-center justify-end relative z-50'>
                           <button className='text-gray-500 outline-none border-none hover:text-black transition-all ease-in-out duration-200 '>Forget Password?</button>
                        </div>
                        <div className="flex flex-col mt-[-2vw]">
                          <label
                            className=" mb-2 text-sm font-medium text-gray-500 "
                          >
                            Password
                          </label>
                          <input
                          placeholder='&#9679; &#9679; &#9679; &#9679; &#9679;'
                            type="password"
                            className="bg-[#F1F4F9] border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          />
                        </div>
                      </div>
        </div>

        </div>

    </div>
  )
}

export default Page