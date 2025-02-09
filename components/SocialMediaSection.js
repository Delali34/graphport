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
      image: "/spi.jpg",
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
      image: "/logo hez.jpg",
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
      image: "/api/placeholder/400/300",
      profileUrl: "https://www.instagram.com/flairup__/",
    },
  ];

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-purple-900 text-white"
    >
      <motion.h2
        variants={fadeIn}
        className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        Social Media Management
      </motion.h2>

      <motion.div
        variants={staggerChildren}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {socialAccounts.map((account) => (
          <motion.div
            key={account.id}
            variants={fadeIn}
            className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            <div className="p-6 space-y-4">
              {/* Account Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display">{account.name}</h3>
                  <a
                    href={account.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {account.handle}
                  </a>
                </div>
                <span className="px-4 py-1 bg-white/10 rounded-full text-sm">
                  {account.platform}
                </span>
              </div>

              {/* Account Stats */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">
                    {account.followers}
                  </div>
                  <div className="text-sm text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">
                    {account.engagement}
                  </div>
                  <div className="text-sm text-gray-400">Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">
                    {account.growth}
                  </div>
                  <div className="text-sm text-gray-400">Growth</div>
                </div>
              </div>
              {/* Content Focus */}
              <div>
                <h4 className="text-lg font-display mb-2">Content Focus</h4>
                <p className="text-gray-300">{account.content}</p>
              </div>

              {/* View Profile Button */}
              <motion.a
                href={account.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-display uppercase tracking-wider hover:opacity-90 transition-opacity mt-4 text-center"
              >
                View Profile
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SocialMediaSection;
