'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const presetAmounts = [50, 100, 250];

const impacts = [
  { amount: '$50', desc: 'helps fund a flight' },
  { amount: '$100', desc: 'funds critical equipment' },
  { amount: '$250', desc: 'supports a full mission' },
];

export default function DonateSection() {
  const [selected, setSelected] = useState<number | 'custom'>(100);
  const [customValue, setCustomValue] = useState('');

  return (
    <section id="donate" className="relative overflow-hidden py-24 lg:py-36" style={{ background: '#041322' }}>
      {/* Orange radial glow bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 100% 100%, rgba(244,121,34,0.12) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 80% 90%, rgba(244,121,34,0.07) 0%, transparent 50%)',
        }}
      />

      {/* Horizontal faint lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={pct}
            className="absolute left-0 right-0 h-px bg-white/10"
            style={{ top: `${pct}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-orange text-xs font-bold tracking-[0.2em] uppercase mb-6"
        >
          Support LifeFlight
        </motion.span>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          Your donation<br />
          <span className="text-orange">saves lives.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          LifeFlight is a not-for-profit. Every dollar funds life-saving equipment, critical care doctors,
          and the operational costs of keeping Queensland&apos;s skies covered 24/7.
        </motion.p>

        {/* Donation selector */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 mb-8"
        >
          {/* Amount buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => { setSelected(amount); setCustomValue(''); }}
                className={`px-8 py-3.5 rounded-full font-bold text-base transition-all duration-200 ${
                  selected === amount
                    ? 'bg-orange text-white shadow-[0_0_24px_rgba(244,121,34,0.4)]'
                    : 'bg-white/[0.06] text-white/70 border border-white/10 hover:border-orange/40 hover:text-white'
                }`}
              >
                ${amount}
              </button>
            ))}
            <div
              className={`flex items-center rounded-full border transition-all duration-200 overflow-hidden ${
                selected === 'custom'
                  ? 'border-orange bg-orange/10'
                  : 'border-white/10 bg-white/[0.06] hover:border-orange/40'
              }`}
            >
              <span className="pl-5 text-white/50 font-bold">$</span>
              <input
                type="number"
                min="1"
                placeholder="Custom"
                value={customValue}
                onChange={(e) => { setCustomValue(e.target.value); setSelected('custom'); }}
                className="bg-transparent text-white placeholder-white/30 font-bold text-base px-3 py-3.5 w-28 outline-none"
              />
            </div>
          </div>

          {/* Selected amount display */}
          <div className="text-white/40 text-sm mb-6 font-mono">
            {selected === 'custom'
              ? customValue
                ? `Donating $${customValue}`
                : 'Enter a custom amount'
              : `Donating $${selected}`}
          </div>

          {/* Donate button */}
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-black text-lg px-16 py-5 rounded-full transition-all duration-200 shadow-[0_0_40px_rgba(244,121,34,0.3)] hover:shadow-[0_0_60px_rgba(244,121,34,0.5)]">
            Donate
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>

        {/* Regular gift nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-white/40 text-sm mb-12"
        >
          Or{' '}
          <button className="text-sky hover:text-white underline underline-offset-2 transition-colors">
            set up a regular gift
          </button>{' '}
          — a small monthly donation makes a massive difference.
        </motion.p>

        {/* Impact callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {impacts.map((impact) => (
            <div
              key={impact.amount}
              className="bg-white/[0.03] border border-white/8 rounded-2xl px-6 py-5 text-center"
            >
              <div className="text-orange font-black text-2xl mb-1">{impact.amount}</div>
              <div className="text-white/45 text-sm">{impact.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
