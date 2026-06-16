"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
 * Reels & Videos
 * --------------
 * Each item previews live from Instagram / TikTok / LinkedIn inside a lightbox.
 * To add or change a clip, edit the `reels` array below:
 *   - Instagram: copy the shortcode from the URL (.../reel/<code>/ or .../p/<code>/)
 *   - TikTok:    copy the numeric id from the URL (.../video/<id>)
 *   - LinkedIn:  copy the numeric id from urn:li:activity:<id> in the post URL
 * Feel free to rename the `title` of each clip to something descriptive.
 */
const reels = [
  { id: 1, platform: "instagram", kind: "post", code: "CjVJfeaukgn", title: "Featured Post" },
  { id: 2, platform: "instagram", kind: "reel", code: "DMXMzrovscc", title: "Brand Reel" },
  { id: 3, platform: "instagram", kind: "reel", code: "C3DZq3GCAXW", title: "Promo Reel" },
  { id: 4, platform: "instagram", kind: "reel", code: "C4TJV4tiVZd", title: "Campaign Reel" },
  { id: 5, platform: "instagram", kind: "reel", code: "DHapFqgs-aO", title: "Brand Reel" },
  { id: 6, platform: "instagram", kind: "reel", code: "DAlKXthpfBC", title: "Promo Reel" },
  { id: 7, platform: "instagram", kind: "reel", code: "C9iT-fJsRYH", title: "Campaign Reel" },
  {
    id: 8,
    platform: "tiktok",
    handle: "hephzibahclothingline",
    videoId: "7519410303151459589",
    title: "Hephzibah Clothing",
  },
  { id: 9, platform: "linkedin", activityId: "7445505166469947393", title: "LinkedIn Post" },
  { id: 10, platform: "linkedin", activityId: "7442183093928488960", title: "LinkedIn Post" },
];

const PROFILE_URL = "https://www.instagram.com/_g.y.l.a_/";
const LINKEDIN_URL = "https://www.linkedin.com/company/106434191/";

const embedUrl = (item) => {
  if (item.platform === "tiktok") {
    return `https://www.tiktok.com/embed/v2/${item.videoId}`;
  }
  if (item.platform === "linkedin") {
    return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${item.activityId}`;
  }
  const path = item.kind === "post" ? "p" : "reel";
  return `https://www.instagram.com/${path}/${item.code}/embed/`;
};

const externalUrl = (item) => {
  if (item.platform === "tiktok") {
    return `https://www.tiktok.com/@${item.handle}/video/${item.videoId}`;
  }
  if (item.platform === "linkedin") {
    return `https://www.linkedin.com/feed/update/urn:li:activity:${item.activityId}`;
  }
  const path = item.kind === "post" ? "p" : "reel";
  return `https://www.instagram.com/${path}/${item.code}/`;
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.5 3a4.9 4.9 0 0 0 4.5 4.4v3a8 8 0 0 1-4.5-1.4v6.6a6.2 6.2 0 1 1-6.2-6.2c.3 0 .6 0 .9.1v3.1a3.2 3.2 0 1 0 2.3 3V3h3z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21H9z" />
  </svg>
);

const PlayIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const platformMeta = {
  instagram: { label: "Instagram", Icon: InstagramIcon },
  tiktok: { label: "TikTok", Icon: TikTokIcon },
  linkedin: { label: "LinkedIn", Icon: LinkedInIcon },
};

const filters = [
  { key: "all", label: "All" },
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
  { key: "linkedin", label: "LinkedIn" },
];

const ReelCard = ({ item, index, onOpen }) => {
  const { label, Icon } = platformMeta[item.platform];
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
      onClick={() => onOpen(item)}
      whileHover={{ y: -4 }}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.015] text-left transition-colors duration-300 hover:border-white/25"
    >
      {/* Platform badge */}
      <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </span>

      {/* Play affordance */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:text-black">
          <PlayIcon className="ml-0.5 h-5 w-5" />
        </span>
      </div>

      {/* Bottom label */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
        <p className="text-sm font-medium text-white">{item.title}</p>
        <p className="text-xs text-neutral-400">Tap to preview</p>
      </div>
    </motion.button>
  );
};

const ReelModal = ({ item, onClose }) => {
  const { label } = platformMeta[item.platform];
  const isTikTok = item.platform === "tiktok";
  const isLinkedIn = item.platform === "linkedin";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className={`w-full ${isLinkedIn ? "max-w-[550px]" : "max-w-[400px]"}`}
      >
        <div
          className={`overflow-hidden rounded-2xl border border-white/10 ${
            isTikTok ? "bg-black" : "bg-white"
          }`}
        >
          <iframe
            key={item.id}
            src={embedUrl(item)}
            title={item.title}
            className={`w-full ${
              isLinkedIn ? "h-[72vh] max-h-[640px]" : "h-[78vh] max-h-[720px]"
            }`}
            loading="lazy"
            scrolling={isLinkedIn ? "yes" : "no"}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <a
            href={externalUrl(item)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-300 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Open on {label}
          </a>
          <button
            onClick={onClose}
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-neutral-300 transition-colors hover:border-white/40 hover:text-white"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ReelsSection = () => {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const visible = reels.filter((r) => filter === "all" || r.platform === filter);

  // Lock body scroll + close on Escape while the lightbox is open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section
      id="reels"
      className="border-t border-white/5 bg-[#0a0a0b] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <motion.p
              variants={fadeIn}
              className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400/90"
            >
              Motion
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Reels &amp; Videos
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-4 text-neutral-400">
              Short-form content I&apos;ve created and edited — previewing live from
              Instagram, TikTok &amp; LinkedIn. Tap any clip to play it right here.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-3 flex flex-wrap items-center gap-4"
            >
              <a
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-neutral-300 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                <InstagramIcon className="h-4 w-4" />
                @_g.y.l.a_
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-neutral-300 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Filters */}
          <motion.div variants={fadeIn} className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  filter === f.key
                    ? "border-white/80 bg-white text-black"
                    : "border-white/15 text-neutral-400 hover:border-white/40 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {visible.map((item, i) => (
            <ReelCard key={item.id} item={item} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ReelModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ReelsSection;
