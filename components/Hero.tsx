const BOT = "https://t.me/parlay_picks_bot";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/[0.07] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] text-[12px] text-cyan-300 font-medium mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Live — processing picks now
            </div>

            <h1 className="fade-up delay-1 text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.03em] leading-[1.1] text-white mb-5">
              Sports picks<br />powered by{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">real-time AI</span>
            </h1>

            <p className="fade-up delay-2 text-base sm:text-lg text-zinc-400 max-w-md mx-auto lg:mx-0 mb-9 leading-relaxed">
              Live odds from 40+ bookmakers. AI analysis of injuries, matchups, and line movement. Delivered to your Telegram in seconds.
            </p>

            <div className="fade-up delay-3 flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <a href={BOT} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3 rounded-lg text-sm">Get free picks →</a>
              <a href="#how-it-works" className="btn-secondary px-7 py-3 rounded-lg text-sm">How it works</a>
            </div>

            <div className="fade-up delay-4 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-1 text-[12px] text-zinc-600">
              {["No credit card", "Cancel anytime", "Free tier forever"].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-cyan-500/60" fill="none" viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bot Preview */}
          <div className="fade-up delay-5 relative max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-cyan-500/[0.06] blur-[60px] rounded-3xl pointer-events-none" />
            <div className="relative card p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center text-lg">🎯</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">Parlay Picks Bot</p>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />Online
                  </p>
                </div>
                <span className="text-[11px] text-zinc-600">just now</span>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mb-3">
                <p className="text-[13px] font-semibold text-white mb-3 flex items-center gap-2">
                  🎯 Smart Parlay
                  <span className="text-[10px] font-normal text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">3 legs · Medium</span>
                </p>
                <div className="space-y-2.5 mb-3 font-mono text-[13px]">
                  {[["1","Celtics -3.5","-110"],["2","Chiefs ML","-145"],["3","Over 215.5 (LAL/GSW)","-108"]].map(([n,t,o]) => (
                    <div key={n} className="flex justify-between items-center">
                      <span className="text-zinc-400"><span className="text-cyan-400 font-semibold mr-2">{n}</span>{t}</span>
                      <span className="text-zinc-600">{o}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/[0.06] flex justify-between items-center text-[12px]">
                  <div><span className="text-zinc-500">Combined</span><span className="text-white font-semibold ml-1.5">+412</span></div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                    <span className="text-emerald-400 font-semibold">$10 → $51.20</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" />
                </div>
                <span className="text-[11px] text-zinc-500">68% confidence</span>
              </div>

              <div className="flex gap-2 mt-4">
                <div className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-lg py-2 text-center text-[11px] text-zinc-500">💾 Save Pick</div>
                <div className="flex-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg py-2 text-center text-[11px] text-cyan-400">🔄 New Parlay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
