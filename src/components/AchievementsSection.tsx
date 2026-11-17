import { motion } from 'framer-motion';
import { Trophy, Award, Shield } from 'lucide-react';
import { sound } from '../utils/audio';

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Hackathon Winner 2026',
    subtitle: 'IndicClaimVerifier Hackathon',
    year: '2026',
    category: 'AI & INNOVATION',
    accent: '#CCFF00',
    description: 'Secured 1st Place for architecting a local RAG claim verification framework tailored for Indic languages and regional dialect analysis using Ollama and Qwen open models.',
    metrics: '1st Place · Zero-Cloud Latency RAG',
  },
  {
    icon: '🎓',
    title: '100% Perfect Score – SSLC',
    subtitle: "St. Mary's HSS, Kizhakkekkara",
    year: '2022',
    category: 'ACADEMIC EXCELLENCE',
    accent: '#ff88aa',
    description: 'Achieved a perfect 100% aggregate score across all academic subjects in the Secondary School Leaving Certificate (SSLC) examinations.',
    metrics: '100% Aggregate · Top Tier Rank',
  },
  {
    icon: '⭐',
    title: '98.5% in Higher Secondary',
    subtitle: 'St. Gregorios HSS, Pulamon',
    year: '2024',
    category: 'STATE DISTINCTION',
    accent: '#88aaff',
    description: 'Graduated Higher Secondary (Plus Two) with 98.5% marks in Science and Computer Science, establishing strong analytical and algorithmic rigor.',
    metrics: '98.5% Distinction · Science Stream',
  },
  {
    icon: '🚀',
    title: 'CGPA 8.5+ at GEC Idukki',
    subtitle: 'Government Engineering College, Idukki',
    year: '2024 – Present',
    category: 'UNIVERSITY TRACK',
    accent: '#aaffcc',
    description: 'Maintaining a 8.5+ Cumulative Grade Point Average in B.Tech Computer Science & Engineering with an unblemished academic and project record.',
    metrics: 'CGPA 8.5+ · B.Tech CSE',
  },
  {
    icon: '🛡️',
    title: 'NRPF Lead – NSS GEC Idukki',
    subtitle: 'National Service Scheme',
    year: '2026 – Present',
    category: 'LEADERSHIP & SERVICE',
    accent: '#ffcc66',
    description: 'Directing campus-wide disaster-preparedness and rapid emergency response teams, coordinating community relief logistics and safety protocols.',
    metrics: 'Campus Coordinator · Disaster Relief',
  },
  {
    icon: '⚡',
    title: 'Technical Lead – μLearn GECI',
    subtitle: 'μLearn Foundation',
    year: '2024 – Present',
    category: 'COMMUNITY & DEV LEAD',
    accent: '#d8b4fe',
    description: 'Spearheaded technical events, built platforms like μFIFA 2026, automated team CI/CD pipelines with GitHub Actions, and mentored student engineers.',
    metrics: 'Lead Architect · μFIFA 2026 Platform',
  },
];

