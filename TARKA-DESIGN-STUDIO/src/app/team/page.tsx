import React from 'react';
import SectionHeading from '@/components/SectionHeading';

export default function TeamPage() {
    const team = [
        { name: "Team Member", role: "Role — pending", aspect: "aspect-[3/4]" },
        { name: "Team Member", role: "Role — pending", aspect: "aspect-[3/4]" },
        { name: "Team Member", role: "Role — pending", aspect: "aspect-[3/4]" },
    ];

    return (
        <div className="py-24 bg-[var(--paper-soft)] min-h-screen text-[var(--ink)]">
            <div className="wrap">
                <SectionHeading eyebrow="The Studio" title="People with taste and opinions." className="max-w-[26ch]" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16 items-end">
                    <div className="lg:col-span-2 flex flex-col justify-end h-full min-h-[300px] p-8 border border-[var(--line)] rounded-sm bg-white">
                        <p className="font-serif italic text-2xl mb-8 leading-snug text-[var(--duck-dark)]">
                            &ldquo;We don&apos;t hire just to scale. We hire builders who care about the final pixel as much as the first conversation.&rdquo;
                        </p>
                    </div>

                    {team.map((member, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className={`w-full ${member.aspect} bg-[var(--ink)] rounded-sm mb-4 overflow-hidden relative`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    <span className="text-white/40 text-xs tracking-widest uppercase">Placeholder</span>
                                </div>
                            </div>
                            <h4 className="font-serif text-lg group-hover:text-[var(--duck)] transition-colors">{member.name}</h4>
                            <p className="text-[13px] text-[var(--muted)] mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
