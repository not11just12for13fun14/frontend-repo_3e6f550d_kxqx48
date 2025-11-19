export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 mt-10 border-t border-white/10 bg-[#0A1E42] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <svg viewBox="0 0 64 64" className="h-8 w-8">
                <defs>
                  <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#39D2C9" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <path d="M16 22c6-8 26-8 32 0-6 8-26 8-32 0Zm0 20c6 8 26 8 32 0-6-8-26-8-32 0Z" fill="url(#g2)"/>
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">synk.ai</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">YouTube</a>
            <a href="mailto:hello@synk.ai" className="hover:text-white">hello@synk.ai</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} synk.ai — Automated video editing with professional taste.</div>
      </div>
    </footer>
  );
}
