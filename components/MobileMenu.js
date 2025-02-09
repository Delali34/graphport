"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-y-0 right-0 w-full md:hidden sm:w-80 bg-black/95 backdrop-blur-lg z-50 p-6"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="absolute top-6 right-6"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          <motion.nav className="mt-20 space-y-8">
            {["About", "Work", "Services", "Contacts"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.1 }}
                className="block text-3xl font-display hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-12 left-6 space-y-4"
          >
            <div className="space-y-2">
              {["LinkedIn"].map((social) => (
                <a
                  key={social}
                  target="_blank"
                  href={`https://www.linkedin.com/in/anyomitse-ernest-6934b8190/`}
                  className="block text-sm uppercase tracking-widest hover:text-blue-400 transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
