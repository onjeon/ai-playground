import type { Metadata } from 'next';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import '../globals.css';
import { Header, Footer } from '@/components/layout';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { locales, rtlLocales, defaultLocale, type Locale } from '@/i18n/config';
import { getLocaleFontClass, getGoogleFontsUrl, getLocaleFontFamily } from '@/lib/fonts';

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  
  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();
  
  // Check if RTL
  const isRtl = rtlLocales.includes(locale as Locale);

  // Get current path for hreflang
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const baseUrl = 'https://ai-playground.vercel.app';
  
  // Generate alternate URLs for hreflang
  const getAlternateUrl = (loc: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/(ko|ja|zh-TW|th|id|vi|en|ms|fil|pt-BR|es|de|fr|it|tr|ar|hi|pl|nl)/, '');
    return loc === defaultLocale 
      ? `${baseUrl}${pathWithoutLocale || '/'}`
      : `${baseUrl}/${loc}${pathWithoutLocale || ''}`;
  };

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        {/* 테마 깜빡임 방지: React 렌더링 전에 dark 클래스 적용 */}
        <script
          dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()` }}
        />
        {/* 언어별 Google Fonts 로드 */}
        {getGoogleFontsUrl(locale as Locale) && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link 
              href={getGoogleFontsUrl(locale as Locale)!} 
              rel="stylesheet" 
            />
          </>
        )}
        
        {/* 언어별 폰트 패밀리 CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `body { font-family: ${getLocaleFontFamily(locale as Locale)}; }`
        }} />
        
        {/* hreflang 태그 - 다국어 SEO */}
        {locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={getAlternateUrl(loc)}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={getAlternateUrl(defaultLocale)}
        />
        
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
      <body className={`${getLocaleFontClass(locale as Locale)} bg-gray-100 dark:bg-gray-950 min-h-screen transition-colors`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="max-w-lg mx-auto w-full min-h-screen flex flex-col bg-white dark:bg-gray-900 shadow-sm">
              <Header />
              <main className="flex-1 px-4 py-4">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
