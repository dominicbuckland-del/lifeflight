'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-navy-mid relative overflow-hidden py-24 lg:py-28">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(4,169,199,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4"
        >
          Stay close to the mission.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/55 text-base lg:text-lg leading-relaxed mb-10"
        >
          Updates on rescues, community stories, and how your support is making a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div className="bg-sky/10 border border-sky/30 rounded-2xl px-8 py-6">
              <div className="flex items-center justify-center gap-3 text-sky">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-white">You&apos;re in. Welcome to the LifeFlight community.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-white/[0.06] border border-white/15 text-white placeholder-white/30 rounded-full px-6 py-4 text-base outline-none focus:border-sky/60 focus:ring-1 focus:ring-sky/30 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_24px_rgba(244,121,34,0.25)] hover:shadow-[0_0_36px_rgba(244,121,34,0.4)] whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}

          {!submitted && (
            <p className="text-white/25 text-xs mt-4">
              No spam. Unsubscribe at any time. Read our{' '}
              <a href="#" className="underline underline-offset-2 hover:text-white/50 transition-colors">
                privacy policy
              </a>
              .
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
