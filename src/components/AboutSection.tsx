import { motion } from 'framer-motion';
import { GraduationCap, Terminal, Compass } from 'lucide-react';

const EDUCATION_TRACKS = [
  {
    institution: 'Government Engineering College (GEC), Idukki',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2024 – 2028',
    status: 'In Progress · CGPA 8.5+',
    accent: '#CCFF00',
    description: 'Core curriculum covering Data Structures, Algorithms, Computer Networks, Operating Systems, Database Systems, and Compiler Design. Active technical contributor across campus societies.',
    badges: ['CGPA 8.5+', 'Technical Lead μLearn', 'NRPF Lead NSS'],
  },
  {
    institution: 'Indian Institute of Technology (IIT), Guwahati',
    degree: 'B.Sc in Data Science & Artificial Intelligence',
    period: '2025 – 2029',
    status: 'In Progress · Distance / Online Track',
    accent: '#88aaff',
    description: 'Advanced mathematics, machine learning theory, deep neural networks, statistical inference, natural language processing, and high-performance computing.',
    badges: ['AI & DS Specialization', 'IIT Guwahati Curriculum'],
  },
  {
    institution: 'St. Gregorios Higher Secondary School, Pulamon',
    degree: 'Higher Secondary Education (Plus Two - Science & CS)',
    period: '2022 – 2024',
    status: 'Completed · 98.5% Distinction',
    accent: '#aaffcc',
    description: 'High-distinction academic performance with deep specialization in Computer Science, Mathematics, Physics, and Chemistry.',
    badges: ['98.5% Aggregate', 'Academic Excellence'],
  },
  {
    institution: "St. Mary's Higher Secondary School, Kizhakkekkara",
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2021 – 2022',
    status: 'Completed · 100% Perfect Score',
    accent: '#ff88aa',
    description: 'Graduated with 100% marks across all subjects, establishing foundational discipline and academic excellence.',
    badges: ['100% Perfect Score', 'Top Percentile'],
  },
];

