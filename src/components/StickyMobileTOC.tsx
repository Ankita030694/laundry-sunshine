"use client";

import { useEffect, useState, useRef } from 'react';

interface Section {
    id: string;
    title: string;
}

export default function StickyMobileTOC({ sections }: { sections: Section[] }) {
    const [activeId, setActiveId] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Show navigation after scrolling 600px (past hero/intro)
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-10% 0% -80% 0%',
                threshold: 0
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, [sections]);

    // Sync scroll position of chips when active section changes
    useEffect(() => {
        if (activeId && scrollRef.current) {
            const activeElement = scrollRef.current.querySelector(`[data-id="${activeId}"]`) as HTMLElement;
            if (activeElement) {
                const container = scrollRef.current;
                const scrollLeft = activeElement.offsetLeft - (container.offsetWidth / 2) + (activeElement.offsetWidth / 2);
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    }, [activeId]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 140; // Navbar (80) + TOC Bar (60)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div
            className={`fixed top-[74px] left-0 w-full z-[150] transition-all duration-500 lg:hidden ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                }`}
        >
            <div className="bg-white/95 backdrop-blur-md border-b border-orange-100/30 py-3 shadow-lg shadow-black/5">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-2 px-4 scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            data-id={section.id}
                            onClick={(e) => handleClick(e, section.id)}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all border shrink-0 ${activeId === section.id
                                    ? 'bg-brand-orange text-white border-brand-orange shadow-md shadow-brand-orange/20 scale-105'
                                    : 'bg-white/50 text-gray-500 border-gray-100'
                                }`}
                        >
                            {section.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
