import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import InfoDrawer from './components/InfoDrawer';
import ScrambleText from './components/ScrambleText';
import FooterMarquee from './components/FooterMarquee';

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
  const [wordIndex, setWordIndex] = useState(0);

  // Rotate headline word every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="relative min-h-screen overflow-hidden"
        style={{ background: '#030014' }}
      >
        {/* Particle BG */}
        <ParticleBackground />

        {/* Grid overlay */}
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
            background: 'radial-gradient(ellipse at top left, rgba(204,255,0,0.07) 0%, transparent 60%)',
          }}
        />
        {/* Radial glow bottom-right */}
        <div
          className="fixed bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at bottom right, rgba(136,170,255,0.08) 0%, transparent 60%)',
          }}
        />

        {/* Header */}
        <Header onOpenDrawer={() => setDrawerOpen(true)} />

        {/* Main hero — split layout */}
        <main className="relative min-h-screen flex flex-col lg:flex-row items-stretch pt-20">

          {/* LEFT PANEL — Text content */}
          <div className="relative z-20 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 lg:py-0 flex-1 lg:max-w-[55%]">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 w-fit px-4 py-2 rounded-full border border-white/10 bg-white/[0.04]"
            >
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse flex-shrink-0" />
              <span
                className="text-white/50 text-xs tracking-widest uppercase whitespace-nowrap"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                Open to Internships &amp; Collabs
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6 overflow-visible">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="uppercase leading-none mb-1"
                  style={{
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: 'clamp(28px, 5vw, 72px)',
                    WebkitTextStroke: '1px rgba(255,255,255,0.8)',
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
                    textShadow: '0 0 40px rgba(204,255,0,0.3)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  <ScrambleText text={ROTATING_WORDS[wordIndex]} />
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Name & title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-px bg-[#CCFF00]" />
                <span
                  className="text-[#CCFF00] text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  Roshan Alexander
                </span>
              </div>
              <p
                className="text-white/50 text-sm leading-relaxed max-w-md"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                CS & Engineering student at GEC Idukki · AI & Data Science at IIT Guwahati.
                Building intelligent apps and bold digital experiences with Python, Flutter & AI/ML.
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
                  transition={{ delay: 0.65 + i * 0.05 }}
                  className="skill-tag px-3 py-1 text-xs border border-white/12 text-white/45 rounded-full cursor-default select-none"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-row gap-3 mb-10 flex-wrap"
            >
              <motion.button
                onClick={() => setDrawerOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-[#CCFF00] text-black text-xs font-bold tracking-widest uppercase"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                VIEW PROJECTS
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>

              <motion.button
                onClick={() => setDrawerOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 text-xs tracking-widest uppercase hover:border-[#CCFF00]/50 hover:text-white transition-all duration-300"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                CONTACT ME
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </motion.button>
            </motion.div>

            {/* Stats row */}
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
                      fontSize: 'clamp(16px, 2vw, 24px)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-white/30 text-[10px] leading-tight tracking-wider uppercase"
                    style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT PANEL — Hero photo */}
          <div className="relative z-10 flex-shrink-0 lg:w-[45%] flex items-end justify-center lg:justify-end overflow-hidden">
            {/* Accent glow behind photo */}
            <div
              className="absolute bottom-0 right-0 w-full h-full pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 70% at 60% 80%, rgba(204,255,0,0.08) 0%, transparent 70%)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
              style={{ height: 'clamp(340px, 80vh, 750px)', width: 'auto' }}
            >
              {/* Decorative lines beside photo */}
              <div
                className="absolute left-0 top-1/3 w-px h-24 bg-gradient-to-b from-transparent via-[#CCFF00]/40 to-transparent hidden lg:block"
                style={{ transform: 'translateX(-24px)' }}
              />

              <img
                src="/hero.jpg"
                alt="Roshan Alexander — CS & AI Student"
                className="h-full w-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  filter: 'contrast(1.08) brightness(0.95)',
                  maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%), linear-gradient(to left, black 0%, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
                  maxWidth: '100%',
                }}
              />

              {/* Badge on photo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute top-8 left-0 lg:-left-6 bg-[#CCFF00] text-black px-3 py-2 hidden md:block"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                <div className="text-xs font-bold tracking-widest">🏆 HACKATHON</div>
                <div className="text-[10px] tracking-wide">WINNER 2026</div>
              </motion.div>

              {/* Floating school badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="absolute bottom-12 right-0 lg:-right-4 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-3 hidden md:block"
              >
                <div
                  className="text-white/80 text-xs font-semibold mb-1"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  GEC Idukki
                </div>
                <div
                  className="text-white/40 text-[10px] tracking-wider"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  B.Tech CSE · 2024–2028
                </div>
                <div
                  className="text-[#CCFF00]/70 text-[10px] tracking-wider mt-0.5"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  IIT Guwahati · AI & DS
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>

        {/* Footer Marquee */}
        <FooterMarquee />

        {/* Bottom-left geo label */}
        <div
          className="fixed bottom-6 left-6 z-30 text-white/15 text-[10px] pointer-events-none hidden md:block leading-relaxed"
          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
        >
          <div>ROSHAN · ALEXANDER</div>
          <div>KOTTARAKKARA, KERALA</div>
          <div>9.52°N · 76.78°E</div>
        </div>

        {/* Right-side vertical text */}
        <div className="fixed right-5 top-1/2 -translate-y-1/2 z-30 pointer-events-none hidden xl:flex flex-col items-center gap-3">
          <div
            className="text-white/15 text-[9px] tracking-[5px]"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              writingMode: 'vertical-rl',
            }}
          >
            CS · AI · DATA SCIENCE · FLUTTER
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]/60 float-anim" />
        </div>
      </div>

      {/* Drawer */}
      <InfoDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
