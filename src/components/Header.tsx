import { motion } from 'framer-motion';

interface HeaderProps {
  onOpenDrawer: () => void;
}

export default function Header({ onOpenDrawer }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-16 lg:px-20 py-5"
      style={{
        background: 'linear-gradient(to bottom, rgba(3,0,20,0.97) 0%, rgba(3,0,20,0) 100%)',
      }}
    >
      {/* Logo group */}
      <div className="group flex items-center gap-3 cursor-pointer select-none">
        <span
          className="text-white text-lg md:text-xl tracking-[0.2em] uppercase"
          style={{ fontFamily: '"Anton", "Impact", "Arial Black", sans-serif' }}
        >
          ROSHAN
        </span>
        <div
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00] transition-transform duration-500 group-hover:rotate-180 flex-shrink-0"
        >
          <span className="text-black text-sm font-bold leading-none">✦</span>
        </div>
      </div>

      {/* Center nav */}
      <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {['ARCHIVE', 'PROCESS', 'LABS'].map((link) => (
          <button
            key={link}
            onClick={onOpenDrawer}
            className="nav-link text-white/40 hover:text-white/80 text-[11px] tracking-[0.25em] uppercase transition-colors duration-300"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            {link}
          </button>
        ))}
      </nav>

      {/* Right CTA */}
      <motion.button
        onClick={onOpenDrawer}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="group relative overflow-hidden flex items-center gap-2 px-5 py-2.5 border border-[#CCFF00]/60 text-[#CCFF00] text-[11px] tracking-[0.2em] uppercase"
        style={{ fontFamily: '"IBM Plex Mono", monospace' }}
      >
        {/* Fill on hover */}
        <span
          className="absolute inset-0 bg-[#CCFF00] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
        />
        <span className="relative z-10 group-hover:text-black transition-colors duration-300">
          COMMISSION
        </span>
        <span className="relative z-10 group-hover:text-black transition-colors duration-300 text-base leading-none">
          ↗
        </span>
      </motion.button>
    </motion.header>
  );
}
