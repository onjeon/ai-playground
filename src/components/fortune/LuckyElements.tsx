'use client';

import { ReactNode } from 'react';

export interface LuckyElement {
  icon: ReactNode;
  label: string;
  value: string;
}

interface LuckyElementsProps {
  title?: string;
  titleEmoji?: string;
  elements: LuckyElement[];
  bgColor?: string;
  borderColor?: string;
  iconBgColor?: string;
  textColor?: string;
  columns?: 2 | 3 | 4;
}

export default function LuckyElements({
  title = '행운의 요소',
  titleEmoji = '',
  elements,
  bgColor = 'from-purple-900/30 to-pink-900/30',
  borderColor = 'border-purple-500/30',
  iconBgColor = 'bg-purple-500/20',
  textColor = 'text-purple-300',
  columns = 3,
}: LuckyElementsProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  }[columns];

  return (
    <div className={`bg-gradient-to-br ${bgColor} rounded-2xl p-6 border ${borderColor}`}>
      <h2 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
        {titleEmoji && <span className="text-2xl">{titleEmoji}</span>}
        {title}
      </h2>
      
      <div className={`grid ${gridCols} gap-4`}>
        {elements.map((element, index) => (
          <div key={index} className="text-center">
            <div className={`flex items-center justify-center w-12 h-12 mx-auto mb-2 ${iconBgColor} rounded-full`}>
              {element.icon}
            </div>
            <div className={`text-xs ${textColor}/60 mb-1`}>{element.label}</div>
            <div className={`${textColor} font-bold`}>
              {element.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
