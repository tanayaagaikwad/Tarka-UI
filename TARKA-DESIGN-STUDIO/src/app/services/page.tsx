"use client";

import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import Reveal from '@/components/Reveal';

const services = [
    { num: "01", name: "Product Design", desc: "The flows, logic and decisions inside a product — from first sketch to something people trust with their time.", href: "/work" },
    { num: "02", name: "UI / UX", desc: "Interfaces built on systems, not one-off screens — designed to stay clear as a product grows.", href: "/work" },
    { num: "03", name: "Branding", desc: "Identity systems that give a company a point of view — name, mark, voice, and the logic behind all three.", href: "/work" },
    { num: "04", name: "Web Development", desc: "Sites and stores built in code from day one, so what ships matches what was designed.", href: "/services/web-development" },
    { num: "05", name: "Videography", desc: "Shot film — product, brand and campaign video produced by the studio, on location or on set.", href: "/services/videography" },
    { num: "06", name: "AI Video Generation", desc: "A dedicated practice — generating brand-accurate motion from existing visual assets, with a human editing pass on every cut.", href: "/services/video-generation" },
];

export default function ServicesPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="wrap py-24 pb-32 min-h-[80vh]">
            <Reveal><SectionHeading eyebrow="What we build" title="Six disciplines. One way of thinking." /></Reveal>

            <div className="border-t border-[var(--line)] mt-16">
                {services.map((service, index) => (
                    <Reveal key={service.num} delay={index * 65}><ServiceCard
                        key={service.num}
                        num={service.num}
                        name={service.name}
                        desc={service.desc}
                        href={service.href}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        visual={
                            <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-white/5 border border-white/10 group">
                                <span className="text-white/40 text-xs tracking-widest uppercase transition-opacity duration-300 group-hover:opacity-100">{service.name} Preview</span>
                                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--duck)]/10 to-transparent pointer-events-none mix-blend-screen" />
                            </div>
                        }
                    /></Reveal>
                ))}
            </div>
        </div>
    );
}
