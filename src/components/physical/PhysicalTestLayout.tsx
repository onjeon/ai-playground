'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface PhysicalTestLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  bgColor?: string;
}

export default function PhysicalTestLayout({
  children,
  title,
  description,
  bgColor = 'bg-gray-900',
}: PhysicalTestLayoutProps) {
  return (
    <div className={`min-h-screen ${bgColor}`}>
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/physical" className="text-gray-400 hover:text-white transition-colors">
            &larr; 피지컬 테스트
          </Link>
          <h1 className="text-white font-medium">{title}</h1>
          <div className="w-16" /> {/* Spacer */}
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="max-w-4xl mx-auto px-4 py-3 text-center">
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );
}
