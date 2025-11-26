// 5가지 사랑의 언어 테스트

export interface LoveLanguageQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface LoveLanguageResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  howToExpress: string[];
  howToReceive: string[];
  inRelationship: string;
  tips: string;
  bestWith: string;
  challengeWith: string;
}

// 5가지 사랑의 언어 유형
export const loveLanguageTypes = [
  'words', 'time', 'gifts', 'service', 'touch'
] as const;
export type LoveLanguageType = typeof loveLanguageTypes[number];

// 질문 데이터 (15문항)
export const questions: LoveLanguageQuestion[] = [
  {
    id: 1,
    question: "연인에게 가장 듣고 싶은 말은?",
    options: [
      { text: "\"사랑해\", \"네가 최고야\" 같은 애정 표현", scores: { words: 2 } },
      { text: "\"오늘 하루 어땠어?\" 같은 관심 표현", scores: { time: 2 } },
      { text: "\"이거 네 생각나서 샀어\" 같은 선물 이야기", scores: { gifts: 2 } },
      { text: "\"내가 해줄게\" 같은 도움 표현", scores: { service: 2 } },
    ],
  },
  {
    id: 2,
    question: "연인과 함께할 때 가장 행복한 순간은?",
    options: [
      { text: "손잡고 걷거나 안아줄 때", scores: { touch: 2 } },
      { text: "나만을 위한 시간을 내줄 때", scores: { time: 2 } },
      { text: "칭찬이나 격려의 말을 해줄 때", scores: { words: 2 } },
      { text: "깜짝 선물이나 이벤트를 해줄 때", scores: { gifts: 2 } },
    ],
  },
  {
    id: 3,
    question: "연인이 바쁠 때 가장 서운한 것은?",
    options: [
      { text: "연락이 뜸해지는 것", scores: { words: 2 } },
      { text: "함께하는 시간이 줄어드는 것", scores: { time: 2 } },
      { text: "기념일이나 특별한 날을 챙기지 못하는 것", scores: { gifts: 2 } },
      { text: "평소 해주던 것들을 못 해주는 것", scores: { service: 2 } },
    ],
  },
  {
    id: 4,
    question: "사랑받는다고 느끼는 순간은?",
    options: [
      { text: "진심 어린 칭찬을 들을 때", scores: { words: 2 } },
      { text: "나만을 위해 시간을 써줄 때", scores: { time: 2 } },
      { text: "정성스러운 선물을 받을 때", scores: { gifts: 2 } },
      { text: "포근한 스킨십을 할 때", scores: { touch: 2 } },
    ],
  },
  {
    id: 5,
    question: "연인에게 사랑을 표현하는 나의 방식은?",
    options: [
      { text: "자주 사랑한다고 말하기", scores: { words: 2 } },
      { text: "함께 시간 보내기", scores: { time: 2 } },
      { text: "선물이나 이벤트 준비하기", scores: { gifts: 2 } },
      { text: "필요한 것 도와주기", scores: { service: 2 } },
    ],
  },
  {
    id: 6,
    question: "힘들 때 연인에게 바라는 것은?",
    options: [
      { text: "\"괜찮아, 잘할 수 있어\" 같은 위로의 말", scores: { words: 2 } },
      { text: "옆에서 조용히 함께 있어주기", scores: { time: 2 } },
      { text: "맛있는 것 사주거나 선물 해주기", scores: { gifts: 2 } },
      { text: "안아주거나 손 잡아주기", scores: { touch: 2 } },
    ],
  },
  {
    id: 7,
    question: "기념일에 가장 원하는 것은?",
    options: [
      { text: "진심 담긴 편지나 메시지", scores: { words: 2 } },
      { text: "둘만의 특별한 데이트", scores: { time: 2 } },
      { text: "정성스럽게 고른 선물", scores: { gifts: 2 } },
      { text: "일상의 불편함을 해결해주기", scores: { service: 2 } },
    ],
  },
  {
    id: 8,
    question: "연인과 싸운 후 화해할 때 원하는 것은?",
    options: [
      { text: "진심 어린 사과와 대화", scores: { words: 2 } },
      { text: "함께 시간을 보내며 풀기", scores: { time: 2 } },
      { text: "화해 선물이나 이벤트", scores: { gifts: 2 } },
      { text: "꼭 안아주기", scores: { touch: 2 } },
    ],
  },
  {
    id: 9,
    question: "연인의 어떤 행동에 가장 감동받나요?",
    options: [
      { text: "SNS에 나를 자랑스럽게 올려줄 때", scores: { words: 2 } },
      { text: "바쁜 와중에도 시간을 내줄 때", scores: { time: 2 } },
      { text: "내 취향 저격 선물을 줄 때", scores: { gifts: 2 } },
      { text: "아플 때 극진히 간호해줄 때", scores: { service: 2 } },
    ],
  },
  {
    id: 10,
    question: "연인과 함께하는 일상에서 좋아하는 것은?",
    options: [
      { text: "매일 좋아한다고 말해주기", scores: { words: 2 } },
      { text: "함께 취미 활동하기", scores: { time: 2 } },
      { text: "작은 선물이나 간식 사다주기", scores: { gifts: 2 } },
      { text: "소파에서 같이 기대어 있기", scores: { touch: 2 } },
    ],
  },
  {
    id: 11,
    question: "연인에게 실망하는 순간은?",
    options: [
      { text: "차갑거나 무심한 말투를 쓸 때", scores: { words: 2 } },
      { text: "나와의 약속보다 다른 것을 우선할 때", scores: { time: 2 } },
      { text: "기념일이나 특별한 날을 잊을 때", scores: { gifts: 2 } },
      { text: "스킨십을 거부할 때", scores: { touch: 2 } },
    ],
  },
  {
    id: 12,
    question: "장거리 연애를 한다면 가장 힘들 것 같은 점은?",
    options: [
      { text: "직접 대화하지 못하는 것", scores: { words: 2 } },
      { text: "함께 시간을 보내지 못하는 것", scores: { time: 2 } },
      { text: "직접 선물을 주고받지 못하는 것", scores: { gifts: 2 } },
      { text: "스킨십을 할 수 없는 것", scores: { touch: 2 } },
    ],
  },
  {
    id: 13,
    question: "연인이 아플 때 나의 반응은?",
    options: [
      { text: "걱정된다고 말하고 응원 메시지 보내기", scores: { words: 2 } },
      { text: "곁에서 시간을 보내며 돌봐주기", scores: { time: 2 } },
      { text: "영양제나 필요한 것 사다주기", scores: { gifts: 2 } },
      { text: "직접 간호하고 집안일 해주기", scores: { service: 2 } },
    ],
  },
  {
    id: 14,
    question: "가장 로맨틱하다고 느끼는 상황은?",
    options: [
      { text: "갑자기 사랑 고백을 받을 때", scores: { words: 2 } },
      { text: "계획 없이 둘만의 여행을 떠날 때", scores: { time: 2 } },
      { text: "깜짝 프로포즈나 이벤트를 받을 때", scores: { gifts: 2 } },
      { text: "별 보며 꼭 안겨 있을 때", scores: { touch: 2 } },
    ],
  },
  {
    id: 15,
    question: "연인 관계에서 가장 중요한 것은?",
    options: [
      { text: "서로를 인정하고 표현하는 것", scores: { words: 2 } },
      { text: "함께하는 시간의 질", scores: { time: 2 } },
      { text: "서로를 위한 노력과 정성", scores: { gifts: 1, service: 1 } },
      { text: "신체적 친밀감", scores: { touch: 2 } },
    ],
  },
];

