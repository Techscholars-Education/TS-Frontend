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

  useEffect(() => {
    const fetchTestSeries = async () => {
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

        const response = await axios.get('https://api.techscholars.co.in/pdt/v1/ts/list', axiosConfig);
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
  }, []);

  return (
    <div className="font-Poppins min-h-screen w-full bg-[#F0F7FF]">
      <DashboardNavbar title="Test Series Foundation" />
      <div className="my-14 flex flex-col md:mx-8">
        <h2 className="text-xl md:text-xl font-semibold text-darkBlue mx-4 my-6">
          Test Series Foundation
        </h2>
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
                    image={item.poster_image ||  require('../../../public/Test/1.png')} 
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
