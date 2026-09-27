import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { MagneticLink } from '@/components/MagneticButton';

export default function VideoGenerationPage() {
    return (
        <div className="bg-[var(--ink)] text-white w-full rounded-t-[40px] mt-2 mb-20 overflow-hidden min-h-[90vh] relative">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,var(--duck)_0%,transparent_60%)] opacity-30 mix-blend-screen pointer-events-none blur-3xl" />

            <div className="wrap py-24 relative z-10">
                <SectionHeading eyebrow="Experimental" title="AI Video Generation" className="mb-0" />
                <p className="mt-8 text-[var(--muted-on-ink)] max-w-[55ch] leading-relaxed">
                    Leveraging generative models to explore impossible physics, abstract motion, and rapid prototyping. We merge AI output with human editorial taste to produce polished, high-fidelity visual experiments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                    {[
                        { tag: "01 / EXPLORE", height: "h-[300px]" },
                        { tag: "02 / GENERATE", height: "h-[400px]" },
                        { tag: "03 / REFINE", height: "h-[300px]" },
                    ].map((item, i) => (
                        <div key={i} className={`flex flex-col gap-4 ${i === 1 ? 'md:-translate-y-12' : ''}`}>
                            <div className={`w-full ${item.height} bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-sm relative overflow-hidden group`}>
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_ease-in-out_infinite]" />
                                <style dangerouslySetInnerHTML={{
                                    __html: `
                    @keyframes shimmer {
                      0% { background-position: -200% 0; }
                      100% { background-position: 200% 0; }
                    }
                 `}} />
                                <span className="absolute bottom-4 left-4 text-[10px] text-[var(--duck)] font-mono">{item.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center text-center">
                    <MagneticLink href="/quote" variant="outline" className="border-white/20">Discuss an Experiment</MagneticLink>
                </div>
            </div>
        </div>
    );
}
