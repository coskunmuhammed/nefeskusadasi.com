'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Plans() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'ground' | 'upper'>('ground');

    const plans = {
        ground: {
            title: t.plans.ground_title,
            image: "/images/plans/ground-floor.jpg",
            details: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        upper: {
            title: t.plans.upper_title,
            image: "/images/plans/first-floor.jpg",
            details: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        }
    };

    return (
        <section id="plans" className="py-24 bg-zinc-900 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t.plans.title} <span className="text-remax-red">{t.plans.title_highlight}</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        {t.plans.description}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveTab('ground')}
                            className={`px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 flex items-center gap-3 ${activeTab === 'ground'
                                ? 'bg-remax-red text-white shadow-lg shadow-remax-red/25 scale-105'
                                : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <span className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center text-sm font-bold">Z</span>
                            {t.plans.ground_title}
                        </button>
                        <button
                            onClick={() => setActiveTab('upper')}
                            className={`px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 flex items-center gap-3 ${activeTab === 'upper'
                                ? 'bg-remax-red text-white shadow-lg shadow-remax-red/25 scale-105'
                                : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <span className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center text-sm font-bold">1</span>
                            {t.plans.upper_title}
                        </button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 animate-fade-in-up">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Plan Image */}
                            <div className="relative rounded-2xl overflow-hidden bg-white/5 p-4 border border-white/5 group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    key={activeTab} // Force re-render on tab change for animation
                                    src={plans[activeTab].image}
                                    alt={`${plans[activeTab].title} Planı`}
                                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105 animate-fade-in"
                                />
                                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full pointer-events-none">
                                    {t.plans.measure_note}
                                </div>
                            </div>

                            {/* Details List */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-lg bg-remax-red flex items-center justify-center text-sm">
                                            {activeTab === 'ground' ? 'Z' : '1'}
                                        </span>
                                        {plans[activeTab].title}
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {plans[activeTab].details.map((num) => (
                                            <div key={`${activeTab}-${num}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group/item animate-fade-in-up" style={{ animationDelay: `${num * 50}ms` }}>
                                                <div className="w-8 h-8 shrink-0 rounded-full bg-white/10 text-zinc-400 flex items-center justify-center text-sm font-mono font-bold group-hover/item:bg-remax-red group-hover/item:text-white transition-colors border border-white/5">
                                                    {num}
                                                </div>
                                                <span className="text-zinc-300 text-sm">
                                                    {/* Type assertion to dynamic key */}
                                                    {t.plans[`${activeTab}_list_${num}` as keyof typeof t.plans]}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-remax-red/10 border border-remax-red/20 rounded-xl p-4 flex items-start gap-3">
                                    <div className="p-2 bg-remax-red/20 rounded-lg shrink-0">
                                        <svg className="w-5 h-5 text-remax-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-zinc-300 pt-1.5">
                                        {t.plans.info_bath}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
