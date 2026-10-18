'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    num: '01',
    name: 'Serverless AI Chat Application',
    stack: 'AWS · OpenAI · Next.js',
    desc: 'Serverless chat with AI-powered summarize, rewrite, and fact-check. Persistent state in DynamoDB.',
    live: 'https://skynet-ai-chat-app.vercel.app/',
    github: 'https://github.com/shrutikkupekar',
    githubLabel: 'github.com/shrutikkupekar',
  },
  {
    num: '02',
    name: 'AI News Intelligence Platform',
    stack: 'Kafka · FastAPI · pgvector',
    desc: 'Distributed article ingestion with semantic dedup, Kafka pipeline, Redis cache, and RAG-based Q&A.',
    live: null,
    github: 'https://github.com/shrutikkupekar',
    githubLabel: 'github.com/shrutikkupekar',
  },
  {
    num: '03',
    name: 'comma.ai — connect (Open Source)',
    stack: 'React · Redux · JavaScript · Open Source',
    desc: 'Diagnosed and fixed a video playback bug in comma.ai\'s open-source connect web app. Replaced a broken redux-based stopwatch + 500ms sync loop with a design where the native video element drives playback time directly. Eliminated laggy seeks, loop glitches, and iOS Safari stalls. Contributed iOS hardware testing and a detailed PR review.',
    live: null,
    github: 'https://github.com/shrutikkupekar/connect/tree/video-playback',
    githubLabel: 'github.com/shrutikkupekar/connect',
  },
  {
    num: '04',
    name: 'Job Quest',
    stack: 'React · Vite · Node.js · Express · SQLite · JWT · PWA',
    desc: 'Job application tracker with JWT auth, custom Sand/Espresso themes, and a PWA-ready frontend backed by an Express + SQLite REST API.',
    live: 'https://job-quest-mauve.vercel.app/login',
    github: 'https://github.com/shrutikkupekar',
    githubLabel: 'github.com/shrutikkupekar',
  },
];

const ArrowRight = () => (
  <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }}>
    <path d="M1 5.5h9M6 2l4 3.5L6 9" />
  </svg>
);

const ArrowUpRight = () => (
  <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }}>
    <path d="M2 9L9 2M3.5 2H9v5.5" />
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

export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="work" style={{ padding: '120px 0' }}>
      <motion.div {...fadeUp} style={{ marginBottom: 64 }}>
        <p style={labelStyle}>W O R K</p>
        <h2 style={bigHeading}>Things I've Built.</h2>
      </motion.div>

      <motion.p
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          fontFamily: 'var(--font-inter, system-ui)',
          fontSize: 18, color: '#6b6355', marginBottom: 56,
        }}
      >
        Selected projects and things I've built.
      </motion.p>

      <div>
        {PROJECTS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ x: 8 }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            style={{ padding: '36px 0' }}
          >
            <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'var(--font-syne, system-ui)',
                fontSize: 24, fontWeight: 700,
                color: hovered === i ? '#6b6355' : '#2a241a',
                minWidth: 44, lineHeight: 1.1,
                transition: 'color 0.2s',
              }}>
                {p.num}
              </span>

              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: 10 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-syne, system-ui)',
                    fontSize: 28, fontWeight: 700,
                    color: hovered === i ? '#e8dfc8' : '#c8b89a',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s',
                  }}>
                    {p.name}
                  </h3>
                </div>

                <p style={{
                  fontFamily: 'var(--font-jetbrains, monospace)',
                  fontSize: 12, color: '#6b6355',
                  letterSpacing: '0.08em', marginBottom: 12,
                }}>
                  {p.stack}
                </p>

                <p style={{
                  fontFamily: 'var(--font-inter, system-ui)',
                  fontSize: 14, color: '#6b6355', lineHeight: 1.8, marginBottom: 18,
                }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: 'var(--font-inter, system-ui)', fontSize: 13, color: '#6b6355', textDecoration: 'underline', textUnderlineOffset: 3, transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#e8dfc8'}
                      onMouseLeave={e => e.currentTarget.style.color = '#6b6355'}
                    >
                      <ArrowRight />{p.githubLabel}
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: 'var(--font-inter, system-ui)', fontSize: 13, color: '#6b6355', textDecoration: 'underline', textUnderlineOffset: 3, transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#e8dfc8'}
                      onMouseLeave={e => e.currentTarget.style.color = '#6b6355'}
                    >
                      <ArrowUpRight />Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
