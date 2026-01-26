import { Metadata } from 'next';
import { getTestBySlugForLocale } from '@/lib/data-loader';
import { getTranslations } from 'next-intl/server';
import TestResultClient from './TestResultClient';

const baseUrl = 'https://ai-playground.vercel.app';

interface Props {
  params: { slug: string; locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// 동적 메타데이터 생성 (OG 이미지 포함)
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { locale, slug } = params;
  const test = getTestBySlugForLocale(locale, slug);
  const tMeta = await getTranslations({ locale, namespace: 'meta' });
  const tTest = await getTranslations({ locale, namespace: 'test' });

  if (!test) {
    return {
      title: tMeta('testNotFound'),
    };
  }

  // URL에서 결과 정보 추출 (play 페이지에서 전달)
  const resultEmoji = typeof searchParams.emoji === 'string'
    ? decodeURIComponent(searchParams.emoji)
    : '🎯';
  const resultTitle = typeof searchParams.title === 'string'
    ? decodeURIComponent(searchParams.title)
    : tTest('yourResult');

  // SEO 최적화된 타이틀과 설명
  const seoTitle = `${resultEmoji} ${resultTitle} | ${test.title}`;
  const seoDescription = `${test.title} - ${tTest('myResultIs', { testTitle: test.title, emoji: resultEmoji, title: resultTitle })}`;

  // 결과 페이지용 OG 이미지 URL 생성
  const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(resultTitle)}&emoji=${encodeURIComponent(resultEmoji)}&style=result`;

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: `${resultEmoji} ${resultTitle}`,
      description: seoDescription,
      type: 'website',
      locale: locale.replace('-', '_'),
      siteName: tMeta('siteName'),
      url: `${baseUrl}/${locale}/test/${slug}/result`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: resultTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${resultEmoji} ${resultTitle}`,
      description: seoDescription,
      images: [ogImageUrl],
    },
    robots: {
      index: false, // 결과 페이지는 인덱싱하지 않음
      follow: true,
    },
  };
}

export default function TestResultPage({ params }: Props) {
  return <TestResultClient slug={params.slug} locale={params.locale} />;
}
