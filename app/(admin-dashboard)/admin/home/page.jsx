"use client"
import React, { useEffect, useState } from 'react'
import Nav from '../../_components/Nav'
import AdminSidebar from '../../_components/AdminSidebar'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import LineChart from '../../_components/Chart';



const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

const page = () => {

    const [trend, setTrend] = useState(false)

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    
    const admin =[
        {
            id: 1,
            title: "Foundation",
            today:"Today L",
            year: "Academic Year 24/25 :",
            total: "Total :",
            trend:<FaArrowTrendUp/>,
            percent:"8%",
            up:"Up from yesterday"
          },
        {
            id: 1,
            title: "Foundation",
            today:"Today :",
            year: "Academic Year 24/25 :",
            total: "Total :",
            trend:<FaArrowTrendUp/>,
            percent:"1.3%",
            up:" Up from past week"
          },
        {
            id: 1,
            title: "Foundation",
            today:"Today :",
            year: "Academic Year 24/25 :",
            total: "Total :",
            trend:<FaArrowTrendDown/>,
            percent:"4.3%",
            up:" Down from yesterday"
          },
    ]


  return (
   <>
    { domLoaded ? (
      <div className='h-screen w-full overflow-hidden'>
       <Nav/>
       <div className='flex'>
       <div > <AdminSidebar/></div>
        <div id='home' className='bg-gray-100 overflow-y-auto h-screen w-[83.5vw] relative right-[-15vw]  rounded-md'>
           <div className=''>
              <h1 className='font-semibold text-xl ml-10 mt-2'>Admin Portal</h1>

           </div>
           <div className='flex ml-[2vw] gap-4 mt-2' >
           {admin.map((item,id)=>(
                <div className='bg-white h-[8vw] w-[20vw] ml-2 p-2 pl-3 rounded-md flex justify-between' key={id}>
              <div className='font-normal text-[.9vw]'>
                <h1 className='text-[1vw] font-semibold'>{item.title}</h1>
                <h1>{item.today}</h1>
                <h1>{item.year}</h1>
                <h1>{item.total}</h1>
                <div className='mt-2 ml-2 flex items-center gap-2'><span className={`flex items-center gap-2 ${trend ? "text-green-400":"text-red-400" }`}>{trend ? <FaArrowTrendUp/> : <FaArrowTrendDown/> }{item.percent}</span> {item.up}</div>
              </div>
             <div className='h-[3vw] w-[3.5vw] bg-red-300 rounded-md flex items-center justify-center'>
                <FaUserGroup className='text-[2vw] ' />
             </div>
           </div>
            ))}
           </div>

           <div className='h-[60vh] w-[63vw] bg-white rounded-md mt-4 ml-10 flex flex-col gap-5'>
           <div className='flex gap-5 ml-8 '>
            <button className='pl-3 pr-3 pt-2 pb-2 bg-purple-200 rounded-xl mt-3 hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 cursor-pointer'>Live User Count</button>
            <button className='pl-3 pr-3 pt-2 pb-2 bg-purple-200 rounded-xl mt-3 hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 cursor-pointer'>Average Time Spent</button>
            <button className='pl-3 pr-3 pt-2 pb-2 bg-purple-200 rounded-xl mt-3 hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 cursor-pointer'>Avg Mins Teachers</button>
            <button className='pl-3 pr-3 pt-2 pb-2 bg-purple-200 rounded-xl mt-3 hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 cursor-pointer'>Teacher Ratings</button>
           </div>
           <div className='h-[50vh] w-[70vw]'>
           <LineChart 
           
           data={[
             200, 444, 444, 556, 778, 455, 990, 100
           ]}
           label="Students"
           borderColor="rgb(128, 0, 255)"
           backgroundColor="rgba(66, 182, 246,0.5)"
           labels={months}
         />
           </div>
           </div>
           
       </div>
       </div>

       

    </div>) : (
      <div className='flex items-center justify-center h-screen w-full'>
                    <div className="loader"></div>
                    </div>
    )
    }
   </>
  )
}

export default page