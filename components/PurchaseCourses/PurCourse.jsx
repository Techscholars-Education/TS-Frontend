"use client";
import { useEffect, useState } from "react";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";
import Card from "@/app/dashboard/courses/_Components/Course/Card";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  useProductFoundationStore,
  useProductJEEStore,
  useProductStore,
} from "@/hooks/useStore";

const PurCourse = () => {
  const { fetchData } = useProductStore();
  const { fetchDataJee } = useProductJEEStore();
  const { fetchDataFoundation } = useProductFoundationStore();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.techscholars.in/pdt/v1/category"
        );

        if (Array.isArray(response.data)) {
          const formattedData = response.data.map((item) => ({
            id: item.id,
            title: item.name.toUpperCase(),
            route: `/dashboard/my-course/coursedetail/${item.name
              .toLowerCase()
              .replace(/\s+/g, "")}`,
            description: item.description,
            Poster: item.banner_img,
          }));
          console.log(formattedData);
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
    fetchDataJee();
    fetchDataFoundation();
  }, [fetchDataFoundation, fetchDataJee]);

  return (
    <div className="font-Poppins min-h-screen bg-gray-100/60 pb-24">
      <DashboardNavbar title={"Courses"} />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          <p>Error: {error}</p>
        </div>
      ) : (
        <div className="flex flex-col md:mx-8">
          <div className="flex md:justify-between mr-4">
            <div className="mx-4 my-6">
              <h2 className="text-xl md:text-xl mb-2 font-semibold text-darkBlue">
                Courses
              </h2>
              <p className="text-gray-500 ml-0.5">
                Learn from the best course for your target examination.
              </p>
            </div>
          </div>
          <div className="w-full  rounded-md flex flex-col pb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3  lg:grid-cols-3 gap-4 mt-4 xl:w-full md:mx-auto">
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

export default PurCourse;
