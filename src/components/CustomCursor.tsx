import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function supportsCustomCursor() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!supportsCustomCursor()) {
      return;
    }

    setEnabled(true);

    const onMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, [role="button"], input, textarea, select, label');
      setIsInteractive(Boolean(interactive));
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[120] rounded-full"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          width: isInteractive ? 44 : 32,
          height: isInteractive ? 44 : 32,
          opacity: isPressed ? 0.65 : 0.95,
          borderColor: isInteractive ? 'rgba(255, 196, 120, 0.92)' : 'rgba(255, 158, 66, 0.7)',
        }}
        transition={{ type: 'spring', stiffness: 360, damping: 28, mass: 0.4 }}
        style={{
          borderWidth: 1.5,
          borderStyle: 'solid',
          boxShadow: '0 0 26px rgba(255, 140, 40, 0.35), inset 0 0 18px rgba(255, 170, 72, 0.14)',
          background: 'radial-gradient(circle, rgba(255,170,72,0.18) 0%, rgba(255,170,72,0.04) 55%, rgba(255,170,72,0) 100%)',
          backdropFilter: 'blur(1px)',
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[121] h-2.5 w-2.5 rounded-full"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isPressed ? 0.72 : 1,
          opacity: isPressed ? 0.85 : 1,
        }}
        transition={{ type: 'spring', stiffness: 560, damping: 34, mass: 0.2 }}
        style={{
          background: '#ff9a3c',
          boxShadow: '0 0 16px rgba(255, 142, 43, 0.9)',
        }}
      />
    </>
  );
}
