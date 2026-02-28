const BOT = "https://t.me/parlay_picks_bot";

const Check = () => (
  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-500/60" fill="none" viewBox="0 0 16 16">
    <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const plans = [
  { name: "Free", price: "$0", period: "forever", desc: "Try the bot risk-free",
    features: ["2 picks per day", "Basic AI analysis", "Random parlays (up to 3 legs)", "Standard confidence scores"],
    cta: "Start free", highlight: false },
  { name: "Premium", price: "$4.99", period: "/month", desc: "For serious bettors",
    features: ["8 picks per day", "/smart AI parlay command", "/quick live game bets", "All sports covered", "Full AI analysis + reasoning", "Risk level selection"],
    cta: "Go Premium", highlight: true },
  { name: "VIP", price: "$14.99", period: "/month", desc: "Maximum edge",
    features: ["Everything in Premium", "Unlimited daily picks", "Custom on-demand parlays", "Up to 10-leg parlays", "Priority support", "Quick bet every 2 hours"],
    cta: "Go VIP", highlight: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[13px] font-semibold text-cyan-400 mb-4 tracking-wide uppercase">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Start free, upgrade when ready</h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">No lock-in. Cancel anytime. First picks are on us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <div key={p.name} className={`fade-up delay-${i+1} rounded-xl p-8 flex flex-col relative overflow-hidden ${
              p.highlight ? "bg-gradient-to-b from-cyan-500/[0.06] to-transparent border border-cyan-500/20" : "card"
            }`}>
              {p.highlight && <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />}
              {p.highlight && (
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-5 self-start">
                  Popular
                </span>
              )}

              <h3 className="text-sm font-medium text-zinc-400 mb-1.5">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="text-sm text-zinc-600">{p.period}</span>
              </div>
              <p className="text-[13px] text-zinc-600 mb-7">{p.desc}</p>
              <div className="h-px bg-white/[0.05] mb-6" />

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-[13px]"><Check /><span className="text-zinc-400">{f}</span></li>
                ))}
              </ul>

              <a href={BOT} target="_blank" rel="noopener noreferrer"
                className={`block w-full py-3 rounded-lg text-center text-sm font-medium transition-all ${
                  p.highlight ? "btn-primary" : "btn-secondary"
                }`}>
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-[11px] text-zinc-700 mt-10">All payments through Stripe. Cancel with one click.</p>
      </div>
    </section>
  );
}
