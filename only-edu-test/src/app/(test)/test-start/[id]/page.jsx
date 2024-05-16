"use client";
import TestLayout from "@/modules/test-start/test-page-layout";
import TestPageNav from "@/modules/test-start/compoents/TestPageNav";
import MyTestPage from "@/modules/test-start/compoents/MyTestPage";
const TestStartPage = () => {
  return (
    <>
      <TestLayout>
        <div>
          <TestPageNav />
        </div>
        <div className="">
          <MyTestPage />
        </div>
      </TestLayout>
    </>
  );
};

export default TestStartPage;

//  <div className="w-[100vw] overflow-hidden h-[100vh] flex flex-col px-2 py-3 sm:p-6  lg:p-8">
//    <div className="flex  justify-between items-center font-semibold text-[#115e5d]">
//      <Link href="/">
//        <span className="text-lg">Only edu</span>
//      </Link>
//      <div className="flex gap-x-3 items-center ">
//        <span className="h-11 w-11 bg-gray-500 rounded-full relative">
//          <Image
//            src="https://i.ibb.co/4820235/Whats-App-Image-2024-05-09-at-12-57-45-PM.jpg"
//            fill
//            className="object-cover object-center rounded-full"
//          />
//        </span>
//        <div className="flex flex-col font-medium text-xs sm:text-sm">
//          <span>Sarfraj sayyad</span>
//          <span className="underline ">sarfraj@onlyEdu.com</span>
//        </div>
//      </div>
//    </div>
//    <div className="h-full w-full flex justify-center items-center my-9">
//      <div className="bg-[#f5f5f5] h-full  w-full  lg:w-[calc(100%_-_6rem)] rounded-3xl shadow-lg p-4 sm:py-6  lg:py-16 lg:px-10 flex flex-col">
//        <div className="w-full flex justify-between items-center ">
//          <div className="flex gap-x-6">
//            <div className="clock text-5xl flex  items-center gap-x-3 text-[#115e5d]">
//              <SlClock />
//              <div className="timimg flex flex-col">
//                <span className="sm:text-sm text-xs ">Time remaining</span>
//                <span className="sm:text-lg text-sm font-medium">
//                  00 : 04 : 58
//                </span>
//              </div>
//            </div>
//            <div className="timimg flex flex-col justify-center items-center">
//              <span className="sm:text-sm text-xs ">Marks</span>
//              <span className="sm:text-lg text-xs font-medium text-green-500">
//                +2 / <span className="text-red-500"> -0</span>
//              </span>
//            </div>
//          </div>
//          <div className="button">
//            <button
//              onClick={toggleSubmitDialog}
//              className="bg-[#fd7c22] text-white font-medium border py-2 px-6 rounded-xl"
//            >
//              <span className="w-full text-sm sm:text-md md:text-md lg:text-lg">
//                Submit
//              </span>
//            </button>
//          </div>
//        </div>
//        <div className="mt-14 flex flex-col-reverse sm:flex-row text-black">
//          <div className="flex flex-col lg:w-[70%]">
//            <div className="my-4">
//              <h4 className="question mb-5  text-sm font-medium  ">
//                Question 1 of 20
//              </h4>
//              <h3 className="mt-1 text-base sm:text-lg">
//                Which of the following programing language for developing
//                multimedia pages?
//              </h3>
//            </div>
//            <div className="options grid grid-cols-2 gap-3 mt-6">
//              {options.map((option, index) => (
//                <label
//                  key={index}
//                  className="option flex items-center text-sm sm:text-md md:text-md lg:text-lg"
//                >
//                  <input
//                    type="radio"
//                    value={option}
//                    checked={selectedOption === option}
//                    onChange={() => setSelectedOption(option)}
//                    className="sr-only" // Hide the default radio button
//                  />
//                  <div
//                    className={`border border-gray-300 rounded-lg px-4 py-2 cursor-pointer w-full ${
//                      selectedOption === option ? "bg-[#115e5d] text-white" : ""
//                    }`}
//                  >
//                    <span className="option-identifier mr-2 ">
//                      {String.fromCharCode(65 + index)}.{" "}
//                    </span>{" "}
//                    {/* Option identifier */}
//                    {option}
//                  </div>
//                </label>
//              ))}
//            </div>
//          </div>
//          <div className="h-full lg:w-[30%]">
//            <div className=" w-full flex justify-center items-center flex-col">
//              {/* Render your quiz content here */}

//              <span className="text-sm">Questions attempted</span>

//              {/* Circular progress bar */}
//              <svg className="flex h-42 w-42 sm:h-52 sm:w-52 md:h-62 md:w-62 lg:h-72 lg:w-72  items-start">
//                <circle
//                  cx="50%"
//                  cy="50%"
//                  r={radius}
//                  fill="none"
//                  stroke="#ddd"
//                  strokeWidth="17"
//                />
//                <circle
//                  cx="50%"
//                  cy="50%"
//                  r={radius}
//                  fill="none"
//                  stroke="#115e5d"
//                  strokeWidth="17"
//                  strokeDasharray={circumference}
//                  strokeDashoffset={strokeDashoffset}
//                  strokeLinecap="round"
//                  transform="rotate(-90 50% 50%)"
//                />
//                <text
//                  x="50%"
//                  y="50%"
//                  textAnchor="middle"
//                  fill="#115e5d"
//                  fontSize="30"
//                  fontWeight={600}
//                  dominantBaseline="middle"
//                >
//                  {currentPage}/{totalQuestions}
//                </text>
//              </svg>
//            </div>
//          </div>
//        </div>
//        <div className="flex sm:gap-x-3 sm:justify-start my-8 xs:justify-between flex-col sm:flex-row gap-y-3">
//          <div className=" flex justify-between gap-x-3">
//            <button className="bg-[#ededed] text-[#115e5d] font-medium border py-2 px-6 rounded-xl ">
//              <span className="w-full text-xs sm:text-sm md:text-base lg:text-md ">
//                Clear response
//              </span>
//            </button>
//            <button className="bg-[] text-[#115e5d] font-medium border py-2 px-6 rounded-xl">
//              <span className="w-full text-xs sm:text-sm md:text-base lg:text-md">
//                Mark for review & next
//              </span>
//            </button>
//          </div>
//          <button className=" bg-[#115e5d] font-medium border py-2 px-6 rounded-xl text-white max-w-xl">
//            <span className="w-full text-xs sm:text-sm md:text-base lg:text-md">
//              Save & Next
//            </span>
//          </button>
//        </div>
//      </div>
//    </div>
//    
//  </div>;
//  {
//    isinstructionDialogOpen && (
//      <InstructionTestPage
//        isOpen={isinstructionDialogOpen}
//        toggle={toggleInstructionDialog}
//      />
//    );
//  }
//  {
//    isSubmitting && (
//      <SubmitTestDialog isOpen={isSubmitting} toggle={toggleSubmitDialog} />
//    );
//  }