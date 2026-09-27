"use client";

import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function QuotePage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        services: [] as string[],
        description: '',
        requirements: '',
        timeline: '',
        budget: '',
        name: '',
        email: '',
        company: ''
    });

    const toggleService = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(prev => Math.min(prev + 1, 5));
    };

    const prevStep = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(prev => Math.max(prev - 1, 1));
    };

    return (
        <div className="wrap py-24 min-h-screen text-[var(--ink)]">
            <SectionHeading eyebrow="Quote" title="Let's build something." className="mb-0" />

            <div className="mt-16 w-full max-w-4xl border border-[var(--line)] bg-[var(--paper-soft)] rounded-sm overflow-hidden shadow-sm relative">
                <div className="flex bg-[var(--ink)] text-white/50 text-[11px] uppercase tracking-widest font-semibold p-4 border-b border-white/10 overflow-x-auto whitespace-nowrap hide-scrollbar">
                    <span className={`transition-colors duration-300 ${step === 1 ? 'text-[var(--duck)]' : ''}`}>01 Services</span>
                    <span className="mx-4 opacity-30">/</span>
                    <span className={`transition-colors duration-300 ${step === 2 ? 'text-[var(--duck)]' : ''}`}>02 Requirements</span>
                    <span className="mx-4 opacity-30">/</span>
                    <span className={`transition-colors duration-300 ${step === 3 ? 'text-[var(--duck)]' : ''}`}>03 Contact</span>
                    <span className="mx-4 opacity-30">/</span>
                    <span className={`transition-colors duration-300 ${step === 4 ? 'text-[var(--duck)]' : ''}`}>04 Review</span>
                </div>

                <div className="p-8 md:p-14 min-h-[400px]">
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="font-serif text-[clamp(20px,3vw,30px)] mb-10">What do you need help with?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Web Development', 'Videography', 'Video Generation', 'Branding', 'Digital Experience', 'Other'].map(s => (
                                    <button
                                        key={s}
                                        onClick={() => toggleService(s)}
                                        className={`flex items-center gap-4 p-5 rounded-md border text-left transition-all hover:scale-[0.99] ${formData.services.includes(s) ? 'border-[var(--duck)] bg-[var(--duck)]/5 shadow-sm text-black' : 'border-[var(--line)] bg-white hover:border-black/30'}`}
                                    >
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors shadow-sm ${formData.services.includes(s) ? 'border-[var(--duck)] bg-[var(--duck)]' : 'border-[var(--line)] bg-white'}`}>
                                            {formData.services.includes(s) && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                        </div>
                                        <span className="text-[14.5px] font-medium">{s}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8">
                            <h3 className="font-serif text-[clamp(20px,3vw,30px)] mb-10">Tell us about the project.</h3>
                            <div>
                                <label className="block text-[13px] uppercase tracking-widest text-[var(--muted)] mb-3">Project Description</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full border border-[var(--line)] bg-white rounded-sm p-4 text-[14.5px] focus:outline-none focus:border-[var(--duck)] focus:ring-1 focus:ring-[var(--duck)] transition-shadow" placeholder="A brief overview of your goals"></textarea>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-[13px] uppercase tracking-widest text-[var(--muted)] mb-3">Timeline</label>
                                    <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full border border-[var(--line)] bg-white rounded-sm p-4 text-[14.5px] focus:outline-none focus:border-[var(--duck)] focus:ring-1 focus:ring-[var(--duck)] transition-shadow">
                                        <option value="">Select a timeline</option>
                                        <option>1-2 months</option>
                                        <option>3-6 months</option>
                                        <option>6+ months</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[13px] uppercase tracking-widest text-[var(--muted)] mb-3">Budget Range</label>
                                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full border border-[var(--line)] bg-white rounded-sm p-4 text-[14.5px] focus:outline-none focus:border-[var(--duck)] focus:ring-1 focus:ring-[var(--duck)] transition-shadow">
                                        <option value="">Select a budget</option>
                                        <option>&lt; $10k</option>
                                        <option>$10k - $25k</option>
                                        <option>$25k - $50k</option>
                                        <option>$50k+</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8">
                            <h3 className="font-serif text-[clamp(20px,3vw,30px)] mb-10">How can we reach you?</h3>
                            <div className="space-y-6 max-w-2xl">
                                <div>
                                    <label className="block text-[13px] uppercase tracking-widest text-[var(--muted)] mb-3">Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-[var(--line)] bg-white rounded-sm p-4 text-[14.5px] focus:outline-none focus:border-[var(--duck)] focus:ring-1 focus:ring-[var(--duck)] transition-shadow" placeholder="Jane Doe" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[13px] uppercase tracking-widest text-[var(--muted)] mb-3">Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-[var(--line)] bg-white rounded-sm p-4 text-[14.5px] focus:outline-none focus:border-[var(--duck)] focus:ring-1 focus:ring-[var(--duck)] transition-shadow" placeholder="jane@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-[13px] uppercase tracking-widest text-[var(--muted)] mb-3">Company</label>
                                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full border border-[var(--line)] bg-white rounded-sm p-4 text-[14.5px] focus:outline-none focus:border-[var(--duck)] focus:ring-1 focus:ring-[var(--duck)] transition-shadow" placeholder="Organization" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h3 className="font-serif text-[clamp(20px,3vw,30px)] mb-10">Review your inquiry</h3>
                            <div className="bg-white border border-[var(--line)] rounded-sm p-8 space-y-8 text-[14.5px] shadow-sm">
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-[var(--muted)] mb-3">Services Selected</span>
                                    <div className="flex flex-wrap gap-2">
                                        {formData.services.length > 0 ? formData.services.map(s => <span key={s} className="px-4 py-1.5 bg-[var(--duck)]/5 text-[var(--duck-dark)] border border-[var(--duck)]/20 font-medium rounded-full text-xs">{s}</span>) : <span className="text-[var(--muted)] italic">None selected</span>}
                                    </div>
                                </div>
                                {formData.description && (
                                    <div className="border-t border-[var(--line)] pt-6">
                                        <span className="block text-xs uppercase tracking-widest text-[var(--muted)] mb-3">Project Overview</span>
                                        <p className="text-[var(--ink)] leading-relaxed max-w-[60ch]">{formData.description}</p>
                                    </div>
                                )}
                                <div className="grid grid-cols-2 gap-8 border-t border-[var(--line)] pt-6">
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Timeline</span>
                                        <p className="font-medium text-[var(--ink)]">{formData.timeline || 'Unspecified'}</p>
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Budget</span>
                                        <p className="font-medium text-[var(--ink)]">{formData.budget || 'Unspecified'}</p>
                                    </div>
                                </div>
                                <div className="border-t border-[var(--line)] pt-6">
                                    <span className="block text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Contact Info</span>
                                    <p className="font-medium text-[var(--ink)] text-lg">{formData.name || 'Anonymous'}</p>
                                    <p className="text-[var(--muted)] mt-1">{formData.email}</p>
                                    <p className="text-[var(--muted)] mt-1">{formData.company}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-full flex flex-col items-center justify-center text-center py-20">
                            <div className="w-24 h-24 bg-[var(--duck)]/10 text-[var(--duck)] rounded-full flex items-center justify-center mb-8 border border-[var(--duck)]/20 shadow-[0_0_40px_rgba(10,92,110,0.2)]">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <h3 className="font-serif text-[clamp(28px,4vw,40px)] mb-6">Inquiry Sent.</h3>
                            <p className="text-[var(--muted)] max-w-[40ch] leading-relaxed text-[15px]">
                                Thank you for reaching out. A partner from our studio will review your requirements and respond within 24 hours.
                            </p>
                        </div>
                    )}
                </div>

                {step < 5 && (
                    <div className="p-6 md:p-8 bg-white border-t border-[var(--line)] flex justify-between items-center relative z-10">
                        {step > 1 ? (
                            <button onClick={prevStep} className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--muted)] hover:text-black hover:-translate-x-1 transition-all">
                                <ArrowLeft size={16} /> Back
                            </button>
                        ) : <div></div>}

                        <button onClick={nextStep} className="inline-flex items-center gap-2 text-[14px] font-medium px-8 py-3.5 rounded-full bg-[var(--duck)] hover:bg-[#0d6f84] text-white transition-all shadow-sm hover:translate-x-1">
                            {step === 4 ? 'Submit Inquiry' : 'Continue'} {step < 4 && <ArrowRight size={16} />}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
