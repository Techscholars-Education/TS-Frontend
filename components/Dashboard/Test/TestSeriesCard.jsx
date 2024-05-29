import React from 'react'
import Link from "next/link";
import star from "../../../public/Home/star.svg";
import { FaClock } from "react-icons/fa6";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaFire } from "react-icons/fa6";
import Image from 'next/image';
import avatar from "../../../public/Dashboard/avatar.jpg";

function TestSeriesCard(props) {
  return (
    <div
        className={`flex flex-col rounded-xl border  font-Poppins relative w-[22vw] bg-white`}
      >
        <div>
          <Image
            className="w-full rounded-xl "
            alt="course-posters"
            src={props.image}
          />
        </div>

        <div className="flex flex-col m-4 my-10">
          <div>
            <div className="flex  items-center">
             
             <div className="flex flex-col ">
              
              <p className="font-semibold">Name of the subject</p>
             </div>
            </div>
          </div>
          <p className="font-base text-xs xl:text-sm leading-relaxed text-gray-500 py-3 font-Poppins">
          When you enter into any new area of science, you almost always find.
          </p>
         <p className='text-[16px] font-semibold'>
         -By Md. Mahmodul Hasan
         </p>
         

        
          

         
        </div>
      </div>
  )
}

export default TestSeriesCard