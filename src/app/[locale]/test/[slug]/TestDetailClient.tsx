'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft, Clock, Users, Play, Share2, Heart } from 'lucide-react';
import {
  getTestBySlugForLocale,
  getCategoriesForLocale,
  formatParticipantCount
} from '@/lib/data-loader';
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

const categoryThemes: Record<string, { from: string; via: string; to: string; accent: string }> = {
  personality: { from: 'from-blue-500', via: 'via-indigo-500', to: 'to-violet-500', accent: 'text-blue-600' },
  psychology: { from: 'from-rose-500', via: 'via-pink-500', to: 'to-fuchsia-500', accent: 'text-rose-600' },
  relationship: { from: 'from-pink-500', via: 'via-rose-500', to: 'to-red-500', accent: 'text-pink-600' },
  career: { from: 'from-emerald-500', via: 'via-teal-500', to: 'to-cyan-500', accent: 'text-emerald-600' },
  fun: { from: 'from-amber-500', via: 'via-orange-500', to: 'to-yellow-500', accent: 'text-amber-600' },
  iq: { from: 'from-violet-500', via: 'via-purple-500', to: 'to-indigo-500', accent: 'text-violet-600' },
};

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

const FAVORITES_KEY = 'ai-playground-favorites';

function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function toggleFavoriteUtil(slug: string): boolean {
  const favorites = getFavorites();
  const index = favorites.indexOf(slug);
  if (index === -1) {
    favorites.push(slug);
  } else {
    favorites.splice(index, 1);
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return index === -1;
}

interface Props {
  slug: string;
  locale: string;
}

export default function TestDetailClient({ slug, locale }: Props) {
  const t = useTranslations('test');
  const tCommon = useTranslations('common');

  const test = getTestBySlugForLocale(locale, slug);
  const categories = getCategoriesForLocale(locale);

  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const patternElements = useMemo(() => {
    if (!test) return [];
    const hash = hashString(test.slug + test.title);
    const elements = [];
    const shapes = ['circle', 'square', 'triangle', 'ring'];

    for (let i = 0; i < 8; i++) {
      const shapeIndex = (hash + i * 17) % shapes.length;
      elements.push({
        shape: shapes[shapeIndex],
        x: ((hash * (i + 1) * 13) % 80) + 10,
        y: ((hash * (i + 1) * 7) % 60) + 20,
        size: ((hash * (i + 1)) % 30) + 20,
        rotation: ((hash * (i + 1)) % 360),
        opacity: 0.1 + ((hash * (i + 1)) % 15) / 100,
      });
    }
    return elements;
  }, [test]);

  useEffect(() => {
    setIsFavorite(getFavorites().includes(slug));
  }, [slug]);

  if (!test) {
    return (
      <div className="text-center py-16">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{t('loadError')}</h1>
        <Link href="/" className="text-indigo-600 dark:text-indigo-400 text-sm">{tCommon('home')}</Link>
      </div>
    );
  }

  const category = categories.find((c) => c.id === test.categoryId);
  const theme = categoryThemes[test.categoryId] || categoryThemes.personality;

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
        return <div key={index} className="bg-white rounded-full" style={{ ...commonStyle, width: size, height: size }} />;
      case 'square':
        return <div key={index} className="bg-white rounded-lg" style={{ ...commonStyle, width: size, height: size }} />;
      case 'triangle':
        return (
          <div key={index} style={{
            ...commonStyle, width: 0, height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid rgba(255,255,255,${opacity})`,
            background: 'transparent',
          }} />
        );
      case 'ring':
        return <div key={index} className="border-4 border-white rounded-full bg-transparent" style={{ ...commonStyle, width: size, height: size }} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Back */}
      <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-3">
        <ArrowLeft className="w-4 h-4" />
        {t('backHome')}
      </Link>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Hero */}
        <div className={`relative h-28 bg-gradient-to-br ${theme.from} ${theme.via} ${theme.to} overflow-hidden`}>
          {patternElements.map((el, i) => renderShape(el, i))}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="primary" className="px-2 py-0.5 text-xs bg-white/90 text-gray-800">
              {category?.name}
            </Badge>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
            <div className="flex items-center gap-2">
              <span className="text-3xl drop-shadow-lg">{categoryEmoji[test.categoryId] || '🎯'}</span>
              <p className="text-xs text-white/80">{t('questionInfo', { count: test.questionCount, time: test.estimatedTime })}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {test.tags.map((tag) => (
              <span key={tag} className="text-xs text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 px-1.5 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{test.title}</h1>

          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {test.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {t('estimatedTime', { minutes: test.estimatedTime })}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {t('participation', { count: formatParticipantCount(test.participantCount) })}
            </span>
            <span>{t('questions')} {t('questionsCount', { count: test.questionCount })}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Link href={`/test/${slug}/play`} className="flex-1">
              <Button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-sm">
                <Play className="w-4 h-4" />
                {t('startTest')}
              </Button>
            </Link>
            <button
              onClick={() => { const s = toggleFavoriteUtil(slug); setIsFavorite(s); }}
              className={`p-2.5 border rounded-xl transition-colors ${
                isFavorite
                  ? 'border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/30'
                  : 'border-gray-200 dark:border-gray-600'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
            </button>
            <button
              onClick={() => setShowShareModal(!showShareModal)}
              className="p-2.5 border border-gray-200 dark:border-gray-600 rounded-xl"
            >
              <Share2 className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {showShareModal && (
            <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">{t('share')}</h3>
              <ShareButtons title={test.title} description={test.shortDescription} hashtags={test.tags} />
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
        <h2 className="font-bold text-sm text-gray-900 dark:text-white mb-3">{t('testGuide')}</h2>
        <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-0.5">•</span>
            <span>{t('guideNoAnswer')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-0.5">•</span>
            <span>{t('guideInstantResult')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 mt-0.5">•</span>
            <span>{t('guideShare')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
