"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import LineChart from "../../_components/Chart";
import { HiMenuAlt4 } from "react-icons/hi";

const Page = () => {
  const [trend, setTrend] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [mobile,setMobile] = useState(false)

  
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        borderColor: '#11047a',
        backgroundColor: 'rgba(66, 182, 246,0.5)',
        fill: true,
      },
    ],
  });

  const LiveCount = {
    labels: [  
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: 'Live User Count',
        data: [30, 25, 20, 45, 120, 65, 75, 200, 95, 100, 110, 120],
        borderColor: '#11047a',
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 10,
        tension: 0.09
      },
    ],
  };

  const AverageTime = {
    labels: [  
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: 'Average Time Spent',
        data: [10, 15, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 10,
        tension: 0.09
      },
    ],
  };

  const  AvgMinsTeachers = {
    labels: [  
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: 'Avg Mins Teacher',
        data: [5, 30, 6, 9, 20, 50, 12, 14, 60, 15, 56, 70],
        borderColor: 'rgba(255, 159, 64, 1)',
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 10,
        tension: 0.09
      },
    ],
  };
  const TeacherRating = {
    labels: [  
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: 'Teacher Rating',
        data: [5, 8, 6, 9, 7, 10, 12, 14, 13, 15, 16, 18],
        borderColor: 'rgba(227, 61, 148, 1)',
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 10,
        tension: 0.09
      },
    ],
  };

  const handleButtonClick = (data) => {
    setChartData(data);
  };

  useEffect(() => {
    setChartData(LiveCount);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const admin = [
    {
      id: 1,
      title: "Foundation",
      today: "Today L",
      year: "Academic Year 24/25 :",
      total: "Total :",
      trend: <FaArrowTrendUp />,
      percent: "8%",
      up: "Up from yesterday",
    },
    {
      id: 1,
      title: "Foundation",
      today: "Today :",
      year: "Academic Year 24/25 :",
      total: "Total :",
      trend: <FaArrowTrendUp />,
      percent: "1.3%",
      up: " Up from past week",
    },
    {
      id: 1,
      title: "Foundation",
      today: "Today :",
      year: "Academic Year 24/25 :",
      total: "Total :",
      trend: <FaArrowTrendDown />,
      percent: "4.3%",
      up: " Down from yesterday",
    },
  ];

  return (
    <>
      {domLoaded ? (
        <div className="h-screen w-full overflow-hidden">
          <Nav />
          <div className="flex">
            <div className="">
              {" "}
              <AdminSidebar mobile={mobile} setMobile={setMobile} />
            </div>
            <div
              id="home"
              className="bg-[#e6f0ff] overflow-y-auto h-screen lg:w-[83.5vw] w-full relative lg:right-[-15vw]  right-0 rounded-md"
            >
              <div className={`button_admin lg:hidden absolute top-4 left-3 p-4 rounded-full bg-red-300 flex items-center justify-center`}>
              <HiMenuAlt4 className="text-[5vw] " onClick={()=>(setMobile(!mobile))}/>
              </div>

              <div className="lg:block flex justify-center ">
                <h1 className="font-semibold lg:text-xl text-[10vw] ml-10 lg:mt-2 mt-[4vw]">
                  Admin Portal
                </h1>
              </div>
              <div className="lg:flex lg:flex-row ml-[2vw] lg:gap-4 lg:mt-2 mt-[3vw] flex flex-col gap-[3vw] items-center ">
                {admin.map((item, id) => (
                  <div
                    className="bg-white lg:h-[10vw] h-[20vh] lg:w-[20vw] w-[77vw] ml-2 p-2 pl-3 rounded-md flex justify-between"
                    key={id}
                  >
                    <div className="font-normal lg:text-[.9vw] text-[4vw]">
                      <h1 className="lg:text-[1vw] text-[4vw] font-semibold">{item.title}</h1>
                      <h1>{item.today}</h1>
                      <h1>{item.year}</h1>
                      <h1>{item.total}</h1>
                      <div className="mt-2 ml-2 flex items-center gap-2">
                        <span
                          className={`flex items-center gap-2 ${trend ? "text-green-400" : "text-red-400"
                            }`}
                        >
                          {trend ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                          {item.percent}
                        </span>{" "}
                        {item.up}
                      </div>
                    </div>
                    <div className="lg:h-[3vw] lg:w-[3.5vw] h-[8vw] w-[10vw] bg-red-300 rounded-md flex items-center justify-center">
                      <FaUserGroup className="lg:text-[2vw] text-[6vw] " />
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:h-[60vh] lg:w-[63vw] bg-white rounded-md mt-4 ml-10 flex flex-col lg:gap-5 h-[65vh] w-[80vw] gap-[10vw] ">
                <div className="lg:flex lg:flex-row lg:gap-5 ml-8  flex flex-col items-center gap-2 lg:mt-0 mt-[5vw]">
                  <button  onClick={() => handleButtonClick(LiveCount)} className="pl-3 pr-3 pt-2 pb-2 lg:w-[9vw] w-[50vw]  bg-purple-200 rounded-xl mt-3 hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 cursor-pointer">
                    Live User Count
                  </button>
                  <button onClick={() => handleButtonClick(AverageTime)} className="pl-3 pr-3 pt-2 pb-2 lg:w-[13vw] w-[50vw] bg-purple-200 rounded-xl mt-3 hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 cursor-pointer">
                    Average Time Spent
                  </button>
                  <button onClick={() => handleButtonClick( AvgMinsTeachers)} className="pl-3 pr-3 pt-2 pb-2 lg:w-[14vw] w-[50vw] bg-purple-200 rounded-xl mt-3 hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 cursor-pointer">
                    Avg Mins Teachers
                  </button>
                  <button onClick={() => handleButtonClick( TeacherRating)} className="pl-3 pr-3 pt-2 pb-2 lg:w-[13vw] w-[50vw] bg-purple-200 rounded-xl mt-3 hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 cursor-pointer">
                    Teacher Ratings
                  </button>
                </div>
                <div className="lg:h-[50vh] lg:w-[70vw] h-[100vh] w-[80vw]">
                <LineChart data={chartData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen w-full">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Page;
