import React from 'react';
import { FaLessThan } from "react-icons/fa";
import bicon from '../app/assets/bicon.svg'; // Adjust the path as necessary

const Sidenavigation = () => {
  return (
    <div>
      <div className='w-[480px] h-[100vh] bg-[#111a4f] flex flex-col justify-between'>
        <nav className="flex items-center p-8">
        <FaLessThan color="#FFE01B" size={20} />
          <img src={bicon} alt="Bicon" className="w-6 h-6 ml-4" />
           <span className='text-[#FFE01B] font-[700] text-[16px] ' style={{fontFamily:'"Noto Serif Georgian", serif'}}>TECHSCHOLARS</span>
        </nav>
        <div className='p-16 '>
        <span className='text-[#FFE01B] fornt-[600] text-[32px]  '>
        {"Climb your way up to the pathway you envision".toLocaleUpperCase()}
         </span>
        </div>
      </div>
    </div>
  );
};

export default Sidenavigation;
