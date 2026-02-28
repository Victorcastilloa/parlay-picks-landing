"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOT_URL = "https://t.me/ParlayPicksBot";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.06]" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white text-sm font-bold">A</div>
          <span className="text-[15px] font-semibold text-white">AI Parlay Picks</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors">
              {l.label}
            </a>
          ))}
          <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-[13px] px-5 py-2 rounded-lg">
            Get Free Picks
          </a>
        </div>

        <button className="md:hidden p-2 text-zinc-400" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M3 7h16M3 11h16M3 15h16" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-zinc-400 hover:text-white">
                  {l.label}
                </a>
              ))}
              <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-5 py-2.5 rounded-lg text-center mt-1">
                Get Free Picks
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
