import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Terminal, Menu, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  onOpenDrawer: (section?: 'menu' | 'projects' | 'about' | 'skills' | 'contact') => void;
  onOpenTerminal: () => void;
  onNotify: (msg: string) => void;
}

const NAV_ITEMS = [
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Header({ onOpenDrawer, onOpenTerminal, onNotify }: HeaderProps) {
  const [soundActive, setSoundActive] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTimeStr(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // ScrollSpy & Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      const sections = ['contact', 'skills', 'education', 'experience', 'projects', 'hero'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = sound.toggle();
    setSoundActive(newState);
    onNotify(newState ? 'Audio feedback enabled' : 'Audio muted');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sound.playClick();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/[0.05] pointer-events-none">
        <div
          className="h-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 lg:px-16 py-3.5"
        style={{
          background: 'rgba(3, 0, 20, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        {/* Left: Logo & live location clock */}
        <div className="flex items-center gap-4 select-none">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-2.5 cursor-pointer"
          >
            <span
              className="text-white text-base md:text-lg tracking-[0.2em] uppercase font-bold"
              style={{ fontFamily: '"Anton", "Impact", "Arial Black", sans-serif' }}
            >
              ROSHAN
            </span>
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#CCFF00] transition-transform duration-500 group-hover:rotate-180 flex-shrink-0">
              <span className="text-black text-xs font-bold leading-none">✦</span>
            </div>
          </a>

          {/* Live IST clock HUD */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-white/10 text-white/40 text-[10px] font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span>KERALA, IN</span>
            <span className="text-white/20">·</span>
            <span className="text-white/60">{timeStr || 'LIVE IST'}</span>
          </div>
        </div>

        {/* Center Nav tabs for smooth scrolling */}
        <nav className="hidden lg:flex items-center gap-5">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                onMouseEnter={() => sound.playHover()}
                className={`relative py-1 text-[11px] tracking-[0.2em] uppercase font-mono transition-colors duration-200 ${
                  isActive ? 'text-[#CCFF00] font-semibold' : 'text-white/50 hover:text-white'
                }`}
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#CCFF00]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right controls: Terminal + Audio Toggle + Drawer Menu + Contact CTA */}
        <div className="flex items-center gap-2">
          {/* Terminal / Cmd button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenTerminal();
            }}
            onMouseEnter={() => sound.playHover()}
            title="Open Cyber Terminal (⌘K / Ctrl+K)"
            aria-label="Open Cyber Terminal"
            className="flex items-center gap-1.5 px-3 py-2 border border-white/20 text-white/75 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 text-[11px] font-mono rounded transition-colors min-h-[38px]"
          >
            <Terminal size={13} />
            <span className="hidden sm:inline">CMD</span>
            <kbd className="hidden sm:inline text-[9px] px-1 bg-white/5 rounded border border-white/10 text-white/60">⌘K</kbd>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            title={soundActive ? 'Mute audio feedback' : 'Enable audio feedback'}
            aria-label={soundActive ? 'Mute audio feedback' : 'Enable audio feedback'}
            className={`flex items-center gap-1.5 px-3 py-2 border text-[11px] font-mono rounded transition-all duration-200 min-h-[38px] ${
              soundActive
                ? 'border-[#CCFF00]/60 text-[#CCFF00] bg-[#CCFF00]/10'
                : 'border-white/20 text-white/75 hover:text-white hover:border-white/40'
            }`}
          >
            {soundActive ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span className="hidden sm:inline">{soundActive ? 'FX ON' : 'FX OFF'}</span>
          </button>

          {/* Side Drawer Toggle button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenDrawer('menu');
            }}
            onMouseEnter={() => sound.playHover()}
            title="Open System Drawer Navigation"
            aria-label="Open System Drawer Navigation"
            className="flex items-center gap-1.5 px-3 py-2 border border-white/20 text-white/80 hover:text-white hover:border-[#CCFF00]/50 text-[11px] font-mono rounded transition-colors min-h-[38px]"
          >
            <Menu size={13} />
            <span className="hidden md:inline">DRAWER</span>
          </button>

          {/* Direct Contact CTA */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            onMouseEnter={() => sound.playHover()}
            className="group relative overflow-hidden flex items-center gap-1.5 px-4 py-2 bg-[#CCFF00] text-black text-[11px] tracking-[0.2em] uppercase font-mono font-bold rounded-sm hover:brightness-110 transition-all shadow-[0_0_15px_rgba(204,255,0,0.25)] min-h-[38px]"
          >
            <span>CONNECT</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </motion.header>
    </>
  );
}
