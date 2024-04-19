import React from "react";
import Image from "next/image";
import Community from "../../public/Dashboard/Community.jpg";
import avatar from "../../public/Dashboard/avatar.jpg";
const Communitycards = (props) => {
  return (
    <div className="bg-white max-w-xs  font-Poppins rounded-xl p-6">
      <div className="rounded-xl">
        <Image src={Community} alt="community-icon" />
      </div>

      <div className="my-5 flex justify-between">
        <div className="space-y-2">
          <h3 className="text-darkBlue text-lg"> {props.title}</h3>
          <p className="text-xs text-gray-500">{props.students}</p>
        </div>
        <div className="flex -space-x-4 rtl:space-x-reverse">
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

      <div className="flex justify-end">
        <button className="rounded-full text-sm bg-darkBlue text-white px-4 py-2">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Communitycards;
