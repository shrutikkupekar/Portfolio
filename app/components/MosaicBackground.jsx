'use client';
import { useEffect } from 'react';

const blockSize = 40;
const baseColor = { r: 19, g: 16, b: 8 };

function initBlocks(W, H) {
  const blocks = [];
  const cols = Math.ceil(W / blockSize);
  const rows = Math.ceil(H / blockSize);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      blocks.push({
        col, row,
        brightness: (Math.random() - 0.5) * 16,
        target: (Math.random() - 0.5) * 16,
        speed: 0.05 + Math.random() * 0.05,
        nextChange: 20 + Math.random() * 60,
        lastDrawn: null,
      });
    }
  }
  return blocks;
}

function drawAll(ctx, blocks) {
  blocks.forEach(b => {
    const v = b.brightness;
    const r = Math.min(255, Math.max(0, 19 + v));
    const g = Math.min(255, Math.max(0, 16 + v));
    const bv = Math.min(255, Math.max(0, 8 + v));
    ctx.fillStyle = `rgb(${r},${g},${bv})`;
    ctx.fillRect(b.col * blockSize, b.row * blockSize, blockSize, blockSize);
    b.lastDrawn = b.brightness;
  });
}

function startAnimation(ctx, blocks) {
  let rafId;

  function tick() {
    blocks.forEach(b => {
      b.brightness += (b.target - b.brightness) * b.speed;
      b.nextChange--;
      if (b.nextChange <= 0) {
        b.target = (Math.random() - 0.5) * 16;
        b.nextChange = 20 + Math.random() * 60;
      }
      if (b.lastDrawn === null || Math.abs(b.brightness - b.lastDrawn) > 0.5) {
        const v = b.brightness;
        const r = Math.min(255, Math.max(0, 19 + v));
        const g = Math.min(255, Math.max(0, 16 + v));
        const bv = Math.min(255, Math.max(0, 8 + v));
        ctx.fillStyle = `rgb(${r},${g},${bv})`;
        ctx.fillRect(b.col * blockSize, b.row * blockSize, blockSize, blockSize);
        b.lastDrawn = b.brightness;
      }
    });
    rafId = requestAnimationFrame(tick);
  }

  tick();
  return () => cancelAnimationFrame(rafId);
}

export default function MosaicBackground() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const dpr = window.devicePixelRatio || 1;
    const cssW = document.documentElement.clientWidth;
    const cssH = document.documentElement.clientHeight;

    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = cssW + 'px';
    canvas.style.height = cssH + 'px';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';

    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const blocks = initBlocks(cssW, cssH);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      drawAll(ctx, blocks);
      return () => canvas.remove();
    }

    let cancelAnim = startAnimation(ctx, blocks);

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        cancelAnim();
        // force redraw all blocks so nothing is stale after background pause
        blocks.forEach(b => { b.lastDrawn = null; });
        cancelAnim = startAnimation(ctx, blocks);
      } else {
        cancelAnim();
      }
    };

    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnim();
      document.removeEventListener('visibilitychange', onVisibility);
      canvas.remove();
    };
  }, []);

  return null;
}
