import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
  getTestBySlugForLocale, 
  getCategoriesForLocale, 
  getTestsForLocale 
} from '@/lib/data-loader';
import { locales } from '@/i18n/config';
import { getTranslations } from 'next-intl/server';
import TestDetailClient from './TestDetailClient';

// 빌드 시 모든 로케일의 테스트 페이지를 정적 생성
export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    const tests = getTestsForLocale(locale);
    for (const test of tests) {
      params.push({
        locale,
        slug: test.slug,
      });
    }
  }
  
  return params;
}

interface Props {
  params: { slug: string; locale: string };
}

const baseUrl = 'https://ai-playground.vercel.app';

// 카테고리별 기본 이모지
const categoryEmojis: Record<string, string> = {
  personality: '🧠',
  psychology: '🎭',
  relationship: '💕',
  career: '💼',
  fun: '🎮',
  iq: '💡',
};

// 카테고리 ID를 슬러그로 매핑
const categoryIdToSlug: Record<string, string> = {
  '1': 'personality',
  '2': 'psychology', 
  '3': 'relationship',
  '4': 'career',
  '5': 'fun',
  '6': 'iq',
};

// 동적 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = params;
  const test = getTestBySlugForLocale(locale, slug);
  const tMeta = await getTranslations({ locale, namespace: 'meta' });
  
  if (!test) {
    return {
      title: tMeta('testNotFound'),
    };
  }

  const categories = getCategoriesForLocale(locale);
  const category = categories.find((c) => c.id === test.categoryId);
  const categorySlug = category?.slug || categoryIdToSlug[test.categoryId] || 'default';
  const emoji = categoryEmojis[categorySlug] || '🧠';

  // SEO 최적화된 타이틀과 설명
  const seoTitle = `${test.title} | ${tMeta('siteName')}`;
  const seoDescription = test.shortDescription;

  // 동적 OG 이미지 URL 생성
  const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(test.title)}&emoji=${encodeURIComponent(emoji)}&category=${categorySlug}&participants=${test.participantCount.toLocaleString()}`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      test.title,
      ...test.tags, 
      category?.name || '', 
    ].filter(Boolean),
    authors: [{ name: tMeta('siteName') }],
    openGraph: {
      title: test.title,
      description: seoDescription,
      type: 'website',
      locale: locale.replace('-', '_'),
      siteName: tMeta('siteName'),
      url: `${baseUrl}/${locale}/test/${test.slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: test.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: test.title,
      description: seoDescription,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/test/${test.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// 구조화 데이터 (JSON-LD) 생성
function generateStructuredData(test: any, locale: string, categories: any[]) {
  if (!test) return null;
  
  const category = categories.find((c) => c.id === test.categoryId);
  const langCode = locale.split('-')[0];
  
  // Quiz 스키마
  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: test.title,
    description: test.description,
    url: `${baseUrl}/${locale}/test/${test.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'AI Playground',
      url: baseUrl,
    },
    educationalLevel: 'beginner',
    learningResourceType: 'Quiz',
    interactivityType: 'active',
    isAccessibleForFree: true,
    inLanguage: langCode,
    datePublished: test.createdAt,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: test.participantCount,
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'AI Playground',
    },
  };

  // BreadcrumbList 스키마
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category?.name || 'Tests',
        item: category ? `${baseUrl}/${locale}/category/${category.slug}` : `${baseUrl}/${locale}/tests`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: test.title,
        item: `${baseUrl}/${locale}/test/${test.slug}`,
      },
    ],
  };

  return [quizSchema, breadcrumbSchema];
}

export default function TestDetailPage({ params }: Props) {
  const { locale, slug } = params;
  const test = getTestBySlugForLocale(locale, slug);
  const categories = getCategoriesForLocale(locale);

  if (!test) {
    notFound();
  }

  const structuredDataArray = generateStructuredData(test, locale, categories);

  return (
    <>
      {/* 구조화 데이터 (JSON-LD) - 여러 스키마 */}
      {structuredDataArray && structuredDataArray.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <TestDetailClient slug={slug} locale={locale} />
    </>
  );
}
