"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-y-0 right-0 w-full md:hidden sm:w-80 bg-black/95 backdrop-blur-lg z-50 p-6"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="absolute top-6 right-6"
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
          </motion.button>

          <motion.nav className="mt-20 space-y-8">
            {["About", "Work", "Services", "Contacts"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.1 }}
                className="block text-3xl font-display hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-12 left-6 space-y-4"
          >
            <div className="space-y-2">
              {["LinkedIn"].map((social) => (
                <a
                  key={social}
                  target="_blank"
                  href={`https://www.linkedin.com/in/anyomitse-ernest-6934b8190/`}
                  className="block text-sm uppercase tracking-widest hover:text-blue-400 transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-white overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/imaged.jpeg" // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-black/80 z-[1]" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-[2]" />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="text-center relative z-[5]"
      >
        <motion.h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold leading-none uppercase tracking-tighter">
          <motion.span
            variants={fadeIn}
            className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-craft"
          >
            Creative
          </motion.span>
          <motion.span
            variants={fadeIn}
            className="block md:-mt-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 font-craft"
          >
            Designer
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="fixed top-6 left-6 text-sm font-light z-[10]"
      >
        <Link href="/">
          <p className="uppercase font-display tracking-widest">
            Ernest Delali
          </p>
        </Link>

        <motion.div
          className="mt-4 space-y-2 hidden md:block"
          variants={staggerChildren}
        >
          {["LinkedIn"].map((social) => (
            <motion.a
              key={social}
              variants={fadeIn}
              target="_blank"
              href={`https://www.linkedin.com/in/anyomitse-ernest-6934b8190/`}
              className="block hover:text-blue-400 transition-colors duration-300 font-sans"
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 right-6 text-sm font-light z-[10]"
      >
        <nav className="hidden md:flex space-x-8">
          {["About", "Work", "Services", "Contacts"].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors duration-300 font-sans tracking-wide"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <motion.svg
            whileTap={{ scale: 0.95 }}
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </motion.svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Language Switch */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="fixed bottom-6 right-6 text-sm font-light z-[10]"
      >
        <div className="flex gap-4">
          {["EN"].map((lang) => (
            <motion.button
              key={lang}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-blue-400 transition-colors duration-300 font-display tracking-widest"
            >
              {lang}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
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
          I am a passionate creative director with a keen eye for design,
          aesthetics, and storytelling. My work is driven by the need to create
          visually stunning and impactful experiences.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

const WorksSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("flyers");
  const [selectedWork, setSelectedWork] = useState(null);

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
        title: "Mobile App",
        description: "Music App Design",
        image: "/music.png",
        pdf: "/music.pdf",
      },
      {
        id: 4,
        title: "Marketing Campaign",
        description: "Digital Marketing",
        image: "/web.png",
        pdf: "/pdfs/marketing-campaign.pdf",
      },
    ],
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
        id="work"
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

      {/* Tab Navigation */}
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

      <motion.div
        variants={staggerChildren}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
      >
        {works[activeTab].map((work, index) => (
          <motion.div
            key={work.id}
            variants={fadeIn}
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

      {/* Full-size Modal */}
      <AnimatePresence>
        {selectedWork && (
          <Modal work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const ContactSection = () => {
  return (
    <motion.section
      id="contacts"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
      className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-b from-indigo-900 to-black text-white"
    >
      <motion.div variants={staggerChildren} className="max-w-4xl mx-auto">
        <motion.h2
          variants={fadeIn}
          className="text-5xl sm:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display mb-4">Contact Details</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="text-blue-400">Email:</span>
                  <a
                    href="mailto:contact@example.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    ernestanyomitse752@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-blue-400">Phone:</span>
                  <a
                    href="tel:+23320431-4170"
                    className="hover:text-blue-400 transition-colors"
                  >
                    +233 (20) 431-4170
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display mb-4">Social Media</h3>
              <div className="flex gap-4">
                {["LinkedIn"].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ scale: 1.1 }}
                    target="_blank"
                    whileTap={{ scale: 0.95 }}
                    href={`https://www.linkedin.com/in/anyomitse-ernest-6934b8190/`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            variants={fadeIn}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-display uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
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

const WebsitesSection = () => {
  const websites = [
    {
      id: 1,
      title: "Portfolio Website",
      url: "https://www.chiakyotuteye.com/",
      image: "/chiaky.png",
      description: "Full-featured online store with custom product management",
      technologies: ["React", "Next.js", "Tailwind CSS", "NeonDB", "Prisma"],
      stats: {},
    },
    {
      id: 2,
      title: "E-commerce Website",
      url: "https://shop-eacj.vercel.app/",
      image: "/shop.png",
      description: "Modern corporate website with CMS integration",
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
                  href={`${website.url}`}
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

const Portfolio = () => {
  return (
    <>
      {/* Font imports */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap");

        :root {
          --font-display: "Syne", sans-serif;
          --font-sans: "Space Grotesk", sans-serif;
        }

        .font-display {
          font-family: var(--font-display);
        }

        .font-sans {
          font-family: var(--font-sans);
        }

        .font-craft {
          font-family: var(--font-display);
          letter-spacing: -0.05em;
        }
      `}</style>

      <div className="bg-black font-sans">
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ToolsSection />
        <WebsitesSection />
        <SocialMediaSection />

        <ContactSection />
      </div>
    </>
  );
};

export default Portfolio;
