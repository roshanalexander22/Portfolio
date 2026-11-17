import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Brain, Code2, Mail, ArrowUpRight } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import NeuronSkillsNetwork from './components/NeuronSkillsNetwork';
import ContactSection from './components/ContactSection';
import FooterMarquee from './components/FooterMarquee';
import InfoDrawer, { type Section } from './components/InfoDrawer';
import CustomCursor from './components/CustomCursor';
import SocialDock from './components/SocialDock';
import CommandPalette from './components/CommandPalette';
import Toast from './components/Toast';
import { sound } from './utils/audio';

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ROTATING_WORDS = ['PURPOSE', 'IMPACT', 'INTENT'];

const SKILLS = ['Python', 'Flutter', 'AI / ML', 'RAG', 'PyTorch', 'React', 'TypeScript', 'Firebase'];

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('menu');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  // 3D Tilt effect values for Hero Image (desktop only)
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

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

  // Rotate decorative headline accent every 4s
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

  const scrollTo = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Main Container - Scrollable with vertical flow */}
      <div
        className="relative min-h-screen overflow-x-hidden selection:bg-[#CCFF00] selection:text-black"
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

        {/* Header HUD with ScrollSpy Navigation */}
        <Header
          onOpenDrawer={openDrawerWithSection}
          onOpenTerminal={() => setTerminalOpen(true)}
          onNotify={showToast}
        />

        {/* ── SECTION 1: HERO VIEWPORT ── */}
        <section
          id="hero"
          className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-8 lg:pb-12"
        >
          <div className="flex-1 flex flex-col lg:flex-row items-stretch">
            {/* LEFT PANEL — Text Content & Identity */}
            <div className="relative z-20 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-6 lg:py-0 flex-1 lg:max-w-[55%]">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4 sm:mb-6 w-fit px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse flex-shrink-0" />
                <span
                  className="text-white/80 text-xs tracking-widest uppercase whitespace-nowrap font-mono"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  Available for AI &amp; Software Roles
                </span>
              </motion.div>

              {/* Decorative Rotating Accent (aria-hidden for screen reader clarity) */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2" aria-hidden="true">
                <span
                  className="text-white/40 text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  BUILDING WITH
                </span>
                <span className="text-[#CCFF00] font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                  {ROTATING_WORDS[wordIndex]}
                </span>
                <span className="w-6 sm:w-8 h-px bg-[#CCFF00]/40" />
              </div>

              {/* Semantic H1: Primary Identity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mb-3"
              >
                <h1
                  className="text-white font-bold uppercase tracking-tight"
                  style={{
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: 'clamp(42px, 7vw, 92px)',
                    lineHeight: 1.05,
                    letterSpacing: '0.01em',
                  }}
                >
                  ROSHAN <span className="text-[#CCFF00]">ALEXANDER</span>
                </h1>
              </motion.div>

              {/* Stable, Plain-Language Role Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mb-5"
              >
                <h2
                  className="text-white/95 text-lg sm:text-xl md:text-2xl font-medium tracking-tight font-sans"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Computer Science and AI student building useful software.
                </h2>
              </motion.div>

              {/* Concise 1–2 Sentence Focused Intro */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mb-6 sm:mb-8"
              >
                <p
                  className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-sans"
                  style={{ lineHeight: 1.75 }}
                >
                  Pursuing a dual degree in Computer Science &amp; Engineering at Government Engineering College, Idukki and Data Science &amp; AI at IIT Guwahati. I build local RAG pipelines, cross-platform mobile apps in Flutter, and computer vision systems.
                </p>
              </motion.div>

              {/* Primary Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-row items-center gap-3 mb-6 sm:mb-8 flex-wrap"
              >
                <button
                  onClick={() => scrollTo('projects')}
                  onMouseEnter={() => sound.playHover()}
                  className="group flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#CCFF00] text-black text-xs font-bold tracking-widest uppercase font-mono shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:brightness-110 transition-all rounded-sm min-h-[44px]"
                  aria-label="Scroll to featured projects"
                >
                  <Code2 size={15} />
                  <span>VIEW PROJECTS</span>
                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  onMouseEnter={() => sound.playHover()}
                  className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 border border-white/20 text-white/90 text-xs font-bold tracking-widest uppercase hover:border-[#CCFF00]/60 hover:text-white transition-all font-mono rounded-sm min-h-[44px]"
                  aria-label="Scroll to contact section"
                >
                  <span>CONTACT</span>
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </button>

                <button
                  onClick={() => scrollTo('skills')}
                  onMouseEnter={() => sound.playHover()}
                  className="hidden sm:flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 border border-[#88aaff]/40 text-[#88aaff] text-xs tracking-widest uppercase hover:bg-[#88aaff]/10 transition-all font-mono rounded-sm min-h-[44px]"
                  aria-label="Scroll to skills network"
                >
                  <Brain size={14} />
                  <span>SKILLS NETWORK</span>
                </button>
              </motion.div>

              {/* Recruiter Quick Access Links (GitHub, LinkedIn, Email) */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.78, duration: 0.5 }}
                className="flex items-center gap-2.5 mb-6 sm:mb-8 flex-wrap"
              >
                <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider mr-1">
                  DIRECT ACCESS:
                </span>
                <a
                  href="https://github.com/roshanalexander22"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-[#CCFF00]/60 text-white/80 hover:text-white text-xs font-mono transition-colors min-h-[36px]"
                  aria-label="Visit Roshan Alexander's GitHub Profile"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                  <ArrowUpRight size={11} className="text-[#CCFF00]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/roshan-alexander-thu2122005"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-[#88aaff]/60 text-white/80 hover:text-white text-xs font-mono transition-colors min-h-[36px]"
                  aria-label="Visit Roshan Alexander's LinkedIn Profile"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} className="text-[#88aaff]" />
                </a>
                <a
                  href="mailto:roshanalexander72@gmail.com"
                  onMouseEnter={() => sound.playHover()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.03] hover:border-[#ff88aa]/60 text-white/80 hover:text-white text-xs font-mono transition-colors min-h-[36px]"
                  aria-label="Send direct email to roshanalexander72@gmail.com"
                >
                  <Mail size={12} className="text-[#ff88aa]" />
                  <span>Email</span>
                  <ArrowUpRight size={11} className="text-[#ff88aa]" />
                </a>
              </motion.div>

              {/* High-credibility highlights & Core Skills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="flex flex-wrap items-center gap-2"
              >
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-2.5 py-1 text-[11px] border border-white/10 text-white/60 rounded-full font-mono select-none"
                    style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT PANEL — Responsive Hero Profile Photo */}
            <div
              ref={heroRef}
              onMouseMove={handleHeroMouseMove}
              onMouseLeave={handleHeroMouseLeave}
              className="relative z-10 flex-shrink-0 lg:w-[45%] flex items-end justify-center lg:justify-end overflow-hidden select-none px-6 sm:px-10 lg:px-0 pt-4 lg:pt-0"
              style={{ perspective: 1200 }}
            >
              {/* Ambient Radial Accent */}
              <div
                className="absolute bottom-0 right-0 w-full h-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 65% 75% at 60% 80%, rgba(204,255,0,0.12) 0%, transparent 70%)',
                }}
              />

              {/* Tilted Photo Frame with Compact Mobile Height */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative group h-[260px] sm:h-[340px] md:h-[420px] lg:h-[clamp(440px,75vh,720px)] w-auto max-w-full"
              >
                {/* Photo with clean gradient mask */}
                <img
                  src="/hero.jpg"
                  alt="Roshan Alexander — Computer Science and AI student"
                  className="h-full w-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  style={{
                    filter: 'contrast(1.08) brightness(0.96)',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
                    maxWidth: '100%',
                  }}
                  loading="eager"
                />

                {/* Badge 1: Hackathon Winner */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="absolute top-6 left-0 lg:-left-6 bg-[#CCFF00] text-black px-3.5 py-2 hidden md:block shadow-2xl"
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    transform: 'translateZ(30px)',
                  }}
                >
                  <div className="text-xs font-bold tracking-widest flex items-center gap-1.5">
                    <span>🏆</span>
                    <span>HACKATHON WINNER</span>
                  </div>
                  <div className="text-[10px] tracking-wide text-black/80 font-bold">
                    IndicClaimVerifier · 2026
                  </div>
                </motion.div>

                {/* Badge 2: Dual University Track */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-12 right-0 lg:-right-4 bg-[#050616]/90 border border-white/15 backdrop-blur-md px-4 py-3 hidden md:block shadow-2xl"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  <div
                    className="text-white/95 text-xs font-bold mb-1"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Government Engineering College, Idukki
                  </div>
                  <div
                    className="text-white/60 text-[10px] tracking-wider font-mono"
                    style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                  >
                    B.Tech in CSE · 2024–2028 · CGPA 8.5+
                  </div>
                  <div
                    className="text-[#88aaff] text-[10px] tracking-wider mt-1 font-mono font-medium"
                    style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                  >
                    IIT Guwahati · B.Sc. in Data Science &amp; AI
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Animated Scroll Prompt Indicator */}
          <div className="relative z-20 flex flex-col items-center justify-center pt-4 sm:pt-6">
            <button
              onClick={() => scrollTo('projects')}
              className="group flex flex-col items-center gap-1.5 text-white/40 hover:text-[#CCFF00] transition-colors"
              aria-label="Scroll to featured projects"
            >
              <span
                className="text-[10px] font-mono tracking-[0.25em] uppercase"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                SCROLL TO EXPLORE
              </span>
              <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-[#CCFF00]/50 flex items-start justify-center p-1 transition-colors">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  className="w-1 h-1.5 rounded-full bg-[#CCFF00]"
                />
              </div>
            </button>
          </div>
        </section>

        {/* ── SECTION 2: FEATURED PROJECTS ── */}
        <ProjectsSection onNotify={showToast} />

        {/* ── SECTION 3: EXPERIENCE & LEADERSHIP ── */}
        <ExperienceTimeline />

        {/* ── SECTION 4: EDUCATION & CREDENTIALS ── */}
        <EducationSection />

        {/* ── SECTION 5: SKILLS (NEURON NETWORK) ── */}
        <NeuronSkillsNetwork onNotify={showToast} />

        {/* ── SECTION 6: CONTACT TRANSMISSION ── */}
        <ContactSection onNotify={showToast} />

        {/* ── FOOTER & MARQUEE ── */}
        <FooterMarquee />

        {/* Floating Social Connect Dock */}
        <SocialDock onNotify={showToast} />
      </div>

      {/* Cyber Info Drawer (Preserved for deep system exploration) */}
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
