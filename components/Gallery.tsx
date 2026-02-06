'use client';

import { useState } from 'react';
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
];

export default function Gallery() {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openModal = (index: number) => setSelectedImage(index);
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
                        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                        <div className="flex animate-scroll hover:pause gap-6 w-max">
                            {/* We double the images to create a seamless infinite loop */}
                            {[...images, ...images].map((img, globalIndex) => {
                                // Adjust index mapping for modal since we duplicated the array
                                const originalIndex = globalIndex % images.length;
                                return (
                                    <div
                                        key={globalIndex}
                                        className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer h-[350px] w-[450px] flex-shrink-0"
                                        onClick={() => openModal(originalIndex)}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/90 p-3 rounded-full backdrop-blur-sm shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                                                <ZoomIn className="w-6 h-6 text-remax-dark" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
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
