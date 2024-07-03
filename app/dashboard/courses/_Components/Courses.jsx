"use client";
import { useEffect, useState } from "react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Card from "./Course/Card";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useProductFoundationStore, useProductJEEStore, useProductStore } from "@/hooks/useStore";

const Courses = () => {

  const {fetchData } = useProductStore();
  const{fetchDataJee} = useProductJEEStore()
  const {fetchDataFoundation} = useProductFoundationStore()

  useEffect(() => {
    fetchData();
    fetchDataJee()
    fetchDataFoundation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);


  
 const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.techscholars.in/pdt/v1/category'
        );

        if (Array.isArray(response.data)) {
          const formattedData = response.data.map((item) => ({
            id: item.id,
            title: item.name.toUpperCase(),
            route: `/dashboard/courses/${item.name.toLowerCase().replace(/\s+/g, '')}`,
            description: item.description,
            Poster: item.banner_img,
          }));

          setData(formattedData);
        } else {
          throw new Error("Data format is not an array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#f7faff]  font-Poppins h-screen w-full overflow-x-hidden">
      <DashboardNavbar title={"Courses"} />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <p>Error: {error}</p>
        </div>
      ) : (
        <div className="md:my-6 flex flex-col   h-[82vh] md:max-w-[80vw]  pt-5 ">
          <div className="md:max-w-[82vw] w-[90vw]  rounded-md md:pl-9 flex flex-col overflow-y-auto pb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6  lg:grid-cols-3 gap-4 mt-4 xl:w-10/12 md:mx-auto">
              {data.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  route={item.route}
                  image={item.Poster}
                />
              ))}
            </div>
      
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
