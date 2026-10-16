'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    num: '01',
    name: 'Serverless AI Chat Application',
    stack: 'AWS · OpenAI · Next.js',
    year: '2024',
    desc: 'Serverless chat with AI-powered summarize, rewrite, and fact-check. Persistent state in DynamoDB.',
    live: 'https://skynet-ai-chat-app.vercel.app/',
    github: 'https://github.com/shrutikkupekar',
  },
  {
    num: '02',
    name: 'AI News Intelligence Platform',
    stack: 'Kafka · FastAPI · pgvector',
    year: '2024',
    desc: 'Distributed article ingestion with semantic dedup, Kafka pipeline, Redis cache, and RAG-based Q&A.',
    live: null,
    github: 'https://github.com/shrutikkupekar',
  },
  {
    num: '03',
    name: 'Job Quest',
    stack: 'React · Vite · Node.js · Express · SQLite · JWT · PWA',
    year: '2025',
    desc: 'Job application tracker with JWT auth, custom Sand/Espresso themes, and a PWA-ready frontend backed by an Express + SQLite REST API.',
    live: 'https://job-quest-mauve.vercel.app/login',
    github: 'https://github.com/shrutikkupekar',
  },
];

const label = {
  fontFamily: 'var(--font-jetbrains, monospace)',
  fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b6355',
};

export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="work" style={{ padding: '100px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ marginBottom: 56 }}
      >
        <p style={label}>W O R K</p>
        <p style={{
          fontFamily: 'var(--font-inter, system-ui)',
          fontSize: 18, color: '#6b6355', marginTop: 16,
        }}>
          Selected projects and things I've built.
        </p>
      </motion.div>

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
            style={{
              borderTop: '1px solid #2a241a',
              padding: '36px 0',
              transition: 'color 0.2s',
            }}
          >
            <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
              {/* Number */}
              <span style={{
                fontFamily: 'var(--font-syne, system-ui)',
                fontSize: 24, fontWeight: 700,
                color: hovered === i ? '#6b6355' : '#2a241a',
                minWidth: 44, lineHeight: 1.1,
                transition: 'color 0.2s',
              }}>
                {p.num}
              </span>

              {/* Content */}
              <div style={{ flex: 1 }}>
                {/* Name row */}
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

                {/* Stack */}
                <p style={{
                  fontFamily: 'var(--font-jetbrains, monospace)',
                  fontSize: 12, color: '#6b6355',
                  letterSpacing: '0.08em', marginBottom: 12,
                }}>
                  {p.stack}
                </p>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-inter, system-ui)',
                  fontSize: 14, color: '#6b6355', lineHeight: 1.8, marginBottom: 18,
                }}>
                  {p.desc}
                </p>

                {/* Links */}
                <div style={{ display: 'flex', gap: 20 }}>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-inter, system-ui)',
                        fontSize: 13, color: '#6b6355',
                        textDecoration: 'underline', textUnderlineOffset: 3,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#e8dfc8'}
                      onMouseLeave={e => e.currentTarget.style.color = '#6b6355'}
                    >
                      → github.com/shrutikkupekar
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-inter, system-ui)',
                        fontSize: 13, color: '#6b6355',
                        textDecoration: 'underline', textUnderlineOffset: 3,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#e8dfc8'}
                      onMouseLeave={e => e.currentTarget.style.color = '#6b6355'}
                    >
                      ↗ Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div style={{ borderTop: '1px solid #2a241a' }} />
      </div>
    </section>
  );
}
