"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
    { name: 'WORK', href: '/work' },
    { name: 'SERVICES', href: '/services' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const closeMenu = window.setTimeout(() => setIsOpen(false), 0);
        return () => window.clearTimeout(closeMenu);
    }, [pathname]);

    useEffect(() => {
        const update = () => setScrolled(window.scrollY > 30);
        update();
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-[var(--gutter)] text-white transition-all duration-700 ${scrolled ? 'py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent border-b border-transparent'}`}>

                {/* TOP LEFT: Logo */}
                <div className="flex items-center gap-6 z-[501]">
                    <Logo className="w-12 md:w-14" priority />
                    <button
                        className="hidden md:flex items-center gap-2 text-[11px] font-semibold tracking-[0.08em] uppercase text-white/70 hover:text-white transition-colors group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="w-6 h-[1px] bg-white/70 group-hover:bg-white transition-all group-hover:w-8"></span>
                        MENU
                    </button>
                </div>

                {/* TOP RIGHT: PRODUCT & CTA */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link
                        href="/services"
                        className="text-[12px] font-semibold tracking-wider text-white/80 hover:text-white transition-colors relative group"
                    >
                        PRODUCT
                        <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-[var(--duck)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                    <Link
                        href="/quote"
                        className="text-[12px] font-medium tracking-wide bg-white text-black px-6 py-3 rounded-full hover:bg-[var(--duck)] hover:text-white transition-colors"
                    >
                        GET A QUOTE
                    </Link>
                </div>

                {/* MOBILE MENU TRIGGER */}
                <button
                    className="lg:hidden relative z-[501] p-2 -mr-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* FULL SCREEN / LEFT SIDE MENU */}
            <div
                className={`fixed inset-0 z-[490] bg-[var(--ink)]/95 backdrop-blur-2xl text-white flex flex-col justify-center px-[10vw] transition-all duration-700 ease-[var(--ease)] ${isOpen ? 'opacity-100 pointer-events-auto filter-none' : 'opacity-0 pointer-events-none blur-xl'}`}
            >
                <div className="flex flex-col gap-2 md:gap-4 max-w-2xl">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-serif text-[clamp(40px,7vw,80px)] uppercase leading-none group flex items-center gap-6 transform transition-all duration-500 delay-[${(i + 1) * 100}ms] ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="text-[var(--duck)] opacity-0 group-hover:opacity-100 transition-opacity -ml-12 absolute left-0 text-3xl hidden md:block">→</span>
                            <span className="group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-500 ease-out">{link.name}</span>
                        </Link>
                    ))}

                    <div className={`mt-12 flex flex-col md:flex-row gap-6 md:items-center transform transition-all duration-500 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Link
                            href="/quote"
                            className="inline-flex justify-center items-center text-[13px] font-medium tracking-wide border border-white/20 bg-white/5 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            START A PROJECT
                        </Link>
                        <div className="flex gap-4">
                            {['TWITTER', 'INSTAGRAM', 'LINKEDIN'].map(social => (
                                <a key={social} href="#" className="text-[11px] tracking-widest text-white/50 hover:text-white transition-colors">{social}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
