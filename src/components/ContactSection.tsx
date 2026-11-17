import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, MessageSquare, Send, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

// Custom icons
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

interface ContactSectionProps {
  onNotify?: (msg: string) => void;
}

export default function ContactSection({ onNotify }: ContactSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', roleType: 'internship', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    sound.playClick();
    if (onNotify) onNotify(`Copied ${label}: ${text}`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setSubmitted(true);
    if (onNotify) onNotify('Transmission dispatched! Thank you for reaching out.');
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', roleType: 'internship', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 lg:px-20 border-t border-white/[0.08]">
      {/* Background ambient glow */}
      <div
        className="absolute bottom-0 left-1/3 w-[650px] h-[650px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(204,255,0,0.04) 0%, rgba(136,170,255,0.03) 40%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="pb-8 border-b border-white/[0.08] mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#CCFF00] tracking-[0.3em] uppercase">
            <MessageSquare size={14} className="text-[#CCFF00]" />
            <span>DIRECT TRANSMISSION &amp; OPPORTUNITIES</span>
          </div>
          <h2
            className="text-4xl md:text-6xl text-white uppercase font-bold tracking-tight"
            style={{ fontFamily: '"Anton", sans-serif', lineHeight: 1.1 }}
          >
            LET'S BUILD <span className="text-[#CCFF00]">TOGETHER</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg mt-4 max-w-2xl font-sans leading-relaxed">
            Actively open for AI/ML engineering internships, cross-platform software roles, high-impact collaborations, and open-source hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Channels & Fast Connect */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                      EMAIL ADDRESS
                    </div>
                    <div className="text-white text-xs font-mono font-medium">
                      roshanalexander72@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard('roshanalexander72@gmail.com', 'Email')}
                    className="p-2 border border-white/15 hover:border-[#CCFF00]/50 rounded text-white/60 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedKey === 'Email' ? <Check size={13} className="text-[#CCFF00]" /> : <Copy size={13} />}
                  </button>
                  <a
                    href="mailto:roshanalexander72@gmail.com"
                    className="p-2 border border-white/15 hover:border-[#CCFF00]/50 rounded text-white/60 hover:text-white transition-colors"
                    title="Open Email Client"
                  >
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                    <WhatsappIcon />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                      WHATSAPP MESSAGING
                    </div>
                    <div className="text-white text-xs font-mono font-medium">
                      +91 9656271863
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919656271863?text=Hi%20Roshan,%20I%20saw%20your%20portfolio!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-mono bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] rounded hover:bg-[#25D366]/30 transition-colors flex items-center gap-1"
                >
                  <span>CHAT</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                      TELEPHONE / CALL
                    </div>
                    <div className="text-white text-xs font-mono font-medium">
                      +91 9656271863
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyToClipboard('+919656271863', 'Phone Number')}
                    className="p-2 border border-white/15 hover:border-[#CCFF00]/50 rounded text-white/60 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedKey === 'Phone Number' ? <Check size={13} className="text-[#CCFF00]" /> : <Copy size={13} />}
                  </button>
                  <a
                    href="tel:+919656271863"
                    className="px-3 py-1.5 text-xs font-mono bg-[#CCFF00] text-black font-semibold rounded hover:brightness-110 transition-all"
                  >
                    CALL
                  </a>
                </div>
              </div>

              {/* LinkedIn & Instagram Row */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/in/roshan-alexander-thu2122005"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#0077b5]/50 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between text-[#0077b5] mb-2">
                    <LinkedinIcon />
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-[10px] font-mono text-white/40 uppercase">LINKEDIN</div>
                  <div className="text-white text-xs font-mono truncate font-medium">in/roshan-alexander</div>
                </a>

                <a
                  href="https://www.instagram.com/roshhnnnnn_/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#E1306C]/50 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between text-[#E1306C] mb-2">
                    <InstagramIcon />
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-[10px] font-mono text-white/40 uppercase">INSTAGRAM</div>
                  <div className="text-white text-xs font-mono truncate font-medium">@roshhnnnnn_</div>
                </a>
              </div>
            </div>

            {/* Geographical HUD Card */}
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.015] font-mono text-xs text-white/40 space-y-1">
              <div className="flex items-center gap-1.5 text-[#CCFF00] text-[10px] font-bold">
                <MapPin size={11} />
                <span>LOCATION &amp; TIMEZONE</span>
              </div>
              <div>Kerala, India</div>
              <div>Indian Standard Time · IST (UTC+05:30)</div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7 p-8 rounded-xl border border-white/[0.08] bg-white/[0.02] relative overflow-hidden flex flex-col justify-between">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/40 flex items-center justify-center text-[#CCFF00]">
                  <Sparkles size={28} />
                </div>
                <h3
                  className="text-2xl text-white font-bold uppercase tracking-wide"
                  style={{ fontFamily: '"Anton", sans-serif' }}
                >
                  TRANSMISSION DISPATCHED
                </h3>
                <p className="text-white/60 text-xs font-mono max-w-md mx-auto leading-relaxed">
                  Thank you for connecting! Your transmission has been queued and logged. I will review and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-mono rounded mt-4"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3
                    className="text-2xl text-white font-bold uppercase tracking-wide mb-1"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    SEND TRANSMISSION
                  </h3>
                  <p className="text-white/40 text-xs font-mono">
                    Drop a message directly to my console.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Hunter"
                      className="w-full bg-white/[0.02] border border-white/10 focus:border-[#CCFF00] rounded px-3.5 py-2.5 text-white text-xs font-sans outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-white/[0.02] border border-white/10 focus:border-[#CCFF00] rounded px-3.5 py-2.5 text-white text-xs font-sans outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-1.5">
                    OPPORTUNITY OR INQUIRY TYPE
                  </label>
                  <select
                    value={form.roleType}
                    onChange={(e) => setForm({ ...form, roleType: e.target.value })}
                    className="w-full bg-[#0a0a1e] border border-white/10 focus:border-[#CCFF00] rounded px-3.5 py-2.5 text-white text-xs font-mono outline-none transition-colors"
                  >
                    <option value="internship">AI / ML / Data Science Internship</option>
                    <option value="flutter">Flutter &amp; Cross-Platform Development</option>
                    <option value="hackathon">Hackathon Collaboration / Project</option>
                    <option value="fulltime">Full-time Software Engineering Role</option>
                    <option value="general">Open-Source / General Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-1.5">
                    MESSAGE / PROJECT DETAILS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe the role, codebase, or idea..."
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-[#CCFF00] rounded px-3.5 py-2.5 text-white text-xs font-sans outline-none transition-colors resize-none placeholder:text-white/20"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3.5 bg-[#CCFF00] text-black font-mono font-bold text-xs uppercase tracking-widest rounded flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                >
                  <Send size={13} />
                  <span>DISPATCH TRANSMISSION →</span>
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
