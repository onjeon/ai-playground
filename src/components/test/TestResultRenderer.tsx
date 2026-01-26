'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Check, AlertCircle, Heart, Star, Sparkles } from 'lucide-react';
import GlobalShareButtons from '@/components/GlobalShareButtons';
import { BaseTestResult } from '@/lib/testLoader';

interface TestResultRendererProps {
  result: BaseTestResult;
  slug: string;
  testTitle: string;
  testTags?: string[];
}

// 결과에서 배열 필드 추출
function getArrayField(result: BaseTestResult, ...keys: string[]): string[] {
  for (const key of keys) {
    if (Array.isArray(result[key])) {
      return result[key] as string[];
    }
  }
  return [];
}

// 결과에서 문자열 필드 추출
function getStringField(result: BaseTestResult, ...keys: string[]): string | null {
  for (const key of keys) {
    if (typeof result[key] === 'string') {
      return result[key] as string;
    }
  }
  return null;
}

// 결과에서 숫자 필드 추출
function getNumberField(result: BaseTestResult, ...keys: string[]): number | null {
  for (const key of keys) {
    if (typeof result[key] === 'number') {
      return result[key] as number;
    }
  }
  return null;
}

// 그라데이션 클래스 결정
function getGradientClass(result: BaseTestResult): string {
  // colorCode가 있으면 커스텀 그라데이션 사용 (컬러 테스트)
  if (result.colorCode) {
    return '';
  }
  
  // type에 따른 기본 그라데이션
  const type = result.type?.toLowerCase() || '';
  
  if (type.includes('mbti') || type.includes('intj') || type.includes('enfp')) {
    return 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500';
  }
  if (type.includes('love') || type.includes('heart') || type.includes('pink')) {
    return 'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500';
  }
  if (type.includes('brain') || type.includes('iq') || type.includes('logic')) {
    return 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500';
  }
  if (type.includes('stress') || type.includes('burn') || type.includes('anger')) {
    return 'bg-gradient-to-br from-red-500 via-orange-500 to-amber-500';
  }
  if (type.includes('money') || type.includes('rich') || type.includes('wealth')) {
    return 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500';
  }
  if (type.includes('dark') || type.includes('villain') || type.includes('shadow')) {
    return 'bg-gradient-to-br from-gray-800 via-purple-900 to-black';
  }
  
  // 기본 그라데이션
  return 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500';
}

