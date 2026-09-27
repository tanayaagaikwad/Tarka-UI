'use client';
import { useEffect, useState } from 'react';
export default function ScrollProgress() { const [progress, setProgress] = useState(0); useEffect(() => { const update = () => setProgress((window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []); return <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>; }
