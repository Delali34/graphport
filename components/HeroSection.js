"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-white overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/imaged.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-black/80 z-[1]" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-[2]" />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="text-center relative z-[5]"
      >
        <motion.h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold leading-none uppercase tracking-tighter">
          <motion.span
            variants={fadeIn}
            className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-craft"
          >
            Creative
          </motion.span>
          <motion.span
            variants={fadeIn}
            className="block md:-mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 font-craft"
          >
            Designer
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="fixed top-6 left-6 text-sm font-light z-[10]"
      >
        <Link href="/">
          <p className="uppercase font-display tracking-widest">
            Ernest Delali
          </p>
        </Link>

        <motion.div
          className="mt-4 space-y-2 hidden md:block"
          variants={staggerChildren}
        >
          {["LinkedIn"].map((social) => (
            <motion.a
              key={social}
              variants={fadeIn}
              target="_blank"
              href={`https://www.linkedin.com/in/anyomitse-ernest-6934b8190/`}
              className="block hover:text-blue-400 transition-colors duration-300 font-sans"
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 right-6 text-sm font-light z-[10]"
      >
        <nav className="hidden md:flex space-x-8">
          {["About", "Work", "Services", "Contacts"].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors duration-300 font-sans tracking-wide"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <motion.svg
            whileTap={{ scale: 0.95 }}
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </motion.svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Language Switch */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="fixed bottom-6 right-6 text-sm font-light z-[10]"
      >
        <div className="flex gap-4">
          {["EN"].map((lang) => (
            <motion.button
              key={lang}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-blue-400 transition-colors duration-300 font-display tracking-widest"
            >
              {lang}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
