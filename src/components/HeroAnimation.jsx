import React, { useEffect, useRef } from 'react';

export default function HeroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const sim = {
      animationFrameId: null,
      width: window.innerWidth,
      height: window.innerHeight,
      tick: 0,
      particles: [],
      cardRects: [],
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const setupCanvas = () => {
      sim.width = window.innerWidth;
      sim.height = window.innerHeight;
      canvas.width = sim.width * dpr;
      canvas.height = sim.height * dpr;
      canvas.style.width = `${sim.width}px`;
      canvas.style.height = `${sim.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Dynamically track all visible .interactive-card elements via getBoundingClientRect()
    const updateCardRects = () => {
      const elements = document.querySelectorAll('.interactive-card');
      const rects = [];
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (el.closest('[aria-hidden="true"]')) continue;
        const rect = el.getBoundingClientRect();
        if (
          rect.width > 0 &&
          rect.height > 0 &&
          rect.bottom > 0 &&
          rect.top < sim.height &&
          rect.right > 0 &&
          rect.left < sim.width
        ) {
          rects.push({
            left: rect.left,
            right: rect.right,
            top: rect.top,
            bottom: rect.bottom,
          });
        }
      }
      sim.cardRects = rects;
    };

    setupCanvas();
    updateCardRects();

    const mouse = {
      x: null,
      y: null,
      targetX: null,
      targetY: null,
      radius: 180,
      isActive: false,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      if (mouse.x === null) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      mouse.isActive = true;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        if (mouse.x === null) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        }
        mouse.isActive = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    const handleScroll = () => {
      updateCardRects();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Base palette: jade, teal, emerald and slate
    const palette = [
      { r: 45, g: 212, b: 191 },  // teal-400
      { r: 20, g: 184, b: 166 },  // teal-500
      { r: 52, g: 211, b: 153 },  // emerald-400
      { r: 148, g: 163, b: 184 }, // slate-400
      { r: 100, g: 116, b: 139 }, // slate-500
    ];

    // Vibrant purple-fuchsia colors when inside an .interactive-card (#a855f7 and #ec4899)
    const cardPalette = [
      { r: 168, g: 85, b: 247, hex: '#a855f7' }, // purple-500
      { r: 236, g: 72, b: 153, hex: '#ec4899' }, // pink-500 / fuchsia
    ];

    const getParticleCount = () => {
      const area = sim.width * sim.height;
      return Math.min(Math.max(Math.floor(area / 15000), 45), 105);
    };

    const createParticles = () => {
      const count = getParticleCount();
      sim.particles.length = 0;
      for (let i = 0; i < count; i++) {
        const color = palette[Math.floor(Math.random() * palette.length)];
        const activeCardColor = cardPalette[i % cardPalette.length];
        const speed = 0.14 + Math.random() * 0.3;
        const angle = Math.random() * Math.PI * 2;
        sim.particles.push({
          x: Math.random() * sim.width,
          y: Math.random() * sim.height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          baseVx: Math.cos(angle) * speed,
          baseVy: Math.sin(angle) * speed,
          size: 1.0 + Math.random() * 1.6,
          color,
          activeCardColor,
          alpha: 0.16 + Math.random() * 0.32,
          pulseSpeed: 0.006 + Math.random() * 0.012,
          pulseOffset: Math.random() * Math.PI * 2,
          inCard: false,
        });
      }
    };

    createParticles();

    const handleResize = () => {
      setupCanvas();
      createParticles();
      updateCardRects();
    };

    window.addEventListener('resize', handleResize);

    const isInsideAnyCard = (x, y, rects) => {
      for (let k = 0; k < rects.length; k++) {
        const r = rects[k];
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
          return true;
        }
      }
      return false;
    };

    const animate = () => {
      sim.tick += 1;
      // Periodically refresh card rects to capture sliding transitions smoothly
      if (sim.tick % 20 === 0) {
        updateCardRects();
      }

      const { width, height, particles, tick, cardRects } = sim;
      ctx.clearRect(0, 0, width, height);

      if (mouse.isActive && mouse.targetX !== null && mouse.targetY !== null) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;

        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.5
        );
        cursorGlow.addColorStop(0, 'rgba(45, 212, 191, 0.045)');
        cursorGlow.addColorStop(0.5, 'rgba(168, 85, 247, 0.02)');
        cursorGlow.addColorStop(1, 'rgba(15, 23, 42, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.isActive && mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = mouse.radius;

          if (distSq < maxDist * maxDist && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = (maxDist - dist) / maxDist;
            const nx = dx / dist;
            const ny = dy / dist;
            const repelStrength = force * force * 1.35;
            const swirlStrength = force * 0.18;

            p.vx += nx * repelStrength - ny * swirlStrength;
            p.vy += ny * repelStrength + nx * swirlStrength;
          }
        }

        p.vx += (p.baseVx - p.vx) * 0.045;
        p.vy += (p.baseVy - p.vy) * 0.045;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Check if particle (x, y) is inside any .interactive-card bounding box
        const inCard = isInsideAnyCard(p.x, p.y, cardRects);
        p.inCard = inCard;

        const baseAlpha =
          p.alpha + Math.sin(tick * p.pulseSpeed + p.pulseOffset) * 0.07;

        const drawColor = inCard ? p.activeCardColor : p.color;
        const drawSize = inCard ? p.size * 1.35 : p.size;
        const drawAlpha = inCard
          ? Math.min(Math.max(baseAlpha * 2.2, 0.65), 0.92)
          : Math.max(0.08, baseAlpha);

        const speedSq = p.vx * p.vx + p.vy * p.vy;
        if (speedSq > 0.35 || inCard) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 4.5, p.y - p.vy * 4.5);
          ctx.strokeStyle = `rgba(${drawColor.r}, ${drawColor.g}, ${drawColor.b}, ${Math.min(
            drawAlpha * 0.65,
            0.55
          )})`;
          ctx.lineWidth = drawSize * 0.85;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // Subtle outer glow when particle is inside an interactive card
        if (inCard) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, drawSize * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${drawColor.r}, ${drawColor.g}, ${drawColor.b}, ${
            drawAlpha * 0.22
          })`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${drawColor.r}, ${drawColor.g}, ${drawColor.b}, ${drawAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const linkDistance = 130;

          if (distSq < linkDistance * linkDistance) {
            const dist = Math.sqrt(distSq);
            let lineAlpha = (1 - dist / linkDistance) * 0.095;

            if (mouse.isActive && mouse.x !== null && mouse.y !== null) {
              const mdx = (p.x + p2.x) * 0.5 - mouse.x;
              const mdy = (p.y + p2.y) * 0.5 - mouse.y;
              const mDistSq = mdx * mdx + mdy * mdy;
              if (mDistSq < mouse.radius * mouse.radius) {
                lineAlpha *= 1.85;
              }
            }

            const eitherInCard = inCard || p2.inCard;
            if (eitherInCard) {
              lineAlpha *= 1.9;
            }

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = eitherInCard
              ? `rgba(168, 85, 247, ${Math.min(lineAlpha, 0.38)})`
              : `rgba(148, 163, 184, ${Math.min(lineAlpha, 0.22)})`;
            ctx.lineWidth = eitherInCard ? 0.85 : 0.65;
            ctx.stroke();
          }
        }

        if (mouse.isActive && mouse.x !== null && mouse.y !== null) {
          const cdx = p.x - mouse.x;
          const cdy = p.y - mouse.y;
          const cDistSq = cdx * cdx + cdy * cdy;
          const cursorLinkDist = mouse.radius * 0.8;
          if (cDistSq < cursorLinkDist * cursorLinkDist) {
            const cDist = Math.sqrt(cDistSq);
            const cAlpha = (1 - cDist / cursorLinkDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = inCard
              ? `rgba(236, 72, 153, ${cAlpha * 1.4})`
              : `rgba(45, 212, 191, ${cAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      sim.animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (sim.animationFrameId) {
        cancelAnimationFrame(sim.animationFrameId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-transparent">
      {/* Subtle architectural radial lighting over the global radial gradient */}
      <div className="absolute -top-48 left-1/4 w-[42rem] h-[42rem] bg-teal-400/[0.04] rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] bg-violet-500/[0.04] rounded-full blur-3xl" />
      <div className="absolute -bottom-48 left-1/3 w-[38rem] h-[38rem] bg-emerald-400/[0.03] rounded-full blur-3xl" />
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
}
