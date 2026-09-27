import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

const projects = [
    { id: 'project-one', title: 'Project Title', category: 'Product Design', year: '2026', gridClass: 'md:col-span-8 md:aspect-[16/10]', aspect: 'aspect-[16/10]' },
    { id: 'project-two', title: 'Project Title', category: 'UI / UX', year: '2026', gridClass: 'md:col-span-4 md:aspect-[3/4]', aspect: 'aspect-[3/4]' },
    { id: 'project-three', title: 'Project Title', category: 'Branding', year: '2025', gridClass: 'md:col-span-6 md:aspect-[4/3]', aspect: 'aspect-[4/3]' },
    { id: 'project-four', title: 'Project Title', category: 'Videography', year: '2025', gridClass: 'md:col-span-6 md:aspect-[4/3]', aspect: 'aspect-[4/3]' },
    { id: 'project-five', title: 'Project Title', category: 'AI Video', year: '2025', gridClass: 'md:col-span-4 md:aspect-[3/4]', aspect: 'aspect-[3/4]' },
    { id: 'project-six', title: 'Project Title', category: 'Web Development', year: '2024', gridClass: 'md:col-span-8 md:aspect-[16/9]', aspect: 'aspect-[16/9]' },
];

export default function WorkPage() {
    return (
        <div className="py-24 max-w-[var(--container)] mx-auto px-[var(--gutter)] text-[var(--ink)]">
            <Reveal><SectionHeading eyebrow="The Work" title="What we've built." className="mb-0" /></Reveal>
            <p className="mt-6 text-sm text-[var(--muted)] max-w-[50ch] italic">
                Editorial frames shown structurally — real Tarka case studies to be inserted here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-16">
                {projects.map((project, index) => (
                    <Reveal key={project.id} delay={index * 70} className={project.gridClass}>
                    <Link data-cursor-view href={`/work/${project.id}`} className={`project-card block relative rounded-sm overflow-hidden bg-[var(--ink)] group ${project.aspect}`}>
                        <div className="w-full h-full bg-[var(--duck-dark)] flex items-center justify-center border border-white/5 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-white/30 text-xs">Project Visual</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-[var(--ease)] flex flex-col justify-end h-1/2">
                            <h3 className="font-serif text-[clamp(18px,2vw,24px)]">{project.title}</h3>
                            <p className="text-[12px] text-white/70 mt-1">{project.category} &middot; {project.year}</p>
                        </div>
                    </Link></Reveal>
                ))}
            </div>
        </div>
    );
}
