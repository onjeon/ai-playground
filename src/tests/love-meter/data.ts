// 연인 애정도 측정 테스트 - 우리 커플 애정 온도는?

export interface LoveMeterQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface LoveMeterResult {
  type: string;
  title: string;
  emoji: string;
  temperature: number;
  status: string;
  description: string;
  characteristics: string[];
  goodSigns: string[];
  warningSigns: string[];
  advice: string[];
  dateIdeas: string[];
  communicationTip: string;
  encouragement: string;
}

export const loveMeterTypes = ['freezing', 'cold', 'lukewarm', 'warm', 'hot', 'burning'] as const;
export type LoveMeterType = typeof loveMeterTypes[number];

export const questions: LoveMeterQuestion[] = [
  {
    id: 1,
    question: "요즘 연인에게 연락이 오면 기분이 어때?",
    options: [
      { text: "솔직히 귀찮을 때가 더 많아", score: 0 },
      { text: "그냥 평범해, 특별한 감정 없음", score: 1 },
      { text: "반갑긴 한데 예전만큼은 아님", score: 2 },
      { text: "기분 좋아! 빨리 답장하고 싶어", score: 3 },
    ],
  },
  {
    id: 2,
    question: "연인과 마지막으로 스킨십한 게 언제야?",
    options: [
      { text: "기억도 안 나... 한참 됐어", score: 0 },
      { text: "꽤 됐어, 2주 이상?", score: 1 },
      { text: "며칠 전쯤?", score: 2 },
      { text: "오늘 또는 어제! 자주 해", score: 3 },
    ],
  },
  {
    id: 3,
    question: "연인의 고민이나 힘든 일에 얼마나 관심 가져?",
    options: [
      { text: "솔직히 별로 관심 없어졌어", score: 0 },
      { text: "들어는 주는데 깊이 공감은 안 돼", score: 1 },
      { text: "걱정되고 도와주고 싶어", score: 2 },
      { text: "내 일처럼 신경 쓰여! 뭐든 해주고 싶어", score: 3 },
    ],
  },
  {
    id: 4,
    question: "연인 생각이 하루에 얼마나 나?",
    options: [
      { text: "거의 안 나, 바빠서 잊고 살아", score: 0 },
      { text: "가끔, 연락 올 때 정도?", score: 1 },
      { text: "종종 생각나, 뭐 하나 싶기도", score: 2 },
      { text: "수시로! 문득문득 떠올라", score: 3 },
    ],
  },
  {
    id: 5,
    question: "연인과 데이트할 때 기분은?",
    options: [
      { text: "솔직히 의무감으로 만나는 느낌", score: 0 },
      { text: "나쁘진 않은데 설레진 않아", score: 1 },
      { text: "즐거워! 만나면 기분 좋아", score: 2 },
      { text: "너무 좋아! 헤어지기 싫어", score: 3 },
    ],
  },
  {
    id: 6,
    question: "연인의 작은 변화(헤어스타일, 옷 등)를 알아채?",
    options: [
      { text: "전혀, 관심이 없어졌나 봐", score: 0 },
      { text: "말해주면 그제야 알아", score: 1 },
      { text: "대체로 알아채는 편", score: 2 },
      { text: "바로 알아채고 칭찬해줘!", score: 3 },
    ],
  },
  {
    id: 7,
    question: "연인과 미래 얘기할 때 기분은?",
    options: [
      { text: "불편해, 피하고 싶은 주제야", score: 0 },
      { text: "글쎄... 잘 모르겠어", score: 1 },
      { text: "긍정적으로 생각해볼 수 있어", score: 2 },
      { text: "설레! 같이 계획 세우고 싶어", score: 3 },
    ],
  },
  {
    id: 8,
    question: "연인이 다른 이성과 친하게 지내면?",
    options: [
      { text: "별로 신경 안 써, 관심 없어", score: 0 },
      { text: "약간 신경 쓰이긴 해", score: 1 },
      { text: "좀 불편하고 걱정돼", score: 2 },
      { text: "질투나! 나만 봐줬으면 해", score: 3 },
    ],
  },
  {
    id: 9,
    question: "연인에게 '사랑해'라고 말하는 빈도는?",
    options: [
      { text: "거의 안 해, 어색해", score: 0 },
      { text: "특별한 날에만 가끔", score: 1 },
      { text: "종종 해, 일주일에 몇 번", score: 2 },
      { text: "매일! 자주 표현해", score: 3 },
    ],
  },
  {
    id: 10,
    question: "연인과 싸운 후 화해하고 싶은 마음은?",
    options: [
      { text: "솔직히 이대로 끝나도 괜찮을 것 같아", score: 0 },
      { text: "시간이 지나면 괜찮아지겠지", score: 1 },
      { text: "빨리 화해하고 싶어", score: 2 },
      { text: "당장 달려가서 안아주고 싶어", score: 3 },
    ],
  },
  {
    id: 11,
    question: "연인을 위해 기꺼이 양보할 수 있어?",
    options: [
      { text: "왜 내가 양보해야 해?", score: 0 },
      { text: "상황에 따라 다르지만 잘 안 돼", score: 1 },
      { text: "중요한 건 양보할 수 있어", score: 2 },
      { text: "기꺼이! 행복했으면 좋겠어", score: 3 },
    ],
  },
  {
    id: 12,
    question: "지금 이 연애에 대한 솔직한 감정은?",
    options: [
      { text: "끝내야 하나 고민 중이야", score: 0 },
      { text: "그냥 흘러가는 대로 두는 중", score: 1 },
      { text: "좋아, 계속 함께하고 싶어", score: 2 },
      { text: "너무 행복해! 평생 함께하고 싶어", score: 3 },
    ],
  },
];

