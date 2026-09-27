import React from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Hero />

      {/* CLIENTS SECTION */}
      <section className="py-24 overflow-hidden bg-[var(--ink)] border-b border-white/5 relative z-10">
        <Reveal className="wrap mb-16">
          <span className="eyebrow !text-white/60 tracking-widest pl-2 border-l border-[var(--duck)]">SELECTED PARTNERS</span>
        </Reveal>
        <div className="w-full flex-col flex overflow-hidden">
          {/* Reverse marquee for top row, normal for bottom row to create premium motion */}
          <div className="flex w-[200vw] text-white/40 hover:text-white transition-colors duration-500 marquee-track items-center gap-16 md:gap-32 py-8">
            {['AMAZON', 'GOOGLE', 'META', 'STRIPE', 'UBER', 'AIRBNB', 'NETFLIX', 'SPOTIFY'].map((client, i) => (
              <h3 key={i} className="font-serif text-[clamp(40px,8vw,120px)] whitespace-nowrap opacity-60 hover:opacity-100 hover:text-[var(--duck)] transition-all duration-300 transform hover:scale-105 cursor-default select-none">
                {client}
              </h3>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINS / SERVICES SECTION */}
      <section className="py-32 bg-[var(--ink)] text-white relative flex flex-col group">
        <Reveal className="wrap w-full mb-16">
          <span className="eyebrow !text-white/60 tracking-widest pl-2 border-l border-[var(--duck)]">OUR DOMAINS</span>
          <h2 className="font-serif text-[clamp(32px,5vw,64px)] mt-6 max-w-2xl leading-[1.1]">Transforming ideas into digital realities</h2>
        </Reveal>

        <div className="w-full flex flex-col border-t border-white/10 mt-12 relative z-10">
          {[
            { num: '01', title: 'PRODUCT DESIGN', desc: 'Interfaces, systems, and user experiences mapped to human behavior.' },
            { num: '02', title: 'WEB DEVELOPMENT', desc: 'High-performance interactive web applications and immersive sites.' },
            { num: '03', title: 'MARKETING', desc: 'Brand positioning, digital storytelling, and creative campaigns.' },
            { num: '04', title: '________', desc: 'Future domain placeholder.' },
            { num: '05', title: '________', desc: 'Future domain placeholder.' }
          ].map((domain, i) => (
            <div key={i} className="w-full border-b border-white/10 flex items-center justify-center relative overflow-hidden group/item cursor-pointer">
              {/* Hover background layer inside the item */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--duck)]/0 via-[var(--duck)]/10 to-[var(--duck)]/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="w-full max-w-[var(--container)] mx-auto px-[var(--gutter)] py-8 md:py-16 flex flex-col md:flex-row md:items-baseline justify-between transition-all duration-500 group-hover:opacity-30 group-hover/item:!opacity-100 group-hover/item:pl-[calc(var(--gutter)+20px)]">
                <div className="flex items-baseline gap-6 md:gap-16">
                  <span className="font-sans text-[12px] md:text-[14px] text-white/40 tracking-widest">{domain.num}</span>
                  <h3 className="font-serif text-[clamp(28px,6vw,84px)] tracking-tight">
                    {domain.title}
                  </h3>
                </div>
                <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-12 w-full md:w-auto">
                  <p className="max-w-[280px] text-sm text-white/50 opacity-0 md:group-hover/item:opacity-100 transition-opacity duration-500 md:-translate-x-4 md:group-hover/item:translate-x-0">
                    {domain.desc}
                  </p>
                  <div className="opacity-0 group-hover/item:opacity-100 transform -rotate-45 translate-y-4 translate-x-[-16px] group-hover/item:translate-y-0 group-hover/item:translate-x-0 transition-all duration-500">
                    <ArrowUpRight size={48} className="text-[var(--duck)]" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE THOUGHT / ABOUT */}
      <section className="py-24 relative wrap bg-[var(--paper)] text-[var(--ink)] mt-[-1px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.55fr] gap-10 items-center mb-32">
          <Reveal>
            <span className="eyebrow mb-8 block font-semibold tracking-widest pl-2 border-l border-[var(--duck)] text-[var(--muted)]">ABOUT TARKA</span>
            <p className="font-serif text-[clamp(24px,4.4vw,56px)] max-w-[16ch] leading-[1.18]">
              A thought isn&apos;t much <em className="italic text-[var(--duck)]">until someone makes it real.</em>
            </p>
            <p className="mt-8 max-w-[48ch] text-[15px] leading-relaxed text-[var(--muted)]">
              Tarka is a design and technology studio that thinks through products, interfaces, brands, digital experiences and visual media — before it draws a single pixel. We bridge the gap between creative ambition and technological execution.
            </p>
            <div className="mt-12">
              <Link href="/about" className="inline-flex items-center gap-3 text-[13px] font-bold tracking-widest uppercase pb-2 border-b border-black hover:pr-4 transition-all hover:text-[var(--duck)] hover:border-[var(--duck)]">
                MORE ABOUT US <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="hidden md:block aspect-[4/5] rounded-tl-[120px] rounded-br-[120px] overflow-hidden bg-[var(--ink)] shadow-2xl relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,92,110,0.3)_0%,transparent_70%)] opacity-80 mix-blend-screen"></div>
            <div className="w-full h-full flex flex-col items-center justify-center pt-10 px-8 opacity-20">
              <div className="w-[200px] h-[200px] border border-white/20 rounded-full flex flex-col justify-center items-center p-8 gap-4">
                <div className="w-full h-[1px] bg-white"></div>
                <div className="w-full h-[1px] bg-white"></div>
                <div className="w-full h-[1px] bg-white scale-x-50"></div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start pb-20">
          <div className="static md:sticky md:top-[120px]">
            <Reveal>
              <h2 className="font-serif text-[clamp(32px,4vw,48px)]">What Makes <br /><span className="text-[var(--duck)] italic">TARKA</span> Different?</h2>
            </Reveal>
          </div>
          <Reveal className="flex flex-col gap-8 md:gap-12">
            {[
              "Tarka thinks before it looks.",
              "Tarka designs with restraint.",
              "Tarka builds in the real medium.",
              "Tarka experiments where it matters.",
              "Tarka obsesses over the details no one asked for."
            ].map((text, i) => (
              <p key={i} className={`font-serif text-[clamp(24px,3vw,36px)] leading-[1.25] text-[var(--line)] transition-colors duration-500 hover:text-[var(--ink)] cursor-default group`}>
                <span className="text-[12px] font-sans tracking-widest text-[var(--duck)] block mb-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">0{i + 1}</span>
                {text.replace(/thinks|designs|builds|experiments|details/, (match) => `**${match}**`).split('**').map((part, idx) =>
                  idx % 2 === 1 ? <b key={idx} className="font-[440] text-[var(--duck-dark)] relative inline-block">
                    {part}
                    <span className="absolute bottom-1 left-0 w-full h-1 bg-[var(--duck)]/20 -z-10 group-hover:h-3 transition-all duration-300"></span>
                  </b> : part
                )}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-32 bg-[var(--paper-soft)] overflow-hidden">
        <Reveal className="wrap mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="eyebrow block mb-4 tracking-widest pl-2 border-l border-[var(--duck)]">INSIGHTS</span>
            <h2 className="font-serif text-[clamp(32px,5vw,64px)]">The Drawing Board</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase hover:text-[var(--duck)] pb-1 border-b border-transparent hover:border-[var(--duck)] transition-all">
            VIEW ALL ARTICLES
          </Link>
        </Reveal>

        <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-8">
          {/* Featured Article */}
          <Reveal delay={100}>
            <Link href="/blog/1" className="group flex flex-col h-full bg-white rounded-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative border border-black/5">
              <div className="w-full aspect-[16/10] bg-[var(--ink)] overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[12px] font-medium text-[var(--duck)] mb-6">
                    <span>DESIGN SYSTEMS</span>
                    <span className="w-1 h-1 rounded-full bg-current"></span>
                    <span className="text-black/40">MAR 14, 2024</span>
                  </div>
                  <h3 className="font-serif text-[32px] md:text-[44px] leading-tight mb-4 group-hover:text-[var(--duck)] transition-colors">The architecture of modern digital experiences.</h3>
                  <p className="text-[15px] text-[var(--muted)] max-w-[50ch]">Why design systems are no longer just UI kits, but structural languages that define how organizations build and scale products.</p>
                </div>
                <div className="mt-12 flex justify-between items-center w-full">
                  <span className="text-[12px] uppercase font-bold tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">READ ARTICLE</span>
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[var(--duck)] group-hover:border-transparent group-hover:text-white transition-all transform group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Secondary Articles */}
          <div className="flex flex-col gap-8 h-full">
            <Reveal delay={200} className="flex-1">
              <Link href="/blog/2" className="group flex flex-col h-full bg-white p-8 rounded-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-400 border border-black/5">
                <div className="flex items-center gap-4 text-[11px] font-medium text-[var(--duck)] mb-4">
                  <span>ENGINEERING</span>
                  <span className="w-1 h-1 rounded-full bg-current"></span>
                  <span className="text-black/40">FEB 28, 2024</span>
                </div>
                <h3 className="font-serif text-[24px] md:text-[28px] leading-snug mb-4 group-hover:text-[var(--duck)] transition-colors">Complex animations mapped to human perception.</h3>
                <div className="mt-auto pt-8 flex justify-between items-end border-t border-black/5">
                  <span className="text-[11px] font-semibold tracking-widest text-[#999] group-hover:text-[var(--duck)]">5 MIN READ</span>
                  <ArrowRight size={20} className="text-black/30 group-hover:text-[var(--duck)] group-hover:translate-x-2 transition-all" />
                </div>
              </Link>
            </Reveal>
            <Reveal delay={300} className="flex-1">
              <Link href="/blog/3" className="group flex flex-col h-full bg-white p-8 rounded-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-400 border border-black/5">
                <div className="flex items-center gap-4 text-[11px] font-medium text-[var(--duck)] mb-4">
                  <span>BRAND IDENTITY</span>
                  <span className="w-1 h-1 rounded-full bg-current"></span>
                  <span className="text-black/40">FEB 02, 2024</span>
                </div>
                <h3 className="font-serif text-[24px] md:text-[28px] leading-snug mb-4 group-hover:text-[var(--duck)] transition-colors">Typography as the silent voice of the interface.</h3>
                <div className="mt-auto pt-8 flex justify-between items-end border-t border-black/5">
                  <span className="text-[11px] font-semibold tracking-widest text-[#999] group-hover:text-[var(--duck)]">4 MIN READ</span>
                  <ArrowRight size={20} className="text-black/30 group-hover:text-[var(--duck)] group-hover:translate-x-2 transition-all" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINALE CTA */}
      <section className="bg-[var(--ink)] text-white text-center py-32 px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,92,110,0.15)_0%,transparent_60%)] mix-blend-screen pointer-events-none"></div>
        <Reveal className="wrap relative z-10">
          <p className="font-serif text-[clamp(32px,6vw,72px)] mb-4">YOU THINK. <br /><span className="text-[var(--duck)] italic">WE BUILD.</span></p>
          <p className="text-[16px] text-[var(--muted-on-ink)] mb-12 max-w-[60ch] mx-auto opacity-80">
            You&apos;ve seen how we think. If you&apos;ve got something worth building, that&apos;s all we need to start. Let&apos;s map the logic and craft the experience.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/quote" className="group inline-flex items-center gap-4 text-[13px] font-bold tracking-widest bg-[var(--duck)] px-8 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-400">
              GET A QUOTE
              <span className="w-2 h-2 rounded-full bg-white group-hover:bg-[var(--duck)]"></span>
            </Link>
            <Link href="mailto:studio@tarkadesign.com" className="inline-flex items-center gap-2 text-[13px] font-bold tracking-widest px-8 py-5 rounded-full border border-white/20 hover:bg-white/5 transition-all">
              CONTACT STUDIO
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
