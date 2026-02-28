"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BOT_URL = "https://t.me/ParlayPicksBot";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect to try the bot risk-free",
    features: [
      "1 pick every 4 hours",
      "Basic AI analysis",
      "2-3 leg parlays",
      "NFL & NBA only",
      "Standard confidence scores",
    ],
    missing: ["Full daily picks", "/smart command", "All 8 sports", "Custom picks"],
    cta: "Start Free",
    ctaStyle:
      "border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
    popular: false,
    badge: null,
    cardStyle: "glass-card border-white/10",
    accentColor: "#25F4EE",
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "per month",
    description: "For serious bettors who want an edge",
    features: [
      "All daily picks (unlimited)",
      "/smart parlay command",
      "Full AI analysis + reasoning",
      "All 8 sports covered",
      "Confidence scores & payout calc",
      "Risk level selection",
    ],
    missing: ["Custom on-demand picks", "Priority support"],
    cta: "Go Premium",
    ctaStyle: "bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white glow-purple",
    popular: true,
    badge: "Most Popular",
    cardStyle:
      "glass-card border-[#7C3AED]/50 shadow-lg shadow-[#7C3AED]/10",
    accentColor: "#7C3AED",
  },
  {
    name: "VIP",
    price: "$14.99",
    period: "per month",
    description: "Maximum edge for high-stakes players",
    features: [
      "Everything in Premium",
      "Custom on-demand picks",
      "/pick [team] command",
      "Priority queue access",
      "Early line alerts",
      "DM access to analyst",
    ],
    missing: [],
    cta: "Go VIP",
    ctaStyle: "bg-[#FE2C55] hover:bg-[#FE2C55]/90 text-white glow-pink",
    popular: false,
    badge: "Best Value",
    cardStyle: "glass-card border-[#FE2C55]/30",
    accentColor: "#FE2C55",
  },
];

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl p-6 sm:p-8 border ${plan.cardStyle} ${
        plan.popular ? "md:-translate-y-4 md:scale-[1.02]" : ""
      } transition-transform duration-300 hover:scale-[1.02] flex flex-col`}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
          style={{ background: plan.accentColor }}
        >
          {plan.badge}
        </div>
      )}

      {/* Plan name & price */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white/70 mb-1">{plan.name}</h3>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-4xl font-black text-white">{plan.price}</span>
          <span className="text-white/40 pb-1">/{plan.period}</span>
        </div>
        <p className="text-white/45 text-sm">{plan.description}</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-6" />

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span style={{ color: plan.accentColor }} className="mt-0.5 flex-shrink-0">
              ✓
            </span>
            <span className="text-white/70">{feature}</span>
          </li>
        ))}
        {plan.missing.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span className="text-white/20 mt-0.5 flex-shrink-0">✕</span>
            <span className="text-white/25 line-through">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={BOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full py-3 rounded-xl text-center font-bold text-sm transition-all duration-200 hover:scale-[1.02] ${plan.ctaStyle}`}
      >
        {plan.cta} →
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#25F4EE]/2 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25F4EE]/15 text-[#25F4EE] border border-[#25F4EE]/30 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Start Free,{" "}
            <span className="gradient-text">Upgrade Anytime</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            No commitment. Cancel whenever. Your first picks are always free.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-sm mt-10"
        >
          All plans billed through Stripe. Cancel anytime — no questions asked.
        </motion.p>
      </div>
    </section>
  );
}
