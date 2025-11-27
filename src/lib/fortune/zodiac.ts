// 띠(12지신) 계산 및 관련 유틸리티

export type ZodiacAnimal = 
  | 'rat' | 'ox' | 'tiger' | 'rabbit' 
  | 'dragon' | 'snake' | 'horse' | 'sheep' 
  | 'monkey' | 'rooster' | 'dog' | 'pig';

export interface ZodiacInfo {
  id: ZodiacAnimal;
  name: string;        // 한글명
  hanja: string;       // 한자
  emoji: string;       // 이모지
  element: string;     // 오행
}

// 12지신 정보
export const ZODIAC_ANIMALS: Record<ZodiacAnimal, ZodiacInfo> = {
  rat: { id: 'rat', name: '쥐띠', hanja: '子', emoji: '🐀', element: '수(水)' },
  ox: { id: 'ox', name: '소띠', hanja: '丑', emoji: '🐂', element: '토(土)' },
  tiger: { id: 'tiger', name: '호랑이띠', hanja: '寅', emoji: '🐅', element: '목(木)' },
  rabbit: { id: 'rabbit', name: '토끼띠', hanja: '卯', emoji: '🐇', element: '목(木)' },
  dragon: { id: 'dragon', name: '용띠', hanja: '辰', emoji: '🐉', element: '토(土)' },
  snake: { id: 'snake', name: '뱀띠', hanja: '巳', emoji: '🐍', element: '화(火)' },
  horse: { id: 'horse', name: '말띠', hanja: '午', emoji: '🐴', element: '화(火)' },
  sheep: { id: 'sheep', name: '양띠', hanja: '未', emoji: '🐑', element: '토(土)' },
  monkey: { id: 'monkey', name: '원숭이띠', hanja: '申', emoji: '🐵', element: '금(金)' },
  rooster: { id: 'rooster', name: '닭띠', hanja: '酉', emoji: '🐔', element: '금(金)' },
  dog: { id: 'dog', name: '개띠', hanja: '戌', emoji: '🐕', element: '토(土)' },
  pig: { id: 'pig', name: '돼지띠', hanja: '亥', emoji: '🐷', element: '수(水)' },
};

// 띠 순서 (자-축-인-묘-진-사-오-미-신-유-술-해)
const ZODIAC_ORDER: ZodiacAnimal[] = [
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'sheep', 'monkey', 'rooster', 'dog', 'pig'
];

/**
 * 입춘 기준으로 띠 계산용 연도 결정
 * 양력 2월 4일 기준 - 이전 출생은 전년도 띠
 */
function getZodiacYear(year: number, month: number, day: number): number {
  // 2월 4일 이전이면 전년도 띠
  if (month < 2 || (month === 2 && day < 4)) {
    return year - 1;
  }
  return year;
}

/**
 * 출생년도로 띠 계산 (단순 연도 기준)
 * 기준: 1900년 = 쥐띠(자)
 */
export function getZodiacByYear(year: number): ZodiacAnimal {
  // 1900년이 쥐띠(0)
  const index = (year - 1900) % 12;
  // 음수 처리
  const normalizedIndex = index < 0 ? index + 12 : index;
  return ZODIAC_ORDER[normalizedIndex];
}

/**
 * 생년월일 문자열로 띠 계산 (입춘 기준)
 * @param birthDate YYYY-MM-DD 또는 YYYYMMDD 형식
 */
export function getZodiacByBirthDate(birthDate: string): ZodiacAnimal {
  // YYYYMMDD 또는 YYYY-MM-DD 형식 처리
  const cleaned = birthDate.replace(/-/g, '');
  const year = parseInt(cleaned.substring(0, 4), 10);
  const month = parseInt(cleaned.substring(4, 6), 10);
  const day = parseInt(cleaned.substring(6, 8), 10);
  
  // 입춘 기준 연도 계산
  const zodiacYear = getZodiacYear(year, month, day);
  return getZodiacByYear(zodiacYear);
}

/**
 * 띠 정보 가져오기
 */
export function getZodiacInfo(animal: ZodiacAnimal): ZodiacInfo {
  return ZODIAC_ANIMALS[animal];
}

/**
 * 출생년도로 띠 정보 가져오기
 */
export function getZodiacInfoByYear(year: number): ZodiacInfo {
  const animal = getZodiacByYear(year);
  return ZODIAC_ANIMALS[animal];
}

/**
 * 나이 계산 (만 나이)
 */
export function calculateAge(birthYear: number, currentYear: number = 2025): number {
  return currentYear - birthYear;
}

/**
 * 2025년 기준 띠별 대표 출생년도들
 */
export function getRepresentativeYears(animal: ZodiacAnimal): number[] {
  const years: number[] = [];
  
  // 1960년부터 2012년까지 (현재 활동 가능 연령대)
  for (let year = 1960; year <= 2012; year++) {
    if (getZodiacByYear(year) === animal) {
      years.push(year);
    }
  }
  
  return years;
}

/**
 * 2025년 을사년(뱀띠) 정보
 */
export const YEAR_2025 = {
  year: 2025,
  zodiac: 'snake' as ZodiacAnimal,
  name: '을사년(乙巳年)',
  element: '목(木)',
  description: '푸른 뱀의 해',
};

/**
 * 띠 궁합 (간단 버전)
 * 삼합: 최고 궁합
 * 육합: 좋은 궁합
 * 상충: 주의 필요
 */
export const ZODIAC_COMPATIBILITY: Record<ZodiacAnimal, {
  best: ZodiacAnimal[];      // 삼합
  good: ZodiacAnimal[];      // 육합
  caution: ZodiacAnimal[];   // 상충
}> = {
  rat: { best: ['dragon', 'monkey'], good: ['ox'], caution: ['horse'] },
  ox: { best: ['snake', 'rooster'], good: ['rat'], caution: ['sheep'] },
  tiger: { best: ['horse', 'dog'], good: ['pig'], caution: ['monkey'] },
  rabbit: { best: ['sheep', 'pig'], good: ['dog'], caution: ['rooster'] },
  dragon: { best: ['rat', 'monkey'], good: ['rooster'], caution: ['dog'] },
  snake: { best: ['ox', 'rooster'], good: ['monkey'], caution: ['pig'] },
  horse: { best: ['tiger', 'dog'], good: ['sheep'], caution: ['rat'] },
  sheep: { best: ['rabbit', 'pig'], good: ['horse'], caution: ['ox'] },
  monkey: { best: ['rat', 'dragon'], good: ['snake'], caution: ['tiger'] },
  rooster: { best: ['ox', 'snake'], good: ['dragon'], caution: ['rabbit'] },
  dog: { best: ['tiger', 'horse'], good: ['rabbit'], caution: ['dragon'] },
  pig: { best: ['rabbit', 'sheep'], good: ['tiger'], caution: ['snake'] },
};
