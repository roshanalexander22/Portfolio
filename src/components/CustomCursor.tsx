import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports fine mouse pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or parent is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, textarea, select, [role="button"], .skill-tag');
        setIsHovered(!!interactive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#CCFF00] pointer-events-none z-[9999]"
        style={{
          boxShadow: '0 0 10px #CCFF00',
        }}
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 400,
          mass: 0.1,
        }}
      />

      {/* Lagging outer glowing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998]"
        style={{
          borderColor: isHovered ? 'rgba(204, 255, 0, 0.9)' : 'rgba(204, 255, 0, 0.35)',
          background: isHovered ? 'rgba(204, 255, 0, 0.12)' : 'transparent',
          backdropFilter: isHovered ? 'blur(1px)' : 'none',
        }}
        animate={{
          x: pos.x - (isHovered ? 26 : 14),
          y: pos.y - (isHovered ? 26 : 14),
          width: isHovered ? 52 : 28,
          height: isHovered ? 52 : 28,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 220,
          mass: 0.2,
        }}
      />
    </>
  );
}
