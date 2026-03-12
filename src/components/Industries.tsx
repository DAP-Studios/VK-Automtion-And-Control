import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import autoImage from '../assets/industries/auto.png';
import legacyImage from '../assets/industries/legacy.png';
import networkImage from '../assets/industries/network.png';
import plcImage from '../assets/industries/plc.png';
import safetyImage from '../assets/industries/safty.png';
import vfdImage from '../assets/industries/vfd.png';

const sectors = [
  {
    title: 'Manufacturing Plants',
    description: 'PLC and SCADA integration for stable operation, traceability, and plant-wide monitoring.',
    image: autoImage,
  },
  {
    title: 'Process Industries',
    description: 'Control architecture for batch and continuous processes with practical operator visibility.',
    image: plcImage,
  },
  {
    title: 'Drives and Motion',
    description: 'VFD and motion control engineering for dependable throughput and energy-aware operation.',
    image: vfdImage,
  },
  {
    title: 'Industrial Networking',
    description: 'Robust industrial communication with segmented architecture and maintainable diagnostics.',
    image: networkImage,
  },
  {
    title: 'Safety Systems',
    description: 'Safety integration aligned with lifecycle documentation and reliable protective behavior.',
    image: safetyImage,
  },
  {
    title: 'Legacy Upgrades',
    description: 'Modernization of older control systems while preserving production continuity and uptime.',
    image: legacyImage,
  },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="industries" className="section-light section-padding-sm">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="grid gap-8 border-b border-stone-200 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <span className="section-kicker" style={{ color: 'rgba(230,126,34,0.8)' }}>Industries and Applications</span>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold text-industrial-900 md:text-5xl">
              Focused automation capabilities for <span className="gradient-text">real industrial operations.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-industrial-500 md:justify-self-end">
            Each area is delivered with practical engineering, cleaner documentation, and support-ready commissioning.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sectors.map((sector, index) => (
            <motion.article
              key={sector.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 * index }}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:border-brand-orange/50 glow-card"
            >
              <div className="relative h-44 overflow-hidden rounded-t-2xl">
                <img
                  src={sector.image}
                  alt={`${sector.title} automation services`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">{sector.title}</h3>
              </div>
              <p className="p-5 text-sm leading-relaxed text-industrial-500">{sector.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
