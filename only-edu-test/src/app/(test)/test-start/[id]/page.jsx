"use client";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";

const TestStartPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const totalQuestions = 10; // Assuming there are 10 questions in total
  const [radius, setRadius] = useState(null);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      // Set radius based on device width
      const screenWidth = window.innerWidth;
      if (screenWidth <= 400) {
        setRadius(50); // Adjust radius for smaller screens
        if (screenWidth <= 640) {
          setRadius(60);
        }
        if (screenWidth <= 1000) {
          setRadius(90);
        }
      } else {
        setRadius(100); // Default radius for larger screens
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
    <div className="w-screen h-full  bg-gradient-to-r from-orange-100 to-teal-100 flex flex-col sm:p-6  lg:p-8">
      <div className="flex justify-between items-center font-semibold">
        <span>Only edu</span>
        <div className="flex gap-x-3 items-center">
          <span className="h-11 w-11 bg-gray-500 rounded-full"></span>
          <div className="flex flex-col font-semibold">
            <span>Sameer Khan</span>
            <span>Email@mail.com</span>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex justify-center items-center my-3">
        <div className="bg-white h-[calc(100%_-_4rem)] lg:h-[calc(100%_-_6rem)]  w-full  lg:w-[calc(100%_-_6rem)] rounded-3xl shadow-lg p-4 sm:py-6  lg:py-16 lg:px-10 flex flex-col">
          <div className="w-full flex justify-between">
            <div className="clock text-5xl flex  items-center gap-x-3">
              <FaRegClock />
              <div className="timimg flex flex-col">
                <span className="text-sm ">Time remaining</span>
                <span className="text-lg font-medium">00 : 04 : 58</span>
              </div>
            </div>
            <div className="button">
              <button className="bg-[#fd7c22] text-white font-medium border py-2 px-6 rounded-xl">
                <span className="w-full text-sm sm:text-md md:text-md lg:text-lg">
                  Submit
                </span>
              </button>
            </div>
          </div>
          <div className="mt-14 flex flex-col-reverse sm:flex-row text-black">
            <div className="flex flex-col lg:w-[70%]">
              <div className="my-4">
                <h4 className="question mb-5">Question 1 of 20</h4>
                <h3 className="mt-1">
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
              <div className=" w-full flex justify-center items-start">
                {/* Render your quiz content here */}

                {/* Circular progress bar */}
                <svg className="flex h-72 w-72 items-start">
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
          <div className="flex gap-x-3 my-8">
            <button className="bg-[#ededed] text-[#115e5d] font-medium border py-2 px-6 rounded-xl ">
              <span className="w-full text-sm sm:text-md md:text-md lg:text-lg ">
                Clear response
              </span>
            </button>
            <button className="bg-[] text-[#115e5d] font-medium border py-2 px-6 rounded-xl">
              <span className="w-full text-sm sm:text-md md:text-md lg:text-lg">
                Mark for review & next
              </span>
            </button>
          </div>
          <nav className=" hidden :block" aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px text-base h-10 text-[#115e5d] mt-16">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 text-[#115e5d] ms-0 leading-tight  bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-[#115e5daf] hover:text-white "
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 text-[#115e5d] leading-tight  bg-white border border-gray-300 hover:bg-[#115e5daf] hover:text-white "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 text-[#115e5d] leading-tight  bg-white border border-gray-300 hover:bg-[#115e5daf] hover:text-white "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="flex items-center justify-center px-4 h-10 text-white  border border-gray-300 bg-[#115e5d] hover:bg-[#115e5daf] hover:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 text-[#115e5d] leading-tight  bg-white border border-gray-300 hover:bg-[#115e5daf] hover:text-white "
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 text-[#115e5d] leading-tight  bg-white border border-gray-300 hover:bg-[#115e5daf] hover:text-white "
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 text-[#115e5d] leading-tight  bg-white border border-gray-300 rounded-e-lg hover:bg-[#115e5daf] hover:text-white "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TestStartPage;
