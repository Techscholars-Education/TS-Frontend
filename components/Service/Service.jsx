import React from 'react'
import Card from '../Course/Card'

const Service = () => {
  return (
    <>
     <div className='bg-slate-100'>
        
        <div className='flex justify-center items-center my-8 flex-col'>
            <h1 className='font-[600] text-[44px] text-[#002657] '>
                Welcome Harsh
            </h1>
            <span className='font-[500] text-[20px] text-[#002657] '>Select your package</span>
        </div>
        
        
        <div className='flex justify-center w-[100vw] mt-4 '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className='flex justify-center mt-24 '>
            <button className='bg-[#002657] text-white w-[200px] h-[48px] rounded-[10px] mx-8'>Back</button>
            <button className='w-[200px] h-[52px] border-2  border-[#DCDCDC] rounded-[10px]'>Back to home</button>
        </div>
     </div>
    </>
  )
}

export default Service