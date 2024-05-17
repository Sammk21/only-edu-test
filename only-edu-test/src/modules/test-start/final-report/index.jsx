"use client";
import React from "react";
import { GrScorecard } from "react-icons/gr";
import { IoTrophySharp } from "react-icons/io5";
import { Chart } from "react-google-charts";
import { GrEmptyCircle } from "react-icons/gr";
import { FiCheckCircle } from "react-icons/fi";
import { GoXCircle } from "react-icons/go";
import { LuTimerReset } from "react-icons/lu";
import { PiPencilFill } from "react-icons/pi";
import { FaHourglassHalf } from "react-icons/fa6";

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
      <div className="sm:flex sm:justify-between grid-cols-2 grid gap-4">
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#115e5d] sm:w-[15%] w-full rounded-lg">
          <p>
            <span className="text-[#115e5d] font-semibold"> SCORE </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 0/280</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]  hidden sm:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#fd7c22] sm:w-[15%] w-full rounded-lg">
          <p>
            <span className="text-[#fd7c22] font-semibold"> ACCURACY </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 0%</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]  hidden sm:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#eab308] sm:w-[15%] w-full rounded-lg">
          <p>
            <span className="text-[#eab308] font-semibold"> AIR </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 50/500</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]  hidden sm:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#dc2626] sm:w-[15%] w-full rounded-lg">
          <p>
            <span className="text-[#dc2626] font-semibold"> PERCENTAGE </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 7%</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]  hidden sm:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#22c55e] sm:w-[15%] w-full rounded-lg">
          <p>
            <span className="text-[#22c55e] font-semibold"> PERCENTILE </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 5%</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]  hidden sm:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border-l-4 border-solid border-[#000000] sm:w-[15%] w-full rounded-lg">
          <p>
            <span className="text-[rgb(0 0 0 / 70%)] font-semibold">
              AVG TIME
            </span>
            <br />
            <span className="text-[#9dced3] text-[16px]"> 7 Min</span>
          </p>
          <span>
            <GrScorecard className=" text-[#9dced3] text-[24px]  hidden sm:block" />
          </span>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-x-3 mt-4  ">
        <div className="bg-white rounded-lg mb-3 sm:mb-0">
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
        <div className="bg-white rounded-lg mb-3 sm:mb-0">
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
        <div className="bg-white rounded-lg">
          <div className="border-b ">
            <h3 className="p-3 text-[#22c55e]"> You vs Topper</h3>
          </div>
          <div className="h-[500px] flex flex-col justify-between">
            <div className="p-3">
              <table className="w-full text-[#9DCED3] p-3 text-left leading-9">
                <thead>
                  <tr className="border-b-2">
                    <th>Name</th>
                    <th>You</th>
                    <th>Topper</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2">
                    <td className="flex items-center gap-[10px] ">
                      <GrScorecard />
                      Score
                    </td>
                    <td>0</td>
                    <td>240.00</td>
                  </tr>
                  <tr className="border-b-2">
                    <td className="flex items-center gap-[10px]">
                      <GrEmptyCircle />
                      Accuracy
                    </td>
                    <td>0</td>
                    <td>100.00</td>
                  </tr>
                  <tr className="border-b-2">
                    <td className="flex items-center gap-[10px]">
                      <FiCheckCircle />
                      Correct
                    </td>
                    <td>0</td>
                    <td>60</td>
                  </tr>
                  <tr className="border-b-2">
                    <td className="flex items-center gap-[10px]">
                      <GoXCircle />
                      Incorrect
                    </td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td className="flex items-center gap-[10px]">
                      <LuTimerReset />
                      Total Time
                    </td>
                    <td>0 Min 27 Sec</td>
                    <td>0 Min 3 Sec</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-[#9dced3]">
              <p className="text-[#115e5d]">
                My performance compared to the top performer's performance in
                this test is satisfactory.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 rounded-lg">
        <div className="border-b ">
          <h3 className="p-3 text-[#22c55e]"> LeaderBoard</h3>
        </div>
        <div className="p-4">
          <p className="text-lg">
            You spent <span className="text-[#eab308]">0 Min </span> on deciding
            the questions you don't want to attempt.
          </p>
        </div>
        <div className="p-4 flex justify-between flex-col sm:flex-row">
          <div className="flex sm:gap-14 sm:mb-0  items-center justify-between mb-4">
            <div className="">
              <h4 className="text-lg text-[#115E5D] font-semibold	">
                Attempted
              </h4>
              <p>0 of 70</p>
            </div>
            <div className="p-2 rounded-full bg-[#115e5d5c]">
              <PiPencilFill className="text-[24px] text-[#115E5D]" />
            </div>
          </div>
          <div className="flex sm:gap-14 sm:mb-0  items-center justify-between mb-4">
            <div className="">
              <h4 className="text-lg text-[#fd7c22] font-semibold	">Correct</h4>
              <p>0 of 70</p>
            </div>
            <div className="p-2 rounded-full bg-[#fd7c224a]">
              <FiCheckCircle className="text-[24px] text-[#fd7c22]" />
            </div>
          </div>
          <div className="flex sm:gap-14 sm:mb-0  items-center justify-between mb-4">
            <div className="">
              <h4 className="text-lg text-[#dc2626] font-semibold	">
                Incorrect
              </h4>
              <p>0 of 70</p>
            </div>
            <div className="p-2 rounded-full bg-[#dc262645]">
              <GoXCircle className="text-[24px] text-[#dc2626]" />
            </div>
          </div>
          <div className="flex sm:gap-14 sm:mb-0  items-center justify-between mb-4">
            <div className="">
              <h4 className="text-lg text-[#eab308] font-semibold	">
                Time/Ques
              </h4>
              <p>0 Min</p>
            </div>
            <div className="p-2 rounded-full bg-[#eab3083d]">
              <FaHourglassHalf className="text-[24px] text-[#eab308]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalReport;
