// 유혹 스타일 테스트 - 나의 매력 어필 방식은?

export interface SeductionStyleQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface SeductionStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  coreCharm: string;
  characteristics: string[];
  seductionMethods: string[];
  strengths: string[];
  weaknesses: string[];
  bestTarget: string;
  worstTarget: string;
  tips: string[];
  signature: string;
}

export const seductionStyleTypes = ['mysterious', 'playful', 'intellectual', 'caring', 'confident', 'natural'] as const;
export type SeductionStyleType = typeof seductionStyleTypes[number];

export const questions: SeductionStyleQuestion[] = [
  {
    id: 1,
    question: "관심 있는 사람이 생겼을 때 가장 먼저 하는 행동은?",
    options: [
      { text: "일부러 시선을 피하며 궁금하게 만든다", scores: { mysterious: 3 } },
      { text: "장난치거나 놀리면서 웃게 만든다", scores: { playful: 3 } },
      { text: "대화를 통해 관심사를 파악한다", scores: { intellectual: 2, caring: 1 } },
      { text: "자연스럽게 친해지길 기다린다", scores: { natural: 3 } },
    ],
  },
  {
    id: 2,
    question: "첫 데이트에서 가장 신경 쓰는 것은?",
    options: [
      { text: "적당한 미스터리함 유지하기", scores: { mysterious: 3 } },
      { text: "재미있고 즐거운 분위기 만들기", scores: { playful: 3 } },
      { text: "깊이 있는 대화 나누기", scores: { intellectual: 3 } },
      { text: "상대방을 편하게 해주기", scores: { caring: 2, natural: 1 } },
    ],
  },
  {
    id: 3,
    question: "좋아하는 사람에게 매력을 어필하는 방법은?",
    options: [
      { text: "쉽게 읽히지 않는 모습 보여주기", scores: { mysterious: 3 } },
      { text: "유머와 재치로 웃게 만들기", scores: { playful: 3 } },
      { text: "나의 지식과 생각 공유하기", scores: { intellectual: 3 } },
      { text: "진심으로 관심 가져주기", scores: { caring: 3 } },
    ],
  },
  {
    id: 4,
    question: "썸 탈 때 선호하는 연락 스타일은?",
    options: [
      { text: "가끔씩 의미심장한 연락", scores: { mysterious: 3 } },
      { text: "재밌는 밈이나 짧은 농담", scores: { playful: 3 } },
      { text: "길고 깊은 대화", scores: { intellectual: 3 } },
      { text: "일상 공유와 안부 묻기", scores: { caring: 2, natural: 1 } },
    ],
  },
  {
    id: 5,
    question: "상대가 나에게 빠지는 포인트는?",
    options: [
      { text: "궁금증을 자아내는 모습", scores: { mysterious: 3 } },
      { text: "함께 있으면 즐거운 점", scores: { playful: 3 } },
      { text: "대화가 잘 통하는 점", scores: { intellectual: 3 } },
      { text: "나를 이해해주는 느낌", scores: { caring: 3 } },
    ],
  },
  {
    id: 6,
    question: "자신의 매력을 표현한다면?",
    options: [
      { text: "알수록 빠져드는 매력", scores: { mysterious: 3 } },
      { text: "밝고 에너지 넘치는 매력", scores: { playful: 3 } },
      { text: "지적이고 세련된 매력", scores: { intellectual: 3 } },
      { text: "따뜻하고 포근한 매력", scores: { caring: 2, natural: 1 } },
    ],
  },
  {
    id: 7,
    question: "밀당에 대한 생각은?",
    options: [
      { text: "밀당은 연애의 필수 스킬", scores: { mysterious: 3 } },
      { text: "적당히 긴장감 있게 재미있게", scores: { playful: 2, confident: 1 } },
      { text: "솔직하게 감정 표현하는 게 낫다", scores: { intellectual: 2, natural: 1 } },
      { text: "상대에 맞춰서 유연하게", scores: { caring: 2, natural: 1 } },
    ],
  },
  {
    id: 8,
    question: "고백하는 스타일은?",
    options: [
      { text: "분위기 있게 느낌으로 전달", scores: { mysterious: 2, confident: 1 } },
      { text: "가볍게 유머러스하게", scores: { playful: 3 } },
      { text: "진지하게 논리적으로 설명", scores: { intellectual: 3 } },
      { text: "진심을 담아 감동적으로", scores: { caring: 2, natural: 1 } },
    ],
  },
  {
    id: 9,
    question: "이성에게 가장 듣고 싶은 칭찬은?",
    options: [
      { text: "\"넌 알 수 없는 매력이 있어\"", scores: { mysterious: 3 } },
      { text: "\"너랑 있으면 진짜 재밌어\"", scores: { playful: 3 } },
      { text: "\"너 진짜 똑똑하다\"", scores: { intellectual: 3 } },
      { text: "\"너 진짜 따뜻한 사람이야\"", scores: { caring: 3 } },
    ],
  },
  {
    id: 10,
    question: "연애 초반 나의 모습은?",
    options: [
      { text: "쉽게 마음을 보여주지 않음", scores: { mysterious: 3 } },
      { text: "장난기 많고 설레게 만듦", scores: { playful: 3 } },
      { text: "많은 대화로 서로를 알아감", scores: { intellectual: 2, natural: 1 } },
      { text: "상대를 배려하고 챙김", scores: { caring: 3 } },
    ],
  },
  {
    id: 11,
    question: "나를 좋아하는 사람에게 하는 행동은?",
    options: [
      { text: "쉽게 만나주지 않음, 밀당", scores: { mysterious: 2, confident: 1 } },
      { text: "친구처럼 편하게 놀아줌", scores: { playful: 2, natural: 1 } },
      { text: "진지하게 대화하며 판단", scores: { intellectual: 3 } },
      { text: "관심 있으면 티를 냄", scores: { caring: 2, confident: 1 } },
    ],
  },
  {
    id: 12,
    question: "내가 생각하는 유혹의 핵심은?",
    options: [
      { text: "궁금하게 만드는 것", scores: { mysterious: 3 } },
      { text: "웃게 만드는 것", scores: { playful: 3 } },
      { text: "머리와 마음을 자극하는 것", scores: { intellectual: 2, caring: 1 } },
      { text: "진심을 보여주는 것", scores: { caring: 2, natural: 1 } },
    ],
  },
];

