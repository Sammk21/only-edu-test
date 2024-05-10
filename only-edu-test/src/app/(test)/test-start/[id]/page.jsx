"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SlClock } from "react-icons/sl";
import { IoIosArrowBack } from "react-icons/io";
import InstructionTestPage from "@/modules/test-start/dialogs/test-page-instruction";
import SubmitTestDialog from "@/modules/test-start/dialogs/submit-test-confirmation-dialog";

const TestStartPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const totalQuestions = 8; // Assuming there are 10 questions in total
  const [radius, setRadius] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isinstructionDialogOpen, setIsInstructionDialogOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  //dialog toggles

  const toggleInstructionDialog = () => {
    setIsInstructionDialogOpen(!isinstructionDialogOpen);
  };

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubmitDialog = () => {
    setSubmitting(!isSubmitting);
  };

  useEffect(() => {
    const handleResize = () => {
      // Set radius based on device width
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

  const options = ["HTML", "CSS", "JavaScript", "Python"]; // Example options

  const percentageCompleted = (currentPage / totalQuestions) * 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (percentageCompleted / 100) * circumference;

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-orange-100 to-teal-100 flex flex-col px-2 py-3 sm:p-6  lg:p-8 relative">
        <div className="flex justify-between items-center font-semibold text-[#115e5d]">
          <span className="text-lg">Only edu</span>
          <div className="flex gap-x-3 items-center ">
            <span className="h-11 w-11 bg-gray-500 rounded-full relative">
              <Image
                src="https://i.ibb.co/4820235/Whats-App-Image-2024-05-09-at-12-57-45-PM.jpg"
                fill
                className="object-cover object-center rounded-full"
              />
            </span>
            <div className="flex flex-col font-medium text-sm">
              <span>Sarfraj sayyad</span>
              <span className="underline ">sarfraj@onlyEdu.com</span>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center my-3">
          <div className="bg-[#f5f5f5] h-[calc(100%_-_4rem)] lg:h-[calc(100%_-_6rem)]  w-full  lg:w-[calc(100%_-_6rem)] rounded-3xl shadow-lg p-4 sm:py-6  lg:py-16 lg:px-10 flex flex-col">
            <div className="w-full flex justify-between items-center ">
              <div className="flex gap-x-6">
                <div className="clock text-5xl flex  items-center gap-x-3 text-[#115e5d]">
                  <SlClock />
                  <div className="timimg flex flex-col">
                    <span className="sm:text-sm text-xs ">Time remaining</span>
                    <span className="sm:text-lg text-sm font-medium">
                      00 : 04 : 58
                    </span>
                  </div>
                </div>
                <div className="timimg flex flex-col justify-center items-center">
                  <span className="sm:text-sm text-xs ">Marks</span>
                  <span className="sm:text-lg text-xs font-medium text-green-500">
                    +2 / <span className="text-red-500"> -0</span>
                  </span>
                </div>
              </div>
              <div className="button">
                <button
                  onClick={toggleSubmitDialog}
                  className="bg-[#fd7c22] text-white font-medium border py-2 px-6 rounded-xl"
                >
                  <span className="w-full text-sm sm:text-md md:text-md lg:text-lg">
                    Submit
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-14 flex flex-col-reverse sm:flex-row text-black">
              <div className="flex flex-col lg:w-[70%]">
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
                        className={`border border-gray-300 rounded-lg px-4 py-2 cursor-pointer w-full ${
                          selectedOption === option
                            ? "bg-[#115e5d] text-white"
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
              <div className="h-full lg:w-[30%]">
                <div className=" w-full flex justify-center items-center flex-col">
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
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      fill="none"
                      stroke="#115e5d"
                      strokeWidth="17"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      transform="rotate(-90 50% 50%)"
                    />
                    <text
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
            </div>
            <div className="flex sm:gap-x-3 sm:justify-start my-8 xs:justify-between flex-col sm:flex-row gap-y-3">
              <div className=" flex justify-between gap-x-3">
                <button className="bg-[#ededed] text-[#115e5d] font-medium border py-2 px-6 rounded-xl ">
                  <span className="w-full text-xs sm:text-sm md:text-base lg:text-md ">
                    Clear response
                  </span>
                </button>
                <button className="bg-[] text-[#115e5d] font-medium border py-2 px-6 rounded-xl">
                  <span className="w-full text-xs sm:text-sm md:text-base lg:text-md">
                    Mark for review & next
                  </span>
                </button>
              </div>
              <button className=" bg-[#115e5d] font-medium border py-2 px-6 rounded-xl text-white max-w-xl">
                <span className="w-full text-xs sm:text-sm md:text-base lg:text-md">
                  Save & Next
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2  arrow h-screen w-[350px] bg-[#ededed] border shadow-md rounded-l-3xl ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 ease-in-out`}
        >
          <div className="relative h-full w-full">
            <div className="flex flex-col justify-center items-center w-full py-8 gap-y-3">
              <div className="w-[90%] bg-[#115e5d] rounded-lg">
                <div className="text-white text-xs py-6 gap-y-3 grid grid-cols-2 px-2 ">
                  <div className="flex gap-x-3 items-center">
                    <span className="h-5 w-5 rounded-full bg-green-500 flex justify-center items-center p-1">
                      1
                    </span>
                    <span>Attempted</span>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <span className="rounded-full bg-red-500 h-5 w-5 flex justify-center items-center">
                      3
                    </span>
                    <span>Not answered</span>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <span className="h-5 w-5 flex justify-center items-center rounded-full bg-yellow-500">
                      7
                    </span>
                    <span>Marked</span>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <span className="h-5 w-5 flex justify-center items-center rounded-full bg-orange-500">
                      0
                    </span>
                    <span>Marked & Answered</span>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <span className="h-5 w-5 rounded-full bg-white flex justify-center items-center text-black">
                      42
                    </span>
                    <span>Not visited</span>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <span className="p-1 border-[1.5px] border-[#000] rounded-full">
                      <span className="h-4 w-4 rounded-full bg-[#115e5d] border flex justify-center items-center text-black"></span>
                    </span>
                    <span>Current question</span>
                  </div>
                </div>
              </div>
              <div className="w-[90%] bg-[#fff] rounded-lg">
                <div className="py-2 gap-y-1 px-2 font-medium text-sm">
                  Test : React
                </div>
              </div>
              <div className="w-[90%] bg-[#e0e0e0] rounded-lg">
                <div className="grid grid-cols-5 py-2 px-2 gap-1">
                  <span className="w-10 h-8 border-[1.5px] bg-green-500  rounded-md text-[#ededed] flex justify-center items-center">
                    1
                  </span>
                  <span className="w-10 h-8 border-[1.5px] bg-orange-500 rounded-md text-[#ededed] flex justify-center items-center">
                    2
                  </span>
                  <span className="w-10 h-8 border-[1.5px] bg-orange-500 rounded-md text-[#ededed] flex justify-center items-center">
                    3
                  </span>
                  <span className="w-10 h-8 border-[1.5px] bg-green-500 rounded-md text-[#ededed] flex justify-center items-center">
                    4
                  </span>
                  <span className="w-10 h-8 border-[1.5px] bg-green-500 rounded-md text-[#ededed] flex justify-center items-center">
                    5
                  </span>
                  <span className="w-10 h-8 border-[1.5px] bg-white text-black rounded-md  flex justify-center items-center">
                    6
                  </span>
                  <span className="w-10 h-8 border-[1.5px] bg-yellow-500 rounded-md text-[#ededed] flex justify-center items-center">
                    7
                  </span>
                  <span className="w-10 h-8 border-[1.5px] bg-red-600 rounded-md text-[#ededed] flex justify-center items-center">
                    8
                  </span>
                  <span className="w-10 h-8 border-[1.5px] border-[#000]  rounded-md text-[#ededed] flex justify-center items-center p-1">
                    <span className="bg-[#115e5d] w-full rounded-sm flex justify-center items-center">
                      9
                    </span>
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 w-full">
                <div className="flex flex-col py-3 px-3 gap-y-2">
                  <button
                    onClick={toggleInstructionDialog}
                    className="bg-[#d7d7d7] t text-[#115e5d] font-medium border py-2 px-6 rounded-xl"
                  >
                    <span className="w-full text-sm sm:text-md md:text-md lg:text-lg">
                      Instructions
                    </span>
                  </button>
                  <button
                    onClick={toggleSubmitDialog}
                    className=" bg-[#115e5d] text-white  font-medium border py-2 px-6 rounded-xl"
                  >
                    <span className="w-full text-sm sm:text-md md:text-md lg:text-lg">
                      Submit Test
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <span
              onClick={toggleSideBar}
              className={`h-12 w-12 ${
                isSidebarOpen
                  ? "rotate-180 justify-center"
                  : "rotate-0 justify-start "
              } flex transition duration-500 ease-in-out items-center text-3xl text-[#ededed] absolute rounded-full border -left-7 bg-[#fd7c22] top-1/2 -translate-y-1/2 `}
            >
              <IoIosArrowBack />
            </span>
          </div>
        </div>
      </div>
      <InstructionTestPage
        isOpen={isinstructionDialogOpen}
        toggle={toggleInstructionDialog}
      />
      <SubmitTestDialog isOpen={isSubmitting} toggle={toggleSubmitDialog} />
    </>
  );
};

export default TestStartPage;
