import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTestBySlug, categories, tests } from '@/lib/data';
import TestDetailClient from './TestDetailClient';

// 빌드 시 모든 테스트 페이지를 정적 생성
export async function generateStaticParams() {
  return tests.map((test) => ({
    slug: test.slug,
  }));
}

interface Props {
  params: { slug: string };
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
  const test = getTestBySlug(params.slug);
  
  if (!test) {
    return {
      title: '테스트를 찾을 수 없습니다 | AI 놀이터',
    };
  }

  const category = categories.find((c) => c.id === test.categoryId);
  const categorySlug = category?.slug || categoryIdToSlug[test.categoryId] || 'default';
  const emoji = categoryEmojis[categorySlug] || '🧠';
  const participantText = test.participantCount >= 10000 
    ? `${Math.floor(test.participantCount / 10000)}만명 이상 참여` 
    : `${test.participantCount.toLocaleString()}명 참여`;

  // SEO 최적화된 타이틀과 설명
  const seoTitle = `${test.title} - 무료 테스트 | AI 놀이터`;
  const seoDescription = `${test.shortDescription} ${participantText}한 인기 테스트! 지금 바로 무료로 테스트해보세요.`;

  // 동적 OG 이미지 URL 생성
  const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(test.title)}&emoji=${encodeURIComponent(emoji)}&category=${categorySlug}&participants=${test.participantCount.toLocaleString()}`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      test.title,
      ...test.tags, 
      category?.name || '', 
      'AI 테스트', 
      '심리테스트',
      '무료 테스트',
      '성격 테스트',
      'MBTI',
    ].filter(Boolean),
    authors: [{ name: 'AI 놀이터' }],
    openGraph: {
      title: test.title,
      description: seoDescription,
      type: 'website',
      locale: 'ko_KR',
      siteName: 'AI 놀이터',
      url: `${baseUrl}/test/${test.slug}`,
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
      canonical: `${baseUrl}/test/${test.slug}`,
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
function generateStructuredData(test: ReturnType<typeof getTestBySlug>) {
  if (!test) return null;
  
  const category = categories.find((c) => c.id === test.categoryId);
  
  // Quiz 스키마
  const quizSchema = {
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
    isAccessibleForFree: true,
    inLanguage: 'ko',
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
      name: 'AI 놀이터',
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
        name: '홈',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category?.name || '테스트',
        item: category ? `${baseUrl}/category/${category.slug}` : `${baseUrl}/tests`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: test.title,
        item: `${baseUrl}/test/${test.slug}`,
      },
    ],
  };

  // FAQPage 스키마 (테스트 관련 자주 묻는 질문)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `${test.title}은(는) 무료인가요?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: '네, 이 테스트는 완전히 무료입니다. 회원가입 없이 바로 테스트를 시작할 수 있습니다.',
        },
      },
      {
        '@type': 'Question',
        name: '테스트 결과는 정확한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '이 테스트는 심리학적 연구를 바탕으로 제작되었으며, 재미와 자기 이해를 위한 목적으로 설계되었습니다. 전문적인 심리 진단을 대체하지는 않습니다.',
        },
      },
      {
        '@type': 'Question',
        name: '테스트 소요 시간은 얼마나 되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '이 테스트는 약 3-5분 정도 소요됩니다.',
        },
      },
    ],
  };

  return [quizSchema, breadcrumbSchema, faqSchema];
}

export default function TestDetailPage({ params }: Props) {
  const test = getTestBySlug(params.slug);

  if (!test) {
    notFound();
  }

  const structuredDataArray = generateStructuredData(test);

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
      <TestDetailClient slug={params.slug} />
    </>
  );
}
