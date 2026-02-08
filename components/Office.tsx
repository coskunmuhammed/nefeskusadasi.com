'use client';

import { useLanguage } from '../context/LanguageContext';
import { Target, Users, Trophy } from 'lucide-react';

export default function Office() {
    const { t } = useLanguage();

    return (
        <section id="office" className="py-24 bg-zinc-900 relative overflow-hidden">
            {/* Background Gradient/Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-remax-red/5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 relative py-20">
                    {/* Background Text "OFİSİMİZ" */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none overflow-hidden pointer-events-none flex justify-center items-center">
                        <span className="text-[12rem] md:text-[20rem] font-black text-white/[0.03] whitespace-nowrap leading-none tracking-tighter scale-150 origin-center">
                            {t.office.title}
                        </span>
                    </div>

                    {/* Foreground Text "Neden Biz?" */}
                    <h3 className="text-5xl md:text-7xl font-bold text-white relative z-10 drop-shadow-2xl tracking-tight">
                        {t.office.subtitle}
                    </h3>
                </div>

                {/* Main Description */}
                <div className="max-w-4xl mx-auto text-center mb-20 text-zinc-300 text-lg leading-relaxed">
                    <p>{t.office.description}</p>
                </div>

                {/* Vision & Mission Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Vision Card */}
                    <div className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-remax-red/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-16 h-16 bg-remax-red/10 rounded-2xl flex items-center justify-center mb-6 text-remax-red group-hover:bg-remax-red group-hover:text-white transition-colors duration-300">
                                <Target className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-remax-dark mb-4">
                                {t.office.vision_title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                                {t.office.vision_desc}
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <Users className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-remax-dark mb-4">
                                {t.office.mission_title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                                {t.office.mission_desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
