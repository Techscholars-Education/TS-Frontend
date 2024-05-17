"use client"
import Link from 'next/link';
import React from 'react'
import { AiFillFileText } from 'react-icons/ai';
import { BiLogOutCircle } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoMdTimer } from "react-icons/io";
import { LuMenuSquare } from "react-icons/lu";


const AdminSidebar = () => {


  return (
    <>
        <aside className='w-[16vw] h-auto flex flex-col gap-[3.5vw] left-0 top-13 fixed  '>
            <DivOne loaction={location}/>
           
            <DivTwo location={location}/>
        </aside>
    </>
  )
}

const DivOne = () => (
    <div className='ml-3 mt-2'>
    <ul className='flex flex-col gap-1'>
      <Li
        url="/admin/home"
        text="Home"
        Icon={IoMdTimer}
        location={location}
      
      />
      <Li
        url="/admin/batches"
        text="Batches"
        Icon={LuMenuSquare}
        location={location}
        
      />
      <Li
        url="/admin/feedback"
        text="Feedback"
        Icon={FaRegHeart}
        location={location}
 
      />
      <Li
        url="/admin/blogs"
        text="Feed/Blogs"
        Icon={FaRegMessage}
        location={location}
       
      />
      <Li
        url="/admin/notifications"
        text="Notifications"
        Icon={IoMdNotificationsOutline}
        location={location}
       
      />
      <Li
        url="/admin/student"
        text="Student Data"
        Icon={AiFillFileText}
        location={location}
       
      />
      <Li
        url="/admin/house"
        text="House of TS"
        Icon={AiFillFileText}
        location={location}
       
      />
      <Li
        url="/admin/scholorship"
        text="Scholarship Test"
        Icon={AiFillFileText}
        location={location}
       
      />
      <Li
        url="/admin/callback"
        text="Callback Requests"
        Icon={AiFillFileText}
        location={location}
       
      />
      <Li
        url="/admin/invoice"
        text="Invoice"
        Icon={LiaFileInvoiceSolid}
        location={location}
       
      />
      <Li
        url="/admin/team"
        text="Manage Team"
        Icon={FaRegUser}
        location={location}
       
      />
    </ul>
  </div>
)

const DivTwo = () => (
    <div className='ml-3'>
        <ul className=''>
        <Li
        url="/admin/settings"
        text="Settings"
        Icon={TbSettings}
        location={location}
       
      />
        <Li
        url="/admin"
        text="Logout"
        Icon={BiLogOutCircle}
        location={location}
       
      />
        </ul>
    </div>
)


const Li = ({ url, text,location,Icon }) => (
    <li className={`${location.pathname === url ? "bg-[#012657] text-white rounded-md" : ""} font-normal text-[1.1vw] hover:bg-[#012657] pl-3 pr-3 pt-2 pb-2 w-[14vw] hover:rounded-md hover:text-gray-100 transition-all ease-in-out duration-150`}
      
    >
      <Link
        href={url}
        className='flex items-center gap-5 '
      >
        <Icon />
         {text}
      </Link>
    </li>
);

export default AdminSidebar


