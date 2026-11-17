import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Filter, Code2, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  category: 'ai' | 'mobile' | 'systems' | 'web' | 'vision';
  year: string;
  badge?: string;
  desc: string;
  architecture: string;
  stack: string[];
  github: string;
  accent: string;
  featured?: boolean;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'indic-claim',
    title: 'IndicClaimVerifier',
    tag: '🏆 HACKATHON WINNER 2026',
    category: 'ai',
    year: '2026',
    badge: '1st Place Award',
    desc: 'Automated claim verification and evidence retrieval framework engineered specifically for Indic languages. Integrates multi-stage retrieval, semantic reranking, and local offline LLM inference.',
    architecture: 'RAG Pipeline with FAISS vector database, ChromaDB, LangChain, and local Ollama Qwen model for zero-cloud latency and private inference.',
    stack: ['Python', 'RAG', 'Ollama', 'Qwen LLM', 'LangChain', 'FAISS', 'Indic NLP'],
    github: 'https://github.com/roshanalexander22',
    accent: '#CCFF00',
    featured: true,
  },
  {
    id: 'proofmesh',
    title: 'ProofMesh',
    tag: 'CRYPTOGRAPHIC AUDIT LOG',
    category: 'systems',
    year: '2026',
    desc: 'Decentralized cryptographic verification architecture enabling independent parties to mathematically verify the chronological history of digital events, resisting centralized retrospective alteration.',
    architecture: 'Merkle tree audit proofs, SHA-256 chain verification, immutable event logs, and high-throughput Python API.',
    stack: ['Python', 'Cryptography', 'Merkle Trees', 'Distributed Systems', 'REST API'],
    github: 'https://github.com/roshanalexander22/ProofMesh',
    accent: '#88aaff',
    featured: true,
  },
  {
    id: 'trace',
    title: 'Trace AI',
    tag: 'COMPUTER VISION · GESTURE CONTROL',
    category: 'vision',
    year: '2025',
    desc: 'AI-driven perceptual computing system that uses a laptop or mobile front camera to track hand gestures, kinematic joint positions, and trigger fluid screen animations in real-time.',
    architecture: 'Client-side neural vision tracking, 21-point hand landmark estimation, normalized coordinate mapping, and low-latency canvas rendering.',
    stack: ['TypeScript', 'Computer Vision', 'OpenCV / MediaPipe', 'Webcam API', 'HTML5 Canvas'],
    github: 'https://github.com/roshanalexander22/Trace',
    accent: '#ff88aa',
    featured: true,
  },
  {
    id: 'geoseize',
    title: 'GeoSeize',
    tag: 'FLUTTER · MULTIPLAYER GPS CONQUEST',
    category: 'mobile',
    year: '2025',
    badge: 'Real-time Multiplayer',
    desc: 'GPS-based real-world territory conquest game. Players physically run, walk, and bike to encircle land parcels, claiming them for their squad on live synchronized maps.',
    architecture: 'Google Maps Flutter SDK, polygon ray-casting containment algorithms, Firebase Firestore live listener syncing, and modular Dart test suite.',
    stack: ['Flutter', 'Dart', 'Firebase Firestore', 'Google Maps API', 'Geofencing'],
    github: 'https://github.com/roshanalexander22/GeoSeize',
    accent: '#CCFF00',
    featured: true,
  },
  {
    id: 'mufifa',
    title: 'μFIFA World Cup 2026',
    tag: 'GAMIFIED TOURNAMENT PLATFORM',
    category: 'web',
    year: '2026',
    desc: '6-week gamified tournament platform for μLearn Foundation where participants compete across 4 Squad Domains: Maker, Coder, Designer, and Strategist with live tier progression.',
    architecture: 'FastAPI tournament engine, real-time leaderboard aggregation, automated scoring jobs, and containerized deployment.',
    stack: ['Python', 'FastAPI', 'Gamification Engine', 'Docker', 'CI/CD'],
    github: 'https://github.com/roshanalexander22/mufifa-2026',
    accent: '#aaffcc',
    featured: true,
  },
  {
    id: 'nothing-x',
    title: 'Nothing X Web Interface',
    tag: 'FUTURISTIC UI · HARDWARE EMULATION',
    category: 'web',
    year: '2025',
    desc: 'High-fidelity web application recreating the distinct dot-matrix visual aesthetic and reactive audio feedback of Nothing OS and Nothing X wireless earphone controls.',
    architecture: 'Custom glyph typography, Web Audio API sound generator, tactile slider controls, and hardware state simulation.',
    stack: ['TypeScript', 'Tailwind CSS', 'Web Audio API', 'Three.js'],
    github: 'https://github.com/roshanalexander22/Nothing-x-app',
    accent: '#ffffff',
  },
  {
    id: 'karuthal',
    title: 'Karuthal',
    tag: 'HEALTHCARE · COMMUNITY CARE',
    category: 'mobile',
    year: '2025',
    desc: 'Community emergency and healthcare outreach mobile app providing quick-access donor registries, patient transport coordination, and localized crisis assistance.',
    architecture: 'Flutter clean architecture, Firestore real-time queries, responsive Material 3 components, and emergency dialer hooks.',
    stack: ['Flutter', 'Dart', 'Firebase', 'State Management'],
    github: 'https://github.com/roshanalexander22/Karuthal',
    accent: '#ffaa88',
  },
  {
    id: 'stress-detector',
    title: 'Stress Level Detector',
    tag: 'CROSS-PLATFORM · WELLNESS',
    category: 'mobile',
    year: '2025',
    desc: 'Multi-platform wellness application delivering clinical stress evaluations, personalized calming binaural audio sequences, and longitudinal biometric mood analytics.',
    architecture: 'Single codebase targeting Android, iOS, Web, and Desktop with persistent offline SQLite storage and background audio stream services.',
    stack: ['Flutter', 'Dart', 'Audio Therapy', 'Health Analytics'],
    github: 'https://github.com/roshanalexander22/Stress-level-detection-app',
    accent: '#88ffcc',
  },
  {
    id: 'u-me',
    title: 'U & me',
    tag: 'ANDROID WIDGET · SOCIAL STREAM',
    category: 'mobile',
    year: '2025',
    desc: 'Modern Android companion app enabling paired users to share a single live photo directly to each other’s home screens through an interactive 3×2 launcher widget.',
    architecture: 'HomeWidget native integration, Kotlin-to-Flutter method channels, Firebase Cloud Storage with automated cache purge.',
    stack: ['Dart', 'Flutter', 'Android Widget API', 'Firebase Cloud Storage'],
    github: 'https://github.com/roshanalexander22/U-me',
    accent: '#ff88cc',
  },
  {
    id: 'ticket-triage',
    title: 'Support Ticket Triage Agent',
    tag: 'AGENTIC AI · AUTOMATION',
    category: 'ai',
    year: '2025',
    desc: 'Multi-agent autonomous customer support triage pipeline that processes raw unstructured tickets, classifies priority, and extracts actionable intent.',
    architecture: 'LangChain agent workflows, zero-shot entity classification, automated priority routing matrix, and response synthesis.',
    stack: ['Python', 'LangChain', 'Agentic Workflows', 'Ollama', 'NLP'],
    github: 'https://github.com/roshanalexander22/Customer-Support-Ticket-Triage',
    accent: '#CCFF00',
  },
  {
    id: 'waste-classification',
    title: 'Waste Classification CNN',
    tag: 'DEEP LEARNING · VISION',
    category: 'vision',
    year: '2025',
    desc: 'Deep convolutional neural network for automated segregation of municipal solid waste into recyclable, biodegradable, and hazardous material streams.',
    architecture: 'Transfer learning on pretrained ResNet backbone, image augmentation pipeline, cross-entropy multi-class loss, and confusion matrix analysis.',
    stack: ['Python', 'PyTorch', 'Computer Vision', 'Jupyter', 'NumPy'],
    github: 'https://github.com/roshanalexander22/Automated-Waste-Classification',
    accent: '#ffcc66',
  },
  {
    id: 'doc-assistant',
    title: 'Software Documentation Assistant',
    tag: 'GENAI · DEVELOPER TOOL',
    category: 'ai',
    year: '2025',
    desc: 'Autonomous developer assistant that ingests codebase repositories, constructs AST dependency graphs, and generates comprehensive architecture documentation.',
    architecture: 'Python AST code parser, semantic function signature summarizer, and markdown generator.',
    stack: ['Python', 'AST Parser', 'Prompt Engineering', 'LangChain'],
    github: 'https://github.com/roshanalexander22/Software-Documentation-Assistant',
    accent: '#88aaff',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI, RAG & Agents' },
  { id: 'mobile', label: 'Flutter & Mobile' },
  { id: 'vision', label: 'Computer Vision' },
  { id: 'systems', label: 'Systems & Security' },
  { id: 'web', label: 'Web & Tools' },
];

