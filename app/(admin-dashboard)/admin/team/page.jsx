"use client";

import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import Image from "next/image";
import { admin } from "./data";
import { IoCamera } from "react-icons/io5";

const Page = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [team, setTeam] = useState(true);

  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [position, setPosition] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [imageUrl, setImageUrl] = useState(null)

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setRole(value)

  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageUrl(file)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fname, lname, email, position, phone, imageUrl, role);

    setTimeout(() => {
      setTeam(!team)
    }, 3000);

  }

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded ? (
        <div>
          <Nav />
          <div>
            <div>
              <AdminSidebar />
            </div>
          </div>
          {team ? (
            <div
              id="feedback"
              className="bg-[#e6f0ff] overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
            >
              <div className=" flex justify-between mt-2 pr-2">
                <h1 className="font-semibold text-xl ml-10 ">Team</h1>
                <button
                  className="pl-3 pr-3 pt-2 pb-2 text-white text-[.9vw] rounded-lg bg-TechBlue hover:bg-black transition-all ease-in-out duration-200"
                  onClick={() => setTeam(!team)}
                >
                  Add New Member
                </button>
              </div>

              <div className="ml-10 mt-4 flex flex-wrap gap-5">
                {admin.map((i) => (
                  <div
                    className="bg-white h-[15vw] w-[14vw] p-2 rounded-md flex items-center flex-col"
                    key={i.id}
                  >
                    <Image
                      src={i.img}
                      alt="team"
                      className="h-[7vw] w-[7vw] rounded-full"
                    />
                    <div className="flex flex-col items-center gap-2 mt-2 text-[.7vw] font-normal text-gray-300">
                      <h1 className="font-semibold text-[.9vw] text-black">
                        {i.name}
                      </h1>
                      <p className="">{i.admin}</p>
                      <p>{i.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              id="feedback"
              className="bg-[#e6f0ff]  overflow-y-auto h-[41vw] w-[85vw] relative right-[-15vw]  rounded-md"
            >
              <div className=" flex justify-between mt-2 pr-2">
                <h1 className="font-semibold text-xl ml-10 ">
                  Add Team Member
                </h1>
              </div>

              <div className="ml-10 mt-4 flex flex-wrap gap-5">
                <div className="bg-white h-[35vw] w-[80vw] pl-7 rounded-md  pt-5 pb-5">
                  <form>
                    <div className="flex flex-col items-center gap-2">
                      <div className="camera">
                        <label htmlFor="image">
                          <IoCamera className="p-3 h-[4vw] w-[4vw] text-[.9vw] cursor-pointer bg-slate-100 rounded-full" />
                        </label>
                        <input
                          type="file"
                          id="image"
                          className="outline-none hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                      <h1 className="text-[#11047A] text-[.9vw] font-normal">
                        {" "}
                        Upload Logo
                      </h1>
                    </div>

                    <div className="flex flex-col items-center gap-5">
                      <div className="flex gap-10">
                        <div className="flex flex-col">
                          <label
                            htmlFor="first_name"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="first_name"
                            value={fname}
                            onChange={(e) => { setFName(e.target.value) }}
                            className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="last_name"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="last_name"
                            value={lname}
                            onChange={(e) => { setLName(e.target.value) }}
                            className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5"
                          />
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <div className="flex flex-col">
                          <label
                            htmlFor="email"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="phone"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                            Phone Number
                          </label>
                          <input
                            type="number"
                            id="phone"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }}
                            className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5"
                          />
                        </div>
                      </div>
                      <div className="flex gap-10">
                        <div className="flex flex-col">
                          <label
                            htmlFor="position"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                            Position
                          </label>
                          <input
                            type="text"
                            id="position"
                            value={position}
                            onChange={(e) => { setPosition(e.target.value) }}
                            className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor="designation"
                            className=" mb-2 text-sm font-medium text-gray-600 "
                          >
                            Role
                          </label>

                          <select
                            onChange={handleGenderChange}
                            value={role}
                            id="countries"
                            className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20vw] p-2.5"
                          >
                            <option value="" selected disabled hidden>Choose Role</option>
                            <option value="Member">Member</option>
                            <option value="CEO" >CEO</option>
                            <option value="CTO">CTO</option>
                            <option value="Digital Marketer"> Digital Marketer</option>
                            <option value="Strategist">Strategist</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-5">
                        <button type="submit"
                          className="pl-3 pr-3 pt-2 pb-2 text-white bg-TechBlue rounded-md w-32 hover:bg-black hover:text-white transition-all ease-in-out duration-200"
                          onClick={handleSubmit}
                        >
                          Add Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen w-full">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Page;
