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
import MenuToggle from "./menu-toggle/MenuToggle";
import MobileMenu from "./mobile-menu";
import { cubicBezier } from "framer-motion";
import ThemeSwitch from "@/modules/theme-switch/ThemeSwitch";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const inOutExpo = cubicBezier(0.87, 0, 0.13, 1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let scrollValue = Math.floor(current * 100) / 2;
      let direction = current - scrollYProgress.getPrevious();

      scrollValue > 4 && setVisible(false); // hide nav on certain amout of scroll
      direction < 0 && setVisible(true);
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          style={{ borderWidth: "0.1px" }}
          initial={{
            opacity: 1,
            y: -120,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.7,
            ease: inOutExpo,
          }}
          className={cn(
            "flex fixed top-0 inset-x-0 rounded-b-3xl bg-[#115e5d] dark:bg-transparent dark:backdrop-blur-md shadow-sm z-[5000] pl-8 py-5 border  border-borderLight dark:border-border  items-center justify-between space-x-4 pr-5",
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
                <h4 className="font-semibold text-light">Only edu</h4>
              </div>
            </Link>
          </div>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  hidden md:flex ">
            <div className="flex justify-center items-center gap-x-8">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative items-center flex space-x-1 text-light nav-links"
                  )}
                >
                  <span className="text-sm">{navItem.name}</span>
                </Link>
              ))}

              <Link
                href="/pricing"
                className={cn(
                  "relative items-center flex space-x-1 text-light nav-links "
                )}
              >
                <span className="text-sm">Pricing</span>
                <span className="absolute -left-4 -top-5 text-[8px] bg-light text-dark p-[3px] rounded-full border  border-borderLight dark:border-border">
                  Go Pro
                </span>
              </Link>
              <ThemeSwitch />
            </div>
          </div>
          <div className="md:hidden block z-[99] absolute right-5 top-5 ">
            <MenuToggle toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
          <div className="gap-x-2 hidden md:flex justify-center items-center ">
            <Link
              href={"/auth"}
              className="border  border-borderLight dark:border-border text-sm font-medium relative text-light   px-4 py-2 rounded-full"
            >
              <span>Login</span>
            </Link>
          </div>
          <div className="z-[98] md:hidden block">
            <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
