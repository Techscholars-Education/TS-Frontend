import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <>
    <div className='flex flex-col rounded-lg bg-slate-100 w-72'>
           
          <div className='rounded-md'>
           <Image className='rounded-md' src={require('../../app/assets/course.png')}/>
          </div>
       
       <div className='flex flex-col m-4'>
       <div>
           <p>1-28 july 2022</p>
           <h3>Product Management basic-Course</h3>
           <span>
               Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
           </span>
       </div>
       <div className='flex justify-between mt-2'>
           <p>$380 <span>$500</span></p>
           <button className='bg-[#002657]  p-2 px-4 rounded-md text-[12px] text-white'>Enroll Now</button>
       </div>
       </div>
       
   </div>
    </>
  )
}

export default Card