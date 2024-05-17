"use client";
import React, { useEffect, useState } from "react";
import { SlClock } from "react-icons/sl";
import MySideBar from "./MySideBar";
import InstructionTestPage from "../dialogs/test-page-instruction";
import SubmitTestDialog from "../dialogs/submit-test-confirmation-dialog";

const options = ["HTML", "CSS", "JavaScript", "Python"];

const MyTestPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [radius, setRadius] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isinstructionDialogOpen, setIsInstructionDialogOpen] = useState(false);

  const toggleSubmitDialog = () => {
    setSubmitting(!isSubmitting);
  };
  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleInstructionDialog = () => {
    setIsInstructionDialogOpen(!isinstructionDialogOpen);
  };

  const totalQuestions = 8;

  const percentageCompleted = (currentPage / totalQuestions) * 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (percentageCompleted / 100) * circumference;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 0 && screenWidth <= 400) {
        setRadius(20); // Adjust radius for smaller screens
      }
      if (screenWidth >= 401 && screenWidth <= 767) {
        setRadius(35);
      }
      if (screenWidth >= 768 && screenWidth <= 1000) {
        setRadius(65);
      }
      if (screenWidth >= 1001) {
        setRadius(80);
      } else {
        setRadius(50);
      }
    };

    // Initial call to set radius based on window width
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-full h-full border text-dark dark:text-light border-borderLight dark:border-border  mt-10 p-5 rounded-3xl">
        <div className="w-full flex justify-between items-center ">
          <div className="grid grid-cols-6">
            <div className="clock text-5xl flex col-span-4  items-center gap-x-3 text-">
              <SlClock />
              <div className="timimg flex flex-col">
                <span className="sm:text-sm text-[8px] ">Time remaining</span>
                <span className="sm:text-lg text-xs font-semibold">
                  00 : 04 : 58
                </span>
              </div>
            </div>
            <div className="timimg flex flex-col justify-center items-center col-span-2">
              <span className="sm:text-sm text-[8px]">Marks</span>
              <span className="sm:text-lg text-xs font-medium text-[#1a5e18]">
                +2 <span className="text-dark dark:text-light">/</span>{" "}
                <span className="text-error"> -0</span>
              </span>
            </div>
          </div>
          <div className="button">
            <button
              onClick={toggleSubmitDialog}
              className="bg-foreground hover:bg-foreground/80 text-light font-medium  border border-borderLight dark:border-border py-2 px-6 rounded-xl"
            >
              <span className="w-full text-sm sm:text-md md:text-md lg:text-lg">
                Submit
              </span>
            </button>
          </div>
        </div>
        <div className="mt-8 md:grid md:grid-cols-12 text-black flex flex-col-reverse">
          <div className="flex flex-col col-span-8 ">
            <div className="my-4">
              <h4 className="question mb-5  text-sm font-medium  ">
                Question 1 of 20
              </h4>
              <h3 className="mt-1 text-base sm:text-lg">
                Which of the following programing language for developing
                multimedia pages?
              </h3>
            </div>
            <div className="options grid grid-cols-2 gap-3 mt-6">
              {options.map((option, index) => (
                <label
                  key={index}
                  className="option flex items-center text-sm sm:text-md md:text-md lg:text-lg"
                >
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                    className="sr-only" // Hide the default radio button
                  />
                  <div
                    className={`border border-borderLight dark:border-border rounded-lg px-4 py-2 cursor-pointer w-full transition-colors duration-200 ease-in-out ${
                      selectedOption === option
                        ? "dark:bg-foreground bg-accent text-white"
                        : ""
                    }`}
                  >
                    <span className="option-identifier mr-2 ">
                      {String.fromCharCode(65 + index)}.{" "}
                    </span>{" "}
                    {/* Option identifier */}
                    {option}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className=" w-full flex justify-center items-center flex-col col-span-4">
            {/* Render your quiz content here */}

            <span className="text-sm">Questions attempted</span>

            {/* Circular progress bar */}
            <svg className="flex h-42 w-42 sm:h-52 sm:w-52 md:h-62 md:w-62 lg:h-72 lg:w-72  items-start">
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                stroke="#ddd"
                strokeWidth="17"
                className=" stroke-[#115e5d]/40 dark:stroke-light"
              />
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                fill="none"
                // stroke="#115e5d"
                strokeWidth="18"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 50% 50%)"
                className="stroke-[#115e5d] dark:stroke-foreground/80 drop-shadow-sm border-borderLight dark:border-border"
              />
              <text
                className="fill-dark dark:fill-light"
                x="50%"
                y="50%"
                textAnchor="middle"
                fill="#115e5d"
                fontSize="30"
                fontWeight={600}
                dominantBaseline="middle"
              >
                {currentPage}/{totalQuestions}
              </text>
            </svg>
          </div>
        </div>
        <div className="flex sm:gap-x-3 sm:justify-start my-8 xs:justify-between flex-col sm:flex-row gap-y-3 border-t border-borderLight dark:border-border pt-3">
          <div className=" flex justify-between gap-x-3">
            <button className="] font-medium border border-borderLight dark:border-border   px-2 py-1 rounded-xl ">
              <span className="w-full text-xs sm:text-sm md:text-base md:px-2 md:py-3 ">
                Clear response
              </span>
            </button>
            <button className="  font-medium border border-borderLight dark:border-border  px-2 py-1 rounded-xl">
              <span className="w-full text-xs sm:text-sm md:text-base md:px-2 md:py-5">
                Mark for review & next
              </span>
            </button>
          </div>
          <button className=" font-medium border border-borderLight bg-accent dark:border-border dark:bg-foreground  px-2 py-1 rounded-xl text-white max-w-xl">
            <span className="w-full text-xs sm:text-sm md:text-base md:px-2 md:py-5">
              Save & Next
            </span>
          </button>
        </div>
      </div>
      <MySideBar
        isSidebarOpen={isSidebarOpen}
        toggleInstructionDialog={toggleInstructionDialog}
        toggleSubmitDialog={toggleSubmitDialog}
        toggleSideBar={toggleSideBar}
      />
      {isinstructionDialogOpen && (
        <InstructionTestPage
          isOpen={isinstructionDialogOpen}
          toggle={toggleInstructionDialog}
        />
      )}
    </>
  );
};

export default MyTestPage;
