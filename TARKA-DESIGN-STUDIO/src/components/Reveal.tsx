'use client';
import { type HTMLAttributes, useEffect, useRef, useState } from 'react';
export default function Reveal({ children, className = '', delay = 0, ...props }: HTMLAttributes<HTMLDivElement> & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null); const [visible, setVisible] = useState(false);
  useEffect(() => { const element = ref.current; if (!element) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: .12 }); observer.observe(element); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...props}>{children}</div>;
}
