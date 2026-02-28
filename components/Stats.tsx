const stats = [
  { value: "72+", label: "Sports tracked", icon: "📊" },
  { value: "40+", label: "Bookmakers", icon: "🏦" },
  { value: "<10s", label: "Pick generation", icon: "⚡" },
  { value: "24/7", label: "Live odds", icon: "🔴" },
];

export default function Stats() {
  return (
    <section className="py-16 border-y border-white/[0.04] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.02] via-transparent to-purple-500/[0.02]" />
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={s.label} className={`fade-up delay-${i+1} text-center py-2`}>
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1">{s.value}</div>
            <p className="text-[12px] text-zinc-500 font-medium uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
