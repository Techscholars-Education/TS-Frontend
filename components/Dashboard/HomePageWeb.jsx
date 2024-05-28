"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Toggle from "react-toggle";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { LineChart } from "@mui/x-charts/LineChart";
import { IoMdArrowBack } from "react-icons/io";
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
import DashboardNavbar from "./DashboardNavbar";
import { FaStar, FaCheck } from "react-icons/fa";
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
// import Calender from "@/app/(admin-dashboard)/admin/scholorship/_components/Calender";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
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
} from 'date-fns'
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
  ];
  const [progress, setProgress] = useState(10);
  const [value, setValue] = useState(new Date());
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

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

  return (
    <>
      <div className=" font-Poppins min-h-screen  w-full bg-[#F0F7FF] ">
        <DashboardNavbar title="Welcome back, Ayo! 👋 " subtitle="You’ve learned 70% of your goal this week! Keep it up and improve." />
        <div className='flex bg-slate-200 p-2 px-3 rounded-full w-24 m-3 mb-0 ml-6'>
           <IoMdArrowBack className='mt-1 mr-1'/>

        <Link href="/" className='text-[14px]'>
            Back
        </Link>
        </div>
        <div className="my-6 mt-3 mx-6 flex ">
          <div className="w-[35vw] flex flex-col">
            <div className="bg-white rounded-xl flex flex-col">
              <p className="font-semibold p-6 pb-0">Performance analysis</p>
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
            <div className="bg-white rounded-xl mt-5 p-6">
              <p className="font-semibold ">Watch Time</p>
              <LineChart
                width={500}
                height={300}
                series={[
                  { data: pData, label: 'Classes' },
                  { data: uData, label: 'Tutorials' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
              />
            </div>
          </div>
          <div className=" w-[35vw] flex flex-col">

            <div className="bg-white  m-6 mt-0  rounded-xl">
              <div className="flex justify-center align-middle mt-12 items-center ">
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
                    <DemoItem label="">
                      <div className="">

                      <DateRangeCalendar calendars={1} />
                      </div>
                    </DemoItem>

                  </DemoContainer>
                </LocalizationProvider> */}
                <div className="h-[20vw]">
                  <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
                    <div className="md:grid md:grid-cols-1 md:divide-x md:divide-gray-200">
                      <div className="md:pr-14">
                        <div className="flex items-center">
                          <h2 className="flex-auto font-semibold text-gray-900">
                            {format(firstDayCurrentMonth, 'MMMM yyyy')}
                          </h2>
                          <button
                            type="button"
                            onClick={previousMonth}
                            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Previous month</span>
                            <FaChevronLeft className="w-3 h-3" aria-hidden="true" />
                          </button>
                          <button
                            onClick={nextMonth}
                            type="button"
                            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Next month</span>
                            <FaChevronRight className="w-3 h-3" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="grid grid-cols-7 mt-2 gap-6 text-xs leading-10 text-center text-gray-500">
                          <div>Sun</div>
                          <div>Mon</div>
                          <div>Tue</div>
                          <div>Wed</div>
                          <div>Thr</div>
                          <div>Fri</div>
                          <div>Sat</div>
                        </div>
                        <div className="grid grid-cols-7 text-sm">
                          {days.map((day, dayIdx) => (
                            <div
                              key={day.toString()}
                              className={classNames(
                                dayIdx === 0 && colStartClasses[getDay(day)],
                                'py-1.5'
                              )}
                            >
                              <button
                                type="button"
                                onClick={() => setSelectedDay(day)}
                                className={classNames(
                                  isEqual(day, selectedDay) && 'text-white',
                                  !isEqual(day, selectedDay) &&
                                  isToday(day) &&
                                  'text-red-500',
                                  !isEqual(day, selectedDay) &&
                                  !isToday(day) &&
                                  isSameMonth(day, firstDayCurrentMonth) &&
                                  'text-gray-900',
                                  !isEqual(day, selectedDay) &&
                                  !isToday(day) &&
                                  !isSameMonth(day, firstDayCurrentMonth) &&
                                  'text-gray-400',
                                  isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                                  isEqual(day, selectedDay) &&
                                  !isToday(day) &&
                                  'bg-gray-900',
                                  !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                  (isEqual(day, selectedDay) || isToday(day)) &&
                                  'font-semibold',
                                  'mx-auto flex h-6 w-6 items-center justify-center rounded-full'
                                )}
                              >
                                <time dateTime={format(day, 'yyyy-MM-dd')}>
                                  {format(day, 'd')}
                                </time>
                              </button>


                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white  rounded-lg  m-6 mt-0">
              <div className="flex justify-between m-4 ">
                <span className="font-[700] text-[15px]">Topic progress</span>

                {/* <select>
                    <option value="jee">JEE</option>
                    <option value="neet">NEET</option>
                  </select> */}
              </div>
              <div className="grid grid-cols-2 p-6 pt-0 gap-4 ">
                <div className="flex justify-between h-[48.2px]">
                  <div className="flex flex-col">
                    <p className="font-semibold text-blue-600">Physics</p>
                    <p className="text-[12px] text-gray-400">Chapter 3</p>
                  </div>
                  <CircularProgressWithLabel
                    value={progress}
                    className="text-gradient-to-r from-orange-400 via-red-500 to-pink-500"
                  />
                </div>
                <div className="flex justify-between h-[48.2px]">
                  <div className="flex flex-col">
                    <p className="font-semibold text-green-700">Physics</p>
                    <p className="text-[12px] text-gray-400">Chapter 3</p>
                  </div>
                  <CircularProgressWithLabel value={progress} className="text-green-700" />
                </div>
                <div className="flex justify-between h-[48.2px]">
                  <div className="flex flex-col">
                    <p className="font-semibold text-orange-400">Physics</p>
                    <p className="text-[12px] text-gray-400">Chapter 3</p>
                  </div>
                  <CircularProgressWithLabel value={progress} className="text-orange-400" />
                </div>
                <div className="flex justify-between h-[48.2px]">
                  <div className="flex flex-col">
                    <p className="font-semibold text-purple-600">Physics</p>
                    <p className="text-[12px] text-gray-400">Chapter 3</p>
                  </div>
                  <CircularProgressWithLabel value={progress} className="text-purple-600" />
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl ml-6 mr-6 mt-0  bg-white p-4">
              <div className="flex justify-between">
                <h3 className="font-[700] text-[20px]">To Do List</h3>
                <h4 className="font-[700] text-[13px]">See all</h4>
              </div>
              <div>
                <div className="flex justify-between mt-4 bg-[#F0F7FF] p-3 rounded-3xl ">
                  <div className="flex">
                  <FaCheck className="text-white  bg-blue-500 h-5 p-1 w-5  rounded-full" />
                    <div className="flex flex-col ml-3">
                      <h2 className="text-[#333333] font-[700] text-[15px]">
                      Life Contingency Tutorials Edulog Tutorial College, Blk 56, Lagos State.
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

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]