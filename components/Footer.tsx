const BOT = "https://t.me/parlay_picks_bot";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/[0.03] to-transparent pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Ready to pick smarter?</h2>
            <p className="text-sm text-zinc-500 mb-8 max-w-md mx-auto">Join bettors who use AI-powered analysis to find +EV parlays. Start free, upgrade when you see results.</p>
            <a href={BOT} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block px-8 py-3 rounded-lg text-sm">Get started for free →</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-white text-[10px] font-bold">A</div>
            <span className="text-[12px] text-zinc-600">© 2026 AI Parlay Picks · Not financial advice · 18+</span>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "Terms", href: "/terms" },
              { label: "Privacy", href: "/privacy" },
              { label: "Twitter", href: "https://x.com/AIParlayPicksTG" },
              { label: "Reddit", href: "https://reddit.com/u/AIParlayPicksTG" },
              { label: "Discord", href: "#" },
              { label: "Telegram", href: BOT },
            ].map(l => <a key={l.label} href={l.href} target={l.href.startsWith("/") ? undefined : "_blank"} rel={l.href.startsWith("/") ? undefined : "noopener noreferrer"} className="text-[12px] text-zinc-600 hover:text-zinc-300 transition-colors">{l.label}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
