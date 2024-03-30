import React from 'react'
import Card from './Card'
import CourseList from './CourseList'

const Course = () => {
  return (
    <>
    <div className='bg-slate-100'>
       <CourseList/>
        
        
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

export default Course