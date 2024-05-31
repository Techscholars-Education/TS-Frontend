"use client"
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Image from 'next/image';
import Card from "./Course/Card";
import coursePoster from "../../../../public/Course/coursePoster.svg";
import Link from "next/link";
const Courses = () => {
  
    
    const data = [
        {
          id: 1,
          title: "FOUNDATION",
          route: "/dashboard/courses/foundation",
          description:
            "Build a strong academic base with our foundational courses, designed to prepare you for competitive exams.",
          Poster: coursePoster,
        },
        {
          id: 2,
          title: "JEE",
          route: "/dashboard/courses/jee",
          description:
            "Master the concepts and strategies needed to excel in JEE with our comprehensive courses and expert guidance.",
          Poster: coursePoster,
        },
        {
          id: 3,
          title: "NEET",
          route: "/dashboard/courses/neet",
          description:
            "Achieve top scores in NEET with our specialized courses, focusing on in-depth understanding of medical concepts.",
          Poster: coursePoster,
        },
      ];

  return (
            <>
                <div className="bg-white font-Poppins h-screen w-full ">
                    <DashboardNavbar title={"Courses"} />
                    <div className="my-6 flex flex-col mr-2 bg-blue-50 h-[82vh] max-w-full pl-5 pr-5 pt-5">
                        <div className='max-w-[82vw] bg-white rounded-md  pl-9 flex flex-col  overflow-y-auto'>
                              

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 xl:w-10/12 mx-auto ">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                route={item.route}
                image={item.Poster}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-24 items-center space-x-4 md:space-x-10 ">
          <Link
            href="/"
            className="bg-TechBlue text-sm text-white md:w-44 md:h-12 rounded-full  flex justify-center items-center  duration-300 px-4 py-2 "
          >
            Explore more
          </Link>
          <Link
            href="/"
            className=" text-sm md:w-44 md:h-12 border-2  border-gray-300 flex justify-center items-center rounded-full duration-300 px-4 py-2 "
          >
            Back to home
          </Link>
        </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
    
export default Courses