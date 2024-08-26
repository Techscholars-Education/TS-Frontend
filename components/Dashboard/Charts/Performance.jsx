"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Performance = () => {
  // For loading...
  const [isLoading, setIsLoading] = useState(true);

  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [2.6, 3.5, 2.9, 4.2, 3.5, 3.8, 3.6],
        borderColor: "rgb(0, 0, 128)",
        backgroundColor: "rgba(0, 0, 128, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 1,
        max: 6,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <div className="xl:w-full 2xl:max-w-2xl mx-auto p-6 bg-white rounded font-Poppins text-darkBlue">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-[550] text-gray-800">
          Performance analysis
        </h2>
        <select className="px-2 py-2 border rounded text-gray-700 text-sm">
          <option>July</option>
          <option>Aug</option>
          <option>Sept</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
      </div>

      {/* Add a loader */}
      {!isLoading ? (
        <Line data={data} options={options} />
      ) : (
        <div className="text-sm font-medium text-darkBlue animate-pulse">
          Loading....
        </div>
      )}
    </div>
  );
};

export default Performance;
