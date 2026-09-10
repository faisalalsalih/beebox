import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const sampleCards = [
    {
        id: 1,
        title: 'Streetwear Oversized Hoodie',
        price: '$89.00',
        description: 'Heavyweight cotton blend with drop shoulders and a relaxed fit.',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Urban Cargo Jacket',
        price: '$140.00',
        description: 'Weatherproof utility jacket featuring modular tactical pockets.',
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Cyberpunk Cyber-Tee',
        price: '$55.00',
        description: 'Breathable graphic tee printed with reflective metallic ink.',
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Retro High-Top Sneakers',
        price: '$120.00',
        description: 'Classic silhouette constructed with genuine leather paneling.',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        title: 'Tactical Utility Vest',
        price: '$95.00',
        description: 'Lightweight nylon vest built for outdoor layering and utility.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    },
];

const AUTO_PLAY_INTERVAL = 4000;

export const Carousel: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const firstCardRef = useRef<HTMLElement>(null);

    const isAnimatingRef = useRef(false);
    const isHoveredRef = useRef(false);

    // Triple array duplication for infinite seamless loop
    const cards = [...sampleCards, ...sampleCards, ...sampleCards];
    const singleSetLength = sampleCards.length;

    const [cardStep, setCardStep] = useState(0);

    // Measure live pixel dimensions directly via DOM measurement
    const updateMetrics = useCallback(() => {
        if (!firstCardRef.current || !trackRef.current) return;
        const cardWidth = firstCardRef.current.getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(trackRef.current).gap) || 16;
        
        // Exact floating point step value avoids sub-pixel stuttering
        setCardStep(cardWidth + gap);
    }, []);

    // ResizeObserver watches the actual element dimensions instead of window resize alone
    useEffect(() => {
        updateMetrics();

        if (!containerRef.current || !firstCardRef.current) return;

        const observer = new ResizeObserver(() => {
            updateMetrics();
        });

        observer.observe(containerRef.current);
        observer.observe(firstCardRef.current);

        return () => observer.disconnect();
    }, [updateMetrics]);

    const { contextSafe } = useGSAP({ scope: containerRef });

    // Calculate center offset relative to the viewport container width
    const getCenterOffset = useCallback(() => {
        if (!containerRef.current || cardStep === 0) return 0;
        const containerWidth = containerRef.current.clientWidth;
        const cardWidth = firstCardRef.current?.getBoundingClientRect().width || 0;
        return (containerWidth - cardWidth) / 2 - singleSetLength * cardStep;
    }, [cardStep, singleSetLength]);

    // Initial Position & Re-alignment on Dimension Changes
    useGSAP(() => {
        if (!trackRef.current || cardStep === 0) return;
        
        // Kill active tweens on resize to prevent position conflicts
        gsap.killTweensOf(trackRef.current);
        isAnimatingRef.current = false;

        const initialX = getCenterOffset();
        gsap.set(trackRef.current, { x: initialX });
    }, { scope: containerRef, dependencies: [cardStep, getCenterOffset] });

    // Navigation Step Function
    const animateToStep = contextSafe((direction: 'next' | 'prev') => {
        if (isAnimatingRef.current || !trackRef.current || cardStep === 0) return;
        isAnimatingRef.current = true;

        const currentX = gsap.getProperty(trackRef.current, 'x') as number;
        const delta = direction === 'next' ? -cardStep : cardStep;
        const targetX = currentX + delta;

        gsap.to(trackRef.current, {
            x: targetX,
            duration: 0.7,
            ease: 'power2.out',
            force3D: true,
            onComplete: () => {
                isAnimatingRef.current = false;

                const singleSetWidth = singleSetLength * cardStep;
                const centerOffset = getCenterOffset();

                // Safe threshold window before snapping back
                const minBound = centerOffset - singleSetWidth + 1;
                const maxBound = centerOffset + singleSetWidth - 1;

                let resetX = targetX;
                if (targetX <= minBound) {
                    resetX += singleSetWidth;
                } else if (targetX >= maxBound) {
                    resetX -= singleSetWidth;
                }

                if (Math.abs(resetX - targetX) > 0.5) {
                    gsap.set(trackRef.current, { x: resetX });
                }
            },
        });
    });

    // Auto-play Interval Setup
    useGSAP(() => {
        if (cardStep === 0) return;
        const timer = setInterval(() => {
            if (!isHoveredRef.current && !isAnimatingRef.current) {
                animateToStep('next');
            }
        }, AUTO_PLAY_INTERVAL);

        return () => clearInterval(timer);
    }, { scope: containerRef, dependencies: [cardStep] });

    return (
        <section className="w-full max-w-7xl mx-auto py-10 md:py-16 overflow-hidden bg-background text-black">
            {/* Header */}
            <div className="max-w-3xl px-4 mb-8 md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase mb-3 md:mb-4">
                    Featured Drops: Stand Out, Stay Ahead
                </h1>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                    Exclusive designs, premium materials, and street-ready vibes—these must-have pieces are setting the trend.
                </p>
            </div>

            {/* Frame Container */}
            <div
                ref={containerRef}
                className="relative mx-auto overflow-hidden py-4 max-sm:w-[calc(100vw-32px)] sm:w-full"
                onMouseEnter={() => { isHoveredRef.current = true; }}
                onMouseLeave={() => { isHoveredRef.current = false; }}
                onTouchStart={() => { isHoveredRef.current = true; }}
                onTouchEnd={() => { isHoveredRef.current = false; }}
            >
                <div
                    ref={trackRef}
                    className="flex gap-4 sm:gap-6 will-change-transform"
                >
                    {cards.map((card, index) => (
                        <article
                            key={`${card.id}-${index}`}
                            ref={index === 0 ? firstCardRef : null}
                            className="relative h-[500px] sm:h-[600px] w-[calc(100vw-32px)] sm:w-[320px] md:w-[380px] shrink-0 rounded-2xl overflow-hidden border flex flex-col justify-between select-none"
                        >
                            <div className="h-full w-full overflow-hidden relative z-10 bg-neutral-800">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover pointer-events-none"
                                />
                            </div>

                            <div className="absolute z-20 p-5 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent w-full">
                                <h1 className="text-xl font-bold uppercase text-white">{card.title}</h1>
                                <p className="text-sm text-white/90 mt-1">{card.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-6 md:mt-10">
                <button
                    onClick={() => animateToStep('prev')}
                    aria-label="Previous Slide"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white flex items-center justify-center border border-neutral-800 transition-all shadow-xl cursor-pointer"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => animateToStep('next')}
                    aria-label="Next Slide"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white flex items-center justify-center border border-neutral-800 transition-all shadow-xl cursor-pointer"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Carousel;