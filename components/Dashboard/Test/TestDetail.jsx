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
        if (!cookie) {
          throw new Error("No access token found");
        }
        console.log("Access token:", cookie);

        const axiosConfig = {
          headers: {
            'Authorization': cookie,
          }
        };

        const response = await axios.get(`https://api.techscholars.co.in/pdt/v1/ts/list?category_id=${selectedCategory}`, axiosConfig);
        console.log(response);
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

  return (
    <div className="font-Poppins min-h-screen bg-[#fcfafa]">
      <DashboardNavbar title="Test Series Foundation" />
      <div className="flex flex-col md:mx-8">
        <h2 className="text-xl md:text-xl font-semibold text-darkBlue mx-4 my-6">
          Test Series Foundation
        </h2>
        <div className="flex md:justify-center mb-8 ">
          <div className="bg-white md:w-92 flex justify-center items-center rounded-full border">

          <button
            className={` px-4 py-2 rounded-full ${selectedCategory === 1 ? 'bg-[#0079FC] text-white' : 'bg-white text-black'}`}
            onClick={() => setSelectedCategory(1)}
          >
            Category 1
          </button>
          <button
            className={` px-4 py-2 rounded-full ${selectedCategory === 2 ? 'bg-[#0079FC] text-white' : 'bg-white text-black'}`}
            onClick={() => setSelectedCategory(2)}
          >
            Category 2
          </button>
          <button
            className={` px-4 py-2 rounded-full ${selectedCategory === 3 ? 'bg-[#0079FC] text-white' : 'bg-white text-black'}`}
            onClick={() => setSelectedCategory(3)}
          >
            Category 3
          </button>
          </div>
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
