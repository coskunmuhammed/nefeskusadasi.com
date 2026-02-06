'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const images = [
    { src: '/images/gallery/1.jpg', alt: 'Nefes Villaları İç Mekan 1' },
    { src: '/images/gallery/2.jpg', alt: 'Nefes Villaları İç Mekan 2' },
    { src: '/images/gallery/3.jpg', alt: 'Nefes Villaları Merdiven ' },
    { src: '/images/gallery/4.jpg', alt: 'Nefes Villaları Salon' },
    { src: '/images/gallery/5.jpg', alt: 'Nefes Villaları Yemek Alanı' },
    { src: '/images/gallery/6.jpg', alt: 'Nefes Villaları Dış Cephe' },
    { src: '/images/gallery/7.jpg', alt: 'Nefes Villaları Havuz' },
    { src: '/images/gallery/8.jpg', alt: 'Nefes Villaları Havuz ve Manzara' },
    { src: '/images/gallery/9.jpg', alt: 'Nefes Villaları Salon Detay' },
    { src: '/images/gallery/10.jpg', alt: 'Nefes Villaları Mutfak' },
    { src: '/images/gallery/11.jpg', alt: 'Nefes Villaları Yatak Odası' },
    { src: '/images/gallery/12.jpg', alt: 'Nefes Villaları Merdiven ve Sanat' },
    { src: '/images/gallery/13.jpg', alt: 'Nefes Villaları Yatak Odası ve Balkon' },
    { src: '/images/gallery/14.jpg', alt: 'Nefes Villaları Banyo' },
    { src: '/images/gallery/15.jpg', alt: 'Nefes Villaları Ana Yatak Odası' },
];

export default function Gallery() {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const openModal = (index: number) => {
        if (!isDragging) {
            setSelectedImage(index);
        }
    };
    const closeModal = () => setSelectedImage(null);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length);
        }
    };

    // Mouse Drag Handlers
    const handleMouseDown = (e: MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(false); // Assume click initially
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!scrollRef.current) return;
        // Only start scrolling if mouse is down (we can check buttons or track separate 'isMouseDown' state)
        // But better: checks e.buttons === 1 (primary button)
        if (e.buttons !== 1) return;

        e.preventDefault();
        setIsDragging(true); // Now we are definitely dragging
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        // Delay resetting dragging state slightly to prevent onClick from firing immediately after drag
        setTimeout(() => setIsDragging(false), 50);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    }

    return (
        <section className="py-20 bg-slate-50" id="gallery">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-remax-red font-semibold tracking-wider uppercase text-sm">{t.gallery.subtitle}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-remax-dark mt-2 mb-6">
                            {t.gallery.title} <span className="text-remax-red">{t.gallery.title_highlight}</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            {t.gallery.description}
                        </p>
                    </div>

                    <div className="relative w-full overflow-hidden mask-gradient">
                        {/* Gradient Masks */}
                        <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-8 pt-4 px-4 md:px-0"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl shadow-md flex-shrink-0 h-[300px] w-[350px] md:h-[350px] md:w-[450px] transition-transform duration-300 hover:-translate-y-1 select-none"
                                    onClick={() => openModal(index)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                                        draggable={false}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 p-3 rounded-full backdrop-blur-sm shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                                            <ZoomIn className="w-6 h-6 text-remax-dark" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
                        onClick={closeModal}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 hidden md:block"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 rounded-full hover:bg-white/10 hidden md:block"
                        onClick={nextImage}
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={images[selectedImage].src}
                            alt={images[selectedImage].alt}
                            fill
                            className="object-contain"
                            priority
                            quality={100}
                        />
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-medium tracking-wide">
                        {selectedImage + 1} / {images.length}
                    </div>
                </div>
            )}
        </section>
    );
}
