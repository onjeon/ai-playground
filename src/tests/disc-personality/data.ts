// DISC 성격 유형 테스트

export interface DISCQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface DISCResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  communicationStyle: string;
  workStyle: string;
  stressResponse: string;
  idealEnvironment: string;
  tips: string[];
  bestMatch: string;
  challengeMatch: string;
  famousPeople: string;
}

// DISC 유형
export const discTypes = ['D', 'I', 'S', 'C'] as const;
export type DISCType = typeof discTypes[number];

// 질문 데이터 (12문항)
export const questions: DISCQuestion[] = [
  {
    id: 1,
    question: "회의에서 의견 충돌이 있을 때 나는?",
    options: [
      { text: "내 의견을 강하게 주장하고 설득한다", scores: { D: 2 } },
      { text: "분위기를 띄우며 타협점을 찾는다", scores: { I: 2 } },
      { text: "다른 사람들 의견을 먼저 듣는다", scores: { S: 2 } },
      { text: "데이터와 논리로 분석해서 말한다", scores: { C: 2 } },
    ],
  },
  {
    id: 2,
    question: "새로운 프로젝트를 맡으면?",
    options: [
      { text: "바로 실행에 옮기고 결과를 낸다", scores: { D: 2 } },
      { text: "팀원들과 아이디어 회의부터 한다", scores: { I: 2 } },
      { text: "기존 방식을 참고해서 안정적으로 진행한다", scores: { S: 2 } },
      { text: "먼저 계획을 꼼꼼히 세운다", scores: { C: 2 } },
    ],
  },
  {
    id: 3,
    question: "스트레스를 받으면 나는?",
    options: [
      { text: "더 공격적이고 직접적으로 변한다", scores: { D: 2 } },
      { text: "말이 많아지고 산만해진다", scores: { I: 2 } },
      { text: "혼자 있고 싶고 말이 줄어든다", scores: { S: 2 } },
      { text: "더 완벽주의적이고 비판적이 된다", scores: { C: 2 } },
    ],
  },
  {
    id: 4,
    question: "일할 때 가장 중요하게 생각하는 것은?",
    options: [
      { text: "빠른 결과와 성취", scores: { D: 2 } },
      { text: "즐거운 분위기와 인정", scores: { I: 2 } },
      { text: "안정감과 조화", scores: { S: 2 } },
      { text: "정확성과 품질", scores: { C: 2 } },
    ],
  },
  {
    id: 5,
    question: "리더십 스타일은?",
    options: [
      { text: "목표 지향적, 결단력 있는 리더", scores: { D: 2 } },
      { text: "영감을 주고 동기부여하는 리더", scores: { I: 2 } },
      { text: "지원하고 경청하는 리더", scores: { S: 2 } },
      { text: "체계적이고 전문적인 리더", scores: { C: 2 } },
    ],
  },
  {
    id: 6,
    question: "의사결정을 할 때 나는?",
    options: [
      { text: "빠르게 결정하고 바로 실행한다", scores: { D: 2 } },
      { text: "직감과 느낌을 따른다", scores: { I: 2 } },
      { text: "충분히 시간을 두고 신중하게 결정한다", scores: { S: 2 } },
      { text: "모든 정보를 분석한 후 결정한다", scores: { C: 2 } },
    ],
  },
  {
    id: 7,
    question: "다른 사람들이 나를 어떻게 볼까?",
    options: [
      { text: "자신감 있고 추진력이 강하다", scores: { D: 2 } },
      { text: "밝고 사교적이다", scores: { I: 2 } },
      { text: "차분하고 믿음직스럽다", scores: { S: 2 } },
      { text: "꼼꼼하고 신중하다", scores: { C: 2 } },
    ],
  },
  {
    id: 8,
    question: "팀 프로젝트에서 나의 역할은?",
    options: [
      { text: "방향을 정하고 이끄는 역할", scores: { D: 2 } },
      { text: "아이디어 내고 분위기 메이커", scores: { I: 2 } },
      { text: "서포트하고 조율하는 역할", scores: { S: 2 } },
      { text: "분석하고 품질 관리하는 역할", scores: { C: 2 } },
    ],
  },
  {
    id: 9,
    question: "갈등 상황에서 나는?",
    options: [
      { text: "직접적으로 문제를 제기한다", scores: { D: 2 } },
      { text: "유머로 분위기를 풀려고 한다", scores: { I: 2 } },
      { text: "가능한 피하고 시간이 해결해주길 바란다", scores: { S: 2 } },
      { text: "객관적 사실에 기반해 해결하려 한다", scores: { C: 2 } },
    ],
  },
  {
    id: 10,
    question: "가장 싫어하는 상황은?",
    options: [
      { text: "통제력을 잃거나 무능해 보이는 것", scores: { D: 2 } },
      { text: "무시당하거나 지루한 환경", scores: { I: 2 } },
      { text: "급격한 변화나 갈등 상황", scores: { S: 2 } },
      { text: "불명확한 기준이나 실수하는 것", scores: { C: 2 } },
    ],
  },
  {
    id: 11,
    question: "성공의 기준은?",
    options: [
      { text: "목표 달성과 승리", scores: { D: 2 } },
      { text: "인정받고 인기 있는 것", scores: { I: 2 } },
      { text: "안정적인 관계와 환경", scores: { S: 2 } },
      { text: "완벽한 결과물과 전문성", scores: { C: 2 } },
    ],
  },
  {
    id: 12,
    question: "주말에 선호하는 활동은?",
    options: [
      { text: "도전적인 스포츠나 경쟁 활동", scores: { D: 2 } },
      { text: "파티나 사람들과 어울리기", scores: { I: 2 } },
      { text: "가족이나 친한 친구와 편하게", scores: { S: 2 } },
      { text: "혼자 독서나 취미 활동", scores: { C: 2 } },
    ],
  },
];

