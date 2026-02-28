"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    icon: "📡",
    title: "Real-time market scan",
    desc: "Every 60 seconds, we pull live odds from 40+ bookmakers across 72 sports. You never bet on stale lines.",
    accent: "from-cyan-500/20 to-cyan-500/0",
    border: "border-cyan-500/10 hover:border-cyan-500/25",
  },
  {
    num: "02",
    icon: "🧠",
    title: "AI-powered analysis",
    desc: "Claude AI cross-references injuries, form, head-to-head history, and odds movement to find +EV opportunities.",
    accent: "from-purple-500/20 to-purple-500/0",
    border: "border-purple-500/10 hover:border-purple-500/25",
  },
  {
    num: "03",
    icon: "📲",
    title: "Picks to your Telegram",
    desc: "Choose legs, risk level, and sport. Your personalized parlay arrives in under 10 seconds, ready to bet.",
    accent: "from-emerald-500/20 to-emerald-500/0",
    border: "border-emerald-500/10 hover:border-emerald-500/25",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-cyan-400 mb-3 tracking-wide uppercase">How it works</p>
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold tracking-tight text-white max-w-xl mx-auto">
            From live data to your parlay in seconds
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative group card ${step.border} p-7 overflow-hidden transition-all duration-300`}
            >
              {/* Background gradient */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${step.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-[11px] font-mono text-zinc-700 tracking-widest">STEP {step.num}</span>
                </div>
                <h3 className="text-[17px] font-semibold text-white mb-2.5">{step.title}</h3>
                <p className="text-[13.5px] text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