export const results: Record<SeductionStyleType, SeductionStyleResult> = {
  mysterious: {
    type: 'mysterious',
    title: '미스터리 유혹러',
    emoji: '🌙',
    subtitle: '궁금해 미치겠어, 뭔지 모를 끌림',
    description: '당신은 쉽게 읽히지 않는 신비로운 매력의 소유자예요. 알 듯 말 듯한 분위기로 상대를 궁금하게 만들고, 한번 빠지면 헤어나오기 어려운 마성의 매력을 가졌죠.',
    coreCharm: '알 수 없는 매력, 궁금증 유발',
    characteristics: ['말보다 눈빛으로 표현', '쉽게 마음을 열지 않음', '분위기 있는 대화', '적절한 거리 유지'],
    seductionMethods: ['의미심장한 눈빛', '뜸 들이기', '적당한 밀당', '여운 남기기'],
    strengths: ['강한 끌림 유발', '오래 기억됨', '상대를 주도적으로 유혹', '매력 중독성'],
    weaknesses: ['오해받기 쉬움', '차갑게 보일 수 있음', '진심 전달 어려움', '관계 진전 느림'],
    bestTarget: '호기심 많고 도전적인 타입',
    worstTarget: '직진 타입, 게임 싫어하는 사람',
    tips: [
      '때로는 솔직한 모습도 보여주세요',
      '너무 밀기만 하면 놓칠 수 있어요',
      '신비로움과 진심 사이 균형을 찾으세요',
      '미스터리함은 유지하되 관심은 표현하세요',
    ],
    signature: '눈빛 하나로 유혹하는 타입',
  },
  playful: {
    type: 'playful',
    title: '장난꾸러기 유혹러',
    emoji: '😜',
    subtitle: '웃기다가 설레게 만드는 치명적 반전',
    description: '당신은 유머와 장난기로 상대를 사로잡는 매력쟁이예요. 함께 있으면 시간 가는 줄 모르게 즐겁고, 웃다가 갑자기 설렐 때 상대는 이미 빠져있죠.',
    coreCharm: '즐거움, 편안함, 반전 설렘',
    characteristics: ['유머 감각', '장난기 많음', '밝은 에너지', '눈치 빠름'],
    seductionMethods: ['재미있는 대화', '스킨십 섞인 장난', '갑분 진지모드', '애정 표현 장난'],
    strengths: ['빠른 친밀감 형성', '편한 분위기', '매력 어필 쉬움', '기억에 남음'],
    weaknesses: ['진지함 부족으로 오해', '친구로만 보일 수 있음', '가볍게 보일 위험', '타이밍 놓치기 쉬움'],
    bestTarget: '유쾌함을 좋아하는 타입',
    worstTarget: '진지하고 무거운 타입',
    tips: [
      '가끔은 진지한 모습도 필요해요',
      '장난과 진심의 경계를 명확히 하세요',
      '좋아한다는 신호는 확실히 주세요',
      '웃음 뒤에 진심을 담아보세요',
    ],
    signature: '웃다가 심쿵하게 만드는 타입',
  },
  intellectual: {
    type: 'intellectual',
    title: '지적 유혹러',
    emoji: '🧠',
    subtitle: '대화에 빠져들다 보니 사람에 빠졌어',
    description: '당신은 깊이 있는 대화와 지적 자극으로 상대를 매료시켜요. 머리와 마음을 동시에 자극하는 대화의 달인이죠. 대화하다 보면 어느새 빠져들게 돼요.',
    coreCharm: '지적 자극, 깊이 있는 대화',
    characteristics: ['대화 능력 출중', '다양한 관심사', '통찰력', '경청 능력'],
    seductionMethods: ['깊은 대화', '새로운 관점 제시', '공감과 이해', '지적 칭찬'],
    strengths: ['오래 가는 관계', '존경받는 매력', '정신적 교감', '깊은 유대감'],
    weaknesses: ['로맨틱함 부족', '행동보다 말', '너무 진지함', '스킨십 서툼'],
    bestTarget: '지적 대화를 즐기는 타입',
    worstTarget: '감성/행동 중심인 타입',
    tips: [
      '가끔은 머리보다 감정으로 다가가세요',
      '행동으로 보여주는 것도 중요해요',
      '분위기 있는 데이트도 시도해보세요',
      '논리보다 감성이 필요할 때도 있어요',
    ],
    signature: '대화로 마음을 훔치는 타입',
  },
  caring: {
    type: 'caring',
    title: '따뜻함 유혹러',
    emoji: '🤗',
    subtitle: '네 편이 되어줄게, 안아줄게',
    description: '당신은 따뜻한 관심과 배려로 상대의 마음을 녹여요. 진심 어린 관심과 헌신적인 모습에 상대는 자연스럽게 마음을 열게 되죠.',
    coreCharm: '따뜻함, 진심, 안정감',
    characteristics: ['세심한 배려', '진심 어린 관심', '감정 공감', '헌신적'],
    seductionMethods: ['작은 것도 기억해주기', '챙겨주기', '편 들어주기', '진심 고백'],
    strengths: ['신뢰감', '안정적 관계', '깊은 감동', '오래 기억됨'],
    weaknesses: ['너무 쉽게 다가가는 느낌', '친구로 보일 수 있음', '설렘 부족', '주도권 약함'],
    bestTarget: '따뜻함을 원하는 타입',
    worstTarget: '스릴과 자극을 원하는 타입',
    tips: [
      '때로는 밀당도 필요해요',
      '자신을 위한 시간도 가지세요',
      '적당한 긴장감을 유지하세요',
      '너무 주기만 하면 지쳐요',
    ],
    signature: '진심으로 마음을 얻는 타입',
  },
  confident: {
    type: 'confident',
    title: '자신감 유혹러',
    emoji: '💪',
    subtitle: '당당함에 끌려, 리드해줘',
    description: '당신은 자신감 넘치는 모습으로 상대를 압도해요. 당당하게 다가가고, 확실하게 어필하는 모습에 상대는 자연스럽게 이끌리게 되죠.',
    coreCharm: '자신감, 당당함, 리드',
    characteristics: ['확실한 표현', '적극적 어필', '눈치 안 봄', '주도적'],
    seductionMethods: ['직진 고백', '확실한 관심 표현', '리드하기', '당당한 어필'],
    strengths: ['빠른 진전', '오해 없음', '강한 인상', '확실한 어필'],
    weaknesses: ['부담스러울 수 있음', '밀당 어려움', '거절에 약함', '상대 반응 무시'],
    bestTarget: '리드 받고 싶은 타입',
    worstTarget: '천천히 가고 싶은 타입',
    tips: [
      '상대의 속도에 맞춰주세요',
      '너무 직진하면 도망갈 수 있어요',
      '거절도 받아들이는 여유를',
      '가끔은 기다리는 것도 매력이에요',
    ],
    signature: '당당하게 마음을 전하는 타입',
  },
  natural: {
    type: 'natural',
    title: '자연스러움 유혹러',
    emoji: '🍃',
    subtitle: '편해서 좋아, 너랑 있으면 나다워',
    description: '당신은 꾸밈없는 자연스러움으로 상대를 편안하게 해줘요. 억지스럽지 않은 진솔한 모습에 상대는 자신도 모르게 마음을 열게 되죠.',
    coreCharm: '편안함, 진솔함, 자연스러움',
    characteristics: ['꾸밈없음', '있는 그대로', '편안한 분위기', '자연스러운 표현'],
    seductionMethods: ['자연스럽게 곁에 있기', '진솔한 대화', '편안한 분위기', '꾸밈없는 표현'],
    strengths: ['부담 없음', '오래 가는 매력', '신뢰감', '진정성'],
    weaknesses: ['설렘 부족', '특별함 어필 어려움', '관계 진전 느림', '어필력 약함'],
    bestTarget: '진솔한 관계를 원하는 타입',
    worstTarget: '자극과 설렘을 원하는 타입',
    tips: [
      '가끔은 특별한 이벤트도 해보세요',
      '관심 있다는 신호는 확실히 주세요',
      '자연스러움 속 설렘을 더해보세요',
      '표현을 조금 더 적극적으로 해보세요',
    ],
    signature: '자연스럽게 스며드는 타입',
  },
};

export function calculateResult(answers: number[]): SeductionStyleResult {
  const scores: Record<SeductionStyleType, number> = {
    mysterious: 0,
    playful: 0,
    intellectual: 0,
    caring: 0,
    confident: 0,
    natural: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as SeductionStyleType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: SeductionStyleType = 'natural';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as SeductionStyleType;
    }
  });

  return results[resultType];
}
