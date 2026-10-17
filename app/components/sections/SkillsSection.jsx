'use client';
import { motion } from 'framer-motion';

const SKILLS = [
  { category: 'Languages',    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'C', 'C++', 'Java'] },
  { category: 'Frontend',     items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'] },
  { category: 'Backend',      items: ['Node.js', 'Express.js', 'REST APIs', 'FastAPI', 'Django', 'Spring Boot'] },
  { category: 'Databases',    items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Cloud & Tools', items: ['AWS', 'Docker', 'Git', 'Linux', 'CI/CD'] },
];

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

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function SkillsSection() {
  return (
    <section style={{ padding: '120px 0' }}>
      <motion.div {...fadeUp} style={{ marginBottom: 72 }}>
        <p style={labelStyle}>S K I L L S</p>
        <h2 style={bigHeading}>What I Know.</h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'flex', gap: 32, alignItems: 'baseline', flexWrap: 'wrap' }}
          >
            <p style={{ ...labelStyle, fontSize: 10, width: 120, flexShrink: 0 }}>
              {s.category}
            </p>
            <p style={{
              fontFamily: 'var(--font-inter, system-ui)',
              fontSize: 16, color: '#e8dfc8', lineHeight: 1.8,
            }}>
              {s.items.join(' · ')}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
