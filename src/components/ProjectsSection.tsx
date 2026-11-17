import { motion } from 'framer-motion';
import { Sparkles, Code2, ArrowUpRight, Eye, Radio, FileText, ShieldCheck, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

// NOTE FOR USER: Paste the official hackathon results / announcement URL here once public
const INDIC_AWARD_PROOF_URL = '';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ProjectsSectionProps {
  onNotify?: (msg: string) => void;
}

export default function ProjectsSection({ onNotify }: ProjectsSectionProps) {
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
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-[11px] text-[#CCFF00] tracking-[0.3em] uppercase">
              <Code2 size={15} className="text-[#CCFF00]" />
              <span>VERIFIABLE WORK &amp; CODEBASES</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white uppercase font-bold tracking-tight"
              style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.02em', lineHeight: 1.1 }}
            >
              FEATURED <span className="text-[#CCFF00]">PROJECTS</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg mt-4 max-w-2xl font-sans leading-relaxed">
              Software engineering and applied AI systems evaluated by problem, individual contribution, technical implementation, and verifiable evidence.
            </p>
          </div>

          <a
            href="https://github.com/roshanalexander22"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-3 px-6 py-3.5 bg-white/[0.03] border border-white/15 hover:border-[#CCFF00]/60 text-white/90 hover:text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-sm w-fit group shadow-lg min-h-[44px]"
            aria-label="View Roshan Alexander's GitHub profile"
          >
            <GithubIcon />
            <span>MORE REPOSITORIES ON GITHUB</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════
            PROJECT 1 (PRIMARY FLAGSHIP): IndicClaimVerifier (FactCheck AI)
            ══════════════════════════════════════════════════════════════════════════ */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[#CCFF00]/30 bg-gradient-to-br from-[#0c0d24] via-[#07071c] to-[#040212] p-8 md:p-12 mb-14 shadow-[0_0_50px_rgba(204,255,0,0.06)] overflow-hidden"
        >
          {/* Subtle Cyber Grid */}
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
                    <span>🏆 1ST PLACE WINNER · 2026 HACKATHON</span>
                  </span>
                  <span className="text-white/50 text-xs font-mono">
                    AI &amp; RAG ARCHITECTURE · 2026
                  </span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl md:text-5xl text-white font-bold uppercase tracking-wide leading-tight mb-4"
                  style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.02em' }}
                >
                  IndicClaimVerifier <span className="text-[#CCFF00]">(FactCheck AI)</span>
                </h3>

                <p className="text-white/80 text-base md:text-lg leading-relaxed font-sans mb-6">
                  An automated retrieval-augmented generation (RAG) pipeline engineered for claim verification in Indic languages and regional dialects, utilizing local open-weights LLMs to avoid recurring cloud API fees and network latency.
                </p>

                {/* Direct Structured Breakdown — No hidden tabs */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                    <span className="text-[#CCFF00] font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                      PROBLEM
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed font-sans">
                      Misinformation in regional Indian languages frequently bypasses automated fact-checking because commercial verification APIs prioritize English and require expensive, latency-heavy cloud roundtrips.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                    <span className="text-[#CCFF00] font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                      WHAT I BUILT &amp; SPECIFIC CONTRIBUTION
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed font-sans">
                      Architected the end-to-end RAG pipeline. Implemented multilingual text normalization and Indic tokenization, dense semantic vector indexing with FAISS and ChromaDB, and context synthesis using quantized Qwen models running locally through Ollama.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                    <span className="text-[#CCFF00] font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                      VERIFIABLE RESULT &amp; STATUS
                    </span>
                    <p className="text-white/80 text-sm leading-relaxed font-sans">
                      Awarded <strong>1st Place at the 2026 Hackathon</strong> for local execution, dialect handling, and privacy preservation. Code is currently in private evaluation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stack & Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'RAG', 'Ollama', 'Qwen LLM', 'LangChain', 'FAISS', 'Indic NLP', 'ChromaDB'].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/80 bg-white/[0.03] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href="https://github.com/roshanalexander22"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#CCFF00] text-black font-mono font-bold text-xs uppercase tracking-widest rounded hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] min-h-[44px]"
                    aria-label="Repository status: Private codebase, available upon request"
                  >
                    <GithubIcon />
                    <span>REPO (PRIVATE · ON REQUEST) ↗</span>
                  </a>

                  {INDIC_AWARD_PROOF_URL ? (
                    <a
                      href={INDIC_AWARD_PROOF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => sound.playHover()}
                      className="inline-flex items-center gap-2 px-5 py-3 border border-[#CCFF00]/50 bg-[#CCFF00]/10 text-[#CCFF00] font-mono font-bold text-xs uppercase tracking-widest rounded hover:bg-[#CCFF00] hover:text-black transition-all min-h-[44px]"
                    >
                      <Sparkles size={13} />
                      <span>AWARD PROOF LINK ↗</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        sound.playClick();
                        if (onNotify) onNotify('IndicClaimVerifier 1st Place Award: Organizer public announcement link pending publication.');
                      }}
                      className="inline-flex items-center gap-2 px-4 py-3 border border-white/20 bg-white/[0.02] text-white/80 hover:text-white text-xs font-mono rounded hover:border-white/40 transition-colors min-h-[44px]"
                      title="Organizer results link pending publication"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                      <span>AWARD PROOF: PENDING PUBLICATION</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Illustrative Prototype Console */}
            <div className="lg:col-span-5 rounded-xl border border-white/10 bg-[#020010] p-6 font-mono text-xs shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white/60 text-[11px] tracking-wider uppercase">
                    ILLUSTRATIVE PROTOTYPE DEMO
                  </span>
                </div>
                <span className="text-[#CCFF00] text-[10px] bg-[#CCFF00]/10 px-2 py-0.5 rounded border border-[#CCFF00]/20">
                  SAMPLE QUERY
                </span>
              </div>

              {/* Sample verification flow */}
              <div className="space-y-3.5 text-white/80 leading-relaxed">
                <div className="p-3 rounded bg-white/[0.03] border border-white/5">
                  <div className="text-white/50 text-[10px] uppercase mb-1">SAMPLE DISPUTED CLAIM</div>
                  <div className="text-white text-xs font-sans">
                    "Historical monument restoration approved under regional state preservation grant."
                  </div>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex items-center justify-between text-white/60">
                    <span>VECTOR COSINE SIMILARITY (FAISS)</span>
                    <span className="text-[#CCFF00] font-bold">High Alignment</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-[#CCFF00]" />
                  </div>
                </div>

                <div className="p-3 rounded bg-white/[0.02] border border-white/5 space-y-1 text-[11px]">
                  <div className="text-white/50 text-[10px] uppercase">MATCHED CITATION (LOCAL ARCHIVE)</div>
                  <div className="text-white/90 leading-relaxed font-sans">
                    Regional Public Preservation Gazette Archive #2026-B
                  </div>
                  <div className="text-[#CCFF00] text-[10px] font-bold pt-1">
                    VERDICT: SUPPORTED BY ARCHIVE CITATION
                  </div>
                </div>

                <div className="pt-2 text-white/50 text-[10px] flex items-center justify-between border-t border-white/5">
                  <span>INFERENCE: QUANTIZED QWEN (LOCAL)</span>
                  <span className="text-white/40">[Illustrative Output]</span>
                </div>
              </div>
            </div>

            {/* ── Case Study Section for Private Codebase ── */}
            <div className="lg:col-span-12 mt-8 pt-8 border-t border-white/[0.1]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-[#CCFF00]" />
                  <h4 className="text-white text-base sm:text-lg font-bold uppercase tracking-wider font-mono">
                    TECHNICAL CASE STUDY &amp; SYSTEM ARCHITECTURE
                  </h4>
                </div>
                <span className="text-white/50 text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 w-fit">
                  CONFIDENTIAL EVALUATION · PRIVATE REPOSITORY
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
                {/* 1. Role */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-[#CCFF00] font-mono font-bold tracking-wider uppercase text-[11px]">
                    <Layers size={13} />
                    <span>1. ROLE &amp; OWNERSHIP</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    <strong>Lead AI Architect &amp; Systems Engineer.</strong> Designed the end-to-end RAG architecture, formulated the Indic dialect tokenization strategy, configured dense vector search schemas, and orchestrated local open-weights LLM deployment.
                  </p>
                </div>

                {/* 2. Architecture */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-[#88aaff] font-mono font-bold tracking-wider uppercase text-[11px]">
                    <Cpu size={13} />
                    <span>2. PIPELINE ARCHITECTURE</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Multilingual text ingestion → dialect-aware morphological token chunking → dual-index dense vector retrieval (FAISS for fast cosine similarity, ChromaDB for document metadata) → cross-encoder reranking → local quantized Qwen 2.5 context synthesis.
                  </p>
                </div>

                {/* 3. Key Decisions */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-[#aaffcc] font-mono font-bold tracking-wider uppercase text-[11px]">
                    <ShieldCheck size={13} />
                    <span>3. KEY DECISIONS</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    <strong>Local-First &amp; Zero Cloud API Cost:</strong> Ran fully offline through Ollama so citizen query data never leaves the host device, eliminating commercial token fees. Custom chunking preserved agglutinative Indic root affixes without fragmenting semantic context.
                  </p>
                </div>

                {/* 4. Publicly Shareable */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-[#ffcc66] font-mono font-bold tracking-wider uppercase text-[11px]">
                    <CheckCircle2 size={13} />
                    <span>4. WHAT CAN BE SHARED</span>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    System component schematics, prompt orchestration templates, vector indexing parameters, and contextual precision evaluation rubrics. <em>(Core repository source code and competition benchmark corpora remain private.)</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ══════════════════════════════════════════════════════════════════════════
            PROJECT 2 & 3: GeoSeize (7-cols) + Trace Vision AI (5-cols)
            ══════════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Project 2: GeoSeize (Flutter GPS Game) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0a0a22] to-[#040212] p-8 md:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-[#88aaff]/15 text-[#88aaff] border border-[#88aaff]/30 uppercase tracking-wider">
                  FLUTTER · MULTIPLAYER GPS CONQUEST
                </span>
                <span className="text-white/50 text-xs font-mono">VERIFIED REPO · 2025</span>
              </div>

              <h3
                className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                GeoSeize <span className="text-[#88aaff]">Fitness Game</span>
              </h3>

              <p className="text-white/80 text-base leading-relaxed font-sans mb-6">
                A real-world territory conquest fitness game built with Flutter.
                Players physically run, walk, or cycle to enclose real geographic parcels with GPS coordinates,
                capturing map polygons for their squad while battling rivals across live Firebase-synced leaderboards.
              </p>

              {/* Direct Structured Breakdown */}
              <div className="space-y-3 mb-6 text-xs font-sans">
                <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-[#88aaff] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                    PROBLEM
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    Fitness tracking apps struggle with sustained user retention; GeoSeize transforms physical outdoor movement into an engaging multiplayer territory-capture game.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-[#88aaff] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                    WHAT I BUILT &amp; SPECIFIC CONTRIBUTION
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    Implemented ray-casting point-in-polygon algorithms in Dart, integrated Google Maps Flutter SDK with custom polygon styling, and wired Firebase Firestore transactional state synchronization.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-[#88aaff] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                    VERIFIABLE RESULT &amp; TEST SUITE
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    Open-source repository on GitHub with unit-tested geometry logic (Dart unit tests in <code className="text-white/90">test/</code> validating ray-casting point-in-polygon intersection across irregular coordinate bounds and squad ownership state sync).
                  </p>
                </div>
              </div>

              {/* Illustrative Radar Concept Box */}
              <div className="p-3.5 rounded-xl border border-white/10 bg-[#020014] mb-6 font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-[#88aaff]">
                  <span className="flex items-center gap-1.5">
                    <Radio size={13} className="animate-pulse" />
                    <span>ILLUSTRATIVE RADAR CONCEPT</span>
                  </span>
                  <span className="text-white/40 text-[10px]">[Sample GPS Math]</span>
                </div>
                <div className="text-white/70 text-[11px] leading-relaxed">
                  Ray-Casting Algorithm: Computes point-in-polygon intersection to verify geographic parcel boundary enclosure.
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Flutter', 'Dart', 'Google Maps API', 'Firebase Firestore', 'Geofencing', 'Dart Test'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded border border-white/10 text-white/70 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/roshanalexander22/GeoSeize"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#88aaff] hover:text-white transition-colors min-h-[44px]"
                aria-label="View GeoSeize repository on GitHub (github.com/roshanalexander22/GeoSeize)"
              >
                <GithubIcon />
                <span>EXPLORE REPOSITORY (github.com/roshanalexander22/GeoSeize) →</span>
              </a>
            </div>
          </motion.article>

          {/* Project 3: Trace Vision AI (Computer Vision & Hand Tracking) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0c081c] to-[#04020c] p-8 md:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-[#ff88aa]/15 text-[#ff88aa] border border-[#ff88aa]/30 uppercase tracking-wider">
                  COMPUTER VISION · GESTURE AI
                </span>
                <span className="text-white/50 text-xs font-mono">VERIFIED REPO · 2025</span>
              </div>

              <h3
                className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                Trace <span className="text-[#ff88aa]">Vision AI</span>
              </h3>

              <p className="text-white/80 text-base leading-relaxed font-sans mb-6">
                An interactive perceptual vision system using front-facing cameras to track real-time hand joint kinematics and drive touchless interactions directly in the browser.
              </p>

              {/* Direct Structured Breakdown */}
              <div className="space-y-3 mb-6 text-xs font-sans">
                <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-[#ff88aa] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                    PROBLEM
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    Touchless computer interfaces typically rely on expensive specialized sensors or stream raw camera video to cloud servers, introducing latency and privacy risks.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-[#ff88aa] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                    WHAT I BUILT &amp; SPECIFIC CONTRIBUTION
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    Engineered a client-side vision pipeline using MediaPipe and HTML5 Canvas to track 21 hand landmarks completely in the local browser with zero server roundtrips.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-[#ff88aa] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                    VERIFIABLE RESULT &amp; CLIENT PRIVACY
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    Open-source repository running in modern web browsers. MediaPipe model executes entirely on-device via WebAssembly/WebGL, processing camera frames locally without network transmission.
                  </p>
                </div>
              </div>

              {/* Landmark Estimation Visual Concept */}
              <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 space-y-1.5 font-mono text-xs">
                <div className="flex items-center gap-2 text-xs text-[#ff88aa] font-bold">
                  <Eye size={14} />
                  <span>21-POINT SKELETON ESTIMATION</span>
                </div>
                <p className="text-white/70 text-xs font-sans leading-relaxed">
                  Processes normalized 3D hand coordinates for knuckle, fingertip, and palm landmarks via client-side Web APIs.
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['TypeScript', 'Computer Vision', 'MediaPipe', 'Webcam API', 'HTML5 Canvas'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded border border-white/10 text-white/70 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/roshanalexander22/Trace"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#ff88aa] hover:text-white transition-colors min-h-[44px]"
                aria-label="View Trace repository on GitHub (github.com/roshanalexander22/Trace)"
              >
                <GithubIcon />
                <span>EXPLORE REPOSITORY (github.com/roshanalexander22/Trace) →</span>
              </a>
            </div>
          </motion.article>
        </div>

        {/* ══════════════════════════════════════════════════════════════════════════
            PROJECT 4: Automated Waste Classification (CNN Deep Learning)
            ══════════════════════════════════════════════════════════════════════════ */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0c0e1e] to-[#040212] p-8 md:p-10 mb-14 hover:border-white/20 transition-all duration-300 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full font-mono font-bold bg-[#ffcc66]/15 text-[#ffcc66] border border-[#ffcc66]/30 uppercase tracking-wider">
                  DEEP LEARNING · CONVOLUTIONAL NEURAL NET
                </span>
                <span className="text-white/50 text-xs font-mono">VERIFIED REPO · 2025</span>
              </div>

              <h3
                className="text-3xl md:text-4xl text-white font-bold uppercase tracking-wide leading-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                Automated Waste <span className="text-[#ffcc66]">Classification</span>
              </h3>

              <p className="text-white/80 text-base leading-relaxed font-sans mb-6">
                A convolutional neural network in PyTorch using transfer learning for automated multi-stream segregation of solid waste into recyclable plastics, biodegradable organics, glass, and hazardous e-waste.
              </p>

              {/* Direct Structured Breakdown */}
              <div className="space-y-3 mb-6 text-xs font-sans">
                <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-[#ffcc66] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                    PROBLEM
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    Manual municipal solid waste sorting is hazardous, labor-intensive, and prone to sorting errors that lead to recyclable contamination.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-[#ffcc66] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                    WHAT I BUILT &amp; SPECIFIC CONTRIBUTION
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    Preprocessed waste image datasets, applied image augmentations (rotations, horizontal flips, color jitter), fine-tuned a transfer learning CNN backbone, and trained with multi-class cross-entropy loss in PyTorch.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]">
                  <span className="text-[#ffcc66] font-mono text-[11px] font-bold uppercase tracking-wider block mb-0.5">
                    VERIFIABLE RESULT &amp; PIPELINE NOTEBOOKS
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    Open-source PyTorch training and evaluation notebooks hosted on GitHub documenting data pipeline, loss convergence, and validation curves across multi-stream waste categories.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'PyTorch', 'Computer Vision', 'Jupyter', 'NumPy', 'Transfer Learning'].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded border border-white/10 text-white/70 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/roshanalexander22/Automated-Waste-Classification"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#ffcc66] hover:text-white transition-colors min-h-[44px]"
                aria-label="View Automated Waste Classification repository on GitHub (github.com/roshanalexander22/Automated-Waste-Classification)"
              >
                <GithubIcon />
                <span>EXPLORE REPOSITORY (github.com/roshanalexander22/Automated-Waste-Classification) →</span>
              </a>
            </div>

            {/* Right Card: Training Architecture */}
            <div className="lg:col-span-5 p-6 rounded-xl border border-white/10 bg-[#020014] font-mono text-xs space-y-3">
              <div className="text-white/50 text-[10px] uppercase pb-2 border-b border-white/10 flex items-center justify-between">
                <span>TRAINING PIPELINE SPECIFICATION</span>
                <span className="text-[#ffcc66]">PYTORCH</span>
              </div>
              <div className="space-y-2 text-white/80">
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[10px]">BACKBONE:</span>
                  <span>Convolutional Feature Extractor with Transfer Learning</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[10px]">OPTIMIZER &amp; LOSS:</span>
                  <span>Adam Optimizer · Cross-Entropy Multi-Class Loss</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[10px]">DATA AUGMENTATION:</span>
                  <span>Random Horizontal Flip, Color Jitter, Affine Warping</span>
                </div>
                <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-white/40 block text-[10px]">TARGET STREAMS:</span>
                  <span>Plastics, Biodegradable Organics, Glass/Metals, E-Waste</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ══════════════════════════════════════════════════════════════════════════
            ADDITIONAL OPEN-SOURCE WORK (ProofMesh, Nothing X, μFIFA 2026)
            ══════════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ProofMesh */}
          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.015] hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  CRYPTOGRAPHIC SYSTEMS
                </span>
                <span className="text-white/40 text-xs font-mono">2026</span>
              </div>
              <h4
                className="text-2xl text-white font-bold uppercase mb-2"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                ProofMesh <span className="text-[#aaffcc]">Audit Ledger</span>
              </h4>
              <p className="text-white/70 text-xs md:text-sm font-sans leading-relaxed mb-4">
                Cryptographic audit log using Merkle tree hashing to produce tamper-evident, append-only records of digital events for independent verification.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-[11px] text-white/60">
                <span>Python</span> · <span>Merkle Trees</span> · <span>SHA-256</span>
              </div>
              <a
                href="https://github.com/roshanalexander22/ProofMesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#aaffcc] transition-colors"
                aria-label="View ProofMesh repository on GitHub"
              >
                <GithubIcon />
                <span>View ProofMesh on GitHub →</span>
              </a>
            </div>
          </div>

          {/* Nothing X */}
          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.015] hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  WEB INTERFACE &amp; AUDIO
                </span>
                <span className="text-white/40 text-xs font-mono">2025</span>
              </div>
              <h4
                className="text-2xl text-white font-bold uppercase mb-2"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                Nothing X <span className="text-white/50">Web OS</span>
              </h4>
              <p className="text-white/70 text-xs md:text-sm font-sans leading-relaxed mb-4">
                Web application recreating the dot-matrix design language and responsive audio feedback of Nothing wireless earphone controls.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-[11px] text-white/60">
                <span>TypeScript</span> · <span>Tailwind CSS</span> · <span>Web Audio API</span>
              </div>
              <a
                href="https://github.com/roshanalexander22/Nothing-x-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white transition-colors"
                aria-label="View Nothing X Web application on GitHub"
              >
                <GithubIcon />
                <span>View Nothing X on GitHub →</span>
              </a>
            </div>
          </div>

          {/* μFIFA 2026 */}
          <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.015] hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  CAMPUS PLATFORM
                </span>
                <span className="text-white/40 text-xs font-mono">2026</span>
              </div>
              <h4
                className="text-2xl text-white font-bold uppercase mb-2"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                μFIFA 2026 <span className="text-[#88aaff]">Platform</span>
              </h4>
              <p className="text-white/70 text-xs md:text-sm font-sans leading-relaxed mb-4">
                Gamified tournament platform for μLearn GECI featuring automated multi-domain scoring, team registration, and CI/CD workflows.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-[11px] text-white/60">
                <span>Python</span> · <span>GitHub Actions</span> · <span>CI/CD</span>
              </div>
              <a
                href="https://github.com/roshanalexander22/mufifa-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-[#88aaff] transition-colors"
                aria-label="View μFIFA 2026 repository on GitHub"
              >
                <GithubIcon />
                <span>View μFIFA on GitHub →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
