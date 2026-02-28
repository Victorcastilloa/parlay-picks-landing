"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🔴",
    title: "Real-time odds",
    desc: "Live data from 40+ bookmakers, updated every 60 seconds. Always current lines.",
  },
  {
    icon: "⚡",
    title: "Smart Parlay engine",
    desc: "One command — /smart — builds a high-value parlay with confidence scores in seconds.",
  },
  {
    icon: "🏆",
    title: "8 sports covered",
    desc: "NFL, NBA, MLB, NHL, Soccer, Tennis, College Football, College Basketball.",
  },
  {
    icon: "📊",
    title: "Confidence scores",
    desc: "Every pick has a 0-100% AI confidence rating so you know the strength of each play.",
  },
  {
    icon: "💰",
    title: "Payout calculator",
    desc: "See potential returns before you bet. Enter your stake, see the exact payout.",
  },
  {
    icon: "🎛️",
    title: "Adjustable risk",
    desc: "Low, medium, or high. Conservative 2-leg or aggressive 5-leg. AI adapts to your style.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.015] to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-cyan-400 mb-3 tracking-wide uppercase">Features</p>
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight text-white max-w-lg mx-auto">
            Everything you need to pick smarter
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-6 group"
            >
              <span className="text-2xl block mb-3 group-hover:scale-110 transition-transform duration-200">{f.icon}</span>
              <h3 className="text-[15px] font-semibold text-zinc-100 mb-1.5">{f.title}</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
