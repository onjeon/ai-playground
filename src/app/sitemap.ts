import { MetadataRoute } from 'next';
import { tests, categories } from '@/lib/data';
import { worldCups } from '@/data/worldcup';
import { locales, defaultLocale } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-playground.vercel.app';

  // URL 생성 헬퍼 (다국어 지원)
  const createLocalizedUrls = (path: string, priority: number, changeFreq: 'daily' | 'weekly' | 'monthly') => {
    return locales.map((locale) => ({
      url: locale === defaultLocale 
        ? `${baseUrl}${path}` 
        : `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority: locale === defaultLocale ? priority : priority * 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [
            l,
            l === defaultLocale ? `${baseUrl}${path}` : `${baseUrl}/${l}${path}`,
          ])
        ),
      },
    }));
  };

  // 정적 페이지들
  const staticPaths = [
    { path: '', priority: 1, changeFreq: 'daily' as const },
    { path: '/tests', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/physical', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/games', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/daily', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/privacy', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/terms', priority: 0.3, changeFreq: 'monthly' as const },
  ];

  const staticPages = staticPaths.flatMap(({ path, priority, changeFreq }) => 
    createLocalizedUrls(path, priority, changeFreq)
  );

  // 카테고리 페이지들
  const categoryPages = categories.flatMap((category) =>
    createLocalizedUrls(`/category/${category.slug}`, 0.8, 'weekly')
  );

  // 운세 페이지들
  const fortunePaths = [
    { slug: 'tarot', priority: 0.8 },
    { slug: 'tarot/daily', priority: 0.7 },
    { slug: 'tarot/relationship', priority: 0.7 },
    { slug: 'tarot/choice', priority: 0.7 },
    { slug: 'tarot/timeline', priority: 0.7 },
    { slug: 'daily-fortune', priority: 0.8 },
    { slug: 'zodiac-fortune', priority: 0.8 },
    { slug: 'fortune-2025', priority: 0.8 },
    { slug: 'tojeong', priority: 0.8 },
    { slug: 'compatibility', priority: 0.8 },
    { slug: 'name-analysis', priority: 0.8 },
    { slug: 'dream', priority: 0.8 },
    { slug: 'face-reading', priority: 0.8 },
  ];

  const fortunePages = fortunePaths.flatMap(({ slug, priority }) =>
    createLocalizedUrls(`/fortune/${slug}`, priority, 'weekly')
  );

  // 피지컬 테스트 페이지들
  const physicalSlugs = [
    'reaction-speed', 'click-speed', 'color-blind', 'memory-test',
    'number-memory', 'typing-speed', 'aim-trainer', 'hearing-test',
    'eye-tracking', 'stroop-test', 'time-perception', 'peripheral-vision',
    'pattern-recognition', 'steady-hand', 'rhythm-test', 'color-sequence',
    'word-memory', 'direction-sense', 'multitasking',
  ];

  const physicalPages = physicalSlugs.flatMap((slug) =>
    createLocalizedUrls(`/physical/${slug}`, 0.7, 'monthly')
  );

  // 게임 페이지들
  const gameSlugs = [
    'balance', 'cards', 'random-menu', 'number-picker', 'team-divider',
    'penalty-picker', 'role-picker', 'would-you-rather', 'ice-breaker',
    'couple-quiz', 'worldcup',
  ];

  const gamePages = gameSlugs.flatMap((slug) =>
    createLocalizedUrls(`/games/${slug}`, 0.7, 'weekly')
  );

  // 월드컵 상세 페이지들
  const worldcupPages = worldCups.flatMap((wc) =>
    createLocalizedUrls(`/games/worldcup/${wc.slug}`, 0.6, 'weekly')
  );

  // 테스트 페이지들
  const testPages = tests.flatMap((test) =>
    locales.map((locale) => ({
      url: locale === defaultLocale 
        ? `${baseUrl}/test/${test.slug}` 
        : `${baseUrl}/${locale}/test/${test.slug}`,
      lastModified: new Date(test.createdAt),
      changeFrequency: 'weekly' as const,
      priority: locale === defaultLocale ? 0.8 : 0.72,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [
            l,
            l === defaultLocale 
              ? `${baseUrl}/test/${test.slug}` 
              : `${baseUrl}/${l}/test/${test.slug}`,
          ])
        ),
      },
    }))
  );

  return [
    ...staticPages,
    ...categoryPages,
    ...fortunePages,
    ...physicalPages,
    ...gamePages,
    ...worldcupPages,
    ...testPages,
  ];
}
