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

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm placeholder:text-neutral-500 transition-colors focus:border-violet-400/60 focus:outline-none";

const ContactSection = () => {
  return (
    <motion.section
      id="contacts"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="border-t border-white/5 bg-[#0a0a0b] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400/90">
            Contact
          </p>
          <motion.h2
            variants={fadeIn}
            className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Let&apos;s Connect
          </motion.h2>
        </div>

        <motion.div variants={fadeIn} className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                Contact Details
              </h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-3">
                  <span className="text-neutral-500">Email</span>
                  <a
                    href="mailto:ernestanyomitse752@gmail.com"
                    className="text-neutral-200 transition-colors hover:text-violet-300"
                  >
                    ernestanyomitse752@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-neutral-500">Phone</span>
                  <a
                    href="tel:+23320431-4170"
                    className="text-neutral-200 transition-colors hover:text-violet-300"
                  >
                    +233 (20) 431-4170
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                Social
              </h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/anyomitse-ernest-6934b8190/"
                className="text-sm text-neutral-200 transition-colors hover:text-violet-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <motion.form
            variants={fadeIn}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your Name" className={inputClass} />
            <input type="email" placeholder="Your Email" className={inputClass} />
            <textarea placeholder="Your Message" rows={4} className={inputClass} />
            <motion.button
              whileTap={{ scale: 0.99 }}
              className="w-full rounded-full bg-white py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
