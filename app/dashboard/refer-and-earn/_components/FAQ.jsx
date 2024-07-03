import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
function FAQ({ question, isOpen, onClick }) {
  return (
    <div
      className="p-4 rounded-md bg-[#fcfafa] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className='font-semibold text-[.9vw]'>{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <IoIosArrowDown className='font-semibold text-xl'/>
        </span>
      </div>
      {isOpen && <div className="mt-4 text-left text-[.8vw]">Answer to the question</div>}
    </div>
  );
}

export default FAQ;
