import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-2/3 bg-[#115e5d] dark:bg-dark text-dark dark:text-light  shadow z-[9999]"
          >
            <ul className="mt-20 text-xl">
              <li className="py-2 px-4">Menu Item 1</li>
              <li className="py-2 px-4">Menu Item 2</li>
              <li className="py-2 px-4">Menu Item 3</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-full bg-black "
            onClick={toggleMenu} // Close menu when clicking outside
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
