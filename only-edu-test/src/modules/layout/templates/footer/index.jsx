import Link from "next/link";

export default async function Footer() {
  return (
    <footer className=" ">
      <div>
        <div className="bg-[#9DCED3]">
          <ul>
            <li>ABOUT</li>
          </ul>
          <ul>
            <li>ABOUT</li>
          </ul>
          <ul>
            <li>HELP</li>
          </ul>
        </div>
        <div className=" bg-[#115E5D] text-[#f8fafc] flex justify-between">
          <p>&#169; 2024 Only Education. All rights reserved</p>
          <ol className="flex">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
}
