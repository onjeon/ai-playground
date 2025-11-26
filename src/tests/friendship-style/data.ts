// 우정 스타일 테스트 - 친구 관계에서 나는?

export const questions = [
  {
    id: 1,
    question: "친구가 고민을 털어놓으면?",
    options: [
      { text: "바로 해결책을 제시한다", type: "advisor", score: 5 },
      { text: "일단 끝까지 들어준다", type: "listener", score: 4 },
      { text: "같이 분노/슬퍼한다", type: "empathizer", score: 3 },
      { text: "기분 전환시켜준다", type: "cheerleader", score: 2 },
    ],
  },
  {
    id: 2,
    question: "친구들 사이에서 나의 역할은?",
    options: [
      { text: "모임 주최자/연락책", type: "organizer", score: 5 },
      { text: "분위기 메이커", type: "cheerleader", score: 4 },
      { text: "조언자/해결사", type: "advisor", score: 3 },
      { text: "묵묵한 지지자", type: "listener", score: 2 },
    ],
  },
  {
    id: 3,
    question: "친구와 연락하는 빈도는?",
    options: [
      { text: "매일 연락함", type: "cheerleader", score: 5 },
      { text: "자주 연락함", type: "organizer", score: 4 },
      { text: "가끔 연락하지만 깊게", type: "listener", score: 2 },
      { text: "연락 안 해도 변함없음", type: "loyal", score: 1 },
    ],
  },
  {
    id: 4,
    question: "친구가 잘못했을 때?",
    options: [
      { text: "직접 말해준다", type: "advisor", score: 5 },
      { text: "돌려서 힌트를 준다", type: "listener", score: 3 },
      { text: "스스로 깨닫길 기다린다", type: "loyal", score: 2 },
      { text: "그래도 친군데 뭐", type: "empathizer", score: 1 },
    ],
  },
  {
    id: 5,
    question: "친구 관계에서 가장 중요한 것은?",
    options: [
      { text: "신뢰와 의리", type: "loyal", score: 5 },
      { text: "솔직한 소통", type: "advisor", score: 4 },
      { text: "즐거운 시간", type: "cheerleader", score: 3 },
      { text: "서로의 성장", type: "listener", score: 2 },
    ],
  },
  {
    id: 6,
    question: "새 친구 사귀는 것은?",
    options: [
      { text: "좋아! 많을수록 좋아", type: "cheerleader", score: 5 },
      { text: "괜찮은 사람이면 OK", type: "organizer", score: 3 },
      { text: "어렵지만 노력함", type: "empathizer", score: 2 },
      { text: "기존 친구가 최고", type: "loyal", score: 1 },
    ],
  },
  {
    id: 7,
    question: "친구가 성공했을 때?",
    options: [
      { text: "진심으로 축하하고 자랑함", type: "cheerleader", score: 5 },
      { text: "묵묵히 기뻐함", type: "loyal", score: 3 },
      { text: "축하 + 더 잘하라고 조언", type: "advisor", score: 4 },
      { text: "같이 기뻐하며 감동", type: "empathizer", score: 2 },
    ],
  },
  {
    id: 8,
    question: "친구와 싸우면?",
    options: [
      { text: "바로 대화로 해결", type: "advisor", score: 5 },
      { text: "시간 두고 기다림", type: "loyal", score: 3 },
      { text: "내가 먼저 사과", type: "empathizer", score: 2 },
      { text: "분위기 풀려고 노력", type: "cheerleader", score: 4 },
    ],
  },
  {
    id: 9,
    question: "친구의 비밀은?",
    options: [
      { text: "절대 안 말함, 무덤까지", type: "loyal", score: 5 },
      { text: "당사자한테만 조언으로 말함", type: "advisor", score: 3 },
      { text: "공감하면서 들어줌", type: "listener", score: 2 },
      { text: "솔직히 가끔 실수함", type: "cheerleader", score: 1 },
    ],
  },
  {
    id: 10,
    question: "친구가 힘들어할 때?",
    options: [
      { text: "옆에서 함께 있어줌", type: "empathizer", score: 5 },
      { text: "실질적인 도움을 줌", type: "advisor", score: 4 },
      { text: "기분 전환시켜줌", type: "cheerleader", score: 3 },
      { text: "필요할 때 연락하라고 함", type: "loyal", score: 2 },
    ],
  },
  {
    id: 11,
    question: "친구들과의 약속은?",
    options: [
      { text: "내가 주로 잡음", type: "organizer", score: 5 },
      { text: "꼭 지킴", type: "loyal", score: 4 },
      { text: "분위기 보고 결정", type: "empathizer", score: 2 },
      { text: "정해주면 감", type: "listener", score: 1 },
    ],
  },
  {
    id: 12,
    question: "오래된 친구와의 관계는?",
    options: [
      { text: "변함없이 깊게 유지", type: "loyal", score: 5 },
      { text: "연락 자주 하며 유지", type: "organizer", score: 4 },
      { text: "만나면 여전히 재밌음", type: "cheerleader", score: 3 },
      { text: "자연스럽게 멀어지기도", type: "listener", score: 1 },
    ],
  },
];

export interface FriendshipStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  loyaltyScore: number;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  bestFriendType: string;
  worstFriendType: string;
  friendshipAdvice: string;
  famousExample: string;
}

