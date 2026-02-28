"use client";

import { motion } from "framer-motion";

const BOT_URL = "https://t.me/ParlayPicksBot";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-14">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-zinc-400 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live — processing picks right now
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] font-bold tracking-[-0.035em] leading-[1.08] text-white mb-5"
        >
          Sports picks powered
          <br />
          by real-time AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Live odds from 40+ bookmakers. AI analysis of injuries, matchups, and
          line movement. Delivered to your Telegram in seconds.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-[#09090b] bg-white hover:bg-zinc-200 transition-colors accent-glow"
          >
            Start for free →
          </a>
          <a
            href="#how-it-works"
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-zinc-400 border border-white/[0.08] hover:border-white/[0.16] hover:text-zinc-200 transition-all"
          >
            See how it works
          </a>
        </motion.div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] text-zinc-600"
        >
          <span>No credit card required</span>
          <span className="text-zinc-800">·</span>
          <span>Cancel anytime</span>
          <span className="text-zinc-800">·</span>
          <span>Free tier always available</span>
        </motion.div>

        {/* Bot preview card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 max-w-sm mx-auto"
        >
          <div className="subtle-card p-4 text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[11px]">
                🎯
              </div>
              <div>
                <p className="text-[12px] font-medium text-zinc-300">Parlay Picks Bot</p>
                <p className="text-[10px] text-emerald-500">online</p>
              </div>
              <span className="ml-auto text-[10px] text-zinc-700">just now</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-3 text-[12px] space-y-1.5 font-mono">
              <p className="text-zinc-300 font-sans font-medium text-[11px] mb-2">Smart Parlay — 3 legs · Medium Risk</p>
              <p className="text-zinc-500">
                <span className="text-cyan-400">1.</span> Celtics -3.5 <span className="text-zinc-600">@ -110</span>
              </p>
              <p className="text-zinc-500">
                <span className="text-cyan-400">2.</span> Chiefs ML <span className="text-zinc-600">@ -145</span>
              </p>
              <p className="text-zinc-500">
                <span className="text-cyan-400">3.</span> Over 215.5 (LAL/GSW) <span className="text-zinc-600">@ -108</span>
              </p>
              <div className="mt-2.5 pt-2 border-t border-white/[0.05] flex justify-between text-[11px]">
                <span className="text-zinc-400">+412 combined</span>
                <span className="text-emerald-400 font-medium">$10 → $51.20</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