const LEARNING_RADAR = [
  { skill: 'Advanced RAG & Retrieval Reranking', progress: 75, color: '#CCFF00' },
  { skill: 'Agentic AI & LangGraph Workflows', progress: 60, color: '#88aaff' },
  { skill: 'Model Context Protocol (MCP) Design', progress: 50, color: '#aaffcc' },
  { skill: 'System Design & Distributed Scalability', progress: 55, color: '#ff88aa' },
  { skill: 'Docker Containerization & Kubernetes', progress: 45, color: '#ffcc66' },
  { skill: 'Geospatial & GPS Computing in Flutter', progress: 90, color: '#d8b4fe' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-white/[0.08]">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left, rgba(204,255,0,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="pb-8 border-b border-white/[0.08] mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#CCFF00] tracking-[0.3em] uppercase">
            <Compass size={14} className="text-[#CCFF00]" />
            <span>BIOGRAPHY &amp; ACADEMIC FOUNDATIONS</span>
          </div>
          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-none font-bold tracking-tight"
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            ABOUT <span className="text-[#CCFF00]">ROSHAN</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg mt-4 max-w-3xl font-sans leading-relaxed">
            AI Engineer and Computer Science undergrad pursuing dual academic tracks at GEC Idukki and IIT Guwahati.
            Driven by a singular motto: <span className="text-white font-medium">build software that solves real human problems with cutting-edge intelligence and world-class craft.</span>
          </p>
        </div>

        {/* Top 2-Column Split: Philosophy + Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className="p-8 md:p-10 rounded-xl border border-white/[0.08] relative overflow-hidden"
              style={{ background: 'rgba(255, 255, 255, 0.02)' }}
            >
              <h3
                className="text-2xl text-white font-bold uppercase tracking-wide mb-6 flex items-center gap-2"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                <span>ENGINEERING PHILOSOPHY</span>
                <span className="text-[#CCFF00]">✦</span>
              </h3>

              <div className="space-y-5 text-white/80 text-base leading-relaxed font-sans" style={{ lineHeight: 1.85 }}>
                <p>
                  I bridge the frontier between <strong className="text-white font-semibold">Generative &amp; Agentic AI</strong> and <strong className="text-white font-semibold">high-performance cross-platform software</strong>.
                  Rather than viewing LLMs as black-box APIs, I believe in running models locally with Ollama and Qwen, optimizing vector embedding chunking, and implementing verifiable multi-agent loops that work deterministically.
                </p>
                <p>
                  Whether architecting an award-winning Indic claim verification pipeline or creating real-time GPS multiplayer games in Flutter, my engineering process blends rigorous computer science principles with relentless visual and sensory craftsmanship.
                </p>
              </div>

              {/* Code snippet quote */}
              <div className="mt-6 p-4 rounded-lg border border-white/10 bg-[#030014] font-mono text-xs text-white/70">
                <div className="flex items-center gap-2 text-white/30 text-[10px] pb-2 mb-2 border-b border-white/5">
                  <Terminal size={11} className="text-[#CCFF00]" />
                  <span>roshan_credo.py</span>
                </div>
                <div className="space-y-1">
                  <div><span className="text-[#CCFF00]">def</span> <span className="text-[#88aaff]">build_future</span>():</div>
                  <div className="pl-4 text-white/50">run_local_first = <span className="text-[#ff88aa]">True</span></div>
                  <div className="pl-4 text-white/50">optimize_for_impact = <span className="text-[#CCFF00]">"100%"</span></div>
                  <div className="pl-4 text-[#88aaff]">return <span className="text-white">"Continuous innovation without compromise."</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Learning Radar Card */}
          <div className="lg:col-span-5">
            <div
              className="p-8 rounded-xl border border-white/[0.08] h-full flex flex-col justify-between"
              style={{ background: 'rgba(255, 255, 255, 0.02)' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-xl text-white font-bold uppercase tracking-wide flex items-center gap-2"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    <span>CURRENT RESEARCH &amp; LEARNING</span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#CCFF00] px-2 py-0.5 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/20">
                    LIVE GAUGES
                  </span>
                </div>
                <p className="text-white/45 text-xs mb-6 font-sans">
                  Current skill acquisition and systems engineering explorations:
                </p>

                <div className="space-y-4">
                  {LEARNING_RADAR.map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between text-xs font-mono mb-1.5">
                        <span className="text-white/75">{item.skill}</span>
                        <span className="font-bold" style={{ color: item.color }}>{item.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ background: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>STATUS: HIGH FOCUS</span>
                <span className="text-[#CCFF00]">AVAILABLE FOR ROLES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dual University Academic Journey */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={16} className="text-[#CCFF00]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/50">
              ACADEMIC TRAJECTORY &amp; DUAL-DEGREE PATHWAY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_TRACKS.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative p-6 rounded-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                style={{ background: 'rgba(255, 255, 255, 0.02)' }}
              >
                {/* Glow accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at top right, ${edu.accent}20, transparent 70%)`,
                  }}
                />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className="text-[10px] px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase"
                    style={{
                      background: `${edu.accent}15`,
                      color: edu.accent,
                      border: `1px solid ${edu.accent}30`,
                    }}
                  >
                    {edu.status}
                  </span>
                  <span className="text-white/30 text-[11px] font-mono">
                    {edu.period}
                  </span>
                </div>

                <h4
                  className="text-white text-xl font-bold uppercase tracking-wide leading-tight mb-1 group-hover:text-[#CCFF00] transition-colors"
                  style={{ fontFamily: '"Anton", sans-serif' }}
                >
                  {edu.degree}
                </h4>

                <p className="text-[#88aaff] text-xs font-mono font-medium mb-3">
                  {edu.institution}
                </p>

                <p className="text-white/75 text-sm leading-relaxed font-sans mb-5" style={{ lineHeight: 1.8 }}>
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {edu.badges.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-white/50 font-mono"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
