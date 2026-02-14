"use client";

import { useEffect, useState } from 'react';

interface Section {
  id: string;
  title: string;
}

interface TOCProps {
  sections: Section[];
  orientation?: 'vertical' | 'horizontal';
}

export default function TableOfContents({ sections, orientation = 'horizontal' }: TOCProps) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0% -80% 0%' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  if (orientation === 'vertical') {
    return (
      <div className="space-y-4">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Table of Contents</h4>
        <nav className="flex flex-col space-y-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`text-sm transition-all duration-200 hover:text-brand-orange ${
                activeId === section.id
                  ? 'text-brand-orange font-bold border-l-2 border-brand-orange pl-3'
                  : 'text-gray-500 pl-3 border-l-2 border-transparent'
              }`}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4">Quick Navigation</h4>
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className="text-sm text-gray-500 hover:text-brand-orange transition-colors flex items-center"
          >
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2 opacity-50" />
            {section.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
