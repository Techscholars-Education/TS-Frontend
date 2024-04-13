"use client";
import React, { useRef } from "react";
import Image from "next/image";
import addFile from "../../public/Dashboard/addFile.svg";
const Profile = () => {
  const fileInputRef = useRef(null);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
  };
  return (
    <div className="w-full min-h-screen bg-[#F0F7FF] py-16 px-16">
      <div className=" space-y-3 ">
        <h3 className="font-Poppins text-2xl font-semibold">
          TechScholars | Bharat's best educational platform
        </h3>
        <p className="text-xl text-darkBlue">Personal Information</p>
      </div>
      <div className="my-10 font-Poppins">
        <p className="pb-4">Your Profile Picture</p>
        <div className="border-4 rounded-xl bg-gray-100 border-dotted flex flex-col justify-between py-4 items-center w-32 h-32 file-upload">
          <Image
            src={addFile}
            alt="upload"
            onClick={handleClick}
            className="cursor-pointer"
          />
          <p
            onClick={handleClick}
            className="cursor-pointer text-sm text-center"
          >
            Upload your Photo
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>

      <form className=" grid grid-cols-2 gap-6 my-10">
        <div className=" flex flex-col  space-y-3 font-Poppins">
          <label htmlFor="fullname">Full Name</label>
          <input
            className="outline-none p-3 bg-gray-100 border rounded-xl"
            placeholder="Please enter your full name"
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-3 font-Poppins">
          <label htmlFor="email">Email</label>
          <input
            className="outline-none p-3 bg-gray-100 border rounded-xl"
            placeholder="Please enter your email"
            type="email"
          />
        </div>
        <div className="flex flex-col space-y-3 font-Poppins">
          <label htmlFor="username">Username</label>
          <input
            className="outline-none p-3 bg-gray-100 border rounded-xl"
            placeholder="Please enter your username"
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-3 font-Poppins">
          <label htmlFor="Phone">Phone number</label>
          <input
            className="outline-none p-3 bg-gray-100 border rounded-xl"
            placeholder="Please enter your phone number"
            type="number"
          />
        </div>
        <div className=" col-span-2 flex space-y-3 flex-col font-Poppins w-full">
          <label htmlFor="Phone">Bio</label>
          <textarea
            className="outline-none p-3 bg-gray-100 border rounded-xl"
            type="text"
            name="message"
            placeholder="Write your Bio here e.g your hobbies, interests ETC"
          />
        </div>
      </form>
      <div className="font-Poppins w-full flex justify-end">
        <button className="bg-darkBlue text-white px-8 py-3 rounded-xl ">
          Update Profile
        </button>
        <button className=" px-8 py-3 ">Reset</button>
      </div>
    </div>
  );
};

export default Profile;
