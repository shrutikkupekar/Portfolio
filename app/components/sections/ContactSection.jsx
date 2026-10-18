'use client';
import { motion } from 'framer-motion';

const GitHubIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const labelStyle = {
  fontFamily: 'var(--font-jetbrains, monospace)',
  fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b6355',
};

const bigHeading = {
  fontFamily: 'var(--font-syne, system-ui)',
  fontSize: 'clamp(36px, 10vw, 130px)',
  fontWeight: 800,
  color: '#e8dfc8',
  lineHeight: 0.95,
  letterSpacing: '-0.03em',
  margin: 0,
  marginTop: 12,
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '120px 0 80px' }}>
      <motion.div {...fadeUp} style={{ marginBottom: 56 }}>
        <p style={labelStyle}>C O N N E C T</p>
        <h2 style={bigHeading}>Let's Talk.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p style={{
          fontFamily: 'var(--font-inter, system-ui)',
          fontSize: 18, color: '#6b6355', marginBottom: 40, maxWidth: 480,
        }}>
          Open to internships, full-time roles, and interesting problems.
        </p>

        <a
          href="mailto:kupekarshrutik16@gmail.com"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-inter, system-ui)',
            fontSize: 24, fontWeight: 400, color: '#e8dfc8',
            textDecoration: 'underline', textUnderlineOffset: 4,
            marginBottom: 64, transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#c8a96e'}
          onMouseLeave={e => e.currentTarget.style.color = '#e8dfc8'}
        >
          kupekarshrutik16@gmail.com
        </a>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', marginBottom: 48 }}>
          {[
            { href: 'https://github.com/shrutikkupekar', Icon: GitHubIcon, label: 'GitHub', sub: 'github.com/shrutikkupekar' },
            { href: 'https://www.linkedin.com/in/shrutik-kupekar/', Icon: LinkedInIcon, label: 'LinkedIn', sub: 'linkedin.com/in/shrutik-kupekar' },
          ].map(({ href, Icon, label, sub }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#6b6355', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#e8dfc8'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b6355'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <Icon />
                <span style={{ fontFamily: 'var(--font-syne, system-ui)', fontSize: 20, fontWeight: 700 }}>
                  {label}
                  <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 5 }}><path d="M2 9L9 2M3.5 2H9v5.5"/></svg>
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-jetbrains, monospace)', fontSize: 12, letterSpacing: '0.05em' }}>{sub}</p>
            </a>
          ))}
        </div>

        <a
          href="/Shrutik_Kupekar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-jetbrains, monospace)',
            fontSize: 12, color: '#6b6355',
            textDecoration: 'underline', textUnderlineOffset: 3,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#e8dfc8'}
          onMouseLeave={e => e.currentTarget.style.color = '#6b6355'}
        >
          Download Resume <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 3 }}><path d="M2 9L9 2M3.5 2H9v5.5"/></svg>
        </a>
      </motion.div>

      <div style={{ marginTop: 80, paddingTop: 28 }}>
        <p style={{
          fontFamily: 'var(--font-jetbrains, monospace)',
          fontSize: 11, color: '#3a3228',
          letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          © 2026 Shrutik Kupekar · Built with Next.js
        </p>
      </div>
    </section>
  );
}
