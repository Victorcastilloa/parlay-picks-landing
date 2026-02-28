"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: "📊",
    step: "01",
    title: "Real-Time Data",
    description:
      "We scan 72+ sports and 40+ bookmakers for the best odds using The Odds API — updated every minute so you never bet on stale lines.",
    color: "#25F4EE",
    colorClass: "border-[#25F4EE]/30 bg-[#25F4EE]/5",
    stepColor: "text-[#25F4EE]",
  },
  {
    icon: "🤖",
    step: "02",
    title: "AI Analysis",
    description:
      "Claude AI analyzes injuries, recent form, head-to-head matchups, and odds movement to find +EV opportunities humans miss.",
    color: "#7C3AED",
    colorClass: "border-[#7C3AED]/30 bg-[#7C3AED]/5",
    stepColor: "text-[#7C3AED]",
  },
  {
    icon: "🎯",
    step: "03",
    title: "Your Picks",
    description:
      "Get personalized parlays delivered instantly to Telegram. Choose your legs (2-6), risk level (Low/Med/High), and sport.",
    color: "#FE2C55",
    colorClass: "border-[#FE2C55]/30 bg-[#FE2C55]/5",
    stepColor: "text-[#FE2C55]",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative glass-card rounded-2xl p-6 sm:p-8 border ${step.colorClass} group hover:scale-[1.02] transition-transform duration-300`}
    >
      {/* Step number */}
      <div className={`text-6xl font-black opacity-10 absolute top-4 right-6 ${step.stepColor}`}>
        {step.step}
      </div>

      {/* Icon */}
      <div className="text-4xl mb-4">{step.icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

      {/* Description */}
      <p className="text-white/60 leading-relaxed text-sm sm:text-base">
        {step.description}
      </p>

      {/* Connector line (not on last) */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
          <div className="flex items-center gap-1">
            <div className="w-3 h-0.5 bg-white/20" />
            <div className="text-white/20">→</div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function HowItWorks() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED]/30 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            From Data to Your{" "}
            <span className="gradient-text-cyan-purple">Telegram</span> in
            Seconds
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Three simple steps powered by real-time data and cutting-edge AI.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.step} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://t.me/ParlayPicksBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#25F4EE] hover:text-white font-semibold transition-colors duration-200 group"
          >
            Try it for free
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
