'use client';

import { motion } from 'framer-motion';

function HelicopterSVG() {
  return (
    <svg
      viewBox="0 0 480 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl mx-auto"
      aria-hidden="true"
    >
      {/* Main rotor shaft */}
      <line x1="240" y1="42" x2="240" y2="70" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

      {/* Main rotor blades */}
      <motion.g
        style={{ transformOrigin: '240px 42px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      >
        <line x1="100" y1="42" x2="380" y2="42" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <line x1="240" y1="10" x2="240" y2="74" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      </motion.g>

      {/* Fuselage — main body */}
      <path
        d="M160 70 Q175 65 200 68 L310 72 Q340 75 360 90 Q370 98 360 108 Q350 118 310 120 L200 118 Q180 118 165 110 Q150 100 155 85 Z"
        stroke="white"
        strokeWidth="2"
        fill="rgba(255,255,255,0.04)"
      />

      {/* Nose cone */}
      <path
        d="M155 85 Q148 90 145 98 Q148 108 155 110 Q150 100 155 85"
        stroke="white"
        strokeWidth="2"
        fill="rgba(255,255,255,0.04)"
      />

      {/* Cockpit glass */}
      <path
        d="M165 75 Q180 68 205 70 L205 100 Q185 102 168 98 Q160 93 160 85 Z"
        stroke="white"
        strokeWidth="1.5"
        fill="rgba(4,169,199,0.12)"
      />

      {/* Tail boom */}
      <path
        d="M310 94 L420 80 Q428 79 428 84 L420 90 L310 108 Z"
        stroke="white"
        strokeWidth="1.5"
        fill="rgba(255,255,255,0.03)"
      />

      {/* Tail fin vertical */}
      <path
        d="M418 80 L428 60 L434 60 L430 80"
        stroke="white"
        strokeWidth="1.5"
        fill="rgba(255,255,255,0.05)"
      />

      {/* Tail fin horizontal */}
      <path
        d="M416 82 L440 76 L440 80 L416 88 Z"
        stroke="white"
        strokeWidth="1.5"
        fill="rgba(255,255,255,0.05)"
      />

      {/* Tail rotor */}
      <motion.g
        style={{ transformOrigin: '428px 84px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
      >
        <line x1="428" y1="68" x2="428" y2="100" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <line x1="414" y1="84" x2="442" y2="84" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </motion.g>

      {/* Skid left */}
      <path d="M175 120 L175 140 Q178 143 225 143 Q240 143 240 140 L240 120" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Skid right */}
      <path d="M255 120 L255 140 Q258 143 305 143 Q320 143 320 140 L320 120" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Skid connector */}
      <line x1="175" y1="132" x2="240" y2="132" stroke="white" strokeWidth="1.5" />
      <line x1="255" y1="132" x2="320" y2="132" stroke="white" strokeWidth="1.5" />

      {/* Medical cross on body */}
      <rect x="260" y="82" width="18" height="18" rx="2" stroke="rgba(244,121,34,0.8)" strokeWidth="1.5" fill="rgba(244,121,34,0.1)" />
      <line x1="269" y1="85" x2="269" y2="97" stroke="rgba(244,121,34,0.9)" strokeWidth="1.5" />
      <line x1="263" y1="91" x2="275" y2="91" stroke="rgba(244,121,34,0.9)" strokeWidth="1.5" />

      {/* Searchlight beam from below */}
      <path
        d="M200 140 L140 220 L300 220 L260 140 Z"
        fill="url(#searchlight)"
        opacity="0.4"
      />

      <defs>
        <radialGradient id="searchlight" cx="50%" cy="0%" r="100%" fx="50%" fy="0%">
          <stop offset="0%" stopColor="#F47922" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F47922" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 80%, rgba(244,121,34,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 50% 50%, rgba(4,13,34,0) 0%, #041322 100%)',
        }}
      />

      {/* Star field dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '12%', left: '8%', size: 1.5, opacity: 0.4 },
          { top: '22%', left: '18%', size: 1, opacity: 0.3 },
          { top: '8%', left: '35%', size: 1.5, opacity: 0.5 },
          { top: '15%', left: '62%', size: 1, opacity: 0.35 },
          { top: '5%', left: '78%', size: 2, opacity: 0.4 },
          { top: '28%', left: '88%', size: 1, opacity: 0.3 },
          { top: '40%', left: '5%', size: 1.5, opacity: 0.25 },
          { top: '35%', left: '92%', size: 1, opacity: 0.35 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
            }}
          />
        ))}
      </div>

      {/* Scan line animation */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(4,169,199,0.4) 20%, rgba(244,121,34,0.6) 50%, rgba(4,169,199,0.4) 80%, transparent 100%)',
          top: '65%',
        }}
        animate={{ opacity: [0, 1, 0.6, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(4,169,199,0.2) 30%, rgba(244,121,34,0.3) 50%, rgba(4,169,199,0.2) 70%, transparent 100%)',
          top: '72%',
        }}
        animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2, delay: 1.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-24 lg:py-0">
          {/* Text content */}
          <div className="flex flex-col">
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex"
            >
              <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 text-sky text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-sky inline-block" />
                Queensland&apos;s Aeromedical Service · Est. 1979
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              <span className="block text-white">Every second</span>
              <span className="block text-white">counts.</span>
              <span className="block text-orange mt-1">We&apos;ll be there.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-xl mb-10"
            >
              Queensland&apos;s largest aeromedical service. 24 hours a day, 7 days a week, 365 days a year — LifeFlight delivers critical care from the sky.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#donate"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_30px_rgba(244,121,34,0.3)] hover:shadow-[0_0_40px_rgba(244,121,34,0.5)]"
              >
                Donate now
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
              >
                Learn more ↓
              </a>
            </motion.div>
          </div>

          {/* Helicopter visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center relative"
          >
            {/* Glow behind helicopter */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(244,121,34,0.12) 0%, transparent 70%)',
              }}
            />
            <HelicopterSVG />
            {/* Altitude line */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange/40" />
              <span className="text-orange/60 text-xs font-mono tracking-widest uppercase">Active · 24/7</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange/40" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
