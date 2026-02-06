'use client';

import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
    const { t } = useLanguage();

    const faqs = [
        { q: t.faq.q1, a: t.faq.a1 },
        { q: t.faq.q2, a: t.faq.a2 },
        { q: t.faq.q3, a: t.faq.a3 },
        { q: t.faq.q4, a: t.faq.a4 },
    ];

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-remax-dark mb-12 text-center">
                    {t.faq.title}
                </h2>
                <div className="max-w-3xl mx-auto grid gap-6">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-lg font-bold text-remax-dark mb-2">{faq.q}</h3>
                            <p className="text-slate-600">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
