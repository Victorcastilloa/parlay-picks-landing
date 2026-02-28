"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    icon: "🔴",
    title: "Live Odds Data",
    description:
      "Not yesterday's lines. Real-time odds updated every 60 seconds from 40+ bookmakers worldwide.",
    accent: "#FE2C55",
    accentClass: "border-[#FE2C55]/20 hover:border-[#FE2C55]/50",
    dotClass: "bg-[#FE2C55]",
  },
  {
    icon: "⚡",
    title: "Smart Parlay Generator",
    description:
      "One command — /smart — and the AI builds you a high-value parlay with confidence scores in seconds.",
    accent: "#25F4EE",
    accentClass: "border-[#25F4EE]/20 hover:border-[#25F4EE]/50",
    dotClass: "bg-[#25F4EE]",
  },
  {
    icon: "🏈",
    title: "8 Sports Covered",
    description:
      "NFL, NBA, MLB, NHL, Soccer, Tennis, College Football, and College Basketball all in one bot.",
    accent: "#7C3AED",
    accentClass: "border-[#7C3AED]/20 hover:border-[#7C3AED]/50",
    dotClass: "bg-[#7C3AED]",
  },
  {
    icon: "📊",
    title: "Confidence Scores",
    description:
      "Every pick comes with an AI confidence rating (0-100%) so you know exactly how strong each play is.",
    accent: "#25F4EE",
    accentClass: "border-[#25F4EE]/20 hover:border-[#25F4EE]/50",
    dotClass: "bg-[#25F4EE]",
  },
  {
    icon: "💰",
    title: "Payout Calculator",
    description:
      "See your potential payout instantly. Enter your stake and the bot shows exactly what you'd win.",
    accent: "#FE2C55",
    accentClass: "border-[#FE2C55]/20 hover:border-[#FE2C55]/50",
    dotClass: "bg-[#FE2C55]",
  },
  {
    icon: "🎲",
    title: "Risk Levels",
    description:
      "Choose Low, Medium, or High risk to match your style. Conservative 2-leg or aggressive 6-leg parlays.",
    accent: "#7C3AED",
    accentClass: "border-[#7C3AED]/20 hover:border-[#7C3AED]/50",
    dotClass: "bg-[#7C3AED]",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`glass-card rounded-xl p-6 border ${feature.accentClass} transition-all duration-300 group cursor-default`}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {feature.icon}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-1.5 h-1.5 rounded-full ${feature.dotClass}`} />
            <h3 className="font-bold text-white text-base">{feature.title}</h3>
          </div>
          <p className="text-white/55 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-20 sm:py-28 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/3 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FE2C55]/15 text-[#FE2C55] border border-[#FE2C55]/30 mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Pick Smarter</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Built for bettors who want data-driven picks — not hunches.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
