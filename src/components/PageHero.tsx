import { motion } from 'framer-motion';

interface PageHeroProps {
  kicker: string;
  title: string;
  description: string;
}

export default function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-industrial-200 bg-industrial-900 pt-32 text-white md:pt-36">
      <div className="absolute inset-0">
        <div className="mesh-glow absolute inset-0 opacity-30" />
        <div className="subtle-grid absolute inset-0 opacity-10" />
      </div>

      <div className="container-wide relative pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl"
        >
          <span className="section-kicker text-white/65">{kicker}</span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.04] text-white md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
