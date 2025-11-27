// 이름 풀이 해석 데이터
import { NumberFortune, Element } from '@/lib/fortune/name';

export interface NameAnalysisResult {
  personality: string;      // 성격 분석
  career: string;           // 직업/적성
  relationship: string;     // 대인관계
  fortune: string;          // 재물/성공운
  advice: string;           // 조언
}

// 원격(성) 해석 - 기본 성향
export function getWonAnalysis(num: number): string {
  const fortune = getNumberCategory(num);
  
  const analyses: Record<string, string> = {
    great: '타고난 리더십과 강한 의지력을 가지고 있습니다. 주변의 신뢰를 받으며, 어떤 상황에서도 중심을 잡는 능력이 있습니다.',
    good: '안정적이고 신뢰할 수 있는 성품을 타고났습니다. 꾸준한 노력으로 목표를 달성하는 힘이 있습니다.',
    neutral: '평범하지만 균형 잡힌 성향을 가지고 있습니다. 환경과 노력에 따라 다양한 가능성을 발휘할 수 있습니다.',
    bad: '예민하고 섬세한 면이 있습니다. 이를 창의적인 방향으로 활용하면 큰 장점이 됩니다.',
  };
  
  return analyses[fortune];
}

// 형격(성+이름첫글자) 해석 - 청년기 운세
export function getHyungAnalysis(num: number): string {
  const fortune = getNumberCategory(num);
  
  const analyses: Record<string, string> = {
    great: '청년기에 두각을 나타내며, 일찍이 성공의 기반을 다집니다. 학업이나 초기 커리어에서 좋은 성과를 얻습니다.',
    good: '청년기에 안정적인 성장을 합니다. 차근차근 실력을 쌓아가며 기회를 만들어 갑니다.',
    neutral: '청년기에 다양한 시도와 경험을 하게 됩니다. 이 과정에서 자신만의 길을 찾아갑니다.',
    bad: '청년기에 도전과 시련이 있을 수 있습니다. 이를 통해 더 강해지고 성숙해집니다.',
  };
  
  return analyses[fortune];
}

// 이격(이름) 해석 - 중년기 운세
export function getYiAnalysis(num: number): string {
  const fortune = getNumberCategory(num);
  
  const analyses: Record<string, string> = {
    great: '중년기에 인생의 전성기를 맞이합니다. 사회적 성공과 경제적 안정을 모두 이루게 됩니다.',
    good: '중년기에 꾸준한 발전을 이룹니다. 가정과 일 모두에서 보람을 느끼게 됩니다.',
    neutral: '중년기에 안정과 변화 사이에서 균형을 찾아갑니다. 새로운 도전이 성장의 기회가 됩니다.',
    bad: '중년기에 예상치 못한 변화가 있을 수 있습니다. 유연하게 대처하면 더 좋은 결과를 얻습니다.',
  };
  
  return analyses[fortune];
}

// 정격(전체) 해석 - 총운
export function getJungAnalysis(num: number): string {
  const fortune = getNumberCategory(num);
  
  const analyses: Record<string, string> = {
    great: '전체적으로 매우 좋은 이름입니다. 인생 전반에 걸쳐 행운이 따르며, 원하는 것을 이룰 수 있는 강한 기운을 가지고 있습니다.',
    good: '전체적으로 좋은 이름입니다. 노력한 만큼 결과를 얻으며, 안정적인 삶을 살아갈 수 있습니다.',
    neutral: '보통의 이름으로, 본인의 노력과 선택에 따라 다양한 결과가 나타납니다. 긍정적인 마음가짐이 중요합니다.',
    bad: '주의가 필요한 부분이 있는 이름입니다. 하지만 이름이 운명을 결정하는 것은 아닙니다. 노력과 긍정적인 마음으로 극복할 수 있습니다.',
  };
  
  return analyses[fortune];
}

// 숫자 카테고리 판단 (간략화)
function getNumberCategory(num: number): string {
  const greatNumbers = [1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 29, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81];
  const badNumbers = [4, 9, 20, 28, 54, 56, 69, 74, 76, 79, 80];
  
  const effectiveNum = num > 81 ? (num % 81) || 81 : num;
  
  if (greatNumbers.includes(effectiveNum)) return 'great';
  if (badNumbers.includes(effectiveNum)) return 'bad';
  if (effectiveNum % 2 === 1) return 'good';
  return 'neutral';
}

