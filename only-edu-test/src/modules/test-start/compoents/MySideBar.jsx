import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const MySideBar = ({
  isSidebarOpen,
  toggleInstructionDialog,
  toggleSubmitDialog,
  toggleSideBar,
}) => {
  return (
    <aside
      className={`absolute right-0 top-1/2 -translate-y-1/2  arrow h-screen w-[350px] bg-light dark:bg-dark border border-borderLight dark:border-border shadow-md rounded-l-3xl ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="relative h-full w-full">
        <div className="flex flex-col justify-center items-center w-full py-8 gap-y-3">
          <div className="w-[90%] bg-accent dark:bg-foreground rounded-lg">
            <div className="text-white text-xs py-6 gap-y-3 grid grid-cols-2 px-2 ">
              <div className="flex gap-x-3 items-center">
                <span className="h-5 w-5 rounded-full bg-attempted flex justify-center items-center p-1">
                  1
                </span>
                <span>Attempted</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <span className="rounded-full bg-visited h-5 w-5 flex justify-center items-center">
                  3
                </span>
                <span>Not answered</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <span className="h-5 w-5 flex justify-center items-center rounded-full bg-marked">
                  7
                </span>
                <span>Marked</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <span className="h-5 w-5 flex justify-center items-center rounded-full bg-MarkAnswered">
                  0
                </span>
                <span>Marked & Answered</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <span className="h-5 w-5 rounded-full bg-notVisited flex justify-center items-center text-dark">
                  42
                </span>
                <span>Not visited</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <span className="p-1 h-5 w-5 bg-currQuestion  rounded-full"></span>
                <span>Current question</span>
              </div>
            </div>
          </div>
          <div className="w-[90%] bg-accent dark:bg-foreground rounded-lg">
            <div className="py-2 gap-y-1 px-2 font-medium text-sm">
              Test : React
            </div>
          </div>
          <div className="w-[90%] bg-accent dark:bg-foreground rounded-lg">
            <div className="grid grid-cols-5 py-2 px-2 gap-1">
              <span className="w-10 h-8 border border-borderLight dark:border-border bg-green-500  rounded-md text-[#ededed] flex justify-center items-center">
                1
              </span>
              <span className="w-10 h-8 border border-borderLight dark:border-border bg-orange-500 rounded-md text-[#ededed] flex justify-center items-center">
                2
              </span>
              <span className="w-10 h-8 border border-borderLight dark:border-border bg-orange-500 rounded-md text-[#ededed] flex justify-center items-center">
                3
              </span>
              <span className="w-10 h-8 border border-borderLight dark:border-border bg-green-500 rounded-md text-[#ededed] flex justify-center items-center">
                4
              </span>
              <span className="w-10 h-8 border border-borderLight dark:border-border bg-green-500 rounded-md text-[#ededed] flex justify-center items-center">
                5
              </span>
              <span className="w-10 h-8 border border-borderLight dark:border-border bg-white text-black rounded-md  flex justify-center items-center">
                6
              </span>
              <span className="w-10 h-8 border border-borderLight dark:border-border bg-yellow-500 rounded-md text-[#ededed] flex justify-center items-center">
                7
              </span>
              <span className="w-10 h-8 border border-borderLight dark:border-border bg-red-600 rounded-md text-[#ededed] flex justify-center items-center">
                8
              </span>
              <span className="w-10 h-8 border border-borderLight dark:border-border   rounded-md text-[#ededed] flex justify-center items-center p-[0.8px] ">
                <span className="bg-[#115e5d] w-full rounded-[4.8px] h-full flex justify-center items-center">
                  9
                </span>
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="flex flex-col py-3 px-3 gap-y-2">
              <button
                onClick={toggleInstructionDialog}
                className="dark:bg-accent  text-dark dark:text-light font-medium border border-borderLight dark:border-border py-2 px-6 rounded-xl"
              >
                <span className="w-full text-sm sm:text-md md:text-md lg:text-lg">
                  Instructions
                </span>
              </button>
              <button
                onClick={toggleSubmitDialog}
                className="  text-white  bg-dark/60 dark:bg-foreground  font-medium border border-borderLight dark:border-border py-2 px-6 rounded-xl"
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
    </aside>
  );
};

export default MySideBar;
