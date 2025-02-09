"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

const WebsitesSection = () => {
  const websites = [
    {
      id: 1,
      title: "Portfolio Website",
      url: "https://www.chiakyotuteye.com/",
      image: "/chiaky.png",
      description: "Modern corporate website with CMS integration",
      technologies: ["React", "Next.js", "Tailwind CSS", "NeonDB", "Prisma"],
      stats: {},
    },
    {
      id: 2,
      title: "E-commerce Website",
      url: "https://shop-eacj.vercel.app/",
      image: "/shop.png",

      description: "Full-featured online store with custom product management",
      technologies: [
        "Nextjs",
        "Tailwind css",
        "NeonDB",
        "PostgreSQL",
        "Prisma",
        "Paystacck",
        "Framer-motion",
      ],
      stats: { visitors: "5K+", pages: "8+", loadTime: "1.2s" },
    },
    {
      id: 3,
      title: "Flairup Website",
      url: "https://flairup.vercel.app/",
      image: "/flairup.png",
      description: "Personal blog website with CMS integration",
      technologies: ["React", "CSS", "AOS"],
      stats: {},
    },
    {
      id: 4,
      title: "The Brocode website",
      url: "https://www.thebrocodegh.com/",
      image: "/brocode.png",
      description: "The Brocode website for Kalyjay for the Brocode project",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "HygraphCMS",
        "Paystack",
        "Mailchimp",
        "Framer-motion",
        "Google Analytics",
      ],
      stats: { visitors: "3K+", uptime: "99.9%" },
    },
  ];

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-indigo-900 text-white"
    >
      <motion.h2
        variants={fadeIn}
        className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
      >
        Websites
      </motion.h2>

      <motion.div
        variants={staggerChildren}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {websites.map((website) => (
          <motion.div
            key={website.id}
            variants={fadeIn}
            className="group relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm"
          >
            {/* Website Preview */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={website.image}
                alt={website.title}
                layout="fill"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Website Info */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-display">{website.title}</h3>
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Visit Site
                </a>
              </div>

              <p className="text-gray-300">{website.description}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2">
                {website.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {Object.entries(website.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-blue-400 font-bold">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WebsitesSection;
