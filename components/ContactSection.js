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
                    href="mailto:ernestanyomitse752@gmail.com"
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
                    href="https://www.linkedin.com/in/anyomitse-ernest-6934b8190/"
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

export default ContactSection;
