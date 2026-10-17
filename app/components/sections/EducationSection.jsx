'use client';
import { motion } from 'framer-motion';

const EDU = [
  {
    degree: 'M.S. Computer Science',
    school: 'Cal State Fullerton',
    period: 'Aug 2024 – May 2026',
    meta: 'GPA: 3.76',
    courses: ['Distributed Systems', 'Algorithms', 'Machine Learning', 'Databases'],
  },
  {
    degree: 'B.E. Computer Engineering',
    school: 'University of Mumbai',
    period: 'Aug 2018 – May 2022',
    meta: null,
    courses: ['DS', 'OOP', 'System Design'],
  },
];

const label = {
  fontFamily: 'var(--font-jetbrains, monospace)',
  fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#6b6355',
};

const mono = {
  fontFamily: 'var(--font-jetbrains, monospace)',
  fontSize: 12, color: '#6b6355', letterSpacing: '0.08em',
};

export default function EducationSection() {
  return (
    <section style={{ padding: '100px 0' }}>
      <motion.p
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ ...label, marginBottom: 64 }}
      >
        E D U C A T I O N
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        {EDU.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ borderTop: '1px solid #2a241a', paddingTop: 28 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-syne, system-ui)',
              fontSize: 22, fontWeight: 700, color: '#e8dfc8',
              letterSpacing: '-0.01em', marginBottom: 8,
            }}>
              {e.degree}
            </h3>

            <p style={{ ...mono, marginBottom: 6 }}>{e.school}</p>

            <p style={{ ...mono, marginBottom: 20 }}>
              {e.period}{e.meta ? ` · ${e.meta}` : ''}
            </p>

            <p style={{
              fontFamily: 'var(--font-inter, system-ui)',
              fontSize: 14, color: '#6b6355', lineHeight: 1.8,
            }}>
              {e.courses.join(' · ')}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
