'use client';

import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

export interface GradeInfo {
  grade: string;
  emoji: string;
  description: string;
  color: string;
}

interface TestResultProps {
  mainScore: string | number;
  mainUnit?: string;
  grade: GradeInfo;
  stats?: Array<{
    label: string;
    value: string | number;
    unit?: string;
  }>;
  shareTitle: string;
  shareDescription: string;
  shareUrl?: string;
  onRetry: () => void;
  relatedTests?: Array<{
    href: string;
    title: string;
    emoji: string;
  }>;
}

export default function TestResult({
  mainScore,
  mainUnit = '',
  grade,
  stats = [],
  shareTitle,
  shareDescription,
  shareUrl,
  onRetry,
  relatedTests = [],
}: TestResultProps) {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      {/* Result Card */}
      <div className="bg-gray-800 rounded-3xl p-8 mb-6 text-center border border-gray-700">
        <div className="text-6xl mb-4">{grade.emoji}</div>
        <h2 className="text-3xl font-bold text-white mb-2">
          {mainScore}
          {mainUnit && <span className="text-xl text-gray-400 ml-1">{mainUnit}</span>}
        </h2>
        <div className={`text-2xl font-bold ${grade.color} mb-2`}>
          {grade.grade}
        </div>
        <p className="text-gray-400">{grade.description}</p>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-700/50 rounded-xl p-4">
                <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                <div className="text-white font-bold text-xl">
                  {stat.value}
                  {stat.unit && <span className="text-sm text-gray-400 ml-1">{stat.unit}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Share Section */}
      <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
        <h3 className="text-white font-medium text-center mb-4">결과 공유하기</h3>
        <ShareButtons
          title={shareTitle}
          description={shareDescription}
          url={shareUrl}
        />
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={onRetry}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
        >
          다시 도전하기
        </button>
        
        <Link
          href="/physical"
          className="block w-full py-4 bg-gray-800 text-gray-300 font-medium rounded-xl text-center hover:bg-gray-700 transition-colors"
        >
          다른 테스트 하기
        </Link>
      </div>

      {/* Related Tests */}
      {relatedTests.length > 0 && (
        <div className="mt-8">
          <h3 className="text-white font-medium mb-4">추천 테스트</h3>
          <div className="space-y-2">
            {relatedTests.map((test, index) => (
              <Link
                key={index}
                href={test.href}
                className="flex items-center gap-3 bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors"
              >
                <span className="text-2xl">{test.emoji}</span>
                <span className="text-white">{test.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
