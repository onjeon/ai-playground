import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTestBySlug, categories, formatParticipantCount } from '@/lib/data';
import TestDetailClient from './TestDetailClient';

interface Props {
  params: { slug: string };
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const test = getTestBySlug(params.slug);
  
  if (!test) {
    return {
      title: '테스트를 찾을 수 없습니다 | AI 놀이터',
    };
  }

  const category = categories.find((c) => c.id === test.categoryId);

  return {
    title: `${test.title} | AI 놀이터`,
    description: test.description,
    keywords: [...test.tags, category?.name || '', 'AI 테스트', '심리테스트'].filter(Boolean),
    openGraph: {
      title: test.title,
      description: test.shortDescription,
      type: 'website',
      locale: 'ko_KR',
      siteName: 'AI 놀이터',
    },
    twitter: {
      card: 'summary_large_image',
      title: test.title,
      description: test.shortDescription,
    },
  };
}

// 구조화 데이터 (JSON-LD) 생성
function generateStructuredData(test: ReturnType<typeof getTestBySlug>) {
  if (!test) return null;
  
  const baseUrl = 'https://ai-playground.vercel.app';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: test.title,
    description: test.description,
    url: `${baseUrl}/test/${test.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'AI 놀이터',
      url: baseUrl,
    },
    educationalLevel: 'beginner',
    learningResourceType: 'Quiz',
    interactivityType: 'active',
    isAccessibleForFree: !test.isPremium,
    inLanguage: 'ko',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: test.participantCount,
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'AI 놀이터',
    },
  };
}

export default function TestDetailPage({ params }: Props) {
  const test = getTestBySlug(params.slug);

  if (!test) {
    notFound();
  }

  const structuredData = generateStructuredData(test);

  return (
    <>
      {/* 구조화 데이터 (JSON-LD) */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <TestDetailClient slug={params.slug} />
    </>
  );
}
