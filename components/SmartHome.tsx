'use client';

import { Smartphone, Shield, Thermometer, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SmartHome() {
    const { t } = useLanguage();

    const features = [
        {
            icon: Smartphone,
            title: t.smart_home.feature1,
            description: t.smart_home.feature1_desc
        },
        {
            icon: Shield,
            title: t.smart_home.feature2,
            description: t.smart_home.feature2_desc
        },
        {
            icon: Thermometer,
            title: t.smart_home.feature3,
            description: t.smart_home.feature3_desc
        },
        {
            icon: Lightbulb,
            title: t.smart_home.feature4,
            description: t.smart_home.feature4_desc
        }
    ];

    return (
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black z-0" />

            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-remax-red/20 border border-remax-red/30 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-remax-red animate-pulse" />
                            <span className="text-xs font-bold tracking-wide text-remax-red uppercase">{t.smart_home.badge}</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {t.smart_home.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-remax-red to-orange-500">{t.smart_home.title_highlight}</span>
                        </h2>

                        <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
                            {t.smart_home.desc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-remax-red/30 transition-all duration-300 group">
                                    <div className="w-10 h-10 rounded-lg bg-remax-red/20 flex items-center justify-center text-remax-red group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual / Phone Mockup */}
                    <div className="w-full lg:w-1/2 flex justify-center relative perspective-1000 mt-12 lg:mt-0">
                        {/* Phone Container - iPhone 14/15 Pro Style */}
                        <div className="relative w-80 max-w-[85vw] h-[620px] bg-black rounded-[3.5rem] shadow-2xl overflow-hidden z-20 transform lg:rotate-[-5deg] hover:rotate-0 transition-all duration-500 border-[8px] border-slate-800 ring-1 ring-white/20">
                            {/* Metallic Frame Gradient */}
                            <div className="absolute inset-0 rounded-[3rem] pointer-events-none border-[6px] border-slate-700/50" />

                            {/* Screen */}
                            <div className="absolute inset-0 bg-slate-950 flex flex-col items-center">
                                {/* Dynamic Island / Notch */}
                                <div className="absolute top-0 w-full flex justify-center pt-2 z-30">
                                    <div className="w-32 h-9 bg-black rounded-full flex items-center justify-center gap-3 px-3">
                                        <div className="w-2 h-2 rounded-full bg-slate-800/50" />
                                        <div className="w-16 h-4 rounded-full bg-slate-900/30" />
                                    </div>
                                </div>

                                {/* Status Bar Sim */}
                                <div className="w-full px-8 pt-4 flex justify-between text-[10px] text-white/40 font-medium z-20">
                                    <span>20:26</span>
                                    <div className="flex gap-1.5">
                                        <div className="flex items-end gap-0.5">
                                            <div className="w-0.5 h-1 bg-white/40 rounded-sm" />
                                            <div className="w-0.5 h-1.5 bg-white/40 rounded-sm" />
                                            <div className="w-0.5 h-2.5 bg-white/40 rounded-sm" />
                                        </div>
                                        <div className="w-4 h-2.5 border-[1px] border-white/30 rounded-[2px] relative">
                                            <div className="absolute inset-0.5 bg-white/40 rounded-[0.5px]" />
                                        </div>
                                    </div>
                                </div>

                                {/* App UI */}
                                <div className="w-full px-6 pt-12 space-y-5">
                                    {/* Header Info */}
                                    <div>
                                        <h3 className="text-white text-xl font-bold">NeFeS</h3>
                                        <p className="text-xs text-white/50">{t.smart_home.phone_app_desc}</p>
                                    </div>

                                    {/* Main Card */}
                                    <div className="aspect-[4/3] bg-gradient-to-br from-remax-red/20 to-remax-red/5 rounded-3xl border border-remax-red/10 flex flex-col items-center justify-center gap-1 relative overflow-hidden group/card shadow-lg shadow-remax-red/5">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-remax-red/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                        <div className="text-5xl font-bold text-white tracking-tighter">24°</div>
                                        <div className="text-[10px] font-bold text-remax-red uppercase tracking-widest bg-white/5 px-2 py-1 rounded-full">{t.smart_home.phone_temp}</div>
                                    </div>

                                    {/* Control Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center gap-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                                                <Lightbulb className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-medium text-slate-300">{t.smart_home.phone_lights}</span>
                                        </div>
                                        <div className="aspect-square bg-white/5 rounded-3xl flex flex-col items-center justify-center gap-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                                <Shield className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-medium text-slate-300">{t.smart_home.phone_security}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Home Indicator */}
                                <div className="absolute bottom-2 w-full flex justify-center pb-2">
                                    <div className="w-32 h-1.5 bg-white/20 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Glow effect behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-remax-red/20 rounded-full blur-[100px] -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
