import { motion } from "framer-motion";

const tiers = [
  {
    name: "Creator",
    price: "$19",
    freq: "/mo",
    features: [
      "Up to 60 mins / month",
      "Automatic captions",
      "Smart music",
      "Basic style profiles",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    freq: "/mo",
    features: [
      "Up to 4 hours / month",
      "Advanced b‑roll detection",
      "Brand styles",
      "Priority processing",
    ],
    highlight: true,
  },
  {
    name: "Studio",
    price: "Custom",
    freq: "",
    features: [
      "Unlimited hours",
      "Team collaboration",
      "API access",
      "Dedicated support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
          Simple, flexible pricing
        </h2>
        <div className="text-sm text-white/60">Choose what fits your workflow</div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-2xl border p-6 backdrop-blur-sm ${
              t.highlight
                ? "border-[#39D2C9]/40 bg-white/10 shadow-[0_0_40px_rgba(57,210,201,0.15)]"
                : "border-white/10 bg-white/5"
            }`}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-6 rounded-full bg-[#39D2C9] px-2 py-0.5 text-[10px] font-semibold text-slate-900">
                Most popular
              </div>
            )}
            <div className="mb-2 text-sm text-white/60">{t.name}</div>
            <div className="mb-4 flex items-end gap-1 text-white">
              <div className="text-3xl font-semibold md:text-4xl">{t.price}</div>
              <div className="pb-1 text-sm text-white/60">{t.freq}</div>
            </div>
            <ul className="mb-6 space-y-2 text-sm text-white/75">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[10px]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full rounded-xl px-4 py-2 text-sm font-medium transition ${
              t.highlight
                ? "bg-[#39D2C9] text-slate-900 hover:brightness-110"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}>Start</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
