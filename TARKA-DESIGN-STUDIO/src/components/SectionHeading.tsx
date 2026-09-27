import React from 'react';

export default function SectionHeading({
    eyebrow,
    title,
    children,
    className = ''
}: {
    eyebrow?: string;
    title: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`mb-11 max-w-[26ch] ${className}`}>
            {eyebrow && <span className="eyebrow block mb-4 opacity-80">{eyebrow}</span>}
            <h2 className="display text-[clamp(28px,4.2vw,46px)] leading-[1.1]">{title}</h2>
            {children && <div className="mt-4">{children}</div>}
        </div>
    );
}
