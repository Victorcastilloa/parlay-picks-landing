"use client";

import { motion } from "framer-motion";

const BOT_URL = "https://t.me/ParlayPicksBot";

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/AIParlayPicksTG",
    icon: "𝕏",
  },
  {
    label: "Reddit",
    href: "https://reddit.com/u/AIParlayPicksTG",
    icon: "𝐑",
  },
  {
    label: "Discord",
    href: "#",
    icon: "💬",
  },
  {
    label: "Telegram",
    href: BOT_URL,
    icon: "✈️",
  },
];

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#7C3AED]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">🎯</span>
              <span className="font-bold text-white text-xl">
                AI <span className="gradient-text-cyan-purple">Parlay</span>{" "}
                Picks
              </span>
            </a>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              AI-powered sports parlay picks delivered to your Telegram.
              Free to start, instant results.
            </p>
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-[#25F4EE]/10 border border-[#25F4EE]/30 text-[#25F4EE] text-sm font-semibold hover:bg-[#25F4EE]/20 transition-all duration-200"
            >
              🎯 Start on Telegram →
            </a>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 AI Parlay Picks. Not financial advice. Gamble responsibly.
            Must be 18+ to participate.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full glass-card border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200 text-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
