import Image from 'next/image'
import React from 'react'
import logo from "../../../public/Logo.svg"
import User from  "../../../public/AdminDashboard/user.png"
import { RiArrowDownSLine } from "react-icons/ri";
import Link from 'next/link';


const Nav = () => {
  return (
    <div className='lg:h-[4vw] pt-1 pb-1 lg:flex justify-between hidden'>
        <Link href="/" className='flex  items-center'>
         <Image src={logo} alt='logo' width={40} height={40} className='ml-3 h-[40px] w-[40px]'/> 
         <h1 className='font-semibold text-[1.3vw] ml-2'>TECHSCHOLARS</h1>
        </Link>
        <Link href={"/admin/settings"} className='flex items-center gap-3 mr-5'>
          <Image src={User} alt='user' width={50} height={50} className='rounded-full' />
          <div id='user-name' className=''>
          <h1 className='font-semibold text-[1.3vw]'>Sayandeep</h1>
          <h1 className='font-normal'>Admin</h1>
          </div>
            <RiArrowDownSLine className='border-black flex items-center justify-center h-7 w-7 border-2 rounded-full cursor-pointer hover:bg-[#032756] hover:text-white transition-all ease-in-out duration-150'/>
        </Link>
    </div>
  )
}

export default Nav