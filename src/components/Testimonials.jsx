import { motion } from "framer-motion";

const quotes = [
  {
    name: "Ava, creator",
    text: "Synk.ai turned a 2‑hour edit into 8 minutes. It nails the vibe every time.",
  },
  {
    name: "Noah, agency lead",
    text: "We ship more content without hiring. The AI feels like a senior editor.",
  },
  {
    name: "Mia, YouTuber",
    text: "Captions, b‑roll, music — all automatic. My workflow is permanently changed.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
          Trusted by creators
        </h2>
        <div className="text-sm text-white/60">Results that speak for themselves</div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <motion.blockquote
            key={q.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur-sm"
          >
            “{q.text}”
            <footer className="mt-4 text-sm text-white/60">— {q.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
