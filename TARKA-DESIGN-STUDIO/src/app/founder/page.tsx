import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { MagneticLink } from '@/components/MagneticButton';

export default function FounderPage() {
    return (
        <div className="wrap py-24 min-h-screen text-[var(--ink)]">
            <SectionHeading eyebrow="Founder" title="Built on a specific logic." className="mb-0" />

            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 mt-20">
                <div className="w-full aspect-[4/5] bg-[var(--ink)] rounded-sm flex items-center justify-center md:top-24 md:sticky self-start overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--duck)_0%,transparent_70%)] opacity-20 blur-xl"></div>
                    <span className="text-white/40 text-sm tracking-widest uppercase z-10">Founder Portrait</span>
                </div>

                <div className="flex flex-col gap-10 lg:pt-10">
                    <p className="font-serif text-2xl leading-[1.4] text-[var(--duck-dark)] italic">
                        &ldquo;Design isn&apos;t just decoration. It&apos;s the mechanism through which people understand your product. If the mechanism is broken, the product fails.&rdquo;
                    </p>

                    <div className="space-y-6 text-[15.5px] leading-relaxed text-[var(--muted)]">
                        <p>
                            Tarka Design Studio was built on a simple premise: strategy needs to live inside the code, not just on a presentation deck.
                        </p>
                        <p>
                            Before starting the studio, I spent years seeing beautiful designs compromised in development, or excellent engineering let down by poor interfaces. The gap between thinking and building was where products died.
                        </p>
                        <p>
                            Tarka exists to close that gap. We don&apos;t just supply mockups or hand off vague directions. We engineer the experiences we design. This means understanding the medium deeply—knowing when to push the browser to its limits, and when restraint is the more sophisticated choice.
                        </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-[var(--line)]">
                       <MagneticLink href="mailto:founder@tarkadesign.com" variant="secondary" className="border border-[var(--line)]">
                          Contact Us
                       </MagneticLink>
                    </div>

                </div>
            </div>
        </div>
    );
}
