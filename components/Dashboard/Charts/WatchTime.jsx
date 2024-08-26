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

const WatchTime = () => {
  // For loading...
  const [isLoading, setIsLoading] = useState(true);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Classes",
        data: [45, 38, 50, 43, 45, 45],
        borderColor: "rgb(255, 99, 71)",
        backgroundColor: "rgba(255, 99, 71, 0.5)",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "rgb(255, 99, 71)",
      },
      {
        label: "Tutorials",
        data: [48, 52, 45, 60, 55, 60],
        borderColor: "rgb(165, 42, 42)",
        backgroundColor: "rgba(165, 42, 42, 0.5)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-[550] text-gray-800">Watch Time</h2>
        <select className="px-2 py-2 border rounded text-gray-700 text-sm">
          <option>2024</option>
          <option>2025</option>
        </select>
      </div>
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

export default WatchTime;
