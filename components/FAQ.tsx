"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    question: "Is this legal?",
    answer:
      "Yes, completely. We provide analysis, data, and picks — not actual betting. Think of us like a sports analyst giving you recommendations. You decide whether and where to place bets. This service is legal in all 50 US states.",
  },
  {
    question: "How does the AI work?",
    answer:
      "Our bot uses Claude AI (Anthropic) for deep sports analysis, Perplexity for real-time injury reports and news, and The Odds API for live odds from 40+ bookmakers. The AI weighs all these signals to identify high-value parlay opportunities.",
  },
  {
    question: "What sports are covered?",
    answer:
      "NFL, NBA, MLB, NHL, MLS Soccer, ATP Tennis, College Football, and College Basketball. Premium and VIP users get access to all 8 sports, while Free users get NFL & NBA.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. Subscriptions are managed through Stripe — cancel directly from Telegram with /cancel or through your Stripe customer portal. You keep access until your billing period ends.",
  },
  {
    question: "How fast do I get picks?",
    answer:
      "Instantly. The /smart command generates a full AI parlay analysis in 6-10 seconds. Free tier picks are generated and sent within minutes of being triggered.",
  },
  {
    question: "What does a 'pick' look like?",
    answer:
      "Each pick includes: the team/player to bet on, the odds (e.g. -110), a confidence score (0-100%), AI reasoning (why this pick), and the parlay payout estimate. VIP users also get injury context and line movement notes.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass-card rounded-xl border border-white/8 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-sm sm:text-base pr-4 group-hover:text-[#25F4EE] transition-colors duration-200">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/50 transition-all duration-300 ${
            open ? "rotate-45 border-[#25F4EE]/50 text-[#25F4EE]" : ""
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
              <div className="h-px bg-white/8 mb-4" />
              <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FE2C55]/15 text-[#FE2C55] border border-[#FE2C55]/30 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Got Questions?
          </h2>
          <p className="text-white/50 text-lg">
            Everything you need to know about AI Parlay Picks.
          </p>
        </motion.div>

        {/* Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 glass-card rounded-2xl border border-[#25F4EE]/15"
        >
          <p className="text-white/60 mb-4">
            Still have questions? Just message the bot directly.
          </p>
          <a
            href="https://t.me/ParlayPicksBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25F4EE] text-black font-bold text-sm hover:bg-[#25F4EE]/90 transition-all duration-200 glow-cyan"
          >
            💬 Ask the Bot
          </a>
        </motion.div>
      </div>
    </section>
  );
}
