// 좌뇌 우뇌 테스트

export interface BrainTypeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface BrainTypeResult {
  type: string;
  title: string;
  emoji: string;
  leftBrainPercent: number;
  rightBrainPercent: number;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  suitableJobs: string[];
  studyTips: string;
  relationshipStyle: string;
  famousPeople: string;
  advice: string;
}

// 뇌 유형
export const brainTypes = [
  'left-dominant', 'right-dominant', 'balanced', 'left-leaning', 'right-leaning'
] as const;
export type BrainType = typeof brainTypes[number];

// 질문 데이터 (12문항)
export const questions: BrainTypeQuestion[] = [
  {
    id: 1,
    question: "복잡한 문제를 해결할 때 나는?",
    options: [
      { text: "단계별로 논리적으로 분석한다", scores: { left: 2 } },
      { text: "전체 그림을 먼저 보고 직감으로 접근한다", scores: { right: 2 } },
      { text: "분석과 직감을 번갈아 사용한다", scores: { left: 1, right: 1 } },
      { text: "다른 사람의 의견을 먼저 듣는다", scores: { right: 1 } },
    ],
  },
  {
    id: 2,
    question: "새로운 것을 배울 때 선호하는 방식은?",
    options: [
      { text: "설명서나 매뉴얼을 읽는다", scores: { left: 2 } },
      { text: "일단 직접 해보면서 배운다", scores: { right: 2 } },
      { text: "영상이나 그림으로 된 자료를 본다", scores: { right: 1 } },
      { text: "누군가에게 설명을 듣는다", scores: { left: 1 } },
    ],
  },
  {
    id: 3,
    question: "방을 정리할 때 나는?",
    options: [
      { text: "모든 것을 분류하고 라벨을 붙인다", scores: { left: 2 } },
      { text: "대충 눈에 보이는 대로 치운다", scores: { right: 2 } },
      { text: "자주 쓰는 것 위주로 정리한다", scores: { left: 1, right: 1 } },
      { text: "정리를 잘 안 하는 편이다", scores: { right: 1 } },
    ],
  },
  {
    id: 4,
    question: "대화할 때 나는?",
    options: [
      { text: "정확한 사실과 데이터를 중시한다", scores: { left: 2 } },
      { text: "감정과 분위기를 중시한다", scores: { right: 2 } },
      { text: "상황에 따라 다르다", scores: { left: 1, right: 1 } },
      { text: "이야기의 흐름을 중시한다", scores: { right: 1 } },
    ],
  },
  {
    id: 5,
    question: "시간 관리 스타일은?",
    options: [
      { text: "상세한 스케줄을 세우고 따른다", scores: { left: 2 } },
      { text: "큰 틀만 정하고 유연하게 움직인다", scores: { right: 2 } },
      { text: "할 일 목록만 만들어 둔다", scores: { left: 1 } },
      { text: "그때그때 상황에 맞춰 행동한다", scores: { right: 2 } },
    ],
  },
  {
    id: 6,
    question: "영화나 드라마를 볼 때?",
    options: [
      { text: "스토리의 논리적 허점을 찾게 된다", scores: { left: 2 } },
      { text: "감정적으로 몰입해서 운다/웃는다", scores: { right: 2 } },
      { text: "연출이나 기술적인 면을 본다", scores: { left: 1 } },
      { text: "전체적인 분위기와 미학을 즐긴다", scores: { right: 1 } },
    ],
  },
  {
    id: 7,
    question: "길을 찾을 때 나는?",
    options: [
      { text: "지도 앱에서 경로를 정확히 확인한다", scores: { left: 2 } },
      { text: "대략적인 방향만 알면 찾아간다", scores: { right: 2 } },
      { text: "랜드마크를 기억해서 찾아간다", scores: { right: 1 } },
      { text: "길을 외워서 다닌다", scores: { left: 1 } },
    ],
  },
  {
    id: 8,
    question: "아이디어가 떠오를 때는?",
    options: [
      { text: "조용히 생각에 집중할 때", scores: { left: 2 } },
      { text: "샤워할 때, 걸을 때 등 갑자기", scores: { right: 2 } },
      { text: "다른 사람과 대화할 때", scores: { right: 1 } },
      { text: "관련 자료를 조사할 때", scores: { left: 1 } },
    ],
  },
  {
    id: 9,
    question: "선호하는 과목이나 분야는?",
    options: [
      { text: "수학, 과학, 프로그래밍", scores: { left: 2 } },
      { text: "미술, 음악, 문학", scores: { right: 2 } },
      { text: "역사, 언어, 사회", scores: { left: 1, right: 1 } },
      { text: "체육, 실습, 만들기", scores: { right: 1 } },
    ],
  },
  {
    id: 10,
    question: "스트레스를 받으면?",
    options: [
      { text: "원인을 분석하고 해결책을 찾는다", scores: { left: 2 } },
      { text: "음악 듣기, 운동 등으로 기분 전환한다", scores: { right: 2 } },
      { text: "친구에게 이야기한다", scores: { right: 1 } },
      { text: "일단 상황을 정리한다", scores: { left: 1 } },
    ],
  },
  {
    id: 11,
    question: "결정을 내릴 때 나는?",
    options: [
      { text: "장단점을 꼼꼼히 비교한다", scores: { left: 2 } },
      { text: "느낌이 가는 대로 선택한다", scores: { right: 2 } },
      { text: "다른 사람 의견도 참고한다", scores: { left: 1, right: 1 } },
      { text: "첫인상을 믿는다", scores: { right: 1 } },
    ],
  },
  {
    id: 12,
    question: "나에게 맞는 업무 스타일은?",
    options: [
      { text: "명확한 지침과 절차가 있는 일", scores: { left: 2 } },
      { text: "자유롭게 창의성을 발휘하는 일", scores: { right: 2 } },
      { text: "팀과 협업하는 일", scores: { right: 1 } },
      { text: "데이터를 다루는 일", scores: { left: 1 } },
    ],
  },
];

