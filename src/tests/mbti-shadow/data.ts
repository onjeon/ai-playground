// MBTI 부캐 테스트 - 숨겨진 또 다른 나

export interface MbtiShadowQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface MbtiShadowResult {
  type: string;
  mainMbti: string;
  shadowMbti: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  mainTraits: string[];
  shadowTraits: string[];
  whenShadowAppears: string[];
  balanceTips: string[];
  shadowStrengths: string[];
  famousExample: string;
}

export const mbtiShadowTypes = ['ENFP_shadow', 'INTJ_shadow', 'ESFJ_shadow', 'ISTP_shadow', 'INFJ_shadow', 'ESTP_shadow', 'ENTJ_shadow', 'ISFP_shadow'] as const;
export type MbtiShadowType = typeof mbtiShadowTypes[number];

export const questions: MbtiShadowQuestion[] = [
  {
    id: 1,
    question: "평소에는 계획적이지만, 가끔 충동적으로 행동할 때가 있다",
    options: [
      { text: "매우 그렇다", scores: { ENFP_shadow: 3, ESTP_shadow: 2 } },
      { text: "그런 편이다", scores: { ENFP_shadow: 2, ISTP_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { INTJ_shadow: 2, ENTJ_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { INTJ_shadow: 3 } },
    ],
  },
  {
    id: 2,
    question: "혼자 있을 때 오히려 사교적인 상상을 한다",
    options: [
      { text: "매우 그렇다", scores: { ESFJ_shadow: 3, ENFP_shadow: 2 } },
      { text: "그런 편이다", scores: { ESFJ_shadow: 2, ESTP_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { INFJ_shadow: 2, ISFP_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { INTJ_shadow: 2, ISTP_shadow: 1 } },
    ],
  },
  {
    id: 3,
    question: "감정적인 것 같지만 속으론 매우 논리적으로 분석한다",
    options: [
      { text: "매우 그렇다", scores: { INTJ_shadow: 3, ISTP_shadow: 2 } },
      { text: "그런 편이다", scores: { ENTJ_shadow: 2, INTJ_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { INFJ_shadow: 2, ESFJ_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { ENFP_shadow: 2, ISFP_shadow: 1 } },
    ],
  },
  {
    id: 4,
    question: "스트레스 받으면 평소와 다른 모습이 나온다",
    options: [
      { text: "완전히 다른 사람이 된다", scores: { ESTP_shadow: 3, ENFP_shadow: 2 } },
      { text: "꽤 달라지는 편이다", scores: { INFJ_shadow: 2, ENTJ_shadow: 1 } },
      { text: "조금 달라진다", scores: { ISTP_shadow: 2, ISFP_shadow: 1 } },
      { text: "거의 변하지 않는다", scores: { INTJ_shadow: 2, ESFJ_shadow: 1 } },
    ],
  },
  {
    id: 5,
    question: "남들 앞에서는 차분하지만 속으론 열정적이다",
    options: [
      { text: "매우 그렇다", scores: { ENFP_shadow: 3, ESTP_shadow: 2 } },
      { text: "그런 편이다", scores: { INFJ_shadow: 2, ENTJ_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { ISTP_shadow: 2, INTJ_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { ISFP_shadow: 2, ESFJ_shadow: 1 } },
    ],
  },
  {
    id: 6,
    question: "리더 역할이 어울리지만 가끔 따르고 싶을 때가 있다",
    options: [
      { text: "매우 그렇다", scores: { ISFP_shadow: 3, INFJ_shadow: 2 } },
      { text: "그런 편이다", scores: { ESFJ_shadow: 2, ISFP_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { ENTJ_shadow: 2, ESTP_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { ENTJ_shadow: 3, INTJ_shadow: 1 } },
    ],
  },
  {
    id: 7,
    question: "현실적이지만 가끔 비현실적인 꿈을 꾼다",
    options: [
      { text: "매우 그렇다", scores: { INFJ_shadow: 3, ENFP_shadow: 2 } },
      { text: "그런 편이다", scores: { INFJ_shadow: 2, ISFP_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { ISTP_shadow: 2, ENTJ_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { ESTP_shadow: 2, INTJ_shadow: 1 } },
    ],
  },
  {
    id: 8,
    question: "배려심이 많지만 가끔 독단적으로 결정하고 싶다",
    options: [
      { text: "매우 그렇다", scores: { ENTJ_shadow: 3, INTJ_shadow: 2 } },
      { text: "그런 편이다", scores: { ENTJ_shadow: 2, ESTP_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { ESFJ_shadow: 2, INFJ_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { ESFJ_shadow: 3, ISFP_shadow: 1 } },
    ],
  },
  {
    id: 9,
    question: "외향적이지만 완전한 혼자만의 시간이 필요하다",
    options: [
      { text: "매우 그렇다", scores: { INTJ_shadow: 3, ISTP_shadow: 2 } },
      { text: "그런 편이다", scores: { INFJ_shadow: 2, ISFP_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { ENFP_shadow: 2, ESFJ_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { ESTP_shadow: 2, ENTJ_shadow: 1 } },
    ],
  },
  {
    id: 10,
    question: "논리적이지만 직감으로 결정할 때가 있다",
    options: [
      { text: "매우 그렇다", scores: { INFJ_shadow: 3, ISFP_shadow: 2 } },
      { text: "그런 편이다", scores: { ENFP_shadow: 2, INFJ_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { INTJ_shadow: 2, ISTP_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { ENTJ_shadow: 2, ESTP_shadow: 1 } },
    ],
  },
  {
    id: 11,
    question: "안정을 추구하지만 가끔 모험을 꿈꾼다",
    options: [
      { text: "매우 그렇다", scores: { ESTP_shadow: 3, ENFP_shadow: 2 } },
      { text: "그런 편이다", scores: { ISTP_shadow: 2, ESTP_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { ESFJ_shadow: 2, INTJ_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { ISFP_shadow: 2, INFJ_shadow: 1 } },
    ],
  },
  {
    id: 12,
    question: "규칙을 따르지만 가끔 깨고 싶은 충동이 있다",
    options: [
      { text: "매우 그렇다", scores: { ESTP_shadow: 3, ISTP_shadow: 2 } },
      { text: "그런 편이다", scores: { ENFP_shadow: 2, ENTJ_shadow: 1 } },
      { text: "별로 그렇지 않다", scores: { ESFJ_shadow: 2, INTJ_shadow: 1 } },
      { text: "전혀 그렇지 않다", scores: { INFJ_shadow: 2, ISFP_shadow: 1 } },
    ],
  },
];

export const results: Record<MbtiShadowType, MbtiShadowResult> = {
  ENFP_shadow: {
    type: 'ENFP_shadow',
    mainMbti: 'ISTJ',
    shadowMbti: 'ENFP',
    emoji: '🎭',
    title: '숨겨진 자유로운 영혼',
    subtitle: '겉은 책임감, 속은 자유',
    description: '평소에는 책임감 있고 체계적이지만, 내면에는 자유롭고 창의적인 영혼이 숨어있어요. 가끔 모든 걸 내려놓고 즉흥적으로 살고 싶은 충동이 있죠.',
    mainTraits: ['책임감', '계획성', '신뢰성', '꼼꼼함'],
    shadowTraits: ['창의성', '즉흥성', '열정', '호기심'],
    whenShadowAppears: ['스트레스가 극에 달했을 때', '안전한 사람들과 있을 때', '여행 중일 때', '술 마셨을 때'],
    balanceTips: ['가끔 계획 없는 하루를 보내보세요', '새로운 취미에 도전해보세요', '창의적인 활동을 해보세요'],
    shadowStrengths: ['숨겨진 창의력', '유연한 사고', '열린 마음'],
    famousExample: '워렌 버핏 (투자할 땐 직관도 중요)',
  },
  INTJ_shadow: {
    type: 'INTJ_shadow',
    mainMbti: 'ESFP',
    shadowMbti: 'INTJ',
    emoji: '🧠',
    title: '숨겨진 전략가',
    subtitle: '겉은 즐거움, 속은 분석',
    description: '평소에는 사교적이고 즐거움을 추구하지만, 내면에서는 모든 것을 전략적으로 분석하고 있어요. 혼자만의 시간에 깊은 생각에 빠지곤 하죠.',
    mainTraits: ['사교성', '즐거움 추구', '현재 중시', '적응력'],
    shadowTraits: ['전략적 사고', '분석력', '미래 계획', '독립성'],
    whenShadowAppears: ['중요한 결정을 내릴 때', '혼자 있을 때', '문제를 해결해야 할 때', '미래를 계획할 때'],
    balanceTips: ['전략적인 면을 인정하세요', '혼자만의 시간을 충분히 가지세요', '장기 목표를 세워보세요'],
    shadowStrengths: ['예상 외의 통찰력', '숨겨진 계획력', '깊은 분석 능력'],
    famousExample: '로버트 다우니 주니어 (즐기면서도 전략적)',
  },
  ESFJ_shadow: {
    type: 'ESFJ_shadow',
    mainMbti: 'INTP',
    shadowMbti: 'ESFJ',
    emoji: '🤗',
    title: '숨겨진 돌봄이',
    subtitle: '겉은 논리, 속은 따뜻함',
    description: '평소에는 논리적이고 분석적이지만, 내면에는 사람들을 돌보고 싶은 따뜻한 마음이 있어요. 가끔 인정받고 싶은 욕구가 강하게 올라오죠.',
    mainTraits: ['논리성', '분석력', '독립성', '호기심'],
    shadowTraits: ['배려심', '사교성', '조화 추구', '헌신'],
    whenShadowAppears: ['가까운 사람이 힘들어할 때', '그룹에 소속되고 싶을 때', '인정받고 싶을 때', '명절/모임 때'],
    balanceTips: ['감정 표현을 연습해보세요', '소중한 사람들과 시간을 보내세요', '도움 주는 것을 두려워하지 마세요'],
    shadowStrengths: ['숨겨진 공감력', '예상 외의 배려심', '깊은 유대감 형성'],
    famousExample: '빌 게이츠 (자선 사업가로서의 면모)',
  },
  ISTP_shadow: {
    type: 'ISTP_shadow',
    mainMbti: 'ENFJ',
    shadowMbti: 'ISTP',
    emoji: '🔧',
    title: '숨겨진 해결사',
    subtitle: '겉은 따뜻함, 속은 실용',
    description: '평소에는 따뜻하고 사람 중심적이지만, 내면에는 실용적이고 효율적인 문제 해결사가 숨어있어요. 가끔 감정보다 논리로 해결하고 싶을 때가 있죠.',
    mainTraits: ['리더십', '공감력', '사람 중심', '헌신'],
    shadowTraits: ['실용성', '독립성', '논리적 해결', '효율 추구'],
    whenShadowAppears: ['문제가 복잡해질 때', '감정이 지칠 때', '혼자 해결해야 할 때', '기술적 문제를 다룰 때'],
    balanceTips: ['가끔 혼자 문제를 해결해보세요', '실용적인 취미를 가져보세요', '효율도 중요하다는 걸 인정하세요'],
    shadowStrengths: ['냉철한 판단력', '실전 해결 능력', '독립적 행동력'],
    famousExample: '오프라 윈프리 (비즈니스적 면모)',
  },
  INFJ_shadow: {
    type: 'INFJ_shadow',
    mainMbti: 'ESTP',
    shadowMbti: 'INFJ',
    emoji: '🔮',
    title: '숨겨진 예언자',
    subtitle: '겉은 현실, 속은 이상',
    description: '평소에는 현실적이고 행동 중심적이지만, 내면에는 깊은 통찰력과 이상을 품고 있어요. 가끔 세상의 의미를 찾으며 깊은 생각에 빠지곤 하죠.',
    mainTraits: ['행동력', '현실 중시', '모험심', '적응력'],
    shadowTraits: ['통찰력', '이상 추구', '의미 탐색', '미래 지향'],
    whenShadowAppears: ['인생의 전환점에서', '깊은 대화를 나눌 때', '예술/철학을 접할 때', '명상이나 성찰 시간에'],
    balanceTips: ['깊은 대화의 시간을 가지세요', '의미 있는 목표를 세워보세요', '직관을 믿어보세요'],
    shadowStrengths: ['예상 외의 통찰', '깊은 이해력', '숨겨진 이상'],
    famousExample: '도널드 트럼프 (예상 외의 직관)',
  },
  ESTP_shadow: {
    type: 'ESTP_shadow',
    mainMbti: 'INFJ',
    shadowMbti: 'ESTP',
    emoji: '⚡',
    title: '숨겨진 모험가',
    subtitle: '겉은 신중, 속은 대담',
    description: '평소에는 신중하고 깊이 생각하지만, 내면에는 대담하고 모험적인 영혼이 숨어있어요. 가끔 모든 걸 던지고 즉흥적으로 행동하고 싶은 충동이 있죠.',
    mainTraits: ['신중함', '깊은 사고', '이상 추구', '계획성'],
    shadowTraits: ['대담함', '즉흥성', '현실 감각', '행동력'],
    whenShadowAppears: ['너무 오래 생각만 했을 때', '스트레스가 극에 달했을 때', '새로운 자극이 필요할 때', '모험의 기회가 왔을 때'],
    balanceTips: ['가끔 생각하지 말고 행동해보세요', '즉흥 여행을 떠나보세요', '새로운 경험에 도전하세요'],
    shadowStrengths: ['숨겨진 대담함', '위기 대처 능력', '빠른 적응력'],
    famousExample: '간디 (평화적이지만 대담한 행동)',
  },
  ENTJ_shadow: {
    type: 'ENTJ_shadow',
    mainMbti: 'ISFP',
    shadowMbti: 'ENTJ',
    emoji: '👑',
    title: '숨겨진 지휘관',
    subtitle: '겉은 유연, 속은 야망',
    description: '평소에는 유연하고 조화를 추구하지만, 내면에는 강한 야망과 리더십이 숨어있어요. 가끔 모든 걸 통제하고 이끌고 싶은 욕구가 올라오죠.',
    mainTraits: ['유연성', '감성', '조화 추구', '예술성'],
    shadowTraits: ['리더십', '야망', '결단력', '효율 추구'],
    whenShadowAppears: ['리더가 부재할 때', '중요한 프로젝트에서', '목표가 생겼을 때', '비효율을 참을 수 없을 때'],
    balanceTips: ['리더십 역할을 피하지 마세요', '목표를 세우고 추진해보세요', '결단력을 발휘해보세요'],
    shadowStrengths: ['숨겨진 카리스마', '예상 외의 추진력', '위기 리더십'],
    famousExample: '밥 딜런 (아티스트이자 리더)',
  },
  ISFP_shadow: {
    type: 'ISFP_shadow',
    mainMbti: 'ENTJ',
    shadowMbti: 'ISFP',
    emoji: '🎨',
    title: '숨겨진 예술가',
    subtitle: '겉은 강함, 속은 감성',
    description: '평소에는 강하고 결단력 있지만, 내면에는 섬세하고 예술적인 감성이 숨어있어요. 가끔 모든 책임을 내려놓고 자유롭게 살고 싶을 때가 있죠.',
    mainTraits: ['리더십', '결단력', '효율성', '목표 지향'],
    shadowTraits: ['감성', '예술성', '자유로움', '유연함'],
    whenShadowAppears: ['예술 작품을 감상할 때', '자연 속에 있을 때', '감정적으로 지쳤을 때', '휴가 중일 때'],
    balanceTips: ['예술 활동을 해보세요', '자연 속 시간을 가지세요', '감정을 표현하는 연습을 하세요'],
    shadowStrengths: ['숨겨진 감성', '예상 외의 예술성', '깊은 공감 능력'],
    famousExample: '스티브 잡스 (기술과 예술의 조화)',
  },
};

export function calculateResult(answers: number[]): MbtiShadowResult {
  const scores: Record<MbtiShadowType, number> = {
    ENFP_shadow: 0,
    INTJ_shadow: 0,
    ESFJ_shadow: 0,
    ISTP_shadow: 0,
    INFJ_shadow: 0,
    ESTP_shadow: 0,
    ENTJ_shadow: 0,
    ISFP_shadow: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as MbtiShadowType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: MbtiShadowType = 'ENFP_shadow';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as MbtiShadowType;
    }
  });

  return results[resultType];
}
