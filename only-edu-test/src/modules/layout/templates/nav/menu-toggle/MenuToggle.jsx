import React from "react";

const MenuToggle = ({ toggleMenu, isOpen }) => {
  return (
    <div
      className="flex items-center justify-center w-10 h-10 cursor-pointer flex-col "
      onClick={toggleMenu}
    >
      <div
        className={`w-8 h-1 bg-white rounded-3xl transition-all duration-300 transform origin-center ${
          isOpen ? "rotate-45 translate-y-2 " : ""
        }`}
      ></div>
      <div
        className={`w-8 h-1 bg-white rounded-3xl my-1 transition-all duration-300 opacity-100 ${
          isOpen ? "opacity-[0]" : ""
        }`}
      ></div>
      <div
        className={`w-8 h-1 bg-white rounded-3xl  transition-all duration-300 transform origin-center ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></div>
    </div>
  );
};

export default MenuToggle;
