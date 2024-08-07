import React from "react";

const LoadingTestSeries = () => {
  return (
    <div className="flex flex-col rounded-xl font-Poppins relative bg-white border  space-y-4">
      <div className="h-52 w-full bg-gray-300 animate-pulse rounded-md"></div>

      <div className="space-y-4 py-4 px-4">
        <div className="h-4 w-full bg-gray-300 animate-pulse rounded-md"></div>
        <div className="h-4 w-3/4 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export default LoadingTestSeries;