const CERTIFICATIONS = [
  { name: 'Microsoft Learn – AI Fundamentals', issuer: 'Microsoft', icon: '✦', color: '#88aaff' },
  { name: 'Introduction to Model Context Protocol (MCP)', issuer: 'Anthropic / MCP Org', icon: '✦', color: '#CCFF00' },
  { name: 'Gemini Certification for Students (K12)', issuer: 'Google', icon: '✦', color: '#aaffcc' },
  { name: 'Basics of Artificial Intelligence', issuer: 'Industry Verified', icon: '✦', color: '#ffcc66' },
  { name: 'Basics of Python & Data Science', issuer: 'Open Certification', icon: '✦', color: '#ff88aa' },
  { name: 'Git & Advanced GitHub Automation', issuer: 'GitHub', icon: '✦', color: '#d8b4fe' },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-white/[0.08]">
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(204,255,0,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="pb-8 border-b border-white/[0.08] mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#CCFF00] tracking-[0.3em] uppercase">
            <Trophy size={14} className="text-[#CCFF00]" />
            <span>HONORS, AWARDS &amp; ACCREDITATIONS</span>
          </div>
          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-none font-bold tracking-tight"
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            ACHIEVEMENTS &amp; <span className="text-[#CCFF00]">HONORS</span>
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
            Proven track record of excellence in national hackathons, academic merit, university leadership, and industry certifications.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              onMouseEnter={() => sound.playHover()}
              className="group relative p-6 rounded-xl border border-white/[0.08] hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle at top right, ${item.accent}20, transparent 70%)`,
                }}
              />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="text-[10px] px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase"
                    style={{
                      background: `${item.accent}15`,
                      color: item.accent,
                      border: `1px solid ${item.accent}40`,
                    }}
                  >
                    {item.category}
                  </span>
                  <span className="text-white/30 text-[11px] font-mono">
                    {item.year}
                  </span>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3
                      className="text-white text-xl font-bold uppercase leading-tight group-hover:text-[#CCFF00] transition-colors"
                      style={{ fontFamily: '"Anton", sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-xs font-mono mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-white/60 text-xs leading-relaxed font-sans mt-3 mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span
                  className="text-[10px] font-mono font-semibold"
                  style={{ color: item.accent }}
                >
                  {item.metrics}
                </span>
                <span className="text-white/20 text-xs">✦</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Spoken Languages Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications List */}
          <div className="lg:col-span-8 p-7 rounded-xl border border-white/[0.08] bg-white/[0.015]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-[#CCFF00]" />
                <h3
                  className="text-white text-xl font-bold uppercase tracking-wide"
                  style={{ fontFamily: '"Anton", sans-serif' }}
                >
                  INDUSTRY CERTIFICATIONS
                </h3>
              </div>
              <span className="text-[10px] font-mono text-white/40">
                VERIFIED CREDENTIALS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="p-3 rounded-lg border border-white/5 bg-white/[0.015] flex items-start gap-2.5 hover:border-white/15 transition-colors"
                >
                  <span
                    className="text-sm mt-0.5 flex-shrink-0"
                    style={{ color: cert.color }}
                  >
                    {cert.icon}
                  </span>
                  <div>
                    <div className="text-white/80 text-xs font-mono font-medium leading-snug">
                      {cert.name}
                    </div>
                    <div className="text-white/35 text-[10px] font-mono mt-0.5">
                      Issuer: {cert.issuer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Quick Facts */}
          <div className="lg:col-span-4 p-7 rounded-xl border border-white/[0.08] bg-white/[0.015] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/[0.06]">
                <Shield size={16} className="text-[#CCFF00]" />
                <h3
                  className="text-white text-xl font-bold uppercase tracking-wide"
                  style={{ fontFamily: '"Anton", sans-serif' }}
                >
                  SPOKEN LANGUAGES
                </h3>
              </div>

              <div className="space-y-2.5 mb-6">
                {[
                  { lang: 'English', prof: 'Professional / Fluent' },
                  { lang: 'Malayalam', prof: 'Native / Mother Tongue' },
                  { lang: 'Hindi', prof: 'Conversational' },
                  { lang: 'Tamil', prof: 'Working Proficiency' },
                ].map((item) => (
                  <div
                    key={item.lang}
                    className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 text-xs font-mono"
                  >
                    <span className="text-white/80">{item.lang}</span>
                    <span className="text-white/40 text-[10px]">{item.prof}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded border border-[#CCFF00]/20 bg-[#CCFF00]/5 text-center">
              <div className="text-[10px] font-mono text-[#CCFF00] tracking-widest uppercase font-semibold">
                CAMPUS AFFILIATIONS
              </div>
              <div className="text-white/70 text-xs font-mono mt-1">
                IEEE Member · Stellario Club · Sports Association
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
