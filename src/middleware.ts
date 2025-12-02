import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, languageMapping, type Locale } from '@/i18n/config';
import { NextRequest, NextResponse } from 'next/server';

// next-intl 미들웨어 생성
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // 기본 언어(ko)는 URL에서 생략
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // API 라우트, 정적 파일, _next 등은 건너뛰기
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') // 정적 파일
  ) {
    return NextResponse.next();
  }

  // URL에 이미 locale이 있는지 확인
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return intlMiddleware(request);
  }

  // Accept-Language 헤더에서 선호 언어 감지
  const acceptLanguage = request.headers.get('accept-language');
  let detectedLocale: Locale = defaultLocale;

  if (acceptLanguage) {
    // Accept-Language 파싱 (예: "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7")
    const languages = acceptLanguage
      .split(',')
      .map((lang) => {
        const [code, priority] = lang.trim().split(';q=');
        return {
          code: code.trim(),
          priority: priority ? parseFloat(priority) : 1,
        };
      })
      .sort((a, b) => b.priority - a.priority);

    // 지원하는 언어 찾기
    for (const lang of languages) {
      const mapped = languageMapping[lang.code];
      if (mapped) {
        detectedLocale = mapped;
        break;
      }
      
      // 언어 코드의 기본 부분만으로 시도 (예: "ko-KR" -> "ko")
      const baseLang = lang.code.split('-')[0];
      const baseMapped = languageMapping[baseLang];
      if (baseMapped) {
        detectedLocale = baseMapped;
        break;
      }
    }
  }

  // 기본 언어(ko)면 리다이렉트 없이 진행
  if (detectedLocale === defaultLocale) {
    return intlMiddleware(request);
  }

  // 다른 언어면 해당 locale prefix로 리다이렉트
  const newUrl = new URL(`/${detectedLocale}${pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  // 미들웨어를 적용할 경로 패턴
  matcher: [
    // 모든 경로에 적용하되, 특정 경로는 제외
    '/((?!api|_next|images|.*\\..*).*)',
  ],
};
