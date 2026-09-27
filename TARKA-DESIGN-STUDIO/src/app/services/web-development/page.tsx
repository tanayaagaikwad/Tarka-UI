import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { MagneticLink } from '@/components/MagneticButton';

export default function WebDevelopmentPage() {
    return (
        <div className="bg-[var(--ink)] text-white w-full rounded-t-[40px] mt-2 mb-20 overflow-hidden min-h-[90vh]">
            <div className="wrap py-24">
                <SectionHeading eyebrow="Digital Engineering" title="Web Development" className="mb-0" />
                <p className="mt-8 text-[var(--muted-on-ink)] max-w-[60ch] leading-relaxed">
                    Building performant, accessible, and cinematic web experiences. We don&apos;t just paste code; we engineer systems that grow with your brand while delivering pixel-perfect interactions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
                    <div className="border border-white/10 rounded-sm p-8 bg-white/5 font-mono text-[13px] relative overflow-hidden flex flex-col group transition-colors hover:bg-white/10 hover:border-white/20">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--duck)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        <span className="text-[var(--duck)] block mb-6">{'// Capabilities'}</span>
                        <ul className="space-y-4 text-white/70 flex-grow">
                            <li className="flex items-center gap-3"><span className="text-[var(--duck)]">+</span> Premium Marketing Sites</li>
                            <li className="flex items-center gap-3"><span className="text-[var(--duck)]">+</span> React / Next.js Applications</li>
                            <li className="flex items-center gap-3"><span className="text-[var(--duck)]">+</span> GSAP / WebGL Interactions</li>
                            <li className="flex items-center gap-3"><span className="text-[var(--duck)]">+</span> Headless E-commerce</li>
                        </ul>
                    </div>

                    <div className="border border-white/10 rounded-sm p-8 bg-white/5 font-mono text-[13px] relative overflow-hidden flex flex-col group transition-colors hover:bg-white/10 hover:border-white/20">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--duck)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        <span className="text-[var(--duck)] block mb-6">{'// Stack'}</span>
                        <ul className="space-y-4 text-white/70 flex-grow">
                            <li className="flex items-center gap-3"><span className="text-[var(--duck)]">&gt;</span> React.js & Next.js</li>
                            <li className="flex items-center gap-3"><span className="text-[var(--duck)]">&gt;</span> TypeScript</li>
                            <li className="flex items-center gap-3"><span className="text-[var(--duck)]">&gt;</span> Tailwind CSS</li>
                            <li className="flex items-center gap-3"><span className="text-[var(--duck)]">&gt;</span> Framer Motion & GSAP</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 flex justify-center">
                    <MagneticLink href="/quote" variant="primary">Start a Project</MagneticLink>
                </div>
            </div>
        </div>
    );
}
