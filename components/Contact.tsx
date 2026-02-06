'use client';

import { Phone, MessageCircle, Globe, Mail, Instagram, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-remax-dark mb-4 text-center">
                    {t.contact.title} <span className="text-remax-red">{t.contact.title_highlight}</span>
                </h2>
                <p className="text-slate-600 text-lg text-center mb-12 max-w-3xl mx-auto">
                    {t.contact.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column: Contact Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                        <a href="tel:+905052595187" className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-md group">
                            <div className="p-3 bg-red-50 rounded-full group-hover:bg-remax-red/10 transition-colors">
                                <Phone className="w-6 h-6 text-remax-red" />
                            </div>
                            <div>
                                <span className="block text-sm text-slate-500 font-medium">{t.contact.call_us}</span>
                                <span className="text-lg font-bold text-remax-dark">+90 505 259 51 87</span>
                            </div>
                        </a>

                        <a href="https://wa.me/905052595187" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-md group">
                            <div className="p-3 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors">
                                <MessageCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <span className="block text-sm text-slate-500 font-medium">{t.contact.whatsapp}</span>
                                <span className="text-lg font-bold text-remax-dark">+90 505 259 51 87</span>
                            </div>
                        </a>

                        <a href="https://www.remax.com.tr/yildiz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-md group">
                            <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                                <Globe className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <span className="block text-sm text-slate-500 font-medium">{t.contact.website}</span>
                                <span className="text-lg font-bold text-remax-dark">www.remax.com.tr/yildiz</span>
                            </div>
                        </a>

                        <a href="mailto:ferhatsaglam@remax-yildiz.com" className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-md group">
                            <div className="p-3 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors">
                                <Mail className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="block text-sm text-slate-500 font-medium">{t.contact.email}</span>
                                <span className="text-xs sm:text-sm font-bold text-remax-dark break-words block">ferhatsaglam@remax-yildiz.com</span>
                            </div>
                        </a>

                        <a href="https://instagram.com/remaxferhatsaglam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-md group">
                            <div className="p-3 bg-pink-50 rounded-full group-hover:bg-pink-100 transition-colors">
                                <Instagram className="w-6 h-6 text-pink-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="block text-sm text-slate-500 font-medium">{t.contact.instagram}</span>
                                <span className="text-lg font-bold text-remax-dark truncate block">@remaxferhatsaglam</span>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-md group">
                            <div className="p-3 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                                <MapPin className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                                <span className="block text-sm text-slate-500 font-medium">{t.contact.address_label}</span>
                                <span className="text-xs sm:text-sm font-bold text-remax-dark leading-tight block">{t.contact.address_full}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Google Maps */}
                    <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 h-[500px] flex flex-col">
                        <div className="flex-1 w-full rounded-xl overflow-hidden relative bg-slate-100">
                            <iframe
                                src="https://maps.google.com/maps?q=So%C4%9Fucak%2C%20Ku%C5%9Fadas%C4%B1&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Konum Haritası"
                            />
                        </div>
                        <div className="mt-2 text-center">
                            <a
                                href="https://maps.app.goo.gl/rMHFRZGqaqX9Pre27"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-remax-red hover:text-remax-dark font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                <MapPin className="w-5 h-5" />
                                {t.contact.map_btn}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
