import { motion, useAnimationFrame, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { clientLogos } from '../assets/images';

type ClientsProps = {
  variant?: 'grid' | 'featured';
};

type BubbleState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const bubbles: BubbleState[] = [];

function seedValue(seed: number) {
  const value = Math.sin(seed * 999.91) * 10000;
  return value - Math.floor(value);
}

function useBubblePhysics(index: number, radius: number) {
  const ref = useRef<HTMLDivElement | null>(null);
  const state = useRef<BubbleState>({
    x: radius + seedValue(index + 1) * (650 - radius * 2),
    y: radius + seedValue(index + 101) * (400 - radius * 2),
    vx: (seedValue(index + 11) - 0.5) * 0.8,
    vy: (seedValue(index + 31) - 0.5) * 0.8,
    r: radius,
  });

  useEffect(() => {
    const bubbleState = state.current;
    bubbles.push(bubbleState);

    return () => {
      const stateIndex = bubbles.indexOf(bubbleState);
      if (stateIndex >= 0) {
        bubbles.splice(stateIndex, 1);
      }
    };
  }, []);

  useAnimationFrame(() => {
    const s = state.current;
    const width = 650;
    const height = 400;

    s.x += s.vx;
    s.y += s.vy;

    if (s.x < s.r || s.x > width - s.r) s.vx *= -1;
    if (s.y < s.r || s.y > height - s.r) s.vy *= -1;

    bubbles.forEach((other) => {
      if (other === s) return;

      const dx = other.x - s.x;
      const dy = other.y - s.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 0 && dist < s.r + other.r) {
        const tempX = s.vx;
        const tempY = s.vy;

        s.vx = other.vx;
        s.vy = other.vy;

        other.vx = tempX;
        other.vy = tempY;

        const overlap = s.r + other.r - dist;
        const nx = dx / dist;
        const ny = dy / dist;

        s.x -= nx * (overlap / 2);
        s.y -= ny * (overlap / 2);
        other.x += nx * (overlap / 2);
        other.y += ny * (overlap / 2);
      }
    });

    if (ref.current) {
      ref.current.style.transform = `translate(${s.x - s.r}px, ${s.y - s.r}px)`;
    }
  });

  return ref;
}

function Bubble({ logo, name, index }: { logo: string; name: string; index: number }) {
  const bubbleRef = useBubblePhysics(index, 48);

  return (
    <motion.div
      ref={bubbleRef}
      whileHover={{ scale: 1.1 }}
      className="absolute flex h-24 w-24 items-center justify-center rounded-full border border-brand-orange/30 bg-white/90 shadow-xl backdrop-blur"
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-full border border-brand-orange/45"
        animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 2.4 + (index % 3) * 0.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <img src={logo} alt={`${name} logo`} className="max-h-10 object-contain" />
    </motion.div>
  );
}

export default function Clients({ variant = 'grid' }: ClientsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const isFeatured = variant === 'featured';

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
            <span className="section-kicker" style={{ color: 'rgba(230,126,34,0.8)' }}>Selected Clients</span>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold text-industrial-900 md:text-5xl">
              Built. Running. <span className="gradient-text">Trusted.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-industrial-500 md:justify-self-end">
            Real plants. Real uptime.
          </p>
        </motion.div>

        {isFeatured ? (
          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-stone-200 bg-[radial-gradient(circle_at_top_left,rgba(230,126,34,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(25,35,55,0.07),transparent_28%),linear-gradient(180deg,#fffdf9_0%,#f8f6f2_100%)] px-4 py-6 md:px-8 md:py-10">
            <div className="pointer-events-none absolute -left-12 top-10 h-28 w-28 rounded-full bg-brand-orange/20 blur-3xl md:h-40 md:w-40" />
            <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-industrial-900/10 blur-3xl md:h-40 md:w-40" />

            <div className="relative mx-auto h-[400px] w-full max-w-5xl overflow-hidden">
              {clientLogos.map((client, index) => (
                <Bubble key={client.name} logo={client.logo} name={client.name} index={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clientLogos.map((client, index) => (
              <motion.article
                key={client.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group flex min-h-[120px] items-center justify-center rounded-xl border border-stone-200 bg-white p-6 transition hover:border-brand-orange/50 glow-card"
              >
                <div className="flex h-16 items-center justify-center">
                  <img src={client.logo} alt={`${client.name} logo`} className="max-h-full w-auto object-contain opacity-80 transition group-hover:opacity-100" loading="lazy" />
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 border-t border-stone-200 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-relaxed text-industrial-500">
            Need similar support for a plant upgrade, retrofit, panel project, or commissioning job? We can review your requirement and propose the right scope.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Discuss Your Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
