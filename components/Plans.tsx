'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Plans() {
    const { t } = useLanguage();

    return (
        <section id="plans" className="py-24 bg-zinc-900 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t.plans.title}
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        {t.plans.description}
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Plan Image */}
                        <div className="relative rounded-2xl overflow-hidden bg-white/5 p-4 border border-white/5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/plans/combined-plan.png"
                                alt="Nefes Villaları Kat Planları"
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full pointer-events-none">
                                {t.plans.measure_note}
                            </div>
                        </div>

                        {/* Details List */}
                        <div className="space-y-12">
                            {/* Ground Floor */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-remax-red flex items-center justify-center text-sm">Z</span>
                                    {t.plans.ground_title}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                        <div key={`ground-${num}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
                                            <div className="w-6 h-6 rounded-full bg-white/10 text-zinc-400 flex items-center justify-center text-xs font-mono group-hover:bg-remax-red group-hover:text-white transition-colors">
                                                {num}
                                            </div>
                                            <span className="text-zinc-300 text-sm">
                                                {t.plans[`ground_list_${num}` as keyof typeof t.plans]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full h-px bg-white/10" />

                            {/* Upper Floor */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-remax-red flex items-center justify-center text-sm">1</span>
                                    {t.plans.upper_title}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num) => (
                                        <div key={`upper-${num}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
                                            <div className="w-6 h-6 rounded-full bg-white/10 text-zinc-400 flex items-center justify-center text-xs font-mono group-hover:bg-remax-red group-hover:text-white transition-colors">
                                                {num}
                                            </div>
                                            <span className="text-zinc-300 text-sm">
                                                {t.plans[`upper_list_${num}` as keyof typeof t.plans]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-remax-red/10 border border-remax-red/20 rounded-xl p-4 flex items-start gap-3">
                                <div className="p-2 bg-remax-red/20 rounded-lg">
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
        </section>
    );
}
