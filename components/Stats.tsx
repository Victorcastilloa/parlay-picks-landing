"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "72+", label: "Sports tracked" },
  { value: "40+", label: "Bookmakers" },
  { value: "<10s", label: "Pick generation" },
  { value: "24/7", label: "Live odds" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 border-y border-white/[0.04]">
      <div ref={ref} className="max-w-5xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-1">
              {s.value}
            </div>
            <p className="text-[13px] text-zinc-600">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
