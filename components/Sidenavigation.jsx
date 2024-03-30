import Image from "next/image";
import React from "react";
import { FaLessThan } from "react-icons/fa";
import Logo from "../public/Logo.svg";

const Sidenavigation = () => {
  return (
    <div>
      <div className="w-[480px] h-[100vh] bg-[#111a4f] flex flex-col justify-between">
        <nav className="flex items-center p-8">
          <FaLessThan color="#FFE01B" size={20} />
          <Image className="w-16 h-16" src={Logo}></Image>
          <span className="text-[#FFE01B] font-[700] text-[16px] font-Inter ">
            TECHSCHOLARS
          </span>
        </nav>
        <div className="py-16 px-10">
          <span className="text-[#FFE01B] font-base text-4xl">
            {"Climb your way up to the pathway you envision".toLocaleUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidenavigation;
