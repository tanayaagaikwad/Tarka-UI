import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import { MagneticLink } from '@/components/MagneticButton';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
    params: {
        project: string;
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    // In a real app, fetch project data by params.project
    const projectName = params.project.replace(/-/g, ' ');

    if (!projectName) {
        notFound();
    }

    return (
        <div className="w-full min-h-screen text-[var(--ink)] bg-[var(--paper)]">
            {/* Hero Image */}
            <div className="w-full h-[60vh] md:h-[80vh] bg-[var(--ink)] flex items-center justify-center relative border-b border-black/10">
                <span className="text-white/40 tracking-widest uppercase text-sm">Main Project Visual</span>
            </div>

            <div className="wrap py-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <SectionHeading eyebrow="Case Study" title={<span className="capitalize">{projectName}</span>} className="mb-0" />
                    <div className="flex flex-wrap gap-4 text-[13px] text-[var(--muted)]">
                        <div className="flex flex-col gap-1">
                            <span className="text-[var(--duck)] font-semibold">Services</span>
                            <span>Web Development<br />UI / UX Design</span>
                        </div>
                        <div className="flex flex-col gap-1 ml-4 md:ml-12 border-l border-[var(--line)] pl-4 md:pl-12">
                            <span className="text-[var(--duck)] font-semibold">Year</span>
                            <span>2026</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20">
                    <div className="md:col-span-8">
                        <h3 className="font-serif text-2xl mb-6 text-[var(--duck-dark)]">The Challenge</h3>
                        <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-12">
                            This space serves as a structural placeholder for real case study narratives. Tarka&apos;s approach to project documentation involves detailing the specific problems faced during product conception and the technical decisions made to solve them effectively.
                        </p>

                        <h3 className="font-serif text-2xl mb-6 text-[var(--duck-dark)]">The Approach</h3>
                        <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                            We started by deconstructing the requirement... (Placeholder content indicating where the rich narrative of the design and development process will live).
                        </p>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
                    <div className="aspect-[16/10] bg-[var(--paper-soft)] rounded-sm border border-[var(--line)] flex items-center justify-center text-[var(--muted)] text-xs">Gallery Image 1</div>
                    <div className="aspect-[16/10] bg-[var(--paper-soft)] rounded-sm border border-[var(--line)] flex items-center justify-center text-[var(--muted)] text-xs">Gallery Image 2</div>
                    <div className="col-span-1 md:col-span-2 aspect-[21/9] bg-[var(--ink)] rounded-sm border border-[var(--line)] flex items-center justify-center text-[var(--muted-on-ink)] text-xs">Full Width Video / Visual</div>
                </div>

                {/* Next Project Nav */}
                <div className="mt-32 pt-16 border-t border-[var(--line)] flex justify-between items-center">
                    <Link href="/work" className="text-[14px] text-[var(--muted)] hover:text-[var(--duck)] transition-colors">&larr; Back to all work</Link>
                    <MagneticLink href="/work/next-project" variant="secondary">Next Project</MagneticLink>
                </div>
            </div>
        </div>
    );
}
