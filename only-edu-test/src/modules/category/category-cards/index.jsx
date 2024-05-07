import Link from "next/link";
import React from "react";
import { PiArrowBendRightDownBold } from "react-icons/pi";

const CategoryCard = () => {
  return (
    <div>
      <div className="aspect-auto bg-[#f2f0f0] rounded-2xl border shadow-sm py-5 sm:px-5 px-3 grid  h-fit">
        <div className="flex justify-between aspect-auto flex-col sm:flex-row">
          <div className="flex">
            <div className="p-4 border rounded-md">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_40_20)">
                  <path
                    d="M23.244 49.48C23.244 49.48 20.784 50.976 24.954 51.404C29.974 52.044 32.648 51.938 38.204 50.87C39.3207 51.5538 40.5016 52.1266 41.73 52.58C29.23 57.924 13.412 52.26 23.244 49.48ZM21.644 42.534C21.644 42.534 18.972 44.564 23.14 44.994C28.59 45.528 32.864 45.634 40.24 44.14C40.9574 44.8675 41.8356 45.4163 42.804 45.742C27.736 50.23 10.852 46.168 21.644 42.534ZM51.138 54.714C51.138 54.714 52.954 56.21 49.108 57.386C41.948 59.526 19.08 60.166 12.668 57.386C10.424 56.426 14.698 55.036 16.068 54.822C17.458 54.502 18.208 54.502 18.208 54.502C15.748 52.792 1.85802 58.028 11.156 59.522C36.696 63.69 57.748 57.706 51.122 54.714H51.138ZM24.4 35.266C24.4 35.266 12.752 38.046 20.232 39.006C23.438 39.434 29.742 39.326 35.62 38.9C40.428 38.472 45.24 37.62 45.24 37.62C45.24 37.62 43.53 38.368 42.354 39.116C30.494 42.216 7.73002 40.826 14.25 37.62C19.806 34.948 24.402 35.27 24.402 35.27L24.4 35.266ZM45.24 46.914C57.208 40.714 51.652 34.734 47.804 35.48C46.844 35.694 46.414 35.908 46.414 35.908C46.414 35.908 46.734 35.268 47.482 35.054C55.07 32.382 61.054 43.068 45.022 47.234C45.022 47.234 45.128 47.128 45.236 46.914H45.24ZM25.58 63.798C37.12 64.546 54.754 63.37 55.18 57.918C55.18 57.918 54.326 60.058 45.67 61.658C35.838 63.474 23.656 63.258 16.496 62.086C16.496 62.086 17.992 63.368 25.58 63.798Z"
                    fill="#4E7896"
                  />
                  <path
                    d="M37.992 0.00201416C37.992 0.00201416 44.618 6.73401 31.688 16.886C21.322 25.114 29.338 29.816 31.688 35.16C25.596 29.71 21.216 24.9 24.208 20.414C28.588 13.786 40.664 10.6 37.992 0.00201416ZM34.592 30.672C37.692 34.198 33.738 37.404 33.738 37.404C33.738 37.404 41.646 33.344 38.012 28.32C34.7 23.512 32.132 21.16 46.026 13.146C46.026 13.146 24.12 18.596 34.592 30.672Z"
                    fill="#F58219"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_40_20">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="py-2 ml-2 font-medium flex flex-col text-[#115e5d]">
              <h5>Engneering</h5>
              <h5 className="text-xs text-slate-500">
                <span>Software and programming</span>
              </h5>
              <h5 className="text-xs  mt-2">
                Test attempts: <span className="text-slate-500">97k+</span>
              </h5>
              <h5 className="text-xs ">
                Ranked youth: <span className="text-slate-500">50k+</span>
              </h5>
            </div>
          </div>
          <div className="flex mt-4 text-xs justify-center items-center gap-x-2 hidden sm:block">
            <span className="font-medium text-xs mr-2 text-gray-500">
              34 more..
            </span>
            <button className="bg-[#fd7c22] text-[#ededed] font-medium border border-gray-400 py-2 px-2 rounded-full h-fit">
              <Link href={"/testpage/1"}>
                <span className="w-full">View all</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="pt-4">
          <span className="text-xs text-gray-500 font-semibold flex items-center gap-x-2">
            Quick start{" "}
            <span>
              <PiArrowBendRightDownBold />
            </span>
          </span>
          <div className="options pt-2 flex flex-wrap aspect-auto gap-y-2 gap-x-1 text-[#11535d]">
            <button className="px-3 py-1 max-w-fit h-8  text-xs rounded-full font-semibold hover:shadow-sm cursor-pointer border bg-gray-200 hover:bg-gray-200/70  ">
              Mechanical engnieering
            </button>
            <button className="px-3 py-1  max-w-fit h-8 text-xs rounded-full font-semibold hover:shadow-sm cursor-pointer border bg-gray-200  hover:bg-gray-200/70 ">
              Electronic engneering
            </button>
            <button className="px-3 py-1 max-w-fit h-8 text-xs rounded-full font-semibold hover:shadow-sm cursor-pointer border bg-gray-200 hover:bg-gray-200/70 ">
              Aricraft engineering
            </button>
            <button className="px-3 py-1 max-w-fit h-8 text-xs rounded-full font-semibold hover:shadow-sm cursor-pointer border bg-gray-200 hover:bg-gray-200/70 ">
              Software engineering
            </button>
          </div>
        </div>
        <div className="flex mt-4 text-xs justify-center items-center gap-x-2 block sm:hidden">
          <span className="font-medium text-xs text-gray-500 mr-2">
            34 more..
          </span>
          <button className="bg-[#fd7c22] text-white font-medium border border-gray-400 py-2 px-2 rounded-full h-fit">
            <span className="w-full">View all</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;