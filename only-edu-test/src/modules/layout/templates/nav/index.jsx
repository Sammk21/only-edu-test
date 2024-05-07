"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/util/cn";
import Link from "next/link";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.3) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <div className="w-full absolute top-0 left-0 bg-[#115e5d] h-24 border-b rounded-b-3xl shadow-md">
        <div className="flex max-w-[calc(100vw_-_3rem)]  mx-auto  bg-[#115e5d] z-[5000] pl-8 py-5 h-full  pr-5 justify-end items-center">
          <div className="absolute top-1/2 left-5 -translate-y-1/2">
            <div className="justify-center items-center flex gap-x-3">
              <svg
                width="40"
                height="50"
                viewBox="0 0 300 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.5"
                  y="2.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect
                  x="2.5"
                  y="102.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect
                  x="102.5"
                  y="202.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect y="297" width="100" height="100" fill="white" />
                <rect
                  x="102.5"
                  y="2.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect
                  x="202.5"
                  y="102.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect
                  x="202.5"
                  y="202.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
              </svg>
              <h4 className="font-semibold text-white">Only edu</h4>
            </div>
          </div>
          <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-6">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative  items-center flex space-x-1 text-white"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
          <div className="gap-x-2 flex">
            <button className=" border-[0.3px] text-sm font-medium relative text-white bg-[#fd7c22]  px-4 py-2 rounded-full">
              <span>Login</span>
            </button>
            <button className=" border-[0.3px] text-sm font-medium relative text-white px-4 py-2 rounded-full">
              <span>Register</span>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-[calc(100vw_-_3rem)] fixed top-4 inset-x-0 mx-auto  rounded-full bg-[#115e5d] border-[0.3px] shadow-sm z-[5000] pl-8 py-5  items-center justify-between space-x-4 pr-5",
            className
          )}
        >
          <div>
            <div className="justify-center items-center flex gap-x-3">
              <svg
                width="40"
                height="50"
                viewBox="0 0 300 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.5"
                  y="2.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect
                  x="2.5"
                  y="102.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect
                  x="102.5"
                  y="202.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect y="297" width="100" height="100" fill="white" />
                <rect
                  x="102.5"
                  y="2.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect
                  x="202.5"
                  y="102.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
                <rect
                  x="202.5"
                  y="202.5"
                  width="95"
                  height="95"
                  fill="white"
                  stroke="white"
                  stroke-width="5"
                />
              </svg>
              <h4 className="font-semibold text-white">Only edu</h4>
            </div>
          </div>
          <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-6">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative  items-center flex space-x-1 text-white"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
          <div className="gap-x-2 flex">
            <button className=" border-[0.3px] text-sm font-medium relative text-white bg-[#fd7c22]  px-4 py-2 rounded-full">
              <span>Login</span>
            </button>
            <button className=" border-[0.3px] text-sm font-medium relative text-white px-4 py-2 rounded-full">
              <span>Register</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
