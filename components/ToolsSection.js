"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation variants
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
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-b from-purple-900 to-black text-white"
    >
      <motion.div variants={staggerChildren} className="max-w-6xl mx-auto">
        <motion.h2
          variants={fadeIn}
          className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Tools & Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Design Tools */}
          <motion.div variants={fadeIn}>
            <h3 className="text-3xl font-display mb-8 text-center">Design</h3>
            <div className="space-y-6">
              {tools.design.map((tool) => (
                <div key={tool.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-display">{tool.name}</span>
                    <span className="text-blue-400">{tool.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Development Tools */}
          <motion.div variants={fadeIn}>
            <h3 className="text-3xl font-display mb-8 text-center">
              Development
            </h3>
            <div className="space-y-6">
              {tools.development.map((tool) => (
                <div key={tool.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-display">{tool.name}</span>
                    <span className="text-blue-400">{tool.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.proficiency}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ToolsSection;
