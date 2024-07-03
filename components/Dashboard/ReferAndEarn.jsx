"use client"
import DashboardNavbar from './DashboardNavbar'
import img1 from "../../public/Dashboard/refer-logo.svg"
import Image from 'next/image';
import CopyText from '@/app/dashboard/refer-and-earn/_components/CopyText';
import { useEffect, useRef, useState } from 'react';

const ReferAndEarn = () => {
    const [ttitle,setTitle]=useState(false)

    const scrollDivRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          const scrollThreshold = 200; // Adjust this value to set the scroll threshold
          if (scrollDivRef.current.scrollTop >= scrollThreshold) {
            console.log("Hi");
            setTitle(true);
          } else {
            setTitle(false);
          }
        };
    
        const divElement = scrollDivRef.current;
        divElement.addEventListener('scroll', handleScroll);
        return () => {
          divElement.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps  
      }, []);
      
   
    return (
        <>
            <div className="bg-white font-Poppins h-screen w-full overflow-hidden">
                <DashboardNavbar title={ ttitle ? "FAQ" :"Refer and earn" } />
                <div ref={scrollDivRef} className="my-6 flex flex-col mr-2 bg-[#fcfafa] h-[86vh] max-w-full pl-5 pr-5 pt-5 overflow-x-hidden overflow-y-auto pb-4">
                  <section className=''>
                  <div className=' bg-white rounded-md p-5 pt-[7vw] pl-9 flex relative max-w-[82vw] h-[65vh]'>
                        <div className='flex flex-col gap-12 w-[23vw]'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-4xl font-bold'>Refer friends &
                                    earn up to $3,000</h1>
                                <p className='font-[.9vw] text-gray-200'>Share this code with your friend and both of you will get $12.</p>
                            </div>
                            <div className='flex flex-col gap-5 w-[30vw]'>
                                <CopyText copyText="CRYPTO8795"/>
                                <button className='h-[3vw] w-[18vw] flex items-center justify-center bg-[#0079FC] text-white rounded-full hover:bg-black transition-all ease-in-out duration-300'>Invite Friends</button>
                            </div>
                        </div>
                        <Image src={img1} alt='logo' className='h-[60vh] w-[60vw] absolute bottom-0 right-[-11vw] ' />
                    </div>

                    <div className='bg-[#fcfafa] rounded-md p-5 pl-9 flex flex-col relative max-w-[82vw] h-auto '>
                          <div className='flex flex-col gap-2'>
                          <h1 className='font-semibold text-2xl'>Frequently asked questions</h1>
                          <p className='font-normal text-[.9vw] text-gray-500'>Refer to your friends and earn rewards</p>
                          </div>
                          <div className='bg-white h-[80vh] max-w-[82vw] mt-3 rounded-md'>
                                     hi
                          </div>
                    </div>
                  </section>
                   
                </div>
               
            </div>
        </>
    )
}

export default ReferAndEarn