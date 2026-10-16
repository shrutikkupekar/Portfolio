'use client';
import { useEffect, useRef } from 'react';

const LIGHT = ['#f0f0f0', '#e2e8f0', '#ffffff', '#d4d4d4', '#f8fafc'];
const ACCENT = ['#4f8ef7', '#3fb950', '#a78bfa', '#f59e0b'];

export default function PixelCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let pixels = [];
    let raf;
    let lastMove = Date.now();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawn = (x, y) => {
      for (let i = 0; i < 12; i++) {
        const isLight = Math.random() < 0.7;
        const palette = isLight ? LIGHT : ACCENT;
        pixels.push({
          x: x + (Math.random() - 0.5) * 60,
          y: y + (Math.random() - 0.5) * 60,
          size: 4 + Math.random() * 6,
          color: palette[Math.floor(Math.random() * palette.length)],
          opacity: 0.8 + Math.random() * 0.2,
          dx: (Math.random() - 0.5) * 1.5,
          dy: (Math.random() - 0.5) * 1.5,
          life: -(Math.random() * 100),
          maxLife: 600 + Math.random() * 400,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const idleMs = Date.now() - lastMove;
      const idleFactor = idleMs > 2000 ? Math.max(0, 1 - (idleMs - 2000) / 1500) : 1;

      pixels = pixels.filter(p => p.life < p.maxLife);

      for (const p of pixels) {
        p.life += 16;
        if (p.life < 0) continue;
        const progress = p.life / p.maxLife;
        const alpha = p.opacity * (1 - progress) * idleFactor;
        if (alpha <= 0.01) continue;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), Math.round(p.size), Math.round(p.size));
        p.x += p.dx;
        p.y += p.dy;
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      lastMove = Date.now();
      spawn(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', onMove);
    draw();

    // Mobile: ambient floating pixels
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    let ambientInterval;
    if (isMobile) {
      ambientInterval = setInterval(() => {
        spawn(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
      }, 400);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      if (ambientInterval) clearInterval(ambientInterval);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
