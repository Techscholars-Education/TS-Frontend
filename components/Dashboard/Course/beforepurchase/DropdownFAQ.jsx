// components/Dropdown.js
'use client'
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FaChevronDown } from "react-icons/fa";

const DropdownFAQ = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-3">
      <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left px-4 py-2    rounded-md focus:outline-none"
          >
      <div className='flex justify-between'>
        <div className='flex'>

          
            <div className=''>
            {title}
            </div>
          
        </div>
        <FaChevronDown />
      </div>
      </button>

      <Transition
        show={isOpen}
        enter="transition-all duration-300 ease-in-out"
        enterFrom="max-h-0"
        enterTo="max-h-screen"
        leave="transition-all duration-300 ease-in-out"
        leaveFrom="max-h-screen"
        leaveTo="max-h-0"
      >
        <div className="overflow-hidden">
          <div className="px-4 py-2 bg-gray-50 rounded-md">
            {children}
          </div>
        </div>

      </Transition>
      <hr />
    </div>
  );
};

export default DropdownFAQ;
