import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <>
    <div className='flex flex-col rounded-[14px] bg-[#FFFFFF] w-[296px] h-[428px] mx-6'>
           
          <div className=''>
           <Image className='w-full ' style={{borderRadius:'14px 14px 0 0'}}  src={require('../../app/assets/course.png')}/>
          </div>
          <div className='flex justify-center'>
          <div className='rounded-full w-[233px] h-[40395] relative bottom-2 flex justify-center bg-slate-200'>
               hello
          </div>
          </div>
       
       <div className='flex flex-col m-4'>
       <div className='mb-4'>
           <p className='font-[400] text-[#777795] text-[10px] '>1-28 july 2022</p>
           <h3 className='font-[800] text-[16px] text-[#002657] '>Product Management basic-Course</h3>
           <span className='font-[400] text-[10px] text-[#4D4D4D]'>
               Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
           </span>
       </div>
       <div className='flex justify-between mt-2'>
           <p className='text-[#FD661F] text-[16.68px] font-[700]'>$380 <span className='font-[300] text-[14.83] text-[#230F0F] '>$500</span></p>
           <button className='bg-[#002657]  p-2 px-4 rounded-md text-[12px] text-white'>Enroll Now</button>
       </div>
       </div>
       
   </div>
    </>
  )
}

export default Card