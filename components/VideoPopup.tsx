'use client';

import { useState, useEffect } from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';

export default function VideoPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        // Show popup on component mount (page load)
        // You could add sessionStorage check here if needed:
        // if (!sessionStorage.getItem('videoShown')) {
        setIsOpen(true);
        //     sessionStorage.setItem('videoShown', 'true');
        // }
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border border-white/10">

                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-all hover:scale-110 group"
                >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Video */}
                <video
                    src="/videos/intro.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted={isMuted}
                    playsInline
                    loop
                    controls={false}
                />

                {/* Controls Overlay */}
                <div className="absolute bottom-6 left-6 z-20 flex gap-4">
                    <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all hover:scale-110 flex items-center gap-2 group"
                    >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 overflow-hidden w-0 group-hover:w-auto whitespace-nowrap">
                            {isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                        </span>
                    </button>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-3 bg-remax-red hover:bg-red-700 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-remax-red/20"
                    >
                        Siteye Devam Et
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-2xl" />
            </div>
        </div>
    );
}
