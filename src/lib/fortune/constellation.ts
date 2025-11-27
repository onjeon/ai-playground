// 별자리(12궁) 계산 및 관련 유틸리티

export type Constellation = 
  | 'aries' | 'taurus' | 'gemini' | 'cancer' 
  | 'leo' | 'virgo' | 'libra' | 'scorpio' 
  | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces';

export interface ConstellationInfo {
  id: Constellation;
  name: string;        // 한글명
  english: string;     // 영어명
  symbol: string;      // 점성술 기호
  emoji: string;       // 이모지
  element: string;     // 원소 (불/흙/공기/물)
  ruling: string;      // 지배 행성
  dateRange: string;   // 날짜 범위
}

// 12별자리 정보
export const CONSTELLATIONS: Record<Constellation, ConstellationInfo> = {
  aries: { 
    id: 'aries', 
    name: '양자리', 
    english: 'Aries',
    symbol: '♈', 
    emoji: '🐏', 
    element: '불(Fire)',
    ruling: '화성(Mars)',
    dateRange: '3/21 ~ 4/19'
  },
  taurus: { 
    id: 'taurus', 
    name: '황소자리', 
    english: 'Taurus',
    symbol: '♉', 
    emoji: '🐂', 
    element: '흙(Earth)',
    ruling: '금성(Venus)',
    dateRange: '4/20 ~ 5/20'
  },
  gemini: { 
    id: 'gemini', 
    name: '쌍둥이자리', 
    english: 'Gemini',
    symbol: '♊', 
    emoji: '👯', 
    element: '공기(Air)',
    ruling: '수성(Mercury)',
    dateRange: '5/21 ~ 6/21'
  },
  cancer: { 
    id: 'cancer', 
    name: '게자리', 
    english: 'Cancer',
    symbol: '♋', 
    emoji: '🦀', 
    element: '물(Water)',
    ruling: '달(Moon)',
    dateRange: '6/22 ~ 7/22'
  },
  leo: { 
    id: 'leo', 
    name: '사자자리', 
    english: 'Leo',
    symbol: '♌', 
    emoji: '🦁', 
    element: '불(Fire)',
    ruling: '태양(Sun)',
    dateRange: '7/23 ~ 8/22'
  },
  virgo: { 
    id: 'virgo', 
    name: '처녀자리', 
    english: 'Virgo',
    symbol: '♍', 
    emoji: '👸', 
    element: '흙(Earth)',
    ruling: '수성(Mercury)',
    dateRange: '8/23 ~ 9/22'
  },
  libra: { 
    id: 'libra', 
    name: '천칭자리', 
    english: 'Libra',
    symbol: '♎', 
    emoji: '⚖️', 
    element: '공기(Air)',
    ruling: '금성(Venus)',
    dateRange: '9/23 ~ 10/22'
  },
  scorpio: { 
    id: 'scorpio', 
    name: '전갈자리', 
    english: 'Scorpio',
    symbol: '♏', 
    emoji: '🦂', 
    element: '물(Water)',
    ruling: '명왕성(Pluto)',
    dateRange: '10/23 ~ 11/21'
  },
  sagittarius: { 
    id: 'sagittarius', 
    name: '사수자리', 
    english: 'Sagittarius',
    symbol: '♐', 
    emoji: '🏹', 
    element: '불(Fire)',
    ruling: '목성(Jupiter)',
    dateRange: '11/22 ~ 12/21'
  },
  capricorn: { 
    id: 'capricorn', 
    name: '염소자리', 
    english: 'Capricorn',
    symbol: '♑', 
    emoji: '🐐', 
    element: '흙(Earth)',
    ruling: '토성(Saturn)',
    dateRange: '12/22 ~ 1/19'
  },
  aquarius: { 
    id: 'aquarius', 
    name: '물병자리', 
    english: 'Aquarius',
    symbol: '♒', 
    emoji: '🏺', 
    element: '공기(Air)',
    ruling: '천왕성(Uranus)',
    dateRange: '1/20 ~ 2/18'
  },
  pisces: { 
    id: 'pisces', 
    name: '물고기자리', 
    english: 'Pisces',
    symbol: '♓', 
    emoji: '🐟', 
    element: '물(Water)',
    ruling: '해왕성(Neptune)',
    dateRange: '2/19 ~ 3/20'
  },
};

// 별자리 순서
const CONSTELLATION_ORDER: Constellation[] = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

/**
 * 생년월일로 별자리 계산 (양력 기준)
 * @param month 월 (1-12)
 * @param day 일 (1-31)
 */
export function getConstellationByDate(month: number, day: number): Constellation {
  // 별자리 날짜 범위 (월, 시작일, 끝일, 별자리)
  const ranges: [number, number, number, Constellation][] = [
    [1, 1, 19, 'capricorn'],
    [1, 20, 31, 'aquarius'],
    [2, 1, 18, 'aquarius'],
    [2, 19, 29, 'pisces'],
    [3, 1, 20, 'pisces'],
    [3, 21, 31, 'aries'],
    [4, 1, 19, 'aries'],
    [4, 20, 30, 'taurus'],
    [5, 1, 20, 'taurus'],
    [5, 21, 31, 'gemini'],
    [6, 1, 21, 'gemini'],
    [6, 22, 30, 'cancer'],
    [7, 1, 22, 'cancer'],
    [7, 23, 31, 'leo'],
    [8, 1, 22, 'leo'],
    [8, 23, 31, 'virgo'],
    [9, 1, 22, 'virgo'],
    [9, 23, 30, 'libra'],
    [10, 1, 22, 'libra'],
    [10, 23, 31, 'scorpio'],
    [11, 1, 21, 'scorpio'],
    [11, 22, 30, 'sagittarius'],
    [12, 1, 21, 'sagittarius'],
    [12, 22, 31, 'capricorn'],
  ];

  for (const [m, startDay, endDay, constellation] of ranges) {
    if (month === m && day >= startDay && day <= endDay) {
      return constellation;
    }
  }

  // 기본값 (도달하면 안됨)
  return 'aries';
}

