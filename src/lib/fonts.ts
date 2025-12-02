import { Inter } from 'next/font/google';
import type { Locale } from '@/i18n/config';

// 기본 라틴 폰트 (전역 사용)
export const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// 언어별 폰트 클래스 및 CSS 변수
// Google Fonts CDN을 통해 필요한 폰트만 동적으로 로드
export const getLocaleFontClass = (_locale: Locale): string => {
  return `${inter.variable} font-sans`;
};

// 언어별 Google Fonts URL 생성
export const getGoogleFontsUrl = (locale: Locale): string | null => {
  const baseUrl = 'https://fonts.googleapis.com/css2?';
  
  switch (locale) {
    case 'ko':
      return `${baseUrl}family=Noto+Sans+KR:wght@400;500;700&display=swap`;
    case 'ja':
      return `${baseUrl}family=Noto+Sans+JP:wght@400;500;700&display=swap`;
    case 'zh-TW':
      return `${baseUrl}family=Noto+Sans+TC:wght@400;500;700&display=swap`;
    case 'th':
      return `${baseUrl}family=Noto+Sans+Thai:wght@400;500;700&display=swap`;
    case 'ar':
      return `${baseUrl}family=Noto+Sans+Arabic:wght@400;500;700&display=swap`;
    case 'hi':
      return `${baseUrl}family=Noto+Sans+Devanagari:wght@400;500;700&display=swap`;
    case 'vi':
      return `${baseUrl}family=Noto+Sans:wght@400;500;700&subset=vietnamese&display=swap`;
    default:
      // 라틴 기반 언어는 Inter로 충분
      return null;
  }
};

// 언어별 폰트 패밀리 CSS
export const getLocaleFontFamily = (locale: Locale): string => {
  switch (locale) {
    case 'ko':
      return "'Noto Sans KR', var(--font-inter), system-ui, sans-serif";
    case 'ja':
      return "'Noto Sans JP', var(--font-inter), system-ui, sans-serif";
    case 'zh-TW':
      return "'Noto Sans TC', var(--font-inter), system-ui, sans-serif";
    case 'th':
      return "'Noto Sans Thai', var(--font-inter), system-ui, sans-serif";
    case 'ar':
      return "'Noto Sans Arabic', var(--font-inter), system-ui, sans-serif";
    case 'hi':
      return "'Noto Sans Devanagari', var(--font-inter), system-ui, sans-serif";
    case 'vi':
      return "'Noto Sans', var(--font-inter), system-ui, sans-serif";
    default:
      return "var(--font-inter), system-ui, sans-serif";
  }
};
