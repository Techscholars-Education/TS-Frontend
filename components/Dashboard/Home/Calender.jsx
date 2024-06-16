import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import List from '@mui/material/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IoIosPeople } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
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
import { DateRangePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import format from 'date-fns/format';

const Calendar = ({ selectionRange }) => {
  // const { startDate, endDate } = selectionRange.selection;
  
    const [calEvents, setCalEvents] = useState([]);
  const [calOpen, setCalOpen] = useState(false);
  const [calCurrentEvent, setCalCurrentEvent] = useState({
    title: '',
    description: '',
    start_time: new Date(),
    end_time: new Date(),
  });
  const [calSelectionRange, setCalSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
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

  const handleCalSelect = (ranges) => {
    setCalSelectionRange(ranges.selection);
    setCalCurrentEvent({
      ...calCurrentEvent,
      start_time: ranges.selection.startDate,
      end_time: ranges.selection.endDate,
    });
  };

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
    setCalCurrentEvent({
      title: '',
      description: '',
      start_time: new Date(),
      end_time: new Date(),
    });
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
    setCalCurrentEvent({
      title: '',
      description: '',
      start_time: new Date(),
      end_time: new Date(),
    });
  };

  const openCalDialog = (event) => {
    setCalIsEditing(true);
    setCalCurrentEvent(event);
    setCalSelectionRange({
      startDate: new Date(event.start_time),
      endDate: new Date(event.end_time),
      key: 'selection',
    });
    setCalOpen(true);
  };

  const closeCalDialog = () => {
    setCalIsEditing(false);
    setCalOpen(false);
    console.log(calOpen)
    setCalCurrentEvent({
      title: '',
      description: '',
      start_time: new Date(),
      end_time: new Date(),
    });
  };
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
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Box>
        {calEvents.length > 0 ? (
          calEvents.map(event => (
            <Box key={event.id} className="flex justify-between my-4  p-3 ">
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
      </List>
      <Divider />
    </Box>
  );

  return (

    <Box className="flex flex-col rounded-xl mt-0  bg-white p-4 overflow-hidden">
      <Box className="flex justify-between">
        <h3 className="font-bold text-[16px]">Calendar</h3>
        <Box>
          <Box className="flex">
            <button variant="outlined" className="h-8 w-24 text-[10px] font-[600] border-[2px] text-blue-700" onClick={() => setCalOpen(true)}>Add Event</button>

            <div>
                <button onClick={toggleDrawer('right', true)} className="text-[10px] font-[600] ml-4 text-blue-700">See all</button>
                <SwipeableDrawer
                  anchor="right"
                  open={state.right}
                  onClose={toggleDrawer('right', false)}
                  onOpen={toggleDrawer('right', true)}
                  className="w-96"
                  title='Calendar'
                >
                  {list('right')}
                </SwipeableDrawer>
              </div>
          </Box>
        </Box>
      </Box>
      <Box>
        {calEvents.length > 0 ? (
          calEvents.map(event => (
            <Box key={event.id} className="flex justify-between my-4  p-3 ">
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
      {
        calOpen ? (<div className="fixed inset-0 flex items-center justify-center  ">
          <div className="h-[567px] bg-gray-50 w-[420px] p-6 rounded-lg shadow-lg">
            <div className="text-xl font-[500]  mb-4">
              {calIsEditing ? "Edit Event" : "Create an Event"}
            </div>
            <div className='flex my-8 bg-gray-100 w-[20vw] px-2 py-1 rounded-lg'>
              <button className='w-[83px] h-[30px] stdbgclr rounded-lg mx-2 ml-0  text-[14px]'>Event</button><button className='w-[92px] h-[30px]  rounded-lg mx-2 text-[14px] '>Reminder</button><button className='w-[83px] h-[30px]  rounded-lg mx-2 text-[14px]'>Task</button>
            </div>
            <div className="mb-4">

              <input
                type="text"
                className="w-full p-2 border rounded-xl border-gray-300 border-none bg-gra-200"
                placeholder='Add title'
                value={calCurrentEvent.title}
                onChange={(e) => setCalCurrentEvent({ ...calCurrentEvent, title: e.target.value })}
              />
            </div>
            {/* <div className="mb-3">
             
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={calCurrentEvent.description}
                onChange={(e) => setCalCurrentEvent({ ...calCurrentEvent, description: e.target.value })}
              />
            </div>
            <div className=" my-4">
              
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
                value={calCurrentEvent.start_time}
                onChange={(e) => setCalCurrentEvent({ ...calCurrentEvent, start_time: e.target.value })}
              />
            </div> */}
            <div className='my-8 flex'>
              <div className='bg-gray-200 rounded-full p-1 mr-2'>
                
              <MdWatchLater className=' mr-2 mt-2 ml-2 text-[#066DE6]'/>
              </div>
             <p className='text-[14px] '> {selectionRange.startDate.toString()}</p>
             
            </div>
            <div className='my-8 flex'>
            <div className='bg-gray-200 rounded-full p-1 mr-2'>
                
                <MdWatchLater className=' mr-2 mt-2 ml-2 text-[#066DE6]'/>
                </div>
             <p className='text-[14px] '> {selectionRange.endDate.toString()}</p>
             
            </div>
            {/* <div className=" my-4">

              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
                value={calCurrentEvent.end_time}
                onChange={(e) => setCalCurrentEvent({ ...calCurrentEvent, end_time: e.target.value })}
              />
            </div> */}
            <div className='flex my-8 '>
              <button
                onClick={calIsEditing ? handleCalUpdateEvent : handleCalAddEvent}
                className="bg-blue-600 flex mr-4 text-white py-2 px-4 rounded-full  stdbgclr"
              >
                
                <IoIosPeople className='mt-1 mr-1 ' />Add People
              </button>
              <button
                onClick={calIsEditing ? handleCalUpdateEvent : handleCalAddEvent}
                className="bg-gray-100 flex  py-2 px-4 rounded-full "
              >
                <FaLocationDot className='mt-1 mr-1' />Add Location
              </button>
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeCalDialog}
                className="  py-2 px-4 rounded-md mr-2 border"
              >
                Cancel
              </button>
              <button
                onClick={calIsEditing ? handleCalUpdateEvent : handleCalAddEvent}
                className="bg-blue-600 text-white py-2 px-4 rounded-xl stdbgclr"
              >
                {calIsEditing ? "Update" : "save"}
              </button>
            </div>
          </div>
        </div>) : ""
      }
    </Box>

  );
};

export default Calendar;
