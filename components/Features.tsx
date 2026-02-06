'use client';

import { CheckCircle2, Briefcase } from 'lucide-react'; // Added Briefcase import
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
    const { t } = useLanguage();

    const features = [
        t.features.smart_home,
        t.features.underfloor_heating,
        t.features.pool,
        t.features.ac_infra,
        t.features.shutter,
        t.features.fireplace,
        t.features.joinery,
        t.features.facade,
        t.features.lacquer,
        t.features.height,
        t.features.coating,
        t.features.landscape,
    ];

    const detailedFeatures = [
        { title: t.features_detailed.vacuum_title, desc: t.features_detailed.vacuum_desc },
        { title: t.features_detailed.appliances_title, desc: t.features_detailed.appliances_desc },
        { title: t.features_detailed.joinery_title, desc: t.features_detailed.joinery_desc },
        { title: t.features_detailed.furniture_title, desc: t.features_detailed.furniture_desc },
        { title: t.features_detailed.laundry_title, desc: t.features_detailed.laundry_desc },
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-remax-dark mb-4">
                        {t.features.title} <span className="text-remax-red">{t.features.title_highlight}</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        {t.features.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all hover:shadow-md hover:border-remax-red/20 group">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-remax-red group-hover:bg-remax-red group-hover:text-white transition-colors">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-remax-dark">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Detailed Features Section */}
                <div className="max-w-4xl mx-auto bg-stone-50 p-8 rounded-2xl border border-stone-100">
                    <h3 className="text-xl font-bold text-remax-dark mb-6 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-remax-red" />
                        {t.features_detailed.title}
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                        {detailedFeatures.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-remax-red mt-2 shrink-0" />
                                <span>
                                    <strong className="text-remax-dark">{item.title}</strong> {item.desc}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
