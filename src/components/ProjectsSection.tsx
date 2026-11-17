import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, ArrowUpRight, Cpu, Eye, Radio } from 'lucide-react';
import { sound } from '../utils/audio';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ProjectsSectionProps {
  onNotify?: (msg: string) => void;
}

export default function ProjectsSection({ onNotify }: ProjectsSectionProps) {
  // Tab states for interactive inspection
  const [indicTab, setIndicTab] = useState<'overview' | 'pipeline'>('overview');
  const [geoTab, setGeoTab] = useState<'overview' | 'radar'>('overview');
  const [wasteTab, setWasteTab] = useState<'overview' | 'metrics'>('overview');

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 lg:px-20 border-t border-white/[0.08]">
      {/* Background Accent glow */}
      <div
        className="absolute top-1/4 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(204,255,0,0.035) 0%, rgba(136,170,255,0.02) 50%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header with generous breathing room */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-[11px] text-[#CCFF00] tracking-[0.3em] uppercase">
              <Code2 size={15} className="text-[#CCFF00]" />
              <span>CURATED FLAGSHIP ARCHITECTURES</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white uppercase font-bold tracking-tight"
              style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.02em', lineHeight: 1.1 }}
            >
              FEATURED <span className="text-[#CCFF00]">PROJECTS</span>
            </h2>
            <p className="text-white/65 text-base md:text-lg mt-4 max-w-2xl font-sans leading-relaxed">
              An elite selection of engineered systems across local RAG artificial intelligence,
              GPS multiplayer gaming in Flutter, real-time computer vision, and cryptographic audit logs.
            </p>
          </div>

          <a
            href="https://github.com/roshanalexander22"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-3 px-6 py-3.5 bg-white/[0.03] border border-white/15 hover:border-[#CCFF00]/60 text-white/90 hover:text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-sm w-fit group shadow-lg"
          >
            <GithubIcon />
            <span>MORE REPOSITORIES ON GITHUB</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════
            BENTO 1: HERO FLAGSHIP — IndicClaimVerifier (FactCheck AI)
            ══════════════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[#CCFF00]/30 bg-gradient-to-br from-[#0c0d22] via-[#070719] to-[#040212] p-8 md:p-12 mb-12 shadow-[0_0_50px_rgba(204,255,0,0.06)] overflow-hidden"
        >
          {/* Subtle Cyber Grid Backing */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(rgba(204,255,0,0.2) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#CCFF00] text-black tracking-wider uppercase shadow-md">
                    <Sparkles size={12} className="fill-current" />
                    <span>🏆 2026 HACKATHON WINNER</span>
                  </span>
                  <span className="text-white/40 text-xs font-mono">
                    AI &amp; RAG ARCHITECTURE · 2026
                  </span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl md:text-5xl text-white font-bold uppercase tracking-wide leading-tight mb-4"
                  style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.02em' }}
                >
                  IndicClaimVerifier <span className="text-[#CCFF00]">(FactCheck AI)</span>
                </h3>

                <p className="text-white/75 text-base md:text-lg leading-relaxed font-sans mb-6">
                  An automated claim verification and evidence-retrieval framework engineered specifically for Indic languages and regional dialects.
                  The system ingests viral or disputed claims, retrieves grounded factual evidence from dense knowledge bases, and computes verifiable truth probability scores—completely offline with local LLMs.
                </p>

                {/* Sub-tabs to inspect architecture */}
                <div className="flex items-center gap-2 mb-6">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setIndicTab('overview');
                    }}
                    className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-colors ${
                      indicTab === 'overview'
                        ? 'bg-white/10 text-[#CCFF00] border border-[#CCFF00]/40'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    System Design
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setIndicTab('pipeline');
                    }}
                    className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-colors ${
                      indicTab === 'pipeline'
                        ? 'bg-white/10 text-[#CCFF00] border border-[#CCFF00]/40'
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    RAG Pipeline Steps
                  </button>
                </div>

                {indicTab === 'overview' ? (
                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] mb-8 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#CCFF00] font-bold tracking-wider uppercase">
                      <Cpu size={14} />
                      <span>OFFLINE LOCAL INFERENCE ENGINE</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed font-sans">
                      Unlike cloud-dependent fact-checkers, IndicClaimVerifier leverages quantized <strong>Ollama + Qwen models</strong> and <strong>FAISS vector indexes</strong>.
                      This delivers sub-second response times, zero token billing overhead, and bulletproof user privacy for sensitive data.
                    </p>
                  </div>
                ) : (
                  <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] mb-8 space-y-2.5 font-mono text-xs">
                    <div className="flex items-start gap-2 text-white/80">
                      <span className="text-[#CCFF00] font-bold">01.</span>
                      <span>Multilingual text normalization &amp; Indic tokenization</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80">
                      <span className="text-[#CCFF00] font-bold">02.</span>
                      <span>High-dimensional semantic chunk retrieval via FAISS &amp; ChromaDB</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80">
                      <span className="text-[#CCFF00] font-bold">03.</span>
                      <span>Cross-encoder semantic reranking to discard hallucinations</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80">
                      <span className="text-[#CCFF00] font-bold">04.</span>
                      <span>Local LLM synthesis generating citation-backed verdicts</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Stack & Link Actions */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'RAG', 'Ollama', 'Qwen LLM', 'LangChain', 'FAISS', 'Indic NLP', 'ChromaDB'].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/70 bg-white/[0.03] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href="https://github.com/roshanalexander22"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#CCFF00] text-black font-mono font-bold text-xs uppercase tracking-widest rounded hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                  >
                    <GithubIcon />
                    <span>VIEW WINNING CODEBASE ↗</span>
                  </a>
                  <button
                    onClick={() => {
                      sound.playClick();
                      if (onNotify) onNotify('IndicClaimVerifier won 1st Place in the 2026 Hackathon!');
                    }}
                    className="px-5 py-3 border border-white/20 text-white/70 hover:text-white text-xs font-mono rounded hover:border-white/40 transition-colors"
                  >
                    AWARD DETAILS
                  </button>
                </div>
              </div>
            </div>

            {/* Right Telemetry / Visual Verification Console */}
            <div className="lg:col-span-5 rounded-xl border border-white/10 bg-[#020010] p-6 font-mono text-xs shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white/60 text-[11px] tracking-wider uppercase">
                    SIMULATED PIPELINE TELEMETRY
                  </span>
                </div>
                <span className="text-[#CCFF00] text-[10px] bg-[#CCFF00]/10 px-2 py-0.5 rounded border border-[#CCFF00]/20">
                  VERIFIED CLAIM
                </span>
              </div>

              {/* Verification Stream simulation */}
              <div className="space-y-3.5 text-white/75 leading-relaxed">
                <div className="p-2.5 rounded bg-white/[0.03] border border-white/5">
                  <div className="text-white/35 text-[10px] uppercase mb-1">INPUT DISPUTED CLAIM</div>
                  <div className="text-white text-xs">
                    "Historical monument restoration approved under regional state preservation grant."
                  </div>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex items-center justify-between text-white/50">
                    <span>EMBEDDING COSINE SIMILARITY</span>
                    <span className="text-[#CCFF00] font-bold">0.964</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[96%] h-full bg-[#CCFF00]" />
                  </div>
                </div>

                <div className="p-3 rounded bg-white/[0.02] border border-white/5 space-y-1.5 text-[11px]">
                  <div className="text-white/40 text-[10px] uppercase">EVIDENCE RETRIEVAL (FAISS)</div>
                  <div className="text-white/80 leading-relaxed">
                    Source: Verified Public Archive #2026-B
                  </div>
                  <div className="text-[#CCFF00] text-[10px] font-bold">
                    STATUS: 100% FACTUAL MATCH (ZERO CONFLICT)
                  </div>
                </div>

                <div className="pt-2 text-white/40 text-[10px] flex items-center justify-between">
                  <span>INFERENCE: QWEN 2.5 LOCAL</span>
                  <span>LATENCY: 142ms</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════════════
            BENTO ROW 2: GeoSeize (7-cols) + Nothing X Web (5-cols)
            ══════════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* 1. GeoSeize (Flutter GPS Game) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0a0a20] to-[#040212] p-8 md:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-[#88aaff]/15 text-[#88aaff] border border-[#88aaff]/30 uppercase tracking-wider">
                  FLUTTER · MULTIPLAYER GPS CONQUEST
                </span>
                <span className="text-white/40 text-xs font-mono">2025</span>
              </div>

              <h3
                className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                GeoSeize <span className="text-[#88aaff]">Fitness Game</span>
              </h3>

              <p className="text-white/70 text-base leading-relaxed font-sans mb-6">
                A real-world territory conquest fitness game built with Flutter.
                Players physically run, walk, or cycle to enclose real geographic parcels with GPS coordinates,
                capturing map polygons for their squad while battling rivals across live Firebase-synced leaderboards.
              </p>

              {/* Sub-tabs */}
              <div className="flex items-center gap-2 mb-5">
                <button
                  onClick={() => setGeoTab('overview')}
                  className={`px-3 py-1 text-xs font-mono uppercase rounded transition-colors ${
                    geoTab === 'overview' ? 'bg-white/10 text-[#88aaff] border border-[#88aaff]/40' : 'text-white/40'
                  }`}
                >
                  Architecture
                </button>
                <button
                  onClick={() => setGeoTab('radar')}
                  className={`px-3 py-1 text-xs font-mono uppercase rounded transition-colors ${
                    geoTab === 'radar' ? 'bg-white/10 text-[#88aaff] border border-[#88aaff]/40' : 'text-white/40'
                  }`}
                >
                  Live Radar View
                </button>
              </div>

              {geoTab === 'overview' ? (
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] mb-6 space-y-2">
                  <div className="text-xs font-mono text-[#88aaff] font-bold uppercase">
                    GEOSPATIAL ALGORITHMIC ENGINE
                  </div>
                  <p className="text-white/65 text-xs md:text-sm font-sans leading-relaxed">
                    Implements ray-casting point-in-polygon containment, Google Maps Flutter SDK,
                    geofencing background tracking, and Firebase Firestore transactional updates with full Dart unit testing.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-white/10 bg-[#020014] mb-6 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-[#88aaff]">
                    <span className="flex items-center gap-1.5">
                      <Radio size={13} className="animate-pulse" />
                      <span>GPS RADAR ACTIVE</span>
                    </span>
                    <span>COORDS: 9.52° N, 76.78° E</span>
                  </div>
                  <div className="text-white/60 text-[11px] leading-relaxed">
                    Squad Alpha: 4 Parcels Seized · Speed: 14.2 km/h · Accuracy: ±3m
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Flutter', 'Dart', 'Google Maps API', 'Firebase Firestore', 'Geofencing', 'State Management'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded border border-white/10 text-white/60 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/roshanalexander22/GeoSeize"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 text-xs font-mono text-white/90 hover:text-[#88aaff] transition-colors"
              >
                <GithubIcon />
                <span>EXPLORE GEOSEIZE ON GITHUB →</span>
              </a>
            </div>
          </motion.div>

          {/* 2. Nothing X Web Interface (5-cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0c0c16] to-[#04020c] p-8 md:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-white/10 text-white border border-white/20 uppercase tracking-wider">
                  FUTURISTIC UI · HARDWARE EMULATION
                </span>
                <span className="text-white/40 text-xs font-mono">2025</span>
              </div>

              <h3
                className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                Nothing X <span className="text-white/50">Web OS</span>
              </h3>

              <p className="text-white/70 text-base leading-relaxed font-sans mb-6">
                High-fidelity web application recreating the unmistakable dot-matrix design language and responsive audio feedback of Nothing OS and Nothing X wireless earphone hardware.
              </p>

              {/* Glyph Dot Matrix Visual Element */}
              <div className="p-5 rounded-xl border border-white/10 bg-black/60 mb-6 space-y-3 font-mono">
                <div className="flex items-center justify-between text-white/50 text-xs">
                  <span>GLYPH INTERFACE</span>
                  <span className="text-white">NOTHING_EAR(a)</span>
                </div>
                <div className="flex items-center gap-2 justify-center py-2">
                  <div className="w-8 h-1 rounded-full bg-white shadow-[0_0_10px_#fff]" />
                  <div className="w-3 h-1 rounded-full bg-white/40" />
                  <div className="w-12 h-1 rounded-full bg-white shadow-[0_0_10px_#fff]" />
                </div>
                <div className="text-center text-[10px] text-white/40 tracking-widest">
                  ACTIVE NOISE CANCELLATION: TRANSDUCER ON
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['TypeScript', 'Tailwind CSS', 'Web Audio API', 'Component Architecture'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded border border-white/10 text-white/60 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/roshanalexander22/Nothing-x-app"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 text-xs font-mono text-white/90 hover:text-white transition-colors"
              >
                <GithubIcon />
                <span>EXPLORE NOTHING X ON GITHUB →</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════
            BENTO ROW 3: Trace AI (5-cols) + Automated Waste Detection (7-cols)
            ══════════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* 3. Trace AI (Computer Vision) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0c0818] to-[#04020c] p-8 md:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-[#ff88aa]/15 text-[#ff88aa] border border-[#ff88aa]/30 uppercase tracking-wider">
                  COMPUTER VISION · GESTURE AI
                </span>
                <span className="text-white/40 text-xs font-mono">2025</span>
              </div>

              <h3
                className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                Trace <span className="text-[#ff88aa]">Vision AI</span>
              </h3>

              <p className="text-white/70 text-base leading-relaxed font-sans mb-6">
                An interactive perceptual vision system using a device's front-facing camera to understand real-time hand gestures, track kinematic joint positions, and drive responsive canvas animations.
              </p>

              {/* Hand Kinematics Visual */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] mb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ff88aa] font-bold">
                  <Eye size={14} />
                  <span>21-POINT SKELETON ESTIMATION</span>
                </div>
                <p className="text-white/65 text-xs md:text-sm font-sans leading-relaxed">
                  Real-time normalized coordinate landmark mapping and gesture classification with zero server latency.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['TypeScript', 'Computer Vision', 'OpenCV / MediaPipe', 'Webcam API', 'HTML5 Canvas'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded border border-white/10 text-white/60 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/roshanalexander22/Trace"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 text-xs font-mono text-white/90 hover:text-[#ff88aa] transition-colors"
              >
                <GithubIcon />
                <span>EXPLORE TRACE ON GITHUB →</span>
              </a>
            </div>
          </motion.div>

          {/* 4. Automated Waste Detection & Classification (7-cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0c0e1a] to-[#040212] p-8 md:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-[#ffcc66]/15 text-[#ffcc66] border border-[#ffcc66]/30 uppercase tracking-wider">
                  DEEP LEARNING · CONVOLUTIONAL NEURAL NET
                </span>
                <span className="text-white/40 text-xs font-mono">2025</span>
              </div>

              <h3
                className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                Automated Waste <span className="text-[#ffcc66]">Classification</span>
              </h3>

              <p className="text-white/70 text-base leading-relaxed font-sans mb-6">
                A deep convolutional neural network for automated multi-stream segregation of solid waste.
                Engineered with transfer learning to rapidly identify recyclable plastics, biodegradable organics, glass, and hazardous e-waste.
              </p>

              {/* Sub-tabs */}
              <div className="flex items-center gap-2 mb-5">
                <button
                  onClick={() => setWasteTab('overview')}
                  className={`px-3 py-1 text-xs font-mono uppercase rounded transition-colors ${
                    wasteTab === 'overview' ? 'bg-white/10 text-[#ffcc66] border border-[#ffcc66]/40' : 'text-white/40'
                  }`}
                >
                  Model Architecture
                </button>
                <button
                  onClick={() => setWasteTab('metrics')}
                  className={`px-3 py-1 text-xs font-mono uppercase rounded transition-colors ${
                    wasteTab === 'metrics' ? 'bg-white/10 text-[#ffcc66] border border-[#ffcc66]/40' : 'text-white/40'
                  }`}
                >
                  Validation Metrics
                </button>
              </div>

              {wasteTab === 'overview' ? (
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] mb-6 space-y-2">
                  <div className="text-xs font-mono text-[#ffcc66] font-bold uppercase">
                    RESNET BACKBONE &amp; DATA AUGMENTATION
                  </div>
                  <p className="text-white/65 text-xs md:text-sm font-sans leading-relaxed">
                    Trained with PyTorch using image rotations, affine transforms, and cross-entropy loss, achieving resilient edge inference on lower-spec hardware.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-white/10 bg-[#020014] mb-6 space-y-2 font-mono text-xs">
                  {[
                    { label: 'Hazardous / E-Waste', score: '99.1%' },
                    { label: 'Recyclable Plastics', score: '98.4%' },
                    { label: 'Biodegradable Organics', score: '96.2%' },
                    { label: 'Metal & Glass', score: '94.8%' },
                  ].map((m) => (
                    <div key={m.label} className="flex justify-between items-center text-white/70">
                      <span>{m.label}</span>
                      <span className="text-[#ffcc66] font-bold">{m.score}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'PyTorch', 'Computer Vision', 'Jupyter', 'NumPy', 'Transfer Learning'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded border border-white/10 text-white/60 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/roshanalexander22/Automated-Waste-Classification"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 text-xs font-mono text-white/90 hover:text-[#ffcc66] transition-colors"
              >
                <GithubIcon />
                <span>EXPLORE CNN MODEL ON GITHUB →</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════
            BENTO ROW 4: ProofMesh (Full-Width Systems Feature)
            ══════════════════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0c0d22] to-[#040212] p-8 md:p-10 flex flex-col md:flex-row items-stretch justify-between gap-8 hover:border-white/20 transition-all duration-300"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-[#aaffcc]/15 text-[#aaffcc] border border-[#aaffcc]/30 uppercase tracking-wider">
                CRYPTOGRAPHIC AUDIT SYSTEM
              </span>
              <span className="text-white/40 text-xs font-mono">2026</span>
            </div>

            <h3
              className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wide leading-tight mb-3"
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              ProofMesh <span className="text-[#aaffcc]">Audit Ledger</span>
            </h3>

            <p className="text-white/70 text-base leading-relaxed font-sans mb-6 max-w-2xl">
              A decentralized system enabling independent observers to mathematically verify the chronological history of digital events—guaranteeing that recording authorities cannot rewrite or alter past records.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['Python', 'Cryptography', 'Merkle Trees', 'Distributed Systems', 'REST API'].map((t) => (
                <span key={t} className="text-xs px-2.5 py-0.5 rounded border border-white/10 text-white/60 font-mono">
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/roshanalexander22/ProofMesh"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 text-xs font-mono text-white/90 hover:text-[#aaffcc] transition-colors"
            >
              <GithubIcon />
              <span>EXPLORE PROOFMESH ON GITHUB →</span>
            </a>
          </div>

          {/* Cryptographic hash chain visual */}
          <div className="md:w-80 rounded-xl border border-white/10 bg-[#020014] p-5 font-mono text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-white/40 text-[10px] mb-3 pb-2 border-b border-white/10">
                <span>MERKLE CHAIN PROOF</span>
                <span className="text-[#aaffcc]">VERIFIED</span>
              </div>
              <div className="space-y-2 text-[11px] text-white/70">
                <div className="p-2 rounded bg-white/[0.02] border border-white/5 truncate">
                  <span className="text-[#aaffcc]">ROOT: </span>7f83b165...4b9d
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5 truncate">
                  <span className="text-white/40">HASH-1: </span>e3b0c442...9822
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5 truncate">
                  <span className="text-white/40">HASH-2: </span>a591a6d4...3011
                </div>
              </div>
            </div>
            <div className="text-[10px] text-white/40 pt-3 border-t border-white/5 mt-3">
              IMMUTABILITY: MATHEMATICALLY PROVEN
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
