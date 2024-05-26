import React from 'react';
import { FiBell, FiSearch, FiUser } from 'react-icons/fi';

function DashboardNavbar() {
  return (
    <div className="flex flex-wrap place-items-center h-4">
      <section className="relative mx-auto">
        <nav className="flex justify-between text-black w-[85vw]">
          <div className="px-5 xl:px-12 flex w-full items-center justify-between">
            <a className="text-2xl font-bold font-heading" href="#">
              
              Course
            </a>
           
            <div className="hidden xl:flex items-center space-x-5">
              <a className="hover:text-gray-200" href="#">
                <FiSearch className="h-6 w-6" />
              </a>
              <a className="hover:text-gray-200" href="#">
                <FiBell className="h-6 w-6" />
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </a>
             
              <a className="flex items-center hover:text-gray-200" href="#">
                <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
              </a>
            </div>
          </div>
          <a className="xl:hidden flex mr-6 items-center" href="#">
            <FiBell className="h-6 w-6 hover:text-gray-200" />
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </a>
          <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
            <FiSearch className="h-6 w-6 hover:text-gray-200" />
          </a>
        </nav>
      </section>
    </div>
  );
}

export default DashboardNavbar;
