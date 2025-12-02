'use client';

import { ReactNode } from 'react';

interface FortuneCategoryCardProps {
  icon: ReactNode;
  label: string;
  description: string;
  gradientColor?: string;
  borderColor?: string;
  textColor?: string;
}

export default function FortuneCategoryCard({
  icon,
  label,
  description,
  gradientColor = 'from-purple-500 to-violet-500',
  borderColor = 'border-purple-500/20',
  textColor = 'text-purple-100/80',
}: FortuneCategoryCardProps) {
  return (
    <div className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-5 border ${borderColor}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-xl bg-gradient-to-r ${gradientColor} text-white`}>
          {icon}
        </div>
        <h3 className="font-bold text-white">{label}</h3>
      </div>
      <p className={`${textColor} text-sm leading-relaxed`}>
        {description}
      </p>
    </div>
  );
}
