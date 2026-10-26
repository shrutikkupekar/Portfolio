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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 100, width: '100%',
        background: scrolled || menuOpen ? 'rgba(19, 16, 8, 0.97)' : 'transparent',
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
            onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-syne, system-ui)',
              fontWeight: 700, fontSize: 20, color: '#e8dfc8',
              letterSpacing: '-0.02em',
            }}
          >
            SK
          </button>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {NAV.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
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
              onMouseEnter={e => { e.currentTarget.style.background = '#e8dfc8'; e.currentTarget.style.color = '#131008'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#e8dfc8'; }}
              style={{
                fontFamily: 'var(--font-inter, system-ui)',
                fontSize: 14, color: '#e8dfc8',
                textDecoration: 'none',
                border: '1px solid #e8dfc8',
                borderRadius: 2,
                padding: '5px 14px',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                display: 'inline-flex', alignItems: 'center', gap: 5,
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              Resume
              <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9L9 2M3.5 2H9v5.5"/></svg>
            </a>
          </nav>

          {/* Mobile right side: Resume + burger */}
          <div className="nav-mobile" style={{ display: 'none', alignItems: 'center', gap: 12 }}>
            <a
              href="/Shrutik_Kupekar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-inter, system-ui)',
                fontSize: 13, color: '#e8dfc8',
                textDecoration: 'none',
                border: '1px solid #e8dfc8',
                borderRadius: 2,
                padding: '4px 10px',
                whiteSpace: 'nowrap',
                display: 'inline-flex', alignItems: 'center', gap: 4,
              }}
            >
              Resume
              <svg aria-hidden="true" width="10" height="10" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9L9 2M3.5 2H9v5.5"/></svg>
            </a>

            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#e8dfc8', padding: 4,
                display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center',
              }}
            >
              <span style={{
                display: 'block', width: 22, height: 1.5,
                background: '#e8dfc8',
                transition: 'transform 0.2s, opacity 0.2s',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }} />
              <span style={{
                display: 'block', width: 22, height: 1.5,
                background: '#e8dfc8',
                transition: 'opacity 0.2s',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: 22, height: 1.5,
                background: '#e8dfc8',
                transition: 'transform 0.2s, opacity 0.2s',
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{
            background: 'rgba(19, 16, 8, 0.97)',
            borderTop: '1px solid #2a241a',
            paddingBottom: 24,
          }}>
            {NAV.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-inter, system-ui)',
                  fontSize: 18, color: '#a89880',
                  padding: '16px clamp(24px, 4vw, 64px)',
                  borderBottom: '1px solid #1a1510',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
