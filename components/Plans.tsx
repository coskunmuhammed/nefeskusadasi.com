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

        return (
        <section id="plans" className="py-24 bg-zinc-900 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t.plans.title}
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        {t.plans.description}
                    </p>
                </div>

                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-10 text-center md:text-right">
                                    <p className="text-xs text-zinc-600 font-mono tracking-widest">
                                        {t.plans.measure_note}
                                    </p>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </section >
    );
}
