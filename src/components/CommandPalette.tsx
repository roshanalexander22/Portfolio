import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import { sound } from '../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSection: (section: 'projects' | 'about' | 'skills' | 'contact') => void;
  onNotify: (msg: string) => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenSection, onNotify }: CommandPaletteProps) {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<Array<{ text: string; color?: string }>>([
    { text: 'SYSTEM: ROSHAN_OS v2.6 INITIALIZED', color: '#CCFF00' },
    { text: "Type 'help' to see available commands, or select a command below." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      sound.playClick();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newLogs = [...logs, { text: `> ${cmd}`, color: '#ffffff' }];

    switch (cleanCmd) {
      case 'help':
        newLogs.push(
          { text: 'AVAILABLE COMMANDS:', color: '#CCFF00' },
          { text: '  projects  - View technical projects & hackathon winners' },
          { text: '  about     - Education, IIT Guwahati & GEC Idukki details' },
          { text: '  skills    - Tech stack, AI/ML, Flutter, languages' },
          { text: '  contact   - Open direct contact form' },
          { text: '  phone     - Copy phone number (+91 9656271863)' },
          { text: '  instagram - Open Instagram profile (@roshhnnnnn_)' },
          { text: '  github    - Open GitHub repository' },
          { text: '  clear     - Clear terminal history' },
          { text: '  exit      - Close terminal' }
        );
        break;

      case 'projects':
        newLogs.push({ text: 'Opening Projects archive...', color: '#CCFF00' });
        onClose();
        onOpenSection('projects');
        break;

      case 'about':
        newLogs.push({ text: 'Opening About & Education...', color: '#CCFF00' });
        onClose();
        onOpenSection('about');
        break;

      case 'skills':
        newLogs.push({ text: 'Opening Skills & Certifications...', color: '#CCFF00' });
        onClose();
        onOpenSection('skills');
        break;

      case 'contact':
      case 'hire':
        newLogs.push({ text: "Opening Let's Work contact drawer...", color: '#CCFF00' });
        onClose();
        onOpenSection('contact');
        break;

      case 'phone':
        navigator.clipboard.writeText('+91 9656271863');
        newLogs.push({ text: 'Copied +91 9656271863 to clipboard!', color: '#CCFF00' });
        onNotify('Copied Phone: +91 9656271863');
        break;

      case 'instagram':
      case 'insta':
        newLogs.push({ text: 'Opening Instagram @roshhnnnnn_...', color: '#E1306C' });
        window.open('https://www.instagram.com/roshhnnnnn_/?hl=en', '_blank');
        break;

      case 'github':
        newLogs.push({ text: 'Opening GitHub profile...', color: '#CCFF00' });
        window.open('https://github.com/roshanalexander22', '_blank');
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newLogs.push({
          text: `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`,
          color: '#ff6666',
        });
        break;
    }

    sound.playClick();
    setLogs(newLogs);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Terminal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[92vw] max-w-xl rounded-lg border border-white/15 shadow-2xl overflow-hidden"
            style={{
              background: '#090914',
              boxShadow: '0 0 50px rgba(204, 255, 0, 0.1)',
            }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[#CCFF00]" />
                <span
                  className="text-white/70 text-xs font-mono tracking-widest uppercase"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  ROSHAN_TERMINAL // COMMAND_PALETTE
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={15} />
              </button>
            </div>

            {/* Terminal log output */}
            <div
              ref={scrollRef}
              className="p-4 h-64 overflow-y-auto font-mono text-xs space-y-1.5 text-white/70"
              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
            >
              {logs.map((log, i) => (
                <div key={i} style={{ color: log.color || 'inherit' }} className="leading-relaxed">
                  {log.text}
                </div>
              ))}
            </div>

            {/* Quick Chips */}
            <div className="px-4 py-2 border-t border-white/[0.06] bg-white/[0.01] flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[10px] text-white/30 uppercase font-mono">Quick:</span>
              {[
                { cmd: 'projects', label: 'Projects' },
                { cmd: 'about', label: 'About' },
                { cmd: 'skills', label: 'Skills' },
                { cmd: 'phone', label: 'Phone' },
                { cmd: 'instagram', label: 'Instagram' },
                { cmd: 'help', label: 'Help' },
              ].map((chip) => (
                <button
                  key={chip.cmd}
                  onClick={() => executeCommand(chip.cmd)}
                  className="px-2 py-0.5 rounded border border-white/10 text-white/50 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 text-[10px] font-mono whitespace-nowrap transition-colors"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Command input prompt */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 border-t border-white/10 bg-black/40">
              <span className="text-[#CCFF00] font-mono text-sm">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type command (e.g. 'help', 'projects', 'phone')..."
                className="flex-1 bg-transparent text-white text-xs font-mono outline-none placeholder:text-white/20"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              />
              <button
                type="submit"
                className="text-white/40 hover:text-[#CCFF00] transition-colors"
                aria-label="Execute command"
              >
                <CornerDownLeft size={14} />
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
