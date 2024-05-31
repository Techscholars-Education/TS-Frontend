"use client"
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Image from 'next/image';

const Courses = () => {
  return (
            <>
                <div className="bg-white font-Poppins h-screen w-full ">
                    <DashboardNavbar title={"Courses"} />
                    <div className="my-6 flex flex-col mr-2 bg-blue-50 h-[82vh] max-w-full pl-5 pr-5 pt-5">
                        <div className='max-w-[82vw] h-[65vh] bg-white rounded-md p-5 pt-[7vw] pl-9 flex relative overflow-hidden'>
                           
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
export default Courses