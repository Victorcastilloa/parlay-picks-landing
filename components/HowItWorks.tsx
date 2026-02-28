const steps = [
  { num: "01", icon: "📡", title: "Real-time market scan", desc: "Every 60 seconds, we pull live odds from 40+ bookmakers across 72 sports. You never bet on stale lines.", color: "cyan" },
  { num: "02", icon: "🧠", title: "AI-powered analysis", desc: "Claude AI cross-references injuries, form, head-to-head history, and odds movement to find +EV opportunities.", color: "purple" },
  { num: "03", icon: "📲", title: "Picks to your Telegram", desc: "Choose legs, risk level, and sport. Your personalized parlay arrives in under 10 seconds, ready to bet.", color: "emerald" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[13px] font-semibold text-cyan-400 mb-4 tracking-wide uppercase">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">From live data to your parlay in seconds</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className={`fade-up delay-${i+1} card p-8 group hover:border-${s.color}-500/25 transition-all`}>
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl">{s.icon}</span>
                <span className="text-[11px] font-mono text-zinc-700 tracking-widest">STEP {s.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">{s.title}</h3>
              <p className="text-[14px] text-zinc-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
