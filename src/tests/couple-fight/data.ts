// 커플 싸움 패턴 테스트 - 연인과 싸울 때 나는 어떤 유형?

export interface CoupleFightQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface CoupleFightResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  fightStyle: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  partnerFeels: string;
  duringFight: string[];
  afterFight: string;
  resolutionTip: string[];
  bestMatch: string;
  worstMatch: string;
}

export const coupleFightTypes = ['explosive', 'silent', 'logical', 'avoidant', 'emotional', 'compromiser'] as const;
export type CoupleFightType = typeof coupleFightTypes[number];

export const questions: CoupleFightQuestion[] = [
  {
    id: 1,
    question: "연인과 의견 충돌이 생기면 처음 반응은?",
    options: [
      { text: "바로 내 생각을 강하게 말함", scores: { explosive: 2, logical: 1 } },
      { text: "일단 조용히 있으면서 정리함", scores: { silent: 2, avoidant: 1 } },
      { text: "왜 그렇게 생각하는지 물어봄", scores: { logical: 2, compromiser: 1 } },
      { text: "기분이 상했다는 걸 표현함", scores: { emotional: 2, explosive: 1 } },
    ],
  },
  {
    id: 2,
    question: "싸우는 도중 화가 많이 났을 때 나는?",
    options: [
      { text: "목소리가 커지고 감정이 폭발함", scores: { explosive: 3 } },
      { text: "말을 안 하고 침묵함", scores: { silent: 3 } },
      { text: "논리적으로 상대 잘못을 지적함", scores: { logical: 2, explosive: 1 } },
      { text: "울거나 서러움을 표현함", scores: { emotional: 3 } },
    ],
  },
  {
    id: 3,
    question: "싸움 후 연인이 먼저 연락하면?",
    options: [
      { text: "아직 화 안 풀렸으면 차갑게 대응", scores: { explosive: 2, silent: 1 } },
      { text: "일단 받긴 하지만 말수 적음", scores: { silent: 2, avoidant: 1 } },
      { text: "잘 들어보고 대화로 풀려고 함", scores: { logical: 2, compromiser: 1 } },
      { text: "연락 와서 다행이라고 느낌", scores: { emotional: 2, compromiser: 1 } },
    ],
  },
  {
    id: 4,
    question: "연인이 나를 무시하는 것 같은 말을 하면?",
    options: [
      { text: "바로 반박하고 화냄", scores: { explosive: 3 } },
      { text: "속상하지만 겉으론 표현 안 함", scores: { silent: 2, avoidant: 1 } },
      { text: "왜 그런 말을 하는지 따짐", scores: { logical: 2, explosive: 1 } },
      { text: "너무 상처받아서 울컥함", scores: { emotional: 3 } },
    ],
  },
  {
    id: 5,
    question: "싸움이 길어지면 나는?",
    options: [
      { text: "끝까지 내 주장을 관철시킴", scores: { explosive: 2, logical: 1 } },
      { text: "그냥 잠수탐, 시간이 필요해", scores: { silent: 2, avoidant: 1 } },
      { text: "해결책을 찾으려고 노력함", scores: { logical: 2, compromiser: 1 } },
      { text: "지쳐서 먼저 화해 시도함", scores: { emotional: 2, compromiser: 1 } },
    ],
  },
  {
    id: 6,
    question: "연인의 잘못이 명확할 때 나는?",
    options: [
      { text: "확실하게 지적하고 사과 받아냄", scores: { explosive: 2, logical: 1 } },
      { text: "말은 안 하지만 태도로 보여줌", scores: { silent: 3 } },
      { text: "차근차근 설명하고 이해시킴", scores: { logical: 3 } },
      { text: "상대가 알아주길 바라며 기다림", scores: { emotional: 2, avoidant: 1 } },
    ],
  },
  {
    id: 7,
    question: "싸움 중 연인이 과거 일을 꺼내면?",
    options: [
      { text: "나도 과거 일 다 꺼내서 반격", scores: { explosive: 3 } },
      { text: "어이없어서 대화 중단", scores: { silent: 2, avoidant: 1 } },
      { text: "그건 지금 논점이 아니라고 정리", scores: { logical: 3 } },
      { text: "그때 일까지 얘기하니 더 서러움", scores: { emotional: 3 } },
    ],
  },
  {
    id: 8,
    question: "화해할 때 나의 스타일은?",
    options: [
      { text: "내가 맞았으면 화해 안 함, 상대가 인정해야 함", scores: { explosive: 2, logical: 1 } },
      { text: "시간 지나면 자연스럽게 풀림", scores: { silent: 2, avoidant: 1 } },
      { text: "서로 잘못 인정하고 대화로 마무리", scores: { logical: 2, compromiser: 1 } },
      { text: "먼저 안아주고 사과함", scores: { emotional: 2, compromiser: 1 } },
    ],
  },
  {
    id: 9,
    question: "싸우고 나서 드는 생각은?",
    options: [
      { text: "내가 왜 참아야 해? 내가 맞는데", scores: { explosive: 2, logical: 1 } },
      { text: "말해봤자 뭐해... 지침", scores: { silent: 2, avoidant: 1 } },
      { text: "어디서부터 잘못된 건지 분석함", scores: { logical: 3 } },
      { text: "이러다 헤어지는 건 아닌지 불안함", scores: { emotional: 3 } },
    ],
  },
  {
    id: 10,
    question: "연인이 울면서 사과하면?",
    options: [
      { text: "그래도 할 말은 다 하고 받아들임", scores: { explosive: 2, logical: 1 } },
      { text: "나도 마음이 약해지지만 표현 안 함", scores: { silent: 2, avoidant: 1 } },
      { text: "왜 우는지 들어보고 같이 해결", scores: { logical: 2, compromiser: 1 } },
      { text: "나도 같이 울면서 화해", scores: { emotional: 3 } },
    ],
  },
  {
    id: 11,
    question: "심하게 싸운 후 다음 날은?",
    options: [
      { text: "아직도 화나서 연락 안 함", scores: { explosive: 2, silent: 1 } },
      { text: "연락이 와도 평소처럼 대하기 어려움", scores: { silent: 2, avoidant: 1 } },
      { text: "어제 일 정리하고 다시 대화 시도", scores: { logical: 2, compromiser: 1 } },
      { text: "불안해서 먼저 연락해봄", scores: { emotional: 2, compromiser: 1 } },
    ],
  },
  {
    id: 12,
    question: "싸움의 원인으로 가장 흔한 것은?",
    options: [
      { text: "상대가 나를 무시하거나 존중 안 할 때", scores: { explosive: 2, emotional: 1 } },
      { text: "대화가 안 통한다고 느낄 때", scores: { silent: 2, avoidant: 1 } },
      { text: "비논리적이거나 억지 부릴 때", scores: { logical: 3 } },
      { text: "관심이나 애정 표현이 부족할 때", scores: { emotional: 3 } },
    ],
  },
];

