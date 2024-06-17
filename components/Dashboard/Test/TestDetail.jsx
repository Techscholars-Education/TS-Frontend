import React from 'react'
import DashboardNavbar from '../DashboardNavbar'
import TestSeriesCard from './TestSeriesCard';
import Link from 'next/link';

function TestDetail() {
  const data = [
    {
      id: 1,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/1.png'),
      std: 11,
      name:"Full Syllabus mock test (JEE MAINS)"
    },
    {
      id: 2,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/2.png'),
      std: 11,
      name:"Full Syllabus mock test (JEE ADVANCED)"

    },
    {
      id: 3,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/3.png'),
      std: 11,
      name:"Full Syllabus mock test (JEE MAINS+ADVANCED)"
      
      
    },
    {
      id: 4,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/4.png'),
      std: 12,
      name:"Full Syllabus mock test (JEE MAINS)"
    },
    {
      id: 5,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/5.png'),
      std: 12,
      name:"Full Syllabus mock test (JEE ADVANCED)"
    },
    {
      id: 6,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/6.png'),
      std: 12,
      name:"Full Syllabus mock test (JEE MAINS+ADVANCED)"
    },
    {
      id: 7,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/7.png'),
      std: 13,
      name:"Full Syllabus mock test (JEE MAIN)"
    },
    {
      id: 8,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/8.png'),
      std: 13,
      name:"Full Syllabus mock test (JEE MAINS+ADVANCED)"
    },
    {
      id: 9,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/9.png'),
      std: 13,
      name:"Full Syllabus mock test (JEE ADVANCED)"
    },
    {
      id: 10,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/10.png'),
      std: 11,
      name:"Full Syllabus mock test (NEET)"
    },
    {
      id: 11,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/11.png'),
      std: 11,
      name:"Full Syllabus mock test (NEET)"
    },
    {
      id: 12,

      route: "/dashboard/test/testdetail",
      description:
        "The Test series covers the entire syllabus for the exam and prioritizes important subjects and topics.",
      Poster: require('../../../public/Test/12.png'),
      std: 11,
      name:"Full Syllabus mock test (NEET)"
    },
  ];

  return (
    <div className=" font-Poppins min-h-screen  w-full bg-[#F0F7FF] ">
      <DashboardNavbar title="Test series Foundation" />
      <div className="my-14 flex flex-col mx-8  ">
        <h2 className="text-xl md:text-xl font-semibold text-darkBlue mx-4 my-6">
          Test series Foundation
        </h2>
        {/* <p className="text-sm text-gray-600  mx-4 my-4">
      You’ve learned 70% of your goal this week! Keep it up
      </p> */}
        <div className='grid grid-cols-1 md:grid-cols-3 md:pr-12 gap-6 ml-4 w-[68vw]'>
          {
            data.map((item) => {
              return <>
                <Link href="/dashboard/test/testdetail/alltestseries">
                  <TestSeriesCard image={item.Poster} key={item.id} std={item.std} name={item.name} description={item.description} />
                </Link>
              </>
            })
          }

        </div>
      </div>
    </div>
  )
}

export default TestDetail