// 결과 데이터
export const results: Record<DISCType, DISCResult> = {
  D: {
    type: 'D',
    title: '주도형 (Dominance)',
    emoji: '🦁',
    subtitle: '결과 지향적 리더',
    description: '당신은 목표 달성을 위해 적극적으로 행동하는 주도형입니다. 도전을 즐기고, 빠른 결정과 실행력이 강점입니다. 경쟁에서 이기는 것을 좋아하며, 권위와 통제력을 중시합니다.',
    characteristics: ['결단력', '추진력', '자신감', '목표 지향적', '경쟁적'],
    strengths: ['빠른 의사결정', '강한 추진력', '위기 대처 능력', '결과 도출 능력', '리더십'],
    weaknesses: ['성급함', '타인 감정 무시', '독단적', '인내심 부족', '세부사항 간과'],
    communicationStyle: '직접적이고 간결하게 요점만 말합니다. 결론부터 듣고 싶어하며, 시간 낭비를 싫어합니다.',
    workStyle: '목표를 세우고 빠르게 실행합니다. 도전적인 과제를 좋아하고, 권한과 자율성이 주어질 때 최고의 성과를 냅니다.',
    stressResponse: '더 공격적이고 독단적으로 변합니다. 타인의 의견을 무시하고 혼자 밀어붙이려 할 수 있습니다.',
    idealEnvironment: '자율성이 보장되고, 도전적인 목표가 있으며, 결과로 평가받는 환경',
    tips: ['다른 사람의 의견도 경청하기', '과정도 중요함을 인식하기', '인내심 기르기', '팀원들의 감정 살피기'],
    bestMatch: 'S형 (안정형) - 균형을 맞춰주고 서포트해줌',
    challengeMatch: 'D형 (주도형) - 서로 주도권 다툼 발생',
    famousPeople: '스티브 잡스, 일론 머스크, 마거릿 대처',
  },
  I: {
    type: 'I',
    title: '사교형 (Influence)',
    emoji: '🌟',
    subtitle: '열정적인 영향력자',
    description: '당신은 사람들과의 관계를 중시하는 사교형입니다. 낙관적이고 열정적이며, 다른 사람들에게 영감을 주는 능력이 있습니다. 인정받는 것을 좋아하고 새로운 경험을 즐깁니다.',
    characteristics: ['사교적', '열정적', '창의적', '낙관적', '표현력'],
    strengths: ['동기부여 능력', '네트워킹', '아이디어 창출', '프레젠테이션', '분위기 메이커'],
    weaknesses: ['산만함', '충동적', '디테일 약함', '과장 경향', '마무리 부족'],
    communicationStyle: '열정적이고 표현이 풍부합니다. 이야기를 재미있게 전달하며, 감정적 연결을 중시합니다.',
    workStyle: '창의적이고 아이디어가 많습니다. 팀으로 일하는 것을 좋아하고, 새로운 프로젝트 시작을 즐깁니다.',
    stressResponse: '말이 많아지고 더 산만해집니다. 핵심을 벗어나 이야기하거나 책임을 회피할 수 있습니다.',
    idealEnvironment: '자유로운 분위기, 다양한 사람들과 협업, 인정과 칭찬이 있는 환경',
    tips: ['체계적으로 계획 세우기', '말한 것 끝까지 책임지기', '디테일에 신경 쓰기', '경청하는 시간 갖기'],
    bestMatch: 'C형 (신중형) - 디테일을 보완해줌',
    challengeMatch: 'C형 (신중형) - 속도와 방식 차이',
    famousPeople: '오프라 윈프리, 윌 스미스, 로빈 윌리엄스',
  },
  S: {
    type: 'S',
    title: '안정형 (Steadiness)',
    emoji: '🕊️',
    subtitle: '신뢰할 수 있는 조력자',
    description: '당신은 조화와 안정을 중시하는 안정형입니다. 인내심이 강하고 믿음직스러우며, 팀의 화합을 위해 노력합니다. 급격한 변화보다 꾸준함을 선호합니다.',
    characteristics: ['인내심', '신뢰성', '협조적', '차분함', '충성심'],
    strengths: ['경청 능력', '팀워크', '일관성', '인내력', '중재 능력'],
    weaknesses: ['변화 저항', '우유부단', '자기주장 부족', '갈등 회피', '새로운 시도 꺼림'],
    communicationStyle: '따뜻하고 경청을 잘 합니다. 부드럽게 의견을 전달하며, 다른 사람의 감정을 배려합니다.',
    workStyle: '꾸준하고 안정적으로 일합니다. 맡은 일을 책임감 있게 완수하며, 팀을 위해 헌신합니다.',
    stressResponse: '더 소극적이 되고 말이 줄어듭니다. 속으로 스트레스를 쌓아두고, 회피하려 할 수 있습니다.',
    idealEnvironment: '안정적이고 예측 가능한 환경, 협력적인 팀, 감사받는 분위기',
    tips: ['변화를 두려워하지 않기', '자기 의견 적극 표현하기', '새로운 시도 해보기', '"아니오"라고 말하는 연습'],
    bestMatch: 'D형 (주도형) - 방향을 제시해주고 이끌어줌',
    challengeMatch: 'I형 (사교형) - 속도와 변화에 대한 차이',
    famousPeople: '간디, 마더 테레사, 달라이 라마',
  },
  C: {
    type: 'C',
    title: '신중형 (Conscientiousness)',
    emoji: '🔬',
    subtitle: '분석적인 완벽주의자',
    description: '당신은 정확성과 품질을 중시하는 신중형입니다. 논리적이고 분석적이며, 높은 기준을 가지고 있습니다. 데이터와 사실에 기반한 의사결정을 선호합니다.',
    characteristics: ['분석적', '정확성', '체계적', '완벽주의', '논리적'],
    strengths: ['분석 능력', '품질 관리', '체계적 계획', '문제 해결', '전문성'],
    weaknesses: ['지나친 완벽주의', '우유부단', '비판적', '감정 표현 부족', '느린 의사결정'],
    communicationStyle: '논리적이고 정확하게 말합니다. 데이터와 근거를 중시하며, 감정보다 사실에 집중합니다.',
    workStyle: '체계적으로 계획하고 꼼꼼하게 실행합니다. 높은 품질 기준을 가지고, 실수를 최소화하려 합니다.',
    stressResponse: '더 비판적이고 완벽주의적으로 변합니다. 사소한 것에 집착하거나 결정을 미룰 수 있습니다.',
    idealEnvironment: '명확한 기준과 기대치, 품질 중시, 전문성을 인정받는 환경',
    tips: ['완벽하지 않아도 괜찮음 인정하기', '결정을 미루지 않기', '감정도 표현하기', '큰 그림도 보기'],
    bestMatch: 'I형 (사교형) - 유연성과 인간관계 보완',
    challengeMatch: 'I형 (사교형) - 체계성과 디테일 관점 차이',
    famousPeople: '빌 게이츠, 알베르트 아인슈타인, 마리 퀴리',
  },
};

// 결과 계산 함수
export function calculateResult(answers: number[]): DISCResult {
  const scores: Record<string, number> = { D: 0, I: 0, S: 0, C: 0 };
  
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedOption = question.options[answerIndex];
      Object.entries(selectedOption.scores).forEach(([type, score]) => {
        scores[type] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxType: DISCType = 'D';
  let maxScore = 0;
  
  (Object.entries(scores) as [DISCType, number][]).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return results[maxType];
}
