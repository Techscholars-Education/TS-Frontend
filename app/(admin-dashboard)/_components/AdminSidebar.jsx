"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoMdTimer } from "react-icons/io";
import { LuMenuSquare } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const AdminSidebar = ({mobile,setMobile}) => {

  return (
    <>
      <aside 
 
      className={`lg:w-[16vw] lg:h-auto lg:flex flex-col gap-[3.5vw] lg:left-0  top-13 lg:fixed transition-all ease-in-out duration-200 ${mobile ? "h-screen w-full fixed z-40 bg-white block transition-all ease-in-out duration-200" : "hidden" }  `}
     
      
      >
        <DivOne loaction={location} />

        <DivTwo location={location} />

        {mobile && (
          <button className="bg-black text-white p-4 rounded-full ml-14 mt-7 hover:bg-[#0079FC] hover:text-white transition-all ease-in-out duration-200" onClick={() => setMobile(!mobile)}>
            <IoMdClose className="text-[7vw]"/>
          </button>
        )}
      </aside>
    </>
  );
};

const DivOne = () => (
  <div className="ml-3 mt-2">
    <ul className="flex flex-col gap-1">
      <Li url="/admin/home" text="Home" Icon={IoMdTimer} location={location} />
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
);

const DivTwo = () => (
  <div className="ml-3">
    <ul className="">
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
);

const Li = ({ url, text, location, Icon }) => (
  <motion.li 
     whileHover={{ scale: 1.01 }}
    transition={{ease:"circInOut",duration:2}}
    className={`${
      location.pathname === url ? "bg-[#0079FC] text-white rounded-md" : ""
    } font-normal lg:text-[1.1vw] text-[6vw] hover:bg-black pl-3 pr-3 pt-2 pb-2 lg:w-[14vw] w-[75vw] hover:rounded-md hover:text-white hover:shadow-lg hover:shadow-black transition-all ease-in-out duration-150`}
  >
    <Link href={url} className="flex items-center gap-5 ">
      <Icon />
      {text}
    </Link>
  </motion.li>
);

export default AdminSidebar;
