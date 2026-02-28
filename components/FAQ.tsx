"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "Is this legal?",
    a: "Yes. We provide analysis and recommendations — not betting services. Think of it like a sports analyst you subscribe to. You decide where and whether to place bets. Legal in all 50 US states.",
  },
  {
    q: "How does the AI generate picks?",
    a: "We use Claude AI for sports analysis, Perplexity for real-time injury and news data, and The Odds API for live odds from 40+ bookmakers. The AI weighs all signals to find high-value parlay opportunities.",
  },
  {
    q: "What sports do you cover?",
    a: "NFL, NBA, MLB, NHL, Soccer, Tennis, College Football, and College Basketball. Premium and VIP users get all 8. Free users get NFL and NBA.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Subscriptions run through Stripe — cancel from Telegram or your Stripe portal. You keep access through the end of your billing period.",
  },
  {
    q: "How fast are the picks?",
    a: "The /smart command generates a complete AI parlay in 6-10 seconds. Real-time odds are updated every 60 seconds.",
  },
  {
    q: "What does a pick include?",
    a: "Team/player, bet type, odds, confidence score (0-100%), AI reasoning, and estimated payout. VIP picks also include injury context and line movement analysis.",
  },
];

function Item({ faq, i }: { faq: (typeof faqs)[0]; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.04]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[14px] font-medium text-zinc-300 group-hover:text-white transition-colors pr-4">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 text-zinc-600 text-lg transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-[13px] text-zinc-500 leading-relaxed pb-5">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[13px] font-medium text-cyan-400 mb-3 tracking-wide uppercase">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Common questions
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <Item key={i} faq={faq} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
