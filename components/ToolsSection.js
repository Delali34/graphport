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
    content: [
      { name: "Short-form Video Editing", proficiency: 90 },
      { name: "CapCut", proficiency: 90 },
      { name: "Adobe Premiere Pro", proficiency: 85 },
      { name: "Canva", proficiency: 90 },
      { name: "Copywriting & Hooks", proficiency: 85 },
    ],
    systems: [
      { name: "ChatGPT", proficiency: 90 },
      { name: "Claude", proficiency: 90 },
      { name: "Notion", proficiency: 85 },
      { name: "Airtable", proficiency: 75 },
      { name: "Automation & Workflows", proficiency: 80 },
    ],
  };

  const stack = [
    "ChatGPT",
    "Claude",
    "Notion",
    "Airtable",
    "Asana",
    "Slack",
    "Canva",
    "CapCut",
    "Lovable",
    "Flowdesk",
  ];

  return (
    <motion.section
      id="toolkit"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="border-t border-white/5 bg-[#0a0a0b] px-6 py-24 text-white sm:py-32"
    >
      <motion.div variants={staggerChildren} className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400/90">
            Toolkit
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
              Content &amp; Creative
            </h3>
            <div className="space-y-6">
              {tools.content.map((tool) => (
                <Skill key={tool.name} tool={tool} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              AI, Tools &amp; Systems
            </h3>
            <div className="space-y-6">
              {tools.systems.map((tool) => (
                <Skill key={tool.name} tool={tool} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wider stack */}
        <motion.div variants={fadeIn} className="mt-14 text-center">
          <p className="mb-5 text-sm text-neutral-500">Also works with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-neutral-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ToolsSection;
