import React from 'react'
import DashboardNavbar from '../DashboardNavbar'
import TestSeriesCard from './TestSeriesCard';

function TestDetail() {
    const data = [
        {
          id: 1,
          
          route: "/dashboard/test/testdetail",
          description:
            "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
          Poster: require('../../../public/Test/test1.png'),
        },
        {
          id: 2,
        
          route: "/dashboard/test/testdetail",
          description:
            "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
          Poster: require('../../../public/Test/test2.png'),
        },
        {
          id: 3,
          
          route: "/dashboard/test/testdetail",
          description:
            "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
          Poster: require('../../../public/Test/test3.png'),
        },
        {
            id: 4,
            
            route: "/dashboard/test/testdetail",
            description:
              "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
            Poster: require('../../../public/Test/test4.png'),
          },
          {
            id: 5,
            
            route: "/dashboard/test/testdetail",
            description:
              "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
            Poster: require('../../../public/Test/test5.png'),
          },
          {
            id: 6,
            
            route: "/dashboard/test/testdetail",
            description:
              "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
            Poster: require('../../../public/Test/test6.png'),
          },
      ];
    
  return (
    <div className=" font-Poppins min-h-screen  w-full bg-[#F0F7FF] ">
       <DashboardNavbar title="Test series Foundation"/>
    <div className="my-14 flex flex-col mx-8 ">
      <h2 className="text-xl md:text-xl font-semibold text-darkBlue mx-4 my-6">
      Test series Foundation
      </h2>
      {/* <p className="text-sm text-gray-600  mx-4 my-4">
      You’ve learned 70% of your goal this week! Keep it up
      </p> */}
      <div className='grid grid-cols-3 gap-4'>
        {
            data.map((item)=>{
                return <>
                <TestSeriesCard image={item.Poster}  key={item.id} />
                </>
            })
        }

      </div>
      </div>
      </div>
  )
}

export default TestDetail