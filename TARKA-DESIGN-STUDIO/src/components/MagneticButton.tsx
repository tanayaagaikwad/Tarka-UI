"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import Link, { type LinkProps } from 'next/link';

interface MagneticBaseProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
}

type MagneticButtonProps = MagneticBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type MagneticLinkProps = MagneticBaseProps & LinkProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

const baseClasses = 'magnetic-control relative inline-flex items-center gap-2 text-[14px] px-6 py-[12px] rounded-full overflow-hidden';
const variants = {
    primary: 'bg-[var(--duck)] text-white hover:bg-[#0d6f84]',
    secondary: 'bg-white text-[var(--ink)] hover:bg-[#f4f5f4]',
    outline: 'border border-white/40 text-white hover:bg-white hover:text-[var(--ink)] backdrop-blur-sm',
};

function useMagnetic<T extends HTMLElement>() {
    const controlRef = useRef<T>(null);
    const contentRef = useRef<HTMLSpanElement>(null);
    const isDesktop = () => window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches;

    const handleMouseMove = (event: React.MouseEvent<T>) => {
        if (!controlRef.current || !contentRef.current || !isDesktop()) return;
        const { height, width, left, top } = controlRef.current.getBoundingClientRect();
        const x = event.clientX - (left + width / 2);
        const y = event.clientY - (top + height / 2);
        gsap.to(controlRef.current, { x: x * 0.16, y: y * 0.16, duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
        gsap.to(contentRef.current, { x: x * 0.06, y: y * 0.06, duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
    };

    const handleMouseLeave = () => {
        if (!controlRef.current || !contentRef.current) return;
        gsap.to([controlRef.current, contentRef.current], { x: 0, y: 0, duration: 0.6, ease: 'power3.out', overwrite: 'auto' });
    };

    return { controlRef, contentRef, handleMouseMove, handleMouseLeave };
}

export default function MagneticButton({
    children,
    className = '',
    variant = 'primary',
    ...props
}: MagneticButtonProps) {
    const { controlRef, contentRef, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLButtonElement>();

    return (
        <button
            ref={controlRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            <span ref={contentRef} className="flex items-center gap-2 w-full h-full pointer-events-none">
                {children}
            </span>
        </button>
    );
}

export function MagneticLink({ children, className = '', variant = 'primary', ...props }: MagneticLinkProps) {
    const { controlRef, contentRef, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLAnchorElement>();
    return (
        <Link ref={controlRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
            <span ref={contentRef} className="flex items-center gap-2 w-full h-full pointer-events-none">{children}</span>
        </Link>
    );
}
