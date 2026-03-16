'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" aria-hidden="true">
        {/* Rotor */}
        <line x1="16" y1="14" x2="48" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="8" x2="32" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="20" x2="32" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Body */}
        <path d="M18 26 Q22 22 28 24 L42 26 Q52 28 52 36 Q52 42 42 43 L28 43 Q20 43 18 36 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Nose */}
        <path d="M18 31 Q14 33 14 36 Q14 40 18 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Tail */}
        <path d="M42 34 L58 28 L58 32 L42 37 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="57" y1="23" x2="62" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="62" y1="28" x2="57" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Skids */}
        <path d="M22 43 L22 50 L38 50 L38 43" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M40 43 L40 50 L56 50 L56 43" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="22" y1="47" x2="38" y2="47" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="47" x2="56" y2="47" stroke="currentColor" strokeWidth="1.5" />
        {/* Cross */}
        <rect x="28" y="30" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <line x1="32" y1="31.5" x2="32" y2="36.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="29.5" y1="34" x2="34.5" y2="34" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Air Ambulance',
    tagline: 'Critical transport, anywhere.',
    description:
      'Our fleet of helicopters and fixed-wing aircraft transport critically ill and injured patients from accident scenes and regional hospitals to specialist medical centres — saving lives that would otherwise be lost.',
    stat: '3,000+ transports/year',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" aria-hidden="true">
        {/* Person hanging on rope */}
        {/* Rope from top */}
        <line x1="32" y1="4" x2="32" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Harness figure */}
        <circle cx="32" cy="26" r="5" stroke="currentColor" strokeWidth="2" />
        {/* Body */}
        <line x1="32" y1="31" x2="32" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Arms outstretched */}
        <path d="M20 36 Q26 38 32 37 Q38 38 44 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Legs */}
        <path d="M32 44 L26 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 44 L38 54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Mountains in background */}
        <path d="M4 60 L14 40 L24 55 L34 38 L44 52 L54 35 L60 60 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinejoin="round" />
        {/* Carabiner */}
        <path d="M29 20 Q26 18 27 15 Q28 12 31 12 Q35 12 36 15 Q37 18 34 20 L31 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: 'Rescue Operations',
    tagline: 'Where roads don\'t reach.',
    description:
      'Our specialist rescue crews operate in the harshest conditions — floods, cliffs, dense bushland, and open ocean. With winch capability and survival expertise, we reach people others cannot.',
    stat: '800+ rescues/year',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" aria-hidden="true">
        {/* Medical cross shield */}
        <path d="M32 6 L54 16 L54 34 Q54 50 32 58 Q10 50 10 34 L10 16 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
        {/* Plus sign */}
        <rect x="25" y="25" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="32" y1="27" x2="32" y2="37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="27" y1="32" x2="37" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Graduation element */}
        <path d="M20 18 L32 13 L44 18 L32 23 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <line x1="44" y1="18" x2="44" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Medical Training',
    tagline: 'Raising the standard of care.',
    description:
      'The LifeFlight Training Academy delivers world-class aeromedical and critical care education. Over 1,500 professionals trained each year — from paramedics to specialist retrieval physicians.',
    stat: '1,500+ trained/year',
  },
];

export default function ServiceCards() {
  return (
    <section id="services" className="bg-navy py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 40% 60% at 50% 100%, rgba(244,121,34,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-2xl"
          >
            Critical care, wherever you are.
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 overflow-hidden cursor-default transition-all duration-300 hover:border-orange/30 hover:shadow-[0_8px_40px_rgba(244,121,34,0.12)]"
            >
              {/* Orange bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="absolute bottom-0 left-0 right-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(244,121,34,0.06) 0%, transparent 100%)',
                }}
              />

              {/* Icon */}
              <div className="text-sky group-hover:text-orange transition-colors duration-300 mb-6">
                {service.icon}
              </div>

              {/* Title + tagline */}
              <h3 className="text-white font-bold text-xl mb-1 tracking-tight">{service.title}</h3>
              <p className="text-orange/70 text-xs font-semibold tracking-wider uppercase mb-4">{service.tagline}</p>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed mb-6">{service.description}</p>

              {/* Stat pill */}
              <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                <span className="text-white/50 text-xs font-mono">{service.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
