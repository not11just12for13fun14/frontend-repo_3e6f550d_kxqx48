import { motion } from "framer-motion";

const steps = [
  {
    title: "Upload your video",
    desc: "Drop in raw footage or link your source. We handle long-form, shorts, and everything in between.",
  },
  {
    title: "AI analyzes content",
    desc: "Understands style, tone, pacing, context and intent like a real editor.",
  },
  {
    title: "Smart editing applied",
    desc: "Cuts, color, captions, music, and b‑roll generated automatically — guided by your brand style.",
  },
  {
    title: "Download the final cut",
    desc: "Review and export a studio‑quality edit in minutes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
          How it works
        </h2>
        <div className="text-sm text-white/60">Automation that feels like magic</div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-[#39D2C9]/20 to-[#7C3AED]/20 text-white/90">
              <span className="text-sm font-semibold">{i + 1}</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
            <p className="text-sm text-white/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
