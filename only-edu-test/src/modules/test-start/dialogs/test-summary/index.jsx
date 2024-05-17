import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
  Description,
} from "@headlessui/react";
import Link from "next/link";
import React from "react";
import MyReport from "@/app/(main)/testpage/report/[id]/page";

const TestSummaryDialog = ({ isOpen, toggle }) => {
  return (
    <div>
      <Transition appear show={isOpen}>
        <Dialog
          onClose={toggle}
          as="div"
          className="relative z-10 focus:outline-none"
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-[#115e5d] p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white text-center"
                  >
                    Test Summary
                  </DialogTitle>
                  <Description className="text-white text-center mt-2 text-xs">
                    Your answer have been saved successfully please take few
                    moments to review this summary
                  </Description>
                  <div>
                    <p className="text-sm font-medium text-white mt-4 flex justify-between items-center">
                      <span>No. of questions</span>
                      <span className="bg-[#ffffff] text-[#115e5d] font-medium rounded-lg py-2 w-20 text-center font-semibold">
                        70
                      </span>
                    </p>
                    <p className="text-sm font-medium text-white mt-4 flex justify-between items-center">
                      <span>Answered</span>
                      <span className="bg-[#ffffff] text-[#115e5d] font-medium rounded-lg py-2 w-20 text-center font-semibold">
                        0
                      </span>
                    </p>
                    <p className="text-sm font-medium text-white mt-4 flex justify-between items-center">
                      <span>Not Answered</span>
                      <span className="bg-[#ffffff] text-[#115e5d] font-medium rounded-lg py-2 w-20 text-center font-semibold">
                        70
                      </span>
                    </p>
                    <p className="text-sm font-medium text-white mt-4 flex justify-between items-center">
                      <span>Marked for review</span>
                      <span className="bg-[#ffffff] text-[#115e5d] font-medium rounded-lg py-2 w-20 text-center font-semibold">
                        0
                      </span>
                    </p>
                    <p className="text-sm font-medium text-white mt-4 flex justify-between items-center">
                      <span>Marked & Answered</span>
                      <span className="bg-[#ffffff] text-[#115e5d] font-medium rounded-lg py-2 w-20 text-center font-semibold">
                        0
                      </span>
                    </p>
                    <p className="text-sm font-medium text-white mt-4 flex justify-between items-center">
                      <span>Not visited</span>
                      <span className="bg-[#ffffff] text-[#115e5d] font-medium rounded-lg py-2 w-20 text-center font-semibold">
                        0
                      </span>
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Link
                      href="/testpage/report/2"
                      className="inline-flex items-center gap-2 rounded-md bg-[#FC7B22] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none  data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                      Proceed
                    </Link>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default TestSummaryDialog;
