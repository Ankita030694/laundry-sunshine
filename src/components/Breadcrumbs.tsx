"use client";

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
      <Link href="/" className="hover:text-brand-orange transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-gray-400">/</span>
          {index === items.length - 1 ? (
            <span className="text-brand-blue font-bold">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-brand-orange transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
