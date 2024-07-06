"use client";
import React, {useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
function FAQ({ question, isOpen, onClick, ans }) {
  const contentRef = useRef(null);
  return (
    <div
      className="p-4 rounded-md bg-[#fcfafa] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className='font-semibold text-[.9vw]'>{question}</span>
        <span className={`transform transition-transform ease-in-out duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <IoIosArrowDown className='font-semibold text-xl'/>
        </span>
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
      >
      <div className="mt-4 text-left text-[.8vw]">{ans}</div>
       </div>

    </div>
  );
}

export default FAQ;
