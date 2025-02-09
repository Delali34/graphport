"use client";

import React from "react";
import HeroSection from "/components/HeroSection";
import AboutSection from "/components/AboutSection";
import WorksSection from "/components/WorksSection";
import ToolsSection from "/components/ToolsSection";
import WebsitesSection from "/components/WebsitesSection";
import SocialMediaSection from "/components/SocialMediaSection";
import ContactSection from "/components/ContactSection";

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
