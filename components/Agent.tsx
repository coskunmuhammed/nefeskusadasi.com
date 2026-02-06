'use client';

import { Phone, MapPin, Mail, Award, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Agent() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">

                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-remax-red/5 rounded-full blur-3xl -z-0" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl -z-0" />

                    {/* Agent Image */}
                    <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative z-10">
                        <div className="w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden relative group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={t.agent.linkedin_img}
                                alt={t.agent.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-remax-red text-white p-2 rounded-full shadow-lg z-20 animate-bounce-slow">
                            <Award className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Agent Info */}
                    <div className="flex-1 text-center md:text-left z-10 w-full">
                        <div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-remax-red mb-3 shadow-sm">
                            RE/MAX YILDIZ
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-remax-dark mb-2">{t.agent.name}</h2>
                        <p className="text-lg text-slate-500 font-medium mb-6">{t.agent.role}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <a href={`tel:${t.agent.phone_href}`} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-remax-red/30 hover:shadow-md transition-all group">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-remax-red/10 transition-colors">
                                    <Phone className="w-5 h-5 text-slate-400 group-hover:text-remax-red transition-colors" />
                                </div>
                                <span className="text-slate-700 font-medium group-hover:text-remax-dark">{t.agent.phone_display}</span>
                            </a>
                            <a href={`mailto:${t.agent.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-remax-red/30 hover:shadow-md transition-all group">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-remax-red/10 transition-colors">
                                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-remax-red transition-colors" />
                                </div>
                                <span className="text-slate-700 font-medium group-hover:text-remax-dark text-sm break-all">{t.agent.email}</span>
                            </a>
                            <a href={t.agent.website_href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-remax-red/30 hover:shadow-md transition-all group sm:col-span-2">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-remax-red/10 transition-colors">
                                    <Globe className="w-5 h-5 text-slate-400 group-hover:text-remax-red transition-colors" />
                                </div>
                                <span className="text-slate-700 font-medium group-hover:text-remax-dark">{t.agent.website}</span>
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`tel:${t.agent.phone_href}`} className="flex-1 bg-remax-red text-white py-3.5 px-6 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-remax-red/20 flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                {t.agent.call_btn}
                            </a>
                            <a href="https://www.ferhatsaglam.com.tr/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-remax-dark border border-slate-200 py-3.5 px-6 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                                <Globe className="w-5 h-5 text-remax-red" />
                                {t.agent.location_btn}
                            </a>
                        </div>

                        {/* Certificates */}
                        {/* Certificates */}
                        <div className="mt-8 pt-8 border-t border-slate-100 flex justify-center md:justify-start">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/remax-badges.png"
                                alt="Certificates"
                                className="h-16 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
