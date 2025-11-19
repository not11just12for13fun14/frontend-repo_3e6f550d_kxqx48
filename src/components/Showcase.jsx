import { motion } from "framer-motion";

function VideoMock({ title, accent = "#39D2C9" }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="absolute inset-0 opacity-40" style={{
        background: `radial-gradient(120% 80% at 0% 100%, ${accent}22 0%, transparent 50%), radial-gradient(120% 80% at 100% 0%, #7C3AED22 0%, transparent 50%)`
      }} />
      <div className="relative aspect-video w-full">
        <div className="absolute inset-0 grid place-items-center text-white/70">
          <div className="rounded-md border border-white/20 bg-black/40 px-3 py-1 text-xs">Edited preview</div>
        </div>
      </div>
      <div className="relative flex items-center justify-between border-t border-white/10 p-4">
        <div>
          <div className="text-sm font-medium text-white">{title}</div>
          <div className="text-xs text-white/60">AI‑powered timeline with captions & b‑roll</div>
        </div>
        <button className="rounded-md bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20">Play</button>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
          See it in action
        </h2>
        <div className="text-sm text-white/60">Cinematic results, zero effort</div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <VideoMock title="Motivational edit" accent="#7C3AED" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
          <VideoMock title="Vlog highlight" accent="#39D2C9" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <VideoMock title="Product review" accent="#7C3AED" />
        </motion.div>
      </div>
    </section>
  );
}
