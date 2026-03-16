'use client';

import { motion } from 'framer-motion';

function CommunityVisual() {
  // Circle of 8 stick figures around a heart/plus in the centre
  const count = 10;
  const radius = 72;
  const cx = 110;
  const cy = 110;

  const figures = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    return { x, y, angle };
  });

  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs mx-auto"
      aria-label="Community circle visual"
    >
      <defs>
        <radialGradient id="communityGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F47922" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F47922" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow background circle */}
      <circle cx={cx} cy={cy} r="90" fill="url(#communityGlow)" />

      {/* Outer orbit ring */}
      <circle cx={cx} cy={cy} r={radius} stroke="rgba(244,121,34,0.15)" strokeWidth="1" strokeDasharray="3 5" />

      {/* Connection lines from centre to each figure */}
      {figures.map((fig, i) => (
        <line
          key={`line-${i}`}
          x1={cx}
          y1={cy}
          x2={fig.x}
          y2={fig.y}
          stroke="rgba(244,121,34,0.1)"
          strokeWidth="1"
        />
      ))}

      {/* Stick figures */}
      {figures.map((fig, i) => (
        <g key={`fig-${i}`} transform={`translate(${fig.x - 7}, ${fig.y - 14})`}>
          {/* Head */}
          <circle cx="7" cy="4" r="3.5" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
          {/* Body */}
          <line x1="7" y1="7.5" x2="7" y2="14" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" />
          {/* Arms */}
          <path d="M3 10 L7 9 L11 10" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Legs */}
          <line x1="7" y1="14" x2="4" y2="19" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="7" y1="14" x2="10" y2="19" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      ))}

      {/* Centre heart + cross */}
      <g transform={`translate(${cx - 14}, ${cy - 14})`}>
        {/* Heart */}
        <path
          d="M14 22 C14 22 4 16 4 9 C4 5.5 7 3 10 3 C12 3 13.5 4 14 5 C14.5 4 16 3 18 3 C21 3 24 5.5 24 9 C24 16 14 22 14 22 Z"
          fill="rgba(244,121,34,0.25)"
          stroke="#F47922"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Plus / cross in heart */}
        <line x1="14" y1="8" x2="14" y2="16" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="12" x2="18" y2="12" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default function FoundationSection() {
  return (
    <section id="foundation" className="bg-navy py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(4,169,199,0.05) 0%, transparent 55%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sky text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
            >
              LifeFlight Foundation
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              Community-funded.<br />
              <span className="text-orange">Life-saving.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-white/60 text-base lg:text-lg leading-relaxed mb-8"
            >
              <p>
                The LifeFlight Foundation raises funds to ensure our crews have access to the most
                advanced medical equipment, state-of-the-art aircraft, world-class training, and
                cutting-edge research.
              </p>
              <p>
                We receive no government operational funding. Every aircraft, every piece of
                life-saving equipment, every training course — funded entirely by the Queensland
                community. That&apos;s you.
              </p>
            </motion.div>

            {/* Stat callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-4 bg-orange/10 border border-orange/25 rounded-2xl px-6 py-4 mb-10"
            >
              <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-orange" aria-hidden="true">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                </svg>
              </div>
              <div>
                <div className="text-orange font-black text-2xl leading-none mb-0.5">100%</div>
                <div className="text-white/55 text-sm">community funded</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#donate"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 border border-orange text-orange hover:bg-orange hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-200 text-base"
              >
                Get involved
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Community visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 w-full relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(244,121,34,0.06) 0%, transparent 70%)',
                }}
              />
              <CommunityVisual />
              <div className="mt-6 text-center">
                <p className="text-white/30 text-xs font-mono tracking-wider uppercase">Queensland Community</p>
                <p className="text-white/15 text-xs font-mono mt-1">Supporting LifeFlight since 1979</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
