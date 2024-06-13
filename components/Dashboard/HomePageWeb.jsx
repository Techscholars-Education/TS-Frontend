"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Toggle from "react-toggle";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

import 'react-calendar/dist/Calendar.css';
import { LineChart } from "@mui/x-charts/LineChart";
import { IoMdArrowBack } from "react-icons/io";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import { FaHandsClapping } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { LiaGreaterThanSolid } from "react-icons/lia";
import DashboardNavbar from "./DashboardNavbar";
import { FaStar, FaCheck } from "react-icons/fa";
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
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useCookieStore } from "@/hooks/useStore";
import { DateRangePicker } from 'react-date-range';
import Calendar from "./Home/Calender";
import { Tooltip } from "@mui/material";
import { FiLock, } from "react-icons/fi";
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
  const [userInfo, setUserInfo] = useState(null);
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ task: '', description: '', completed: false });
  const [isEditing, setIsEditing] = useState(false);
  const { cookie } = useCookieStore()

  useEffect(() => {
    const fetchTodos = async () => {
      const cookie = Cookies.get("access_token");
      let axiosConfig = {
        headers: {
          'authorization': cookie,
        }
      };
      const response = await axios.get("https://api.techscholars.in/auth/todoAll", axiosConfig);
      setTodos(response.data);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    const cookie = Cookies.get("access_token");
    let axiosConfig = {
      headers: {
        'authorization': cookie,
      }
    };
    const response = await axios.post("https://api.techscholars.in/auth/todo", currentTodo, axiosConfig);
    setTodos([...todos, response.data]);
    setOpen(false);
    setCurrentTodo({ task: '', description: '', completed: false });
  };

  const handleDeleteTodo = async (id) => {
    const cookie = Cookies.get("access_token");
    let axiosConfig = {
      headers: {
        'authorization': cookie,
      }
    };
    await axios.delete(`https://api.techscholars.in/auth/todo/delete/${id}`, axiosConfig);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = async () => {
    const cookie = Cookies.get("access_token");
    let axiosConfig = {
      headers: {
        'authorization': cookie,
      }
    };
    const response = await axios.put("https://api.techscholars.in/auth/todo/update", currentTodo, axiosConfig);
    setTodos(todos.map(todo => (todo.id === response.data.id ? response.data : todo)));
    setOpen(false);
    setIsEditing(false);
    setCurrentTodo({ task: '', description: '', completed: false });
  };

  const openDialog = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setOpen(true);
  };

  const closeDialog = () => {
    setIsEditing(false);
    setOpen(false);
    setCurrentTodo({ task: '', description: '', completed: false });
  };


  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });





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
  const jeeTopics = [
    { subject: "Physics", chapter: "Kinematics", progress: 60, color: "text-gradient-to-r from-orange-400 via-red-500 to-pink-500" },
    { subject: "Chemistry", chapter: "Atomic Structure", progress: 70, color: "text-green-700" },
    { subject: "Mathematics", chapter: "Calculus", progress: 50, color: "text-orange-400" },
    { subject: "Physics", chapter: "Electrodynamics", progress: 40, color: "text-purple-600" }
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

  return (
    <>
      <div className=" font-Poppins min-h-screen  w-full bg-[#F0F7FF] overflow-x-hidden ">
        <DashboardNavbar title={`Welcome back${userInfo?.given_name ? `, ${userInfo.given_name}` : ''}! 👋 `} subtitle="You’ve learned 70% of your goal this week! Keep it up and improve." />
        <div className='flex bg-slate-200 p-2 px-3 rounded-full w-24 m-3 mb-0 ml-6'>
          <IoMdArrowBack className='mt-1 mr-1' />

          <Link href="/" className='text-[14px]'>
            Back
          </Link>
        </div>
        <div className="my-6 mt-3 mx-6 flex ">
          <div className="w-[35vw] flex flex-col">
            <Tooltip
              title="This feature is locked as of now. Coming soon!"
              placement="right"
              arrow
            >
              <div className="bg-white rounded-xl flex flex-col hover:">
                <p className="font-semibold p-6 pb-0">Performance analysis</p>
                <div className="relative blur-[2px] ">
                  <FiLock className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500" style={{ color: 'black' }} />
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

              </div>
            </Tooltip>
            <div className="bg-white rounded-xl mt-5 p-6">
              <p className="font-semibold ">Watch Time</p>
              <div className="relative blur-[2px] ">
              <FiLock className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500" style={{ color: 'black' }} />
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
            <div className="flex flex-col bg-white rounded-lg  mt-6 ml-0 m">
              <div className="flex justify-between m-4">
                <span className="font-[700] text-[15px]">Topic Progress</span>
              </div>
              <div className="relative blur-[2px] ">
              <FiLock className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500" style={{ color: 'black' }} />
              <div className="grid grid-cols-2 p-6 pt-0 gap-4">
                {jeeTopics.map((topic, index) => (
                  <div key={index} className="flex justify-between h-[48.2px]">
                    <div className="flex flex-col">
                      <p className={`font-semibold ${topic.color}`}>{topic.subject}</p>
                      <p className="text-[12px] text-gray-400">{topic.chapter}</p>
                    </div>
                    <CircularProgressWithLabel value={topic.progress} />
                  </div>
                ))}
              </div>
                </div>
            </div>
          </div>
          <div className=" w-[40vw] flex flex-col">

            <div className="w-[40vw] flex flex-col max-h-[85vh]  overflow-y-auto">
              <div className="bg-white m-6 mt-0 rounded-xl">
                <div className="flex justify-center align-middle mt-6 items-center">

                  <div className="md:grid md:grid-cols-1 md:divide-x md:divide-gray-200">
                    <DateRangePicker
                      ranges={[selectionRange]}
                      onChange={handleSelect}
                    />
                    <div className="relative">
                      <Calendar />

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <Box className="flex flex-col rounded-xl ml-6 mr-6 mt-0 bg-white p-4 max-h-[80vh] overflow-y-auto">
              <Box className="flex justify-between">
                <h3 className="font-bold text-xl">To Do List</h3>
                <Button variant="outlined" onClick={() => setOpen(true)}>Add Todo</Button>
              </Box>
              <Box>
                {todos.length > 0 ? (
                  todos.map(todo => (
                    <Box key={todo.id} className="flex justify-between mt-4 bg-blue-50 p-3 rounded-xl">
                      <Box className="flex">
                        {
                          todo.completed ? <FaCheck className={`h-6 w-6 p-1 rounded-full mt-4  bg-green-500 text-white' text-gray-700'}`} /> : ""
                        }

                        <Box className="flex flex-col ml-3">
                          <h2 className="text-gray-900 font-bold text-[16px]">
                            {todo.task}
                          </h2>
                          <p className="font-medium text-sm text-gray-500">
                            {todo.description}
                          </p>
                        </Box>
                      </Box>
                      <Box className="flex items-center space-x-2">
                        <IconButton onClick={() => openDialog(todo)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteTodo(todo.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </Box>
              <Dialog open={open} onClose={closeDialog}>
                <DialogTitle>{isEditing ? "Edit Todo" : "Add Todo"}</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Task"
                    type="text"
                    fullWidth
                    value={currentTodo.task}
                    onChange={(e) => setCurrentTodo({ ...currentTodo, task: e.target.value })}
                  />
                  <TextField
                    margin="dense"
                    label="Description"
                    type="text"
                    fullWidth
                    value={currentTodo.description}
                    onChange={(e) => setCurrentTodo({ ...currentTodo, description: e.target.value })}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeDialog} color="primary">Cancel</Button>
                  <Button onClick={isEditing ? handleUpdateTodo : handleAddTodo} color="primary">
                    {isEditing ? "Update" : "Add"}
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
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