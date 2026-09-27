import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Play } from 'lucide-react';

export default function VideographyPage() {
    return (
        <div className="bg-[var(--ink)] text-white w-full rounded-t-[40px] mt-2 mb-20 overflow-hidden min-h-[90vh]">
            {/* Cinematic Hero Image */}
            <div className="w-full h-[40vh] bg-black/50 relative border-b border-white/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--ink)_100%)] z-10" />
                <span className="text-white/20 z-0 text-sm tracking-widest uppercase">Cinematic Reel Placeholder</span>
            </div>

            <div className="wrap py-20 -mt-10 relative z-20">
                <SectionHeading eyebrow="Production" title="Videography" className="mb-0" />
                <p className="mt-8 text-[var(--muted-on-ink)] max-w-[50ch] leading-relaxed">
                    From concept to final color grade, we produce brand films and product videos that communicate narrative logic through a cinematic lens.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-[16/9] bg-white/5 border border-white/10 rounded-sm relative group cursor-pointer overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white transition-transform duration-500 group-hover:scale-110">
                                    <Play size={24} fill="currentColor" className="ml-1" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-0"></div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <h3 className="font-serif text-xl tracking-tight translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Project Reel {i}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
