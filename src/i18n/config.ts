// 지원 언어 목록 및 설정
export const locales = [
  'ko',      // 한국어 (기본)
  'ja',      // 일본어
  'zh-TW',   // 중국어 번체 (대만)
  'th',      // 태국어
  'id',      // 인도네시아어
  'vi',      // 베트남어
  'en',      // 영어
  'ms',      // 말레이시아어
  'fil',     // 필리핀어
  'pt-BR',   // 포르투갈어 (브라질)
  'es',      // 스페인어
  'de',      // 독일어
  'fr',      // 프랑스어
  'it',      // 이탈리아어
  'tr',      // 튀르키예어
  'ar',      // 아랍어
  'hi',      // 힌디어
  'pl',      // 폴란드어
  'nl',      // 네덜란드어
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ko';

// 언어별 메타데이터
export const localeNames: Record<Locale, string> = {
  ko: '한국어',
  ja: '日本語',
  'zh-TW': '繁體中文',
  th: 'ภาษาไทย',
  id: 'Bahasa Indonesia',
  vi: 'Tiếng Việt',
  en: 'English',
  ms: 'Bahasa Melayu',
  fil: 'Filipino',
  'pt-BR': 'Português',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  tr: 'Türkçe',
  ar: 'العربية',
  hi: 'हिन्दी',
  pl: 'Polski',
  nl: 'Nederlands',
};

// 국가 플래그 이모지
export const localeFlags: Record<Locale, string> = {
  ko: '🇰🇷',
  ja: '🇯🇵',
  'zh-TW': '🇹🇼',
  th: '🇹🇭',
  id: '🇮🇩',
  vi: '🇻🇳',
  en: '🇺🇸',
  ms: '🇲🇾',
  fil: '🇵🇭',
  'pt-BR': '🇧🇷',
  es: '🇪🇸',
  de: '🇩🇪',
  fr: '🇫🇷',
  it: '🇮🇹',
  tr: '🇹🇷',
  ar: '🇸🇦',
  hi: '🇮🇳',
  pl: '🇵🇱',
  nl: '🇳🇱',
};

// RTL (오른쪽에서 왼쪽) 언어
export const rtlLocales: Locale[] = ['ar'];

// 언어별 기본 시간대
export const localeTimezones: Record<Locale, string> = {
  ko: 'Asia/Seoul',
  ja: 'Asia/Tokyo',
  'zh-TW': 'Asia/Taipei',
  th: 'Asia/Bangkok',
  id: 'Asia/Jakarta',
  vi: 'Asia/Ho_Chi_Minh',
  en: 'America/New_York',
  ms: 'Asia/Kuala_Lumpur',
  fil: 'Asia/Manila',
  'pt-BR': 'America/Sao_Paulo',
  es: 'Europe/Madrid',
  de: 'Europe/Berlin',
  fr: 'Europe/Paris',
  it: 'Europe/Rome',
  tr: 'Europe/Istanbul',
  ar: 'Asia/Riyadh',
  hi: 'Asia/Kolkata',
  pl: 'Europe/Warsaw',
  nl: 'Europe/Amsterdam',
};

// Accept-Language 헤더 매핑 (브라우저 언어 → 지원 언어)
export const languageMapping: Record<string, Locale> = {
  // 한국어
  'ko': 'ko',
  'ko-KR': 'ko',
  
  // 일본어
  'ja': 'ja',
  'ja-JP': 'ja',
  
  // 중국어 번체
  'zh-TW': 'zh-TW',
  'zh-HK': 'zh-TW',
  'zh-Hant': 'zh-TW',
  
  // 태국어
  'th': 'th',
  'th-TH': 'th',
  
  // 인도네시아어
  'id': 'id',
  'id-ID': 'id',
  
  // 베트남어
  'vi': 'vi',
  'vi-VN': 'vi',
  
  // 영어
  'en': 'en',
  'en-US': 'en',
  'en-GB': 'en',
  'en-AU': 'en',
  'en-CA': 'en',
  'en-NZ': 'en',
  'en-SG': 'en',
  'en-PH': 'en',
  'en-IN': 'en',
  
  // 말레이시아어
  'ms': 'ms',
  'ms-MY': 'ms',
  
  // 필리핀어
  'fil': 'fil',
  'tl': 'fil',
  'tl-PH': 'fil',
  
  // 포르투갈어
  'pt': 'pt-BR',
  'pt-BR': 'pt-BR',
  'pt-PT': 'pt-BR',
  
  // 스페인어
  'es': 'es',
  'es-ES': 'es',
  'es-MX': 'es',
  'es-AR': 'es',
  
  // 독일어
  'de': 'de',
  'de-DE': 'de',
  'de-AT': 'de',
  'de-CH': 'de',
  
  // 프랑스어
  'fr': 'fr',
  'fr-FR': 'fr',
  'fr-CA': 'fr',
  
  // 이탈리아어
  'it': 'it',
  'it-IT': 'it',
  
  // 튀르키예어
  'tr': 'tr',
  'tr-TR': 'tr',
  
  // 아랍어
  'ar': 'ar',
  'ar-SA': 'ar',
  'ar-EG': 'ar',
  'ar-AE': 'ar',
  
  // 힌디어
  'hi': 'hi',
  'hi-IN': 'hi',
  
  // 폴란드어
  'pl': 'pl',
  'pl-PL': 'pl',
  
  // 네덜란드어
  'nl': 'nl',
  'nl-NL': 'nl',
  'nl-BE': 'nl',
};
