import { ArrowUp, Mail, Phone } from 'lucide-react';
import { sound } from '../utils/audio';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const CURRENT_YEAR = new Date().getFullYear();

export default function FooterMarquee() {
  const TEXT =
    'ROSHAN ALEXANDER \u00a0//\u00a0 COMPUTER SCIENCE & AI \u00a0//\u00a0 IIT GUWAHATI \u00a0//\u00a0 GEC IDUKKI \u00a0//\u00a0 FLUTTER · PYTHON · RAG · AI/ML \u00a0//\u00a0 ';

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#02000f] overflow-hidden pt-12 pb-16">
      {/* Dynamic Animated Marquee Banner */}
      <div className="relative w-full overflow-hidden mb-12 py-4 border-y border-white/[0.05] bg-white/[0.01]">
        <div
          className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #02000f, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #02000f, transparent)' }}
        />

        <div className="flex whitespace-nowrap marquee-track items-center select-none">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="flex-shrink-0 pr-6"
              style={{
                fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                fontSize: 'clamp(32px, 6vw, 68px)',
                lineHeight: 1,
                WebkitTextStroke: '1px rgba(255,255,255,0.12)',
                color: 'transparent',
                letterSpacing: '0.04em',
              }}
            >
              {TEXT}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Dual university note */}
          <div className="text-center md:text-left">
            <div
              className="text-white text-2xl font-bold tracking-widest uppercase mb-1"
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              ROSHAN ALEXANDER
            </div>
            <p className="text-white/40 text-xs font-mono">
              B.Tech CSE @ GEC Idukki · BS Data Science &amp; AI @ IIT Guwahati
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/roshanalexander22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-[#CCFF00]/50 hover:text-[#CCFF00] flex items-center justify-center text-white/50 transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/roshan-alexander-thu2122005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-[#0077b5]/50 hover:text-[#0077b5] flex items-center justify-center text-white/50 transition-colors"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:roshanalexander72@gmail.com"
              aria-label="Email Roshan"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-[#CCFF00]/50 hover:text-[#CCFF00] flex items-center justify-center text-white/50 transition-colors"
            >
              <Mail size={15} />
            </a>
            <a
              href="tel:+919656271863"
              aria-label="Call Roshan"
              className="w-9 h-9 rounded-full border border-white/10 hover:border-[#CCFF00]/50 hover:text-[#CCFF00] flex items-center justify-center text-white/50 transition-colors"
            >
              <Phone size={15} />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 text-[#CCFF00] text-xs font-mono hover:bg-[#CCFF00]/20 transition-all ml-2"
            >
              <ArrowUp size={13} />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-white/35">
          <div>
            © {CURRENT_YEAR} Roshan Alexander. Architected with React 19, Three.js &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-[#CCFF00]/80">SYS_STATUS: ONLINE</span>
            <span>·</span>
            <span>KERALA, INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
