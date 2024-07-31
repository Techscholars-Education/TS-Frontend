import React from "react";
import Image from "next/image";
import Community from "../../public/Dashboard/Community.jpg";
import avatar from "../../public/Dashboard/avatar.jpg";
import Link from "next/link";
const Communitycards = (props) => {
  return (
    <div className="bg-white  font-Poppins rounded-xl">
      <div className="rounded-xl">
        <Image className="rounded-xl" src={Community} alt="community-icon" />
      </div>

      <div className="flex justify-between items-center  ">
        <div className="space-y-2 p-3">
          <h3 className="text-darkBlue text-xl font-semibold">{props.title}</h3>
        </div>
        <div className="flex -space-x-4 rtl:space-x-reverse mr-3 ">
          <Image
            className="w-8 h-8 border-2 border-white rounded-full bg-green-300"
            src={avatar}
            alt="avatar-picture"
            width="40"
            height="40"
          />
          <Image
            className="w-8 h-8 border-2 border-white rounded-full bg-green-300"
            src={avatar}
            alt="avatar-picture"
            width="40"
            height="40"
          />
          <Image
            className="w-8 h-8 border-2 border-white rounded-full bg-green-300"
            src={avatar}
            alt="avatar-picture"
            width="40"
            height="40"
          />
          <a
            className="flex items-center justify-center w-8 h-8 px-2 text-xs font-medium text-white bg-darkBlue  border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            +99
          </a>
        </div>
      </div>
      <div className="px-3">
        <p className="text-sm text-gray-500 pr-20">{props.subhead}</p>
      </div>
      <div className="w-full px-3 my-4">
        <Link
          className="bg-TechBlue text-white rounded-full w-full py-3 hover:bg-black duration-200 inline-block text-center font-medium font-Poppins"
          href={props.linkTo}
        >
          {props.btnText}
        </Link>
      </div>
    </div>
  );
};

export default Communitycards;
