'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const labelStyle = {
  fontFamily: 'var(--font-jetbrains, monospace)',
  fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b6355',
};

const bigHeading = {
  fontFamily: 'var(--font-syne, system-ui)',
  fontSize: 'clamp(72px, 10vw, 130px)',
  fontWeight: 800,
  color: '#e8dfc8',
  lineHeight: 0.95,
  letterSpacing: '-0.03em',
  margin: 0,
  marginTop: 12,
};

export default function AboutSection() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="about" style={{ padding: '120px 0' }}>
      <motion.div {...fadeUp} style={{ marginBottom: 72 }}>
        <p style={labelStyle}>A B O U T</p>
        <h2 style={bigHeading}>Who I Am.</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 72, alignItems: 'start' }}>
        {/* Left — text */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h3 style={{
            fontFamily: 'var(--font-syne, system-ui)',
            fontSize: 'clamp(24px, 2.5vw, 36px)',
            fontWeight: 700, letterSpacing: '-0.02em',
            color: '#e8dfc8', lineHeight: 1.2, marginBottom: 36,
          }}>
            Building reliable software<br />at every layer of the stack.
          </h3>

          <p style={{
            fontFamily: 'var(--font-inter, system-ui)',
            fontSize: 16, color: '#6b6355', lineHeight: 1.9, marginBottom: 20,
          }}>
            I'm a fullstack engineer with 2+ years of experience across two startups and 20+ client projects.
            I've shipped everything from distributed Kafka pipelines and serverless AWS architectures to
            polished React frontends — fast, reliably, end to end.
          </p>

          <p style={{
            fontFamily: 'var(--font-inter, system-ui)',
            fontSize: 16, color: '#6b6355', lineHeight: 1.9, marginBottom: 48,
          }}>
            Completed my M.S. in Computer Science at CSUF (GPA 3.76). I thrive in environments
            where I wear multiple hats: architecture, frontend, backend, client meetings, and mentoring.
          </p>

          <div style={{ display: 'flex', gap: 48 }}>
            {[
              { value: '2+', label: 'Years' },
              { value: '20+', label: 'Projects' },
            ].map(s => (
              <div key={s.label}>
                <p style={{
                  fontFamily: 'var(--font-syne, system-ui)',
                  fontSize: 36, fontWeight: 700, color: '#e8dfc8',
                  letterSpacing: '-0.02em', lineHeight: 1,
                }}>{s.value}</p>
                <p style={{ ...labelStyle, fontSize: 10, marginTop: 8 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div style={{
            width: '100%', maxWidth: 280, height: 380,
            border: '1px solid #2a241a',
            borderRadius: 4, overflow: 'hidden',
            background: '#1a1510',
          }}>
            {!photoError ? (
              <img
                src="/photo.jpg"
                alt="Shrutik Kupekar"
                onError={() => setPhotoError(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-syne, system-ui)',
                fontSize: 56, fontWeight: 700,
                color: 'rgba(200, 169, 110, 0.15)',
                letterSpacing: '-0.03em',
              }}>
                SK
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
