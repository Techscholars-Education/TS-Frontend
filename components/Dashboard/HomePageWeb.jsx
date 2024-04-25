"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Toggle from "react-toggle";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import Calendar from "react-calendar";
import { LineChart } from "@mui/x-charts/LineChart";

import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { FaHandsClapping } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { LiaGreaterThanSolid } from "react-icons/lia";

const HomePageWeb = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Monthly Sales - 2017",
    },
    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      title: "Sales (in USD)",
      prefix: "$",
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2017, 0), y: 25060 },
          { x: new Date(2017, 1), y: 27980 },
          { x: new Date(2017, 2), y: 42800 },
          { x: new Date(2017, 3), y: 32400 },
          { x: new Date(2017, 4), y: 35260 },
          { x: new Date(2017, 5), y: 33900 },
          { x: new Date(2017, 6), y: 40000 },
          { x: new Date(2017, 7), y: 52500 },
          { x: new Date(2017, 8), y: 32300 },
          { x: new Date(2017, 9), y: 42000 },
          { x: new Date(2017, 10), y: 37160 },
          { x: new Date(2017, 11), y: 38400 },
        ],
      },
    ],
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 5.5 },
    { x: 3, y: 2 },
    { x: 5, y: 8.5 },
    { x: 8, y: 1.5 },
    { x: 10, y: 5 },
  ];
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col bg-[#F0F7FF] w-full">
        <div className="flex w-full">
          <div className="w-[736px] mx-6 ">
            <div className="flex justify-between m-3">
              <div className="relative rounded-full bg-white shadow-md w-[400px] h-[35px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <AiOutlineSearch className="text-gray-500" />
                </span>
                {/* <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 rounded-full  "
                                /> */}
              </div>
              <div className="flex">
                <RiSunLine color="#002657" className="mt-0.5" />
                <div
                  className={`relative inline-block w-14 h-5 mx-3 align-middle select-none transition duration-200 ease-in bg-[#002657] rounded-full cursor-pointer ${
                    isChecked ? "bg-[#002657]" : "bg-[#002657]"
                  }`}
                  onClick={handleToggle}
                >
                  <div
                    className={`toggle-dot absolute w-4 h-4 top-0.5 mx-1 rounded-full bg-[#FED102] transition-transform ${
                      isChecked ? "transform translate-x-[2vw]" : ""
                    }`}
                  ></div>
                </div>
                <RiMoonClearLine color="#002657" className="mt-0.5" />
              </div>
            </div>
            <div className="flex  bg-white rounded-3xl mt-3 h-[155px] w-[55vw]">
              <div className="flex flex-col m-4 w-3/5">
                <div className="flex">
                  <p className="font-[700] text-[35px] text-[#002657]">
                    Welcome back ,Ankit
                  </p>{" "}
                  <FaHandsClapping className="text-[34px] mt-2.5 mx-3 text-yellow-400" />
                </div>
                <p className="text-[#002657] font-[400] text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  alias voluptatum porro quia maxime rerum distinctio enim!
                  Natus cumque et explicabo molestiae vitae quisquam corrupti?
                  Nam ex doloribus itaque voluptate!
                </p>
              </div>
              <div className=" w-2/5 flex justify-end my-4">
                <Image
                  src={require("../../public/Home/profileimg.jpg")}
                  alt="profile-image"
                  className="mr-8"
                />
              </div>
            </div>
            <div className="flex justify-between mt-3 h-[240px] w-[55vw]">
              <div className="bg-white rounded-2xl">
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                  ]}
                  width={500}
                  height={260}
                />
              </div>
              <div className=" p-6 bg-white rounded-3xl ml-3 w-[400px] ">
                <div className="flex justify-between mb-2  ">
                  <span className="font-[700] text-[15px]">Topic progress</span>

                  <select>
                    <option value="jee">JEE</option>
                    <option value="neet">NEET</option>
                  </select>
                </div>

                <div className="flex justify-between h-[48.2px]">
                  <p>Physics</p>
                  <CircularProgressWithLabel
                    value={progress}
                    className="text-gradient-to-r from-orange-400 via-red-500 to-pink-500"
                  />
                </div>
                <div className="flex justify-between h-[48.2px]">
                  <p>Physics</p>
                  <CircularProgressWithLabel value={progress} />
                </div>
                <div className="flex justify-between h-[48.2px]">
                  <p>Physics</p>
                  <CircularProgressWithLabel value={progress} />
                </div>
                <div className="flex justify-between h-[48.2px]">
                  <p>Physics</p>
                  <CircularProgressWithLabel value={progress} />
                </div>
              </div>
            </div>

            <div className="flex mt-3 w-[55vw] ">
              <div className=" bg-white px-6 pt-4 rounded-3xl w-[620px]">
                <div className="flex justify-between">
                  <p className="text-[#333333] font-[700] text-[15px]">
                    Community
                  </p>
                  <p className="text-[#333333] font-[700] text-[15px]">
                    View All
                  </p>
                </div>
                <div className="flex justify-between mt-3">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <button className="bg-white  border-slate-400 border px-2 rounded-full font-[700] py-1 text-[10px]">
                        First Chapter of Project .doc
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#8A8A8A] font-[800] text-[10px]">
                      09:31 am
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <button className="bg-white  border-slate-400 border px-2 rounded-full font-[700] py-1 text-[10px]">
                        First Chapter of Project .doc
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#8A8A8A] font-[800] text-[10px]">
                      09:31 am
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-4 ">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <button className="bg-white  border-slate-400 border px-2 rounded-full font-[700] py-1 text-[10px]">
                        First Chapter of Project .doc
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#8A8A8A] font-[800] text-[10px]">
                      09:31 am
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-3xl ml-3 bg-white p-3 w-[400px]  ">
                <h3 className="font-[700] text-[15px]">Upcoming features</h3>

                <div className="flex justify-between mt-2 bg-[#FFD700] p-2 rounded-3xl ">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div style={{ position: "relative", bottom: "7px" }}>
                    <Image
                      src={require("../../public/Home/maddle.png")}
                      alt="maddle-image"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-2 bg-[#C0C0C0] p-2 rounded-3xl ">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div style={{ position: "relative", bottom: "7px" }}>
                    <Image
                      src={require("../../public/Home/maddle.png")}
                      alt="maddle-image"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-2 bg-[#D9AB7D] p-2 rounded-3xl ">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div style={{ position: "relative", bottom: "7px" }}>
                    <Image
                      src={require("../../public/Home/maddle.png")}
                      alt="maddle-image"
                    />
                  </div>
                </div>

                <div className="flex justify-between  bg-[#F0F7FF] p-2 rounded-3xl mt-2 ">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div style={{ position: "relative", bottom: "7px" }}>
                    <Image
                      src={require("../../public/Home/maddle.png")}
                      alt="maddle-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[382px] ml-24 flex flex-col">
            <div className="m-6">
              <Calendar />
            </div>
            <div className="flex flex-col rounded-3xl ml-6 mt-8 bg-white p-4">
              <div className="flex justify-between">
                <h3 className="font-[700] text-[20px]">To Do List</h3>
                <h4 className="font-[700] text-[13px]">See all</h4>
              </div>
              <div>
                <div className="flex justify-between mt-4 bg-[#F0F7FF] p-3 rounded-3xl ">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <LiaGreaterThanSolid />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-4 bg-[#FFF0F7] p-3 rounded-3xl ">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <LiaGreaterThanSolid />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-4 bg-[#F0FFF3] p-3 rounded-3xl ">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <LiaGreaterThanSolid />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-4 bg-[#F0F7FF] p-3 rounded-3xl ">
                  <div className="flex">
                    <Stack direction="row" spacing={2}>
                      <Avatar {...stringAvatar("Mayowa Ade")} />
                    </Stack>
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                        Mayowa Ade
                      </h2>
                      <p className="font-[600] text-[10px] text-[#8A8A8A]">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <LiaGreaterThanSolid />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageWeb;

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
