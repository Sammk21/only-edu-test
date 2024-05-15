"use client";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlinePending } from "react-icons/md";

export default function InstructionDialogTestLink() {
  let [isOpen, setIsOpen] = useState(false);
  let [isChecked, setIsChecked] = useState(false);
  let [showInstructions, setShowInstructions] = useState(false);

  function open() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function close() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <Button
        onClick={open}
        className="bg-black text-white h-8 font-medium border border-gray-400 py-2 px-2 rounded-lg flex items-center justify-center w-full"
      >
        Start test
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
          __demoMode
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
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl shadow-md">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-black leading-tight"
                  >
                    General information
                  </DialogTitle>
                  <p className="mt-2 text-xs text-black">
                    Read the folllowing carefully
                  </p>
                  {!showInstructions && (
                    <>
                      <div class="relative overflow-x-scroll py-4">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                          <thead class="text-xs text-black uppercase border-y ">
                            <tr>
                              <th scope="col" class="px-6 py-3">
                                No. of Question
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Maximum Marks
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Negative Marks
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Positive Marks
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-transparent border-b  ">
                              <th
                                scope="row"
                                class="px-6 py-4 font-medium  whitespace-nowrap"
                              >
                                50
                              </th>
                              <td class="px-6 py-4">100</td>
                              <td class="px-6 py-4">0</td>
                              <td class="px-6 py-4">2</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className=" text-xs py-8">
                        <>
                          <li className="py-2">
                            {" "}
                            Total duration of the examination is 90 Min
                          </li>
                          <li className="py-2">
                            Your clock will be set at the server. The countdown
                            timer at the top right corner of screen will display
                            the remaining time available for you to complete the
                            examination. When the timer reaches zero, the
                            examination will end by itself. You need not
                            terminate the examination or submit your
                          </li>
                          <li className="py-2">
                            However, this exam will be conducted with sectional
                            timing. You need to complete a given section in the
                            mentioned time. You will not be able to proceed to
                            the next section unless you finish the current
                            section in its allotted time
                          </li>
                        </>
                      </div>
                      <div class="flex">
                        <div class="flex items-center h-5">
                          <input
                            id="helper-checkbox"
                            aria-describedby="helper-checkbox-text"
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(!isChecked)}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                        </div>
                        <div class="ms-2 text-sm">
                          <label for="helper-checkbox" class="font-medium ">
                            I have read and understood the instructions.
                          </label>
                          <p
                            id="helper-checkbox-text"
                            class="text-xs font-normal text-gray-500"
                          >
                            All computer hardware allotted to me are in proper
                            working condition. I declare that I am not in
                            possession of /not wearing /not carrying any
                            prohibited gadget like mobile phone, bluetooth
                            devices etc. /any prohibited material with me into
                            the Examination Hall. I agree that in case of not
                            adhering to the instructions, I shall be liable to
                            be debarred from this Test and/or to a disciplinary
                            action, which may include ban from future
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Button
                          className={`bg-[#fd7c22]  font-medium border border-gray-400 py-2 px-2 rounded-full text-xs ${
                            !isChecked &&
                            "cursor-not-allowed bg-gray-300 text-gray-500 "
                          }`}
                          //   onClick={close}
                          onClick={() => setShowInstructions(true)}
                        >
                          Continue
                          {/* <Link href="/test-start/2">Continue</Link> */}
                        </Button>
                      </div>
                    </>
                  )}
                  {showInstructions && (
                    <>
                      <div className="text-xs py-8 gap-y-3 flex flex-col ">
                        <div className="flex gap-x-3 items-center">
                          <span className="h-5 w-5 rounded-full bg-green-500 flex justify-center items-center p-1">
                            <FaCheck />
                          </span>
                          <span>You have answered the question.</span>
                        </div>
                        <div className="flex gap-x-3 items-center">
                          <span className="rounded-full bg-red-500 h-5 w-5 flex justify-center items-center">
                            <RxCross2 />
                          </span>
                          <span>
                            You have visited but not answered the question yet..
                          </span>
                        </div>
                        <div className="flex gap-x-3 items-center">
                          <span className="h-5 w-5 flex justify-center items-center rounded-full bg-yellow-500">
                            <BsPencilSquare />
                          </span>
                          <span>
                            You have not answered the question but have marked
                            for review
                          </span>
                        </div>
                        <div className="flex gap-x-3 items-center">
                          <span className="h-5 w-5 flex justify-center items-center rounded-full bg-orange-500">
                            <BsPencilSquare />
                          </span>
                          <span>
                            You have answered the question but have marked for
                            review
                          </span>
                        </div>
                        <div className="flex gap-x-3 items-center">
                          <span className="h-5 w-5 rounded-full border bg-white flex justify-center items-center text-black">
                            <MdOutlinePending />
                          </span>
                          <span>You have Not visited the question yet</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Button
                          className={`bg-[#fd7c22]  font-medium border border-gray-400 py-2 px-2 rounded-full text-xs ${
                            !isChecked &&
                            "cursor-not-allowed bg-gray-300 text-gray-500 "
                          }`}
                          //   onClick={close}
                          onClick={() => setShowInstructions(true)}
                        >
                          {showInstructions ? (
                            <Link href="/test-start/2">Continue</Link>
                          ) : (
                            "Continue"
                          )}
                        </Button>
                      </div>
                    </>
                  )}
                </DialogPanel>
              </TransitionChild>
              <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
