'use client';

import { motion } from 'framer-motion';

function QueenslandMap() {
  // Simplified Queensland polygon (rough outline)
  // Queensland is roughly in NE Australia — simplified to ~20 points
  const qldPath =
    'M 120 20 L 180 15 L 230 22 L 270 18 L 300 30 L 315 55 L 320 90 L 310 130 L 295 170 L 270 210 L 240 240 L 210 260 L 180 265 L 155 255 L 135 230 L 110 200 L 90 165 L 80 130 L 75 90 L 82 55 L 100 35 Z';

  const bases = [
    { cx: 245, cy: 242, label: 'Brisbane' },
    { cx: 215, cy: 110, label: 'Townsville' },
    { cx: 190, cy: 50, label: 'Cairns' },
    { cx: 160, cy: 200, label: 'Toowoomba' },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        aria-label="Map of Queensland showing LifeFlight base locations"
      >
        {/* Subtle grid lines */}
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          </pattern>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="400" height="300" fill="url(#grid)" />

        {/* Queensland outline */}
        <path
          d={qldPath}
          stroke="rgba(4,169,199,0.4)"
          strokeWidth="1.5"
          fill="rgba(4,169,199,0.05)"
          strokeLinejoin="round"
        />

        {/* Connecting lines between bases */}
        {bases.map((base, i) =>
          bases.slice(i + 1).map((b2, j) => (
            <line
              key={`${i}-${j}`}
              x1={base.cx}
              y1={base.cy}
              x2={b2.cx}
              y2={b2.cy}
              stroke="rgba(244,121,34,0.12)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          ))
        )}

        {/* Base location dots */}
        {bases.map((base) => (
          <g key={base.label}>
            {/* Outer pulse ring */}
            <motion.circle
              cx={base.cx}
              cy={base.cy}
              r={12}
              fill="rgba(244,121,34,0.08)"
              stroke="rgba(244,121,34,0.3)"
              strokeWidth="1"
              animate={{ r: [10, 16, 10], opacity: [0.5, 0.1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: bases.indexOf(base) * 0.5 }}
            />
            {/* Inner dot */}
            <circle
              cx={base.cx}
              cy={base.cy}
              r={4}
              fill="#F47922"
              filter="url(#glow)"
            />
            <circle
              cx={base.cx}
              cy={base.cy}
              r={2}
              fill="white"
            />
            {/* Label */}
            <text
              x={base.cx + 10}
              y={base.cy + 4}
              fill="rgba(255,255,255,0.6)"
              fontSize="9"
              fontFamily="system-ui, sans-serif"
              fontWeight="500"
            >
              {base.label}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g transform="translate(20, 260)">
          <circle cx="6" cy="6" r="4" fill="#F47922" opacity="0.8" />
          <text x="14" y="10" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="system-ui">
            LifeFlight Base
          </text>
        </g>
      </svg>

      {/* Glow underneath */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(4,169,199,0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M22 12.5V8l-4-4H2v16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M18 16v2l1 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Air Ambulance',
    desc: 'Fixed-wing and rotor aircraft for rapid patient transport across Queensland.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: 'Rescue Operations',
    desc: 'Specialist winch and rescue capability for remote and difficult terrain.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Medical Retrieval',
    desc: 'Critical care doctors on board, bringing the ICU to the patient.',
  },
];

export default function MissionSection() {
  return (
    <section className="bg-navy-mid relative overflow-hidden py-24 lg:py-32">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 0% 50%, rgba(4,169,199,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sky text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Our Mission
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              Bringing critical care closer to home.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-white/60 text-base lg:text-lg leading-relaxed"
            >
              <p>
                LifeFlight is a not-for-profit aeromedical organisation, operating the most comprehensive
                air ambulance network in Queensland. We cover over 1.7 million square kilometres —
                from the far north tropics to the outback west.
              </p>
              <p>
                Every mission is flown by highly trained crews — paramedics, doctors, and rescue
                specialists — committed to one goal: getting the right care to the right patient,
                as fast as possible.
              </p>
            </motion.div>

            {/* Feature callouts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 space-y-4"
            >
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-sky group-hover:bg-orange/10 group-hover:border-orange/30 group-hover:text-orange transition-all duration-200">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{f.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            {/* Card frame */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-white/30 text-xs font-mono tracking-wider uppercase">Queensland Operations</span>
                <span className="flex items-center gap-1.5 text-xs text-orange/80 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                  Live
                </span>
              </div>
              <div className="mt-6">
                <QueenslandMap />
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/25 font-mono">
                <span>1.7M km² covered</span>
                <span>4 active bases</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
