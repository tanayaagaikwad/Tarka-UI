'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * TARKA opening identity transition.
 * Slow, deliberate reveal: the mark is readable first, then the two halves
 * separate while the revolving ring expands into the page.
 */
export default function Loader() {
    const loaderRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const ringInnerRef = useRef<HTMLDivElement>(null);
    const leftLogoRef = useRef<HTMLDivElement>(null);
    const rightLogoRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const ctx = gsap.context(() => {
            if (reducedMotion) {
                gsap.set(loaderRef.current, { autoAlpha: 0, pointerEvents: 'none' });
                return;
            }

            gsap.set(loaderRef.current, { autoAlpha: 1 });
            gsap.set(ringRef.current, { scale: 0.62, rotation: -35, opacity: 0 });
            gsap.set(ringInnerRef.current, { scale: 0.76, opacity: 0 });
            gsap.set(glowRef.current, { scale: 0.45, opacity: 0 });
            gsap.set([leftLogoRef.current, rightLogoRef.current], {
                x: 0,
                opacity: 0,
                scale: 0.86,
            });
            gsap.set(progressRef.current, { scaleX: 0, transformOrigin: 'left center' });

            const tl = gsap.timeline({
                defaults: { overwrite: 'auto' },
                onComplete: () => {
                    gsap.set(loaderRef.current, { autoAlpha: 0, pointerEvents: 'none' });
                },
            });

            // 1 — Give the mark time to arrive and become recognizable.
            tl.to(glowRef.current, {
                scale: 1,
                opacity: 0.34,
                duration: 0.9,
                ease: 'power2.out',
            })
                .to(ringRef.current, {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    duration: 1.15,
                    ease: 'power3.out',
                }, '-=0.55')
                .to(ringInnerRef.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power2.out',
                }, '-=0.75')
                .to([leftLogoRef.current, rightLogoRef.current], {
                    opacity: 1,
                    scale: 1,
                    duration: 1.0,
                    ease: 'power3.out',
                    stagger: 0.08,
                }, '-=0.7')
                .to(progressRef.current, {
                    scaleX: 1,
                    duration: 1.0,
                    ease: 'power2.inOut',
                }, '-=0.35');

            // 2 — Hold the complete logo on screen. This is intentionally slow.
            tl.to({}, { duration: 1.05 });

            // 3 — One calm revolution before the split.
            tl.to(ringRef.current, {
                rotation: 360,
                duration: 1.35,
                ease: 'power1.inOut',
            });

            // 4 — Split the TARKA mark, then let the ring become the reveal.
            tl.add('split')
                .to(leftLogoRef.current, {
                    xPercent: -145,
                    rotation: -7,
                    opacity: 0,
                    duration: 0.85,
                    ease: 'power4.inOut',
                }, 'split')
                .to(rightLogoRef.current, {
                    xPercent: 145,
                    rotation: 7,
                    opacity: 0,
                    duration: 0.85,
                    ease: 'power4.inOut',
                }, 'split')
                .to(ringRef.current, {
                    scale: 18,
                    rotation: 520,
                    opacity: 0,
                    duration: 1.35,
                    ease: 'power4.inOut',
                }, 'split+=0.12')
                .to(ringInnerRef.current, {
                    scale: 14,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power4.inOut',
                }, 'split+=0.16')
                .to(glowRef.current, {
                    scale: 8,
                    opacity: 0,
                    duration: 1.15,
                    ease: 'power3.inOut',
                }, 'split+=0.15')
                .to(loaderRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                }, 'split+=0.95');
        }, loaderRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={loaderRef}
            className="site-loader fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-[var(--ink)]"
            aria-hidden="true"
        >
            <div
                ref={glowRef}
                className="pointer-events-none absolute h-[34vmin] w-[34vmin] rounded-full bg-[var(--duck)] blur-[90px]"
            />

            <div
                ref={ringRef}
                className="pointer-events-none absolute h-[min(48vw,360px)] w-[min(48vw,360px)] rounded-full border border-[var(--duck)]/70"
            >
                <span className="absolute -top-[3px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[var(--duck)]" />
                <span className="absolute -bottom-[3px] left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-white/60" />
            </div>

            <div
                ref={ringInnerRef}
                className="pointer-events-none absolute h-[min(34vw,255px)] w-[min(34vw,255px)] rounded-full border border-white/10"
            />

            <div className="relative z-10 h-[190px] w-[190px] md:h-[230px] md:w-[230px]">
                <div
                    ref={leftLogoRef}
                    className="absolute inset-0 overflow-hidden will-change-transform"
                    style={{ clipPath: 'inset(0 50% 0 0)' }}
                >
                    <Image
                        src="/tarka-logo.png"
                        alt="Tarka"
                        width={591}
                        height={591}
                        priority
                        className="h-full w-full object-contain brightness-0 invert"
                    />
                </div>

                <div
                    ref={rightLogoRef}
                    className="absolute inset-0 overflow-hidden will-change-transform"
                    style={{ clipPath: 'inset(0 0 0 50%)' }}
                >
                    <Image
                        src="/tarka-logo.png"
                        alt=""
                        width={591}
                        height={591}
                        priority
                        className="h-full w-full object-contain brightness-0 invert"
                    />
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 w-[min(260px,62vw)] -translate-x-1/2">
                <div className="mb-2 flex items-center justify-between font-sans text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
                    <span>TARKA</span>
                    <span>DESIGN STUDIO</span>
                </div>
                <div className="h-px w-full overflow-hidden bg-white/10">
                    <div ref={progressRef} className="h-full w-full origin-left bg-[var(--duck)]" />
                </div>
            </div>
        </div>
    );
}
