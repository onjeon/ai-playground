'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Users, Play, Share2, Heart } from 'lucide-react';
import { getTestBySlug, formatParticipantCount, categories } from '@/lib/data';
import { Button, Badge } from '@/components/ui';
import ShareButtons from '@/components/ShareButtons';

const categoryEmoji: Record<string, string> = {
  personality: '🧠',
  psychology: '💭',
  relationship: '💕',
  career: '💼',
  fun: '✨',
  iq: '💡',
};

// 로컬 스토리지 키
const FAVORITES_KEY = 'ai-playground-favorites';

// 즐겨찾기 관련 유틸 함수
function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function toggleFavorite(slug: string): boolean {
  const favorites = getFavorites();
  const index = favorites.indexOf(slug);
  
  if (index === -1) {
    favorites.push(slug);
  } else {
    favorites.splice(index, 1);
  }
  
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return index === -1; // 추가되면 true, 제거되면 false
}

interface Props {
  slug: string;
}

export default function TestDetailClient({ slug }: Props) {
  const test = getTestBySlug(slug);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    // 클라이언트에서 즐겨찾기 상태 확인
    setIsFavorite(getFavorites().includes(slug));
  }, [slug]);

  if (!test) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">테스트를 찾을 수 없습니다</h1>
        <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const category = categories.find((c) => c.id === test.categoryId);

  const handleFavoriteClick = () => {
    const newState = toggleFavorite(slug);
    setIsFavorite(newState);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back Button - 홈으로 이동 */}
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        홈으로
      </Link>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Hero Image */}
        <div className="relative aspect-video bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-indigo-900/50 dark:via-purple-900/30 dark:to-pink-900/30 flex items-center justify-center">
          <span className="text-8xl">
            {categoryEmoji[test.categoryId] || '🎯'}
          </span>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="primary" className="px-3 py-1">
              {category?.name}
            </Badge>
          </div>

          {/* Premium Badge */}
          {test.isPremium && (
            <div className="absolute top-4 right-4">
              <Badge variant="premium" className="px-3 py-1">
                프리미엄
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {test.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {test.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {test.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>약 {test.estimatedTime}분</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>{formatParticipantCount(test.participantCount)} 참여</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-gray-400">질문</span>
              <span>{test.questionCount}개</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link href={`/test/${slug}/play`} className="flex-1">
              <Button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                테스트 시작하기
              </Button>
            </Link>
            <button 
              onClick={handleFavoriteClick}
              className={`p-3 border rounded-xl transition-colors ${
                isFavorite 
                  ? 'border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/30' 
                  : 'border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              aria-label={isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
            </button>
            <button 
              onClick={() => setShowShareModal(!showShareModal)}
              className="p-3 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="공유하기"
            >
              <Share2 className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Share Modal */}
          {showShareModal && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">공유하기</h3>
              <ShareButtons 
                title={test.title}
                description={test.shortDescription}
                hashtags={test.tags}
              />
            </div>
          )}

          {/* Price Info */}
          {test.isPremium && (
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl text-center">
              <span className="text-amber-800 dark:text-amber-300">
                이 테스트는 <strong>₩{test.price.toLocaleString()}</strong>의 프리미엄 테스트입니다.
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <h2 className="font-bold text-gray-900 dark:text-white mb-4">테스트 안내</h2>
        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-0.5">•</span>
            <span>정답이 없는 테스트입니다. 편하게 솔직하게 답변해주세요.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-0.5">•</span>
            <span>결과는 테스트 완료 후 바로 확인할 수 있습니다.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-0.5">•</span>
            <span>결과를 친구들과 공유하고 비교해보세요!</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
