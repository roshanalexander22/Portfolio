import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

const EXPERIENCES = [
  {
    role: 'Student Intern – AI / ML',
    company: 'Bleep Education × IIT Bombay',
    period: 'Ongoing',
    location: 'Remote / Virtual',
    type: 'Internship',
    accent: '#CCFF00',
    description: 'Undergoing advanced, industry-oriented training in Artificial Intelligence and Machine Learning in collaboration with IIT Bombay. Implementing deep learning architectures, feature engineering pipelines, and real-world ML deployment strategies.',
    deliverables: [
      'Neural network modeling and hyperparameter tuning with PyTorch & Scikit-Learn',
      'Real-world classification and predictive data science pipelines',
      'Industry-grade code reviews and algorithmic performance profiling',
    ],
  },
  {
    role: 'Technical Lead – μLearn GECI',
    company: 'μLearn Foundation',
    period: '2024 – Present',
    location: 'GEC Idukki',
    type: 'Leadership',
    accent: '#88aaff',
    description: 'Leading student engineering teams and the campus developer ecosystem. Architecting platforms, organizing technical bootcamps, and enforcing continuous integration workflows.',
    deliverables: [
      'Architected μFIFA World Cup 2026 gamified tournament engine with multi-domain leaderboards',
      'Engineered automated GitHub Actions CI/CD workflows for the official μLearn GECI web platform',
      'Mentored 100+ students in Python, Flutter, Git workflows, and open-source contributions',
    ],
  },
  {
    role: 'NRPF Lead (National Resource Protection Force)',
    company: 'National Service Scheme (NSS), GEC Idukki',
    period: 'June 2026 – Present',
    location: 'Kerala, India',
    type: 'Community Leadership',
    accent: '#ff88aa',
    description: 'Directing disaster-preparedness drills, emergency-response coordination, and civic relief networks at the campus and regional level.',
    deliverables: [
      'Coordinating rapid-response student volunteers for localized emergency situations',
      'Organizing CPR, first-aid, and disaster mitigation training workshops',
      'Leading community welfare drives, blood donation rosters, and environmental initiatives',
    ],
  },
  {
    role: 'Active Technical & Sports Member',
    company: 'Stellario · IEEE Student Branch · GECI Sports Club',
    period: 'Ongoing',
    location: 'GEC Idukki',
    type: 'Campus Society',
    accent: '#aaffcc',
    description: 'Actively contributing to technical symposia, robotics showcases, coding marathons, and inter-collegiate athletic tournaments.',
    deliverables: [
      'Participant in ViCodathon, Mument, and open coding hackathons',
      'Technical workshop co-facilitator and astronomy enthusiast in Stellario Club',
      'Active representative in college sports tournaments and team events',
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="pb-8 border-b border-white/[0.08] mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#CCFF00] tracking-[0.3em] uppercase">
            <Briefcase size={14} className="text-[#CCFF00]" />
            <span>INDUSTRY INTERNSHIP &amp; CAMPUS LEADERSHIP</span>
          </div>
          <h2
            className="text-4xl md:text-6xl text-white uppercase leading-none font-bold tracking-tight"
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            EXPERIENCE &amp; <span className="text-[#CCFF00]">ROLES</span>
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
            Combining real-world AI internship experience with high-impact community leadership, developer mentorship, and emergency response.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseEnter={() => sound.playHover()}
              className="group p-6 md:p-8 rounded-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              style={{ background: 'rgba(255, 255, 255, 0.02)' }}
            >
              {/* Left accent border bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-1.5 transition-all duration-300"
                style={{ background: exp.accent }}
              />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className="text-[10px] px-2.5 py-0.5 rounded font-mono font-bold tracking-wider uppercase"
                      style={{
                        background: `${exp.accent}15`,
                        color: exp.accent,
                        border: `1px solid ${exp.accent}40`,
                      }}
                    >
                      {exp.type}
                    </span>
                    <span className="text-white/30 text-xs font-mono">
                      {exp.location}
                    </span>
                  </div>

                  <h3
                    className="text-white text-2xl font-bold uppercase tracking-wide leading-tight group-hover:text-[#CCFF00] transition-colors"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    {exp.role}
                  </h3>

                  <div className="text-[#88aaff] text-xs font-mono font-semibold mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/40 text-xs font-mono flex-shrink-0">
                  <Calendar size={13} className="text-[#CCFF00]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed font-sans mb-5 max-w-4xl">
                {exp.description}
              </p>

              {/* Key deliverables */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono text-white/40 tracking-widest uppercase mb-2">
                  KEY ACHIEVEMENTS &amp; DELIVERABLES:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {exp.deliverables.map((del) => (
                    <div
                      key={del}
                      className="p-3 rounded border border-white/5 bg-white/[0.015] text-xs font-mono text-white/60 flex items-start gap-2"
                    >
                      <ArrowRight size={12} className="text-[#CCFF00] flex-shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
