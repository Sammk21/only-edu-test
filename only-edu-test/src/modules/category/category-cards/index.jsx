import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IoIosHeart } from "react-icons/io";

const CategoryCard = ({ post }) => {


  const slug = post.title.split(" ").join("");

  return (
    <div
      key={post.id}
      className="flex flex-col mb-4 rounded-3xl border-[2px] border-[#115e5d]  p-1 bg-white "
    >
      <div className="aspect-video bg-[#115e5d] rounded-2xl border shadow-md overflow-hidden relative">
        <Image
          src={post.img}
          alt={post.title}
          layout="fill"
          className="object-center object-cover rounded-lg transition-all duration-150 ease-out"
        />
      </div>
      <div className=" rounded-lg text-[#115e5d] py-2 px-4">
        <h3 className="text-lg font-medium mb-1">{post.title}</h3>
        <h5 className="text-sm mb-1">{post.subTitle}</h5>
        <div className="flex justify-between text-xs">
          <div>Test attempts: {post.TestAttempts}</div>
          <div>Ranked youth: {post.rankedYouth}</div>
        </div>
        <div className="flex justify-between mt-3">
          <Link href={`/testpage/${slug}/${post.id}`}>
            <button className="bg-[#115e5d] text-white h-8 font-medium border border-gray-400 py-2 px-2 rounded-lg flex items-center justify-center w-full">
              View All
            </button>
          </Link>
          <button className="bg-white h-8 font-medium border group border-gray-400 py-2 px-2 rounded-lg flex items-center justify-center ml-2 ">
            <IoIosHeart
              className="group-hover:scale-125 group-hover:text-[#fd7c22] text-[#fff0] transition duration-200 ease-in-out"
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
