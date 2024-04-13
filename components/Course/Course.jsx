import React from 'react'
import Card from './Card'
import CourseList from './CourseList'

const Course = () => {
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
           
        </div>
        <div className="flex justify-center mt-24 ">
          <button className="bg-darkBlue text-white w-44 h-12 rounded-xl mx-8">
            Back
          </button>
          <button className="w-44 h-12 border-2  border-[#DCDCDC] rounded-xl">
            Back to home
          </button>
        </div>
      </div>
    </>
  );
};

export default Course;
