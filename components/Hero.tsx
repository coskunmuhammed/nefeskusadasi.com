'use client';

import { ArrowDown, Home, Maximize2, Waves, Trees } from 'lucide-react';
import { ArrowRight, Phone, User } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/hero-new.jpg"
                    alt="Nefes Villaları"
                    className="w-full h-full object-cover animate-scale-slow"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12 mt-32 md:mt-20">
                {/* Left Content */}
                <div className="max-w-2xl text-white">

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
                        {t.hero.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-lg animate-fade-in-up delay-200">
                        {t.hero.subtitle}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-white/10 animate-fade-in-up delay-300">
                        <div>
                            <div className="text-3xl font-bold font-mono">3000m²</div>
                            <div className="text-sm text-gray-400 mt-1">{t.hero.stats_land}</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold font-mono">8</div>
                            <div className="text-sm text-gray-400 mt-1">{t.hero.stats_villa}</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold font-mono">4+1</div>
                            <div className="text-sm text-gray-400 mt-1">{t.hero.stats_type}</div>
                        </div>
                    </div>
                </div>

                {/* Right Form Card */}
                <div className="w-full max-w-md animate-fade-in-up delay-500">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-remax-red via-white to-remax-red opacity-50" />

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{t.hero.form_title}</h3>
                            <p className="text-gray-300 text-sm">{t.hero.form_desc}</p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const formData = new FormData(form);
                            const name = formData.get('name') as string;
                            const phone = formData.get('phone') as string;

                            if (!name || !phone) return;

                            const subject = encodeURIComponent("Nefes Kuşadası Bilgi Talebi");
                            const body = encodeURIComponent(`Merhaba,\n\nNefes Villaları hakkında bilgi almak istiyorum.\n\nİsim: ${name}\nTelefon: ${phone}\n\nİyi çalışmalar.`);

                            window.location.href = `mailto:ferhatsaglam@remax-yildiz.com?subject=${subject}&body=${body}`;
                        }}>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">{t.hero.form_name}</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400 group-focus-within/input:text-remax-red transition-colors" />
                                    </div>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Ad Soyad"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-remax-red/50 focus:border-remax-red/50 transition-all font-light"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">{t.hero.form_phone}</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400 group-focus-within/input:text-remax-red transition-colors" />
                                    </div>
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="0555 555 55 55"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-remax-red/50 focus:border-remax-red/50 transition-all font-mono"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-remax-red hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-remax-red/20 flex items-center justify-center gap-2 group/btn mt-2">
                                <span>{t.hero.form_submit}</span>
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-gray-400">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>{t.hero.badge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