/**
 * 생년월일 문자열로 별자리 계산
 * @param birthDate YYYY-MM-DD 또는 YYYYMMDD 형식
 */
export function getConstellationByBirthDate(birthDate: string): Constellation {
  const cleaned = birthDate.replace(/-/g, '');
  const month = parseInt(cleaned.substring(4, 6), 10);
  const day = parseInt(cleaned.substring(6, 8), 10);
  
  return getConstellationByDate(month, day);
}

/**
 * 별자리 정보 가져오기
 */
export function getConstellationInfo(constellation: Constellation): ConstellationInfo {
  return CONSTELLATIONS[constellation];
}

/**
 * 별자리 궁합 (간단 버전)
 * 같은 원소끼리 잘 맞음
 */
export const CONSTELLATION_COMPATIBILITY: Record<Constellation, {
  best: Constellation[];      // 최고 궁합 (같은 원소)
  good: Constellation[];      // 좋은 궁합 (상생 원소)
  neutral: Constellation[];   // 보통
  caution: Constellation[];   // 주의 필요
}> = {
  // 불(Fire): 양자리, 사자자리, 사수자리
  aries: { 
    best: ['leo', 'sagittarius'], 
    good: ['gemini', 'aquarius'], 
    neutral: ['taurus', 'pisces'],
    caution: ['cancer', 'capricorn'] 
  },
  leo: { 
    best: ['aries', 'sagittarius'], 
    good: ['gemini', 'libra'], 
    neutral: ['virgo', 'cancer'],
    caution: ['taurus', 'scorpio'] 
  },
  sagittarius: { 
    best: ['aries', 'leo'], 
    good: ['libra', 'aquarius'], 
    neutral: ['scorpio', 'capricorn'],
    caution: ['virgo', 'pisces'] 
  },
  
  // 흙(Earth): 황소자리, 처녀자리, 염소자리
  taurus: { 
    best: ['virgo', 'capricorn'], 
    good: ['cancer', 'pisces'], 
    neutral: ['aries', 'gemini'],
    caution: ['leo', 'aquarius'] 
  },
  virgo: { 
    best: ['taurus', 'capricorn'], 
    good: ['cancer', 'scorpio'], 
    neutral: ['leo', 'libra'],
    caution: ['sagittarius', 'gemini'] 
  },
  capricorn: { 
    best: ['taurus', 'virgo'], 
    good: ['scorpio', 'pisces'], 
    neutral: ['sagittarius', 'aquarius'],
    caution: ['aries', 'libra'] 
  },
  
  // 공기(Air): 쌍둥이자리, 천칭자리, 물병자리
  gemini: { 
    best: ['libra', 'aquarius'], 
    good: ['aries', 'leo'], 
    neutral: ['taurus', 'cancer'],
    caution: ['virgo', 'pisces'] 
  },
  libra: { 
    best: ['gemini', 'aquarius'], 
    good: ['leo', 'sagittarius'], 
    neutral: ['virgo', 'scorpio'],
    caution: ['cancer', 'capricorn'] 
  },
  aquarius: { 
    best: ['gemini', 'libra'], 
    good: ['aries', 'sagittarius'], 
    neutral: ['capricorn', 'pisces'],
    caution: ['taurus', 'scorpio'] 
  },
  
  // 물(Water): 게자리, 전갈자리, 물고기자리
  cancer: { 
    best: ['scorpio', 'pisces'], 
    good: ['taurus', 'virgo'], 
    neutral: ['gemini', 'leo'],
    caution: ['aries', 'libra'] 
  },
  scorpio: { 
    best: ['cancer', 'pisces'], 
    good: ['virgo', 'capricorn'], 
    neutral: ['libra', 'sagittarius'],
    caution: ['leo', 'aquarius'] 
  },
  pisces: { 
    best: ['cancer', 'scorpio'], 
    good: ['taurus', 'capricorn'], 
    neutral: ['aquarius', 'aries'],
    caution: ['gemini', 'sagittarius'] 
  },
};

/**
 * 2025년 을사년 정보 (별자리 관점)
 */
export const YEAR_2025_ASTROLOGY = {
  year: 2025,
  theme: '변화와 혁신의 해',
  majorPlanets: {
    jupiter: '쌍둥이자리 → 게자리 이동',
    saturn: '물고기자리',
    uranus: '황소자리',
    neptune: '양자리 진입',
    pluto: '물병자리',
  },
  keyDates: [
    { date: '3월 29일', event: '개기 일식 (양자리)' },
    { date: '4월 13일', event: '목성-토성 긴장각' },
    { date: '9월 21일', event: '부분 월식 (물고기자리)' },
  ],
  luckyConstellations: ['aquarius', 'gemini', 'libra'] as Constellation[],
  challengeConstellations: ['taurus', 'scorpio', 'leo'] as Constellation[],
};
