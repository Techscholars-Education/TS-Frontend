'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import DashboardNavbar from '../DashboardNavbar';
import TestSeriesCard from './TestSeriesCard';
import Cookies from 'js-cookie';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


function TestDetail() {
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

        const response = await axios.get(`https://api.techscholars.in/pdt/v1/ts/list?category_id=${selectedCategory}`, axiosConfig);

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
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(parseInt(event.target.value, 10));
  };

  return (
    <div className="font-Poppins min-h-screen bg-[#f7faff]">
      <DashboardNavbar title="Test Series Foundation" />
      <div className="flex flex-col md:mx-8">
        <div className="flex md:justify-between mb-8 mr-4">
          <div className="mx-4 my-6">
            <h2 className="text-xl md:text-xl mb-2 font-semibold text-darkBlue">
              Test Series Foundation
            </h2>
            <p className="text-gray-500 ml-0.5">Personal Information</p>
          </div>
          <div className="bg-white text-blue-600 font-[500] mt-8 text-sm rounded-full flex justify-center items-center border-blue-400 border-[2px] h-[50px] w-[190px] focus:outline-none">

          <FormControl
              sx={{
                m: 1,
                minWidth: 120,
                border: 'none',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  '&.Mui-focused fieldset': {
                    border: 'none',
                  },
                },
                '& .MuiSelect-outlined': {
                  padding: 0,
                },
                '& .MuiSelect-icon': {
                  color: '#0079FC',
                },
              }}
            >
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={selectedCategory}
                label="Age"
                onChange={handleCategoryChange}
                sx={{
                  border: 'none',
                  color: '#0079FC',
                  '& .MuiSelect-icon': {
                    right: 0, // Adjust this as needed
                  },
                }}
              >

                <MenuItem value={1}>Category 1</MenuItem>
                <MenuItem value={2}>Category 2</MenuItem>
                <MenuItem value={3}>Category 3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

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
  );
}

export default TestDetail;
