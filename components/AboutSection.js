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

const focus = ["Branding", "Graphic Design", "Web Design", "Social Media", "Motion"];

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerChildren}
      className="border-t border-white/5 bg-[#0a0a0b] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <motion.div variants={fadeIn}>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400/90">
            About
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            About Me
          </h2>
        </motion.div>

        <div>
          <motion.p
            variants={fadeIn}
            className="text-lg leading-relaxed text-neutral-300 sm:text-xl"
          >
            I&apos;m a passionate creative designer with a keen eye for design,
            aesthetics, and storytelling. My work is driven by the need to create
            visually stunning and impactful experiences — across brand identities,
            print, the web, and short-form video.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-2.5">
            {focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-neutral-300"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
