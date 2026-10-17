'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const JOBS = [
  {
    company: 'CSUF',
    role: 'Instructional Lab Assistant · Fullerton, CA',
    period: 'Aug 2025 – May 2026',
    bullets: [
      'Supported 150+ CPSC 120/121 students with C++ programming, OOP, memory management, debugging, and runtime error resolution',
      'Reviewed 100+ student code submissions while reinforcing programming best practices, algorithmic efficiency, and clean coding standards',
    ],
  },
  {
    company: 'SAAA Consultants',
    role: 'Software Developer · Mumbai, India',
    period: 'Jun 2023 – Jul 2024',
    bullets: [
      'Developed full-stack web applications using React, Node.js, Express.js, and MySQL across 20+ client projects, translating client requirements into functional software solutions',
      'Built RESTful APIs and optimized SQL queries and database indexing to enhance application data access and performance',
      'Optimized page-load performance by 45% through code splitting, lazy loading, frontend optimization, and efficient API interactions',
      'Enhanced website responsiveness and user experience through UI/UX optimization and frontend-backend integration',
    ],
  },
  {
    company: 'Fineappl',
    role: 'Software Developer & Technical Lead · Mumbai, India',
    period: 'May 2022 – Dec 2022',
    bullets: [
      'Joined as the startup\'s first technical employee, establishing foundational system architecture and engineering standards while helping grow the engineering team to 5 members',
      'Collaborated directly with the CEO on system architecture and key technical decisions for a mental health application',
      'Increased weekly active users by 70% through UI/UX improvements, offline-first functionality, and background synchronization',
      'Contributed to developer hiring and mentorship while establishing code review standards and engineering best practices',
    ],
  },
  {
    company: 'Cyberrace Infovision',
    role: 'Python Developer Intern · Mumbai, India',
    period: 'Mar 2020 – Jun 2020',
    bullets: [
      'Programmed a Python analytics application using Tkinter and MySQL to visualize, process, and analyze structured datasets',
      'Automated data validation and transformation workflows, eliminating 10+ hours of manual processing per week while achieving 99%+ accuracy',
      'Used MySQL queries to support data processing, analytics, and reporting across structured relational datasets',
    ],
  },
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

export default function ExperienceSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ padding: '120px 0' }}>
      <motion.div {...fadeUp} style={{ marginBottom: 72 }}>
        <p style={labelStyle}>E X P E R I E N C E</p>
        <h2 style={bigHeading}>Where I've Worked.</h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {JOBS.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ x: 8 }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            style={{ padding: '40px 0' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
              <h3 style={{
                fontFamily: 'var(--font-syne, system-ui)',
                fontSize: 28, fontWeight: 700,
                color: hovered === i ? '#e8dfc8' : '#c8b89a',
                letterSpacing: '-0.01em',
                transition: 'color 0.2s',
              }}>
                {job.company}
              </h3>
              <span style={{
                fontFamily: 'var(--font-jetbrains, monospace)',
                fontSize: 12, color: '#6b6355', letterSpacing: '0.1em',
              }}>
                {job.period}
              </span>
            </div>

            <p style={{
              fontFamily: 'var(--font-jetbrains, monospace)',
              fontSize: 11, color: '#6b6355',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: 20,
            }}>
              {job.role}
            </p>

            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{
                  fontFamily: 'var(--font-inter, system-ui)',
                  fontSize: 14, color: '#6b6355', lineHeight: 1.8,
                  display: 'flex', gap: 12,
                }}>
                  <span style={{ color: '#3a3228', flexShrink: 0 }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
