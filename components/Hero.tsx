"use client";

import { motion } from "framer-motion";

const BOT_URL = "https://t.me/parlay_picks_bot";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/[0.07] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] text-[12px] text-cyan-300 font-medium mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Live — processing picks now
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] font-bold tracking-[-0.03em] leading-[1.1] text-white mb-5"
            >
              Sports picks
              <br />
              powered by{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                real-time AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-zinc-400 max-w-md mb-9 leading-relaxed"
            >
              Live odds from 40+ bookmakers. AI analysis of injuries, matchups,
              and line movement. Delivered to your Telegram in seconds.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3 rounded-lg text-sm">
                Get free picks →
              </a>
              <a href="#how-it-works" className="btn-secondary px-7 py-3 rounded-lg text-sm">
                How it works
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-zinc-600"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-cyan-500/60" fill="none" viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-cyan-500/60" fill="none" viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Cancel anytime
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-cyan-500/60" fill="none" viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Free tier forever
              </span>
            </motion.div>
          </div>

          {/* Right: Bot Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-cyan-500/[0.06] blur-[60px] rounded-3xl pointer-events-none" />

            <div className="relative card p-5 sm:p-6 max-w-md mx-auto lg:mx-0">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-lg">
                  🎯
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">Parlay Picks Bot</p>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online
                  </p>
                </div>
                <span className="text-[11px] text-zinc-600">just now</span>
              </div>

              {/* Message bubble */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mb-3">
                <p className="text-[13px] font-semibold text-white mb-3 flex items-center gap-2">
                  🎯 Smart Parlay
                  <span className="text-[10px] font-normal text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">3 legs · Medium</span>
                </p>

                <div className="space-y-2.5 mb-3 font-mono text-[12.5px]">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">
                      <span className="text-cyan-400 font-semibold mr-1.5">1</span>
                      Celtics -3.5
                    </span>
                    <span className="text-zinc-600">-110</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">
                      <span className="text-cyan-400 font-semibold mr-1.5">2</span>
                      Chiefs ML
                    </span>
                    <span className="text-zinc-600">-145</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">
                      <span className="text-cyan-400 font-semibold mr-1.5">3</span>
                      Over 215.5 (LAL/GSW)
                    </span>
                    <span className="text-zinc-600">-108</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex justify-between items-center text-[12px]">
                  <div>
                    <span className="text-zinc-500">Combined</span>
                    <span className="text-white font-semibold ml-1.5">+412</span>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                    <span className="text-emerald-400 font-semibold">$10 → $51.20</span>
                  </div>
                </div>
              </div>

              {/* Confidence bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" />
                </div>
                <span className="text-[11px] text-zinc-500">68% confidence</span>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 mt-4">
                <div className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-lg py-2 text-center text-[11px] text-zinc-500">
                  💾 Save Pick
                </div>
                <div className="flex-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg py-2 text-center text-[11px] text-cyan-400">
                  🔄 New Parlay
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#09090b] to-transparent" />
    </section>
  );
}
