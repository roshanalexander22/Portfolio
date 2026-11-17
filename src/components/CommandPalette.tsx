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
    { text: 'SYSTEM: ROSHAN_OS v3.0 INITIALIZED', color: '#CCFF00' },
    { text: "Type 'help' to see commands, or scroll to any section instantly." },
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

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newLogs = [...logs, { text: `> ${cmd}`, color: '#ffffff' }];

    switch (cleanCmd) {
      case 'help':
        newLogs.push(
          { text: 'AVAILABLE COMMANDS:', color: '#CCFF00' },
          { text: '  projects     - Scroll to 12+ projects showcase' },
          { text: '  skills       - Scroll to Neuron Skills network canvas' },
          { text: '  about        - View dual-degree education & biography' },
          { text: '  achievements - View hackathon wins, honors & scores' },
          { text: '  experience   - View internship & leadership roles' },
          { text: '  contact      - Dispatch transmission / direct channels' },
          { text: '  phone        - Copy mobile (+91 9656271863)' },
          { text: '  email        - Copy email (roshanalexander72@gmail.com)' },
          { text: '  github       - Open GitHub profile' },
          { text: '  drawer       - Toggle cyber slide drawer' },
          { text: '  clear        - Clear console history' },
          { text: '  exit         - Close console' }
        );
        break;

      case 'projects':
        newLogs.push({ text: 'Navigating to Projects showcase...', color: '#CCFF00' });
        scrollToSection('projects');
        break;

      case 'skills':
      case 'neuron':
        newLogs.push({ text: 'Navigating to Neuron Skills Network...', color: '#CCFF00' });
        scrollToSection('skills');
        break;

      case 'education':
      case 'about':
      case 'achievements':
      case 'awards':
        newLogs.push({ text: 'Navigating to Education & Credentials...', color: '#CCFF00' });
        scrollToSection('education');
        break;

      case 'experience':
        newLogs.push({ text: 'Navigating to Experience Timeline...', color: '#CCFF00' });
        scrollToSection('experience');
        break;

      case 'contact':
      case 'hire':
        newLogs.push({ text: 'Navigating to Direct Transmission Station...', color: '#CCFF00' });
        scrollToSection('contact');
        break;

      case 'drawer':
        onClose();
        onOpenSection('projects');
        break;

      case 'phone':
        navigator.clipboard.writeText('+919656271863');
        newLogs.push({ text: 'Copied +91 9656271863 to clipboard!', color: '#CCFF00' });
        onNotify('Copied Phone: +91 9656271863');
        break;

      case 'email':
        navigator.clipboard.writeText('roshanalexander72@gmail.com');
        newLogs.push({ text: 'Copied roshanalexander72@gmail.com to clipboard!', color: '#CCFF00' });
        onNotify('Copied Email: roshanalexander72@gmail.com');
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
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
          />

          {/* Terminal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[92vw] max-w-xl rounded-xl border border-white/15 shadow-2xl overflow-hidden"
            style={{
              background: '#090914',
              boxShadow: '0 0 50px rgba(204, 255, 0, 0.12)',
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
                { cmd: 'skills', label: 'Neuron Skills' },
                { cmd: 'about', label: 'About' },
                { cmd: 'achievements', label: 'Honors' },
                { cmd: 'experience', label: 'Experience' },
                { cmd: 'contact', label: 'Contact' },
                { cmd: 'help', label: 'Help' },
              ].map((chip) => (
                <button
                  key={chip.cmd}
                  onClick={() => executeCommand(chip.cmd)}
                  className="px-2.5 py-0.5 rounded border border-white/10 text-white/50 hover:text-[#CCFF00] hover:border-[#CCFF00]/40 text-[10px] font-mono whitespace-nowrap transition-colors"
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
                placeholder="type command (e.g. 'projects', 'skills', 'about', 'contact')..."
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
