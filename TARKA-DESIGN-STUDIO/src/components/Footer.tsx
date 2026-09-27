import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="bg-[var(--ink)] text-[var(--muted-on-ink)] py-8 px-[var(--gutter)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[12.5px] border-t border-[var(--line-on-ink)] mt-auto z-10 relative">
            <div className="flex items-center gap-3">
                <Logo className="w-9 opacity-90" />
                <span className="opacity-50">© {new Date().getFullYear()} Design Studio</span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
                <Link href="/services" className="footer-link hover:text-white transition-colors">Services</Link>
                <Link href="/work" className="footer-link hover:text-white transition-colors">Work</Link>
                <Link href="/clients" className="footer-link hover:text-white transition-colors">Clients</Link>
                <Link href="/team" className="footer-link hover:text-white transition-colors">Team</Link>
                <Link href="/quote" className="footer-link hover:text-white transition-colors">Get a Quote</Link>
            </div>
        </footer>
    );
}