const resultTypes: Record<string, FriendshipStyleResult> = {
  advisor: {
    type: 'advisor',
    title: '조언자형 친구',
    emoji: '🧭',
    subtitle: '해결사 친구',
    description: '당신은 친구들에게 현명한 조언을 해주는 해결사 타입! 논리적이고 실용적인 조언으로 친구들의 고민을 해결해줘요. 믿음직하고 의지되는 친구입니다.',
    loyaltyScore: 80,
    characteristics: ['논리적', '해결 지향', '솔직함', '현실적'],
    strengths: ['문제 해결', '객관적 조언', '신뢰감', '성장 도움'],
    weaknesses: ['공감 부족', '잔소리처럼 느껴질 수 있음', '감정보다 논리'],
    bestFriendType: '공감형, 응원형',
    worstFriendType: '조언 싫어하는 타입',
    friendshipAdvice: '가끔은 조언보다 그냥 들어주는 것도 필요해요',
    famousExample: '유퀴즈 조세호, 김영철',
  },
  listener: {
    type: 'listener',
    title: '경청형 친구',
    emoji: '👂',
    subtitle: '들어주는 친구',
    description: '당신은 친구의 말을 끝까지 들어주는 든든한 타입! 조용히 경청하고 깊은 대화를 나눠요. 말 안 해도 다 알아주는, 진정한 대화 상대입니다.',
    loyaltyScore: 85,
    characteristics: ['경청', '깊은 대화', '인내심', '관찰력'],
    strengths: ['신뢰감', '비밀 보장', '깊은 관계', '편안함'],
    weaknesses: ['의견 표현 부족', '소극적', '거리감 느껴질 수 있음'],
    bestFriendType: '활발한 타입, 조언자형',
    worstFriendType: '과묵한 타입',
    friendshipAdvice: '가끔은 당신의 이야기도 들려주세요',
    famousExample: '이영자, 송은이',
  },
  empathizer: {
    type: 'empathizer',
    title: '공감형 친구',
    emoji: '💕',
    subtitle: '함께 느끼는 친구',
    description: '당신은 친구의 감정에 깊이 공감하는 타입! 기쁨도 슬픔도 함께 나누며, 진심으로 함께해요. 감정적으로 가장 든든한 친구입니다.',
    loyaltyScore: 90,
    characteristics: ['공감력', '감정 동조', '따뜻함', '섬세함'],
    strengths: ['감정적 지지', '진심', '위로', '함께하는 느낌'],
    weaknesses: ['감정 소모', '객관성 부족', '경계 모호'],
    bestFriendType: '조언자형',
    worstFriendType: '감정 공유 안 하는 타입',
    friendshipAdvice: '자신의 감정 관리도 중요해요',
    famousExample: '아이유, 박보영',
  },
  cheerleader: {
    type: 'cheerleader',
    title: '응원형 친구',
    emoji: '📣',
    subtitle: '분위기 메이커',
    description: '당신은 친구들을 신나게 해주는 에너지 뱅크! 밝은 에너지로 분위기를 띄우고, 힘들 때 기분 전환을 시켜줘요. 함께 있으면 즐거운 친구입니다.',
    loyaltyScore: 75,
    characteristics: ['밝음', '에너지', '재미', '긍정적'],
    strengths: ['분위기 메이커', '기분 전환', '즐거움', '추억 제조'],
    weaknesses: ['진지한 대화 어려움', '깊이 부족', '가벼워 보일 수 있음'],
    bestFriendType: '경청형, 공감형',
    worstFriendType: '너무 진지한 타입',
    friendshipAdvice: '가끔은 진지한 대화도 필요해요',
    famousExample: '박나래, 이광수',
  },
  loyal: {
    type: 'loyal',
    title: '의리파 친구',
    emoji: '🤝',
    subtitle: '평생 함께하는 친구',
    description: '당신은 한번 친구는 영원한 친구인 의리파! 연락이 뜸해도 변함없고, 어떤 상황에서도 친구 편이에요. 믿을 수 있는 평생 친구입니다.',
    loyaltyScore: 100,
    characteristics: ['의리', '변함없음', '신뢰', '진정성'],
    strengths: ['절대적 신뢰', '오래가는 관계', '진정한 우정', '든든함'],
    weaknesses: ['새 친구 사귀기 어려움', '변화에 느림', '표현 부족'],
    bestFriendType: '모든 타입',
    worstFriendType: '관계를 쉽게 정리하는 타입',
    friendshipAdvice: '감정 표현을 더 해보세요',
    famousExample: '하정우-정우성, 유재석-박명수',
  },
  organizer: {
    type: 'organizer',
    title: '총무형 친구',
    emoji: '📋',
    subtitle: '모임의 중심',
    description: '당신은 친구 모임을 이끄는 조직자 타입! 약속을 잡고, 연락을 돌리고, 모임을 만들어가요. 당신이 없으면 모임이 안 열리는 핵심 인물입니다.',
    loyaltyScore: 82,
    characteristics: ['리더십', '조직력', '책임감', '사교성'],
    strengths: ['모임 활성화', '넓은 인맥', '연결고리', '추진력'],
    weaknesses: ['번아웃 위험', '뒷정리 스트레스', '본인 케어 부족'],
    bestFriendType: '참여 잘하는 타입',
    worstFriendType: '약속 펑크 내는 타입',
    friendshipAdvice: '가끔은 다른 사람에게 맡기세요',
    famousExample: '유재석, 강호동',
  },
};

export function calculateFriendshipStyleResult(answers: number[]): FriendshipStyleResult {
  const typeScores: Record<string, number> = {
    advisor: 0,
    listener: 0,
    empathizer: 0,
    cheerleader: 0,
    loyal: 0,
    organizer: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] += 1;
    }
  });

  let maxType = 'loyal';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
