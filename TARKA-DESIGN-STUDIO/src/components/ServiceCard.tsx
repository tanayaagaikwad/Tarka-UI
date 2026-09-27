import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    num: string;
    name: string;
    desc: string;
    href: string;
    isOpen?: boolean;
    onClick?: () => void;
    visual?: React.ReactNode;
}

export default function ServiceCard({ num, name, desc, href, isOpen, onClick, visual }: ServiceCardProps) {
    return (
        <div className={`service-card border-b border-[var(--line)] overflow-hidden ${isOpen ? 'open' : ''}`}>
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between gap-6 py-6 text-left transition-transform active:scale-[0.99] group"
            >
                <div className="flex items-baseline gap-5">
                    <span className="font-serif text-[12.5px] text-[var(--muted)]">{num}</span>
                    <span className="font-serif text-[clamp(22px,3.6vw,38px)] transition-all duration-300 group-hover:text-[var(--duck)] group-hover:translate-x-2">
                        {name}
                    </span>
                </div>
                <span className={`text-[40px] font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            <div
                className="overflow-hidden transition-all duration-500 ease-[var(--ease)]"
                style={{ maxHeight: isOpen ? '800px' : '0', opacity: isOpen ? 1 : 0 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-9 pb-9 px-1 pt-2">
                    <div>
                        <p className="text-[14.5px] leading-relaxed text-[var(--muted)] max-w-[50ch]">{desc}</p>
                        <Link href={href} className="inline-flex items-center gap-2 mt-4 text-[13px] text-[var(--duck)] border-b border-[var(--duck)] pb-[2px] transition-all hover:gap-3">
                            See details <ArrowRight size={14} />
                        </Link>
                    </div>
                    {visual && (
                        <div className={`aspect-[16/10] rounded-sm overflow-hidden bg-[var(--ink)] transition-all duration-500 ease-[var(--ease)] delay-100 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            {visual}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
