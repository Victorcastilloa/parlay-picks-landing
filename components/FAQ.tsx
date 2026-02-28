"use client";
import { useState } from "react";

const faqs = [
  { q: "Is this legal?", a: "Yes. We provide analysis and recommendations — not betting services. Think of it like a sports analyst you subscribe to. Legal in all 50 US states." },
  { q: "How does the AI generate picks?", a: "We use Claude AI for sports analysis, Perplexity for real-time injury/news data, and The Odds API for live odds from 40+ bookmakers." },
  { q: "What sports do you cover?", a: "NFL, NBA, MLB, NHL, Soccer, Tennis, College Football, and College Basketball. Premium and VIP get all 8." },
  { q: "Can I cancel anytime?", a: "Yes. Subscriptions run through Stripe — cancel from Telegram or your Stripe portal. You keep access through the end of your billing period." },
  { q: "How fast are the picks?", a: "The /smart command generates a complete AI parlay in 6-10 seconds. Real-time odds are updated every 60 seconds." },
  { q: "What does a pick include?", a: "Team/player, bet type, odds, confidence score (0-100%), AI reasoning, and estimated payout. VIP picks also include injury context and line movement analysis." },
];

function Item({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.04]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-[14px] font-medium text-zinc-300 group-hover:text-white transition-colors pr-4">{faq.q}</span>
        <span className={`flex-shrink-0 text-zinc-600 text-lg transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="text-[13px] text-zinc-500 leading-relaxed pb-5">{faq.a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-32 sm:py-40">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[13px] font-semibold text-cyan-400 mb-4 tracking-wide uppercase">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Common questions</h2>
        </div>
        <div>{faqs.map((f, i) => <Item key={i} faq={f} />)}</div>
      </div>
    </section>
  );
}
