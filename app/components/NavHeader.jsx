'use client';
import { useState, useEffect } from 'react';

const NAV = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100, width: '100%',
      background: scrolled ? 'rgba(19, 16, 8, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid #2a241a' : '1px solid transparent',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        paddingLeft: 'clamp(24px, 4vw, 64px)', paddingRight: 'clamp(24px, 4vw, 64px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        height: 64,
      }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none', border: 'none',
            fontFamily: 'var(--font-syne, system-ui)',
            fontWeight: 700, fontSize: 20, color: '#e8dfc8',
            letterSpacing: '-0.02em',
          }}
        >
          SK
        </button>

        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: 'none', border: 'none',
                fontFamily: 'var(--font-inter, system-ui)',
                fontSize: 15, color: '#a89880',
                position: 'relative', paddingBottom: 2, overflow: 'hidden',
              }}
            >
              {label}
              <span style={{
                position: 'absolute', bottom: 0, left: 0,
                width: '100%', height: '1px',
                background: '#e8dfc8',
                transform: hovered === id ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.25s ease',
              }} />
            </button>
          ))}
          <a
            href="/Shrutik_Kupekar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={e => {
              e.currentTarget.style.background = '#e8dfc8';
              e.currentTarget.style.color = '#131008';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e8dfc8';
            }}
            style={{
              fontFamily: 'var(--font-inter, system-ui)',
              fontSize: 14, color: '#e8dfc8',
              textDecoration: 'none',
              border: '1px solid #e8dfc8',
              borderRadius: 2,
              padding: '5px 14px',
              letterSpacing: '0.02em',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
