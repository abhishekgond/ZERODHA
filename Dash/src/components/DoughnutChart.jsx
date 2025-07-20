import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-xl shadow p-4 flex items-center justify-center">
      {/* Responsive flex container centers the chart, and max-w-xs constrains size on desktop */}
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "#6B7280", // Tailwind gray-500
                font: { size: 12 },
              },
            },
          },
        }}
        style={{ width: "100%", height: "260px" }} // override default canvas size
      />
    </div>
  );
}
