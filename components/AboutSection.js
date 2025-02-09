"use client";

import React from "react";
import { motion } from "framer-motion";

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

const AboutSection = () => {
  return (
    <motion.section
      initial="initial"
      id="about"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white text-center"
    >
      <motion.div variants={staggerChildren} className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeIn}
          className="text-5xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          About Me
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg sm:text-xl leading-relaxed"
        >
          I am a passionate creative designer with a keen eye for design,
          aesthetics, and storytelling. My work is driven by the need to create
          visually stunning and impactful experiences.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
