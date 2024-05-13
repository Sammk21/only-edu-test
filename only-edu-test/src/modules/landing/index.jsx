import React from "react";
import { HeroBackgroundSvg } from "./svg/svg";

const LandingPage = () => {
  return (
    <div className="w-screen sm:h-3/4 lg:h-screen text-black relative">
      <div className="flex justify-center items-center ">
        <div className=" opacity-10 "></div>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden z-10">
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl p-4 text-center font-bold">
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #222831, #76ABAE, #31363F)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Welcome to only education
              </span>
            </h1>
            <p className="mt-4 font-normal text-base text-black max-w-lg text-center mx-auto">
              Spotlight effect is a great way to draw attention to a specific
              part of the page. Here, we are drawing the attention towards the
              text section of the page. I don&apos;t know why but I&apos;m
              running out of copy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
