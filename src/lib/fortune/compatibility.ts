// 궁합 계산 로직
import { ZodiacAnimal, getZodiacByBirthDate, getZodiacInfo, ZODIAC_COMPATIBILITY } from './zodiac';
import { Constellation, getConstellationByBirthDate, getConstellationInfo, CONSTELLATION_COMPATIBILITY } from './constellation';

export interface CompatibilityResult {
  // 띠 궁합
  zodiac: {
    person1: { animal: ZodiacAnimal; name: string; emoji: string };
    person2: { animal: ZodiacAnimal; name: string; emoji: string };
    score: number;          // 0-100
    grade: string;          // 최고, 좋음, 보통, 주의
    type: 'best' | 'good' | 'neutral' | 'caution';
    description: string;
  };
  // 별자리 궁합
  constellation: {
    person1: { sign: Constellation; name: string; symbol: string };
    person2: { sign: Constellation; name: string; symbol: string };
    score: number;
    grade: string;
    type: 'best' | 'good' | 'neutral' | 'caution';
    description: string;
  };
  // 종합
  overall: {
    score: number;
    grade: string;
    summary: string;
  };
}

/**
 * 띠 궁합 점수 계산
 */
function calculateZodiacCompatibility(animal1: ZodiacAnimal, animal2: ZodiacAnimal): {
  score: number;
  grade: string;
  type: 'best' | 'good' | 'neutral' | 'caution';
} {
  const compat = ZODIAC_COMPATIBILITY[animal1];
  
  // 같은 띠
  if (animal1 === animal2) {
    return { score: 75, grade: '좋음', type: 'good' };
  }
  
  // 삼합 (최고 궁합)
  if (compat.best.includes(animal2)) {
    return { score: 95, grade: '천생연분', type: 'best' };
  }
  
  // 육합 (좋은 궁합)
  if (compat.good.includes(animal2)) {
    return { score: 85, grade: '좋은 궁합', type: 'good' };
  }
  
  // 상충 (주의 필요)
  if (compat.caution.includes(animal2)) {
    return { score: 45, grade: '노력 필요', type: 'caution' };
  }
  
  // 그 외 보통
  return { score: 65, grade: '무난한 궁합', type: 'neutral' };
}

/**
 * 별자리 궁합 점수 계산
 */
function calculateConstellationCompatibility(sign1: Constellation, sign2: Constellation): {
  score: number;
  grade: string;
  type: 'best' | 'good' | 'neutral' | 'caution';
} {
  const compat = CONSTELLATION_COMPATIBILITY[sign1];
  
  // 같은 별자리
  if (sign1 === sign2) {
    return { score: 70, grade: '동질감', type: 'neutral' };
  }
  
  // 최고 궁합 (같은 원소)
  if (compat.best.includes(sign2)) {
    return { score: 92, grade: '환상의 조합', type: 'best' };
  }
  
  // 좋은 궁합 (상생 원소)
  if (compat.good.includes(sign2)) {
    return { score: 82, grade: '좋은 케미', type: 'good' };
  }
  
  // 주의 필요
  if (compat.caution.includes(sign2)) {
    return { score: 50, grade: '이해 필요', type: 'caution' };
  }
  
  // 보통
  return { score: 65, grade: '평범한 관계', type: 'neutral' };
}

/**
 * 종합 궁합 계산
 */
