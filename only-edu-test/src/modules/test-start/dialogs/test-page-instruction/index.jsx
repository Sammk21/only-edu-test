import { BsPencilSquare } from "react-icons/bs";
import { MdOutlinePending } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

const InstructionTestPage = ({ isOpen, toggle }) => {
  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
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
                <DialogPanel className="w-full max-w-md text-light rounded-xl p-6 backdrop-blur-3xl dark:bg-list  border border-borderLight dark:border-border">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
                    Instruction
                  </DialogTitle>
                  <div className="text-white text-xs py-8 gap-y-3 flex flex-col ">
                    <div className="flex gap-x-3 items-center">
                      <span className="h-5 w-5 rounded-full bg-attempted flex justify-center items-center p-1">
                        <FaCheck />
                      </span>
                      <span>You have answered the question.</span>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <span className="rounded-full bg-visited h-5 w-5 flex justify-center items-center">
                        <RxCross2 />
                      </span>
                      <span>
                        You have visited but not answered the question yet..
                      </span>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <span className="h-5 w-5 flex justify-center items-center rounded-full bg-marked">
                        <BsPencilSquare />
                      </span>
                      <span>
                        You have not answered the question but have marked for
                        review
                      </span>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <span className="h-5 w-5 flex justify-center items-center rounded-full bg-MarkAnswered">
                        <BsPencilSquare />
                      </span>
                      <span>
                        You have answered the question but have marked for
                        review
                      </span>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <span className="h-5 w-5 rounded-full bg-notVisited flex justify-center items-center text-black">
                        <MdOutlinePending />
                      </span>
                      <span>You have Not visited the question yet</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-[#fd7c22] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={toggle}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-sm bg-dark/50"></div>
    </>
  );
};

export default InstructionTestPage;
