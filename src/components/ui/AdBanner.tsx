'use client';

interface AdBannerProps {
  className?: string;
  variant?: 'horizontal' | 'square' | 'vertical';
}

export function AdBanner({ className = '', variant = 'horizontal' }: AdBannerProps) {
  const sizeClasses = {
    horizontal: 'h-24',  // 가로형 배너
    square: 'h-64',      // 정사각형
    vertical: 'h-96',    // 세로형
  };

  return (
    <div 
      className={`bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl text-center border border-gray-200 dark:border-gray-600 overflow-hidden ${className}`}
    >
      <p className="text-[10px] text-gray-400 py-1 bg-gray-100 dark:bg-gray-700 uppercase tracking-wider">
        sponsored
      </p>
      <div className={`${sizeClasses[variant]} flex items-center justify-center`}>
        <div className="text-gray-400 text-sm">
          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs">광고 영역</span>
        </div>
      </div>
    </div>
  );
}
