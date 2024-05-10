import React from "react";
import { FaRegUser } from "react-icons/fa";

const ProfileTemplate = () => {
  return (
    <div>
      <div className="flex gap-4 px-6">
        <div className="flex flex-col items-start bg-[#f5efe6] w-[20%] p-6 h-fit">
          <button className="flex w-full gap-4 items-center leading-10">
            <FaRegUser />
            My Tests
          </button>
          <button className="flex w-full gap-4 items-center leading-10">
            <FaRegUser />
            Attempted Tests
          </button>
          <button className="flex w-full gap-4 items-center leading-10">
            <FaRegUser />
            Order History
          </button>
          <button className="flex w-full gap-4 items-center leading-10">
            <FaRegUser />
            My Account
          </button>
        </div>
        <div className="w-[60%]">
          <div className="bg-[#f5efe6] mb-3">My Account</div>
          <div className="bg-[#f5efe6]">
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-[20%] bg-[#f5efe6]">
          <h3>Live Count</h3>
          <div>
            <div className="flex items-center text-start">
              <FaRegUser />
              <div>
                <h3>1,559</h3>
                <span>Exams Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTemplate;
