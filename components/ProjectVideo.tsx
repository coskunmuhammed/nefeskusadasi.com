'use client';

import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectVideo() {
    const { t } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 2000);
        }
    };

    const handleMouseLeave = () => {
        if (isPlaying) {
            setShowControls(false);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, []);

    return (
        <section id="video" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black opacity-80 z-0" />
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-remax-red font-semibold tracking-wider uppercase text-sm">{t.video.subtitle}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
                        {t.video.title} <span className="text-remax-red">{t.video.title_highlight}</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {t.video.description}
                    </p>
                </div>

                <div
                    className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-black aspect-video hover:shadow-remax-red/20 transition-all duration-500"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <video
                        ref={videoRef}
                        src="/videos/intro.mp4"
                        poster="/images/gallery/1.jpg"
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={togglePlay}
                        playsInline
                    />

                    {/* Overlay Play Button (Initial or Paused) */}
                    {!isPlaying && (
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-opacity duration-300"
                            onClick={togglePlay}
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-remax-red/90 rounded-full flex items-center justify-center pl-2 shadow-xl border-4 border-white/20 hover:scale-110 transition-transform duration-300 group-hover:bg-remax-red">
                                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
                            </div>
                        </div>
                    )}

                    {/* Bottom Controls */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex gap-4">
                            <button
                                onClick={togglePlay}
                                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all hover:scale-105"
                            >
                                {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white" />}
                            </button>

                            <button
                                onClick={toggleMute}
                                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all hover:scale-105"
                            >
                                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
