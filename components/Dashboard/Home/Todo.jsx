import React, { useState, useEffect } from 'react'
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
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
import { FaStar, FaCheck, } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import List from '@mui/material/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Image from "next/image";
import { FaHandsClapping } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { LiaGreaterThanSolid } from "react-icons/lia";
import axios from 'axios';
import Link from 'next/link';
import Cookies from 'js-cookie';
import deleteicon from '../../../public/dashboard-icon/deleteicon.png'
import { Clear } from '@mui/icons-material';
import { MdWatchLater } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


import { RiDeleteBin6Line } from "react-icons/ri";



function Todo() {
  const [showTodoPopup, setShowTodoPopup] = useState(false);
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ task: '', description: '', completed: false });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const cookie = Cookies.get("access_token");
      let axiosConfig = {
        headers: {
          'authorization': cookie,
        }
      };
      const response = await axios.get("https://api.techscholars.in/auth/todoAll", axiosConfig);
      console.log(response)
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
  const closeDialogTodoList = () => {
    setShowTodoPopup(false)
  }
  const list = () => (
    <Box
      sx={{ width: 400 }}
      className="w-[300px]"
      role="presentation"

    >
      <List>
        {todos.length > 0 ? (
          todos.map(todo => (
            <Box key={todo.id} className="flex justify-between mt-3  p-3 ">
              <Box className="flex">
                {
                  todo.completed ? <FaCheck className={`h-6 w-6 p-1 rounded-full mt-4  bg-green-500 text-white' text-gray-600'}`} /> : ""
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
                  <Image src={deleteicon} className="h-5 w-5 "  alt='delete-icon'/>
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
    <div> <Box className="flex flex-col rounded-lg md:px-4 md:w-[34.5vw]  mt-4 bg-white md:pl-4 p-8 pl-0 md:pt-2 md:pb-0  overflow-hidden ">
      <Box className="flex justify-between md:px-5">
        <h3 className="font-[550] text-[16px]">To Do List</h3>
        <Box className="flex ">

          <div>
            <button onClick={() => setShowTodoPopup(true)} className="text-[13px] font-[600] ml-4  text-blue-700">See all</button>
            <Dialog open={showTodoPopup} onClose={closeDialogTodoList}>
              <Box
                sx={{ width: 466 }}
                className="w-[430px] h-[531px]"
                role="presentation"

              >
                <List className='p-6'>
                  <div className='flex justify-between mx-6 my-2'>
                    <h2 className='font-[600] text-[18px]'>To do list</h2>
                    <button onClick={closeDialogTodoList} >

                      <Clear className='text-red-500 bg-red-100 rounded-full p-1'></Clear>
                    </button>
                  </div>
                  {todos.length > 0 ? (
                    todos.map(todo => (
                      <Box key={todo.id} className="flex justify-between mt-3  p-3 pr-0">
                        <Box className="flex w-[18vw]">
                          <div className='flex mr-2 mt-1'>
                            {
                              todos.completed ? <FaCheck className={`h-6 w-6 p-1 text-white rounded-full mt-2 mx-2  bg-green-500 text-white'}`} /> : <div className='border-[2px] border-gray-500 rounded-full h-5 w-5'></div>
                            }
                          </div>

                          <div>
                            <Box className="flex flex-col  ">
                              <h2 className="text-gray-900 font-bold text-[13px]">
                                {todo.task}
                              </h2>
                              <p className="font-medium text-[12px] text-gray-500">
                                {todo.description}
                              </p>
                            </Box>
                            <div className='flex mt-0.5'>
                              <Link href="#" className='bg-[#FF7512] rounded-full ml-0 mx-2 px-2 text-white text-[12px] py-1'>Medium</Link>
                              <Link href="#" className='bg-[#9F46E4] rounded-full mx-2 px-2 text-white text-[12px] py-1'>Other</Link>

                            </div>
                          </div>
                        </Box>
                        <Box className="flex items-center ">
                          <IconButton onClick={() => {openDialog(todo); closeDialogTodoList()}}>
                            <EditIcon className="h-6 w-6 stdbgclr rounded-full p-1 " />
                          </IconButton>
                          <IconButton onClick={() => handleDeleteTodo(todo.id)}>
                            <Image src={deleteicon} className="   rounded-full p-1 text-black " alt='delete-icon' />
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
              <div className='flex justify-between p-4 mr-4'>
                <button variant="outlined" className="h-[40px] w-[76px] text-[13px]  border-[2px] rounded-lg " onClick={() => {
                  setOpen(true);
                 
                }}>Add Todo</button>
                <div>
                  <button onClick={closeDialogTodoList} color="primary" className="h-[40px] mr-2 w-[76px] text-[13px]  border-[2px] rounded-lg " >Close</button>
                  <button onClick={closeDialogTodoList} color="primary" className="h-[40px] w-[76px] text-[14px] stdbgclr border-[2px] rounded-full" >Save</button>
                </div>

              </div>
            </Dialog>


          </div>
        </Box>
      </Box>
      <Box className='md:px-4'>
        {todos.length > 0 ? (
          // todos.map(todo => (
          <Box className="flex justify-between px-2 my-2 ">
            <Box className="flex">
            <div className='flex mr-2 mt-1'>
                            {
                              todos[0].completed ? <FaCheck className={`h-6 w-6 p-1 text-white rounded-full mt-2 mx-2  bg-green-500 text-white'}`} /> : <div className='border-[2px] border-gray-500 rounded-full h-5 w-5'></div>
                            }
                          </div>

              <div>
                <Box className="flex flex-col ">
                  <h2 className="text-gray-900 font-bold text-[14px]">
                    {todos[0].task}
                  </h2>
                  <p className="font-medium text-[13px] text-gray-500">
                    {todos[0].description.substring(0,60)}
                  </p>
                </Box>
                <div className='flex justify-between mt-1'>
                <div className='flex mt-0.5'>
                  <Link href="#" className='bg-[#FF7512] rounded-full ml-0 mx-2 px-2 text-white text-[12px] py-1'>Medium</Link>
                  <Link href="#" className='bg-[#9F46E4] rounded-full mx-2 px-2 text-white text-[12px] py-1'>Other</Link>

                </div>
                <p className='text-[12px] mt-1 '> 10:30 AM | Thursday | 05.12.2024</p>
                </div>
              </div>
            </Box>
            {/* <Box className="flex items-center space-x-2">
              <IconButton onClick={() => openDialog(todos[0])}>
                <EditIcon className="h-5 w-5" />
              </IconButton>
              <IconButton onClick={() => handleDeleteTodo(todos[0].id)}>
                <RiDeleteBin6Line className="h-5 w-5 " />
              </IconButton>
            </Box> */}
          </Box>
          // ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle className='font-[550]'>{isEditing ? "Edit Todo" : "Add Todo"}</DialogTitle>
        <DialogContent>
          <input
            placeholder='Add title'

            value={currentTodo.task}
            className='rounded-xl border bg-[#F7F7F8] px-2 h-[42px] w-full'
            onChange={(e) => setCurrentTodo({ ...currentTodo, task: e.target.value })}
          />
          <input
            placeholder='Add Description'

            type="text"

            className='h-[77px] px-2 bg-[#F7F7F8] rounded-xl w-full mt-2'
            value={currentTodo.description}
            onChange={(e) => setCurrentTodo({ ...currentTodo, description: e.target.value })}
          />

          <div className='mt-2'>
            <button className='rounded-full text-white border text-sm py-1  px-3 bg-red-500'>High</button><button className='rounded-full text-white bg-orange-400 border text-sm py-1 ml-2 px-3'>Medium</button><button className='rounded-full border text-sm py-1 text-white bg-green-500 ml-2 px-3'>Low</button>
          </div>
          <div className='my-8 flex'>
            <div className='bg-gray-200 rounded-full p-1 mr-2'>

              <MdWatchLater className=' m-1 text-[#066DE6]' />
            </div>
            <p className='text-[14px] mt-1 '> 10:30 AM | Thursday | 05.12.2024</p>

          </div>
          <div className='flex my-8 '>
            <button
              // onClick={calIsEditing ? handleCalUpdateEvent : handleCalAddEvent}
              className="stdbgclr flex mr-4 text-white py-2 px-4 rounded-full  stdbgclr"
            >

              <IoIosPeople className='mt-1 mr-1 ' />Add People
            </button>
            <button
              // onClick={calIsEditing ? handleCalUpdateEvent : handleCalAddEvent}
              className="bg-gray-100 flex  py-2 px-4 rounded-full "
            >
              <FaLocationDot className='mt-1 mr-1' />Add Location
            </button>
          </div>
        </DialogContent>
        <DialogActions className='px-8'>
          <button onClick={closeDialog} color="primary"  className="h-[40px] mr-2 w-[76px] text-[13px]  border-[2px] rounded-lg " >Back</button>
          <buton onClick={isEditing ? handleUpdateTodo : handleAddTodo} color="primary"  className="h-[40px] w-[76px] text-[14px] text-center pt-1.5 stdbgclr border-[2px] rounded-full">
            {isEditing ? "Update" : "Save"}
          </buton>
        </DialogActions>
      </Dialog>
    </Box>
    </div>
  )
}

export default Todo