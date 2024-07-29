import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { format } from 'date-fns';
import {
  Box,
  Button,
  TextField,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { MdWatchLater } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ValueCalender = ({ selectedRange }) => {
  
  const [calEvents, setCalEvents] = useState([]);
  const [calOpen, setCalOpen] = useState(false);

  const [calCurrentEvent, setCalCurrentEvent] = useState({
    title: '',
    description: '',
    start_time: '',
    end_time: ''
  });

  useEffect(() => {

    let newStartTime = new Date();
    let newEndTime = new Date();
  
    // Update values based on selectedRange
    if (selectedRange) {
      if (selectedRange.from) {
        newStartTime = selectedRange.from;
      }
      if (selectedRange.to) {
        newEndTime = selectedRange.to;
      }
    }
  
    setCalCurrentEvent(prevEvent => ({
      ...prevEvent,
      start_time: newStartTime,
      end_time: newEndTime
    }));
  
  }, [selectedRange]);
  
// console.log(calCurrentEvent);
  
  const [calIsEditing, setCalIsEditing] = useState(false);

  useEffect(() => {
    const fetchCalEvents = async () => {
      const cookie = Cookies.get("access_token");
      let axiosConfig = {
        headers: {
          'authorization': cookie,
        }
      };
      const response = await axios.get("https://api.techscholars.in/auth/calendar", axiosConfig);
      setCalEvents(response.data);
    };

    fetchCalEvents();
  }, []);

  const handleCalAddEvent = async () => {
    const cookie = Cookies.get("access_token");
    let axiosConfig = {
      headers: {
        'authorization': cookie,
      }
    };
    const response = await axios.post("https://api.techscholars.in/auth/calendar", calCurrentEvent, axiosConfig);
    setCalEvents([...calEvents, response.data]);
    setCalOpen(false);
    resetCalCurrentEvent();
  };

  const handleCalDeleteEvent = async (id) => {
    const cookie = Cookies.get("access_token");
    let axiosConfig = {
      headers: {
        'authorization': cookie,
      }
    };
    await axios.delete(`https://api.techscholars.in/auth/calendar/delete/${id}`, axiosConfig);
    setCalEvents(calEvents.filter(event => event.id !== id));
  };

  const handleCalUpdateEvent = async () => {
    const cookie = Cookies.get("access_token");
    let axiosConfig = {
      headers: {
        'authorization': cookie,
      }
    };
    const response = await axios.post(`https://api.techscholars.in/auth/calendar/update/`, calCurrentEvent, axiosConfig);
    setCalEvents(calEvents.map(event => (event.id === response.data.id ? response.data : event)));
    setCalOpen(false);
    setCalIsEditing(false);
    resetCalCurrentEvent();
  };

  const openCalDialog = (event) => {
    setCalIsEditing(true);
    setCalCurrentEvent(event);
    setCalOpen(true);
  };

  const closeCalDialog = () => {
    setCalIsEditing(false);
    setCalOpen(false);
    resetCalCurrentEvent();
  };

  const resetCalCurrentEvent = () => {
    setCalCurrentEvent({
      title: '',
      description: '',
      start_time: new Date(),
      end_time: new Date(),
    });
  };

  const [state, setState] = useState({
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
      <Box>
        {calEvents.length > 0 ? (
          calEvents.map(event => (
            <Box key={event.id} className="flex justify-between my-4 p-3">
              <Box className="flex flex-col">
                <h2 className="text-gray-900 font-bold text-[13px]">
                  {event.title}
                </h2>
                <p className="font-medium text-[12px] text-gray-500">
                  {event.description}
                </p>
                <p className="font-medium text-[12px] text-blue-400">
                  {format(new Date(event.start_time), 'PPpp')} - {format(new Date(event.end_time), 'PPpp')}
                </p>
              </Box>
              <Box className="flex items-center space-x-2">
                <IconButton onClick={() => openCalDialog(event)}>
                  <EditIcon className="h-5 w-5" />
                </IconButton>
                <IconButton onClick={() => handleCalDeleteEvent(event.id)}>
                  <DeleteIcon className="h-5 w-5" />
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </Box>
  );

//   const s = ""

//   const date = new Date(s);

// // Convert the date to local time string
// const localDateTimeString = date.toLocaleString();

// console.log(localDateTimeString);

  return (
    <Box className="flex flex-col rounded-xl mt-0 mb-3 bg-white p-4 overflow-hidden">
      <Box className="flex justify-between">
        <h3 className="font-bold text-[16px]">Calendar</h3>
        <Box>
          <Box className="flex">
            <button
              variant="outlined"
              className="h-8 w-24 text-[10px] font-[600] border-[2px] text-blue-700"
              onClick={() => setCalOpen(true)}
            >
              Add Event
            </button>
            <div>
              <button
                onClick={toggleDrawer('right', true)}
                className="text-[10px] font-[600] ml-4 text-blue-700"
              >
                See all
              </button>
            </div>
          </Box>
        </Box>
      </Box>
      <Box>
        {calEvents.length > 0 ? (
          calEvents.map(event => (
            <Box key={event.id} className="flex justify-between my-1 p-1 md:p-3">
              <Box className="flex flex-col">
                <h2 className="text-gray-900 font-bold text-[13px]">
                  {event.title}
                </h2>
                <p className="font-medium text-[12px] text-gray-500">
                  {event.description}
                </p>
                <p className="font-medium text-[12px] text-blue-400">
                  {format(new Date(event.start_time), 'PPpp')} - {format(new Date(event.end_time), 'PPpp')}
                </p>
              </Box>
              <Box className="flex items-center space-x-2">
                <IconButton onClick={() => openCalDialog(event)}>
                  <EditIcon className="h-5 w-5" />
                </IconButton>
                <IconButton onClick={() => handleCalDeleteEvent(event.id)}>
                  <DeleteIcon className="h-5 w-5" />
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
      {calOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeCalDialog}
        >
          <div
            className="bg-white w-[420px] p-6 rounded-lg shadow-lg z-60"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="text-xl font-[500] mb-4">
              {calIsEditing ? "Edit Event" : "Create an Event"}
            </div>
            <div className='flex my-8 bg-gray-100 w-[20vw] px-2 py-1 rounded-lg'>
              <button className='w-[83px] h-[30px] stdbgclr rounded-lg mx-2 ml-0 text-[14px]'>Event</button>
              <button className='w-[92px] h-[30px] rounded-lg mx-2 text-[14px]'>Reminder</button>
              <button className='w-[83px] h-[30px] rounded-lg mx-2 text-[14px]'>Task</button>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border rounded-xl border-gray-300"
                placeholder='Add title'
                value={calCurrentEvent.title}
                onChange={(e) => setCalCurrentEvent({ ...calCurrentEvent, title: e.target.value })}
              />
            </div>
            <div className='my-8 flex'>
              <div className='bg-gray-200 rounded-full p-1 mr-2'>
                <MdWatchLater className='mr-2 mt-2 ml-2 text-[#066DE6]' />
              </div>
              <p className='text-[14px]'>{selectedRange ? format(new Date(selectedRange.from), 'PPpp') : "Select a start date"}</p>
            </div>
            <div className='my-8 flex'>
              <div className='bg-gray-200 rounded-full p-1 mr-2'>
                <MdWatchLater className='mr-2 mt-2 ml-2 text-[#066DE6]' />
              </div>
              <p className='text-[14px]'>{selectedRange ? format(new Date(selectedRange.to), 'PPpp') : "Select an end date"}</p>
            </div>
            <div className='flex my-8'>
              <button
                className="bg-blue-600 flex mr-4 text-white py-2 px-4 rounded-full"
              >
                <IoIosPeople className='mt-1 mr-1' />Add People
              </button>
              <button
                className="bg-gray-100 flex py-2 px-4 rounded-full"
              >
                <FaLocationDot className='mt-1 mr-1' />Add Location
              </button>
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeCalDialog}
                className="py-2 px-4 rounded-md mr-2 border"
              >
                Cancel
              </button>
              <button
                onClick={calIsEditing ? handleCalUpdateEvent : handleCalAddEvent}
                className="bg-blue-600 text-white py-2 px-4 rounded-xl"
                style={{ cursor: "pointer" }}
              >
                {calIsEditing ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default ValueCalender;
