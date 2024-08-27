"use client";
import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import "react-calendar/dist/Calendar.css";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import DashboardNavbar from "./DashboardNavbar";
import { Box } from "@mui/material";
import { FiLock } from "react-icons/fi";
import Todo from "./Home/Todo";
import useProfile from "@/hooks/useProfile";
import Calenders from "./Calendar/Calenders";
import ModalCalendar from "./Calendar/ModalCalendar";

// CHART COMPONENTS

import Performance from "./Charts/Performance";
import WatchTime from "./Charts/WatchTime";

const HomePageWeb = () => {
  const [userInfo, setUserInfo] = useState(null);

  const { useprofile } = useProfile();

  // FOR TOPIC PROGRESS
  const jeeTopics = [
    {
      subject: "Physics",
      chapter: "Kinematics",
      progress: 60,
      color: "text-blue-500",
    },
    {
      subject: "Chemistry",
      chapter: "Atomic Structure",
      progress: 70,
      color: "text-green-500",
    },
    {
      subject: "Mathematics",
      chapter: "Calculus",
      progress: 50,
      color: "text-orange-500",
    },
    {
      subject: "Physics",
      chapter: "Electrodynamics",
      progress: 40,
      color: "text-purple-500",
    },
  ];

  const [initialRange, setInitialRange] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // GET USER PROFILE
  useEffect(() => {
    useprofile();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ABOUT CALENDER
  useEffect(() => {
    const fetchDateRange = async () => {
      try {
        // Mock data for initial date range
        const mockData = {
          from: new Date(),
          to: (() => {
            const today = new Date();
            today.setDate(today.getDate() + 5);
            return today;
          })(),
        };
        const { from, to } = mockData;
        setInitialRange({ from: new Date(from), to: new Date(to) });
      } catch (error) {
        console.error("Failed to fetch date range", error);
      }
    };

    fetchDateRange();
  }, []);

  // ABOUT PROFILE STORE IN LOCAL STORAGE
  useEffect(() => {
    const storedUserInfo = localStorage.getItem("profile-storage");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const samShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className=" font-Poppins min-h-screen  w-full bg-gray-100/60 overflow-x-hidden overflow-y-hidden ">
        <DashboardNavbar
          title={`Welcome back, ${
            userInfo?.state.profiles.username
              ? `${userInfo.state.profiles.username}`
              : "Ayo"
          }! 👋 `}
          subtitle="You’ve completed 70% of your goal this week! Keep it up and improve."
        />

        <div className="md:mx-6  ">
          <div className=" my-3 grid md:grid-cols-2 gap-6 grid-cols-1 xl:my-6 ">
            {/* CHARTS COLUMN */}
            <div className="flex flex-col  xl:space-y-4 ">
              <Performance />
              <WatchTime />
            </div>

            {/* CALENDER COLUMN */}
            <div className=" mr-12 max-lg:mr-0 max-lg:mt-3">
              <div className="  flex flex-col bg-white rounded-lg  md:mb-4 md:max-w-[34.5vw]   ">
                <div className="md:mt-0 rounded-xl flex align-middle items-center justify-self-center  ">
                  <div
                    className=" flex items-center justify-center w-full mb-5 mt-3 cursor-pointer "
                    onClick={samShow}
                  >
                    {initialRange ? (
                      <Calenders
                        initialRange={initialRange}
                        onRangeChange={(range) => console.log()}
                      />
                    ) : (
                      <div className="w-full h-[35vh] rounded-md pl-10 pr-10 flex items-center justify-center">
                        <div className="flex animate-pulse">
                          <div className="flex flex-col gap-2">
                            <div className="w-[20vw] bg-gray-300 h-10 rounded-md "></div>
                            <div className="w-[20vw] bg-gray-300 h-[30vh] rounded-md "></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <ModalCalendar
                      showModal={showModal}
                      setShowModal={setShowModal}
                      initialRange={initialRange}
                    ></ModalCalendar>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  rounded-lg  bg-white ml-0  w-full md:w-[34.5vw] max-lg:mt-3 text-darkBlue">
                <div className="flex justify-between m-4 ml-3 mb-4 ">
                  <h2 className="font-[550] text-[16px] md:ml-5">
                    Topic Progress
                  </h2>
                </div>
                <div className="relative font-Poppins ">
                  <div className="grid md:grid-cols-2 grid-cols-1 p-4 pt-0 gap-4">
                    {jeeTopics.map((topic, index) => (
                      <div
                        key={index}
                        className="flex justify-between md:ml-5 "
                      >
                        <div className="flex flex-col">
                          <p className={`font-medium ${topic.color}`}>
                            {topic.subject}
                          </p>
                          <p className="text-xs text-gray-400">
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
          className="font-Poppins "
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
