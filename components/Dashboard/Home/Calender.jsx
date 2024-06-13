import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
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

const Calendar = () => {
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
    const response = await axios.put(`https://api.techscholars.in/auth/calendar?event_id=${calCurrentEvent.id}`, calCurrentEvent, axiosConfig);
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
    setCalCurrentEvent({
      title: '',
      description: '',
      start_time: new Date(),
      end_time: new Date(),
    });
  };

  return (
    
      <Box className="flex flex-col rounded-xl mt-0 bg-white p-4">
        <Box className="flex justify-between">
          <h3 className="font-bold text-[16px]">Calendar</h3>
          <button variant="outlined" className="h-8 w-24 text-[10px] font-[600] border-[2px] text-blue-700"  onClick={() => setCalOpen(true)}>Add Event</button>
        </Box>
        <Box>
          {calEvents.length > 0 ? (
            calEvents.map(event => (
              <Box key={event.id} className="flex justify-between mt-2 bg-blue-50 p-3 ">
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
        <Dialog open={calOpen} onClose={closeCalDialog}>
          <DialogTitle>{calIsEditing ? "Edit Event" : "Add Event"}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={calCurrentEvent.title}
              onChange={(e) => setCalCurrentEvent({ ...calCurrentEvent, title: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              value={calCurrentEvent.description}
              onChange={(e) => setCalCurrentEvent({ ...calCurrentEvent, description: e.target.value })}
            />
            <DateRangePicker
              startText="Start Date"
              endText="End Date"
              value={[calCurrentEvent.start_time, calCurrentEvent.end_time]}
              onChange={(newValue) => {
                setCalCurrentEvent({
                  ...calCurrentEvent,
                  start_time: newValue[0],
                  end_time: newValue[1],
                });
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} fullWidth margin="dense" />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} fullWidth margin="dense" />
                </>
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeCalDialog} color="primary">Cancel</Button>
            <Button onClick={calIsEditing ? handleCalUpdateEvent : handleCalAddEvent} color="primary">
              {calIsEditing ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
   
  );
};

export default Calendar;
