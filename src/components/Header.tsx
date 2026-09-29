import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Terminal } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  onOpenDrawer: (section?: 'menu' | 'projects' | 'about' | 'skills' | 'contact') => void;
  onOpenTerminal: () => void;
  onNotify: (msg: string) => void;
}

export default function Header({ onOpenDrawer, onOpenTerminal, onNotify }: HeaderProps) {
  const [soundActive, setSoundActive] = useState(false);
  const [timeStr, setTimeStr] = useState('');

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

  const toggleSound = () => {
    const newState = sound.toggle();
    setSoundActive(newState);
    onNotify(newState ? 'Audio feedback enabled' : 'Audio muted');
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 lg:px-16 py-4"
      style={{
        background: 'linear-gradient(to bottom, rgba(3,0,20,0.95) 0%, rgba(3,0,20,0) 100%)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Left: Logo & live location clock */}
      <div className="flex items-center gap-4 select-none">
        <div
          onClick={() => {
            sound.playClick();
            onOpenDrawer('menu');
          }}
          className="group flex items-center gap-2.5 cursor-pointer"
        >
          <span
            className="text-white text-base md:text-lg tracking-[0.2em] uppercase font-bold"
            style={{ fontFamily: '"Anton", "Impact", "Arial Black", sans-serif' }}
          >
            ROSHAN
          </span>
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#CCFF00] transition-transform duration-500 group-hover:rotate-180 flex-shrink-0">
            <span className="text-black text-xs font-bold leading-none">✦</span>
          </div>
        </div>

        {/* Live IST clock HUD */}
        <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/10 text-white/40 text-[10px] font-mono tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          <span>KERALA, IN</span>
          <span className="text-white/20">·</span>
          <span className="text-white/60">{timeStr || '11:00 PM IST'}</span>
        </div>
      </div>

      {/* Center Nav tabs */}
      <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
        {[
          { label: 'PROJECTS', section: 'projects' as const },
          { label: 'ABOUT', section: 'about' as const },
          { label: 'SKILLS', section: 'skills' as const },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => {
              sound.playClick();
              onOpenDrawer(item.section);
            }}
            onMouseEnter={() => sound.playHover()}
            className="nav-link text-white/45 hover:text-white text-[11px] tracking-[0.25em] uppercase transition-colors duration-200"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Right controls: Terminal + Audio Toggle + Contact CTA */}
      <div className="flex items-center gap-2.5">
        {/* Terminal / Cmd button */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenTerminal();
          }}
          onMouseEnter={() => sound.playHover()}
          title="Open Cyber Terminal (⌘K / Ctrl+K)"
          className="flex items-center gap-1.5 px-2.5 py-1.5 border border-white/10 text-white/40 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 text-[10px] font-mono rounded transition-colors"
        >
          <Terminal size={12} />
          <span className="hidden sm:inline">CMD</span>
          <kbd className="hidden sm:inline text-[9px] px-1 bg-white/5 rounded border border-white/10 text-white/40">⌘K</kbd>
        </button>

        {/* Sound FX Toggle */}
        <button
          onClick={toggleSound}
          title={soundActive ? 'Mute audio feedback' : 'Enable audio feedback'}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 border text-[10px] font-mono rounded transition-all duration-200 ${
            soundActive
              ? 'border-[#CCFF00]/60 text-[#CCFF00] bg-[#CCFF00]/10'
              : 'border-white/10 text-white/40 hover:text-white hover:border-white/20'
          }`}
        >
          {soundActive ? <Volume2 size={12} /> : <VolumeX size={12} />}
          <span className="hidden sm:inline">{soundActive ? 'FX ON' : 'FX OFF'}</span>
        </button>

        {/* Let's Work CTA */}
        <motion.button
          onClick={() => {
            sound.playClick();
            onOpenDrawer('contact');
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onMouseEnter={() => sound.playHover()}
          className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 border border-[#CCFF00]/70 text-[#CCFF00] text-[11px] tracking-[0.2em] uppercase font-mono font-medium rounded-sm"
        >
          <span className="absolute inset-0 bg-[#CCFF00] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            CONNECT
          </span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-300 text-sm leading-none">
            ↗
          </span>
        </motion.button>
      </div>
    </motion.header>
  );
}
