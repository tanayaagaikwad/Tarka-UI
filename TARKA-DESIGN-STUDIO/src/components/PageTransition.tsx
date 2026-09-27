"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const firstRender = useRef(true);

    useEffect(() => {
        // The opening Loader owns the initial entrance. This transition is only
        // for navigation between pages, preventing two full-screen animations
        // from fighting on first load.
        if (firstRender.current) {
            firstRender.current = false;
            gsap.set(overlayRef.current, { scaleY: 0, transformOrigin: 'top' });
            gsap.set(contentRef.current, { opacity: 1, y: 0 });
            return;
        }

        if (!overlayRef.current || !contentRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Cover the outgoing page from the top.
            tl.set(overlayRef.current, {
                scaleY: 1,
                transformOrigin: 'top',
            })
                // Reveal the new page with a restrained lift.
                .to(overlayRef.current, {
                    scaleY: 0,
                    duration: 0.72,
                    ease: 'power4.inOut',
                    transformOrigin: 'top',
                })
                .fromTo(contentRef.current,
                    { opacity: 0.65, y: 18 },
                    { opacity: 1, y: 0, duration: 0.58, ease: 'power3.out' },
                    '-=0.34'
                );
        });

        return () => ctx.revert();
    }, [pathname]);

    return (
        <>
            <div
                ref={overlayRef}
                className="pointer-events-none fixed inset-0 z-[600] origin-top bg-[var(--duck)]"
                style={{ transform: 'scaleY(0)' }}
            />
            <div ref={contentRef}>{children}</div>
        </>
    );
}
