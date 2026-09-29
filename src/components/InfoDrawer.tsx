import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ExternalLink, Mail, Phone, Copy, Check } from 'lucide-react';
import { sound } from '../utils/audio';

// Brand icons
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

// ─── Data ───────────────────────────────────────────────────────────────────

export type Section = 'menu' | 'projects' | 'about' | 'skills' | 'contact';

const PROJECTS = [
  {
    title: 'IndicClaimVerifier',
    tag: 'HACKATHON WINNER',
    year: '2026',
    desc: 'RAG-based automated claim verification and evidence-retrieval framework for Indic languages, extracting relevant facts from large knowledge bases.',
    stack: ['Python', 'RAG', 'LLM', 'NLP', 'Ollama'],
    accent: '#CCFF00',
    href: 'https://github.com/roshanalexander22',
  },
  {
    title: 'GeoSeize',
    tag: 'MOBILE · GAME',
    year: '2025',
    desc: 'GPS-based territory-conquest game built in Flutter with real-time maps, multiplayer mechanics, Firebase backend, and Dart unit tests.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Maps API'],
    accent: '#88aaff',
    href: 'https://github.com/roshanalexander22',
  },
  {
    title: 'Stress Level Detector',
    tag: 'CROSS-PLATFORM',
    year: '2025',
    desc: 'Cross-platform app (Android, iOS, Web, Desktop) for stress monitoring with audio-based calming features and health data analytics.',
    stack: ['Flutter', 'Dart', 'Audio', 'Healthcare'],
    accent: '#ff88aa',
    href: 'https://github.com/roshanalexander22',
  },
  {
    title: 'μLearn GECI Website',
    tag: 'WEB · OPEN SOURCE',
    year: '2024',
    desc: 'Official website for μLearn Foundation at GEC Idukki. Automated deployment and recurring tasks using GitHub Actions CI/CD.',
    stack: ['React', 'GitHub Actions', 'CI/CD', 'Web'],
    accent: '#aaffcc',
    href: 'https://github.com/roshanalexander22',
  },
];

const EXPERIENCE = [
  {
    role: 'Student Intern – AI/ML',
    org: 'Bleep Education × IIT Bombay',
    period: 'Ongoing',
    desc: 'Applying AI and ML concepts through hands-on, industry-oriented training.',
    dot: '#CCFF00',
  },
  {
    role: 'Technical Lead – μLearn GECI',
    org: 'μLearn Foundation',
    period: '2024 – Present',
    desc: 'Lead student projects, mentor developers, build internal tools and automate workflows with GitHub Actions.',
    dot: '#88aaff',
  },
  {
    role: 'NRPF Lead',
    org: 'NSS, GEC Idukki',
    period: 'June 2026 – Present',
    desc: 'Coordinate disaster-preparedness and emergency-response initiatives at the campus level.',
    dot: '#ff88aa',
  },
  {
    role: 'Active Member',
    org: 'Stellario · IEEE · Sports Club',
    period: 'Ongoing',
    desc: 'Active technical and cultural contributor across multiple campus clubs.',
    dot: '#aaffcc',
  },
];

const SKILLS_DATA: Record<string, string[]> = {
  'AI / ML': ['Python', 'PyTorch', 'RAG', 'LLM', 'Ollama', 'ML', 'Prompt Engineering', 'Data Science', 'Jupyter'],
  'App & Web Dev': ['Flutter', 'Dart', 'React.js', 'TypeScript', 'Three.js', 'JavaScript', 'UI/UX', 'HTML/CSS'],
  'Databases & Tools': ['MySQL', 'MongoDB', 'Firebase', 'Git', 'GitHub', 'GitHub Actions', 'VS Code', 'MATLAB'],
  'Languages': ['Python', 'Dart', 'C++', 'C#', 'C', 'R', 'SQL', 'TypeScript'],
};

const CERTIFICATIONS = [
  'Microsoft Learn – AI Fundamentals',
  'Introduction to Model Context Protocol',
  'Basics of Artificial Intelligence',
  'Gemini Certification for Students (K12)',
  'Basics of Python',
  'Git & GitHub Learning Modules',
];

interface InfoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialSection?: Section;
  onNotify?: (msg: string) => void;
}

