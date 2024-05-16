import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoIosHeart } from "react-icons/io";

const CategoryCard = ({ post }) => {
  const slug = post.title.split(" ").join("");

  return (
    <div
      key={post.id}
      className="flex flex-col mb-4 rounded-3xl border border-borderLight dark:border-border  p-1 bg-white "
    >
      <div className="aspect-video bg-dark rounded-[20px] text-dark dark:text-light  border border-borderLight dark:border-border shadow-md overflow-hidden relative">
        <Image
          src={post.img}
          alt={post.title}
          layout="fill"
          lazy
          className="object-center object-cover rounded-lg transition-all duration-150 ease-out"
        />
      </div>
      <div className=" rounded-lg text-black dark:text-light py-2 px-4 z-10">
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
            <Button className="relative dark:bg-foreground text-light bg-dark z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
              View all
            </Button>
          </Link>
          <button className="bg-white dark:bg-dark h-8 font-medium  group border  border-borderLight dark:border-border  py-2 px-2 rounded-lg flex items-center justify-center ml-2 ">
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