// 결과 데이터
export const results: Record<BrainType, BrainTypeResult> = {
  'left-dominant': {
    type: 'left-dominant',
    title: '논리적 좌뇌형',
    emoji: '🧮',
    leftBrainPercent: 80,
    rightBrainPercent: 20,
    description: '당신은 논리적이고 분석적인 좌뇌형입니다! 체계적인 사고와 합리적인 판단을 중시하며, 복잡한 문제도 차근차근 해결해 나갑니다. 수치와 데이터를 다루는 능력이 뛰어납니다.',
    characteristics: ['논리적 사고', '체계적 정리', '분석력', '계획성', '언어 능력'],
    strengths: ['문제 해결 능력', '시간 관리', '정확한 분석', '논리적 설득'],
    weaknesses: ['감정 표현 서툴 수 있음', '유연성 부족', '창의적 발상 어려움'],
    suitableJobs: ['프로그래머', '회계사', '과학자', '변호사', '데이터 분석가'],
    studyTips: '개념을 체계적으로 정리하고, 문제를 유형별로 분류해서 공부하면 효과적입니다.',
    relationshipStyle: '신뢰를 중시하고 약속을 잘 지킵니다. 감정 표현이 서툴 수 있지만 진심은 행동으로 보여줍니다.',
    famousPeople: '아인슈타인, 빌 게이츠, 셜록 홈즈',
    advice: '가끔은 논리를 내려놓고 감정과 직관을 믿어보세요. 예술 활동이나 창의적 취미가 균형에 도움이 됩니다.',
  },
  'right-dominant': {
    type: 'right-dominant',
    title: '창의적 우뇌형',
    emoji: '🎨',
    leftBrainPercent: 20,
    rightBrainPercent: 80,
    description: '당신은 창의적이고 감성적인 우뇌형입니다! 직관과 상상력이 풍부하고, 예술적 감각이 뛰어납니다. 전체를 보는 통찰력과 공감 능력이 강점입니다.',
    characteristics: ['창의력', '직관력', '예술적 감각', '공감 능력', '상상력'],
    strengths: ['창의적 발상', '예술적 표현', '사람 이해', '유연한 사고'],
    weaknesses: ['시간 관리 어려움', '계획성 부족', '세부사항 놓칠 수 있음'],
    suitableJobs: ['디자이너', '아티스트', '작가', '음악가', '마케터', '상담사'],
    studyTips: '그림, 도표, 마인드맵 등 시각적 자료를 활용하면 효과적입니다. 음악과 함께 공부해보세요.',
    relationshipStyle: '감정 표현이 풍부하고 상대방의 기분을 잘 읽습니다. 로맨틱하고 배려심이 깊습니다.',
    famousPeople: '레오나르도 다빈치, 피카소, 스티브 잡스',
    advice: '때로는 계획을 세우고 체계적으로 접근해보세요. 창의성과 논리의 조화가 더 큰 성과를 만듭니다.',
  },
  'balanced': {
    type: 'balanced',
    title: '균형 잡힌 전뇌형',
    emoji: '⚖️',
    leftBrainPercent: 50,
    rightBrainPercent: 50,
    description: '당신은 좌뇌와 우뇌가 균형 있게 발달한 전뇌형입니다! 논리와 창의성을 상황에 맞게 활용할 수 있는 드문 유형입니다. 다재다능하고 적응력이 뛰어납니다.',
    characteristics: ['균형 잡힌 사고', '다재다능', '적응력', '융합적 사고', '유연성'],
    strengths: ['상황 판단력', '다양한 관점', '소통 능력', '문제 해결의 다양한 접근'],
    weaknesses: ['정체성 고민', '한 분야 전문화 어려움', '결정 시 갈등'],
    suitableJobs: ['기획자', 'PM', '교육자', '경영자', '컨설턴트', '크리에이티브 디렉터'],
    studyTips: '다양한 학습 방법을 시도해보세요. 논리적 정리와 창의적 연상을 함께 활용하면 좋습니다.',
    relationshipStyle: '상대방에 따라 유연하게 소통합니다. 논리적 토론과 감성적 공감 모두 가능합니다.',
    famousPeople: '일론 머스크, 오프라 윈프리',
    advice: '당신의 균형 잡힌 능력을 살려 다양한 분야를 연결하는 역할에 도전해보세요. 융합과 소통이 강점입니다.',
  },
  'left-leaning': {
    type: 'left-leaning',
    title: '좌뇌 우세형',
    emoji: '📊',
    leftBrainPercent: 65,
    rightBrainPercent: 35,
    description: '당신은 좌뇌가 조금 더 발달한 유형입니다. 논리적이면서도 창의성을 갖추고 있어, 분석적인 사고를 바탕으로 창의적인 해결책을 찾을 수 있습니다.',
    characteristics: ['논리적이면서 유연함', '분석 기반 창의성', '체계적 계획', '실용적 사고'],
    strengths: ['논리와 창의의 조화', '실현 가능한 아이디어', '효율적 문제 해결'],
    weaknesses: ['때때로 과하게 분석함', '감정 표현 아쉬움', '완벽주의 성향'],
    suitableJobs: ['개발자', '건축가', 'UX 디자이너', '전략 기획자', '엔지니어'],
    studyTips: '체계적으로 정리하되, 가끔은 자유롭게 브레인스토밍 해보세요.',
    relationshipStyle: '이성적이지만 상대방을 배려할 줄 압니다. 신뢰를 바탕으로 한 관계를 선호합니다.',
    famousPeople: '마크 저커버그, 워렌 버핏',
    advice: '가끔은 계획 없이 즉흥적으로 행동해보세요. 예상치 못한 발견이 있을 수 있습니다.',
  },
  'right-leaning': {
    type: 'right-leaning',
    title: '우뇌 우세형',
    emoji: '🌈',
    leftBrainPercent: 35,
    rightBrainPercent: 65,
    description: '당신은 우뇌가 조금 더 발달한 유형입니다. 창의적이면서도 논리적인 기반이 있어, 아이디어를 실현 가능한 형태로 발전시킬 수 있습니다.',
    characteristics: ['창의적이면서 실용적', '감각적 판단', '공감 능력', '직관과 논리 조화'],
    strengths: ['아이디어 실현력', '사람들과의 소통', '트렌드 파악', '유연한 대처'],
    weaknesses: ['가끔 논리 부족', '감정에 휘둘림', '계획 변경 잦음'],
    suitableJobs: ['마케터', '브랜드 매니저', '콘텐츠 크리에이터', '영업', '스타일리스트'],
    studyTips: '흥미 있는 주제부터 시작하고, 스토리텔링 방식으로 내용을 연결해보세요.',
    relationshipStyle: '따뜻하고 배려심이 깊습니다. 상대방의 감정을 잘 읽고 공감합니다.',
    famousPeople: '방시혁, 안나 윈투어',
    advice: '때때로 감정을 배제하고 객관적으로 판단해보세요. 더 좋은 결과를 얻을 수 있습니다.',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): BrainTypeResult {
  let leftScore = 0;
  let rightScore = 0;

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      if (optionScores.left) leftScore += optionScores.left;
      if (optionScores.right) rightScore += optionScores.right;
    }
  });

  const total = leftScore + rightScore;
  const leftPercent = Math.round((leftScore / total) * 100);
  const rightPercent = 100 - leftPercent;

  // 유형 결정
  let resultType: BrainType;
  if (leftPercent >= 70) {
    resultType = 'left-dominant';
  } else if (rightPercent >= 70) {
    resultType = 'right-dominant';
  } else if (leftPercent >= 55 && leftPercent < 70) {
    resultType = 'left-leaning';
  } else if (rightPercent >= 55 && rightPercent < 70) {
    resultType = 'right-leaning';
  } else {
    resultType = 'balanced';
  }

  // 결과에 실제 퍼센트 반영
  const result = { ...results[resultType] };
  result.leftBrainPercent = leftPercent;
  result.rightBrainPercent = rightPercent;

  return result;
}
