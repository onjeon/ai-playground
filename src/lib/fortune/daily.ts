// 오늘의 운세 - 날짜 + 생년월일 기반 시드 생성

/**
 * 시드 기반 의사 난수 생성기 (Mulberry32)
 */
function mulberry32(seed: number) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/**
 * 날짜 + 생년월일로 시드 생성
 * 같은 날 같은 생년월일이면 같은 결과
 */
export function generateDailySeed(birthDate: string, targetDate: Date = new Date()): number {
  const dateStr = `${targetDate.getFullYear()}${String(targetDate.getMonth() + 1).padStart(2, '0')}${String(targetDate.getDate()).padStart(2, '0')}`;
  const combined = birthDate + dateStr;
  
  // 문자열을 숫자로 변환 (해시)
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  return Math.abs(hash);
}

/**
 * 시드 기반 랜덤 선택
 */
export function seededRandom(seed: number): () => number {
  return mulberry32(seed);
}

/**
 * 배열에서 시드 기반 랜덤 선택
 */
export function seededChoice<T>(array: T[], random: () => number): T {
  const index = Math.floor(random() * array.length);
  return array[index];
}

/**
 * 범위 내 시드 기반 랜덤 숫자
 */
export function seededRange(min: number, max: number, random: () => number): number {
  return Math.floor(random() * (max - min + 1)) + min;
}

/**
 * 오늘의 운세 점수 계산 (1-100)
 */
export function calculateDailyScore(seed: number): number {
  const random = seededRandom(seed);
  // 정규 분포에 가깝게 (너무 극단적이지 않게)
  const r1 = random();
  const r2 = random();
  const normalized = (r1 + r2) / 2; // 평균내서 중앙으로 모임
  return Math.floor(normalized * 60 + 30); // 30~90 사이
}

/**
 * 날짜 포맷
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[date.getDay()];
  
  return `${year}년 ${month}월 ${day}일 (${weekday})`;
}

/**
 * 오늘의 운세 카테고리
 */
export type DailyCategory = 'overall' | 'love' | 'work' | 'money' | 'health';

export interface DailyFortuneResult {
  date: string;
  birthDate: string;
  overall: {
    score: number;
    message: string;
    advice: string;
  };
  categories: {
    love: { score: number; message: string };
    work: { score: number; message: string };
    money: { score: number; message: string };
    health: { score: number; message: string };
  };
  lucky: {
    color: string;
    number: number;
    direction: string;
    time: string;
  };
  warning: string;
}
