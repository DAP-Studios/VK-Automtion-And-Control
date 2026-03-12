import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import bgImage from '../assets/bg.png';

const METRICS = [
  { value: '99.7%', label: 'System Uptime' },
  { value: '24/7', label: 'Support' },
  { value: '500+', label: 'Systems Deployed' },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

function Particles({ viewportHeight }: { viewportHeight: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 2,
        left: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-orange-400"
          style={{
            left: `${p.left}%`,
            top: '-10px',
            opacity: p.opacity,
          }}
          animate={{
            y: viewportHeight + 20,
            opacity: [p.opacity, p.opacity * 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

function GlowingRibbon({ viewportHeight }: { viewportHeight: number }) {
  const ribbons = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        delay: i * 0.8,
        randomY: Math.random() * 40 - 20,
      })),
    []
  );

  const mid = viewportHeight / 2;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {ribbons.map((r) => (
          <motion.path
            key={r.id}
            d={`M 0 ${mid + r.randomY} Q 25% ${mid + 30}, 50% ${mid - 20} T 100% ${mid + r.randomY}`}
            stroke="url(#orangeGradient)"
            strokeWidth="8"
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
            animate={{
              d: [
                `M 0 ${mid + r.randomY} Q 25% ${mid + 50}, 50% ${mid - 20} T 100% ${mid + r.randomY}`,
                `M 0 ${mid + r.randomY + 30} Q 25% ${mid - 30}, 50% ${mid + 20} T 100% ${mid + r.randomY - 30}`,
                `M 0 ${mid + r.randomY - 20} Q 25% ${mid + 40}, 50% ${mid - 30} T 100% ${mid + r.randomY + 20}`,
                `M 0 ${mid + r.randomY} Q 25% ${mid + 50}, 50% ${mid - 20} T 100% ${mid + r.randomY}`,
              ],
            }}
            transition={{
              duration: 6,
              delay: r.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      <svg className="h-0 w-0">
        <defs>
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(249, 115, 22, 0)" />
            <stop offset="50%" stopColor="rgba(249, 115, 22, 1)" />
            <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [viewportHeight, setViewportHeight] = useState(900);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight || 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <Particles viewportHeight={viewportHeight} />
      <GlowingRibbon viewportHeight={viewportHeight} />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-48 top-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'rgba(230, 126, 34, 0.12)', animation: 'float 6s ease-in-out infinite' }}
        />
        <div
          className="absolute -right-48 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'rgba(20, 28, 44, 0.06)', animation: 'float 8s ease-in-out infinite 1s' }}
        />
      </div>

      <div className="absolute left-0 right-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />

      <div className="container-wide relative z-10 py-32">
        <div className="max-w-4xl">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Engineering <span className="text-orange-400">Precision</span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="mb-8 text-2xl font-light leading-relaxed text-gray-100 md:text-3xl"
          >
            Into Every System
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-200"
          >
            Industrial automation solutions for manufacturing and process plants, from PLC and SCADA design to commissioning and lifecycle support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="mb-12 grid grid-cols-2 gap-8 border-t border-white/20 py-8 md:grid-cols-3"
          >
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: EASE }}
              >
                <div className="mb-2 text-3xl font-bold text-white md:text-4xl">{m.value}</div>
                <div className="text-sm uppercase tracking-wide text-gray-300">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.6, ease: EASE }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-lg bg-orange-500 px-8 py-4 font-medium text-white shadow-sm transition-all duration-300 hover:bg-orange-400 hover:shadow-md"
            >
              <span>Request Consultation</span>
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(20px); } }`}</style>
    </section>
  );
}
