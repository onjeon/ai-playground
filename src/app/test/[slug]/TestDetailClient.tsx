'use client';

import { useState, useEffect, useMemo } from 'react';
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

// 카테고리별 색상 테마
const categoryThemes: Record<string, { from: string; via: string; to: string; accent: string }> = {
  personality: { from: 'from-blue-500', via: 'via-indigo-500', to: 'to-violet-500', accent: 'text-blue-600' },
  psychology: { from: 'from-rose-500', via: 'via-pink-500', to: 'to-fuchsia-500', accent: 'text-rose-600' },
  relationship: { from: 'from-pink-500', via: 'via-rose-500', to: 'to-red-500', accent: 'text-pink-600' },
  career: { from: 'from-emerald-500', via: 'via-teal-500', to: 'to-cyan-500', accent: 'text-emerald-600' },
  fun: { from: 'from-amber-500', via: 'via-orange-500', to: 'to-yellow-500', accent: 'text-amber-600' },
  iq: { from: 'from-violet-500', via: 'via-purple-500', to: 'to-indigo-500', accent: 'text-violet-600' },
};

// 문자열 해시 함수 (일관된 패턴 생성용)
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

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

  // 테스트별 고유 패턴 생성
  const patternElements = useMemo(() => {
    if (!test) return [];
    const hash = hashString(test.slug + test.title);
    const elements = [];
    const shapes = ['circle', 'square', 'triangle', 'ring'];
    
    for (let i = 0; i < 8; i++) {
      const shapeIndex = (hash + i * 17) % shapes.length;
      const x = ((hash * (i + 1) * 13) % 80) + 10;
      const y = ((hash * (i + 1) * 7) % 60) + 20;
      const size = ((hash * (i + 1)) % 30) + 20;
      const rotation = ((hash * (i + 1)) % 360);
      const opacity = 0.1 + ((hash * (i + 1)) % 15) / 100;
      
      elements.push({
        shape: shapes[shapeIndex],
        x,
        y,
        size,
        rotation,
        opacity,
      });
    }
    return elements;
  }, [test]);

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
  const theme = categoryThemes[test.categoryId] || categoryThemes.personality;

  const handleFavoriteClick = () => {
    const newState = toggleFavorite(slug);
    setIsFavorite(newState);
  };

  // 패턴 SVG 렌더링
  const renderShape = (element: typeof patternElements[0], index: number) => {
    const { shape, x, y, size, rotation, opacity } = element;
    const commonStyle = {
      position: 'absolute' as const,
      left: `${x}%`,
      top: `${y}%`,
      transform: `rotate(${rotation}deg)`,
      opacity,
    };

    switch (shape) {
      case 'circle':
        return (
          <div
            key={index}
            className="bg-white rounded-full"
            style={{ ...commonStyle, width: size, height: size }}
          />
        );
      case 'square':
        return (
          <div
            key={index}
            className="bg-white rounded-lg"
            style={{ ...commonStyle, width: size, height: size }}
          />
        );
      case 'triangle':
        return (
          <div
            key={index}
            className="border-white"
            style={{
              ...commonStyle,
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid rgba(255,255,255,${opacity})`,
              background: 'transparent',
            }}
          />
        );
      case 'ring':
        return (
          <div
            key={index}
            className="border-4 border-white rounded-full bg-transparent"
            style={{ ...commonStyle, width: size, height: size }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back Button - 홈으로 이동 */}
      <Link
        href="/"
        className="flex items-center gap-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 sm:mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        홈으로
      </Link>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Dynamic Hero Section */}
        <div className={`relative h-28 sm:h-32 bg-gradient-to-br ${theme.from} ${theme.via} ${theme.to} overflow-hidden`}>
          {/* Dynamic Pattern Elements */}
          {patternElements.map((element, index) => renderShape(element, index))}
          
          {/* Category Badge */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
            <Badge variant="primary" className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-white/90 text-gray-800">
              {category?.name}
            </Badge>
          </div>

          {/* Premium Badge */}
          {test.isPremium && (
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
              <Badge variant="premium" className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                프리미엄
              </Badge>
            </div>
          )}
          
          {/* Emoji & Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/40 to-transparent">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-3xl sm:text-4xl drop-shadow-lg">
                {categoryEmoji[test.categoryId] || '🎯'}
              </span>
              <div className="text-white">
                <p className="text-xs sm:text-sm opacity-80">{test.questionCount}문항 · {test.estimatedTime}분 소요</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            {test.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 px-1.5 sm:px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
            {test.title}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
            {test.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>약 {test.estimatedTime}분</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{formatParticipantCount(test.participantCount)} 참여</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-gray-400">질문</span>
              <span>{test.questionCount}개</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3">
            <Link href={test.isPremium ? `/premium/${slug}` : `/test/${slug}/play`} className="flex-1">
              <Button className={`w-full py-2.5 sm:py-3 ${test.isPremium ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 text-sm sm:text-base`}>
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                {test.isPremium ? '프리미엄 테스트 보기' : '테스트 시작하기'}
              </Button>
            </Link>
            <button 
              onClick={handleFavoriteClick}
              className={`p-2.5 sm:p-3 border rounded-lg sm:rounded-xl transition-colors ${
                isFavorite 
                  ? 'border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/30' 
                  : 'border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              aria-label={isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
            </button>
            <button 
              onClick={() => setShowShareModal(!showShareModal)}
              className="p-2.5 sm:p-3 border border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="공유하기"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </button>
          </div>

          {/* Share Modal */}
          {showShareModal && (
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg sm:rounded-xl">
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2 sm:mb-3">공유하기</h3>
              <ShareButtons 
                title={test.title}
                description={test.shortDescription}
                hashtags={test.tags}
              />
            </div>
          )}

          {/* Price Info */}
          {test.isPremium && (
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg sm:rounded-xl text-center">
              <span className="text-sm sm:text-base text-amber-800 dark:text-amber-300">
                이 테스트는 <strong>₩{test.price.toLocaleString()}</strong>의 프리미엄 테스트입니다.
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-4 sm:mt-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
        <h2 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4">테스트 안내</h2>
        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
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
