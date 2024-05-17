"use client";
// components/PieChart.js
import React from "react";
import dynamic from "next/dynamic";
import Chart from "react-apexcharts";

// Dynamically import ReactApexChart to avoid SSR issues

const PieChart = () => {
  const series = [44, 55, 13, 43, 22];
  const options = {
    chart: {
      type: "pie",
      position: "center",
    },
    legend: {
      position: "bottom",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    colors: ["#000000", "#333333", "#555555", "#777777", "#999999"],
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
    ],
  };

  return <Chart options={options} series={series} type="pie" width="380" />;
};

export default PieChart;
