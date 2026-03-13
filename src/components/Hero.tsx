import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ArrowRight } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TsParticles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import bgImage from '../assets/bg.png';
import TypewriterServices from './TypewriterServices';

const METRICS = [
  { value: '2019', label: 'Operating Since', type: 'static' },
  { value: 200, suffix: '+', label: 'Systems Delivered', type: 'countup' },
  { value: '24/7', label: 'Response Time', type: 'static' },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

function Particles({ viewportHeight }: { viewportHeight: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        delay: Math.random() * 2,
        duration: 3.2 + Math.random() * 2,
        left: Math.random() * 100,
        opacity: Math.random() * 0.75 + 0.2,
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

function SparkBurst() {
  const sparks = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 1.5,
        duration: 1.2 + Math.random() * 1.6,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute rounded-full bg-orange-300"
          style={{
            left: `${spark.left}%`,
            top: `${spark.top}%`,
            width: '3px',
            height: '3px',
            boxShadow: '0 0 10px rgba(251,146,60,0.9)',
          }}
          animate={{
            opacity: [0, 0.95, 0],
            scale: [0.4, 1.5, 0.6],
            y: [0, -10, 0],
          }}
          transition={{
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            ease: 'easeInOut',
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

function MetricCard({ metric, index }: { metric: (typeof METRICS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: EASE }}
    >
      <div className="mb-2 text-3xl font-bold text-white md:text-4xl">
        {metric.type === 'countup' ? <CountUp end={metric.value} duration={2} suffix={metric.suffix} /> : metric.value}
      </div>
      <div className="text-sm uppercase tracking-wide text-gray-300">{metric.label}</div>
    </motion.div>
  );
}

function ButtonSparks() {
  const particlesInit = useCallback(async (engine: unknown) => {
    await loadFull(engine as never);
  }, []);

  return (
    <TsParticles
      id="hero-button-sparks"
      init={particlesInit}
      className="pointer-events-none absolute inset-0"
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        fpsLimit: 60,
        particles: {
          number: { value: 0 },
          color: { value: ['#ffb347', '#ff7a18', '#ffd28a'] },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'destroy' },
            speed: { min: 1, max: 2.5 },
          },
          opacity: { value: { min: 0.3, max: 1 }, animation: { enable: true, speed: 1, startValue: 'max', destroy: 'min' } },
          size: { value: { min: 1, max: 3 } },
          shape: { type: 'circle' },
        },
        emitters: {
          direction: 'none',
          life: { count: 0, delay: 2.2, duration: 0.18 },
          position: { x: 50, y: 50 },
          rate: { delay: 0.08, quantity: 3 },
          size: { width: 4, height: 4 },
        },
        detectRetina: true,
      }}
    />
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
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      initial={{ backgroundPosition: '50% 50%' }}
      animate={{ backgroundPosition: ['50% 50%', '52% 48%', '50% 50%'] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundAttachment: 'fixed',
        willChange: 'background-position',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.25) 70%, transparent 100%)' }}
      />
      <Particles viewportHeight={viewportHeight} />
      <SparkBurst />
      <GlowingRibbon viewportHeight={viewportHeight} />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-48 top-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'rgba(230, 126, 34, 0.14)' }}
          animate={{ y: [0, 26, 0], x: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-48 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: 'rgba(20, 28, 44, 0.08)' }}
          animate={{ y: [0, -22, 0], x: [0, -16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute left-[18%] top-[18%] h-72 w-72 rounded-full blur-3xl"
          style={{ background: 'rgba(255,122,24,0.16)' }}
          animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <div className="absolute left-0 right-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />

      <div className="container-wide relative z-10 pb-20 pt-28 sm:pt-32 md:py-32">
        <div className="max-w-5xl">
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="mb-6 max-w-5xl text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl xl:text-[5.5rem]"
          >
            Power and {'  '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #ff7a18, #ffb347)' }}
            >
              Integration
            </span>
          </motion.h1>

          {/* <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="mb-8 text-2xl font-light leading-relaxed text-gray-100 md:text-3xl"
          >
            Into Every System
          </motion.h2> */}

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <TypewriterServices />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="mb-12 grid grid-cols-1 gap-6 border-t border-white/20 py-8 sm:grid-cols-2 md:grid-cols-3"
          >
            {METRICS.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.6, ease: EASE }}
          >
            <motion.a
              href="#contact"
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={{
                rest: { scale: 1, y: 0 },
                hover: { scale: 1.05, y: -3 },
                tap:  { scale: 0.97, y: 0 },
              }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl px-8 py-4 font-semibold text-white transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(255,100,0,0.55)]"
              style={{
                background: 'linear-gradient(135deg,#ff6400 0%,#ff8c2a 55%,#ffb060 100%)',
                boxShadow: '0 8px 24px rgba(255,106,0,0.38), inset 0 1px 0 rgba(255,255,255,0.22)',
              }}
            >
              <ButtonSparks />

              {/* Permanent top-edge gloss — gives the reflective highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl"
                style={{ background: 'linear-gradient(to bottom,rgba(255,255,255,0.22),rgba(255,255,255,0))' }}
              />

              {/* Diagonal shine sweep triggered on hover via variant propagation */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 w-14 -skew-x-12 bg-white/30 blur-[3px]"
                variants={{
                  rest: { x: '-140%' },
                  hover: { x: '360%' },
                }}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              />

              <span className="relative z-10 tracking-wide">Request Consultation</span>

              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>

    </motion.section>
  );
}
