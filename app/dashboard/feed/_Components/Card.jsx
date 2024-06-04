"use client";
import Image from "next/image";
import React from "react";
import avatar from "../../../../public/Dashboard/avatar.jpg";
const Card = (props) => {
  return (
    <>
     <div className=" h-[70vh] w-[25vw] flex flex-col gap-3 shadow-md rounded-t-md hover:shadow-2xl hover:shadow-black transition-all ease-linear duration-200">
                 <div id="image">
                      <Image src={props.image} className="h-[25vh] w-full" alt="logo"/>
                 </div>
                 <div id="text" className="flex flex-col gap-4 border-b pl-8 pr-8 pb-4">
                     <div id="head" className="flex flex-col gap-2">
                            <h2 className="font-normal text-[.9vw] w-28 h-5 flex items-center justify-center text-white bg-purple-500 rounded-full">{props.btn}</h2>
                            <h1 className="font-bold text-xl font-Poppins">{props.title}</h1>
                            <p className="font-normal text[.9vw] text-gray-600">{props.description}</p>
                     </div>
                     <div id="footer" className="flex justify-between">
                             <h1 className="font-semibold text-[1.1vw]">{props.name}</h1>
                             <div className="flex -space-x-4 rtl:space-x-reverse">
                                   <Image src={avatar} className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" alt="avatar"/>
                                   <Image src={avatar} className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" alt="avatar"/>
                                   <Image src={avatar} className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800" alt="avatar"/>
                             </div>
                     </div>
                 </div>
                 <div id="btn" className="pl-8 pr-8 pt-4">
                           <button className=" flex items-center justify-center h-[7vh] w-full rounded-full text-xl text-white font-Poppins bg-TechBlue hover:bg-black hover:shadow-sm hover:shadow-black transition-all ease-linear duration-200">Get Started</button>
                 </div>
     </div>
    </>
  );
};

export default Card;