export const results: Record<CoupleFightType, CoupleFightResult> = {
  explosive: {
    type: 'explosive',
    title: '폭발형 파이터',
    emoji: '🌋',
    subtitle: '참다가 터지는 화산',
    description: '화가 나면 참지 못하고 바로 표현하는 타입! 할 말은 다 하고, 감정을 숨기지 않아요. 그래서 싸울 땐 격렬하지만, 끝나면 홀가분할 수 있어요.',
    fightStyle: '즉각적이고 격렬한 감정 표출',
    characteristics: ['직설적', '감정 표현 솔직', '뒤끝 없음', '목소리 커짐'],
    strengths: ['속에 담아두지 않음', '문제를 회피 안 함', '빠른 감정 해소'],
    weaknesses: ['상대에게 상처 줄 수 있음', '후회할 말을 함', '감정 조절 어려움'],
    partnerFeels: '무섭고 부담스러울 수 있지만, 속마음을 알 수 있어서 답답하지 않음',
    duringFight: ['목소리가 커짐', '과거 일도 꺼냄', '자리 박차고 나가기도', '격렬하게 표현'],
    afterFight: '화 풀리면 언제 그랬냐는 듯 괜찮아짐',
    resolutionTip: [
      '화가 날 때 10초만 참아보세요',
      '말하기 전에 한 번 더 생각하기',
      '상대도 감정이 있다는 걸 기억하세요',
      '쿨다운 타임을 가져보세요',
    ],
    bestMatch: '논리형 파이터 (차분하게 받아줌)',
    worstMatch: '같은 폭발형 (대폭발 위험)',
  },
  silent: {
    type: 'silent',
    title: '침묵형 파이터',
    emoji: '🤐',
    subtitle: '말없이 얼음이 되는',
    description: '화가 나면 말을 아끼고 침묵으로 표현하는 타입! 말해봤자 싸움만 커진다고 생각하거나, 정리가 필요해서 조용해지는 거예요.',
    fightStyle: '침묵과 회피, 시간이 약',
    characteristics: ['과묵함', '내면 정리 필요', '시간이 필요함', '표현 어려움'],
    strengths: ['즉흥적으로 상처 주는 말 안 함', '감정적 폭발 없음', '차분하게 정리'],
    weaknesses: ['상대가 답답해함', '문제가 해결 안 될 수 있음', '오해 생길 수 있음'],
    partnerFeels: '답답하고 내가 뭘 잘못했나 불안함, 벽 느낌',
    duringFight: ['말수가 확 줄어듦', '눈 마주침 회피', '다른 일을 하거나 자리 피함', '읽씹'],
    afterFight: '시간이 지나면 자연스럽게 풀리길 바람',
    resolutionTip: [
      '침묵의 이유를 짧게라도 말해주세요',
      '완전 무시는 상대를 힘들게 해요',
      '정리되면 대화 시도해주세요',
      '"시간 좀 줘"라고 말하는 것만으로도 달라요',
    ],
    bestMatch: '감정형 파이터 (먼저 다가와 줌)',
    worstMatch: '같은 침묵형 (영원한 냉전)',
  },
  logical: {
    type: 'logical',
    title: '논리형 파이터',
    emoji: '🧠',
    subtitle: '팩트로 승부하는',
    description: '감정보다 논리! 무엇이 문제인지 분석하고, 이성적으로 해결하려는 타입이에요. 상대의 잘못을 조목조목 짚어내는 능력이 있죠.',
    fightStyle: '차분한 분석과 논리적 접근',
    characteristics: ['이성적', '분석적', '해결 지향', '감정보다 논리'],
    strengths: ['감정적 폭발 없음', '문제 해결 집중', '합리적 대화 가능'],
    weaknesses: ['상대 감정을 놓칠 수 있음', '차갑게 느껴질 수 있음', '공감보다 분석'],
    partnerFeels: '틀린 말은 아닌데... 뭔가 서운하고 차갑게 느껴짐',
    duringFight: ['논점 정리', '팩트 체크', '감정 배제', '해결책 제시'],
    afterFight: '문제가 해결되면 끝, 깔끔하게 정리',
    resolutionTip: [
      '맞는 말도 타이밍이 중요해요',
      '상대 감정도 "논리"의 일부예요',
      '가끔은 그냥 안아주는 것도 필요해요',
      '공감 먼저, 해결은 그다음',
    ],
    bestMatch: '폭발형 파이터 (받아주면 빨리 진정)',
    worstMatch: '감정형 파이터 (공감 부족으로 더 상처)',
  },
  avoidant: {
    type: 'avoidant',
    title: '회피형 파이터',
    emoji: '🏃‍♂️',
    subtitle: '일단 피하고 보는',
    description: '싸움 자체가 싫어서 피하려는 타입! 갈등 상황이 불편하고, 시간이 해결해 줄 거라 믿어요. 하지만 문제가 쌓일 수 있어요.',
    fightStyle: '갈등 회피, 대화 미루기',
    characteristics: ['갈등 회피', '평화주의', '대화 미루기', '잠수'],
    strengths: ['큰 싸움으로 번지지 않음', '감정적 상처 덜 줌', '차분함 유지'],
    weaknesses: ['문제가 해결 안 됨', '쌓인 감정이 폭발할 수 있음', '상대가 답답해함'],
    partnerFeels: '나한테 관심이 없나? 이 관계가 중요하지 않은 건가?',
    duringFight: ['화제 전환', '잠수', '"나중에 얘기하자"', '피하기'],
    afterFight: '시간 지나면 괜찮아지겠지...라고 생각',
    resolutionTip: [
      '피하면 문제가 더 커져요',
      '불편해도 대화는 필요해요',
      '회피는 해결이 아니에요',
      '작은 것부터 표현하는 연습을 해보세요',
    ],
    bestMatch: '타협형 파이터 (부드럽게 이끌어줌)',
    worstMatch: '폭발형 파이터 (도망가면 더 화남)',
  },
  emotional: {
    type: 'emotional',
    title: '감정형 파이터',
    emoji: '💧',
    subtitle: '눈물로 말하는',
    description: '감정이 앞서는 타입! 화가 나면 서럽고, 서러우면 눈물이 나요. 상대의 사랑을 확인받고 싶은 마음이 크죠.',
    fightStyle: '감정적 호소, 눈물',
    characteristics: ['감정적', '눈물 많음', '애정 확인 욕구', '상처받기 쉬움'],
    strengths: ['솔직한 감정 표현', '깊은 대화 가능', '화해 후 더 가까워짐'],
    weaknesses: ['상대가 부담스러울 수 있음', '감정 기복', '논리적 대화 어려움'],
    partnerFeels: '미안하고 안쓰럽지만, 가끔은 부담스러움',
    duringFight: ['울음', '서러움 호소', '애정 확인', '"나 사랑해?"'],
    afterFight: '확실한 화해와 애정 확인이 필요함',
    resolutionTip: [
      '울어도 괜찮지만, 말로도 표현해보세요',
      '상대도 힘들 수 있다는 걸 기억하세요',
      '감정이 가라앉은 후 대화하기',
      '불안할 때 혼자 생각하지 말고 물어보세요',
    ],
    bestMatch: '침묵형 파이터 (기다려주고 안아줌)',
    worstMatch: '논리형 파이터 (공감 부족으로 더 서러움)',
  },
  compromiser: {
    type: 'compromiser',
    title: '타협형 파이터',
    emoji: '🤝',
    subtitle: '먼저 손 내미는',
    description: '싸움보다 화해가 좋은 타입! 관계가 중요해서 먼저 손 내밀고, 서로 양보하며 해결하려 해요. 대신 너무 양보하면 지칠 수 있어요.',
    fightStyle: '대화와 타협, 먼저 화해 시도',
    characteristics: ['화해 지향', '양보 잘 함', '관계 중시', '먼저 연락'],
    strengths: ['싸움이 길어지지 않음', '관계 유지 잘 함', '유연한 대처'],
    weaknesses: ['자기 감정 억누를 수 있음', '상대가 이용할 수 있음', '억울함 쌓일 수 있음'],
    partnerFeels: '고맙고 편하지만, 가끔 진짜 괜찮은지 걱정됨',
    duringFight: ['먼저 사과', '해결책 제시', '상대 의견 수용', '빨리 화해하려 함'],
    afterFight: '화해하면 완전히 잊고 예전처럼',
    resolutionTip: [
      '너무 양보하지 마세요, 내 감정도 중요해요',
      '진짜 괜찮을 때만 괜찮다고 하세요',
      '억울한 건 꼭 표현하세요',
      '가끔은 상대가 먼저 다가오게 두세요',
    ],
    bestMatch: '논리형 파이터 (합리적으로 맞춰줌)',
    worstMatch: '회피형 파이터 (혼자 노력하다 지침)',
  },
};

export function calculateResult(answers: number[]): CoupleFightResult {
  const scores: Record<CoupleFightType, number> = {
    explosive: 0,
    silent: 0,
    logical: 0,
    avoidant: 0,
    emotional: 0,
    compromiser: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as CoupleFightType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: CoupleFightType = 'compromiser';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as CoupleFightType;
    }
  });

  return results[resultType];
}
