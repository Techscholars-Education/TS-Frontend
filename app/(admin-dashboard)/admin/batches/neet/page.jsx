"use client";
import AdminSidebar from "@/app/(admin-dashboard)/_components/AdminSidebar";
import Nav from "@/app/(admin-dashboard)/_components/Nav";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Page = () => {
    const [heart, setHeart] = useState(false);

  const [domLoaded, setDomLoaded] = useState(false);


  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded ? (
        <div>
          <Nav />
          <div>
            <div>
              <AdminSidebar />
            </div>
          </div>
      
            <div
              id="feedback"
              className="bg-[#e6f0ff] overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
            >
              <div>
                <h1 className="font-semibold text-xl ml-10 mt-2">Batch - NEET</h1>
              </div>
              <div className="ml-10 mt-4 flex flex-wrap gap-7">
                <div
                 
                  className="flex flex-col items-center justify-center gap-5 bg-white h-[28vw] w-[23vw] p-4 rounded-md "
                >
                  <button className="font-bold text-[.9vw] pl-4 pr-4 pt-2 pb-2 bg-[#e6f0ff] rounded-xl hover:bg-black hover:text-white transition-all ease-in-out duration-200">
                   Add New Batch
                  </button>
                </div>

                <div className="flex flex-col  gap-2 bg-white h-[28vw] w-[23vw] p-3 rounded-md ">
                  
                  <div className="upper h-[18vw] w-full">
                  <Carousel indicators={false}>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..."  width={10} height={10} priority={true}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." width={10} height={10} priority={true}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." width={10} height={10} priority={true}/>
      </Carousel>
                  </div>
                  <div className="lower mt-2 flex flex-col gap-2">
                        <div className="flex  justify-between">
                            <div className="name">
                                <h1 className="font-semibold text-[1.2vw]">NEET 9th - 2023 </h1>
                                <p className="text-[.8vw] font-semibold">78 students</p>
                            </div>
                            <div className='rounded-full p-2 cursor-pointer h-10 w-10 flex items-center justify-center bg-[#e6f0ff] transition-all ease-linear duration-200'  onClick={() => setHeart(!heart)}>
                            { heart ? <FaHeart className="text-xl text-pink-600 transition-all ease-linear duration-200"/> : <FaRegHeart className="text-xl text-black transition-all ease-linear duration-200"/>}
                </div>
                            
                        </div>
                        <button className="bg-[#e6f0ff] pl-4 pr-4 pt-2 pb-2 w-[7vw] font-semibold rounded-xl flex items-center justify-center text-[.9vw] hover:bg-black hover:text-white transition-all ease-in-out duration-200">View now</button>
                  </div>              
                </div>
                <div className="flex flex-col  gap-2 bg-white h-[28vw] w-[23vw] p-3 rounded-md ">
                  
                  <div className="upper h-[18vw] w-full">
                  <Carousel indicators={false}>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..."  width={10} height={10} priority={true}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." width={10} height={10} priority={true}/>
        <Image src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." width={10} height={10} priority={true}/>
      </Carousel>
                  </div>
                  <div className="lower mt-2 flex flex-col gap-2">
                        <div className="flex  justify-between">
                            <div className="name">
                                <h1 className="font-semibold text-[1.2vw]">NEET 10th - 2023 </h1>
                                <p className="text-[.8vw] font-semibold">78 students</p>
                            </div>
                            <div className='rounded-full p-2 cursor-pointer h-10 w-10 flex items-center justify-center bg-[#e6f0ff] ' onClick={() => setHeart(!heart)}>
                            { heart ? <FaHeart className="text-xl text-pink-600 transition-all ease-linear duration-200"/> : <FaRegHeart className="text-xl text-black transition-all ease-linear duration-200"/>}
                        </div>
                        </div>
                        <button className="bg-[#e6f0ff] pl-4 pr-4 pt-2 pb-2 w-[7vw] font-semibold rounded-xl flex items-center justify-center text-[.9vw] hover:bg-black hover:text-white transition-all ease-in-out duration-200">View now</button>
                  </div>              
                </div>
              
              </div>
            </div>
          
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen w-full">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Page;
