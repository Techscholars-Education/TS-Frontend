import Image from 'next/image'
import React from 'react'
import Logo from  "../../../public/AdminDashboard/Logo.png"
import User from  "../../../public/AdminDashboard/user.png"
import { RiArrowDownSLine } from "react-icons/ri";
import Link from 'next/link';


const Nav = () => {
  return (
    <div className='h-[4vw] pt-1 pb-1 flex justify-between'>
        <Link href="/" className='flex  items-center'>
         <Image src={Logo} alt='logo' width={60} height={60} className='ml-3 h-[60px] w-[60px]'/> 
         <h1 className='font-bold text-[1.5vw] text-[#032756] '>TECHSCHOLARS</h1>
        </Link>
        <div className='flex items-center gap-3 mr-5'>
          <Image src={User} alt='user' width={50} height={50} className='rounded-full' />
          <div id='user-name' className=''>
          <h1 className='font-semibold text-[1.3vw]'>Sayandeep</h1>
          <h1 className='font-normal'>Admin</h1>
          </div>
            <RiArrowDownSLine className='border-black flex items-center justify-center h-7 w-7 border-2 rounded-full cursor-pointer hover:bg-[#032756] hover:text-white transition-all ease-in-out duration-150'/>
        </div>
    </div>
  )
}

export default Nav