export function calculateCompatibility(birth1: string, birth2: string): CompatibilityResult {
  // 띠 계산
  const zodiac1 = getZodiacByBirthDate(birth1);
  const zodiac2 = getZodiacByBirthDate(birth2);
  const zodiacInfo1 = getZodiacInfo(zodiac1);
  const zodiacInfo2 = getZodiacInfo(zodiac2);
  const zodiacCompat = calculateZodiacCompatibility(zodiac1, zodiac2);
  
  // 별자리 계산
  const const1 = getConstellationByBirthDate(birth1);
  const const2 = getConstellationByBirthDate(birth2);
  const constInfo1 = getConstellationInfo(const1);
  const constInfo2 = getConstellationInfo(const2);
  const constCompat = calculateConstellationCompatibility(const1, const2);
  
  // 종합 점수 (띠 60%, 별자리 40%)
  const overallScore = Math.round(zodiacCompat.score * 0.6 + constCompat.score * 0.4);
  
  let overallGrade: string;
  let overallSummary: string;
  
  if (overallScore >= 90) {
    overallGrade = '천생연분';
    overallSummary = '하늘이 점지해준 인연! 서로를 깊이 이해하고 보완하는 최고의 궁합입니다.';
  } else if (overallScore >= 80) {
    overallGrade = '좋은 인연';
    overallSummary = '서로에게 긍정적인 영향을 주는 좋은 궁합입니다. 함께하면 더 성장할 수 있어요.';
  } else if (overallScore >= 70) {
    overallGrade = '괜찮은 궁합';
    overallSummary = '무난하게 잘 맞는 궁합입니다. 서로의 차이를 인정하면 좋은 관계가 됩니다.';
  } else if (overallScore >= 60) {
    overallGrade = '보통';
    overallSummary = '평범한 궁합이지만, 노력하면 충분히 좋은 관계를 만들 수 있습니다.';
  } else {
    overallGrade = '노력 필요';
    overallSummary = '서로 다른 점이 많지만, 그만큼 배울 점도 많습니다. 이해와 배려가 중요해요.';
  }
  
  return {
    zodiac: {
      person1: { animal: zodiac1, name: zodiacInfo1.name, emoji: zodiacInfo1.emoji },
      person2: { animal: zodiac2, name: zodiacInfo2.name, emoji: zodiacInfo2.emoji },
      score: zodiacCompat.score,
      grade: zodiacCompat.grade,
      type: zodiacCompat.type,
      description: getZodiacDescription(zodiac1, zodiac2, zodiacCompat.type),
    },
    constellation: {
      person1: { sign: const1, name: constInfo1.name, symbol: constInfo1.symbol },
      person2: { sign: const2, name: constInfo2.name, symbol: constInfo2.symbol },
      score: constCompat.score,
      grade: constCompat.grade,
      type: constCompat.type,
      description: getConstellationDescription(const1, const2, constCompat.type),
    },
    overall: {
      score: overallScore,
      grade: overallGrade,
      summary: overallSummary,
    },
  };
}

/**
 * 띠 궁합 설명 생성
 */
function getZodiacDescription(animal1: ZodiacAnimal, animal2: ZodiacAnimal, type: string): string {
  const info1 = getZodiacInfo(animal1);
  const info2 = getZodiacInfo(animal2);
  
  if (animal1 === animal2) {
    return `같은 ${info1.name}끼리는 서로를 잘 이해하고 공감할 수 있습니다. 비슷한 성향이라 편안하지만, 때로는 같은 약점이 부딪힐 수 있으니 주의하세요.`;
  }
  
  switch (type) {
    case 'best':
      return `${info1.name}와 ${info2.name}는 삼합(三合)으로 최고의 궁합입니다! 서로의 부족한 점을 완벽하게 채워주며, 함께하면 시너지 효과가 납니다. 운명적인 만남이라 할 수 있어요.`;
    case 'good':
      return `${info1.name}와 ${info2.name}는 육합(六合)으로 좋은 궁합입니다. 서로에게 좋은 영향을 주고, 자연스럽게 끌리는 관계입니다. 함께하면 안정감을 느낄 수 있어요.`;
    case 'caution':
      return `${info1.name}와 ${info2.name}는 상충(相沖) 관계로 서로 다른 성향이 부딪힐 수 있습니다. 하지만 서로의 차이를 인정하고 존중하면 오히려 보완적인 관계가 될 수 있어요.`;
    default:
      return `${info1.name}와 ${info2.name}는 무난한 관계입니다. 특별히 좋거나 나쁜 영향 없이 평화롭게 지낼 수 있어요. 서로의 개성을 존중하면 더 좋은 관계가 됩니다.`;
  }
}

/**
 * 별자리 궁합 설명 생성
 */
function getConstellationDescription(sign1: Constellation, sign2: Constellation, type: string): string {
  const info1 = getConstellationInfo(sign1);
  const info2 = getConstellationInfo(sign2);
  
  if (sign1 === sign2) {
    return `같은 ${info1.name}끼리는 강한 동질감을 느낍니다. 서로를 거울처럼 비추며 깊은 이해가 가능하지만, 같은 단점이 증폭될 수 있으니 주의하세요.`;
  }
  
  switch (type) {
    case 'best':
      return `${info1.name}와 ${info2.name}는 같은 원소(${info1.element.split('(')[0]})로 환상의 궁합입니다! 자연스럽게 서로를 이해하고, 에너지가 잘 맞아 함께하면 즐겁습니다.`;
    case 'good':
      return `${info1.name}와 ${info2.name}는 상생하는 원소로 좋은 케미를 보여줍니다. 서로 다르지만 보완적인 관계로, 함께 성장할 수 있는 조합이에요.`;
    case 'caution':
      return `${info1.name}와 ${info2.name}는 원소가 충돌할 수 있는 조합입니다. 서로 다른 방식으로 세상을 바라보기에 오해가 생길 수 있어요. 열린 대화가 중요합니다.`;
    default:
      return `${info1.name}와 ${info2.name}는 평범한 관계입니다. 특별한 끌림이나 갈등 없이 무난하게 지낼 수 있어요.`;
  }
}
