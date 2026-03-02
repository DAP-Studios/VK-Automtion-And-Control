import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.png';
import logo from '../assets/logo.png';

// ── Metrics data ─────────────────────────────────────────────────────────────
const METRICS = [
  { value: '99.7%', label: 'System Uptime' },
  { value: '24/7',  label: 'Support' },
  { value: '200+',  label: 'Systems Deployed' },
];

// ── Ease shorthand ────────────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

// ── Animation variants ────────────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

// ── Particle component ────────────────────────────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 2,
    left: Math.random() * 100,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 rounded-full bg-orange-400"
          style={{
            left: `${p.left}%`,
            top: '-10px',
            opacity: p.opacity,
          }}
          animate={{
            y: window.innerHeight + 20,
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

// ── Glowing ribbon component ────────────────────────────────────────────────
function GlowingRibbon() {
  const ribbons = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    randomY: Math.random() * 40 - 20,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
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
            d={`M 0 ${window.innerHeight / 2 + r.randomY} Q 25% ${window.innerHeight / 2 + Math.sin(performance.now() / 1000) * 40}, 50% ${window.innerHeight / 2 - 20} T 100% ${window.innerHeight / 2 + r.randomY}`}
            stroke="url(#orangeGradient)"
            strokeWidth="8"
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
            animate={{
              d: [
                `M 0 ${window.innerHeight / 2 + r.randomY} Q 25% ${window.innerHeight / 2 + 50}, 50% ${window.innerHeight / 2 - 20} T 100% ${window.innerHeight / 2 + r.randomY}`,
                `M 0 ${window.innerHeight / 2 + r.randomY + 30} Q 25% ${window.innerHeight / 2 - 30}, 50% ${window.innerHeight / 2 + 20} T 100% ${window.innerHeight / 2 + r.randomY - 30}`,
                `M 0 ${window.innerHeight / 2 + r.randomY - 20} Q 25% ${window.innerHeight / 2 + 40}, 50% ${window.innerHeight / 2 - 30} T 100% ${window.innerHeight / 2 + r.randomY + 20}`,
                `M 0 ${window.innerHeight / 2 + r.randomY} Q 25% ${window.innerHeight / 2 + 50}, 50% ${window.innerHeight / 2 - 20} T 100% ${window.innerHeight / 2 + r.randomY}`,
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
      
      {/* Gradient definition */}
      <svg className="w-0 h-0">
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

// ── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isStripSticky, setIsStripSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const triggerPoint = sectionTop + sectionRef.current.offsetHeight - 120;
      setIsStripSticky(window.scrollY >= triggerPoint);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-left justify-left overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      
      {/* Particles */}
      <Particles />
      
      {/* Glowing Ribbon */}
      <GlowingRibbon />
      
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(230, 126, 34, 0.12)', animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(20, 28, 44, 0.06)', animation: 'float 8s ease-in-out infinite 1s' }} />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent z-20" />

      {/* ── Main content ── */}
      <div className="container-wide relative py-32 z-10">
        <div className="max-w-4xl mx-auto">

          {/* Label */}
          {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }} className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-xs uppercase tracking-widest font-medium text-orange-700">
              Automation &amp; Control
            </span>
          </motion.div> */}

          {/* Headline */}
          <motion.h1 variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 1, delay: 0.1, ease: EASE }} className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Engineering <span className="text-orange-400">Precision</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2 variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 1, delay: 0.2, ease: EASE }} className="text-2xl md:text-3xl font-light text-gray-100 mb-8 leading-relaxed">
            Into Every System
          </motion.h2>

          {/* Description */}
          <motion.p variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 1, delay: 0.3, ease: EASE }} className="text-lg text-gray-200 mb-12 max-w-2xl leading-relaxed">
            Design, integration, and lifecycle support for mission-critical automation systems. Built for reliability and performance you can count on.
          </motion.p>

          {/* Metrics */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: EASE }} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-8 border-t border-white/20">
            {METRICS.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: EASE }}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{m.value}</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 1, delay: 0.6, ease: EASE }}>
            <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md group">
              <span>Request Consultation</span>
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* White strip / sticky brand bar */}
      <div className={`${isStripSticky ? 'fixed top-0 h-20' : 'absolute bottom-0 h-[120px]'} left-0 right-0 bg-white z-40 border-b border-industrial-200 transition-all duration-300`}>
        <div className="container-editorial h-full flex items-center justify-center md:justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src={logo}
              alt="VK Automation and Control"
              className={`${isStripSticky ? 'h-10 md:h-12 translate-y-0' : 'h-32 md:h-40 -translate-y-1/2'} w-auto transition-all duration-300`}
            />
            <h2 className={`${isStripSticky ? 'text-base md:text-lg font-medium text-industrial-600 leading-tight' : 'text-3xl md:text-5xl font-semibold text-industrial-900 leading-snug'} transition-all duration-300`}>
              VK
              <span className="text-brand-orange"> | Automation and Control</span>
            </h2>
          </div>

          <motion.nav
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={isStripSticky ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: EASE }}
            className={`${isStripSticky ? 'hidden md:flex' : 'hidden'} items-center gap-4 md:gap-8`}
          >
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8, y: 8 }}
                animate={isStripSticky ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 8 }}
                transition={{ duration: 0.2, delay: isStripSticky ? index * 0.05 : 0 }}
              >
                <Link
                  to={item.href}
                  className="text-sm font-medium text-industrial-600 hover:text-brand-orange transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>
      </div>

      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(20px); } }`}</style>
    </section>
  );
}