// 오행별 성격 분석
export function getElementPersonality(element: Element): string {
  const personalities: Record<Element, string> = {
    wood: '성장과 창의력을 상징합니다. 새로운 것을 시작하고 발전시키는 능력이 뛰어나며, 인자하고 배려심이 깊습니다. 교육, 창작, 기획 분야에서 두각을 나타냅니다.',
    fire: '열정과 리더십을 상징합니다. 밝고 활발한 성격으로 주변을 이끄는 힘이 있습니다. 예술, 엔터테인먼트, 마케팅 분야에서 능력을 발휘합니다.',
    earth: '안정과 신뢰를 상징합니다. 꾸준하고 믿음직한 성격으로 주변의 신뢰를 받습니다. 금융, 부동산, 농업 관련 분야에서 성공합니다.',
    metal: '결단력과 정의감을 상징합니다. 원칙을 중시하고 공정한 판단력이 있습니다. 법률, 금속/기계, IT 분야에서 능력을 발휘합니다.',
    water: '지혜와 소통을 상징합니다. 유연하고 적응력이 뛰어나며, 깊은 통찰력이 있습니다. 연구, 상담, 무역 분야에서 두각을 나타냅니다.',
  };
  
  return personalities[element];
}

// 오행별 조언
export function getElementAdvice(element: Element): string {
  const advices: Record<Element, string> = {
    wood: '너무 급하게 성장하려 하지 말고, 뿌리를 단단히 내리세요. 인내심을 가지면 더 큰 나무로 성장합니다.',
    fire: '열정을 조절하는 것이 중요합니다. 때로는 한 발 물러서 에너지를 충전하세요.',
    earth: '변화를 두려워하지 마세요. 안정만 추구하면 성장이 멈출 수 있습니다.',
    metal: '유연함도 필요합니다. 너무 원칙만 고집하면 기회를 놓칠 수 있어요.',
    water: '깊이 있게 생각하되, 결단의 순간에는 과감해지세요. 흐르는 물처럼 유연하게.',
  };
  
  return advices[element];
}

// 음양 조화 분석
export function getYinYangAnalysis(yinCount: number, yangCount: number): string {
  if (yinCount === yangCount) {
    return '음양이 완벽하게 조화를 이루고 있습니다. 균형 잡힌 성격으로 어떤 상황에서도 중심을 잃지 않습니다.';
  }
  
  if (yangCount > yinCount) {
    const diff = yangCount - yinCount;
    if (diff >= 2) {
      return '양의 기운이 강합니다. 적극적이고 활동적이지만, 때로는 휴식과 내면의 성찰이 필요합니다.';
    }
    return '약간 양의 기운이 우세합니다. 활발하면서도 안정감이 있는 좋은 조화입니다.';
  }
  
  const diff = yinCount - yangCount;
  if (diff >= 2) {
    return '음의 기운이 강합니다. 차분하고 신중하지만, 때로는 적극적인 행동도 필요합니다.';
  }
  return '약간 음의 기운이 우세합니다. 사려 깊으면서도 필요할 때 행동력을 발휘하는 균형입니다.';
}

// 종합 점수 계산
export function calculateOverallScore(
  wonFortune: NumberFortune,
  hyungFortune: NumberFortune,
  yiFortune: NumberFortune,
  jungFortune: NumberFortune
): number {
  const fortuneScores: Record<NumberFortune, number> = {
    great: 25,
    good: 20,
    neutral: 15,
    bad: 10,
  };
  
  return fortuneScores[wonFortune] + fortuneScores[hyungFortune] + fortuneScores[yiFortune] + fortuneScores[jungFortune];
}

// 점수별 등급
export function getScoreGrade(score: number): { grade: string; emoji: string; description: string } {
  if (score >= 90) {
    return { grade: '최상', emoji: '🌟', description: '매우 좋은 이름입니다!' };
  }
  if (score >= 80) {
    return { grade: '상', emoji: '✨', description: '좋은 기운의 이름입니다.' };
  }
  if (score >= 70) {
    return { grade: '중상', emoji: '💫', description: '괜찮은 이름입니다.' };
  }
  if (score >= 60) {
    return { grade: '중', emoji: '⭐', description: '보통의 이름입니다.' };
  }
  return { grade: '보완 필요', emoji: '🔮', description: '노력으로 극복 가능합니다.' };
}

// 행운의 색상 (오행 기반)
export function getLuckyColors(element: Element): string[] {
  const colors: Record<Element, string[]> = {
    wood: ['초록', '청록', '연두'],
    fire: ['빨강', '주황', '분홍'],
    earth: ['노랑', '갈색', '베이지'],
    metal: ['흰색', '은색', '금색'],
    water: ['검정', '파랑', '남색'],
  };
  return colors[element];
}

// 행운의 방향 (오행 기반)
export function getLuckyDirection(element: Element): string {
  const directions: Record<Element, string> = {
    wood: '동쪽',
    fire: '남쪽',
    earth: '중앙',
    metal: '서쪽',
    water: '북쪽',
  };
  return directions[element];
}
