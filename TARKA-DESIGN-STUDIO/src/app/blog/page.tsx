import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';

export default function BlogPage() {
    const posts = [
        { slug: 'prototype-before-present', title: 'Why we prototype before we present', tag: 'Process' },
        { slug: 'ai-video-utility', title: 'What AI video is actually good for right now', tag: 'AI / Tools' },
        { slug: 'interface-nobody-asked-for', title: 'The interface nobody asked for', tag: 'Product' },
    ];

    return (
        <div className="wrap py-24 min-h-[80vh] text-[var(--ink)]">
            <SectionHeading eyebrow="Thinking" title="Notes from the studio." />

            <div className="mt-20 max-w-[800px]">
                <div className="border-t border-[var(--line)]">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="flex justify-between items-baseline gap-5 py-8 border-b border-[var(--line)] group"
                        >
                            <h4 className="font-serif text-[clamp(18px,2vw,24px)] group-hover:text-[var(--duck)] group-hover:translate-x-2 transition-all duration-300">
                                {post.title}
                            </h4>
                            <span className="text-[12px] text-[var(--muted)] whitespace-nowrap px-4 py-1.5 border border-[var(--line)] rounded-full group-hover:border-[var(--duck)] group-hover:text-[var(--duck)] transition-colors">
                                {post.tag}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
