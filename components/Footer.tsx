'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900 text-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    &copy; {new Date().getFullYear()} Nefes Villaları. {t.footer.rights}
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
                    <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
                </div>
            </div>
        </footer>
    );
}