// 섹션 카드 컴포넌트
function SectionCard({ title, icon, children, bgClass }: { 
  title: string; 
  icon?: ReactNode; 
  children: ReactNode;
  bgClass?: string;
}) {
  return (
    <div className={`rounded-xl p-4 ${bgClass || 'bg-gray-50 dark:bg-gray-700/50'}`}>
      <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}

// 태그 목록 컴포넌트
function TagList({ items, colorClass }: { items: string[]; colorClass?: string }) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`px-3 py-1.5 rounded-full text-sm font-medium ${colorClass || 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

// 체크리스트 컴포넌트
function CheckList({ items, icon, colorClass }: { items: string[]; icon?: ReactNode; colorClass?: string }) {
  if (!items.length) return null;
  return (
    <ul className="space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className={`text-sm flex items-center gap-1 ${colorClass || 'text-gray-700 dark:text-gray-300'}`}>
          {icon || <Check className="w-3 h-3" />} {item}
        </li>
      ))}
    </ul>
  );
}

export default function TestResultRenderer({
  result,
  slug,
  testTitle,
  testTags = [],
}: TestResultRendererProps) {
  const t = useTranslations('test');
  const gradientClass = getGradientClass(result);
  const customGradient = result.colorCode 
    ? `linear-gradient(135deg, ${result.colorCode}, ${result.colorCode}90, ${result.colorCode}60)`
    : undefined;

  // 공통 필드 추출
  const traits = getArrayField(result, 'traits', 'characteristics', 'personality');
  const strengths = getArrayField(result, 'strengths', 'charmPoints', 'positiveSignals', 'greenFlags');
  const weaknesses = getArrayField(result, 'weaknesses', 'cautions', 'warningSignals', 'redFlags');
  const tips = getArrayField(result, 'tips', 'advice', 'recommendations', 'suggestions', 'improvementTips', 'healingTips', 'growthTips');
  const compatibility = getArrayField(result, 'compatibility', 'bestMatch', 'bestWith');
  const incompatibility = getArrayField(result, 'incompatibility', 'worstMatch', 'challengeWith');
  
  // 점수/퍼센트 필드
  const percentage = getNumberField(result, 'percentage', 'score', 'level');
  const subtitle = getStringField(result, 'subtitle', 'nickname', 'level');
  const advice = getStringField(result, 'advice', 'tip', 'recommendation');

  // 공유 텍스트 생성
  const shareText = t('myResultIs', { testTitle, emoji: result.emoji, title: result.title });

  return (
    <div className="content-container">
      {/* Result Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Hero Section - Mobile optimized with larger emoji */}
        <div 
          className={`p-6 md:p-8 text-center text-white ${gradientClass}`}
          style={customGradient ? { background: customGradient } : undefined}
        >
          <p className="text-white/80 text-sm md:text-base mb-2">{t('yourResult')}</p>
          <div className="text-7xl md:text-8xl mb-3 md:mb-4">{result.emoji}</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">{result.title}</h1>
          {subtitle && <p className="text-lg md:text-xl text-white/90">{subtitle}</p>}
          {percentage !== null && (
            <div className="mt-3 md:mt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                <span className="text-lg font-bold">{percentage}%</span>
              </div>
            </div>
          )}
        </div>

        {/* Viral Share Section - Mobile friendly screenshot area */}
        <div className="px-4 md:px-6 py-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-b border-gray-100 dark:border-gray-700">
          <p className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3">
            {t('screenshotShare')}
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
            <p className="text-base md:text-lg font-bold text-gray-900 dark:text-white leading-relaxed">
              {shareText}
            </p>
            {testTags.length > 0 && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                #{testTags.slice(0, 3).join(' #')} #AIPlayground
              </p>
            )}
          </div>
        </div>

        {/* Content - Mobile optimized spacing */}
        <div className="p-5 md:p-8 space-y-6 md:space-y-8">
          {/* Description */}
          <div>
            <h2 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 md:mb-3">{t('analysisResult')}</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{result.description}</p>
          </div>

          {/* Traits */}
          {traits.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{t('mainTraits')}</h2>
              <TagList items={traits} />
            </div>
          )}

          {/* Strengths & Weaknesses */}
          {(strengths.length > 0 || weaknesses.length > 0) && (
            <div className="grid md:grid-cols-2 gap-4">
              {strengths.length > 0 && (
                <SectionCard title={t('strengths')} icon={<Star className="w-4 h-4 text-blue-500" />} bgClass="bg-blue-50 dark:bg-blue-900/30">
                  <CheckList items={strengths} colorClass="text-blue-700 dark:text-blue-300" />
                </SectionCard>
              )}
              {weaknesses.length > 0 && (
                <SectionCard title={t('cautions')} icon={<AlertCircle className="w-4 h-4 text-amber-500" />} bgClass="bg-amber-50 dark:bg-amber-900/30">
                  <CheckList items={weaknesses} icon={<AlertCircle className="w-3 h-3" />} colorClass="text-amber-700 dark:text-amber-300" />
                </SectionCard>
              )}
            </div>
          )}

          {/* Tips / Advice */}
          {(tips.length > 0 || advice) && (
            <SectionCard title={t('advice')} icon={<Sparkles className="w-4 h-4 text-purple-500" />} bgClass="bg-purple-50 dark:bg-purple-900/30">
              {advice && <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">{advice}</p>}
              {tips.length > 0 && <CheckList items={tips} colorClass="text-purple-700 dark:text-purple-300" />}
            </SectionCard>
          )}

          {/* Compatibility */}
          {(compatibility.length > 0 || incompatibility.length > 0) && (
            <div className="grid md:grid-cols-2 gap-4">
              {compatibility.length > 0 && (
                <SectionCard title={t('goodMatch')} icon={<Heart className="w-4 h-4 text-green-500" />} bgClass="bg-green-50 dark:bg-green-900/30">
                  <TagList items={compatibility} colorClass="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300" />
                </SectionCard>
              )}
              {incompatibility.length > 0 && (
                <SectionCard title={t('cautionMatch')} icon={<AlertCircle className="w-4 h-4 text-red-500" />} bgClass="bg-red-50 dark:bg-red-900/30">
                  <TagList items={incompatibility} colorClass="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300" />
                </SectionCard>
              )}
            </div>
          )}

          {/* Share Buttons */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <GlobalShareButtons
              title={`${result.emoji} ${result.title}`}
              description={`${testTitle}: ${result.description.slice(0, 100)}...`}
              hashtags={testTags}
              imageUrl={`https://ai-playground.vercel.app/api/og?title=${encodeURIComponent(result.title)}&emoji=${encodeURIComponent(result.emoji)}&style=result`}
            />
          </div>

          {/* Action Buttons - Full width on mobile with larger touch targets */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href={`/test/${slug}/play`}
              className="flex-1 primary-action-btn bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 no-select"
            >
              {t('retryTest')}
            </Link>
            <Link
              href="/tests"
              className="flex-1 primary-action-btn bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-500 no-select"
            >
              {t('otherTests')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
