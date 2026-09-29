import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import InfoDrawer, { type Section } from './components/InfoDrawer';
import ScrambleText from './components/ScrambleText';
import FooterMarquee from './components/FooterMarquee';
import CustomCursor from './components/CustomCursor';
import SocialDock from './components/SocialDock';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';
import { sound } from './utils/audio';

const ROTATING_WORDS = ['PURPOSE', 'IMPACT', 'INTENT'];

const STATS = [
  { value: '100%', label: 'SSLC' },
  { value: '98.5%', label: 'PLUS TWO' },
  { value: '8.5+', label: 'CGPA' },
  { value: '2026', label: 'HACKATHON WIN' },
];

const SKILLS = ['Python', 'Flutter', 'AI/ML', 'RAG', 'PyTorch', 'React', 'TypeScript', 'Firebase'];

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('menu');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  // 3D Tilt effect values for Hero Image
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleHeroMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Rotate headline word every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Global key listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openDrawerWithSection = (section: Section = 'menu') => {
    setActiveSection(section);
    setDrawerOpen(true);
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((curr) => (curr === msg ? null : curr));
    }, 3200);
  };

  return (
    <>
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Main Container */}
      <div
        className="relative min-h-screen overflow-hidden selection:bg-[#CCFF00] selection:text-black"
        style={{ background: '#030014' }}
      >
        {/* Interactive 3D Particle Cloud */}
        <ParticleBackground />

        {/* Ambient Grid overlay */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(136,170,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(136,170,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow top-left */}
        <div
          className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(204,255,0,0.08) 0%, transparent 60%)',
          }}
        />
        {/* Radial glow bottom-right */}
        <div
          className="fixed bottom-0 right-0 w-[550px] h-[550px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at bottom right, rgba(136,170,255,0.08) 0%, transparent 60%)',
          }}
        />

        {/* Header HUD */}
        <Header
          onOpenDrawer={openDrawerWithSection}
          onOpenTerminal={() => setTerminalOpen(true)}
          onNotify={showToast}
        />

        {/* Main Hero Viewport */}
        <main className="relative min-h-screen flex flex-col lg:flex-row items-stretch pt-20">

          {/* LEFT PANEL — Text Content */}
          <div className="relative z-20 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 lg:py-0 flex-1 lg:max-w-[55%]">

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 w-fit px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse flex-shrink-0" />
              <span
                className="text-white/60 text-xs tracking-widest uppercase whitespace-nowrap font-mono"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                Available for AI &amp; Software Roles
              </span>
            </motion.div>

            {/* Headline with rotating scrambled word */}
            <div className="mb-6 overflow-visible">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="uppercase leading-none mb-1 font-bold"
                  style={{
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: 'clamp(28px, 5vw, 72px)',
                    WebkitTextStroke: '1px rgba(255,255,255,0.85)',
                    color: 'transparent',
                    letterSpacing: '0.02em',
                  }}
                >
                  BUILD WITH
                </p>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={wordIndex}
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-none"
                  style={{
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: 'clamp(52px, 10vw, 150px)',
                    color: '#CCFF00',
                    lineHeight: 0.88,
                    textShadow: '0 0 45px rgba(204,255,0,0.35)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  <ScrambleText text={ROTATING_WORDS[wordIndex]} />
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Subheading & Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px bg-[#CCFF00]" />
                <span
                  className="text-[#CCFF00] text-xs tracking-[0.3em] uppercase font-mono font-semibold"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  Roshan Alexander
                </span>
              </div>
              <p
                className="text-white/60 text-sm leading-relaxed max-w-lg"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Computer Science &amp; Engineering at GEC Idukki · AI &amp; Data Science at IIT Guwahati.
                Architecting intelligent systems, RAG pipelines, and cross-platform Flutter experiences.
              </p>
            </motion.div>

            {/* Skills pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 + i * 0.04 }}
                  onMouseEnter={() => sound.playHover()}
                  className="skill-tag px-3 py-1 text-xs border border-white/12 text-white/50 rounded-full cursor-default select-none font-mono"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-row gap-3 mb-10 flex-wrap"
            >
              <motion.button
                onClick={() => {
                  sound.playClick();
                  openDrawerWithSection('projects');
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={() => sound.playHover()}
                className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-[#CCFF00] text-black text-xs font-bold tracking-widest uppercase font-mono"
              >
                VIEW PROJECTS
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>

              <motion.button
                onClick={() => {
                  sound.playClick();
                  openDrawerWithSection('contact');
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={() => sound.playHover()}
                className="group flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 text-xs tracking-widest uppercase hover:border-[#CCFF00]/50 hover:text-white transition-all duration-300 font-mono"
              >
                CONTACT ME
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </motion.button>
            </motion.div>

            {/* Key Academic & Career Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7 }}
              className="grid grid-cols-4 gap-4 max-w-sm"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.95 + i * 0.08 }}
                  className="text-left"
                >
                  <div
                    className="text-[#CCFF00] font-bold mb-0.5"
                    style={{
                      fontFamily: '"Anton", sans-serif',
                      fontSize: 'clamp(18px, 2.2vw, 26px)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-white/35 text-[10px] leading-tight tracking-wider uppercase font-mono"
                    style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT PANEL — Holographic 3D Hero Profile Photo */}
          <div
            ref={heroRef}
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={handleHeroMouseLeave}
            className="relative z-10 flex-shrink-0 lg:w-[45%] flex items-end justify-center lg:justify-end overflow-hidden select-none"
            style={{ perspective: 1200 }}
          >
            {/* Ambient Radial Accent */}
            <div
              className="absolute bottom-0 right-0 w-full h-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 65% 75% at 60% 80%, rgba(204,255,0,0.1) 0%, transparent 70%)',
              }}
            />

            {/* 3D Tilted Photo Frame */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                height: 'clamp(340px, 80vh, 760px)',
                width: 'auto',
              }}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Vertical neon accent indicator line */}
              <div
                className="absolute left-0 top-1/3 w-px h-28 bg-gradient-to-b from-transparent via-[#CCFF00]/50 to-transparent hidden lg:block pointer-events-none"
                style={{ transform: 'translateX(-28px)' }}
              />

              {/* Photo */}
              <img
                src="/hero.jpg"
                alt="Roshan Alexander — Computer Science & AI"
                className="h-full w-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                style={{
                  filter: 'contrast(1.08) brightness(0.96)',
                  maskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%), linear-gradient(to left, black 0%, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 78%, transparent 100%)',
                  maxWidth: '100%',
                }}
              />

              {/* Badge 1: Hackathon Winner */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute top-8 left-0 lg:-left-6 bg-[#CCFF00] text-black px-3.5 py-2 hidden md:block shadow-xl"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  transform: 'translateZ(30px)',
                }}
              >
                <div className="text-xs font-bold tracking-widest">🏆 HACKATHON</div>
                <div className="text-[10px] tracking-wide">WINNER 2026</div>
              </motion.div>

              {/* Badge 2: Dual University Track */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="absolute bottom-14 right-0 lg:-right-4 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-3 hidden md:block shadow-2xl"
                style={{ transform: 'translateZ(25px)' }}
              >
                <div
                  className="text-white/90 text-xs font-semibold mb-1"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  GEC Idukki
                </div>
                <div
                  className="text-white/40 text-[10px] tracking-wider font-mono"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  B.Tech CSE · 2024–2028
                </div>
                <div
                  className="text-[#CCFF00]/80 text-[10px] tracking-wider mt-0.5 font-mono"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  IIT Guwahati · AI &amp; DS
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>

        {/* Floating Social Connect Dock (Phone, Insta, WhatsApp, GitHub, LinkedIn, Email) */}
        <SocialDock onNotify={showToast} />

        {/* Footer Marquee */}
        <FooterMarquee />

        {/* Bottom-right Geo coordinates HUD */}
        <div
          className="fixed bottom-6 right-6 z-30 text-white/20 text-[10px] pointer-events-none hidden lg:block leading-relaxed text-right font-mono"
          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
        >
          <div>9.52° N · 76.78° E</div>
          <div>KOTTARAKKARA, KERALA</div>
          <div className="text-[#CCFF00]/60">SYS_STATUS: ONLINE</div>
        </div>

        {/* Right-side Cyber Vertical Bar */}
        <div className="fixed right-5 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden xl:flex flex-col items-center gap-3">
          <div
            className="text-white/15 text-[9px] tracking-[5px] font-mono"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              writingMode: 'vertical-rl',
            }}
          >
            CS · AI · DATA SCIENCE · FLUTTER
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]/70 float-anim" />
        </div>
      </div>

      {/* Cyber Info Drawer */}
      <InfoDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        initialSection={activeSection}
        onNotify={showToast}
      />

      {/* Interactive Cyber Terminal / Command Palette */}
      <CommandPalette
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenSection={openDrawerWithSection}
        onNotify={showToast}
      />

      {/* Toast Notification Alert */}
      <Toast message={toastMsg} onClose={() => setToastMsg(null)} />
    </>
  );
}