interface ProjectsSectionProps {
  onNotify?: (msg: string) => void;
}

export default function ProjectsSection({ onNotify }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const handleInspect = (proj: ProjectItem) => {
    sound.playClick();
    setSelectedModalProject(proj);
    if (onNotify) onNotify(`Inspecting: ${proj.title}`);
  };

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-white/[0.08]">
      {/* Background Accent glow */}
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(204,255,0,0.03) 0%, rgba(136,170,255,0.02) 50%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08] mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#CCFF00] tracking-[0.3em] uppercase">
              <Code2 size={14} className="text-[#CCFF00]" />
              <span>PORTFOLIO CODEBASE // 12+ REPOSITORIES</span>
            </div>
            <h2
              className="text-4xl md:text-6xl text-white uppercase leading-none font-bold tracking-tight"
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              ENGINEERED <span className="text-[#CCFF00]">PROJECTS</span>
            </h2>
            <p className="text-white/50 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
              From winning RAG frameworks in regional Indic dialects to GPS-driven multiplayer games and cryptographic audit systems.
              All codebases built with rigorous software architecture and clean separation of concerns.
            </p>
          </div>

          <a
            href="https://github.com/roshanalexander22"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.03] border border-white/15 hover:border-[#CCFF00]/60 text-white/80 hover:text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-sm w-fit group"
          >
            <GithubIcon />
            <span>ALL REPOS ON GITHUB</span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
          <Filter size={13} className="text-white/30 mr-1 flex-shrink-0" />
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full border transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                    : 'border-white/10 text-white/50 hover:text-white hover:border-white/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative flex flex-col justify-between p-6 rounded-xl border border-white/[0.08] hover:border-white/25 transition-all duration-300 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Glow accent corner */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${project.accent}20, transparent 70%)`,
                  }}
                />

                {/* Top Meta info */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="text-[10px] px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase"
                      style={{
                        background: `${project.accent}15`,
                        color: project.accent,
                        border: `1px solid ${project.accent}40`,
                      }}
                    >
                      {project.tag}
                    </span>
                    <span className="text-white/30 text-[11px] font-mono">
                      {project.year}
                    </span>
                  </div>

                  <h3
                    className="text-white text-2xl font-bold uppercase tracking-wide leading-tight mb-2 group-hover:text-[#CCFF00] transition-colors duration-300"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-xs leading-relaxed font-sans mb-4">
                    {project.desc}
                  </p>

                  {/* Architecture highlight box */}
                  <div className="p-3 rounded border border-white/5 bg-white/[0.02] mb-5">
                    <div className="text-[10px] text-white/40 font-mono tracking-widest uppercase mb-1 flex items-center gap-1">
                      <Sparkles size={10} className="text-[#CCFF00]" />
                      <span>ARCHITECTURE HIGHLIGHT:</span>
                    </div>
                    <p className="text-[11px] text-white/70 font-mono leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                {/* Bottom tech chips and actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 border border-white/[0.08] text-white/40 rounded font-mono group-hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => sound.playHover()}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 border border-white/10 hover:border-[#CCFF00]/50 hover:bg-[#CCFF00]/10 text-white/80 hover:text-white text-xs font-mono rounded transition-all duration-200"
                    >
                      <GithubIcon />
                      <span>CODE REPO</span>
                      <ExternalLink size={11} className="text-white/40" />
                    </a>

                    <button
                      onClick={() => handleInspect(project)}
                      onMouseEnter={() => sound.playHover()}
                      className="py-2 px-3 border border-white/10 hover:border-white/30 text-white/50 hover:text-white text-xs font-mono rounded transition-colors"
                    >
                      BLUEPRINT
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Blueprint Inspect Modal */}
      <AnimatePresence>
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl p-8 rounded-xl border border-white/15 z-10 shadow-2xl"
              style={{
                background: '#0a0a1e',
                boxShadow: '0 0 50px rgba(0,0,0,0.8), 0 0 20px rgba(204,255,0,0.08)',
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span
                    className="text-[10px] px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase inline-block mb-2"
                    style={{
                      background: `${selectedModalProject.accent}15`,
                      color: selectedModalProject.accent,
                      border: `1px solid ${selectedModalProject.accent}40`,
                    }}
                  >
                    {selectedModalProject.tag}
                  </span>
                  <h3
                    className="text-white text-3xl font-bold uppercase leading-none"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    {selectedModalProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="w-8 h-8 flex items-center justify-center border border-white/10 text-white/50 hover:text-white rounded"
                >
                  ✕
                </button>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans">
                {selectedModalProject.desc}
              </p>

              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02] mb-6">
                <div className="text-[11px] font-mono text-[#CCFF00] tracking-wider uppercase mb-1 font-bold">
                  SYSTEM DESIGN &amp; TECHNICAL ARCHITECTURE
                </div>
                <p className="text-white/80 text-xs font-mono leading-relaxed">
                  {selectedModalProject.architecture}
                </p>
              </div>

              <div className="mb-6">
                <div className="text-[10px] text-white/40 font-mono tracking-widest uppercase mb-2">
                  FULL TECHNOLOGY STACK:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedModalProject.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded border border-white/15 text-white/90 bg-white/[0.03] font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <a
                  href={selectedModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#CCFF00] text-black font-mono font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                >
                  <GithubIcon />
                  <span>VIEW REPOSITORY ON GITHUB ↗</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
