// 한글 이름 획수 계산 및 분석

/**
 * 한글 자음 획수 (초성/종성)
 * 전통 성명학 기준
 */
const CONSONANT_STROKES: Record<string, number> = {
  'ㄱ': 2, 'ㄲ': 4, 'ㄴ': 2, 'ㄷ': 3, 'ㄸ': 6,
  'ㄹ': 5, 'ㅁ': 4, 'ㅂ': 4, 'ㅃ': 8, 'ㅅ': 2,
  'ㅆ': 4, 'ㅇ': 1, 'ㅈ': 3, 'ㅉ': 6, 'ㅊ': 4,
  'ㅋ': 3, 'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3,
};

/**
 * 한글 모음 획수 (중성)
 */
const VOWEL_STROKES: Record<string, number> = {
  'ㅏ': 2, 'ㅐ': 3, 'ㅑ': 3, 'ㅒ': 4, 'ㅓ': 2,
  'ㅔ': 3, 'ㅕ': 3, 'ㅖ': 4, 'ㅗ': 2, 'ㅘ': 4,
  'ㅙ': 5, 'ㅚ': 3, 'ㅛ': 3, 'ㅜ': 2, 'ㅝ': 4,
  'ㅞ': 5, 'ㅟ': 3, 'ㅠ': 3, 'ㅡ': 1, 'ㅢ': 2,
  'ㅣ': 1,
};

/**
 * 한글 유니코드 분해
 * 가 = 0xAC00, 힣 = 0xD7A3
 */
function decomposeHangul(char: string): { cho: string; jung: string; jong: string } | null {
  const code = char.charCodeAt(0);
  
  // 한글 범위 체크
  if (code < 0xAC00 || code > 0xD7A3) {
    return null;
  }
  
  const offset = code - 0xAC00;
  const cho = Math.floor(offset / 588);
  const jung = Math.floor((offset % 588) / 28);
  const jong = offset % 28;
  
  const CHO_LIST = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  const JUNG_LIST = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
  const JONG_LIST = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  
  return {
    cho: CHO_LIST[cho],
    jung: JUNG_LIST[jung],
    jong: JONG_LIST[jong],
  };
}

/**
 * 복합 종성 획수
 */
const COMPLEX_JONG_STROKES: Record<string, number> = {
  'ㄳ': 4, // ㄱ+ㅅ
  'ㄵ': 5, // ㄴ+ㅈ
  'ㄶ': 5, // ㄴ+ㅎ
  'ㄺ': 7, // ㄹ+ㄱ
  'ㄻ': 9, // ㄹ+ㅁ
  'ㄼ': 9, // ㄹ+ㅂ
  'ㄽ': 7, // ㄹ+ㅅ
  'ㄾ': 9, // ㄹ+ㅌ
  'ㄿ': 9, // ㄹ+ㅍ
  'ㅀ': 8, // ㄹ+ㅎ
  'ㅄ': 6, // ㅂ+ㅅ
};

/**
 * 한 글자의 획수 계산
 */
function getCharStrokes(char: string): number {
  const decomposed = decomposeHangul(char);
  
  if (!decomposed) {
    return 0;
  }
  
  let strokes = 0;
  
  // 초성
  strokes += CONSONANT_STROKES[decomposed.cho] || 0;
  
  // 중성
  strokes += VOWEL_STROKES[decomposed.jung] || 0;
  
  // 종성
  if (decomposed.jong) {
    if (COMPLEX_JONG_STROKES[decomposed.jong]) {
      strokes += COMPLEX_JONG_STROKES[decomposed.jong];
    } else {
      strokes += CONSONANT_STROKES[decomposed.jong] || 0;
    }
  }
  
  return strokes;
}

/**
 * 이름 전체 획수 계산
 */
export function calculateNameStrokes(name: string): {
  total: number;
  chars: { char: string; strokes: number }[];
} {
  const chars: { char: string; strokes: number }[] = [];
  let total = 0;
  
  for (const char of name) {
    const strokes = getCharStrokes(char);
    chars.push({ char, strokes });
    total += strokes;
  }
  
  return { total, chars };
}

/**
 * 성명학 수리 계산 (원형이정)
 * - 원격(元格): 성의 획수
 * - 형격(亨格): 성 + 이름 첫 글자
 * - 이격(利格): 이름 첫 글자 + 이름 둘째 글자
 * - 정격(貞格): 전체 획수
 */
export function calculateNameNumbers(lastName: string, firstName: string): {
  won: number;      // 원격 (성)
  hyung: number;    // 형격 (성 + 이름 첫 글자)
  yi: number;       // 이격 (이름)
  jung: number;     // 정격 (전체)
  total: number;    // 총획
  lastNameStrokes: number;
  firstNameStrokes: number;
} {
  const lastNameResult = calculateNameStrokes(lastName);
  const firstNameResult = calculateNameStrokes(firstName);
  
  const lastNameStrokes = lastNameResult.total;
  const firstNameStrokes = firstNameResult.total;
  const total = lastNameStrokes + firstNameStrokes;
  
  // 원격: 성의 획수 (1글자 성 기준)
  const won = lastNameStrokes;
  
  // 형격: 성 + 이름 첫 글자
  const firstCharStrokes = firstNameResult.chars[0]?.strokes || 0;
  const hyung = lastNameStrokes + firstCharStrokes;
  
  // 이격: 이름 획수
  const yi = firstNameStrokes;
  
  // 정격: 전체 획수
  const jung = total;
  
  return {
    won,
    hyung,
    yi,
    jung,
    total,
    lastNameStrokes,
    firstNameStrokes,
  };
}

