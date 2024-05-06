import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import Logo from "@/modules/logo/logo";

export default async function Nav() {
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 group  border-[#9c9c9c68] uppercase">
        <header className="relative h-20 sm:h-[6rem]  mx-auto ">
          <nav className=" flex items-center justify-end w-full h-full px-4">
            <div className=" h-full flex items-center">
              <div className="h-full ">
                <div className="absolute top-4 left-4">
                  <Logo />
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="flex gap-x-8 text-sm absolute top-1/2 left-1/2 -translate-x-1/2  border -translate-y-1/2 capitalize bg-white px-20 rounded-full font-semibold ">
                <button href="/" className="txt-compact-xlarge-plus p-3">
                  Test
                </button>{" "}
                <button href="/" className="txt-compact-xlarge-plus p-1">
                  Test
                </button>{" "}
                <button href="/" className="txt-compact-xlarge-plus p-1">
                  Test
                </button>{" "}
                <button href="/" className="txt-compact-xlarge-plus p-1">
                  Test
                </button>
              </div>
            </div>
            <div className="flex gap-x-5  justify-center items-center text-sm font-semibold">
              <button class="cursor-pointer flex justify-between text-center text-black">
                <span>Login</span>
              </button>

              <button class="hero-sticky-button whitespace-nowrap px-4 py-3 rounded-[21px] text-white  bg-[#fd7c22] justify-center relative overflow-hidden flex items-center font-normal duration-200 ease-in-out transition-colors">
                <span className="flex flex-col overflow-hidden h-[1.2rem]">
                  <span>Register</span>
                  <span>Register</span>
                </span>
              </button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
