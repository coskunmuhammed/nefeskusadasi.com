'use client';

import { useState } from 'react';
import {
    LandPlot,
    Home,
    Layers,
    Maximize2,
    Trees,
    Layout,
    Waves,
    Smartphone
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Summary() {
    const { t, language } = useLanguage();

    const items = [
        {
            icon: LandPlot,
            text: t.summary.land,
            description: t.summary.land_desc
        },
        {
            icon: Home,
            text: t.summary.villas,
            description: t.summary.villas_desc
        },
        {
            icon: Layers,
            text: t.summary.rooms,
            description: t.summary.rooms_desc
        },
        {
            icon: Maximize2,
            text: t.summary.size,
            description: t.summary.size_desc
        },
        {
            icon: Trees,
            text: t.summary.garden,
            description: t.summary.garden_desc
        },
        {
            icon: Layout,
            text: t.summary.base,
            description: t.summary.base_desc
        },
        {
            icon: Waves,
            text: t.summary.pool,
            description: t.summary.pool_desc
        },
        {
            icon: Smartphone,
            text: t.summary.smart,
            description: t.summary.smart_desc
        }
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-remax-dark mb-4">
                            {t.summary.title}
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {t.summary.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 ${index >= 4 && !isExpanded ? 'hidden md:block' : ''}`}
                            >
                                <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-remax-red/5 transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-remax-navy group-hover:text-remax-red transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
                                    {item.text}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {!isExpanded && (
                        <div className="mt-8 text-center md:hidden">
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="px-6 py-2 bg-white border border-slate-200 rounded-full text-slate-600 font-medium shadow-sm active:scale-95 transition-all text-sm"
                            >
                                {language === 'tr' ? 'Daha Fazla Göster' : 'Show More'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