/**
 * 수리 길흉 판단 (81수리)
 */
export type NumberFortune = 'great' | 'good' | 'neutral' | 'bad';

export function getNumberFortune(num: number): {
  fortune: NumberFortune;
  label: string;
  description: string;
} {
  // 81수리표 기반 (간략화)
  // 대길: 1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 29, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81
  // 길: 2, 10, 12, 14, 19, 22, 26, 27, 30, 34, 36, 38, 40, 42, 43, 44, 46, 49, 50, 51, 53, 55, 58, 59, 60, 62, 64, 66, 70, 71, 72, 73, 75, 77, 78
  // 흉: 4, 9, 20, 28, 54, 56, 69, 74, 76, 79, 80
  
  const greatNumbers = [1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 29, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81];
  const badNumbers = [4, 9, 20, 28, 54, 56, 69, 74, 76, 79, 80];
  
  // 81 이상은 81로 나눈 나머지 사용
  const effectiveNum = num > 81 ? (num % 81) || 81 : num;
  
  if (greatNumbers.includes(effectiveNum)) {
    return {
      fortune: 'great',
      label: '대길',
      description: '매우 좋은 수로, 성공과 발전을 상징합니다.',
    };
  }
  
  if (badNumbers.includes(effectiveNum)) {
    return {
      fortune: 'bad',
      label: '주의',
      description: '주의가 필요한 수입니다. 노력으로 극복할 수 있습니다.',
    };
  }
  
  // 나머지는 길 또는 보통
  if (effectiveNum % 2 === 1) {
    return {
      fortune: 'good',
      label: '길',
      description: '좋은 기운을 가진 수입니다.',
    };
  }
  
  return {
    fortune: 'neutral',
    label: '보통',
    description: '평범한 수로, 본인의 노력에 따라 달라집니다.',
  };
}

/**
 * 음양 오행 분석
 */
export type Element = 'wood' | 'fire' | 'earth' | 'metal' | 'water';

export function getElementFromNumber(num: number): {
  element: Element;
  name: string;
  yinYang: 'yin' | 'yang';
} {
  // 끝자리로 오행 판단
  const lastDigit = num % 10;
  
  // 1,2 = 목(木), 3,4 = 화(火), 5,6 = 토(土), 7,8 = 금(金), 9,0 = 수(水)
  // 홀수 = 양, 짝수 = 음
  const elements: Record<number, { element: Element; name: string }> = {
    1: { element: 'wood', name: '목(木)' },
    2: { element: 'wood', name: '목(木)' },
    3: { element: 'fire', name: '화(火)' },
    4: { element: 'fire', name: '화(火)' },
    5: { element: 'earth', name: '토(土)' },
    6: { element: 'earth', name: '토(土)' },
    7: { element: 'metal', name: '금(金)' },
    8: { element: 'metal', name: '금(金)' },
    9: { element: 'water', name: '수(水)' },
    0: { element: 'water', name: '수(水)' },
  };
  
  const elementInfo = elements[lastDigit];
  const yinYang = lastDigit % 2 === 1 ? 'yang' : 'yin';
  
  return {
    ...elementInfo,
    yinYang,
  };
}

/**
 * 오행 색상
 */
export function getElementColor(element: Element): string {
  const colors: Record<Element, string> = {
    wood: '초록',
    fire: '빨강',
    earth: '노랑',
    metal: '흰색',
    water: '검정/파랑',
  };
  return colors[element];
}

/**
 * 이름 유효성 검사
 */
export function isValidKoreanName(name: string): boolean {
  // 한글만 허용, 2~4글자
  const koreanRegex = /^[가-힣]{2,4}$/;
  return koreanRegex.test(name);
}

/**
 * 성/이름 분리 (일반적인 1글자 성 기준)
 */
export function splitName(fullName: string): { lastName: string; firstName: string } | null {
  if (!isValidKoreanName(fullName)) {
    return null;
  }
  
  // 2글자 성 목록
  const twoCharLastNames = ['남궁', '선우', '제갈', '황보', '사공', '서문', '독고', '동방'];
  
  // 2글자 성 체크
  if (fullName.length >= 3) {
    const possibleTwoChar = fullName.substring(0, 2);
    if (twoCharLastNames.includes(possibleTwoChar)) {
      return {
        lastName: possibleTwoChar,
        firstName: fullName.substring(2),
      };
    }
  }
  
  // 기본 1글자 성
  return {
    lastName: fullName.substring(0, 1),
    firstName: fullName.substring(1),
  };
}
