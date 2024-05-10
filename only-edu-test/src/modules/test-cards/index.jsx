import React from "react";
import { FaTrophy } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import InstructionDialog from "../test-start/general-instruction-dialog";
import InstructionDialogTestLink from "../test-start/general-instruction-dialog";
import Image from "next/image";
import { IoMdBookmark } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

const TestCards = () => {
  return (
    <>
      <div className="flex flex-col mb-4 rounded-3xl border-[2px] border-[#115e5d]  p-1 bg-white ">
        <div className="aspect-video bg-[#115e5d] rounded-2xl border shadow-md overflow-hidden relative">
          <Image
            src="https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149236239.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710374400&semt=ais"
            alt="image"
            layout="fill"
            className="object-center object-cover rounded-lg transition-all duration-150 ease-out"
          />
        </div>
        <div className=" rounded-lg text-[#115e5d] py-2 px-4">
          <h3 className="text-lg font-medium mb-1">React</h3>
          <h5 className="text-sm mb-1">Basic fundamental</h5>
          <div className="flex justify-between text-xs">
            <div>
              Questions attempt: <span className="text-slate-500">97k+</span>
            </div>
            <div>
              Test Time: <span class="text-slate-500">15 min</span>
            </div>
            <div>
              Ranked youth: <span className="text-slate-500">50k+</span>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <InstructionDialogTestLink />
            <button className="bg-white h-8 group font-medium border group border-gray-400 text-[#fff0] py-2 px-2 rounded-lg flex items-center justify-center ml-2 ">
              <span className="w-full group-hover:scale-125 group-hover:text-[#fd7c22] transition duration-200 ease-in-out">
                <IoMdBookmark stroke="#fd7c22" strokeWidth={40} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCards;
