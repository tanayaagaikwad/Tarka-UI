"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px), (pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
    const move = (event: MouseEvent) => {
      setIsVisible(true);
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, { x: event.clientX, y: event.clientY, duration: .16, ease: 'power3.out', overwrite: 'auto' });
    };
    const enter = (event: MouseEvent) => {
      const target = (event.target as Element).closest('a, button, [data-cursor-view]');
      if (!target || !cursorRef.current) return;
      const view = target.hasAttribute('data-cursor-view'); cursorRef.current.dataset.view = view ? 'true' : '';
      gsap.to(cursorRef.current, { scale: view ? 5.2 : 2, opacity: view ? .95 : .5, backgroundColor: 'var(--duck)', duration: .2 });
    };
    const leave = (event: MouseEvent) => { const related = event.relatedTarget as Element | null; if (related?.closest?.('a, button, [data-cursor-view]') || !cursorRef.current) return; cursorRef.current.dataset.view = ''; gsap.to(cursorRef.current, { scale: 1, opacity: 1, backgroundColor: 'white', duration: .2 }); };
    const down = () => cursorRef.current && gsap.to(cursorRef.current, { scale: .8, duration: .1 });
    const up = () => cursorRef.current && gsap.to(cursorRef.current, { scale: 1, duration: .1 });
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    document.addEventListener('mousemove', move, { passive: true }); document.addEventListener('mouseover', enter); document.addEventListener('mouseout', leave); document.addEventListener('mousedown', down); document.addEventListener('mouseup', up);
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseover', enter); document.removeEventListener('mouseout', leave); document.removeEventListener('mousedown', down); document.removeEventListener('mouseup', up); };
  }, []);
  if (!isVisible) return null;
  return <div ref={cursorRef} className="custom-cursor fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform shadow-[0_0_10px_rgba(255,255,255,0.3)] hidden md:grid">VIEW</div>;
}
