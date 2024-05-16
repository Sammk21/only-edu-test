import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import TestSummaryDialog from "@/modules/test-start/dialogs/test-summary";

const SubmitTestDialog = ({ isOpen, toggle }) => {
  const [showSummary, setShowSummary] = useState(false);

  const handleYesClick = () => {
    setShowSummary(true); // Show the TestSummaryDialog
  };

  const handleClose = () => {
    setShowSummary(false); // Close the TestSummaryDialog
    toggle(); // Close the SubmitTestDialog
  };

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
<<<<<<< HEAD
          className="fixed inset-0 overflow-y-auto"
          onClose={toggle}
        >
          <div className="flex items-center justify-center min-h-screen">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogPanel className="fixed inset-0">
                <div className="flex items-center justify-center min-h-screen ">
                  <DialogPanel
                    as="div"
                    className="fixed inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center"
                  >
                    <TransitionChild
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <DialogPanel className=" w-full max-w-md rounded-xl bg-[#115e5d] p-6 backdrop-blur-2xl opacity-100 transform-[scale(100%)]">
                        <DialogTitle className="text-base/7 font-medium text-white">
                          Are you sure you want to submit the test?
                        </DialogTitle>
                        <div className="mt-4 flex justify-between">
                          <Button
                            className="inline-flex items-center gap-2 rounded-md bg-[#115e5d] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white-4 py-2  text-white rounded  focus:outline-none focus:ring focus:ring-blue-200"
                            onClick={handleYesClick}
                          >
                            Yes
                          </Button>
                          <Button
                            className="inline-flex items-center gap-2 rounded-md bg-[#d91111] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
                            onClick={toggle}
                          >
                            No
                          </Button>
                        </div>
                      </DialogPanel>
                    </TransitionChild>
                  </DialogPanel>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
      {showSummary && (
        <TestSummaryDialog isOpen={showSummary} toggle={handleClose} />
      )}
=======
          className="relative z-10 focus:outline-none"
          onClose={toggle}
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
                    className="text-base/7 font-medium text-white"
                  >
                    Are you sure you want to submit the test?
                  </DialogTitle>

                  <div className="mt-4 flex justify-between">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-[#115e5d] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={toggle}
                    >
                      Yes
                    </Button>
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-[#d91111] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={toggle}
                    >
                      No
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-dark/50"></div>
>>>>>>> 0c2e5f6b397a573ded7ab90d85f3482bfa717022
    </>
  );
};

export default SubmitTestDialog;
