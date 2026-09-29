import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded border border-[#CCFF00]/40 shadow-2xl backdrop-blur-md cursor-pointer"
          style={{
            background: 'rgba(13, 13, 31, 0.95)',
            boxShadow: '0 0 30px rgba(204, 255, 0, 0.15)',
          }}
          onClick={onClose}
        >
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
          <span
            className="text-white text-xs font-medium tracking-wide"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            {message}
          </span>
          <span
            className="text-[#CCFF00] text-[10px] tracking-widest uppercase ml-2 px-1.5 py-0.5 rounded border border-[#CCFF00]/30"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            DISMISS
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
