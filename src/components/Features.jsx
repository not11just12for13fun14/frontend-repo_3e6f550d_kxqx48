import { motion } from "framer-motion";

const features = [
  {
    title: "Full video editing",
    desc: "From first frame to final cut — automatically.",
    accent: "#7C3AED",
  },
  {
    title: "Animated captions",
    desc: "Eye‑catching on‑screen text with perfect timing.",
    accent: "#39D2C9",
  },
  {
    title: "Smart music",
    desc: "Picks tracks that match the mood of each moment.",
    accent: "#39D2C9",
  },
  {
    title: "Reference detection",
    desc: "Detects mentions and inserts relevant b‑roll automatically.",
    accent: "#7C3AED",
  },
  {
    title: "Understands your content",
    desc: "Vlog, cinematic, review — the style adapts to context.",
    accent: "#7C3AED",
  },
  {
    title: "Minutes, not hours",
    desc: "Save time and keep quality high.",
    accent: "#39D2C9",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
          Built for creators and teams
        </h2>
        <div className="text-sm text-white/60">Automation • Speed • Quality</div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div
              className="mb-4 h-10 w-10 rounded-lg"
              style={{ background: `linear-gradient(135deg, ${f.accent}33, #ffffff12)` }}
            />
            <h3 className="mb-1 text-lg font-semibold text-white">{f.title}</h3>
            <p className="text-sm text-white/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
