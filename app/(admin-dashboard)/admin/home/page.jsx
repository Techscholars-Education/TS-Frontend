// pages/index.js
"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../_components/Nav";
import AdminSidebar from "../../_components/AdminSidebar";
import { FaArrowTrendUp, FaArrowTrendDown, FaUserGroup } from "react-icons/fa6";
import LineChart from "../../_components/Chart";
import { HiMenuAlt4 } from "react-icons/hi";

const Page = () => {
  const [trend, setTrend] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Foundation');
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const datasets = {
    Foundation: {
      LiveCount: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: 'Live User Count',
            data: [30, 25, 20, 45, 120, 65, 75, 200, 95, 100, 110, 120],
            borderColor: '#11047a',
            backgroundColor: 'rgba(66, 182, 246,0.5)',
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
            tension: 0.09
          },
        ],
      },
      AverageTime: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
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
      },
      AvgMinsTeachers: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
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
      },
      TeacherRating: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
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
      },
    },
    NEET: {
      LiveCount: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: 'Live User Count',
            data: [10, 15, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            borderColor: '#11047a',
            backgroundColor: 'rgba(66, 182, 246,0.5)',
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
            tension: 0.09
          },
        ],
      },
      AverageTime: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: 'Average Time Spent',
            data: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
            tension: 0.09
          },
        ],
      },
      AvgMinsTeachers: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: 'Avg Mins Teacher',
            data: [6, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
            borderColor: 'rgba(255, 159, 64, 1)',
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
            tension: 0.09
          },
        ],
      },
      TeacherRating: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: 'Teacher Rating',
            data: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
            borderColor: 'rgba(227, 61, 148, 1)',
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
            tension: 0.09
          },
        ],
      },
    },
    JEE: {
      LiveCount: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: 'Live User Count',
            data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
            borderColor: '#11047a',
            backgroundColor: 'rgba(66, 182, 246,0.5)',
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
            tension: 0.09
          },
        ],
      },
      AverageTime: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: 'Average Time Spent',
            data: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
            tension: 0.09
          },
        ],
      },
      AvgMinsTeachers: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: 'Avg Mins Teacher',
            data: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
            borderColor: 'rgba(255, 159, 64, 1)',
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
            tension: 0.09
          },
        ],
      },
      TeacherRating: {
        labels: [  
          "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec","Sept", "Oct", "Nov", "Dec","Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: 'Teacher Rating',
            data: [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
            borderColor: 'rgba(227, 61, 148, 1)',
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 10,
            tension: 0.09
          },
        ],
      },
    },
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    // Set the default chart data for the selected category
    setChartData(datasets[event.target.value].LiveCount);
  };

  const handleButtonClick = (key) => {
    setChartData(datasets[selectedCategory][key]);
  };

  const admin = [
    {
      id: 1,
      title: "Foundation",
      today: "Today :",
      year: "Academic Year 24/25 :",
      total: "Total :",
      trend: <FaArrowTrendUp />,
      percent: "8%",
      up: "Up from yesterday",
    },
    {
      id: 2,
      title: "NEET",
      today: "Today :",
      year: "Academic Year 24/25 :",
      total: "Total :",
      trend: <FaArrowTrendUp />,
      percent: "1.3%",
      up: " Up from past week",
    },
    {
      id: 3,
      title: "JEE",
      today: "Today :",
      year: "Academic Year 24/25 :",
      total: "Total :",
      trend: <FaArrowTrendDown />,
      percent: "4.3%",
      up: " Down from yesterday",
    },
  ];

  useEffect(() => {
    setDomLoaded(true);
    // Initialize with the default chart data for the selected category
    setChartData(datasets[selectedCategory].LiveCount);
   // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  return (
    <>
      {domLoaded ? (
        <div className="h-screen w-full overflow-hidden ">
          <Nav />
          <div className="flex">
            <div>
              <AdminSidebar mobile={mobile} setMobile={setMobile} />
            </div>
            <div
              id="home"
              className="bg-[#e6f0ff] no-scrollbar overflow-y-auto h-screen lg:w-[83.5vw] w-full relative lg:right-[-15vw] right-0 rounded-md"
            >
              <div className={`button_admin lg:hidden absolute top-4 left-3 p-4 rounded-full bg-red-300 flex items-center justify-center`}>
                <HiMenuAlt4 className="text-[5vw]" onClick={() => setMobile(!mobile)} />
              </div>

              <div className="lg:block flex justify-center">
                <h1 className="font-semibold lg:text-xl text-[10vw] ml-10 lg:mt-2 mt-[4vw]">
                  Admin Portal
                </h1>
              </div>
              <div className="lg:flex lg:flex-row lg:gap-[3.4vw] ml-[2vw] lg:mt-2 mt-[3vw] flex flex-col gap-[3vw] items-center">
                {admin.map((item) => (
                  <div
                    className="bg-white lg:h-[10vw] h-[20vh] lg:w-[20vw] w-[77vw] ml-2 p-2 pl-3 rounded-md flex justify-between"
                    key={item.id}
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
                        </span>
                        {item.up}
                      </div>
                    </div>
                    <div className="lg:h-[3vw] lg:w-[3.5vw] h-[8vw] w-[10vw] bg-red-300 rounded-md flex items-center justify-center">
                      <FaUserGroup className="lg:text-[2vw] text-[6vw]" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:h-[90vh] lg:w-[68vw] bg-white rounded-md mt-4 ml-10 flex flex-col lg:gap-5 h-[65vh] w-[80vw] gap-[10vw] ">
                <div className="lg:flex lg:flex-row lg:gap-5 ml-8 flex justify-between pr-3 lg:mt-0 mt-[5vw]">
                <div className="flex items-center gap-2">
                <button
                    onClick={() => handleButtonClick('LiveCount')}
                    className="pl-3 pr-3 pt-2 pb-2 bg-[#3a4c86] text-white rounded-xl mt-3 hover:bg-[#012656] transition-all ease-in-out duration-150 cursor-pointer"
                  >
                    Live User Count
                  </button>
                  <button
                    onClick={() => handleButtonClick('AverageTime')}
                    className="pl-3 pr-3 pt-2 pb-2 bg-[#3a4c86] text-white rounded-xl mt-3 hover:bg-[#012656] transition-all ease-in-out duration-150 cursor-pointer"
                  >
                    Average Time Spent
                  </button>
                  <button
                    onClick={() => handleButtonClick('AvgMinsTeachers')}
                    className="pl-3 pr-3 pt-2 pb-2 bg-[#3a4c86] text-white rounded-xl mt-3 hover:bg-[#012656] transition-all ease-in-out duration-150 cursor-pointer"
                  >
                    Avg Mins Teacher
                  </button>
                  <button
                    onClick={() => handleButtonClick('TeacherRating')}
                    className="pl-3 pr-3 pt-2 pb-2 bg-[#3a4c86] text-white rounded-xl mt-3 hover:bg-[#012656] transition-all ease-in-out duration-150 cursor-pointer"
                  >
                    Teacher Rating
                  </button>
                </div>
                <div>
                <select
                    className="pl-3 pr-3 pt-2 pb-2 lg:w-[20vw] w-[50vw] bg-purple-200 rounded-xl mt-3 hover:bg-[#012656] hover:text-white transition-all ease-in-out duration-150 cursor-pointer"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option value="Foundation">Foundation</option>
                    <option value="NEET">NEET</option>
                    <option value="JEE">JEE</option>
                  </select>
                </div>
                 
                 
                </div>
                <div className="lg:h-[70vh] lg:w-[95vw] h-[100vh] w-[80vw]">
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
