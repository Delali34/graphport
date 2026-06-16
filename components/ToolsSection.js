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

const Skill = ({ tool }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="text-neutral-200">{tool.name}</span>
      <span className="text-neutral-500">{tool.proficiency}%</span>
    </div>
    <div className="h-1 overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${tool.proficiency}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full bg-violet-400"
      />
    </div>
  </div>
);

const ToolsSection = () => {
  const tools = {
    design: [
      { name: "Adobe Photoshop", proficiency: 90 },
      { name: "Adobe Premier Pro", proficiency: 80 },
      { name: "Figma", proficiency: 90 },
      { name: "Canva", proficiency: 70 },
      { name: "Adobe After Effects", proficiency: 80 },
    ],
    development: [
      { name: "HTML/CSS", proficiency: 95 },
      { name: "JavaScript", proficiency: 80 },
      { name: "React.js", proficiency: 80 },
      { name: "Next.js", proficiency: 90 },
      { name: "WordPress", proficiency: 20 },
    ],
  };

  return (
    <motion.section
      id="services"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="border-t border-white/5 bg-[#0a0a0b] px-6 py-24 text-white sm:py-32"
    >
      <motion.div variants={staggerChildren} className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400/90">
            Capabilities
          </p>
          <motion.h2
            variants={fadeIn}
            className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Tools &amp; Skills
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <motion.div variants={fadeIn}>
            <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              Design
            </h3>
            <div className="space-y-6">
              {tools.design.map((tool) => (
                <Skill key={tool.name} tool={tool} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              Development
            </h3>
            <div className="space-y-6">
              {tools.development.map((tool) => (
                <Skill key={tool.name} tool={tool} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ToolsSection;
