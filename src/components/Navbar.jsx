export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0A1E42]/60 px-4 py-3 backdrop-blur-xl">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            {/* Logo mark: stylized S */}
            <div className="relative h-8 w-8">
              <svg viewBox="0 0 64 64" className="h-8 w-8">
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#39D2C9" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <path d="M16 22c6-8 26-8 32 0-6 8-26 8-32 0Zm0 20c6 8 26 8 32 0-6-8-26-8-32 0Z" fill="url(#g1)"/>
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">synk.ai</span>
          </a>

          {/* Nav actions */}
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#pricing" className="rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/20">Try synk.ai</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
