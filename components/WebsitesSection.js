"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      title: "Real Estate Website",
      url: "https://www.bellesonhomes.com/",
      image: "/bel.png",
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
      title: "Travel Consulting Firm",
      url: "https://www.btfeducationalconsult.com/",
      image: "/build.png",
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
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="border-t border-white/5 bg-[#0a0a0b] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto mb-14 max-w-6xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400/90">
          Builds
        </p>
        <motion.h2
          variants={fadeIn}
          className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Web &amp; Systems
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-400">
          I don&apos;t just make content — I build the tools and sites behind it.
          A few products I&apos;ve shipped end to end.
        </p>
      </div>

      <motion.div
        variants={staggerChildren}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2"
      >
        {websites.map((website) => (
          <motion.div
            key={website.id}
            variants={fadeIn}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/20"
          >
            {/* Preview */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={website.image}
                alt={website.title}
                layout="fill"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Info */}
            <div className="space-y-4 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold">{website.title}</h3>
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm text-violet-300 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Visit Site
                </a>
              </div>

              <p className="text-sm text-neutral-400">{website.description}</p>

              <div className="flex flex-wrap gap-2">
                {website.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {Object.keys(website.stats).length > 0 && (
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                  {Object.entries(website.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-semibold text-white">{value}</div>
                      <div className="text-xs capitalize text-neutral-500">{key}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WebsitesSection;
