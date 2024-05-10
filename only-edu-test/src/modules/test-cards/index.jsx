import React from "react";
import Image from "next/image";
import { IoMdBookmark } from "react-icons/io";
import InstructionDialogTestLink from "../test-start/dialogs/general-instruction-dialog";

const TestCards = ({ test }) => {
  return (
    <>
      <div className="flex flex-col mb-4 rounded-3xl border-[2px] border-[#115e5d]  p-1 bg-white ">
        <div className="aspect-video bg-[#115e5d] rounded-2xl border shadow-md overflow-hidden relative">
          <Image
            src="https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/reactnative1200x6302x.png?as=0&iar=0&w=1200&rev=4085f8d10d2b4369b6d06ce15ce30e9b&hash=F7C985E466B4FDD9A05ACAEA99D450A0"
            alt="image"
            layout="fill"
            className="object-center object-cover rounded-lg transition-all duration-150 ease-out"
          />
        </div>
        <div className=" rounded-lg text-[#115e5d] py-2 px-4">
          <h3 className="text-lg font-medium mb-1">{test.name}</h3>
          <h5 className="text-sm mb-1">{test.subTitle}</h5>
          <div className="flex justify-between text-xs">
            <div>
              Questions attempt: <span className="text-slate-500">97k+</span>
            </div>
            <div>
              Test Time: <span class="text-slate-500">{test.TestTime}</span>
            </div>
            <div>
              Ranked youth:{" "}
              <span className="text-slate-500">{test.rankedYouth}</span>
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
