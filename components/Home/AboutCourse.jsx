import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import coursePoster from "../../public/Home/coursePoster.png";
import { IoCalendarOutline } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import avatar from "@/public/Dashboard/avatar.jpg";
import avatar2 from "@/public/Course/avatar2.jpeg";
import avatar3 from "@/public/Course/avatar3.jpg";
import Link from "next/link";
import "./aboutcoursedot.css"

const headings = ["JEE MAIN & ADVANCED", "NEET", "FOUNDATION"];

const jee = [
    {    id:1,
        fname:"JEE Main & Advanced 2026 | Class 11",
        blueName:"ELITE",
        name:"Batch for JEE 2026"
    },
    {   id:2,
        fname:"JEE Main & Advanced 2025 | Class 12",
        blueName:"PRIME",
        name:"Batch for JEE 2025"
    },
    {   id:3,
        fname:"JEE Main & Advanced 2025 | Droppers",
        blueName:"EXCEL",
        name:"Batch for JEE 2025"
    }
]
const neet = [
    {    id:1,
        fname:"NEET 2026 | Class 11",
        blueName:"ELITE",
        name:"Batch for NEET 2026"
    },
    {   id:2,
        fname:"NEET 2025 | Class 12",
        blueName:"PRIME",
        name:"Batch for NEET 2025"
    },
    {   id:3,
        fname:"NEET 2025 | Droppers",
        blueName:"EXCEL",
        name:"Batch for JEE 2025"
    }
]
const foundation = [
    {    id:1,
        fname:"FOUNDATION | Class 9",
        blueName:"IGNITE",
        name:"Batch for Class 9"
    },
    {   id:2,
        fname:"FOUNDATION | Class 10 Board Exam",
        blueName:"RISE",
        name:"Batch for Class 10"
    },
    {   id:3,
        fname:"FOUNDATION | Class 8",
        blueName:"SPARK",
        name:"Batch for  Class 8"
    }
]

