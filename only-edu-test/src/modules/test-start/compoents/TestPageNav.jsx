import React from "react";
import Link from "next/link";
import Image from "next/image";

const TestPageNav = () => {
  return (
    <div className="flex  justify-between items-center font-semibold ">
      <Link href="/">
        <span className="text-lg">Only edu</span>
      </Link>
      <div className="flex gap-x-3 items-center ">
        <span className="h-11 w-11 bg-gray-500 rounded-full relative">
          <Image
            src="https://i.ibb.co/4820235/Whats-App-Image-2024-05-09-at-12-57-45-PM.jpg"
            fill
            className="object-cover object-center rounded-full"
          />
        </span>
        <div className="flex flex-col font-medium text-xs sm:text-sm">
          <span>Sarfraj sayyad</span>
          <span className="underline ">sarfraj@onlyEdu.com</span>
        </div>
      </div>
    </div>
  );
};

export default TestPageNav;
