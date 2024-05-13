import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoIosHeart } from "react-icons/io";

const CategoryCard = ({ post }) => {


  const slug = post.title.split(" ").join("");

  return (
    <div
      key={post.id}
      className="flex shadow-sm relative flex-col mb-4 rounded-3xl border  py-3 px-2 bg-white overflow-hidden "
    >
      <div className="absolute rotate-90 -left-60 -z-8 top-1/2 opacity-35">
        <svg
          width="884"
          height="440"
          viewBox="0 0 884 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500.56 1000.56C776.702 1000.56 1000.56 776.702 1000.56 500.56C1000.56 224.418 776.702 0.560001 500.56 0.560001C224.418 0.560001 0.560001 224.418 0.560001 500.56C0.560001 776.702 224.418 1000.56 500.56 1000.56Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 974.42C762.266 974.42 974.42 762.266 974.42 500.56C974.42 238.854 762.266 26.7 500.56 26.7C238.854 26.7 26.7 238.854 26.7 500.56C26.7 762.266 238.854 974.42 500.56 974.42Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 948.27C747.823 948.27 948.27 747.823 948.27 500.56C948.27 253.297 747.823 52.85 500.56 52.85C253.297 52.85 52.85 253.297 52.85 500.56C52.85 747.823 253.297 948.27 500.56 948.27Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 922.13C733.387 922.13 922.13 733.387 922.13 500.56C922.13 267.733 733.387 78.99 500.56 78.99C267.733 78.99 78.99 267.733 78.99 500.56C78.99 733.387 267.733 922.13 500.56 922.13Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 895.98C718.944 895.98 895.98 718.944 895.98 500.56C895.98 282.176 718.944 105.14 500.56 105.14C282.176 105.14 105.14 282.176 105.14 500.56C105.14 718.944 282.176 895.98 500.56 895.98Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 869.84C704.508 869.84 869.84 704.508 869.84 500.56C869.84 296.612 704.508 131.28 500.56 131.28C296.612 131.28 131.28 296.612 131.28 500.56C131.28 704.508 296.612 869.84 500.56 869.84Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 843.7C690.071 843.7 843.7 690.071 843.7 500.56C843.7 311.049 690.071 157.42 500.56 157.42C311.049 157.42 157.42 311.049 157.42 500.56C157.42 690.071 311.049 843.7 500.56 843.7Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 817.55C675.629 817.55 817.55 675.629 817.55 500.56C817.55 325.491 675.629 183.57 500.56 183.57C325.491 183.57 183.57 325.491 183.57 500.56C183.57 675.629 325.491 817.55 500.56 817.55Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 791.41C661.192 791.41 791.41 661.192 791.41 500.56C791.41 339.928 661.192 209.71 500.56 209.71C339.928 209.71 209.71 339.928 209.71 500.56C209.71 661.192 339.928 791.41 500.56 791.41Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 765.27C646.755 765.27 765.27 646.755 765.27 500.56C765.27 354.365 646.755 235.85 500.56 235.85C354.365 235.85 235.85 354.365 235.85 500.56C235.85 646.755 354.365 765.27 500.56 765.27Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 739.12C632.313 739.12 739.12 632.313 739.12 500.56C739.12 368.807 632.313 262 500.56 262C368.807 262 262 368.807 262 500.56C262 632.313 368.807 739.12 500.56 739.12Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 712.98C617.876 712.98 712.98 617.876 712.98 500.56C712.98 383.244 617.876 288.14 500.56 288.14C383.244 288.14 288.14 383.244 288.14 500.56C288.14 617.876 383.244 712.98 500.56 712.98Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 686.83C603.434 686.83 686.83 603.434 686.83 500.56C686.83 397.686 603.434 314.29 500.56 314.29C397.686 314.29 314.29 397.686 314.29 500.56C314.29 603.434 397.686 686.83 500.56 686.83Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 660.69C588.997 660.69 660.69 588.997 660.69 500.56C660.69 412.123 588.997 340.43 500.56 340.43C412.123 340.43 340.43 412.123 340.43 500.56C340.43 588.997 412.123 660.69 500.56 660.69Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 634.55C574.561 634.55 634.55 574.561 634.55 500.56C634.55 426.559 574.561 366.57 500.56 366.57C426.559 366.57 366.57 426.559 366.57 500.56C366.57 574.561 426.559 634.55 500.56 634.55Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 608.4C560.118 608.4 608.4 560.118 608.4 500.56C608.4 441.002 560.118 392.72 500.56 392.72C441.002 392.72 392.72 441.002 392.72 500.56C392.72 560.118 441.002 608.4 500.56 608.4Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
          <path
            d="M500.56 582.26C545.682 582.26 582.26 545.682 582.26 500.56C582.26 455.438 545.682 418.86 500.56 418.86C455.438 418.86 418.86 455.438 418.86 500.56C418.86 545.682 455.438 582.26 500.56 582.26Z"
            stroke="#ededed"
            stroke-width="2.5"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
      <div className="aspect-video bg-black rounded-2xl border shadow-sm overflow-hidden relative">
        <Image
          src={post.img}
          alt={post.title}
          layout="fill"
          lazy
          className="object-center object-cover rounded-lg transition-all duration-150 ease-out"
        />
      </div>
      <div className=" rounded-lg text-black py-2 px-4 z-10">
        <h3 className="text-lg font-bold mb-1">{post.title}</h3>
        <h5 className="text-sm mb-1">{post.subTitle}</h5>
        <div className="flex justify-between text-xs">
          <div>
            Test attempts:{" "}
            <span className="font-semibold">{post.TestAttempts}</span>{" "}
          </div>
          <div>
            Ranked youth:{" "}
            <span className="font-semibold"> {post.rankedYouth}</span>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <Link href={`/testpage/${slug}/${post.id}`}>
            <button className="bg-black text-white h-8 font-medium border border-gray-400 py-2 px-2 rounded-lg flex items-center justify-center w-full">
              <span className="text-sm">view all</span>
            </button>
          </Link>
          <button className="bg-white h-8 font-medium border group border-gray-400 py-2 px-2 rounded-lg flex items-center justify-center ml-2 ">
            <IoIosHeart
              className="group-hover:scale-125 group-hover:text-[#fd7c22] text-[#fff0] transition duration-200 in-elastic"
              stroke="#fd7c22"
              strokeWidth={50}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
