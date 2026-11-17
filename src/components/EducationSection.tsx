import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages } from 'lucide-react';
import { sound } from '../utils/audio';

const DUAL_DEGREE_TRACK = [
  {
    institution: 'Government Engineering College, Idukki',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2024 – 2028',
    status: 'In Progress · CGPA 8.5+',
    accent: '#CCFF00',
    description:
      'Rigorous core foundations across Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Theory of Computation. Actively contributing as Technical Lead at μLearn GECI and NRPF Coordinator.',
    highlights: [
      'CGPA: 8.5+ Cumulative',
      'Technical Lead @ μLearn GECI',
      'NRPF Coordinator @ NSS GECI',
    ],
  },
  {
    institution: 'IIT Guwahati',
    degree: 'B.Sc. in Data Science and Artificial Intelligence',
    period: '2025 – 2029',
    status: 'In Progress',
    accent: '#88aaff',
    description:
      'Advanced theoretical and applied curriculum covering statistical learning, linear algebra for ML, deep neural network architectures, high-dimensional probability, and natural language processing directly from IIT Guwahati faculty.',
    highlights: [
      'Data Science & AI Specialization',
      'IIT Guwahati Curriculum',
      'Deep Learning & Statistical Foundations',
    ],
  },
];

const VERIFIED_CERTIFICATIONS = [
  {
    title: 'Microsoft Learn – AI Fundamentals',
    issuer: 'Microsoft',
    credentialId: 'Verified Achievement',
    accent: '#88aaff',
    description: 'Core concepts in artificial intelligence, machine learning workloads, computer vision, and responsible AI practices.',
  },
  {
    title: 'Introduction to Model Context Protocol (MCP)',
    issuer: 'Anthropic / MCP Ecosystem',
    credentialId: 'Verified Completion',
    accent: '#CCFF00',
    description: 'Architecture of client-host-server protocol for contextual tool execution, resource indexing, and agent orchestration.',
  },
  {
    title: 'Gemini Certification for Students (K12)',
    issuer: 'Google',
    credentialId: 'Google Certified',
    accent: '#aaffcc',
    description: 'Multimodal generative AI techniques, structured prompting, and generative model deployment paradigms.',
  },
  {
    title: 'Python & Data Science Foundations',
    issuer: 'Industry Verified',
    credentialId: 'Technical Competency',
    accent: '#ffcc66',
    description: 'Vectorized computing with NumPy, Pandas data pipelines, Scikit-Learn modeling, and statistical exploratory analysis.',
  },
  {
    title: 'Git & GitHub Enterprise Automation',
    issuer: 'GitHub / μLearn',
    credentialId: 'DevOps & CI/CD',
    accent: '#d8b4fe',
    description: 'Automated CI/CD pipelines, branch management, pull request review workflows, and GitHub Actions orchestration.',
  },
];

const LANGUAGES = [
  { language: 'English', proficiency: 'Professional Working Proficiency', flag: 'EN' },
  { language: 'Malayalam', proficiency: 'Native / Bilingual', flag: 'ML' },
  { language: 'Hindi', proficiency: 'Working Proficiency', flag: 'HI' },
  { language: 'Tamil', proficiency: 'Conversational / Working', flag: 'TA' },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-white/[0.08]"
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-1/3 left-0 w-[550px] h-[550px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left, rgba(136,170,255,0.035) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="pb-8 border-b border-white/[0.08] mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#CCFF00] tracking-[0.3em] uppercase">
            <GraduationCap size={14} className="text-[#CCFF00]" />
            <span>ACADEMIC FOUNDATION &amp; VERIFIED CREDENTIALS</span>
          </div>
          <h2
            className="text-4xl md:text-6xl text-white uppercase font-bold tracking-tight"
            style={{ fontFamily: '"Anton", sans-serif', lineHeight: 1.1 }}
          >
            EDUCATION &amp; <span className="text-[#CCFF00]">CREDENTIALS</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg mt-4 max-w-2xl font-sans leading-relaxed">
            Consistently pursuing a dual academic track bridging computer systems engineering with rigorous data science and machine learning.
          </p>
        </div>

        {/* Dual Academic Track Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {DUAL_DEGREE_TRACK.map((deg, index) => (
            <motion.div
              key={deg.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => sound.playHover()}
              className="p-8 md:p-10 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0c0d24] to-[#040212] relative flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              {/* Top Accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${deg.accent}, transparent)`,
                }}
              />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      background: `${deg.accent}15`,
                      color: deg.accent,
                      border: `1px solid ${deg.accent}35`,
                    }}
                  >
                    {deg.status}
                  </span>
                  <span className="text-white/40 text-xs font-mono">{deg.period}</span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl text-white font-bold uppercase tracking-wide leading-tight mb-2"
                  style={{ fontFamily: '"Anton", sans-serif' }}
                >
                  {deg.degree}
                </h3>

                <div className="text-base text-white/90 font-medium mb-4 font-sans flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: deg.accent }} />
                  <span>{deg.institution}</span>
                </div>

                <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans mb-6">
                  {deg.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08]">
                  {deg.highlights.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md border border-white/10 text-white/75 bg-white/[0.02] font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lower Row: Industry Certifications + Languages Spoken */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Verified Certifications */}
          <div className="lg:col-span-8 p-8 md:p-10 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0c0e1e] to-[#040212]">
            <div className="flex items-center gap-2 mb-6">
              <Award size={18} className="text-[#CCFF00]" />
              <h3
                className="text-xl sm:text-2xl text-white uppercase font-bold tracking-wide"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                VERIFIED INDUSTRY CERTIFICATIONS
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {VERIFIED_CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all flex flex-col justify-between space-y-2"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-1">
                      <span>{cert.issuer}</span>
                      <span className="text-[#CCFF00] font-medium">{cert.credentialId}</span>
                    </div>
                    <div className="text-white text-sm font-semibold leading-snug">
                      {cert.title}
                    </div>
                  </div>
                  <p className="text-white/60 text-xs font-sans leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Languages & Communication */}
          <div className="lg:col-span-4 p-8 md:p-10 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#0c0c1c] to-[#040212] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Languages size={18} className="text-[#88aaff]" />
                <h3
                  className="text-xl sm:text-2xl text-white uppercase font-bold tracking-wide"
                  style={{ fontFamily: '"Anton", sans-serif' }}
                >
                  LANGUAGES
                </h3>
              </div>

              <div className="space-y-3.5">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-white/80">
                        {lang.flag}
                      </div>
                      <div>
                        <div className="text-white text-xs font-bold font-mono">
                          {lang.language}
                        </div>
                        <div className="text-white/50 text-[11px] font-sans">
                          {lang.proficiency}
                        </div>
                      </div>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <div className="text-white/50 text-xs font-mono leading-relaxed">
                Comfortable communicating with distributed, multilingual engineering teams worldwide.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
