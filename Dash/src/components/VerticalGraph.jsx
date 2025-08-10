import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Bar chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", // ✅ Removed TypeScript type annotation
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};
// Main BarChart component
export default function VerticalGraph({data}) {
  return <Bar options={options} data={data} />;
}
