"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Live market scan",
    desc: "Every 60 seconds, we pull odds from 40+ bookmakers across 72 sports via The Odds API. No stale lines.",
  },
  {
    num: "02",
    title: "AI-powered analysis",
    desc: "Claude AI cross-references injuries, recent form, head-to-head history, and line movement to find +EV opportunities.",
  },
  {
    num: "03",
    title: "Picks to your Telegram",
    desc: "Choose your legs, risk level, and sport. Your personalized parlay arrives in under 10 seconds, ready to bet.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[13px] font-medium text-cyan-400 mb-3 tracking-wide uppercase">
            How it works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            From real-time data to your<br className="hidden sm:block" /> parlay in seconds
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.04] rounded-xl overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#09090b] p-8 group"
            >
              <span className="text-[11px] font-mono text-zinc-700 uppercase tracking-widest">
                Step {step.num}
              </span>
              <h3 className="text-lg font-semibold text-white mt-3 mb-3 group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
