"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import DashboardNavbar from '../DashboardNavbar';
import TestSeriesCard from './TestSeriesCard';
import Cookies from "js-cookie";

function TestDetail() {
  const [testSeries, setTestSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(2); // default category

  useEffect(() => {
    const fetchTestSeries = async () => {
      setLoading(true);
      try {
        const cookie = Cookies.get("access_token");
        // if (!cookie) {
        //   throw new Error("No access token found");
        // }
        // console.log("Access token:", cookie);

        const axiosConfig = {
          headers: {
            'Authorization': cookie,
          }
        };

        const response = await axios.get(`https://api.techscholars.in/pdt/v1/ts/list?category_id?category_id=${selectedCategory}`, axiosConfig);

        setTestSeries(Array.isArray(response?.data?.test_series) ? response?.data?.test_series : []);
      } catch (error) {
        console.error("Error fetching test series:", error);
        setTestSeries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestSeries();
  }, [selectedCategory]);
  const handleCategoryChange = (event) => {
    setSelectedCategory(parseInt(event.target.value, 10));
  };

  return (
    <div className="font-Poppins min-h-screen bg-[#f7faff]">
      <DashboardNavbar title="Test Series Foundation" />
      <div className="flex flex-col md:mx-8">
        <div className="flex md:justify-between mb-8 mr-4">
        <h2 className="text-xl md:text-xl font-semibold text-darkBlue mx-4 my-6">
          Test Series Foundation
        </h2>
         
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="bg-white text-blue-600 font-[500] mt-2 text-sm rounded-full   border-blue-400 border-[2px] h-[50px] w-[190px] pl-8 focus:outline-none"
            > 
              <option  className="bg-white text-blue-600 font-[500] text-sm rounded-full    border-blue-400 border-[2px] h-[50px] w-[190px] pl-8" value={1} style={{backgroundClip:'red'}}>Category 1</option>
              <option  className="bg-white text-blue-600 font-[500] text-sm rounded-full    border-blue-400 border-[2px] h-[50px] w-[190px] pl-8" value={2}>Category 2</option>
              <option  className="bg-white text-blue-600 font-[500] text-sm rounded-full    border-blue-400 border-[2px] h-[50px] w-[190px] pl-8" value={3}>Category 3</option>
            </select>
          </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 md:pr-12 gap-6 ml-4 w-[68vw]'>
            {testSeries.length > 0 ? (
              testSeries.map((item) => (
                <Link href="/dashboard/test/testdetail/alltestseries" key={item.id}>
                  <TestSeriesCard
                    image={item.poster_image || require('../../../public/Test/1.png')}
                    std={item.class_name}
                    name={item.name}
                    description={item.desc}
                  />
                </Link>
              ))
            ) : (
              <p>No test series available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TestDetail;
