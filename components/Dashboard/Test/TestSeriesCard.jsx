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
      className={`flex flex-col rounded-xl border md:w-[20vw]  font-Poppins relative bg-white`}
    >
      <div>
        <Image
          className="w-full rounded-xl"
          alt="course-posters"
          src={props.image}
          style={{ height: '200px', width: '400px' }}
          width={400}  
          height={200}
        />
      </div>


      <div className="flex flex-col m-4 my-4">
        <div>
          <div className="flex  items-center">

            <div className="flex flex-col ">
              <div className='flex mb-2'>
                 <Link href="#" className='bg-[#FF7512] rounded-full ml-0 mx-2 px-2 text-white text-sm py-1'>{props.std}th</Link>
                 <Link href="#" className='bg-[#9F46E4] rounded-full mx-2 px-2 text-white text-sm py-1'>Foundation</Link>
                 <Link href="#" className='bg-[#17DB7E] rounded-full mx-2 px-2 text-white text-sm py-1'>2024</Link>
              </div>

             <div className='h-9'>
             <p className="font-semibold text-sm ">{props.name}</p>
             </div>
            </div>
          </div>
        </div>
        <p className="font-base text-xs xl:text-sm leading-relaxed text-gray-500  font-Poppins">
         {props.description}
        </p>
        {/* <p className='text-[16px] font-semibold'>
          -By Md. Mahmodul Hasan
        </p> */}






      </div>
    </div>
  )
}

export default TestSeriesCard