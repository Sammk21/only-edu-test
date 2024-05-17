"use client";

// components/PieChart.js
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const series = [44, 55, 13, 43];
  const options = {
    chart: {
      type: "pie",
      position: "center",
    },
    legend: {
      position: "bottom",
    },
    labels: ["Correct", "Wrong", "Unattempted", "Visited"],
    colors: ["#000000", "#333333", "#555555", "#777777"],
    responsive: [
      {
        breakpoint: 1080,
        options: {
          chart: {
            width: 320,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 870,
        options: {
          chart: {
            width: 290,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 320,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return mounted ? (
    <Chart options={options} series={series} type="pie" width="380" />
  ) : null;
};

export default PieChart;
