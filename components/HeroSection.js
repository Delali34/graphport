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
      staggerChildren: 0.12,
    },
  },
};

const navItems = ["About", "Work", "Reels", "Services", "Contacts"];

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/imaged.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0"
        />
        {/* Single, calm overlay */}
        <div className="absolute inset-0 z-[1] bg-black/70" />
        {/* Fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-b from-transparent to-[#0a0a0b]" />
      </div>

      {/* Top bar — brand */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="fixed left-6 top-6 z-[10] text-sm"
      >
        <Link href="/">
          <p className="font-display uppercase tracking-[0.25em]">Ernest Delali</p>
        </Link>
      </motion.div>

      {/* Top bar — nav */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed right-6 top-6 z-[10] text-sm"
      >
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-neutral-300 transition-colors duration-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </motion.div>

      {/* Hero content */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="relative z-[5] flex flex-col items-center text-center"
      >
        <motion.p
          variants={fadeIn}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-violet-300/90"
        >
          Designer &amp; Developer
        </motion.p>

        <motion.h1 className="font-craft text-6xl font-bold uppercase leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl xl:text-9xl">
          <motion.span variants={fadeIn} className="block">
            Creative
          </motion.span>
          <motion.span variants={fadeIn} className="block text-neutral-400">
            Designer
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="mt-8 max-w-md text-balance text-neutral-300"
        >
          Branding, graphic design, web &amp; social media — crafting visually
          striking, impactful experiences.
        </motion.p>

        <motion.div variants={fadeIn} className="mt-10 flex items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            View Work
          </a>
          <a
            href="#contacts"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/50"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

      {/* Bottom corners */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        href="https://www.linkedin.com/in/anyomitse-ernest-6934b8190/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[10] hidden text-sm text-neutral-300 transition-colors hover:text-white md:block"
      >
        LinkedIn
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="fixed bottom-6 right-6 z-[10] text-xs uppercase tracking-[0.3em] text-neutral-400"
      >
        EN
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
