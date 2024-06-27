import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  const createGradient = (ctx, area) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, area.bottom);
    gradient.addColorStop(0, 'rgba(24, 31, 230, 0.7)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 1.4)');
    return gradient;
  };

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const area = chart.chartArea;

      chart.data.datasets.forEach(dataset => {
        dataset.backgroundColor = createGradient(ctx, area);
      });

      chart.update();
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef.current, data]);


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
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return <Line ref={chartRef} options={options} data={data} />;
};

export default LineChart;
