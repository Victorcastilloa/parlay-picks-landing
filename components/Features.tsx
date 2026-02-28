"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Real-time odds",
    desc: "Live data from 40+ bookmakers updated every 60 seconds. You always bet on current lines, not yesterday's.",
  },
  {
    title: "Smart Parlay engine",
    desc: "One command — /smart — builds a high-value parlay with AI confidence scores. Choose legs and risk level.",
  },
  {
    title: "8 sports covered",
    desc: "NFL, NBA, MLB, NHL, Soccer, Tennis, College Football, College Basketball. All in one bot.",
  },
  {
    title: "AI confidence scores",
    desc: "Every pick comes with a 0-100% confidence rating based on data analysis, so you know the strength of each play.",
  },
  {
    title: "Instant payout math",
    desc: "See your potential payout before you bet. Enter your stake, see the return. American and decimal odds supported.",
  },
  {
    title: "Adjustable risk",
    desc: "Low, medium, or high. Conservative 2-leg or aggressive 5-leg. The AI adapts its strategy to your comfort level.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[13px] font-medium text-cyan-400 mb-3 tracking-wide uppercase">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-lg">
            Everything you need to make smarter bets
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="subtle-card p-6 transition-all duration-200"
            >
              <h3 className="text-[15px] font-medium text-zinc-200 mb-2">
                {f.title}
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
