import Link from "next/link";

export default async function Footer() {
  return (
    <footer className="border-t-[0.5px] border-[#9c9c9c68] w-full h-[70vh] flex flex-col justify-between textglobal">
      <div className="w-full  text-[7vw] mx-auto pl-2 font-medium">
        <h2 className="leading-[normal]">Based in New Bombay™</h2>
      </div>
      <div className="flex sm:justify-between flex-col sm:flex-row gap-y-11  w-full p-6">
        <div className="flex gap-x-28 flex-col-reverse sm:flex-row gap-y-11">
          <ul className="uppercase">
            <li className="cursor-pointer">instagram</li>
            <li className="cursor-pointer">support@dbz.com</li>
            <li className="cursor-pointer">Terms & Condition</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex items-end text-sm">
          <p>© 2024 DIVIDE BY ZERO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
