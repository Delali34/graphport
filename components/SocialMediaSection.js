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

const SocialMediaSection = () => {
  const socialAccounts = [
    {
      id: 1,
      name: "DiscipleMakers",
      platform: "Instagram",
      handle: "@disciplemakerstemple",
      followers: "720+",
      engagement: "20%",
      growth: "+20%",
      content: "Church live streams, Bible studies, community events",
      profileUrl: "https://www.instagram.com/disciplemakerstemple/",
    },
    {
      id: 2,
      name: "Hephzibah Clothing Line",
      platform: "Instagram",
      handle: "@hephzibah_clothingline",
      followers: "30+",
      engagement: "22%",
      growth: "+100%",
      content: "Fashion, lifestyle, and accessories",
      profileUrl: "https://www.instagram.com/hephzibah_clothingline/",
    },
    {
      id: 3,
      name: "Flair up",
      platform: "Instagram",
      handle: "@flairup__",
      followers: "7.2K+",
      engagement: "30%",
      growth: "+100%",
      content: "Web design, graphic design, photography, Design, and more",
      profileUrl: "https://www.instagram.com/flairup__/",
    },
  ];

  return (
    <motion.section
      id="social"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="border-t border-white/5 bg-[#0a0a0b] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400/90">
          Growth &amp; Management
        </p>
        <motion.h2
          variants={fadeIn}
          className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Social Media
        </motion.h2>
        <motion.p variants={fadeIn} className="mt-4 text-neutral-400">
          Accounts I run end to end — strategy, content, publishing and
          measurable growth across Instagram and TikTok.
        </motion.p>
      </div>

      <motion.div
        variants={staggerChildren}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
      >
        {socialAccounts.map((account) => (
          <motion.div
            key={account.id}
            variants={fadeIn}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold">{account.name}</h3>
                <a
                  href={account.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-violet-300 transition-colors hover:text-white"
                >
                  {account.handle}
                </a>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
                {account.platform}
              </span>
            </div>

            <div className="my-5 grid grid-cols-3 gap-3 border-y border-white/10 py-4">
              <div className="text-center">
                <div className="font-semibold text-white">{account.followers}</div>
                <div className="text-xs text-neutral-500">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">{account.engagement}</div>
                <div className="text-xs text-neutral-500">Engagement</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-emerald-400">{account.growth}</div>
                <div className="text-xs text-neutral-500">Growth</div>
              </div>
            </div>

            <p className="text-sm text-neutral-400">{account.content}</p>

            <a
              href={account.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full border border-white/15 py-2.5 text-center text-sm font-medium transition-colors hover:border-white/40 hover:bg-white/5"
            >
              View Profile
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SocialMediaSection;
