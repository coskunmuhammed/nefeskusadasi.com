'use client';

import { useState } from 'react';
import { Grid, BedDouble, Bath, Utensils, Armchair, DoorOpen, Waves, Sun, MoveRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


export default function Plans() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'ground' | 'upper'>('ground');

    const getIcon = (label: string) => {
        // Simple heuristic for icons based on translation content is risky if keys change
        // Better to check against keys or just keep simple includes check against both languages or base keys
        // For simplicity in this iteration, I'll rely on the translation strings containing keywords
        // Ideally, I should pass keys to getIcon, not translated labels.
        // Let's refactor plans object to store 'type' or 'key' for icon matching.
        // But to minimize code drift, I will just check for keywords in both languages or just simplify.
        // Actually, matching against known English/Turkish terms:
        const l = label.toLowerCase();
        if (l.includes('oda') || l.includes('room')) return <BedDouble className="w-6 h-6" />;
        if (l.includes('salon') || l.includes('living')) return <Armchair className="w-6 h-6" />;
        if (l.includes('mutfak') || l.includes('kitchen')) return <Utensils className="w-6 h-6" />;
        if (l.includes('banyo') || l.includes('bath')) return <Bath className="w-6 h-6" />;
        if (l.includes('balkon') || l.includes('balcony') || l.includes('veranda') || l.includes('teras') || l.includes('terrace')) return <Sun className="w-6 h-6" />;
        if (l.includes('havuz') || l.includes('pool')) return <Waves className="w-6 h-6" />;
        if (l.includes('giyinme') || l.includes('dressing') || l.includes('giriş') || l.includes('entry')) return <DoorOpen className="w-6 h-6" />;
        return <Grid className="w-6 h-6" />;
    };

    const plans = {
        ground: {
            id: 'ground',
            title: t.plans.ground_title,
            subtitle: t.plans.ground_subtitle,
            description: t.plans.ground_desc,
            details: [
                { label: t.plans.room_living, value: "27 m²" },
                { label: t.plans.room_kitchen, value: "10 m²" },
                { label: t.plans.room_entry, value: "7,5 m²" },
                { label: t.plans.room_bath, value: "4 m²" },
                { label: t.plans.room_terrace, value: "5 m²" },
                { label: t.plans.room_veranda, value: "25 m²" },
            ]
        },
        upper: {
            id: 'upper',
            title: t.plans.upper_title,
            subtitle: t.plans.upper_subtitle,
            description: t.plans.upper_desc,
            details: [
                { label: t.plans.room_room1, value: "14 m²" },
                { label: t.plans.room_room2, value: "15 m²" },
                { label: t.plans.room_room3, value: "17 m²" },
                { label: t.plans.room_dressing, value: "6,8 m²" },
                { label: t.plans.room_bath, value: "11,2 m²" },
                { label: t.plans.room_balcony1, value: "5 m²" },
                { label: t.plans.room_balcony2, value: "6,5 m²" },
                { label: t.plans.room_pool_garden, value: "21 m² (7x3)" },
            ]
        }
    };

    return (
        <section id="plans" className="py-24 bg-zinc-900 relative overflow-hidden text-white">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-black opacity-40"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="absolute -top-40 -right-40 w-96 h-96 bg-remax-red/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-white mb-6">
                        {t.plans.title} <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">{t.plans.title_highlight}</span>
                    </h2>
                    <div className="h-1 w-24 bg-remax-red mx-auto rounded-full mb-6"></div>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        {t.plans.description}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Navigation / Tabs */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            {(Object.keys(plans) as Array<keyof typeof plans>).map((key) => {
                                const isActive = activeTab === key;
                                const item = plans[key];
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`group relative overflow-hidden rounded-2xl p-8 text-left transition-all duration-500 border ${isActive
                                            ? 'bg-white/5 border-remax-red/50 shadow-2xl shadow-remax-red/10'
                                            : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'
                                            }`}
                                    >
                                        <div className="relative z-10">
                                            <span className={`text-xs font-mono tracking-[0.2em] uppercase mb-3 block ${isActive ? 'text-remax-red' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                                                {item.subtitle}
                                            </span>
                                            <h3 className={`text-2xl font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                                                {item.title}
                                            </h3>
                                            <div className={`h-px w-12 transition-all duration-500 my-4 ${isActive ? 'bg-remax-red w-full' : 'bg-zinc-700 group-hover:w-24'}`}></div>
                                            <div className={`flex items-center gap-2 text-sm font-medium transition-all ${isActive ? 'text-white translate-x-2' : 'text-zinc-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                                                {t.plans.view_details} <MoveRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-8">
                            <div className="relative bg-zinc-800/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden min-h-[600px] flex flex-col group">
                                {/* Decorative "Blueprint" Grid */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                                        backgroundSize: '40px 40px'
                                    }}>
                                </div>
                                <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none transform -rotate-12 transition-transform duration-700 group-hover:scale-110">
                                    <Grid className="w-96 h-96 text-white" />
                                </div>

                                {/* Header of active plan */}
                                <div className="relative mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8 z-10">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{plans[activeTab].title}</h3>
                                        <p className="text-zinc-400">{plans[activeTab].description}</p>
                                    </div>

                                </div>

                                {/* Grid of Rooms */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                    {plans[activeTab].details.map((detail, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-center gap-5 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-remax-red group-hover:border-remax-red/20 transition-all duration-300">
                                                {getIcon(detail.label)}
                                            </div>
                                            <div>
                                                <p className="text-sm text-zinc-500 font-medium mb-1">{detail.label}</p>
                                                <p className="text-xl font-bold text-white tracking-wide">{detail.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-10 text-center md:text-right">
                                    <p className="text-xs text-zinc-600 font-mono tracking-widest">
                                        {t.plans.measure_note}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
