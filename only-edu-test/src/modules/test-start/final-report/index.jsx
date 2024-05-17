"use client";
import React from "react";
import { GrScorecard } from "react-icons/gr";
import { IoTrophySharp } from "react-icons/io5";
// import { Chart } from "react-google-charts";
import { GrEmptyCircle } from "react-icons/gr";
import { FiCheckCircle } from "react-icons/fi";
import { GoXCircle } from "react-icons/go";
import { LuTimerReset } from "react-icons/lu";
import { PiPencilFill } from "react-icons/pi";
import { FaHourglassHalf } from "react-icons/fa6";
import { RiEye2Line } from "react-icons/ri";
import { FaRankingStar } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";
import { HiMiniUserGroup } from "react-icons/hi2";
import { WiTime5 } from "react-icons/wi";
import PieChart from "@/modules/chartsAndGraph/pie-chart";

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
    <div className="py-28 text-dark dark:text-light px-5">
      <div className="lg:flex lg:justify-between grid-cols-2 grid gap-4">
        <div className="flex justify-between bg-white py-5 px-4 items-center   lg:w-[15%] w-full rounded-lg border border-borderLight dark:border-none  dark:bg-foreground">
          <p>
            <span className=" font-semibold"> SCORE </span>
            <br />
            <span className="text-secondary  text-[16px]"> 0/280</span>
          </p>
          <span>
            <GrScorecard className="  text-[24px]  hidden lg:block md:block  xs:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center  border border-borderLight dark:border-none  dark:bg-foreground  lg:w-[15%] w-full rounded-lg">
          <p>
            <span className=" font-semibold"> ACCURACY </span>
            <br />
            <span className="text-secondary  text-[16px]"> 0%</span>
          </p>
          <span>
            <RiEye2Line className="  text-[24px]  hidden lg:block md:block sm:block xs:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center  border border-borderLight dark:border-none  dark:bg-foreground  lg:w-[15%] w-full rounded-lg">
          <p>
            <span className=" font-semibold"> AIR </span>
            <br />
            <span className="text-secondary  text-[16px]"> 50/500</span>
          </p>
          <span>
            <FaRankingStar className="  text-[24px]  hidden lg:block md:block sm:block xs:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border border-borderLight dark:border-none  dark:bg-foreground  lg:w-[15%] w-full rounded-lg">
          <p>
            <span className=" font-semibold"> PERCENTAGE </span>
            <br />
            <span className="text-secondary text-[16px]"> 7%</span>
          </p>
          <span>
            <AiOutlinePercentage className="  text-[24px]  hidden lg:block md:block sm:block xs:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border border-borderLight dark:border-none  dark:bg-foreground  lg:w-[15%] w-full rounded-lg">
          <p>
            <span className=" font-semibold"> PERCENTILE </span>
            <br />
            <span className="text-secondary text-[16px]"> 5%</span>
          </p>
          <span>
            <HiMiniUserGroup className="  text-[24px]  hidden lg:block md:block sm:block xs:block" />
          </span>
        </div>
        <div className="flex justify-between bg-white py-5 px-4 items-center border border-borderLight dark:border-none dark:bg-foreground  lg:w-[15%] w-full rounded-lg">
          <p>
            <span className="text-[rgb(0 0 0 / 70%)] font-semibold">
              AVG TIME
            </span>
            <br />
            <span className="text-secondary text-[16px]"> 7 Min</span>
          </p>
          <span>
            <WiTime5 className="  text-[24px]  hidden lg:block md:block sm:block xs:block" />
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-x-3 mt-4  ">
        <div className="bg-white rounded-lg mb-3 lg:mb-0 ">
          <div className=" ">
            <h3 className="p-3 "> LeaderBoard</h3>
          </div>
          <div className="h-[500px] overflow-y-scroll border border-borderLight dark:border-none dark:bg-foreground rounded-lg">
            <ul className="px-4">
              <li className="py-3 dark:border-border border-borderLight border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="normal-case font-semibold">sandesh hande</h5>
                    <span className="text-secondary">Marks: 240/280</span>
                  </div>
                  <div className="">
                    <div className="font-semibold">#1</div>
                  </div>
                </div>
              </li>
              <li className="py-3 dark:border-border border-borderLight border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="normal-case font-semibold">omkar bhor</h5>
                    <span className="text-secondary">Marks: 250/280</span>
                  </div>
                  <div className="">
                    <div className="font-semibold">#2</div>
                  </div>
                </div>
              </li>
              <li className="py-3 dark:border-border border-borderLight border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="normal-case font-semibold">sameer pathan</h5>
                    <span className="text-secondary">Marks: 260/280</span>
                  </div>
                  <div className="">
                    <div className="font-semibold">#3</div>
                  </div>
                </div>
              </li>
              <li className="py-3 dark:border-border border-borderLight border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="normal-case font-semibold">
                      sarfraj sayyad
                    </h5>
                    <span className="text-secondary">Marks: 260/280</span>
                  </div>
                  <div className="">
                    <div className="font-semibold">#4</div>
                  </div>
                </div>
              </li>
              <li className="py-3 dark:border-border border-borderLight border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="normal-case font-semibold">
                      adesh chaurasya
                    </h5>
                    <span className="text-secondary">Marks: 260/280</span>
                  </div>
                  <div className="">
                    <div className="font-semibold">#5</div>
                  </div>
                </div>
              </li>
              <li className="py-3 dark:border-border border-borderLight border-b">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="normal-case font-semibold">rakesh seti</h5>
                    <span className="text-secondary">Marks: 240/280</span>
                  </div>
                  <div className="">
                    <div className="font-semibold">#6</div>
                  </div>
                </div>
              </li>
              <li className="py-3 dark:border-border border-borderLight border-b ">
                <div className="px-4 flex justify-between items-center">
                  <div className="">
                    <h5 className="normal-case font-semibold">kabir singh</h5>
                    <span className="text-secondary">Marks: 230/280</span>
                  </div>
                  <div className="">
                    <div className="font-semibold ">#7</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg mb-3 lg:mb-0">
          <div className=" ">
            <h3 className="p-3 "> Overview</h3>
          </div>
          <div className="h-[500px] w-full flex flex-col justify-between border border-borderLight dark:border-none dark:bg-foreground rounded-lg">
            <div className="w-full flex h-full justify-center items-center">
              {" "}
              <PieChart />
            </div>
            <div className="p-3 ">
              <p className="text-secondary">
                Your overall performance for the test. Click or hover over an
                area to view its value.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg">
          <div className="">
            <h3 className="p-3"> You vs Topper</h3>
          </div>
          <div className="h-[500px] flex flex-col justify-between border border-borderLight dark:border-none dark:bg-foreground rounded-lg">
            <div className="p-3">
              <table className="w-full  p-3 text-left leading-9">
                <thead>
                  <tr className="border-borderLight dark:border-border dark:bg-foreground rounded-lg border-b">
                    <th>Name</th>
                    <th>You</th>
                    <th>Topper</th>
                  </tr>
                </thead>
                <tbody className="text-sm leading-8">
                  <tr className="border-borderLight dark:border-border dark:bg-foreground rounded-lg border-b text-secondary">
                    <td className="flex items-center gap-[10px] ">
                      <GrScorecard />
                      Score
                    </td>
                    <td>0</td>
                    <td>240.00</td>
                  </tr>
                  <tr className="border-borderLight dark:border-border dark:bg-foreground rounded-lg border-b text-secondary">
                    <td className="flex items-center gap-[10px]">
                      <GrEmptyCircle />
                      Accuracy
                    </td>
                    <td>0</td>
                    <td>100.00</td>
                  </tr>
                  <tr className="border-borderLight dark:border-border dark:bg-foreground rounded-lg border-b text-secondary">
                    <td className="flex items-center gap-[10px]">
                      <FiCheckCircle />
                      Correct
                    </td>
                    <td>0</td>
                    <td>60</td>
                  </tr>
                  <tr className="border-borderLight dark:border-border dark:bg-foreground rounded-lg border-b text-secondary ">
                    <td className="flex items-center gap-[10px]">
                      <GoXCircle />
                      Incorrect
                    </td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="text-secondary">
                    <td className="flex items-center gap-[10px] ">
                      <LuTimerReset />
                      Total Time
                    </td>
                    <td>0 Min 27 Sec</td>
                    <td>0 Min 3 Sec</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 text-secondary">
              <p className="">
                My performance compared to the top performer's performance in
                this test is satisfactory.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 rounded-lg">
        <div className=" ">
          <h3 className="p-3 pb-1 "> Attempted Efficiency</h3>
        </div>
        <div className=" ">
          <div className="p-3 pt-0">
            <p className="text-sm text-secondary">
              You spent 0 Min on deciding the questions you don't want to
              attempt.
            </p>
          </div>
          <div className="p-4 flex justify-between flex-col lg:flex-row">
            <div className="flex lg:gap-14 lg:mb-0  items-center justify-between mb-4 py-5 px-4 rounded-lg border border-borderLight dark:border-none  dark:bg-foreground ">
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
            <div className="flex lg:gap-14 lg:mb-0  items-center justify-between mb-4 py-5 px-4 rounded-lg border border-borderLight dark:border-none  dark:bg-foreground">
              <div className="">
                <h4 className="text-lg text-[#fd7c22] font-semibold	">
                  Correct
                </h4>
                <p>0 of 70</p>
              </div>
              <div className="p-2 rounded-full bg-[#fd7c224a]">
                <FiCheckCircle className="text-[24px] text-[#fd7c22]" />
              </div>
            </div>
            <div className="flex lg:gap-14 lg:mb-0  items-center justify-between mb-4 py-5 px-4 rounded-lg border border-borderLight dark:border-none  dark:bg-foreground">
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
            <div className="flex lg:gap-14 lg:mb-0  items-center justify-between mb-4 py-5 px-4 rounded-lg border border-borderLight dark:border-none  dark:bg-foreground">
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
    </div>
  );
};

export default FinalReport;