export const results: Record<LoveMeterType, LoveMeterResult> = {
  freezing: {
    type: 'freezing',
    title: '애정 빙하기',
    emoji: '🥶',
    temperature: 10,
    status: '위험 신호',
    description: '솔직히 말하면, 지금 이 관계는 많이 식어있어요. 연인에 대한 감정이 거의 느껴지지 않는 상태예요. 이대로 가면 자연스럽게 멀어질 가능성이 높아요.',
    characteristics: ['무관심', '의무감', '정 떨어짐', '피로감'],
    goodSigns: [],
    warningSigns: [
      '연락이 귀찮게 느껴짐',
      '함께 있어도 외로움',
      '미래가 그려지지 않음',
      '다른 사람에게 관심이 감',
    ],
    advice: [
      '솔직하게 현재 감정을 점검해보세요',
      '이 관계를 계속할 이유가 있는지 생각해보세요',
      '억지로 감정을 만들려 하지 마세요',
      '필요하다면 이별도 용기입니다',
    ],
    dateIdeas: ['진지한 대화 시간 갖기', '처음 만났던 장소 다시 가보기'],
    communicationTip: '감정을 숨기지 말고, 서로의 진심을 확인하는 대화가 필요해요.',
    encouragement: '어떤 선택을 하든, 당신의 행복이 가장 중요해요.',
  },
  cold: {
    type: 'cold',
    title: '애정 냉각기',
    emoji: '😐',
    temperature: 30,
    status: '주의 필요',
    description: '연애 초반의 설렘은 많이 사라졌고, 관계가 다소 무미건조해진 상태예요. 아직 정은 남아있지만, 노력 없이는 더 식을 수 있어요.',
    characteristics: ['익숙함', '무덤덤함', '설렘 부족', '권태기'],
    goodSigns: [
      '아직 함께 있으면 편안함',
      '완전히 관심이 없진 않음',
    ],
    warningSigns: [
      '데이트가 의무처럼 느껴짐',
      '대화 주제가 없음',
      '스킨십이 줄어듦',
    ],
    advice: [
      '새로운 경험을 함께 해보세요',
      '연애 초반 추억을 떠올려보세요',
      '상대방의 장점을 다시 찾아보세요',
      '솔직한 대화로 관계를 점검하세요',
    ],
    dateIdeas: ['새로운 취미 함께 시작하기', '여행 계획 세우기', '서프라이즈 이벤트'],
    communicationTip: '요즘 우리 관계 어떤 것 같아? 라고 먼저 물어보세요.',
    encouragement: '권태기는 모든 커플이 겪어요. 함께 극복하면 더 단단해져요.',
  },
  lukewarm: {
    type: 'lukewarm',
    title: '미지근한 애정',
    emoji: '🙂',
    temperature: 50,
    status: '보통',
    description: '나쁘지 않지만 뜨겁지도 않은 상태예요. 안정적이긴 하지만 설렘이 부족하고, 조금 더 노력하면 더 좋아질 수 있는 관계예요.',
    characteristics: ['안정적', '평범함', '예측 가능', '편안함'],
    goodSigns: [
      '함께 있으면 편안함',
      '서로에게 나쁜 감정은 없음',
      '기본적인 배려는 있음',
    ],
    warningSigns: [
      '특별한 설렘이 없음',
      '매너리즘에 빠질 수 있음',
    ],
    advice: [
      '작은 이벤트로 설렘을 만들어보세요',
      '감사한 마음을 자주 표현하세요',
      '서로의 관심사에 더 귀 기울여보세요',
      '데이트 코스에 변화를 줘보세요',
    ],
    dateIdeas: ['버킷리스트 함께 만들기', '요리 같이 하기', '운동 데이트'],
    communicationTip: '오늘 뭐가 좋았어? 같은 질문으로 소소한 대화를 늘려보세요.',
    encouragement: '안정적인 관계도 좋아요! 거기에 설렘을 더하면 완벽해요.',
  },
  warm: {
    type: 'warm',
    title: '따뜻한 애정',
    emoji: '🥰',
    temperature: 70,
    status: '좋음',
    description: '서로를 아끼고 사랑하는 게 느껴지는 따뜻한 관계예요! 적당한 설렘과 안정감이 공존하는 건강한 연애를 하고 있어요.',
    characteristics: ['애정 넘침', '서로 존중', '편안함', '신뢰'],
    goodSigns: [
      '함께 있으면 행복함',
      '서로의 성장을 응원함',
      '미래를 함께 그림',
      '자연스러운 애정 표현',
    ],
    warningSigns: [],
    advice: [
      '지금처럼 서로를 아껴주세요',
      '감사한 마음을 말로 표현하세요',
      '함께하는 추억을 많이 쌓으세요',
      '서로의 개인 시간도 존중하세요',
    ],
    dateIdeas: ['의미 있는 장소에서 기념일 보내기', '함께 버킷리스트 실천하기'],
    communicationTip: '사랑해, 고마워 같은 말을 아끼지 마세요!',
    encouragement: '아름다운 사랑을 하고 있네요! 이대로 쭉 행복하세요.',
  },
  hot: {
    type: 'hot',
    title: '뜨거운 사랑',
    emoji: '❤️‍🔥',
    temperature: 85,
    status: '매우 좋음',
    description: '서로에 대한 애정이 넘쳐나는 뜨거운 사랑이에요! 함께 있으면 행복하고, 떨어져 있어도 생각나는 달콤한 연애 중이시네요.',
    characteristics: ['열정적', '로맨틱', '끈끈함', '깊은 유대'],
    goodSigns: [
      '서로 보고 싶어 함',
      '스킨십이 자연스러움',
      '미래를 진지하게 계획',
      '서로가 우선순위',
    ],
    warningSigns: [],
    advice: [
      '이 감정을 오래 유지하려면 서로 존중이 필요해요',
      '질투나 집착으로 변하지 않도록 주의하세요',
      '각자의 삶도 소중히 여기세요',
      '함께하는 시간의 질을 높여보세요',
    ],
    dateIdeas: ['로맨틱 디너', '별 보러 가기', '커플 사진 촬영'],
    communicationTip: '사랑한다는 말과 함께, 구체적으로 뭐가 좋은지도 말해주세요.',
    encouragement: '정말 사랑하고 있네요! 이 소중한 감정 오래 간직하세요.',
  },
  burning: {
    type: 'burning',
    title: '불타는 사랑',
    emoji: '🔥',
    temperature: 100,
    status: '최고',
    description: '최고 온도의 불타는 사랑! 서로에게 완전히 빠져있고, 연인이 세상의 전부처럼 느껴지는 상태예요. 이런 사랑은 정말 특별해요!',
    characteristics: ['열렬함', '올인', '눈에 콩깍지', '세상 행복'],
    goodSigns: [
      '눈에서 하트가 뿅뿅',
      '매 순간이 행복',
      '평생 함께하고 싶음',
      '서로가 인생 최고의 선물',
    ],
    warningSigns: [
      '너무 뜨거우면 지칠 수 있어요 (주의)',
    ],
    advice: [
      '지금 이 감정을 충분히 즐기세요!',
      '서로에게 올인하되, 자신도 잃지 마세요',
      '이 열정이 건강한 방향으로 유지되도록',
      '주변 관계도 소홀히 하지 마세요',
    ],
    dateIdeas: ['특별한 여행', '의미 있는 선물 교환', '프러포즈급 이벤트'],
    communicationTip: '이 사랑이 얼마나 특별한지, 자주 표현해주세요!',
    encouragement: '와! 이런 사랑 흔치 않아요. 운명적인 만남이에요!',
  },
};

export function calculateResult(answers: number[]): LoveMeterResult {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;
  const percentage = (totalScore / maxScore) * 100;

  let resultType: LoveMeterType;
  
  if (percentage <= 15) {
    resultType = 'freezing';
  } else if (percentage <= 35) {
    resultType = 'cold';
  } else if (percentage <= 55) {
    resultType = 'lukewarm';
  } else if (percentage <= 75) {
    resultType = 'warm';
  } else if (percentage <= 90) {
    resultType = 'hot';
  } else {
    resultType = 'burning';
  }

  return results[resultType];
}