const AboutCourse = () => {
  const [currentHeading, setCurrentHeading] = useState(headings[0]);

  const sliderSettings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (currentSlide) => setCurrentHeading(headings[currentSlide]), // Update heading on slide change
    customPaging: (i) => (
        <div className="custom-dot"></div>
      ),
      appendDots: (dots) => (
        <div style={{ bottom: "-40px" }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {dots}
          </ul>
        </div>
      ),
  };

  return (
    <section className="pb-16 bg-gray-50 relative overflow-hidden">
        <div className="blue_blur rounded-full h-32 w-32 absolute right-[10vw] top-[10vw]"></div>
         <div className="orange_blur rounded-full h-32 w-32 absolute left-32 top-40"></div>
         <div className="pink_blur rounded-full h-32 w-32 absolute top-20 left-[55%] blur-[120px]"></div>
         <div className="pink_blur rounded-full h-32 w-32 absolute left-[50%] bottom-20 blur-[170px]"></div>
      <div className="h-auto w-full bg-clip-padding backdrop-filter backdrop-blur-md relative">
         
      <div className="h-8 w-8 bg-[#FA8958] rounded-full absolute left-32 top-[4vw]"/>
      <div className="h-6 w-6 bg-[#D74696] rounded-md absolute left-[55%] top-1"/>
      <div className="h-3 w-6 bg-[#0079FC] rounded-md absolute right-[10vw] top-[10vw]"/>
      <div className="h-20 w-20 border-[#FA8958] border-2 rounded-full absolute right-[-1.3vw] bottom-[3vw]"/>
      <div
        className="w-10 h-5 bg-[#B1ED98] rounded-t-full absolute bottom-[-1vw] left-[46%] -rotate-[130deg]"
        style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }}
      ></div>


        <div className=" text-center mt-10">
          <h5 className="text-xs font-semibold uppercase bg-white text-TechBlue font-Poppins py-2 rounded-full px-4 inline-block">
            Courses
          </h5>
          <h2 className="text-darkBlue font-semibold text-2xl  md:text-4xl text-center my-4 font-Poppins px-2 ">
            Recommended Courses for you
          </h2>
        </div>
        <div className="flex items-center justify-center mb-4">
          <h1 className="bg-white p-1 text-2xl font-bold text-TechBlue rounded-xl">
            {currentHeading}
          </h1>
        </div>

        {/* Slider */}
        <Slider {...sliderSettings}>
            
          <div id="jee" className="w-full mb-3 mt-5">
        <div className="flex items-center justify-center">
            {jee.map((item,id)=>(
                 <div className="h-auto w-[18vw] bg-white rounded-t-xl rounded-md ml-10 pb-8" key={id}>
                 <Image
                   src={coursePoster}
                   className="h-[20vh] w-full rounded-t-xl"
                   alt="coursePoster"
                 />
                 <div className="pl-2 pr-2 pt-1">
                   <div className=" flex flex-col gap-1">
                     <h3 className="text-TechBlue text-xs font-medium">
                     {item.fname}
                     </h3>
                     <h1 className="font-bold text-xl">
                       <span className="text-TechBlue">{item.blueName}</span> {item.name}
                     </h1>
                     <h2 className="text-base font-normal text-gray-600 flex gap-1 items-center">
                       <IoCalendarOutline />
                       Starts 01 Aug 24 | Ends on 31 Mar 25
                     </h2>
                     <div className="flex items-center gap-2">
                       <h1 className="text-base font-normal flex items-center gap-2">
                         <FaClock className="text-TechBlue" />
                         400 + hours
                       </h1>
                       <h1 className="text-base font-normal flex items-center gap-2">
                         <MdOutlineSlowMotionVideo className="text-pink-500" />
                         600 + Lectures
                       </h1>
                     </div>
                     <div className="w-full h-[0.2vh] bg-gray-300 rounded-md mt-1" />
                     <div className=" flex justify-start w-full py-4 ">
                       <div className="flex -space-x-4 rtl:space-x-reverse">
                         <Image
                           className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                           src={avatar}
                           alt="avatar-picture"
                         />
                         <Image
                           className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                           src={avatar2}
                           alt="avatar-picture"
                         />
                         <Image
                           className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                           src={avatar3}
                           alt="avatar-picture"
                         />
                         <span className="w-[40px] h-[40px] border border-white text-xs font-medium rounded-full bg-TechBlue text-white/90 flex items-center justify-center">
                           +40
                         </span>
                         <span
                           className="flex items-center justify-center px-2 lg:text-sm xl:text-base  text-darkBlue font-semibold pl-5 rounded-full  "
                           href="#"
                         >
                           Students Enrolled
                         </span>
                       </div>
                     </div>
                     <div className="flex justify-between mt-2">
               <Link
                 href={`/dashboard/my-course/`}
                 className=" w-full  p-3 px-4 rounded-full text-center bg-TechBlue text-sm text-white font-medium hover:bg-black duration-200"
               >
                 Explore
               </Link>
             </div>
                   </div>
                 </div>
               </div>
            ))}
        </div>
          </div>

          <div id="neet" className="w-full mb-3 mt-5">
        <div className="flex items-center justify-center">
            {neet.map((item,id)=>(
                 <div className="h-auto w-[18vw] bg-white rounded-t-xl rounded-md ml-10 pb-8" key={id}>
                 <Image
                   src={coursePoster}
                   className="h-[20vh] w-full rounded-t-xl"
                   alt="coursePoster"
                 />
                 <div className="pl-2 pr-2 pt-1">
                   <div className=" flex flex-col gap-1">
                     <h3 className="text-TechBlue text-xs font-medium">
                     {item.fname}
                     </h3>
                     <h1 className="font-bold text-xl">
                       <span className="text-TechBlue">{item.blueName}</span> {item.name}
                     </h1>
                     <h2 className="text-base font-normal text-gray-600 flex gap-1 items-center">
                       <IoCalendarOutline />
                       Starts 01 Aug 24 | Ends on 31 Mar 25
                     </h2>
                     <div className="flex items-center gap-2">
                       <h1 className="text-base font-normal flex items-center gap-2">
                         <FaClock className="text-TechBlue" />
                         400 + hours
                       </h1>
                       <h1 className="text-base font-normal flex items-center gap-2">
                         <MdOutlineSlowMotionVideo className="text-pink-500" />
                         600 + Lectures
                       </h1>
                     </div>
                     <div className="w-full h-[0.2vh] bg-gray-300 rounded-md mt-1" />
                     <div className=" flex justify-start w-full py-4 ">
                       <div className="flex -space-x-4 rtl:space-x-reverse">
                         <Image
                           className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                           src={avatar}
                           alt="avatar-picture"
                         />
                         <Image
                           className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                           src={avatar2}
                           alt="avatar-picture"
                         />
                         <Image
                           className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                           src={avatar3}
                           alt="avatar-picture"
                         />
                         <span className="w-[40px] h-[40px] border border-white text-xs font-medium rounded-full bg-TechBlue text-white/90 flex items-center justify-center">
                           +40
                         </span>
                         <span
                           className="flex items-center justify-center px-2 lg:text-sm xl:text-base  text-darkBlue font-semibold pl-5 rounded-full  "
                           href="#"
                         >
                           Students Enrolled
                         </span>
                       </div>
                     </div>
                     <div className="flex justify-between mt-2">
               <Link
                 href={`/dashboard/my-course/`}
                 className=" w-full  p-3 px-4 rounded-full text-center bg-TechBlue text-sm text-white font-medium hover:bg-black duration-200"
               >
                 Explore
               </Link>
             </div>
                   </div>
                 </div>
               </div>
            ))}
        </div>
          </div>

          <div id="foundation" className="w-full mb-3 mt-5">
        <div className="flex items-center justify-center">
            {foundation.map((item,id)=>(
                 <div className="h-auto w-[18vw] bg-white rounded-t-xl rounded-md ml-10 pb-8" key={id}>
                 <Image
                   src={coursePoster}
                   className="h-[20vh] w-full rounded-t-xl"
                   alt="coursePoster"
                 />
                 <div className="pl-2 pr-2 pt-1">
                   <div className=" flex flex-col gap-1">
                     <h3 className="text-TechBlue text-xs font-medium">
                     {item.fname}
                     </h3>
                     <h1 className="font-bold text-xl">
                       <span className="text-TechBlue">{item.blueName}</span> {item.name}
                     </h1>
                     <h2 className="text-base font-normal text-gray-600 flex gap-1 items-center">
                       <IoCalendarOutline />
                       Starts 01 Aug 24 | Ends on 31 Mar 25
                     </h2>
                     <div className="flex items-center gap-2">
                       <h1 className="text-base font-normal flex items-center gap-2">
                         <FaClock className="text-TechBlue" />
                         400 + hours
                       </h1>
                       <h1 className="text-base font-normal flex items-center gap-2">
                         <MdOutlineSlowMotionVideo className="text-pink-500" />
                         600 + Lectures
                       </h1>
                     </div>
                     <div className="w-full h-[0.2vh] bg-gray-300 rounded-md mt-1" />
                     <div className=" flex justify-start w-full py-4 ">
                       <div className="flex -space-x-4 rtl:space-x-reverse">
                         <Image
                           className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                           src={avatar}
                           alt="avatar-picture"
                         />
                         <Image
                           className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                           src={avatar2}
                           alt="avatar-picture"
                         />
                         <Image
                           className="w-[40px] h-[40px] border-2 border-white rounded-full bg-green-300"
                           src={avatar3}
                           alt="avatar-picture"
                         />
                         <span className="w-[40px] h-[40px] border border-white text-xs font-medium rounded-full bg-TechBlue text-white/90 flex items-center justify-center">
                           +40
                         </span>
                         <span
                           className="flex items-center justify-center px-2 lg:text-sm xl:text-base  text-darkBlue font-semibold pl-5 rounded-full  "
                           href="#"
                         >
                           Students Enrolled
                         </span>
                       </div>
                     </div>
                     <div className="flex justify-between mt-2">
               <Link
                 href={`/dashboard/my-course/`}
                 className=" w-full  p-3 px-4 rounded-full text-center bg-TechBlue text-sm text-white font-medium hover:bg-black duration-200"
               >
                 Explore
               </Link>
             </div>
                   </div>
                 </div>
               </div>
            ))}
        </div>
          </div>
        
        </Slider>
      </div>
    </section>
  );
};

export default AboutCourse;




