// 꼰대력 테스트 - 나는 얼마나 꼰대일까?

export interface BoomerLevelQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface BoomerLevelResult {
  type: string;
  title: string;
  emoji: string;
  percentage: number;
  generation: string;
  description: string;
  characteristics: string[];
  sayings: string[];
  strengths: string[];
  improvements: string[];
  howOthersSeeYou: string;
  advice: string;
}

export const boomerLevelTypes = ['anti-boomer', 'flexible', 'mild-boomer', 'classic-boomer', 'mega-boomer'] as const;
export type BoomerLevelType = typeof boomerLevelTypes[number];

export const questions: BoomerLevelQuestion[] = [
  {
    id: 1,
    question: "후배가 칼퇴를 한다고 하면?",
    options: [
      { text: "당연하지! 정시퇴근이 맞는 거야", scores: { 'anti-boomer': 3 } },
      { text: "할 일 다 했으면 뭐~ 괜찮지", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "음... 다른 사람들 눈치 안 보여?", scores: { 'mild-boomer': 2, flexible: 1 } },
      { text: "요즘 애들은 참... 난 그 나이 때 야근 밥 먹듯 했는데", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 2,
    question: "회식 자리에서 내 모습은?",
    options: [
      { text: "1차만 하고 바로 집에 감", scores: { 'anti-boomer': 3 } },
      { text: "분위기 봐가면서, 가고 싶으면 더 가고", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "2차까지는 가야 예의 아닌가?", scores: { 'mild-boomer': 2, 'classic-boomer': 1 } },
      { text: "끝까지 함께해야 팀워크지! 먼저 가면 서운해", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 3,
    question: "후배가 나한테 반말을 하면?",
    options: [
      { text: "괜찮아, 편하게 말해~", scores: { 'anti-boomer': 3 } },
      { text: "처음엔 좀 어색하지만 친해지면 OK", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "음... 좀 그렇긴 한데 참음", scores: { 'mild-boomer': 2, 'classic-boomer': 1 } },
      { text: "아니 어디서 반말이야? 버릇없게", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 4,
    question: "'요즘 것들은...'으로 시작하는 말을 해본 적 있나요?",
    options: [
      { text: "절대 안 함. 그런 말 자체를 싫어함", scores: { 'anti-boomer': 3 } },
      { text: "한 번도 없는 것 같은데...?", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "속으로 생각은 한 적 있음", scores: { 'mild-boomer': 2, flexible: 1 } },
      { text: "요즘 것들은 정말... (입버릇)", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 5,
    question: "신입이 '저 휴가 쓰고 싶은데요'라고 하면?",
    options: [
      { text: "당연하지, 휴가는 권리야!", scores: { 'anti-boomer': 3 } },
      { text: "일정만 맞으면 써~ 푹 쉬어", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "일 상황 봐가면서... 팀에 폐 안 끼치게", scores: { 'mild-boomer': 2, 'classic-boomer': 1 } },
      { text: "신입이 벌써 휴가? 1년은 버텨야지", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 6,
    question: "젊은 세대의 유행어나 신조어에 대해",
    options: [
      { text: "나도 적극 사용함! 재밌어", scores: { 'anti-boomer': 3 } },
      { text: "알아듣고 가끔 씀", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "뭔 말인지 모르겠지만 물어보진 않음", scores: { 'mild-boomer': 2, 'classic-boomer': 1 } },
      { text: "말을 왜 이상하게 해, 한국말 똑바로 해", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 7,
    question: "내가 힘들었던 경험을 말할 때",
    options: [
      { text: "그냥 웃긴 에피소드로 풀어서 얘기함", scores: { 'anti-boomer': 3 } },
      { text: "가끔 얘기하지만 교훈 강요 안 함", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "이렇게 힘들었으니 너희도 참아야 해", scores: { 'mild-boomer': 2, 'classic-boomer': 1 } },
      { text: "내가 너 나이 때는 이것보다 더했어!", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 8,
    question: "카카오톡 프사/상메에 대해",
    options: [
      { text: "자주 바꿈, SNS도 열심히 함", scores: { 'anti-boomer': 3 } },
      { text: "가끔 바꿈, 적당히 관리", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "오래전 사진 그대로, 귀찮아서", scores: { 'mild-boomer': 2, 'classic-boomer': 1 } },
      { text: "프사가 뭐야? 그런 거 안 해", scores: { 'mega-boomer': 3 } },
    ],
  },
  {
    id: 9,
    question: "밥 먹을 때 핸드폰 보는 것에 대해",
    options: [
      { text: "나도 보면서 먹음, 별 상관없어", scores: { 'anti-boomer': 3 } },
      { text: "상황에 따라 다르지~", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "좀 그렇긴 한데... 참음", scores: { 'mild-boomer': 2, flexible: 1 } },
      { text: "밥 먹을 땐 밥에 집중해야지!", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 10,
    question: "MZ세대에 대한 내 생각은?",
    options: [
      { text: "배울 점 많고 신선해, 존중함", scores: { 'anti-boomer': 3 } },
      { text: "세대 차이는 있지만 이해하려 노력함", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "좋은 점도 있지만 좀 이해 안 되는 부분도...", scores: { 'mild-boomer': 2, 'classic-boomer': 1 } },
      { text: "버릇없고 개인주의적이야, 우리 때랑 달라", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 11,
    question: "새로운 기술/앱 배우는 것에 대해",
    options: [
      { text: "빨리 배워서 활용함, 재밌어!", scores: { 'anti-boomer': 3 } },
      { text: "필요하면 배우지~", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "어렵지만 어쩔 수 없이...", scores: { 'mild-boomer': 2, 'classic-boomer': 1 } },
      { text: "옛날 것도 잘 쓰는데 뭘 또 배워", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
  {
    id: 12,
    question: "'라떼는 말이야...'(나 때는 말이야)를 얼마나 자주 쓰나요?",
    options: [
      { text: "절대 안 씀, 그 말 자체가 싫음", scores: { 'anti-boomer': 3 } },
      { text: "농담으로 일부러 쓸 때 빼고 안 씀", scores: { flexible: 2, 'anti-boomer': 1 } },
      { text: "가끔 무의식적으로 튀어나옴", scores: { 'mild-boomer': 2, 'classic-boomer': 1 } },
      { text: "자주 씀, 경험 공유는 중요하니까", scores: { 'classic-boomer': 2, 'mega-boomer': 1 } },
    ],
  },
];

export const results: Record<BoomerLevelType, BoomerLevelResult> = {
  'anti-boomer': {
    type: 'anti-boomer',
    title: '꼰대 청정구역',
    emoji: '✨',
    percentage: 5,
    generation: '영혼은 MZ',
    description: '축하합니다! 당신에게는 꼰대 DNA가 거의 없어요. 세대를 초월한 소통 능력의 소유자! 열린 마음과 유연한 사고로 누구와도 잘 지낼 수 있어요.',
    characteristics: ['세대 초월 소통러', '변화에 유연함', '권위주의 제로', '공감 능력 만렙'],
    sayings: ['"ㅋㅋㅋ 그거 레전드야"', '"오 그거 신박하다"', '"요즘 트렌드 알려줘~"'],
    strengths: ['후배들에게 인기 많음', '소통이 잘 됨', '새로운 것 빨리 배움', '분위기 메이커'],
    improvements: ['가끔은 경험에서 나오는 조언도 필요해요', '모든 것에 동의할 필요는 없어요'],
    howOthersSeeYou: '나이 안 느껴지는 선배, 친구 같은 사람',
    advice: '최고예요! 이 마인드 계속 유지하세요~',
  },
  flexible: {
    type: 'flexible',
    title: '유연한 어른',
    emoji: '🌊',
    percentage: 25,
    generation: '세대 균형러',
    description: '당신은 꼰대와 거리가 먼 유연한 사람이에요! 자신의 가치관은 있지만, 다른 세대도 이해하고 존중할 줄 아는 균형 잡힌 사람입니다.',
    characteristics: ['열린 마음', '적당한 유연성', '상황 판단력', '세대 간 통역사'],
    sayings: ['"그럴 수 있지~"', '"시대가 변했으니까"', '"나도 배워볼게"'],
    strengths: ['선후배 모두와 잘 지냄', '갈등 중재 잘 함', '배움의 자세', '적응력 좋음'],
    improvements: ['가끔 너무 맞춰주려 하지 않아도 돼요', '본인 의견도 당당히 말하세요'],
    howOthersSeeYou: '편한 선배, 이해심 많은 사람',
    advice: '아주 좋은 밸런스예요! 꼰대 예방 완료~',
  },
  'mild-boomer': {
    type: 'mild-boomer',
    title: '라이트 꼰대',
    emoji: '🌤️',
    percentage: 50,
    generation: '평범한 어른',
    description: '약간의 꼰대 성향이 있지만, 아직 치료 가능한 수준! 가끔 "요즘 것들은..."이 튀어나올 수 있어요. 의식적으로 노력하면 충분히 개선 가능해요.',
    characteristics: ['가끔 라떼 언급', '은근 권위의식', '변화에 약간 저항', '경험 우선주의'],
    sayings: ['"원래 그런 거 아니야?"', '"좀 더 버텨봐"', '"내가 해봐서 아는데..."'],
    strengths: ['경험에서 나오는 노하우', '책임감', '조직 이해도'],
    improvements: ['다른 방식도 인정해주세요', '"내가 젊었을 때"는 자제', '후배 의견에 귀 기울이기'],
    howOthersSeeYou: '나쁘진 않지만 가끔 "음..." 하게 되는 선배',
    advice: '조금만 더 열린 마음을 가져보세요! 아직 늦지 않았어요.',
  },
  'classic-boomer': {
    type: 'classic-boomer',
    title: '클래식 꼰대',
    emoji: '👴',
    percentage: 75,
    generation: '전형적 꼰대',
    description: '클래식한 꼰대 성향이 있네요! "라떼는 말이야"가 입버릇이 되진 않았나요? 자신도 모르게 후배들을 불편하게 만들 수 있어요. 의식적인 노력이 필요합니다!',
    characteristics: ['라떼 중독', '권위 의식 강함', '변화 거부', '내 말이 맞아 증후군'],
    sayings: ['"내가 너 나이 때는~"', '"요즘 애들은 참..."', '"그러니까 안 되는 거야"'],
    strengths: ['풍부한 경험', '단단한 원칙', '책임감'],
    improvements: ['후배 입장에서 생각해보기', '시대가 바뀌었음을 인정하기', '"내 때는"은 금지어로'],
    howOthersSeeYou: '피하고 싶은 선배, 얘기하기 불편한 사람',
    advice: '꼰대 탈출이 시급합니다! 열린 마음으로 후배들 얘기 들어보세요.',
  },
  'mega-boomer': {
    type: 'mega-boomer',
    title: '레전드 꼰대',
    emoji: '🦖',
    percentage: 95,
    generation: '꼰대계의 티라노',
    description: '축하드려요(?), 당신은 꼰대계의 레전드입니다! 후배들이 당신을 어떻게 생각하는지... 알고 싶지 않으실 수도 있어요. 심각한 꼰대 치료가 필요합니다!',
    characteristics: ['꼰대 그 자체', '변화 = 적', '내 말만 옳음', '시대착오적 발언'],
    sayings: ['"세상이 잘못됐어"', '"우리 때는 상상도 못할 일"', '"싹이 노랗다"'],
    strengths: ['...일관성?', '자기 확신'],
    improvements: ['모든 것을 바꿔야 합니다', '후배들에게 솔직하게 피드백 받기', '심각하게 반성하기'],
    howOthersSeeYou: '공룡, 피해야 할 사람 1순위',
    advice: '긴급 꼰대 탈출이 필요합니다! 지금이라도 늦지 않았어요... 아마도요.',
  },
};

export function calculateResult(answers: number[]): BoomerLevelResult {
  const scores: Record<BoomerLevelType, number> = {
    'anti-boomer': 0,
    flexible: 0,
    'mild-boomer': 0,
    'classic-boomer': 0,
    'mega-boomer': 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as BoomerLevelType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: BoomerLevelType = 'flexible';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as BoomerLevelType;
    }
  });

  return results[resultType];
}
