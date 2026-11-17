import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const EXPERIENCES = [
  {
    role: 'AI / ML Student Trainee',
    company: 'Bleep Education (IIT Bombay Outreach / Training Partner)',
    period: 'Active Training',
    location: 'Remote / Virtual',
    type: 'Training Program / Applied Coursework',
    accent: '#CCFF00',
    description:
      'Participating in an intensive industry-oriented machine learning training program. Building practical machine learning pipelines, feature engineering workflows, and neural network models using PyTorch and Scikit-Learn.',
    deliverables: [
      'Hands-on neural network modeling and hyperparameter tuning with PyTorch & Scikit-Learn',
      'Supervised classification, regression, and data preprocessing pipelines on real-world datasets',
      'Algorithmic analysis, evaluation metrics profiling, and peer code reviews',
    ],
  },
  {
    role: 'Technical Lead – μLearn GECI',
    company: 'μLearn Foundation (GEC Idukki Chapter)',
    period: '2024 – Present',
    location: 'GEC Idukki',
    type: 'Campus Developer Leadership',
    accent: '#88aaff',
    description:
      'Leading campus developer initiatives, organizing technical bootcamps, and building open-source platforms for the student engineering community.',
    deliverables: [
      'Architected μFIFA 2026 gamified tournament platform with multi-domain scoring (open-source on GitHub)',
      'Configured automated deployment workflows and validation checks with GitHub Actions',
      'Conducted peer workshops and study cohorts in Python, Flutter, and Git collaboration workflows',
    ],
    repoLink: 'https://github.com/roshanalexander22/mufifa-2026',
    repoLabel: 'View μFIFA 2026 Repo',
  },
  {
    role: 'NRPF Student Coordinator (National Resource Protection Force)',
    company: 'National Service Scheme (NSS), GEC Idukki',
    period: 'Active Role',
    location: 'GEC Idukki, Kerala',
    type: 'Community Service & Safety',
    accent: '#ff88aa',
    description:
      'Coordinating student volunteer teams for campus safety, disaster-preparedness drills, and community civic initiatives.',
    deliverables: [
      'Coordinating student volunteer rosters for localized emergency situations and preparedness drills',
      'Organizing first-aid awareness sessions, CPR demos, and campus safety workshops',
      'Supporting community blood donation drives and campus civic welfare projects',
    ],
  },
  {
    role: 'Technical & Hackathon Contributor',
    company: 'Stellario · IEEE Student Branch · GECI Societies',
    period: 'Active Member',
    location: 'GEC Idukki',
    type: 'Campus Society',
    accent: '#aaffcc',
    description:
      'Active participant across college technical symposia, coding hackathons, robotics workshops, and athletic tournaments.',
    deliverables: [
      'Participant in ViCodathon and competitive coding hackathons',
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
            <span>APPLIED TRAINING &amp; CAMPUS LEADERSHIP</span>
          </div>
          <h2
            className="text-4xl md:text-6xl text-white uppercase font-bold tracking-tight"
            style={{ fontFamily: '"Anton", sans-serif', lineHeight: 1.1 }}
          >
            EXPERIENCE &amp; <span className="text-[#CCFF00]">LEADERSHIP</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg mt-4 max-w-2xl font-sans leading-relaxed">
            Hands-on machine learning training, open-source platform development, and active student developer community leadership.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseEnter={() => sound.playHover()}
              className="group p-8 md:p-10 rounded-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              style={{ background: 'rgba(255, 255, 255, 0.02)' }}
            >
              {/* Left accent border bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-1.5 transition-all duration-300"
                style={{ background: exp.accent }}
              />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                    <span className="text-white/50 text-xs font-mono">
                      {exp.location}
                    </span>
                  </div>

                  <h3
                    className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight group-hover:text-[#CCFF00] transition-colors"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    {exp.role}
                  </h3>

                  <div className="text-[#88aaff] text-sm font-mono font-semibold mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/60 text-xs font-mono flex-shrink-0">
                  <Calendar size={13} className="text-[#CCFF00]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-white/80 text-base leading-relaxed font-sans mb-6 max-w-4xl" style={{ lineHeight: 1.8 }}>
                {exp.description}
              </p>

              {/* Key deliverables */}
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                  <div className="text-[10px] font-mono text-white/50 tracking-widest uppercase">
                    CONTRIBUTIONS &amp; DELIVERABLES:
                  </div>
                  {exp.repoLink && (
                    <a
                      href={exp.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#88aaff] hover:text-white transition-colors"
                      aria-label="View μFIFA 2026 repository on GitHub"
                    >
                      <GithubIcon />
                      <span>{exp.repoLabel} →</span>
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {exp.deliverables.map((del) => (
                    <div
                      key={del}
                      className="p-3.5 rounded border border-white/5 bg-white/[0.015] text-xs md:text-sm font-mono text-white/75 flex items-start gap-2.5 leading-relaxed"
                    >
                      <ArrowRight size={13} className="text-[#CCFF00] flex-shrink-0 mt-1" />
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
