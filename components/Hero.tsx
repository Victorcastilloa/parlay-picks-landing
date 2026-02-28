"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const BOT_URL = "https://t.me/ParlayPicksBot";

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 grid-bg opacity-60" />
  );
}

function FloatingOrbs() {
  return (
    <>
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #25F4EE, transparent)" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-8 blur-3xl"
        style={{ background: "radial-gradient(circle, #FE2C55, transparent)" }}
      />
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0a1a] to-[#0a0a0f]" />
      <AnimatedGrid />
      <FloatingOrbs />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#25F4EE]/30 bg-[#25F4EE]/5 text-[#25F4EE] text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25F4EE] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25F4EE]" />
          </span>
          Live on Telegram · Free to Start
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6"
        >
          AI-Powered Parlay Picks
          <br />
          <span className="gradient-text">That Actually Win</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Real-time odds from{" "}
          <span className="text-[#25F4EE] font-semibold">40+ bookmakers</span>.{" "}
          <span className="text-[#7C3AED] font-semibold">Claude AI</span> analysis.{" "}
          Delivered straight to your{" "}
          <span className="text-[#FE2C55] font-semibold">Telegram</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full text-base sm:text-lg font-bold text-black bg-[#25F4EE] hover:bg-[#25F4EE]/90 transition-all duration-300 glow-cyan hover:scale-105"
          >
            <span className="relative z-10">🎯 Get Free Picks</span>
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-full text-base sm:text-lg font-semibold text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-300 hover:bg-white/5"
          >
            See Today&apos;s Picks ↓
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm"
        >
          <span className="flex items-center gap-1.5">✓ No credit card required</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="flex items-center gap-1.5">✓ Free tier always available</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="flex items-center gap-1.5">✓ Instant delivery</span>
        </motion.div>

        {/* Mock Telegram preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-sm mx-auto"
        >
          <div className="glass-card rounded-2xl p-4 text-left border border-[#25F4EE]/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#25F4EE] to-[#7C3AED] flex items-center justify-center text-sm font-bold text-black">🎯</div>
              <div>
                <p className="text-xs font-semibold text-white">AI Parlay Picks Bot</p>
                <p className="text-[10px] text-[#25F4EE]">● Online</p>
              </div>
            </div>
            <div className="bg-[#1a1a2e] rounded-xl p-3 text-xs space-y-1.5">
              <p className="text-white font-semibold">🎯 Today&apos;s Smart Parlay</p>
              <p className="text-white/60">NFL: Chiefs -3.5 ✓</p>
              <p className="text-white/60">NBA: Lakers ML ✓</p>
              <p className="text-white/60">NHL: Bruins O5.5 ✓</p>
              <div className="mt-2 pt-2 border-t border-white/10 flex justify-between">
                <span className="text-[#25F4EE] font-bold">+EV Parlay</span>
                <span className="text-[#FE2C55] font-bold">+$247 potential</span>
              </div>
            </div>
            <p className="text-[10px] text-white/30 mt-2 text-center">Confidence: 78% · Low Risk · 3-leg parlay</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
