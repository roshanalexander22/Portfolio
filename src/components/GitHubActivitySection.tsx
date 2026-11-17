import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { sound } from '../utils/audio';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function GitHubActivitySection() {
  const [terminalExecuted, setTerminalExecuted] = useState(false);

  const handleRunCode = () => {
    sound.playClick();
    setTerminalExecuted(true);
  };

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Stats & Profile Banner */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-xl border border-white/[0.08] bg-white/[0.02] relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <GithubIcon />
                  </div>
                  <div>
                    <h3
                      className="text-white text-xl font-bold uppercase tracking-wide leading-tight"
                      style={{ fontFamily: '"Anton", sans-serif' }}
                    >
                      GITHUB ECOSYSTEM
                    </h3>
                    <a
                      href="https://github.com/roshanalexander22"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CCFF00] text-xs font-mono hover:underline flex items-center gap-1"
                    >
                      <span>@roshanalexander22</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-2.5 py-1 rounded border border-white/10">
                  OPEN SOURCE
                </span>
              </div>

              <p className="text-white/75 text-base leading-relaxed font-sans mb-8" style={{ lineHeight: 1.8 }}>
                Building in the open with public code repositories covering Retrieval-Augmented Generation, cross-platform Flutter applications, local LLM inference engines, and computer vision utilities.
              </p>

              {/* GitHub Metric Counters */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg border border-white/5 bg-white/[0.015]">
                  <div
                    className="text-3xl font-bold text-[#CCFF00]"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    21+
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mt-1">
                    PUBLIC REPOSITORIES
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-white/5 bg-white/[0.015]">
                  <div
                    className="text-3xl font-bold text-[#88aaff]"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    6+
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mt-1">
                    CORE LANGUAGES
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-white/5 bg-white/[0.015]">
                  <div
                    className="text-3xl font-bold text-[#ff88aa]"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    100%
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mt-1">
                    OPEN SOURCE COMMITMENT
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/roshanalexander22?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="w-full py-3 bg-white/5 border border-white/15 hover:border-[#CCFF00]/50 hover:bg-[#CCFF00]/10 text-white text-xs font-mono uppercase tracking-widest rounded flex items-center justify-center gap-2 transition-all duration-300"
            >
              <GithubIcon />
              <span>EXPLORE ALL 21+ REPOSITORIES ↗</span>
            </a>
          </div>

          {/* Right Column: Interactive Code Sandbox */}
          <div className="lg:col-span-6 rounded-xl border border-white/[0.08] bg-[#030014] p-6 flex flex-col justify-between font-mono text-xs shadow-2xl">
            <div>
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-white/40 text-[11px] ml-2 font-mono">roshan_profile.py</span>
                </div>

                <button
                  onClick={handleRunCode}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-[10px] hover:bg-[#CCFF00]/20 transition-colors"
                >
                  <Play size={10} className="fill-current" />
                  <span>EXECUTE</span>
                </button>
              </div>

              {/* Code */}
              <div className="space-y-1 text-white/80 leading-relaxed text-[11px]">
                <div className="text-white/30"># Profile Definition from GitHub</div>
                <div><span className="text-[#CCFF00]">class</span> <span className="text-[#88aaff]">RoshanAlexander</span>:</div>
                <div className="pl-4"><span className="text-[#CCFF00]">def</span> <span className="text-[#ffcc66]">__init__</span>(self):</div>
                <div className="pl-8 text-white/60">self.name = <span className="text-[#aaffcc]">"Roshan Alexander"</span></div>
                <div className="pl-8 text-white/60">self.roles = [<span className="text-[#aaffcc]">"AI Engineer"</span>, <span className="text-[#aaffcc]">"Flutter Dev"</span>, <span className="text-[#aaffcc]">"CS Student"</span>]</div>
                <div className="pl-8 text-white/60">self.education = [<span className="text-[#aaffcc]">"GEC Idukki (B.Tech CSE)"</span>, <span className="text-[#aaffcc]">"IIT Guwahati (BS AI&amp;DS)"</span>]</div>
                <div className="pl-8 text-white/60">self.specialties = [<span className="text-[#aaffcc]">"RAG"</span>, <span className="text-[#aaffcc]">"Local LLMs"</span>, <span className="text-[#aaffcc]">"Agentic AI"</span>, <span className="text-[#aaffcc]">"Flutter"</span>]</div>
                <div className="pl-8 text-white/60">self.motto = <span className="text-[#aaffcc]">"The best way to predict the future is to build it."</span></div>
                <div className="pl-4 mt-2"><span className="text-[#CCFF00]">def</span> <span className="text-[#ffcc66]">say_hi</span>(self):</div>
                <div className="pl-8 text-white/60">print(<span className="text-[#aaffcc]">"Thanks for stopping by! Let's build something great 🚀"</span>)</div>
                <div className="mt-2 text-[#88aaff]">me = RoshanAlexander()</div>
                <div className="text-[#88aaff]">me.say_hi()</div>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <div className="text-[10px] text-white/30 mb-2 uppercase tracking-wider">
                CONSOLE OUTPUT:
              </div>
              {terminalExecuted ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded bg-white/[0.03] border border-[#CCFF00]/30 text-[#CCFF00] text-xs leading-relaxed"
                >
                  <div>[SYS_EXEC: 200 OK]</div>
                  <div>&gt; "Thanks for stopping by! Let's build something great 🚀"</div>
                  <div className="text-white/40 text-[10px] mt-1">Status: Ready to collaborate on AI, Flutter &amp; Engineering.</div>
                </motion.div>
              ) : (
                <div className="text-white/25 text-xs italic">
                  Click [EXECUTE] above or press ⌘K to inspect runtime logs...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
