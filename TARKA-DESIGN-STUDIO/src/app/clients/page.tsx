import React from 'react';
import SectionHeading from '@/components/SectionHeading';

export default function ClientsPage() {
    return (
        <div className="py-24 max-w-[var(--container)] mx-auto px-[var(--gutter)] text-[var(--ink)] min-h-[80vh]">
            <SectionHeading eyebrow="Partnerships" title="Trust earned by building." className="mb-0" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-24">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="flex flex-col items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                        <div className="w-32 h-12 bg-black/5 rounded-sm flex items-center justify-center border border-black/10">
                            <span className="text-[10px] uppercase font-serif tracking-widest">Client {i}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-32">
                <h3 className="font-serif text-[clamp(20px,3vw,28px)] mb-12">Selected Engagements</h3>
                <ul className="border-t border-[var(--line)]">
                    {[
                        { client: "Client Alpha", desc: "Complete rebrand and global e-commerce rollout." },
                        { client: "Client Beta", desc: "Interactive marketing site for Series B launch." },
                        { client: "Client Gamma", desc: "Product design system optimization." },
                    ].map((item, i) => (
                        <li key={i} className="py-8 border-b border-[var(--line)] grid grid-cols-1 md:grid-cols-3 gap-4 hover:bg-[var(--paper-soft)] hover:px-6 -mx-6 px-6 transition-all rounded-lg">
                            <span className="font-serif text-xl">{item.client}</span>
                            <p className="col-span-2 text-[14.5px] text-[var(--muted)]">{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
