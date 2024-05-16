import React from "react";

const TestLayout = ({ children }) => {
  return (
    <div className="w-[100vw] overflow-x-hidden h-[100vh] text-dark bg-light dark:bg-dark dark:text-light flex flex-col px-2 py-3 sm:p-4  lg:p-6 relative">
      {children}
    </div>
  );
};

export default TestLayout;
