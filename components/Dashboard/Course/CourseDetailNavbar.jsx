"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

function CourseDetailNavbar({courseRoute}) {
  const pathname = usePathname();
  const router = useRouter()
  const isActive = (path) => pathname === path;
  return (
    <div className="flex flex-col md:mx-10">
      <div className="flex bg-blue-100 p-2 px-3 rounded-full w-24">
        <IoMdArrowBack className="mt-1 mr-1" />

        <button onClick={() => router.back()} className=''>
              Back
            </button>
      </div>
      <nav className="font-Poppins">
        <ul className="mt-4 md:mx-auto font-Poppins flex bg-white rounded-xl items-center align-middle md:p-4">
          <li className="flex items-center md:mr-8 mr-6">
            <Link
              href={`/dashboard/my-course/${courseRoute}`}
              className={`font-medium ${
                isActive(`/dashboard/my-course/${courseRoute}`)
                  ? "text-[#0079FC] underline"
                  : "text-darkBlue hover:text-gray-400"
              }`}
            >
              Description
            </Link>
          </li>
          <li className="flex items-center md:mx-10 mx-4">
            <Link
              href={`/dashboard/my-course/${courseRoute}/classes`}
              className={`font-medium ${
                isActive(`/dashboard/my-course/${courseRoute}/classes`)
                  ? "text-[#0079FC] underline"
                  : "text-darkBlue hover:text-gray-400"
              }`}
            >
              All Classes
            </Link>
          </li>
          <li className="flex items-center md:mx-10 mx-4">
            <Link
              href= {`/dashboard/my-course/${courseRoute}/tests`}
              className={`font-medium ${
                isActive(`/dashboard/my-course/${courseRoute}/tests`)
                  ? "text-[#0079FC] underline"
                  : "text-darkBlue hover:text-gray-400"
              }`}
            >
              Tests
            </Link>
          </li>
          <li className="flex items-center md:ml-10 ml-4">
            <Link
              href={`/dashboard/my-course/${courseRoute}/announcement`}
              className={`font-medium ${
                isActive(`/dashboard/my-course/${courseRoute}/announcement`)
                  ? "text-[#0079FC] underline"
                  : "text-darkBlue hover:text-gray-400"
              }`}
            >
              Announcements
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CourseDetailNavbar;
