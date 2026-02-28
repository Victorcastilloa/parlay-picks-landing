"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 72, suffix: "+", label: "Sports tracked", icon: "📊" },
  { value: 40, suffix: "+", label: "Bookmakers", icon: "🏦" },
  { value: 10, prefix: "<", suffix: "s", label: "Pick generation", icon: "⚡" },
  { value: 24, suffix: "/7", label: "Live odds", icon: "🔴" },
];

function Counter({ target, prefix, suffix, active }: { target: number; prefix?: string; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const steps = 40;
    const inc = target / steps;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{prefix}{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section className="py-14 border-y border-white/[0.04] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.02] via-transparent to-purple-500/[0.02]" />
      <div ref={ref} className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center py-2"
          >
            <div className="text-xl mb-2">{s.icon}</div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} active={inView} />
            </div>
            <p className="text-[12px] text-zinc-500 font-medium uppercase tracking-wider">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
