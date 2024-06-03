import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from './Card';
import coursePoster from "../../../../public/Dashboard/dashboardFeed.png";

const Feed = () => {
   
    const data = [
        {
          id: 1,
          btn:"Foundation",
          title: "Name of the subject",
          route: "/dashboard/courses/foundation",
          description:
            "When you enter into any new area of science, you almost always find.",
            name:"-By Md. Mahmodul Hasan",
          Poster: coursePoster,
        },
        {
          id: 2,
          btn:"Foundation",
          title: "Name of the subject",
          route: "/dashboard/courses/jee",
          description:
            "When you enter into any new area of science, you almost always find.",
            name:"-By Md. Mahmodul Hasan",
          Poster: coursePoster,
        },
        {
          id: 3,
          btn:"Foundation",
          title: "Name of the subject",
          route: "/dashboard/courses/neet",
          description:
            "When you enter into any new area of science, you almost always find.",
            name:"-By Md. Mahmodul Hasan",
          Poster: coursePoster,
        },
      ];



    return (
        <div className="bg-white font-Poppins h-screen w-full ">
            <DashboardNavbar title={"Feed"} />
            <div className="my-6 flex flex-col mr-2 bg-blue-50 h-[85vh] max-w-full pl-5 pr-5 pt-5 overflow-y-auto">
           <div className='flex justify-between items-center'>
           <div className='flex flex-col gap-1'>
                    <h1 className='font-semibold text-xl'>Stay updated with Techscholars</h1>
                </div>
                <div className='border-2 mb-2 border-blue-200 rounded-full h-[2.5vw] text-blue-600 w-[10vw] flex items-center'>
                      <button>
                        <FaAngleLeft className='text-2xl font-normal hover:text-black transition-all ease-linear duration-200'/>
                      </button>
                      <h1>August 2024</h1>
                      <button>
                        <FaAngleRight className='text-2xl font-normal hover:text-black transition-all ease-linear duration-200'/>
                      </button>
                </div>
           </div>
           <div 
           className=" flex gap-7">
                {data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                route={item.route}
                image={item.Poster}
                btn = {item.btn}
                name={item.name}
              />
            );
          })}

                </div>

          <div className=' mt-10 pb-5'>
          <div className='flex justify-between items-center'>
           <div className='flex flex-col gap-1'>
                    <h1 className='font-semibold text-xl'>Recently Added</h1>
                </div>
                <div className='border-2 mb-2 border-blue-200 rounded-full h-[2.5vw] text-blue-600 w-[10vw] flex items-center'>
                      <button>
                        <FaAngleLeft className='text-2xl font-normal hover:text-black transition-all ease-linear duration-200'/>
                      </button>
                      <h1>August 2024</h1>
                      <button>
                        <FaAngleRight className='text-2xl font-normal hover:text-black transition-all ease-linear duration-200'/>
                      </button>
                </div>
           </div>
           <div 
           className=" flex gap-7 ">
                {data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                route={item.route}
                image={item.Poster}
                btn = {item.btn}
                name={item.name}
              />
            );
          })}

                </div>

          </div>

       
            </div>

        </div>
    )
}

export default Feed