'use client';
import { motion } from 'framer-motion';
import ScrambleText from '../ScrambleText';

const GitHubIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const mono = {
  fontFamily: 'var(--font-jetbrains, monospace)',
  fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
};

export default function HeroSection() {
  return (
    <section style={{ height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column', paddingTop: 48, paddingBottom: 48 }}>

      {/* Center — name + subtitle */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: 'var(--font-syne, system-ui)',
              fontSize: 'clamp(80px, 11vw, 150px)',
              fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.92,
              color: '#e8dfc8', margin: 0,
            }}
          >
            <ScrambleText text="Shrutik" duration={1100} delay={0} /><br />
            <ScrambleText text="Kupekar" duration={1100} delay={300} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: 'var(--font-inter, system-ui)',
              fontSize: 20, color: '#6b6355', marginTop: 32,
            }}
          >
            Full Stack Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: 'var(--font-inter, system-ui)',
              fontSize: 20, color: '#e8dfc8', marginTop: 16,
              maxWidth: 520, lineHeight: 1.7,
              margin: '16px auto 0', textAlign: 'center',
            }}
          >
            I turn ideas into shipped products.
          </motion.p>
        </div>
      </div>

      {/* Bottom — location/email + social icons */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ ...mono, color: '#6b6355' }}>📍 Lancaster, CA</span>
          <span style={{ ...mono, color: '#3a3228' }}>·</span>
          <a
            href="mailto:shrutikskupekar@gmail.com"
            style={{ ...mono, color: '#6b6355', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#e8dfc8'}
            onMouseLeave={e => e.currentTarget.style.color = '#6b6355'}
          >
            shrutikskupekar@gmail.com
          </a>
        </div>

        <div style={{ display: 'flex', gap: 36 }}>
          {[
            { href: 'https://github.com/shrutikkupekar', Icon: GitHubIcon, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/shrutik-kupekar/', Icon: LinkedInIcon, label: 'LinkedIn' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#6b6355', textDecoration: 'none',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#e8dfc8'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b6355'}
            >
              <Icon />
              <span style={{ ...mono, fontSize: 10 }}>{label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
