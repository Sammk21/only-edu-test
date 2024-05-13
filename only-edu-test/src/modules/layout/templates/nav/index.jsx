"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useCycle,
} from "framer-motion";
import { cn } from "@/util/cn";
import Link from "next/link";
import MenuToggle from "./menu-toggle/MenuToggle";
import MobileMenu from "./mobile-menu";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0) {
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
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -120,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex  fixed top-0 inset-x-0  rounded-b-3xl bg-[#115e5d] border-b-[0.3px] shadow-sm z-[5000] pl-8 py-5  items-center justify-between space-x-4 pr-5",
            className
          )}
        >
          <div>
            <Link href={"/"}>
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
            </Link>
          </div>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-8 hidden sm:flex ">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative items-center flex space-x-1 text-white nav-links"
                )}
              >
                <span className="text-sm">{navItem.name}</span>
              </Link>
            ))}
            <Link
              href="/pricing"
              className={cn(
                "relative items-center flex space-x-1 text-white nav-links "
              )}
            >
              <span className="text-sm">Pricing</span>
              <span className="absolute -left-4 -top-5 text-[8px] bg-white text-black p-[3px] rounded-full border">
                Go Pro
              </span>
            </Link>
          </div>
          <div className="sm:hidden block z-[99] absolute right-5 top-5 ">
            <MenuToggle toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
          <div className="gap-x-2 hidden sm:flex justify-center items-center ">
            <Link
              href={"/auth"}
              className=" border-[0.3px] text-sm font-medium relative text-white bg-[#fd7c22]  px-4 py-2 rounded-full"
            >
              <span>Login</span>
            </Link>
          </div>
          <div className="z-[98] sm:hidden block">
            <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
//  <div className="w-full absolute top-0 left-0 bg-[#115e5d] h-24 border-b rounded-b-3xl shadow-md z-[99]">
//    <div className="flex max-w-[calc(100vw_-_3rem)]  mx-auto  bg-[#115e5d] z-[5000] pl-8 py-5 h-full   sm:pr-5 justify-end items-center">
//      <Link href={"/"} className="absolute top-1/2 left-5 -translate-y-1/2">
//        <div className="justify-center items-center flex gap-x-3">
//          <svg
//            width="40"
//            height="50"
//            viewBox="0 0 300 400"
//            fill="none"
//            xmlns="http://www.w3.org/2000/svg"
//          >
//            <rect
//              x="2.5"
//              y="2.5"
//              width="95"
//              height="95"
//              fill="white"
//              stroke="white"
//              stroke-width="5"
//            />
//            <rect
//              x="2.5"
//              y="102.5"
//              width="95"
//              height="95"
//              fill="white"
//              stroke="white"
//              stroke-width="5"
//            />
//            <rect
//              x="102.5"
//              y="202.5"
//              width="95"
//              height="95"
//              fill="white"
//              stroke="white"
//              stroke-width="5"
//            />
//            <rect y="297" width="100" height="100" fill="white" />
//            <rect
//              x="102.5"
//              y="2.5"
//              width="95"
//              height="95"
//              fill="white"
//              stroke="white"
//              stroke-width="5"
//            />
//            <rect
//              x="202.5"
//              y="102.5"
//              width="95"
//              height="95"
//              fill="white"
//              stroke="white"
//              stroke-width="5"
//            />
//            <rect
//              x="202.5"
//              y="202.5"
//              width="95"
//              height="95"
//              fill="white"
//              stroke="white"
//              stroke-width="5"
//            />
//          </svg>
//          <h4 className="font-semibold text-white">Only edu</h4>
//        </div>
//      </Link>
//      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-6 hidden sm:flex justify-end">
//        {navItems.map((navItem, idx) => (
//          <Link
//            key={`link-${idx}`}
//            href={navItem.link}
//            className={cn(
//              "relative  items-center flex space-x-1 text-white  nav-links"
//            )}
//          >
//            {/* <span className="block sm:hidden">{navItem.icon}</span> */}
//            <span className=" text-sm ">{navItem.name}</span>
//          </Link>
//        ))}
//      </div>
//      <div className="sm:hidden block z-[101] ">
//        <MenuToggle toggleMenu={toggleMenu} isOpen={isOpen} />
//      </div>
//      <div className="z-[98] sm:hidden block">
//        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
//      </div>
//      <div className="gap-x-2 hidden sm:flex text-sm">
//        <Link
//          href={"/auth"}
//          className=" border-[0.3px] text-sm font-medium relative text-white bg-[#fd7c22]  px-4 py-2 rounded-full"
//        >
//          <span>Login</span>
//        </Link>
//      </div>
//    </div>
//  </div>;