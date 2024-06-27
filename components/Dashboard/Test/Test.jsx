import React from 'react'
import TestCard from './TestCard';
import DashboardNavbar from '../DashboardNavbar';
import coursePoster  from '../../../public/Course/coursePoster.svg'
import Image from 'next/image';

export default function Test() {
    const data = [
        {
          id: 1,
          
          route: "/dashboard/test/testdetail",
          description:
            "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
          Poster: coursePoster,
        },
        {
          id: 2,
        
          route: "/dashboard/test/testdetail",
          description:
            "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
          Poster: coursePoster,
        },
        {
          id: 3,
          
          route: "/dashboard/test/testdetail",
          description:
            "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
          Poster: coursePoster,
        },
      ];
    
  return (
    <>
    
    <div className=" font-Poppins min-h-screen  w-full bg-[#fcfafa] ">
      <DashboardNavbar title="Test series Foundation"/>
      <div className="my-14 flex flex-col mx-8">
        <h2 className="text-xl md:text-xl font-semibold text-darkBlue mx-4">
        Test series Foundation
        </h2>
        <p className="text-sm text-gray-600  mx-4 my-4">
        You’ve learned 70% of your goal this week! Keep it up
        </p>
        
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 xl:w-11/12 mx-auto ">
        {data.map((item) => {
          return (
            <TestCard
              key={item.id}
              title={item.title}
              description={item.description}
              route={item.route}
              image={item.Poster}
            />
          );
        })}
      </div>
     
    </div>
  </>
  )
}
