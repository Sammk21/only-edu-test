"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const LoginTemplate = () => {
  return (
    <div className="py-7 flex justify-center">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-sm w-96 rounded-xl bg-clip-border">
        <div className="flex flex-col gap-4 p-6">
          <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-24 place-items-center rounded-xl bg-[#115E5D] bg-clip-border shadow-gray-900/20">
            <h3 className="block  text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
              Log In
            </h3>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="w-full h-full px-3 py-3  text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200  text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#115e5d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#115e5d] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#115e5d] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#115e5d] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#115e5d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
            <MdOutlineEmail className="absolute top-3 right-2 text-[#115e5d] formIcons" />
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="w-full h-full px-3 py-3  text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200  text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#115e5d] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-[#115e5d] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#115e5d] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#115e5d] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#115e5d] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
            <IoLockClosedOutline className="absolute top-4 right-2 text-[#115e5d] formIcons" />
          </div>
          <div className="-ml-2.5 text-start">
            <div className="inline-flex items-center">
              <label
                htmlFor="checkbox"
                className="relative flex items-center p-3 rounded-full cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#115e5d] checked:bg-[#115e5d] checked:before:bg-[#115e5d] hover:before:opacity-10"
                  id="checkbox"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-[#115e5d] cursor-pointer select-none"
                htmlFor="checkbox"
              >
                Remember Me
              </label>
            </div>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-[#115E5D] py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-sm shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Log In
          </button>
          <Link
            href="/auth/register"
            className="block ml-1  text-sm antialiased font-bold leading-normal  text-[#fd7c22]"
          >
            <p className="flex justify-center mt-6  text-sm antialiased font-light leading-normal text-[#115e5d]">
              Don't have an account? Register
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
