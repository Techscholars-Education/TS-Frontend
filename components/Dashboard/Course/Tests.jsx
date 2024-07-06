'use client'
import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

import { FaSquareRootAlt, FaAtom, FaFlask, FaVial } from 'react-icons/fa';
import CourseDetailNavbar from './CourseDetailNavbar';
import TestSeriesCard from '../Test/TestSeriesCard';
import Box from '@mui/material/Box';
import Link from 'next/link';

function Tests() {
   
    const [testSeries, setTestSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(2); // default category
  
    useEffect(() => {
      const fetchTestSeries = async () => {
        setLoading(true);
        try {
          const cookie = Cookies.get("access_token");
  
          const axiosConfig = {
            headers: {
              'Authorization': cookie,
            }
          };
  
          const response = await axios.get('https://api.techscholars.in/pdt/v1/ts/get', axiosConfig);
  
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
    <div className=" font-Poppins min-h-screen py-6 md:w-[82vw] flex flex-col bg-[#f7faff] ">
     <CourseDetailNavbar/>
    <div className='flex flex-col  bg-white rounded-xl p-3 mt-4 md:ml-10'>
       
        <div className="grid md:grid-cols-4 grid-cols-1">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 md:pr-12 gap-6 ml-4 w-[68vw]">
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
              <div className="flex justify-center w-[80vw] items-center md:h-96">
                <p className="text-gray-500">No test series available</p>
              </div>
            )}
          </div>
        )}
        </div>
    </div>
    </div>
  )
}

export default Tests