"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const MyLineChart = () => {
  const options = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0, // Hide points on the line
      },
    },
    layout: {
      padding: {
        left: 50, // Adjust the left padding
        right: 50, // Adjust the right padding
        top: 50, // Adjust the top padding
        bottom: 50, // Adjust the bottom padding
      },
    },
  };

  return (
    <div>
      <Line
        data={{
          labels: ["Apr 1, 2022", "Apr 30, 2022"],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200],
              backgroundColor: "purple",
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default MyLineChart;
