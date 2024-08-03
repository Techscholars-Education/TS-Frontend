"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ApiCalendar from "react-google-calendar-api";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import im1 from "../../../public/image1.avif"

const config = {
    clientId: "120688918582-vh2dfug72jpmk8m6fhjo22hm1h4n10q2.apps.googleusercontent.com",
    apiKey: "AIzaSyA1Vn6nNMLreRTg8vloOyR79cHCHztSqvw",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
};

const apiCalendar = new ApiCalendar(config);

const CalendarInt = ({onClose}) => {
    const [startTime, setStartTime] = useState('12:00');
    const [endTime, setEndTime] = useState('12:00');
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [date, setDate] = useState('2024-08-03');
    const [startISO, setStartISO] = useState('');
    const [endISO, setEndISO] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const convertToISO = (dateString, timeString) => {
        const [hours, minutes] = timeString.split(':').map(Number);
        const [year, month, day] = dateString.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day, hours, minutes);
        return dateObj.toISOString();
    };

    useEffect(() => {
        const handleConvert = () => {
            const startISO = convertToISO(date, startTime);
            const endISO = convertToISO(date, endTime);
            setStartISO(startISO);
            setEndISO(endISO);
        };
        handleConvert();
    }, [date, startTime, endTime]);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const isSignedIn = await apiCalendar.getAuthResponse();
                setIsAuthenticated(!!isSignedIn);
            } catch (error) {
                console.error('Error checking authentication status', error);
            }
        };

        checkAuthStatus();
    }, []);

    const handleLogin = async () => {
        try {
            await apiCalendar.handleAuthClick();
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Error during login', error);
        }
    };

    const handleSignout = async () => {
        try {
            await apiCalendar.handleSignoutClick();
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Error during signout', error);
        }
    };

    const addEvent = async () => {
        const event = {
            summary: eventName,
            description: eventDescription,
            start: {
                dateTime: startISO,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            end: {
                dateTime: endISO,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
        };

        try {
            const result = await apiCalendar.createEvent(event);
            console.log('Event created:', result);
        } catch (error) {
            console.error('Error creating event', error);
        }
    };

    return (
        <div>
            {!isAuthenticated ? (
                <>
           
             <div className='h-[50vh]  w-[35vw] relative  z-50' >
             <Image src={im1} className='h-[50vh]  w-[35vw] absolute rounded-md bg-cover object-cover' alt='background image' />
             <button className='absolute left-5 top-6' onClick={onClose}>
                <AiOutlineCloseCircle className='text-2xl text-red-500 hover:text-gray-700 transition-all ease-in-out duration-200'/>
                </button>
                <button className='bg-blue-200 p-2 rounded-md absolute top-[10vw] left-[13vw] flex items-center gap-3 text-xl text-gray-600' onClick={handleLogin}>Login with <FcGoogle/> </button>
             </div>
                </>

            ) : (
                <> 
                <button className='absolute left-6' onClick={onClose}>
                <AiOutlineCloseCircle className='text-2xl text-red-500 hover:text-gray-700 transition-all ease-in-out duration-200'/>
                </button>
                   
                    <div className="flex flex-col gap-5 p-2 pt-10">
                        <div id="time" className="flex items-center justify-evenly">
                            <div id="start_time" className="flex items-center gap-5">
                                <label className="font-normal text-[1.1vw] text-gray-600">Start Time:</label>
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    className="rounded border-2 border-gray-300 p-2 w-[10vw] text-[1vw]"
                                />
                            </div>
                            <div id="end_time" className="flex items-center gap-5">
                                <label className="font-normal text-[1.1vw] text-gray-600">End Time:</label>
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    className="rounded border-2 border-gray-300 p-2 text-[1vw] w-[10vw]"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-evenly">
                            <div className='flex items-center gap-2 '>
                                <h1 className='text-gray-600 font-normal text-[1.1vw]'>Event Name :</h1>
                                <input
                                    type="text"
                                    value={eventName}
                                    onChange={(e) => setEventName(e.target.value)}
                                    className="rounded border-2 border-gray-300 p-2 text-[1vw] w-[10vw] mr-3"
                                />
                            </div>
                            <div id="setDate" className="flex items-center gap-5">
                                <label className="font-normal text-[1.1vw] text-gray-600">Set Date:</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="rounded border-2 border-gray-300 p-2 text-[1vw] w-[10vw] "
                                />
                            </div>
                        </div>
                        <div className="flex flex-col text-start pl-2 pr-2">
                            <h1 className='text-gray-600 text-[1.1vw] font-normal '>Event Description :</h1>
                            <textarea
                                value={eventDescription}
                                onChange={(e) => setEventDescription(e.target.value)}
                                className="appearance-none rounded border-2 border-gray-300 p-2 text-[1vw] focus:outline-none"
                            />
                        </div>
                    </div>

                    <div id='button' className='flex items-center justify-center gap-10' >
                    <button className='p-2 bg-blue-500 rounded-full text-white pl-5 pr-5 hover:bg-black text-[1.1vw] transition-all ease-in-out duration-200' onClick={addEvent}>Add Event</button>
                    <button className='bg-red-400 rounded-full p-2 pl-5 pr-5 text-[1.1vw] hover:bg-black duration-200 transition-all ease-in-out text-white' onClick={handleSignout}>Sign Out</button>
                    </div>

                </>
            )}
        </div>
    );
};

export default CalendarInt;
