"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Toggle from "react-toggle";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

import "react-calendar/dist/Calendar.css";
import { LineChart } from "@mui/x-charts/LineChart";

import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import DashboardNavbar from "./DashboardNavbar";

import { DateRange } from "react-date-range";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { Box } from "@mui/material";

import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useCookieStore } from "@/hooks/useStore";
import { DateRangePicker } from "react-date-range";
import Calendar from "./Home/Calender";
import { Tooltip } from "@mui/material";
import { FiLock } from "react-icons/fi";
import Todo from "./Home/Todo";
import useProfile from "@/hooks/useProfile";
import Calenders from "./Calendar/Calenders";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HomePageWeb = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const { cookie } = useCookieStore();

  const { useprofile } = useProfile();
  useEffect(() => {
    useprofile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [1]);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    console.log(ranges);
  };

  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 5.5 },
    { x: 3, y: 2 },
    { x: 5, y: 8.5 },
    { x: 8, y: 1.5 },
    { x: 10, y: 5 },
  ];
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];
  const [progress, setProgress] = useState(10);
  const [value, setValue] = useState(new Date());
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const jeeTopics = [
    {
      subject: "Physics",
      chapter: "Kinematics",
      progress: 60,
      color: "text-gradient-to-r from-orange-400 via-red-500 to-pink-500",
    },
    {
      subject: "Chemistry",
      chapter: "Atomic Structure",
      progress: 70,
      color: "text-green-700",
    },
    {
      subject: "Mathematics",
      chapter: "Calculus",
      progress: 50,
      color: "text-orange-400",
    },
    {
      subject: "Physics",
      chapter: "Electrodynamics",
      progress: 40,
      color: "text-purple-600",
    },
  ];

  const onChange = (newValue) => {
    setValue(newValue);
  };
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
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // Callback function to handle the range change
  const handleRangeChange = (range) => {
    setSelectedRange(range);
    console.log(range);
  };

  return (
    <>
      <div className=" font-Poppins min-h-screen  w-full bg-[#f7faff] overflow-x-hidden overflow-y-hidden ">
        <DashboardNavbar
          title={`Welcome back, Ayo${
            userInfo?.given_name ? `, ${userInfo.given_name}` : ""
          }! 👋 `}
          subtitle="You’ve completed 70% of your goal this week! Keep it up and improve."
        />
        <div className="md:mx-6">
          <div className=" my-3  md:mx-4 grid md:grid-cols-2 grid-cols-1 ">
            <div className="flex flex-col">
              <Tooltip
                title="This feature is locked as of now. Coming soon!"
                placement="right"
                arrow
              >
                <div className="bg-white rounded-lg flex flex-col w-full md:w-[35vw] mx-auto md:h-[320px]">
                  <p className="font-semibold p-4 pb-0">Performance analysis</p>
                  <div className="relative blur-[2px]">
                    <FiLock
                      className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500"
                      style={{ color: "black" }}
                    />
                    <LineChart
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5, 3],
                          color: "black",
                        },
                      ]}
                      xAxis={[
                        {
                          scaleType: "point",
                          data: [
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thr",
                            "Fri",
                            "Sat",
                          ],
                        },
                      ]}
                      height={255}
                      className="text-black"
                    />
                  </div>
                </div>
              </Tooltip>

              <div className="bg-white rounded-lg mt-3 p-4 py-0 w-full md:max-w-[35vw]  mx-auto">
                <p className="font-semibold mt-4">Watch Time</p>
                <div className="relative blur-[2px]">
                  <FiLock
                    className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500"
                    style={{ color: "black" }}
                  />
                  <LineChart
                    height={255}
                    series={[
                      {
                        data: pData,
                        label: "Classes",
                        color: "#891D06",
                      },
                      {
                        data: uData,
                        label: "Tutorials",
                        color: "#ED6214",
                      },
                    ]}
                    xAxis={[{ scaleType: "point", data: xLabels }]}
                    className="text-black"
                  />
                </div>
              </div>
            </div>

            <div className=" mr-12">
              <div className="  flex flex-col bg-white rounded-lg  md:mb-4 md:max-w-[34.5vw]   ">
                <div className="md:mt-0 rounded-xl flex align-middle items-center justify-self-center  ">
                  <div className=" flex items-center justify-center w-full mb-5 mt-3 ">
                    {/* <DateRange
                      ranges={[selectionRange]}
                      onChange={handleSelect}
                      style={{ fontWeight: "700", width: "450px" }}
                    /> */}

                    <Calenders onRangeChange={handleRangeChange} />
                  </div>

                  {/* <div className="hidden md:block">
                        <DateRangePicker
                          ranges={[selectionRange]}
                          onChange={handleSelect}
                        />
                      </div> */}

                  {/* <div className="md:relative">
                        <Calendar selectionRange={selectionRange} />

                      </div> */}
                </div>
              </div>
              <div className="flex flex-col  rounded-lg  bg-white ml-0  w-full md:w-[34.5vw]">
                <div className="flex justify-between m-4 ml-3 mb-4 ">
                  <span className="font-[550] text-[16px] md:ml-5">
                    Topic Progress
                  </span>
                </div>
                <div className="relative blur-[1.5px]  ">
                  <FiLock
                    className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500"
                    style={{ color: "black" }}
                  />
                  <div className="grid md:grid-cols-2 grid-cols-1 p-4 pt-0 gap-4">
                    {jeeTopics.map((topic, index) => (
                      <div
                        key={index}
                        className="flex justify-between md:ml-5 "
                      >
                        <div className="flex flex-col">
                          <p className={`font-semibold ${topic.color}`}>
                            {topic.subject}
                          </p>
                          <p className="text-[12px] text-gray-400">
                            {topic.chapter}
                          </p>
                        </div>
                        <CircularProgressWithLabel value={topic.progress} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Todo />
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

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
