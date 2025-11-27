import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import { Header, Sidebar, Footer } from '@/components/layout';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AI 놀이터 - AI 기반 심리/성격 테스트',
    template: '%s | AI 놀이터',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  description: 'AI가 분석하는 심리 테스트, 성격 테스트, MBTI 등 다양한 테스트를 즐겨보세요. 무료 테스트부터 프리미엄 분석까지!',
  keywords: ['심리테스트', '성격테스트', 'MBTI', 'AI테스트', '무료테스트', '에니어그램', 'DISC', '연애테스트', '직업적성검사'],
  authors: [{ name: 'AI 놀이터' }],
  creator: 'AI 놀이터',
  publisher: 'AI 놀이터',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AI 놀이터 - AI 기반 심리/성격 테스트',
    description: 'AI가 분석하는 심리 테스트, 성격 테스트, MBTI 등 다양한 테스트를 즐겨보세요.',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'AI 놀이터',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 놀이터 - AI 기반 심리/성격 테스트',
    description: 'AI가 분석하는 심리 테스트, 성격 테스트, MBTI 등 다양한 테스트를 즐겨보세요.',
    images: ['/og-image.png'],
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
  metadataBase: new URL('https://ai-playground.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Google AdSense - 승인 후 활성화
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5204107675448262"
          crossOrigin="anonymous"
        />
        */}
        {/* 구조화 데이터 - 웹사이트 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AI 놀이터',
              description: 'AI가 분석하는 심리 테스트, 성격 테스트, MBTI 등 다양한 테스트를 즐겨보세요.',
              url: 'https://ai-playground.vercel.app',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://ai-playground.vercel.app/?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
              publisher: {
                '@type': 'Organization',
                name: 'AI 놀이터',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://ai-playground.vercel.app/og-image.png',
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col transition-colors`}>
        <ThemeProvider>
          <Header />
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex gap-8">
              <Suspense fallback={<div className="hidden lg:block w-64 shrink-0" />}>
                <Sidebar />
              </Suspense>
              <main className="flex-1 min-w-0">
                {children}
              </main>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
