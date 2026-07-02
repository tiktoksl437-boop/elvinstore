/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Real customer logo url from image2url
const elvinStoreLogo = "https://www.image2url.com/r2/default/images/1782993009282-90eabc83-0a0b-4999-8fb8-83cf5a39bfac.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gaming-light text-indigo-950 selection:bg-brand-purple selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Noise/Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(109,40,217,0.05))] opacity-30"></div>

      {/* Header / Navbar Navigation */}
      <Navbar logoSrc={elvinStoreLogo} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Landing Section */}
        <Hero logoSrc={elvinStoreLogo} />

        {/* 2. About Me Section - SMK gamingpreneur narrative */}
        <AboutMe />

        {/* 3. FAQ Section */}
        <FAQ />

        {/* 4. Contact & WhatsApp Group Section */}
        <ContactSection />
      </main>

      {/* Footer Navigation & Garena Disclaimer */}
      <Footer logoSrc={elvinStoreLogo} />
    </div>
  );
}
