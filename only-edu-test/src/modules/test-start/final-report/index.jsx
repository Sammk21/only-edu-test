"use client";
import React from "react";
import { GrScorecard } from "react-icons/gr";
import { IoTrophySharp } from "react-icons/io5";
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];
export const options = {
  pieHole: 0.4,
  is3D: false,
};
const FinalReport = () => {
  return (
    <div className="py-28 bg-gradient-to-r from-orange-100 to-teal-100 px-5">
      <div className="flex justify-between ">
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#115e5d] w-[15%] rounded-lg">
          <p>
            <span className="text-[#115e5d] font-semibold"> SCORE </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 0/280</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#fd7c22] w-[15%] rounded-lg">
          <p>
            <span className="text-[#fd7c22] font-semibold"> ACCURACY </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 0%</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#eab308] w-[15%] rounded-lg">
          <p>
            <span className="text-[#eab308] font-semibold"> AIR </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 50/500</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#dc2626] w-[15%] rounded-lg">
          <p>
            <span className="text-[#dc2626] font-semibold"> PERCENTAGE </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 7%</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#22c55e] w-[15%] rounded-lg">
          <p>
            <span className="text-[#22c55e] font-semibold"> PERCENTILE </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 5%</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#000000] w-[15%] rounded-lg">
          <p>
            <span className="text-[rgb(0 0 0 / 70%)] font-semibold">
              AVG TIME
            </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 7 Min</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-3 mt-4 ">
        <div className="bg-white ">
          <div className="border-b ">
            <h3 className="p-3 text-[#22c55e]"> LeaderBoard</h3>
          </div>
          <div className="h-[500px] overflow-scroll">
            <ul className="px-3">
              <li className="py-3 border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="uppercase font-semibold">sandesh hande</h5>
                    <span>Marks: 240/280</span>
                  </div>
                  <div className="relative">
                    <IoTrophySharp className="text-[#eab308] text-3xl" />
                    <div className="absolute top-0 left-3 text-white">1</div>
                  </div>
                </div>
              </li>
              <li className="py-3 border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="uppercase font-semibold">omkar bhor</h5>
                    <span>Marks: 250/280</span>
                  </div>
                  <div className="relative">
                    <IoTrophySharp className="text-[#eab308] text-3xl" />
                    <div className="absolute top-0 left-[10px] text-white">
                      2
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-3 border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="uppercase font-semibold">sameer pathan</h5>
                    <span>Marks: 260/280</span>
                  </div>
                  <div className="relative">
                    <IoTrophySharp className="text-[#eab308] text-3xl" />
                    <div className="absolute top-0 left-[10px] text-white">
                      3
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-3 border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="uppercase font-semibold">sarfraj sayyad</h5>
                    <span>Marks: 260/280</span>
                  </div>
                  <div className="relative">
                    <IoTrophySharp className="text-[#eab308] text-3xl" />
                    <div className="absolute top-0 left-[10px] text-white">
                      4
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-3 border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="uppercase font-semibold">adesh chaurasya</h5>
                    <span>Marks: 260/280</span>
                  </div>
                  <div className="relative">
                    <IoTrophySharp className="text-[#eab308] text-3xl" />
                    <div className="absolute top-0 left-[10px] text-white">
                      5
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-3 border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="uppercase font-semibold">rakesh seti</h5>
                    <span>Marks: 240/280</span>
                  </div>
                  <div className="relative">
                    <IoTrophySharp className="text-[#eab308] text-3xl" />
                    <div className="absolute top-0 left-[10px] text-white">
                      6
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-3 border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="uppercase font-semibold">kabir singh</h5>
                    <span>Marks: 230/280</span>
                  </div>
                  <div className="relative">
                    <IoTrophySharp className="text-[#eab308] text-3xl" />
                    <div className="absolute top-0 left-[10px] text-white">
                      7
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white ">
          <div className="border-b ">
            <h3 className="p-3 text-[#22c55e]"> Overview</h3>
          </div>
          <div className="h-[500px] flex flex-col justify-between">
            <div>
              {" "}
              <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
              />
            </div>
            <div className="p-3 bg-[#9dced3]">
              <p className="text-[#115e5d]">
                Your overall performance for the test. Click or hover over an
                area to view its value.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="border-b ">
            <h3 className="p-3 text-[#22c55e]"> You vs Topper</h3>
          </div>
          <div className="h-[500px]">
            <div>t</div>
            <div className="p-3 bg-[#9dced3]">
              <p className="text-[#115e5d]">
                Your overall performance vs topper's performance for this test.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalReport;
