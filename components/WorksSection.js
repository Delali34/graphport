"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

// Modal Component
const Modal = ({ work, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const [viewMode, setViewMode] = useState("image");

  if (!work) return null;

  const handleZoom = (delta) => {
    setScale((prev) => Math.min(Math.max(0.5, prev + delta), 3));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={() => {
        if (isZoomed) {
          setIsZoomed(false);
          setScale(1);
        } else {
          onClose();
        }
      }}
    >
      <div className="absolute top-4 right-4 z-20 flex items-center gap-4">
        {/* View Mode Toggle */}
        {work.pdf && (
          <div className="flex items-center gap-2 bg-black/50 rounded-lg p-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setViewMode(viewMode === "image" ? "pdf" : "image");
              }}
              className="text-white/80 hover:text-white px-3 py-1 rounded bg-blue-500"
            >
              {viewMode === "image" ? "View PDF" : "View Image"}
            </button>
          </div>
        )}

        {/* Zoom controls */}
        <div className="flex items-center gap-2 bg-black/50 rounded-lg p-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoom(-0.25);
            }}
            className="text-white/80 hover:text-white p-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <span className="text-white/80 text-sm">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleZoom(0.25);
            }}
            className="text-white/80 hover:text-white p-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="text-white/80 hover:text-white bg-black/50 rounded-lg p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative max-h-[90vh] max-w-[90vw] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {viewMode === "image" ? (
          <div
            className={`transform-gpu transition-transform duration-200 ${
              isZoomed ? "cursor-move" : "cursor-zoom-in"
            }`}
            style={{ transform: `scale(${scale})` }}
          >
            <Image
              src={work.image}
              alt={work.title}
              width={1000}
              height={1500}
              layout="responsive"
              objectFit="contain"
              quality={100}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>
        ) : (
          <div className="w-full h-[80vh] flex flex-col items-center">
            <iframe
              src={work.pdf}
              width="100%"
              height="100%"
              className="border-none"
            />
            <a
              href={work.pdf}
              download
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Download PDF
            </a>
          </div>
        )}
      </motion.div>

      {/* Title and description overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>
          <p className="text-gray-300">{work.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const WorksSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("flyers");
  const [selectedWork, setSelectedWork] = useState(null);
  const [isGridReady, setIsGridReady] = useState(true);

  useEffect(() => {
    setIsGridReady(false);
    const timer = setTimeout(() => {
      setIsGridReady(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const works = {
    flyers: [
      {
        id: 1,
        title: "Event Flyer Design",
        description: "Music Festival Promotion",
        image: "/fasting and prayers taim7.jpg",
      },
      {
        id: 2,
        title: "Corporate Brochure",
        description: "Business Conference",
        image: "/prohp.jpg",
      },
      {
        id: 3,
        title: "Social Media Design",
        description: "Instagram Campaign",
        image: "/tirza night 1.jpg",
      },
      {
        id: 4,
        title: "Product Showcase",
        description: "Product Launch",
        image: "/contition3 copy.jpg",
      },
      {
        id: 5,
        title: "Event Flyer Design",
        description: "Music Festival Promotion",
        image: "/week.jpg",
      },
      {
        id: 6,
        title: "Corporate Brochure",
        description: "Business Conference",
        image: "/achi.jpg",
      },
      {
        id: 7,
        title: "Social Media Design",
        description: "Instagram Campaign",
        image: "/church.jpg",
      },
      {
        id: 8,
        title: "Product Showcase",
        description: "Product Launch",
        image: "/jersey.jpg",
      },
      {
        id: 9,
        title: "Event Flyer Design",
        description: "Music Festival Promotion",
        image: "/daddy.jpg",
      },
      {
        id: 10,
        title: "Corporate Brochure",
        description: "Business Conference",
        image: "/eur.png",
      },
      {
        id: 11,
        title: "Social Media Design",
        description: "Instagram Campaign",
        image: "/mer.png",
      },
      {
        id: 12,
        title: "Product Showcase",
        description: "Product Launch",
        image: "/ade.jpg",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Company profile",
        description: "Complete company profile",
        image: "/emi.png",
        pdf: "/company profile final final.pdf",
      },
      {
        id: 2,
        title: "Web Design",
        description: "E-commerce Platform",
        image: "/shopi.png",
        pdf: "/iPhone 14 Pro - 1.pdf",
      },

      {
        id: 3,
        title: "Marketing Campaign",
        description: "Digital Marketing",
        image: "/web.png",
        pdf: "/pdfs/marketing-campaign.pdf",
      },
    ],
  };

  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

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
        My Works
      </motion.h2>

      <div className="flex justify-center gap-8 mb-12">
        {["flyers", "projects"].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab)}
            className={`text-xl font-display uppercase tracking-wider px-6 py-2 rounded-full transition-colors duration-300 ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isGridReady && (
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
          >
            {works[activeTab].map((work, index) => (
              <motion.div
                key={work.id}
                variants={itemVariants}
                className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedWork(work)}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Image
                  src={work.image}
                  alt={work.title}
                  layout="fill"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-4 text-left"
                >
                  <h3 className="text-lg font-bold mb-1">{work.title}</h3>
                  <p className="text-sm text-gray-200">{work.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedWork && (
          <Modal work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default WorksSection;
