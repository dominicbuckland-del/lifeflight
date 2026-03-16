'use client';

import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface StatItem {
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '4,500+', numericValue: 4500, suffix: '+', label: 'missions every year' },
  { value: '45', numericValue: 45, label: 'years saving lives' },
  { value: '1,500+', numericValue: 1500, suffix: '+', label: 'professionals trained annually' },
  { value: '24/7', label: 'always operational' },
];

function AnimatedCounter({ numericValue, suffix = '', value }: { numericValue?: number; suffix?: string; value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView || numericValue === undefined) return;
    const controls = animate(count, numericValue, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => {
        if (ref.current) {
          const rounded = Math.round(latest);
          ref.current.textContent =
            rounded >= 1000
              ? rounded.toLocaleString() + suffix
              : String(rounded) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, numericValue, suffix, count]);

  if (numericValue === undefined) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>0</span>;
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 py-8 lg:py-0 relative"
    >
      {/* Divider on desktop */}
      {index > 0 && (
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
      )}

      <div className="text-5xl sm:text-6xl xl:text-7xl font-black text-orange tabular-nums leading-none mb-3 tracking-tight">
        <AnimatedCounter
          numericValue={stat.numericValue}
          suffix={stat.suffix}
          value={stat.value}
        />
      </div>
      <p className="text-white/50 text-sm sm:text-base font-medium tracking-wide uppercase">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="bg-navy relative overflow-hidden">
      {/* Top orange border */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-60" />

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 50% 80% at 20% 50%, rgba(4,169,199,0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(244,121,34,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/0">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
}
