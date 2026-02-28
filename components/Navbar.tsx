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
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.04]" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#" className="text-[15px] font-semibold tracking-tight text-white">
          AI Parlay Picks
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-[#09090b] bg-white hover:bg-zinc-200 px-4 py-1.5 rounded-md transition-colors"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-1.5 text-zinc-400"
          onClick={() => setOpen(!open)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <>
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" />
              </>
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
            className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-white/[0.04]"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-zinc-400 hover:text-white py-1">
                  {l.label}
                </a>
              ))}
              <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-black bg-white rounded-md px-4 py-2 text-center mt-1">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
