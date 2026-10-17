'use client';
import { useEffect } from 'react';

const blockSize = 40;
const baseColor = { r: 19, g: 16, b: 8 };

function initBlocks(canvas) {
  const blocks = [];
  const cols = Math.ceil(canvas.width / blockSize);
  const rows = Math.ceil(canvas.height / blockSize);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      blocks.push({
        col, row,
        brightness: (Math.random() - 0.5) * 5,
        target: (Math.random() - 0.5) * 5,
        speed: 0.05 + Math.random() * 0.05,
        nextChange: 20 + Math.random() * 60,
        lastDrawn: 0,
      });
    }
  }
  return blocks;
}

function drawStatic(canvas, blocks) {
  const ctx = canvas.getContext('2d');
  blocks.forEach(b => {
    const r = Math.min(255, Math.max(0, baseColor.r + b.brightness));
    const g = Math.min(255, Math.max(0, baseColor.g + b.brightness));
    const bv = Math.min(255, Math.max(0, baseColor.b + b.brightness));
    ctx.fillStyle = `rgb(${r},${g},${bv})`;
    ctx.fillRect(b.col * blockSize, b.row * blockSize, blockSize, blockSize);
  });
}

function animateMosaic(canvas, blocks) {
  const ctx = canvas.getContext('2d');
  let rafId;

  function tick() {
    blocks.forEach(b => {
      b.brightness += (b.target - b.brightness) * b.speed;
      b.nextChange--;
      if (b.nextChange <= 0) {
        b.target = (Math.random() - 0.5) * 5;
        b.nextChange = 20 + Math.random() * 60;
      }
      if (Math.abs(b.brightness - b.lastDrawn) > 0.5) {
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
    const W = Math.floor(document.documentElement.clientWidth);
    const H = Math.floor(document.documentElement.clientHeight);

    canvas.width = W;
    canvas.height = H;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';

    document.body.insertBefore(canvas, document.body.firstChild);

    let blocks = initBlocks(canvas);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let cancelAnim;
    if (reduced) {
      drawStatic(canvas, blocks);
    } else {
      cancelAnim = animateMosaic(canvas, blocks);
    }

    return () => {
      if (cancelAnim) cancelAnim();
      canvas.remove();
    };
  }, []);

  return null;
}
