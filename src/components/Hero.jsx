import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const gradient = "from-[#0A1E42] via-[#0A1E42] to-[#0A1E42]";

export default function Hero() {
  return (
    <section className={`relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b ${gradient}`}>
      {/* Aura background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(57,210,201,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* Navigation spacer */}
      <div className="h-20" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#39D2C9] shadow-[0_0_12px_2px_#39D2C966]" />
            <span className="text-xs font-medium tracking-wide text-white/80">
              Professional edits in minutes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            AI That Edits Your Entire Video For You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 max-w-xl text-base text-white/70 md:text-lg"
          >
            synk.ai understands style, tone, pacing and context. Upload once — get a polished final cut with animated captions, smart music, b‑roll and scene‑aware color in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#39D2C9] px-6 py-3 text-slate-900 transition hover:brightness-110"
            >
              <span className="font-semibold">Try synk.ai</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              Get started
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex items-center gap-6 text-xs text-white/60"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7C3AED]/20 text-[#7C3AED]">✓</span>
              <span>Automatic animated captions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#39D2C9]/20 text-[#39D2C9]">✓</span>
              <span>Smart music fitting each moment</span>
            </div>
          </motion.div>
        </div>

        {/* Spline scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[520px] w-full"
        >
          <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-[0_0_60px_rgba(57,210,201,0.15)]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Glass gradient overlay for depth (won't block interaction) */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0A1E42] via-transparent to-transparent opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