export default function InfoDrawer({ isOpen, onClose, initialSection = 'menu', onNotify }: InfoDrawerProps) {
  const [section, setSection] = useState<Section>(initialSection);
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSection(initialSection);
      sound.playClick();
    }
  }, [isOpen, initialSection]);

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    sound.playClick();
    if (onNotify) onNotify(`Copied ${label}: ${text}`);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const switchSection = (s: Section) => {
    sound.playClick();
    setSection(s);
  };

  const goBack = () => {
    sound.playClick();
    setSection('menu');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setSent(true);
    if (onNotify) onNotify('Message sent successfully!');
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', email: '', type: '', message: '' });
  };

  const handleClose = () => {
    sound.playClick();
    onClose();
    setTimeout(() => setSection('menu'), 500);
  };

  const MENU_ITEMS: { label: string; sub: string; section: Section }[] = [
    { label: 'PROJECTS', sub: '4 flagship projects', section: 'projects' },
    { label: 'ABOUT ME', sub: 'IIT Guwahati & GEC Idukki', section: 'about' },
    { label: 'SKILLS', sub: 'Tech stack, Tools & Certs', section: 'skills' },
    { label: "LET'S WORK", sub: 'Direct contact & opportunities', section: 'contact' },
  ];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 240 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:max-w-lg flex flex-col border-l border-white/[0.08] overflow-hidden"
            style={{ background: '#0a0a1a' }}
            aria-modal="true"
            role="dialog"
            aria-label="Portfolio info drawer"
          >
            {/* ── Header bar ── */}
            <div
              className="flex-shrink-0 flex items-center justify-between px-7 py-5 border-b border-white/[0.08]"
              style={{ background: 'rgba(10,10,26,0.98)', backdropFilter: 'blur(16px)' }}
            >
              {/* Left: back / breadcrumb */}
              <div className="flex items-center gap-3">
                {section !== 'menu' && (
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors duration-200"
                    aria-label="Back to menu"
                  >
                    <ArrowLeft size={13} />
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase font-mono"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      MENU
                    </span>
                  </button>
                )}
                <span
                  className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-mono"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  {section === 'menu' ? 'SYSTEM // NAV' : `/ ${section.toUpperCase()}`}
                </span>
              </div>

              {/* Right: close */}
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center border border-white/12 text-white/50 hover:text-white hover:border-[#CCFF00]/50 transition-all duration-200 rounded-sm"
                aria-label="Close drawer"
              >
                <X size={14} />
              </button>
            </div>

            {/* ── Scrollable body ── */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
              <AnimatePresence mode="wait">

                {/* ───── MENU ───── */}
                {section === 'menu' && (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.22 }}
                    className="px-7 py-7"
                  >
                    {/* Mini profile */}
                    <div className="flex items-center gap-4 mb-8 pb-7 border-b border-white/[0.06]">
                      <img
                        src="/roshan.jpg"
                        alt="Roshan Alexander"
                        className="w-16 h-16 object-cover object-top rounded-full border-2 flex-shrink-0"
                        style={{ borderColor: 'rgba(204,255,0,0.5)', filter: 'contrast(1.05)' }}
                      />
                      <div>
                        <h2
                          className="text-white text-lg font-bold tracking-wide leading-tight"
                          style={{ fontFamily: '"Anton", sans-serif' }}
                        >
                          ROSHAN ALEXANDER
                        </h2>
                        <p
                          className="text-white/40 text-[11px] tracking-wide mt-1 leading-snug font-mono"
                          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                        >
                          CS & AI Student · GEC Idukki · IIT Guwahati
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
                          <span
                            className="text-[#CCFF00]/80 text-[10px] tracking-wider uppercase font-mono"
                            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                          >
                            Open for Opportunities &amp; Collabs
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Nav items */}
                    <nav className="space-y-0 mb-8">
                      {MENU_ITEMS.map((item, i) => (
                        <motion.button
                          key={item.label}
                          onClick={() => switchSection(item.section)}
                          onMouseEnter={() => sound.playHover()}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="group w-full flex items-center justify-between py-4 border-b border-white/[0.05] hover:border-[#CCFF00]/30 transition-all duration-300 text-left"
                        >
                          <div>
                            <div
                              className="text-white text-xl tracking-wide group-hover:text-[#CCFF00] transition-colors duration-300 leading-tight"
                              style={{ fontFamily: '"Anton", sans-serif' }}
                            >
                              {item.label}
                            </div>
                            <div
                              className="text-white/30 text-[11px] mt-0.5 group-hover:text-white/50 transition-colors duration-300 font-mono"
                              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                            >
                              {item.sub}
                            </div>
                          </div>
                          <span className="text-white/25 text-lg transition-all duration-300 group-hover:text-[#CCFF00] group-hover:translate-x-1 group-hover:-translate-y-1">
                            ↗
                          </span>
                        </motion.button>
                      ))}
                    </nav>

                    {/* Social icons row */}
                    <div className="mb-4">
                      <div className="text-[10px] text-white/30 tracking-[0.25em] uppercase font-mono mb-3">
                        CONNECT &amp; SOCIALS
                      </div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        {[
                          { icon: <GithubIcon />, href: 'https://github.com/roshanalexander22', label: 'GitHub' },
                          { icon: <LinkedinIcon />, href: 'https://linkedin.com/in/roshan-alexander-thu2122005', label: 'LinkedIn' },
                          { icon: <InstagramIcon />, href: 'https://www.instagram.com/roshhnnnnn_/?hl=en', label: 'Instagram' },
                          { icon: <WhatsappIcon />, href: 'https://wa.me/919656271863?text=Hi%20Roshan!', label: 'WhatsApp' },
                          { icon: <Mail size={15} />, href: 'mailto:roshanalexander72@gmail.com', label: 'Email' },
                          { icon: <Phone size={15} />, href: 'tel:+919656271863', label: 'Call' },
                        ].map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            onMouseEnter={() => sound.playHover()}
                            className="flex items-center justify-center w-9 h-9 border border-white/12 text-white/40 hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-all duration-300 rounded-sm"
                          >
                            {s.icon}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div
                      className="text-white/25 text-[10px] leading-relaxed font-mono pt-4 border-t border-white/[0.04]"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      <div>roshanalexander72@gmail.com</div>
                      <div>+91 9656271863 · @roshhnnnnn_</div>
                      <div>Kottarakkara, Kollam, Kerala – 691532</div>
                    </div>
                  </motion.div>
                )}

                {/* ───── PROJECTS ───── */}
                {section === 'projects' && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                    className="px-7 py-7"
                  >
                    <h2
                      className="text-[#CCFF00] text-2xl mb-1 leading-tight"
                      style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.04em' }}
                    >
                      PROJECTS
                    </h2>
                    <p
                      className="text-white/30 text-xs mb-7 tracking-wide font-mono"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      Selected work — 4 flagship projects
                    </p>

                    <div className="space-y-4">
                      {PROJECTS.map((proj, i) => (
                        <motion.a
                          key={proj.title}
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => sound.playHover()}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="group block p-5 rounded-lg border border-white/[0.07] hover:border-white/20 transition-all duration-300"
                          style={{ background: 'rgba(255,255,255,0.025)' }}
                        >
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex-1 min-w-0">
                              <span
                                className="inline-block text-[10px] px-2 py-0.5 rounded mb-2 tracking-widest uppercase font-semibold font-mono"
                                style={{
                                  background: `${proj.accent}18`,
                                  color: proj.accent,
                                  border: `1px solid ${proj.accent}35`,
                                }}
                              >
                                {proj.tag}
                              </span>
                              <h3
                                className="text-white text-base leading-tight group-hover:text-[#CCFF00] transition-colors duration-300"
                                style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.03em' }}
                              >
                                {proj.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span
                                className="text-white/25 text-[11px] font-mono"
                                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                              >
                                {proj.year}
                              </span>
                              <ExternalLink
                                size={12}
                                className="text-white/25 group-hover:text-[#CCFF00] transition-colors"
                              />
                            </div>
                          </div>

                          <p
                            className="text-white/50 text-[13px] leading-relaxed mb-3"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            {proj.desc}
                          </p>

                          <div className="flex flex-wrap gap-1.5">
                            {proj.stack.map((s) => (
                              <span
                                key={s}
                                className="text-[10px] px-2 py-0.5 border border-white/[0.08] text-white/40 rounded font-mono"
                                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </motion.a>
                      ))}
                    </div>

                    <a
                      href="https://github.com/roshanalexander22"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#CCFF00]/80 hover:text-[#CCFF00] text-xs mt-6 transition-all duration-300 group font-mono"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      <GithubIcon />
                      <span className="group-hover:ml-1 transition-all duration-300">EXPLORE ALL REPOSITORIES ON GITHUB ↗</span>
                    </a>
                  </motion.div>
                )}

                {/* ───── ABOUT ───── */}
                {section === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                    className="px-7 py-7"
                  >
                    <h2
                      className="text-[#CCFF00] text-2xl mb-1 leading-tight"
                      style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.04em' }}
                    >
                      ABOUT ME
                    </h2>
                    <p
                      className="text-white/30 text-xs mb-7 tracking-wide font-mono"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      Background, Education &amp; Leadership
                    </p>

                    <p
                      className="text-white/70 text-sm leading-relaxed mb-8"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      I'm Roshan Alexander — a passionate Computer Science and Data Science & AI student with deep hands-on expertise in
                      Retrieval-Augmented Generation (RAG), machine learning, and cross-platform Flutter application architecture.
                      Winner of the IndicClaimVerifier 2026 hackathon and Technical Lead of μLearn GECI.
                    </p>

                    {/* Education */}
                    <SectionLabel>EDUCATION</SectionLabel>
                    <div className="space-y-3 mb-8">
                      {[
                        {
                          deg: 'B.Tech – Computer Science & Engineering',
                          inst: 'Government Engineering College (GEC), Idukki',
                          period: 'Sept 2024 – May 2028',
                          note: 'CGPA 8.5+ · Clean record',
                          color: '#CCFF00',
                        },
                        {
                          deg: 'B.Sc – Data Science & Artificial Intelligence',
                          inst: 'Indian Institute of Technology (IIT), Guwahati',
                          period: 'Sept 2025 – July 2029',
                          note: 'Distance / Online Programme',
                          color: '#88aaff',
                        },
                        {
                          deg: 'Higher Secondary (Plus Two)',
                          inst: 'St. Gregorios HSS, Pulamon',
                          period: '2024',
                          note: '98.5%',
                          color: '#aaffcc',
                        },
                        {
                          deg: 'Secondary School Leaving Certificate (SSLC)',
                          inst: "St. Mary's HSS, Kizhakkekkara",
                          period: '2022',
                          note: '100%',
                          color: '#ff88aa',
                        },
                      ].map((edu) => (
                        <div
                          key={edu.deg}
                          className="p-4 rounded-lg border border-white/[0.06]"
                          style={{ background: 'rgba(255,255,255,0.02)' }}
                        >
                          <div
                            className="text-[13px] font-semibold leading-tight mb-1"
                            style={{ fontFamily: '"Space Grotesk", sans-serif', color: edu.color }}
                          >
                            {edu.deg}
                          </div>
                          <div className="text-white/60 text-[13px]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                            {edu.inst}
                          </div>
                          <div className="flex items-center justify-between mt-1.5">
                            <span
                              className="text-white/30 text-[10px] font-mono"
                              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                            >
                              {edu.period}
                            </span>
                            <span
                              className="text-[10px] px-1.5 py-0.5 rounded font-mono font-medium"
                              style={{
                                background: `${edu.color}15`,
                                color: edu.color,
                              }}
                            >
                              {edu.note}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Experience */}
                    <SectionLabel>EXPERIENCE & LEADERSHIP</SectionLabel>
                    <div className="space-y-5 mb-8">
                      {EXPERIENCE.map((exp) => (
                        <div key={exp.role} className="relative pl-5 border-l-2" style={{ borderColor: `${exp.dot}30` }}>
                          <div
                            className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full"
                            style={{ background: exp.dot, opacity: 0.8 }}
                          />
                          <div
                            className="text-white text-[13px] font-semibold leading-tight mb-0.5"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            {exp.role}
                          </div>
                          <div
                            className="text-[10px] mb-1 tracking-wider font-mono"
                            style={{ color: exp.dot, opacity: 0.8 }}
                          >
                            {exp.org} · {exp.period}
                          </div>
                          <div
                            className="text-white/45 text-[13px] leading-snug"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            {exp.desc}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <SectionLabel>HONORS & ACHIEVEMENTS</SectionLabel>
                    <div className="space-y-2.5">
                      {[
                        { icon: '🏆', text: 'Winner – IndicClaimVerifier 2026 Hackathon' },
                        { icon: '🎓', text: '100% in SSLC · 98.5% in Plus Two' },
                        { icon: '⭐', text: 'CGPA 8.5+ at GEC Idukki with clear record' },
                        { icon: '🚀', text: 'Participant – Mument, Codethon, IndicClaimVerifier hackathons' },
                      ].map((a) => (
                        <div
                          key={a.text}
                          className="flex items-start gap-3 text-[13px] text-white/55"
                          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                          <span className="text-base flex-shrink-0 mt-0.5">{a.icon}</span>
                          <span>{a.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ───── SKILLS ───── */}
                {section === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                    className="px-7 py-7"
                  >
                    <h2
                      className="text-[#CCFF00] text-2xl mb-1"
                      style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.04em' }}
                    >
                      SKILLS
                    </h2>
                    <p
                      className="text-white/30 text-xs mb-7 tracking-wide font-mono"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      Tech stack, tools &amp; certifications
                    </p>

                    {Object.entries(SKILLS_DATA).map(([category, skills], ci) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: ci * 0.08 }}
                        className="mb-6"
                      >
                        <SectionLabel>{category}</SectionLabel>
                        <div className="flex flex-wrap gap-1.5">
                          {skills.map((sk) => (
                            <span
                              key={sk}
                              className="skill-tag px-3 py-1 text-[11px] border border-white/10 text-white/50 rounded-full cursor-default select-none font-mono"
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}

                    <div className="mb-6">
                      <SectionLabel>CERTIFICATIONS</SectionLabel>
                      <div className="space-y-2">
                        {CERTIFICATIONS.map((cert) => (
                          <div
                            key={cert}
                            className="flex items-start gap-2 text-[13px] text-white/50"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            <span className="text-[#CCFF00]/70 text-xs mt-0.5 flex-shrink-0">✦</span>
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel>SPOKEN LANGUAGES</SectionLabel>
                      <div className="flex gap-2 flex-wrap">
                        {['English', 'Malayalam', 'Hindi', 'Tamil'].map((lang) => (
                          <span
                            key={lang}
                            className="px-4 py-1.5 border border-white/12 text-white/60 text-[12px] rounded-full"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ───── CONTACT ───── */}
                {section === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                    className="px-7 py-7"
                  >
                    <h2
                      className="text-[#CCFF00] text-2xl mb-1"
                      style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.04em' }}
                    >
                      LET'S WORK
                    </h2>
                    <p
                      className="text-white/30 text-xs mb-7 tracking-wide font-mono"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      Have an internship, project, or full-time opportunity? Let's connect.
                    </p>

                    {sent ? (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-12 border border-[#CCFF00]/30 rounded-lg p-6 bg-[#CCFF00]/5"
                      >
                        <div className="text-4xl mb-3">⚡</div>
                        <p
                          className="text-[#CCFF00] text-xl mb-1"
                          style={{ fontFamily: '"Anton", sans-serif' }}
                        >
                          TRANSMISSION DISPATCHED
                        </p>
                        <p className="text-white/50 text-xs font-mono" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                          Thank you for reaching out. I will respond to your inquiry shortly!
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {[
                          { label: 'YOUR NAME', key: 'name', type: 'text', placeholder: 'e.g. Alex Hunter' },
                          { label: 'EMAIL ADDRESS', key: 'email', type: 'email', placeholder: 'alex@company.com' },
                        ].map((field) => (
                          <div key={field.key}>
                            <label
                              className="block text-white/35 text-[10px] tracking-[0.25em] uppercase mb-1 font-mono"
                            >
                              {field.label}
                            </label>
                            <input
                              type={field.type}
                              required
                              value={form[field.key as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                              placeholder={field.placeholder}
                              className="w-full bg-transparent border-b border-white/15 focus:border-[#CCFF00] outline-none text-white text-sm py-2 transition-colors duration-300 placeholder:text-white/20"
                              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                            />
                          </div>
                        ))}

                        <div>
                          <label
                            className="block text-white/35 text-[10px] tracking-[0.25em] uppercase mb-1 font-mono"
                          >
                            OPPORTUNITY TYPE
                          </label>
                          <select
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                            className="w-full bg-[#0a0a1a] border-b border-white/15 focus:border-[#CCFF00] outline-none text-white text-sm py-2 transition-colors duration-300 font-sans"
                          >
                            <option value="">Select opportunity type…</option>
                            <option value="internship">AI / ML / Flutter Internship</option>
                            <option value="project">Project Collaboration / Hackathon</option>
                            <option value="fulltime">Full-time Software Role</option>
                            <option value="freelance">Freelance Contract</option>
                            <option value="other">General Inquiry / Mentorship</option>
                          </select>
                        </div>

                        <div>
                          <label
                            className="block text-white/35 text-[10px] tracking-[0.25em] uppercase mb-1 font-mono"
                          >
                            MESSAGE
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Briefly describe the role or project..."
                            className="w-full bg-transparent border-b border-white/15 focus:border-[#CCFF00] outline-none text-white text-sm py-2 transition-colors duration-300 resize-none placeholder:text-white/20"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          />
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 bg-[#CCFF00] text-black text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:brightness-110 font-mono"
                        >
                          SEND MESSAGE →
                        </motion.button>
                      </form>
                    )}

                    {/* Direct Contact Cards */}
                    <div className="mt-8 pt-7 border-t border-white/[0.08]">
                      <SectionLabel>DIRECT CHANNELS</SectionLabel>
                      
                      <div className="space-y-2.5">
                        {/* Phone */}
                        <div className="p-3.5 rounded border border-white/10 bg-white/[0.02] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00]">
                              <Phone size={14} />
                            </div>
                            <div>
                              <div className="text-[10px] uppercase font-mono text-white/40">PHONE / MOBILE</div>
                              <div className="text-white text-xs font-semibold font-mono">+91 9656271863</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => copyText('+919656271863', 'Phone')}
                              className="px-2 py-1 text-[10px] font-mono border border-white/15 text-white/60 hover:text-white hover:border-[#CCFF00]/50 rounded transition-colors flex items-center gap-1"
                            >
                              {copiedItem === 'Phone' ? <Check size={11} className="text-[#CCFF00]" /> : <Copy size={11} />}
                              <span>COPY</span>
                            </button>
                            <a
                              href="tel:+919656271863"
                              className="px-2.5 py-1 text-[10px] font-mono bg-[#CCFF00] text-black font-semibold rounded hover:brightness-110 transition-all"
                            >
                              CALL
                            </a>
                          </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="p-3.5 rounded border border-white/10 bg-white/[0.02] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-[#25D366]">
                              <WhatsappIcon />
                            </div>
                            <div>
                              <div className="text-[10px] uppercase font-mono text-white/40">WHATSAPP</div>
                              <div className="text-white text-xs font-semibold font-mono">+91 9656271863</div>
                            </div>
                          </div>
                          <a
                            href="https://wa.me/919656271863?text=Hi%20Roshan,%20I%20saw%20your%20portfolio!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 text-[10px] font-mono border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 rounded transition-colors"
                          >
                            CHAT ↗
                          </a>
                        </div>

                        {/* Instagram */}
                        <div className="p-3.5 rounded border border-white/10 bg-white/[0.02] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-pink-500/10 flex items-center justify-center text-[#E1306C]">
                              <InstagramIcon />
                            </div>
                            <div>
                              <div className="text-[10px] uppercase font-mono text-white/40">INSTAGRAM</div>
                              <div className="text-white text-xs font-semibold font-mono">@roshhnnnnn_</div>
                            </div>
                          </div>
                          <a
                            href="https://www.instagram.com/roshhnnnnn_/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 text-[10px] font-mono border border-[#E1306C]/40 text-[#E1306C] hover:bg-[#E1306C]/10 rounded transition-colors"
                          >
                            FOLLOW ↗
                          </a>
                        </div>

                        {/* Email */}
                        <div className="p-3.5 rounded border border-white/10 bg-white/[0.02] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white">
                              <Mail size={14} />
                            </div>
                            <div>
                              <div className="text-[10px] uppercase font-mono text-white/40">EMAIL</div>
                              <div className="text-white text-xs font-mono">roshanalexander72@gmail.com</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => copyText('roshanalexander72@gmail.com', 'Email')}
                              className="px-2 py-1 text-[10px] font-mono border border-white/15 text-white/60 hover:text-white hover:border-[#CCFF00]/50 rounded transition-colors flex items-center gap-1"
                            >
                              {copiedItem === 'Email' ? <Check size={11} className="text-[#CCFF00]" /> : <Copy size={11} />}
                              <span>COPY</span>
                            </button>
                            <a
                              href="mailto:roshanalexander72@gmail.com"
                              className="px-2.5 py-1 text-[10px] font-mono border border-white/20 text-white hover:border-[#CCFF00]/50 rounded transition-colors"
                            >
                              WRITE ↗
                            </a>
                          </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="p-3.5 rounded border border-white/10 bg-white/[0.02] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-[#0077b5]">
                              <LinkedinIcon />
                            </div>
                            <div>
                              <div className="text-[10px] uppercase font-mono text-white/40">LINKEDIN</div>
                              <div className="text-white text-xs font-mono">roshan-alexander-thu2122005</div>
                            </div>
                          </div>
                          <a
                            href="https://linkedin.com/in/roshan-alexander-thu2122005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 text-[10px] font-mono border border-[#0077b5]/40 text-[#0077b5] hover:bg-[#0077b5]/10 rounded transition-colors"
                          >
                            VIEW ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

// Small helper
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-2 mb-3"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">{children}</span>
      <div className="flex-1 h-px bg-white/[0.05]" />
    </div>
  );
}
