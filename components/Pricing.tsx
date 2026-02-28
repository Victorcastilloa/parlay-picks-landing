"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BOT_URL = "https://t.me/ParlayPicksBot";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Try the bot, no commitment",
    features: [
      "1 pick every 4 hours",
      "Basic AI analysis",
      "NFL & NBA",
      "Standard confidence scores",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/mo",
    desc: "For bettors who want an edge",
    features: [
      "Unlimited daily picks",
      "/smart parlay command",
      "All 8 sports",
      "Full AI analysis + reasoning",
      "Risk level selection",
      "Payout calculator",
    ],
    cta: "Go Premium",
    highlight: true,
  },
  {
    name: "VIP",
    price: "$14.99",
    period: "/mo",
    desc: "Maximum edge, priority access",
    features: [
      "Everything in Premium",
      "Custom on-demand picks",
      "Priority queue",
      "Early line alerts",
      "Direct analyst access",
    ],
    cta: "Go VIP",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-medium text-cyan-400 mb-3 tracking-wide uppercase">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Start free, scale when you&apos;re ready
          </h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">
            No lock-in. Cancel anytime. Your first picks are on us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-xl p-6 sm:p-7 flex flex-col ${
                plan.highlight
                  ? "bg-white/[0.03] border border-cyan-500/20 ring-1 ring-cyan-500/10"
                  : "subtle-card"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full mb-4 self-start">
                  Most Popular
                </span>
              )}

              <h3 className="text-sm font-medium text-zinc-400 mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-sm text-zinc-600">{plan.period}</span>
              </div>
              <p className="text-[13px] text-zinc-600 mb-6">{plan.desc}</p>

              <div className="h-px bg-white/[0.04] mb-5" />

              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px]">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-zinc-600" fill="none" viewBox="0 0 16 16">
                      <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-zinc-400">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-2.5 rounded-lg text-center text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#09090b] hover:bg-zinc-200"
                    : "border border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.16]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[11px] text-zinc-700 mt-8">
          All payments through Stripe. Cancel with one click.
        </p>
      </div>
    </section>
  );
}
