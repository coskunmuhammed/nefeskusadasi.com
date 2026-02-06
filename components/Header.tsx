'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { t, language, setLanguage } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen
                ? 'bg-zinc-900 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-4 relative h-16 w-64">
                    {/* Combined logo image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/combined-logo.png"
                        alt="Nefes Villaları & Remax Yıldız"
                        className={`absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 h-32 w-auto max-w-none object-contain transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'invert brightness-0' : 'brightness-0 invert'}`}
                    />
                    <a
                        href="https://remax.com.tr/tr/ofis/detay/yildiz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-48 h-20 z-10"
                        aria-label="Remax Yıldız"
                    />
                </div>

                {/* Desktop Navigation Menu */}
                <nav className="hidden lg:flex items-center gap-8">
                    <button onClick={() => scrollToSection('hero')} className={`text-sm font-medium transition-colors hover:text-remax-red ${isScrolled ? 'text-white' : 'text-white'}`}>{t.header.home}</button>
                    <button onClick={() => scrollToSection('features')} className={`text-sm font-medium transition-colors hover:text-remax-red ${isScrolled ? 'text-white' : 'text-white'}`}>{t.header.features}</button>
                    <button onClick={() => scrollToSection('plans')} className={`text-sm font-medium transition-colors hover:text-remax-red ${isScrolled ? 'text-white' : 'text-white'}`}>{t.header.plans}</button>
                    <button onClick={() => scrollToSection('gallery')} className={`text-sm font-medium transition-colors hover:text-remax-red ${isScrolled ? 'text-white' : 'text-white'}`}>{t.header.gallery}</button>
                    <button onClick={() => scrollToSection('faq')} className={`text-sm font-medium transition-colors hover:text-remax-red ${isScrolled ? 'text-white' : 'text-white'}`}>{t.header.faq}</button>
                    <button onClick={() => scrollToSection('contact')} className={`text-sm font-medium transition-colors hover:text-remax-red ${isScrolled ? 'text-white' : 'text-white'}`}>{t.header.contact}</button>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="hidden sm:flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
                        <button
                            onClick={() => setLanguage('tr')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'tr' ? 'bg-remax-red text-white' : 'text-white hover:bg-white/10'}`}
                        >
                            TR
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-remax-red text-white' : 'text-white hover:bg-white/10'}`}
                        >
                            ENG
                        </button>
                    </div>

                    <button
                        onClick={scrollToContact}
                        className={`hidden sm:block px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${isScrolled
                            ? 'bg-remax-red text-white hover:bg-red-700'
                            : 'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white hover:text-remax-dark'
                            }`}
                    >
                        {t.header.get_info}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-zinc-900 z-40 transition-transform duration-300 pt-24 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col gap-6 text-center">
                    <button onClick={() => scrollToSection('hero')} className="text-xl font-medium text-white hover:text-remax-red">{t.header.home}</button>
                    <button onClick={() => scrollToSection('features')} className="text-xl font-medium text-white hover:text-remax-red">{t.header.features}</button>
                    <button onClick={() => scrollToSection('plans')} className="text-xl font-medium text-white hover:text-remax-red">{t.header.plans}</button>
                    <button onClick={() => scrollToSection('gallery')} className="text-xl font-medium text-white hover:text-remax-red">{t.header.gallery}</button>
                    <button onClick={() => scrollToSection('faq')} className="text-xl font-medium text-white hover:text-remax-red">{t.header.faq}</button>
                    <button onClick={() => scrollToSection('contact')} className="text-xl font-medium text-white hover:text-remax-red">{t.header.contact}</button>

                    <div className="h-px bg-white/10 my-4" />

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => { setLanguage('tr'); setMobileMenuOpen(false); }}
                            className={`px-4 py-2 rounded-full text-sm font-bold border ${language === 'tr' ? 'bg-remax-red text-white border-remax-red' : 'text-white border-white/20'}`}
                        >
                            Türkçe
                        </button>
                        <button
                            onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}
                            className={`px-4 py-2 rounded-full text-sm font-bold border ${language === 'en' ? 'bg-remax-red text-white border-remax-red' : 'text-white border-white/20'}`}
                        >
                            English
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