// 결과 데이터
export const results: Record<LoveLanguageType, LoveLanguageResult> = {
  words: {
    type: 'words',
    title: '인정하는 말',
    emoji: '💬',
    subtitle: 'Words of Affirmation',
    description: '당신의 사랑의 언어는 "인정하는 말"입니다. 진심 어린 칭찬, 격려, 사랑의 표현을 통해 사랑을 느낍니다. 말 한마디의 힘을 누구보다 잘 알고, 따뜻한 말에 마음이 채워지는 당신입니다.',
    characteristics: ['칭찬에 약함', '말의 힘을 믿음', '표현력 중시', '진심 전달 중요'],
    howToExpress: ['자주 사랑한다고 말하기', '칭찬과 격려 아끼지 않기', '감사의 말 전하기', '손편지 쓰기'],
    howToReceive: ['진심 어린 칭찬 듣기', '사랑 표현 자주 듣기', '격려와 응원 받기', '인정받는 느낌'],
    inRelationship: '말로 표현하지 않으면 사랑받지 못한다고 느낄 수 있습니다. 반대로 부정적인 말이나 비판에 상처받기 쉽습니다.',
    tips: '파트너에게 표현의 중요성을 알려주세요. 모든 사람이 말로 사랑을 표현하는 것이 자연스럽지 않을 수 있습니다.',
    bestWith: '함께하는 시간형',
    challengeWith: '봉사형',
  },
  time: {
    type: 'time',
    title: '함께하는 시간',
    emoji: '⏰',
    subtitle: 'Quality Time',
    description: '당신의 사랑의 언어는 "함께하는 시간"입니다. 온전히 나에게 집중해주는 시간을 통해 사랑을 느낍니다. 옆에 있어도 휴대폰만 보는 것은 의미가 없고, 진정한 교감의 시간을 원합니다.',
    characteristics: ['집중 교감 중시', '함께하는 활동 선호', '대화 중요시', '눈맞춤 좋아함'],
    howToExpress: ['핸드폰 내려놓고 대화하기', '함께 취미 활동하기', '데이트 시간 만들기', '여행 함께 가기'],
    howToReceive: ['온전한 집중 받기', '둘만의 시간 갖기', '대화하며 교감하기', '함께 활동하기'],
    inRelationship: '바쁘다는 이유로 시간을 내주지 않으면 사랑받지 못한다고 느낍니다. 함께하는 시간의 양보다 질이 중요합니다.',
    tips: '파트너가 바쁘더라도 짧은 시간이라도 온전히 함께하는 것이 중요하다고 알려주세요.',
    bestWith: '인정하는 말형',
    challengeWith: '선물형',
  },
  gifts: {
    type: 'gifts',
    title: '선물',
    emoji: '🎁',
    subtitle: 'Receiving Gifts',
    description: '당신의 사랑의 언어는 "선물"입니다. 선물 자체보다 선물에 담긴 정성과 생각에 감동받습니다. 나를 생각하며 고른 선물, 기념일을 기억해주는 것에서 사랑을 느낍니다.',
    characteristics: ['기념일 중시', '정성에 감동', '작은 선물도 소중', '이벤트 좋아함'],
    howToExpress: ['기념일 챙기기', '깜짝 선물 준비', '여행 기념품 사오기', '의미 있는 선물 고르기'],
    howToReceive: ['기념일 선물 받기', '깜짝 이벤트', '작은 선물이라도 정성', '취향 저격 선물'],
    inRelationship: '선물을 물질적으로 보는 것이 아닙니다. 나를 생각해줬다는 증거로 선물을 받아들입니다. 기념일을 잊으면 크게 상처받을 수 있습니다.',
    tips: '비싼 선물보다 정성이 중요합니다. 작은 간식이라도 "네 생각나서 샀어"라고 전하면 큰 감동입니다.',
    bestWith: '봉사형',
    challengeWith: '함께하는 시간형',
  },
  service: {
    type: 'service',
    title: '봉사',
    emoji: '🤝',
    subtitle: 'Acts of Service',
    description: '당신의 사랑의 언어는 "봉사"입니다. 말보다 행동이 중요하고, 나를 위해 무언가를 해주는 것에서 사랑을 느낍니다. 설거지, 청소, 필요한 것 챙겨주기 같은 행동이 최고의 사랑 표현입니다.',
    characteristics: ['행동 중시', '도움 감사', '실용적 사랑', '헌신 가치있게 여김'],
    howToExpress: ['힘든 일 도와주기', '집안일 나눠하기', '필요한 것 챙겨주기', '문제 해결해주기'],
    howToReceive: ['일손 덜어주기', '아플 때 간호받기', '귀찮은 일 대신해주기', '실질적 도움'],
    inRelationship: '말로만 사랑한다고 하면서 행동이 없으면 진심을 의심합니다. 게으름이나 약속 불이행에 상처받기 쉽습니다.',
    tips: '파트너에게 구체적으로 어떤 도움이 필요한지 알려주세요. 모든 것을 알아서 해주길 기대하면 실망할 수 있습니다.',
    bestWith: '선물형',
    challengeWith: '인정하는 말형',
  },
  touch: {
    type: 'touch',
    title: '스킨십',
    emoji: '🤗',
    subtitle: 'Physical Touch',
    description: '당신의 사랑의 언어는 "스킨십"입니다. 손잡기, 안아주기, 어깨 토닥임 같은 신체적 접촉을 통해 사랑을 느낍니다. 말없이도 터치 하나로 마음이 전해지는 것을 알고 있습니다.',
    characteristics: ['스킨십 좋아함', '포옹 자주 함', '손잡기 선호', '가까이 있고 싶음'],
    howToExpress: ['자주 안아주기', '손잡고 걷기', '어깨 토닥이기', '뽀뽀하기'],
    howToReceive: ['포옹 받기', '손잡아주기', '가까이 앉기', '스킨십으로 위로받기'],
    inRelationship: '스킨십이 부족하면 거리감을 느끼고 사랑받지 못한다고 생각합니다. 반대로 거부당하면 크게 상처받습니다.',
    tips: '파트너가 스킨십에 익숙하지 않다면 천천히 다가가세요. 갑작스러운 스킨십보다 자연스러운 접촉부터 시작하면 좋습니다.',
    bestWith: '스킨십형',
    challengeWith: '선물형',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): LoveLanguageResult {
  const scores: Record<LoveLanguageType, number> = {
    words: 0,
    time: 0,
    gifts: 0,
    service: 0,
    touch: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as LoveLanguageType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: LoveLanguageType = 'words';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as LoveLanguageType;
    }
  });

  return results[resultType];
}
