"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Toggle from "react-toggle";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";


import 'react-calendar/dist/Calendar.css';
import { LineChart } from "@mui/x-charts/LineChart";

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
import List from '@mui/material/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { DateRange } from 'react-date-range';
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
    const response = await axios.post("https://api.techscholars.in/auth/todo/update/", currentTodo, axiosConfig);
    console.log(response)
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

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    console.log(ranges)
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
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  const list = (anchor) => (
    <Box
      sx={{ width: 400 }}
      className="w-[300px]"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {todos.length > 0 ? (
          todos.map(todo => (
            <Box key={todo.id} className="flex justify-between mt-3  p-3 ">
              <Box className="flex">
                {
                  todo.completed ? <FaCheck className={`h-6 w-6 p-1 rounded-full mt-4  bg-green-500 text-white' text-gray-700'}`} /> : ""
                }

                <Box className="flex flex-col ml-3">
                  <h2 className="text-gray-900 font-bold text-[13px]">
                    {todo.task}
                  </h2>
                  <p className="font-medium text-[12px] text-gray-500">
                    {todo.description}
                  </p>
                </Box>
              </Box>
              <Box className="flex items-center space-x-2">
                <IconButton onClick={() => openDialog(todo)}>
                  <EditIcon className="h-5 w-5" />
                </IconButton>
                <IconButton onClick={() => handleDeleteTodo(todo.id)}>
                  <DeleteIcon className="h-5 w-5 " />
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <div className=" font-Poppins min-h-screen  w-full bg-[#fcfafa] overflow-x-hidden ">
        <DashboardNavbar title={`Welcome back${userInfo?.given_name ? `, ${userInfo.given_name}` : ''}! 👋 `} subtitle="" />
        <div className="md:ml-2">

          <div className=" my-4  md:mx-6 flex flex-col md:flex-row ">
            <div className="md:w-[35vw] w-64  flex flex-col">
              <Tooltip
                title="This feature is locked as of now. Coming soon!"
                placement="right"
                arrow
              >
                <div className="bg-white rounded-lg flex flex-col w-[350px] md:w-[528px] md:h-[320px]">
                  <p className="font-semibold p-4 pb-0">Performance analysis</p>
                  <div className="relative blur-[2px] ">
                    <FiLock className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500" style={{ color: 'black' }} />
                    <LineChart
                      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                      ]}
                      height={280}
                      className="text-black"


                    />
                  </div>

                </div>
              </Tooltip>
              <div className="bg-white rounded-lg mt-3 p-4 py-0  w-[350px] md:w-[528px]">
                <p className="font-semibold ">Watch Time</p>
                <div className="relative blur-[2px] ">
                  <FiLock className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500" style={{ color: 'black' }} />
                  <LineChart

                    height={275}
                    series={[
                      { data: pData, label: 'Classes' },
                      { data: uData, label: 'Tutorials' },
                    ]}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                  />
                </div>
              </div>

            </div>
            <div className="  flex flex-col md:w-[528px] ml-3 ">

              <div className="  flex flex-col    ">
                <div className="bg-white md:mb-2 md:mt-0 rounded-xl flex align-middle justify-center  ">
                  <div
                    className=" "

                  >
                    <DateRange
                      ranges={[selectionRange]}
                      onChange={handleSelect}
                      style={{ width: '440px', fontWeight: '700' }} // Change font size as needed
                    />
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
              <div className="flex flex-col  rounded-lg  bg-white ml-0  w-[350px] md:w-full ">
                <div className="flex justify-between m-4 mb-4">
                  <span className="font-[550] text-[16px]">Topic Progress</span>
                </div>
                <div className="relative blur-[1.5px]  ">
                  <FiLock className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500" style={{ color: 'black' }} />
                  <div className="grid grid-cols-2 p-4 pt-0 gap-4">
                    {jeeTopics.map((topic, index) => (
                      <div key={index} className="flex justify-between ">
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

              <Box className="flex flex-col rounded-lg   mt-3 bg-white md:pl-4 p-4 pl-0 md:pt-2 md:pb-0  overflow-hidden ">
                <Box className="flex justify-between">
                  <h3 className="font-[550] text-[16px]">To Do List</h3>
                  <Box className="flex">
                    <button variant="outlined" className="h-6 w-24 text-[10px] font-[600] border-[2px] rounded-lg text-blue-700" onClick={() => setOpen(true)}>Add Todo</button>
                    <div>
                      <button onClick={toggleDrawer('right', true)} className="text-[10px] font-[600] ml-4 text-blue-700">See all</button>
                      <SwipeableDrawer
                        anchor="right"
                        open={state.right}
                        onClose={toggleDrawer('right', false)}
                        onOpen={toggleDrawer('right', true)}
                        className=""
                      >
                        {list('right')}
                      </SwipeableDrawer>
                    </div>
                  </Box>
                </Box>
                <Box>
                  {todos.length > 0 ? (
                    // todos.map(todo => (
                      <Box className="flex justify-between px-2 my-2 ">
                        <Box className="flex">
                          {
                            !todos[0].completed ? <FaCheck className={`h-6 w-6 p-1 text-white rounded-full mt-2 mx-2  bg-green-500 text-white'}`} /> : ""
                          }

                          <div>
                            <Box className="flex flex-col ">
                              <h2 className="text-gray-900 font-bold text-[13px]">
                                {todos[0].task}
                              </h2>
                              <p className="font-medium text-[12px] text-gray-500">
                                {todos[0].description}
                              </p>
                            </Box>
                            <div className='flex mt-0.5'>
                              <Link href="#" className='bg-[#FF7512] rounded-full ml-0 mx-2 px-2 text-white text-[12px] py-1'>Medium</Link>
                              <Link href="#" className='bg-[#9F46E4] rounded-full mx-2 px-2 text-white text-[12px] py-1'>Other</Link>

                            </div>
                          </div>
                        </Box>
                        <Box className="flex items-center space-x-2">
                          <IconButton onClick={() => openDialog(todo)}>
                            <EditIcon className="h-5 w-5" />
                          </IconButton>
                          <IconButton onClick={() => handleDeleteTodo(todo.id)}>
                            <DeleteIcon className="h-5 w-5 " />
                          </IconButton>
                        </Box>
                      </Box>
                    // ))
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

                    <FaCheck className={`h-6 w-6 p-1 rounded-full mt-4  {${currentTodo.completed} ? bg-green-500 : ""} text-white text-gray-700'}`} />


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