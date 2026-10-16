'use client';
import { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

export default function ScrambleText({ text, duration = 1100, delay = 0, style }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const totalFrames = Math.round(duration / 16);
    let frame = 0;
    let cancelled = false;
    let rafId;

    const timeout = setTimeout(() => {
      function tick() {
        if (cancelled) return;
        const progress = frame / totalFrames;
        const result = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            const revealThreshold = i / text.length;
            if (progress > revealThreshold + 0.2) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');

        setDisplay(result);
        frame++;

        if (frame <= totalFrames) {
          rafId = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
        }
      }
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [text, duration, delay]);

  return <span style={style}>{display}</span>;
}
