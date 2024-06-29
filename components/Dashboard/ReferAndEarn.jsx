"use client"
import DashboardNavbar from './DashboardNavbar'
import img1 from "../../public/Dashboard/refer-logo.svg"
import Image from 'next/image';
import CopyText from '@/app/dashboard/refer-and-earn/_components/CopyText';

const ReferAndEarn = () => {
    return (
        <>
            <div className="bg-white font-Poppins h-screen w-full overflow-hidden">
                <DashboardNavbar title={"Refer and earn"} />
                <div className="my-6 flex flex-col mr-2 bg-[#fcfafa] h-[82vh] max-w-full pl-5 pr-5 pt-5 ">
                    <div className='max-w-[82vw] h-[65vh] bg-white rounded-md p-5 pt-[7vw] pl-9 flex relative overflow-hidden'>
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
                        <Image src={img1} alt='logo' className='h-[60vh] w-[60vw] absolute bottom-0 right-[-11vw]' />

                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferAndEarn