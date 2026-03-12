import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { technologyPartners } from '../lib/siteConfig';

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="clients" className="section-light section-padding-sm">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="grid gap-8 border-b border-stone-200 pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div>
            <span className="section-kicker" style={{ color: 'rgba(230,126,34,0.8)' }}>Technology Ecosystem</span>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold text-industrial-900 md:text-5xl">
              Integration-ready across trusted <span className="gradient-text">industrial automation platforms.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-industrial-500 md:justify-self-end">
            We work with established OEMs and industrial brands to keep implementation reliable, support channels clear, and lifecycle maintenance predictable.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {technologyPartners.map((partner, index) => (
            <motion.article
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group flex min-h-[164px] flex-col justify-between rounded-xl border border-stone-200 bg-white p-5 transition hover:border-brand-orange/50 glow-card"
            >
              <div className="flex h-14 items-center justify-center">
                <img src={partner.logo} alt={`${partner.name} automation partner`} className="max-h-full w-auto object-contain opacity-75 transition group-hover:opacity-100" loading="lazy" />
              </div>
              <div className="pt-4">
                <h3 className="text-base font-semibold text-industrial-900">{partner.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-industrial-400">{partner.category}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 border-t border-stone-200 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-relaxed text-industrial-500">
            Need a cross-vendor architecture for a plant upgrade, retrofit, or greenfield line? We help choose components that remain supportable after go-live.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Discuss Your Platform Stack
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
