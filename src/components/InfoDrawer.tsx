import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ExternalLink, Mail, Phone } from 'lucide-react';

// Brand icons (not in lucide-react v1+)
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

// ─── Data ───────────────────────────────────────────────────────────────────

type Section = 'menu' | 'projects' | 'about' | 'skills' | 'contact';

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

// ─── Component ──────────────────────────────────────────────────────────────

export default function InfoDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [section, setSection] = useState<Section>('menu');
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);

  const goBack = () => setSection('menu');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', email: '', type: '', message: '' });
  };

  // Close resets section after animation
  const handleClose = () => {
    onClose();
    setTimeout(() => setSection('menu'), 500);
  };

  const MENU_ITEMS: { label: string; sub: string; section: Section }[] = [
    { label: 'PROJECTS', sub: '4 projects', section: 'projects' },
    { label: 'ABOUT ME', sub: 'Experience & Education', section: 'about' },
    { label: 'SKILLS', sub: 'Tech stack & Certs', section: 'skills' },
    { label: "LET'S WORK", sub: 'Contact & Opportunities', section: 'contact' },
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
            className="fixed inset-0 z-40 bg-black/60"
            style={{ backdropFilter: 'blur(6px)' }}
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
            transition={{ type: 'spring', damping: 30, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:max-w-lg flex flex-col border-l border-white/[0.06] overflow-hidden"
            style={{ background: '#0d0d1f' }}
            aria-modal="true"
            role="dialog"
            aria-label="Portfolio info drawer"
          >
            {/* ── Header bar ── */}
            <div
              className="flex-shrink-0 flex items-center justify-between px-7 py-5 border-b border-white/[0.06]"
              style={{ background: 'rgba(13,13,31,0.97)', backdropFilter: 'blur(12px)' }}
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
                      className="text-[10px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      MENU
                    </span>
                  </button>
                )}
                <span
                  className="text-white/25 text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  {section === 'menu' ? 'NAVIGATION' : `/ ${section.toUpperCase()}`}
                </span>
              </div>

              {/* Right: close */}
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center border border-white/12 text-white/50 hover:text-white hover:border-white/30 transition-all duration-200 rounded-sm"
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
                        className="w-14 h-14 object-cover object-top rounded-full border-2 flex-shrink-0"
                        style={{ borderColor: 'rgba(204,255,0,0.4)', filter: 'contrast(1.05)' }}
                      />
                      <div>
                        <h2
                          className="text-white text-base font-bold tracking-wide leading-tight"
                          style={{ fontFamily: '"Anton", sans-serif' }}
                        >
                          ROSHAN ALEXANDER
                        </h2>
                        <p
                          className="text-white/40 text-[11px] tracking-wide mt-1 leading-snug"
                          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                        >
                          CS & AI Student · GEC Idukki · IIT Guwahati
                        </p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
                          <span
                            className="text-[#CCFF00]/70 text-[10px] tracking-wider uppercase"
                            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                          >
                            Available for opportunities
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Nav items */}
                    <nav className="space-y-0 mb-8">
                      {MENU_ITEMS.map((item, i) => (
                        <motion.button
                          key={item.label}
                          onClick={() => setSection(item.section)}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="group w-full flex items-center justify-between py-4 border-b border-white/[0.05] hover:border-[#CCFF00]/20 transition-all duration-300 text-left"
                        >
                          <div>
                            <div
                              className="text-white text-xl tracking-wide group-hover:text-[#CCFF00] transition-colors duration-300 leading-tight"
                              style={{ fontFamily: '"Anton", sans-serif' }}
                            >
                              {item.label}
                            </div>
                            <div
                              className="text-white/30 text-[11px] mt-0.5 group-hover:text-white/50 transition-colors duration-300"
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

                    {/* Social icons */}
                    <div className="flex items-center gap-3 mb-5">
                      {[
                        { icon: <GithubIcon />, href: 'https://github.com/roshanalexander22', label: 'GitHub' },
                        { icon: <LinkedinIcon />, href: 'https://linkedin.com/in/roshan-alexander-thu2122005', label: 'LinkedIn' },
                        { icon: <Mail size={15} />, href: 'mailto:roshanalexander72@gmail.com', label: 'Email' },
                        { icon: <Phone size={15} />, href: 'tel:9656271863', label: 'Phone' },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          className="flex items-center justify-center w-9 h-9 border border-white/12 text-white/40 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 transition-all duration-300 rounded-sm"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>

                    <p
                      className="text-white/20 text-[10px] leading-relaxed"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      roshanalexander72@gmail.com
                      <br />
                      +91 9656271863 · Kottarakkara, Kerala
                    </p>
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
                      className="text-white/30 text-xs mb-7 tracking-wide"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      Selected work — 4 projects
                    </p>

                    <div className="space-y-4">
                      {PROJECTS.map((proj, i) => (
                        <motion.a
                          key={proj.title}
                          href={proj.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="group block p-5 rounded-lg border border-white/[0.07] hover:border-white/15 transition-all duration-300"
                          style={{ background: 'rgba(255,255,255,0.025)' }}
                        >
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex-1 min-w-0">
                              <span
                                className="inline-block text-[10px] px-2 py-0.5 rounded mb-2 tracking-widest uppercase font-semibold"
                                style={{
                                  fontFamily: '"IBM Plex Mono", monospace',
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
                                className="text-white/25 text-[11px]"
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
                            className="text-white/45 text-[13px] leading-relaxed mb-3"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            {proj.desc}
                          </p>

                          <div className="flex flex-wrap gap-1.5">
                            {proj.stack.map((s) => (
                              <span
                                key={s}
                                className="text-[10px] px-2 py-0.5 border border-white/[0.08] text-white/35 rounded"
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
                      className="flex items-center gap-2 text-[#CCFF00]/70 hover:text-[#CCFF00] text-xs mt-6 transition-all duration-300 group"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      <GithubIcon />
                      <span className="group-hover:ml-1 transition-all duration-300">MORE ON GITHUB ↗</span>
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
                      className="text-white/30 text-xs mb-7 tracking-wide"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      Background, Education & Experience
                    </p>

                    <p
                      className="text-white/65 text-sm leading-relaxed mb-8"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      I'm Roshan Alexander — a deeply motivated CS and Data Science & AI student with hands-on experience in
                      Retrieval-Augmented Generation (RAG), machine learning, and Flutter app development.
                      Winner of the IndicClaimVerifier 2026 hackathon and Technical Lead of μLearn GECI.
                    </p>

                    {/* Education */}
                    <SectionLabel>EDUCATION</SectionLabel>
                    <div className="space-y-3 mb-8">
                      {[
                        {
                          deg: 'B.Tech – Computer Science & Engineering',
                          inst: 'Government Engineering College, Idukki',
                          period: 'Sept 2024 – May 2028',
                          note: 'CGPA 8.5+ · Clean record',
                          color: '#CCFF00',
                        },
                        {
                          deg: 'BSc – AI & Data Science',
                          inst: 'Indian Institute of Technology, Guwahati',
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
                          deg: 'SSLC',
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
                          <div className="text-white/55 text-[13px]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                            {edu.inst}
                          </div>
                          <div className="flex items-center justify-between mt-1.5">
                            <span
                              className="text-white/30 text-[10px]"
                              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                            >
                              {edu.period}
                            </span>
                            <span
                              className="text-[10px] px-1.5 py-0.5 rounded"
                              style={{
                                fontFamily: '"IBM Plex Mono", monospace',
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
                    <SectionLabel>EXPERIENCE</SectionLabel>
                    <div className="space-y-5 mb-8">
                      {EXPERIENCE.map((exp) => (
                        <div key={exp.role} className="relative pl-5 border-l-2" style={{ borderColor: `${exp.dot}30` }}>
                          <div
                            className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full"
                            style={{ background: exp.dot, opacity: 0.7 }}
                          />
                          <div
                            className="text-white text-[13px] font-semibold leading-tight mb-0.5"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            {exp.role}
                          </div>
                          <div
                            className="text-[10px] mb-1 tracking-wider"
                            style={{ fontFamily: '"IBM Plex Mono", monospace', color: exp.dot, opacity: 0.7 }}
                          >
                            {exp.org} · {exp.period}
                          </div>
                          <div
                            className="text-white/40 text-[13px] leading-snug"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            {exp.desc}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <SectionLabel>ACHIEVEMENTS</SectionLabel>
                    <div className="space-y-2.5">
                      {[
                        { icon: '🏆', text: 'Winner – IndicClaimVerifier 2026 Hackathon' },
                        { icon: '🎓', text: '100% in SSLC · 98.5% in Plus Two' },
                        { icon: '⭐', text: 'CGPA 8.5+ at GECI, zero supplementary exams' },
                        { icon: '🔧', text: 'Participant – Mument, Codethon, IndicClaimVerifier hackathons' },
                      ].map((a) => (
                        <div
                          key={a.text}
                          className="flex items-start gap-3 text-[13px] text-white/50"
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
                      className="text-white/30 text-xs mb-7 tracking-wide"
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
                              className="skill-tag px-3 py-1 text-[11px] border border-white/10 text-white/50 rounded-full cursor-default select-none"
                              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
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
                            className="flex items-start gap-2 text-[13px] text-white/45"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            <span className="text-[#CCFF00]/60 text-xs mt-0.5 flex-shrink-0">✦</span>
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
                            className="px-4 py-1.5 border border-white/12 text-white/50 text-[12px] rounded-full"
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
                      className="text-white/30 text-xs mb-7 tracking-wide"
                      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                    >
                      Have a project or opportunity? Reach out.
                    </p>

                    {sent ? (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-16"
                      >
                        <div className="text-5xl mb-4">✅</div>
                        <p
                          className="text-[#CCFF00] text-xl mb-2"
                          style={{ fontFamily: '"Anton", sans-serif' }}
                        >
                          MESSAGE SENT!
                        </p>
                        <p className="text-white/40 text-sm" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                          I'll get back to you soon.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {[
                          { label: 'YOUR NAME', key: 'name', type: 'text', placeholder: 'John Doe' },
                          { label: 'EMAIL ADDRESS', key: 'email', type: 'email', placeholder: 'john@company.com' },
                        ].map((field) => (
                          <div key={field.key}>
                            <label
                              className="block text-white/35 text-[10px] tracking-[0.25em] uppercase mb-2"
                              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                            >
                              {field.label}
                            </label>
                            <input
                              type={field.type}
                              required
                              value={form[field.key as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                              placeholder={field.placeholder}
                              className="w-full bg-transparent border-b border-white/15 focus:border-[#CCFF00] outline-none text-white text-sm py-2.5 transition-colors duration-300 placeholder:text-white/20"
                              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                            />
                          </div>
                        ))}

                        <div>
                          <label
                            className="block text-white/35 text-[10px] tracking-[0.25em] uppercase mb-2"
                            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                          >
                            OPPORTUNITY TYPE
                          </label>
                          <select
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                            className="w-full bg-[#0d0d1f] border-b border-white/15 focus:border-[#CCFF00] outline-none text-white text-sm py-2.5 transition-colors duration-300"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          >
                            <option value="" style={{ background: '#0d0d1f' }}>Select type…</option>
                            <option value="internship" style={{ background: '#0d0d1f' }}>Internship</option>
                            <option value="project" style={{ background: '#0d0d1f' }}>Project Collaboration</option>
                            <option value="fulltime" style={{ background: '#0d0d1f' }}>Full-time Role</option>
                            <option value="freelance" style={{ background: '#0d0d1f' }}>Freelance</option>
                            <option value="other" style={{ background: '#0d0d1f' }}>Other</option>
                          </select>
                        </div>

                        <div>
                          <label
                            className="block text-white/35 text-[10px] tracking-[0.25em] uppercase mb-2"
                            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                          >
                            MESSAGE
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Tell me about the opportunity…"
                            className="w-full bg-transparent border-b border-white/15 focus:border-[#CCFF00] outline-none text-white text-sm py-2.5 transition-colors duration-300 resize-none placeholder:text-white/20"
                            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                          />
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3.5 bg-[#CCFF00] text-black text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:brightness-110"
                          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                        >
                          SEND MESSAGE →
                        </motion.button>
                      </form>
                    )}

                    {/* Direct contacts */}
                    <div className="mt-8 pt-7 border-t border-white/[0.06]">
                      <SectionLabel>DIRECT CONTACT</SectionLabel>
                      <div className="space-y-3">
                        <a
                          href="mailto:roshanalexander72@gmail.com"
                          className="flex items-center gap-3 text-[13px] text-white/40 hover:text-[#CCFF00] transition-colors duration-300"
                          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                          <Mail size={13} className="flex-shrink-0" />
                          roshanalexander72@gmail.com
                        </a>
                        <a
                          href="tel:9656271863"
                          className="flex items-center gap-3 text-[13px] text-white/40 hover:text-[#CCFF00] transition-colors duration-300"
                          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                          <Phone size={13} className="flex-shrink-0" />
                          +91 9656271863
                        </a>
                        <a
                          href="https://linkedin.com/in/roshan-alexander-thu2122005"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-[13px] text-white/40 hover:text-[#CCFF00] transition-colors duration-300"
                          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                          <LinkedinIcon />
                          linkedin.com/in/roshan-alexander-thu2122005
                        </a>
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
