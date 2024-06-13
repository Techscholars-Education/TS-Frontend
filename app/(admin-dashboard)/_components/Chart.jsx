import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
  } from "chart.js";
import { useEffect, useRef } from "react";

  import {Line} from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
  );


  const months = ["January", "February", "March", "April", "May", "June", "July"];


  const LineChart = ({
    
    data,
    label,
    backgroundColor,
    borderColor,
    labels = months,
  }) => {

   
    const chartRef = useRef(null);

    useEffect(() => {
      const chart = chartRef.current;
  
      if (chart) {
        const ctx = chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(24, 31, 230, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
  
        chart.data.datasets[0].backgroundColor = gradient;
        chart.update();
      }
    }, []);

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
    };
  
    const lineChartData = {
      labels,
      datasets: [
        {
          fill: true,
          label,
          data,
          // backgroundColor,
          borderColor,
          pointRadius: 5,
          pointHoverRadius: 10,
          tension: 0.09
        },
      ],
    };
  
    return <Line ref={chartRef} options={options} data={lineChartData} />;
  };
  
  export default LineChart;
  