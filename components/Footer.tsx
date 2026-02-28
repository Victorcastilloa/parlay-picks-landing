"use client";

const BOT_URL = "https://t.me/ParlayPicksBot";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      {/* Final CTA */}
      <div className="max-w-5xl mx-auto px-5 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          Ready to pick smarter?
        </h2>
        <p className="text-sm text-zinc-500 mb-8 max-w-md mx-auto">
          Join thousands of bettors using AI-powered analysis. Start free, upgrade when you see results.
        </p>
        <a
          href={BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-lg text-sm font-medium text-[#09090b] bg-white hover:bg-zinc-200 transition-colors accent-glow"
        >
          Get started for free →
        </a>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-700">
            © 2026 AI Parlay Picks · Not financial advice · Gamble responsibly · 18+
          </p>
          <div className="flex items-center gap-5">
            <a href="https://x.com/AIParlayPicksTG" target="_blank" rel="noopener noreferrer" className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors">
              Twitter
            </a>
            <a href="https://reddit.com/u/AIParlayPicksTG" target="_blank" rel="noopener noreferrer" className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors">
              Reddit
            </a>
            <a href="#" className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors">
              Discord
            </a>
            <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
