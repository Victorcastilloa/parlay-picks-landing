const features = [
  { icon: "🔴", title: "Real-time odds", desc: "Live data from 40+ bookmakers, updated every 60 seconds. Always current lines." },
  { icon: "⚡", title: "Smart Parlay engine", desc: "One command — /smart — builds a high-value parlay with confidence scores in seconds." },
  { icon: "🏆", title: "8 sports covered", desc: "NFL, NBA, MLB, NHL, Soccer, Tennis, College Football, College Basketball." },
  { icon: "📊", title: "Confidence scores", desc: "Every pick has a 0-100% AI confidence rating so you know the strength of each play." },
  { icon: "💰", title: "Payout calculator", desc: "See potential returns before you bet. Enter your stake, see the exact payout." },
  { icon: "🎛️", title: "Adjustable risk", desc: "Low, medium, or high. Conservative 2-leg or aggressive 5-leg. AI adapts to your style." },
];

export default function Features() {
  return (
    <section id="features" className="py-32 sm:py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.015] to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[13px] font-semibold text-cyan-400 mb-4 tracking-wide uppercase">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Everything you need to pick smarter</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className={`fade-up delay-${i+1} card p-7 group flex flex-col`}>
              <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform duration-200">{f.icon}</span>
              <h3 className="text-[15px] font-semibold text-zinc-100 mb-2.5">{f.title}</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
