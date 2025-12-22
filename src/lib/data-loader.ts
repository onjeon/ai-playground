// 로케일 기반 데이터 로더
// 각 나라별 테스트 및 카테고리 데이터를 로케일에 따라 반환

import { Category, Test } from '@/types';
import { tests as testsKo, categories as categoriesKo } from './data';
import { testsJa, categoriesJa } from './data-ja';
import { testsZhTW, categoriesZhTW } from './data-zh-TW';
import { testsTh, categoriesTh } from './data-th';
import { testsId, categoriesId } from './data-id';
import { testsVi, categoriesVi } from './data-vi';
import { testsFil, categoriesFil } from './data-fil';
import { testsMs, categoriesMs } from './data-ms';
import { testsPtBR, categoriesPtBR } from './data-pt-BR';

// 공통 카테고리 ID (모든 나라에서 사용)
const COMMON_CATEGORY_IDS = ['personality', 'psychology', 'relationship', 'career', 'fun', 'iq'];

// 지원 로케일 타입
type SupportedLocale = 'ko' | 'ja' | 'zh-TW' | 'th' | 'id' | 'vi' | 'fil' | 'ms' | 'pt-BR' | string;

// 나라별 데이터를 공통 형식으로 변환
function normalizeTest(test: any): Test {
  return {
    id: test.id,
    title: test.title,
    slug: test.slug,
    description: test.description,
    shortDescription: test.shortDescription,
    categoryId: test.categoryId,
    thumbnailUrl: test.thumbnailUrl || '/images/tests/default.png',
    questionCount: test.questionCount,
    estimatedTime: test.estimatedTime,
    participantCount: test.participantCount,
    tags: test.tags || [],
    createdAt: test.createdAt,
  };
}

function normalizeCategory(category: any): Category {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    icon: category.icon || 'Brain',
    description: category.description,
  };
}

// 로케일별 테스트 데이터 가져오기
export function getTestsForLocale(locale: SupportedLocale): Test[] {
  switch (locale) {
    case 'ja':
      return testsJa.map(normalizeTest);
    case 'zh-TW':
      return testsZhTW.map(normalizeTest);
    case 'th':
      return testsTh.map(normalizeTest);
    case 'id':
      return testsId.map(normalizeTest);
    case 'vi':
      return testsVi.map(normalizeTest);
    case 'fil':
      return testsFil.map(normalizeTest);
    case 'ms':
      return testsMs.map(normalizeTest);
    case 'pt-BR':
      return testsPtBR.map(normalizeTest);
    case 'ko':
    default:
      return testsKo;
  }
}

// 로케일별 카테고리 데이터 가져오기
export function getCategoriesForLocale(locale: SupportedLocale): Category[] {
  switch (locale) {
    case 'ja':
      return categoriesJa.map(normalizeCategory);
    case 'zh-TW':
      return categoriesZhTW.map(normalizeCategory);
    case 'th':
      return categoriesTh.map(normalizeCategory);
    case 'id':
      return categoriesId.map(normalizeCategory);
    case 'vi':
      return categoriesVi.map(normalizeCategory);
    case 'fil':
      return categoriesFil.map(normalizeCategory);
    case 'ms':
      return categoriesMs.map(normalizeCategory);
    case 'pt-BR':
      return categoriesPtBR.map(normalizeCategory);
    case 'ko':
    default:
      return categoriesKo;
  }
}

// 로케일별 인기 테스트 가져오기
export function getPopularTestsForLocale(locale: SupportedLocale, limit: number = 8): Test[] {
  const tests = getTestsForLocale(locale);
  return [...tests]
    .sort((a, b) => b.participantCount - a.participantCount)
    .slice(0, limit);
}

// 로케일별 신규 테스트 가져오기
export function getNewTestsForLocale(locale: SupportedLocale, limit: number = 4): Test[] {
  const tests = getTestsForLocale(locale);
  return [...tests]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

// 로케일별 카테고리별 테스트 가져오기
export function getTestsByCategoryForLocale(locale: SupportedLocale, categoryId: string): Test[] {
  const tests = getTestsForLocale(locale);
  return tests.filter(test => test.categoryId === categoryId);
}

// 로케일별 슬러그로 테스트 찾기
export function getTestBySlugForLocale(locale: SupportedLocale, slug: string): Test | undefined {
  const tests = getTestsForLocale(locale);
  return tests.find(test => test.slug === slug);
}

// 로케일별 카테고리 슬러그로 카테고리 찾기
export function getCategoryBySlugForLocale(locale: SupportedLocale, slug: string): Category | undefined {
  const categories = getCategoriesForLocale(locale);
  return categories.find(cat => cat.slug === slug);
}

// 로케일별 카테고리 ID로 카테고리 찾기
export function getCategoryByIdForLocale(locale: SupportedLocale, categoryId: string): Category | undefined {
  const categories = getCategoriesForLocale(locale);
  return categories.find(cat => cat.id === categoryId);
}

// 로케일별 오늘의 추천 테스트 (날짜 기반 랜덤)
export function getTodaysPicksForLocale(locale: SupportedLocale, count: number = 2): Test[] {
  const tests = getTestsForLocale(locale);
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const shuffled = [...tests].sort((a, b) => {
    const hashA = (seed * a.participantCount) % 1000;
    const hashB = (seed * b.participantCount) % 1000;
    return hashA - hashB;
  });
  return shuffled.slice(0, count);
}

// 로케일별 모든 태그 가져오기
export function getAllTagsForLocale(locale: SupportedLocale): string[] {
  const tests = getTestsForLocale(locale);
  const tagSet = new Set<string>();
  tests.forEach(test => {
    test.tags?.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

// 로케일별 테스트 검색
export function searchTestsForLocale(locale: SupportedLocale, query: string): Test[] {
  const tests = getTestsForLocale(locale);
  const lowerQuery = query.toLowerCase();
  return tests.filter(test => 
    test.title.toLowerCase().includes(lowerQuery) ||
    test.description.toLowerCase().includes(lowerQuery) ||
    test.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// 참여자 수 포맷
export function formatParticipantCount(count: number): string {
  if (count >= 10000) {
    return `${Math.floor(count / 10000)}만`;
  } else if (count >= 1000) {
    return `${Math.floor(count / 1000)}천`;
  }
  return count.toString();
}

// 로케일이 지원되는지 확인 (테스트 데이터가 있는지)
export function hasLocaleData(locale: string): boolean {
  return ['ko', 'ja', 'zh-TW', 'th', 'id', 'vi', 'fil', 'ms', 'pt-BR'].includes(locale);
}

// 기본 로케일 반환 (데이터가 없는 로케일의 경우)
export function getFallbackLocale(locale: string): SupportedLocale {
  if (hasLocaleData(locale)) {
    return locale as SupportedLocale;
  }
  // 데이터가 없는 로케일은 영어 또는 한국어로 폴백
  return 'ko';
}
