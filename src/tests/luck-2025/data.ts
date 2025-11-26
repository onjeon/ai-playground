// 2025년 운세 테스트

export interface Luck2025Question {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface Luck2025Result {
  type: string;
  title: string;
  emoji: string;
  overallLuck: number; // 1-100
  description: string;
  keywords: string[];
  loveLuck: { score: number; description: string };
  moneyLuck: { score: number; description: string };
  careerLuck: { score: number; description: string };
  healthLuck: { score: number; description: string };
  luckyMonth: string;
  unluckyMonth: string;
  luckyColor: string;
  luckyNumber: number;
  advice: string;
  caution: string;
}

// 운세 유형
export const luckTypes = [
  'super-lucky', 'career-rising', 'love-bloom', 'wealth-coming',
  'stable-growth', 'challenge-overcome', 'transform-year', 'rest-recharge'
] as const;
export type LuckType = typeof luckTypes[number];

// 질문 데이터 (10문항)
export const questions: Luck2025Question[] = [
  {
    id: 1,
    question: "2024년을 돌아보면?",
    options: [
      { text: "정말 힘들었다, 2025년은 좀 나아지길", scores: { 'transform-year': 2, 'challenge-overcome': 1 } },
      { text: "그럭저럭 평범했다", scores: { 'stable-growth': 2, 'rest-recharge': 1 } },
      { text: "꽤 좋았다, 이 기세를 이어가고 싶다", scores: { 'super-lucky': 2, 'career-rising': 1 } },
      { text: "변화가 많았던 해였다", scores: { 'transform-year': 2, 'love-bloom': 1 } },
    ],
  },
  {
    id: 2,
    question: "2025년에 가장 이루고 싶은 것은?",
    options: [
      { text: "사랑, 좋은 인연을 만나고 싶다", scores: { 'love-bloom': 2, 'super-lucky': 1 } },
      { text: "돈, 경제적으로 안정되고 싶다", scores: { 'wealth-coming': 2, 'career-rising': 1 } },
      { text: "성공, 커리어에서 인정받고 싶다", scores: { 'career-rising': 2, 'transform-year': 1 } },
      { text: "평화, 마음 편하게 살고 싶다", scores: { 'rest-recharge': 2, 'stable-growth': 1 } },
    ],
  },
  {
    id: 3,
    question: "요즘 자주 드는 생각은?",
    options: [
      { text: "뭔가 큰 변화가 필요해", scores: { 'transform-year': 2, 'challenge-overcome': 1 } },
      { text: "지금 상태를 유지하고 싶어", scores: { 'stable-growth': 2, 'rest-recharge': 1 } },
      { text: "곧 좋은 일이 생길 것 같아", scores: { 'super-lucky': 2, 'love-bloom': 1 } },
      { text: "더 열심히 해야 해", scores: { 'career-rising': 2, 'wealth-coming': 1 } },
    ],
  },
  {
    id: 4,
    question: "새해 첫날 하고 싶은 것은?",
    options: [
      { text: "해돋이 보며 소원 빌기", scores: { 'super-lucky': 2, 'love-bloom': 1 } },
      { text: "새해 계획 세우기", scores: { 'career-rising': 2, 'stable-growth': 1 } },
      { text: "가족/친구와 시간 보내기", scores: { 'rest-recharge': 2, 'love-bloom': 1 } },
      { text: "새로운 것 도전하기", scores: { 'transform-year': 2, 'challenge-overcome': 1 } },
    ],
  },
  {
    id: 5,
    question: "지금 가장 걱정되는 것은?",
    options: [
      { text: "연애/관계 문제", scores: { 'love-bloom': 2, 'transform-year': 1 } },
      { text: "돈/재정 문제", scores: { 'wealth-coming': 2, 'challenge-overcome': 1 } },
      { text: "직장/진로 문제", scores: { 'career-rising': 2, 'transform-year': 1 } },
      { text: "건강/피로 문제", scores: { 'rest-recharge': 2, 'stable-growth': 1 } },
    ],
  },
  {
    id: 6,
    question: "평소 운이 좋은 편인가요?",
    options: [
      { text: "엄청 좋은 편!", scores: { 'super-lucky': 2, 'wealth-coming': 1 } },
      { text: "보통이다", scores: { 'stable-growth': 2, 'career-rising': 1 } },
      { text: "별로 안 좋은 것 같다", scores: { 'challenge-overcome': 2, 'transform-year': 1 } },
      { text: "운보다 노력파", scores: { 'career-rising': 2, 'challenge-overcome': 1 } },
    ],
  },
  {
    id: 7,
    question: "2025년 나에게 필요한 것은?",
    options: [
      { text: "새로운 만남과 인연", scores: { 'love-bloom': 2, 'super-lucky': 1 } },
      { text: "돈과 물질적 풍요", scores: { 'wealth-coming': 2, 'career-rising': 1 } },
      { text: "휴식과 재충전", scores: { 'rest-recharge': 2, 'stable-growth': 1 } },
      { text: "도전과 성장", scores: { 'transform-year': 2, 'challenge-overcome': 1 } },
    ],
  },
  {
    id: 8,
    question: "결정을 내릴 때 나는?",
    options: [
      { text: "직감을 믿는다", scores: { 'super-lucky': 2, 'love-bloom': 1 } },
      { text: "신중하게 분석한다", scores: { 'stable-growth': 2, 'career-rising': 1 } },
      { text: "과감하게 도전한다", scores: { 'transform-year': 2, 'challenge-overcome': 1 } },
      { text: "주변 조언을 듣는다", scores: { 'rest-recharge': 2, 'wealth-coming': 1 } },
    ],
  },
  {
    id: 9,
    question: "2025년 어떤 한 해가 되길 바라나요?",
    options: [
      { text: "대박나는 해!", scores: { 'super-lucky': 2, 'wealth-coming': 1 } },
      { text: "사랑이 넘치는 해", scores: { 'love-bloom': 2, 'rest-recharge': 1 } },
      { text: "성장하는 해", scores: { 'career-rising': 2, 'transform-year': 1 } },
      { text: "평온한 해", scores: { 'stable-growth': 2, 'rest-recharge': 1 } },
    ],
  },
  {
    id: 10,
    question: "마지막으로, 2025년 각오 한마디!",
    options: [
      { text: "올해는 진짜 열심히 살 거야!", scores: { 'career-rising': 2, 'challenge-overcome': 1 } },
      { text: "행복하게 살자~", scores: { 'love-bloom': 2, 'rest-recharge': 1 } },
      { text: "부자 되자!", scores: { 'wealth-coming': 2, 'super-lucky': 1 } },
      { text: "건강이 최고!", scores: { 'rest-recharge': 2, 'stable-growth': 1 } },
    ],
  },
];

// 결과 데이터
export const results: Record<LuckType, Luck2025Result> = {
  'super-lucky': {
    type: 'super-lucky',
    title: '대박 운세의 해',
    emoji: '🌟',
    overallLuck: 95,
    description: '2025년은 당신에게 최고의 해가 될 것입니다! 행운의 별이 당신을 비추고 있어, 무엇을 해도 잘 풀리는 황금기가 옵니다. 오랫동안 기다려온 일이 드디어 이루어질 수 있습니다.',
    keywords: ['대박', '행운', '성공', '기회'],
    loveLuck: { score: 90, description: '운명적인 만남이 기다리고 있습니다. 기존 연인과는 더욱 깊어지는 해.' },
    moneyLuck: { score: 88, description: '예상치 못한 횡재수가 있습니다. 투자에도 좋은 시기.' },
    careerLuck: { score: 92, description: '승진, 이직 등 커리어에서 큰 도약이 있을 것입니다.' },
    healthLuck: { score: 75, description: '운이 좋은 만큼 과로 주의. 건강 관리에 신경 쓰세요.' },
    luckyMonth: '3월, 9월',
    unluckyMonth: '6월',
    luckyColor: '골드',
    luckyNumber: 7,
    advice: '기회가 왔을 때 망설이지 마세요. 2025년은 당신의 해입니다!',
    caution: '행운에 취해 방심하지 마세요. 겸손함을 잃지 않는 것이 중요합니다.',
  },
  'career-rising': {
    type: 'career-rising',
    title: '승승장구의 해',
    emoji: '🚀',
    overallLuck: 85,
    description: '2025년은 커리어에서 빛나는 해입니다! 그동안의 노력이 인정받고, 새로운 기회가 찾아옵니다. 목표를 향해 달리면 반드시 좋은 결과가 있을 것입니다.',
    keywords: ['성장', '승진', '인정', '도약'],
    loveLuck: { score: 70, description: '일에 집중하느라 연애는 뒷전일 수 있어요. 균형이 필요합니다.' },
    moneyLuck: { score: 82, description: '실력에 따른 정당한 보상이 따릅니다. 연봉 협상 기회!' },
    careerLuck: { score: 95, description: '능력을 인정받는 해. 승진, 스카우트 제의가 있을 수 있습니다.' },
    healthLuck: { score: 65, description: '번아웃 주의! 일과 휴식의 균형을 맞추세요.' },
    luckyMonth: '1월, 8월',
    unluckyMonth: '4월',
    luckyColor: '네이비',
    luckyNumber: 8,
    advice: '자신감을 갖고 도전하세요. 당신의 능력은 이미 충분합니다.',
    caution: '일에만 몰두하다 소중한 것을 놓치지 마세요. 가끔은 쉬어가기도 필요합니다.',
  },
  'love-bloom': {
    type: 'love-bloom',
    title: '사랑이 꽃피는 해',
    emoji: '💕',
    overallLuck: 82,
    description: '2025년은 사랑이 가득한 해입니다! 솔로라면 운명적인 만남이, 연인이 있다면 관계가 더욱 깊어지는 시기입니다. 마음을 열면 사랑이 찾아올 것입니다.',
    keywords: ['사랑', '인연', '로맨스', '행복'],
    loveLuck: { score: 98, description: '최고의 연애운! 새로운 만남, 결혼, 임신 등 경사가 있을 수 있습니다.' },
    moneyLuck: { score: 70, description: '데이트 비용이 늘어날 수 있어요. 계획적인 소비가 필요합니다.' },
    careerLuck: { score: 72, description: '일보다 사랑이 우선되는 해. 하지만 기본은 지키세요.' },
    healthLuck: { score: 80, description: '사랑하는 사람과 함께하며 심리적으로 안정됩니다.' },
    luckyMonth: '2월, 5월',
    unluckyMonth: '11월',
    luckyColor: '핑크',
    luckyNumber: 2,
    advice: '마음을 열고 적극적으로 다가가세요. 기회는 기다리는 자에게만 오지 않습니다.',
    caution: '사랑에 빠져 현실을 잊지 마세요. 자기 자신도 소중히 여기세요.',
  },
  'wealth-coming': {
    type: 'wealth-coming',
    title: '재물이 들어오는 해',
    emoji: '💰',
    overallLuck: 80,
    description: '2025년은 재물운이 터지는 해입니다! 돈과 관련된 좋은 소식이 있을 것입니다. 투자, 사업, 부업 등에서 성과를 볼 수 있는 시기입니다.',
    keywords: ['재물', '풍요', '투자', '수입'],
    loveLuck: { score: 68, description: '돈보다 마음을 나눌 사람에게 관심을 가져보세요.' },
    moneyLuck: { score: 95, description: '최고의 재물운! 예상치 못한 수입, 투자 성공 가능성 높음.' },
    careerLuck: { score: 78, description: '돈이 되는 일에 기회가 있습니다. 부업 고려해보세요.' },
    healthLuck: { score: 72, description: '돈 벌다 건강 잃지 않도록 주의하세요.' },
    luckyMonth: '4월, 10월',
    unluckyMonth: '7월',
    luckyColor: '그린',
    luckyNumber: 8,
    advice: '기회가 보이면 과감하게 투자하세요. 단, 무리한 투자는 금물!',
    caution: '돈에 눈이 멀어 중요한 관계를 소홀히 하지 마세요.',
  },
  'stable-growth': {
    type: 'stable-growth',
    title: '안정적 성장의 해',
    emoji: '🌱',
    overallLuck: 75,
    description: '2025년은 조용하지만 확실한 성장의 해입니다. 화려하진 않지만 꾸준히 나아가며 기반을 다지는 시기입니다. 급하게 가기보다 천천히, 그러나 확실하게!',
    keywords: ['안정', '성장', '기반', '꾸준함'],
    loveLuck: { score: 72, description: '기존 관계가 더 안정되는 해. 새 만남보다 깊이에 집중.' },
    moneyLuck: { score: 75, description: '큰 횡재보다 꾸준한 저축이 답입니다.' },
    careerLuck: { score: 78, description: '급격한 변화보다 실력을 쌓는 시기로 삼으세요.' },
    healthLuck: { score: 85, description: '규칙적인 생활로 건강이 좋아지는 해입니다.' },
    luckyMonth: '5월, 9월',
    unluckyMonth: '1월',
    luckyColor: '베이지',
    luckyNumber: 4,
    advice: '조급해하지 마세요. 느리지만 확실한 성장이 가장 좋은 것입니다.',
    caution: '너무 안전만 추구하다 기회를 놓칠 수 있어요. 적절한 도전도 필요합니다.',
  },
  'challenge-overcome': {
    type: 'challenge-overcome',
    title: '시련을 이기는 해',
    emoji: '💪',
    overallLuck: 65,
    description: '2025년은 도전이 있지만 극복하는 해입니다. 힘든 순간이 있겠지만, 이를 통해 더 강해지고 성장할 수 있습니다. 포기하지 않으면 반드시 좋은 결과가 있을 것입니다.',
    keywords: ['극복', '도전', '성장', '인내'],
    loveLuck: { score: 60, description: '관계에서 시험이 있을 수 있지만, 이를 통해 더 단단해집니다.' },
    moneyLuck: { score: 58, description: '예상치 못한 지출에 대비하세요. 비상금이 필요합니다.' },
    careerLuck: { score: 68, description: '어려움이 있지만 이를 이겨내면 인정받는 시기.' },
    healthLuck: { score: 70, description: '스트레스 관리가 중요합니다. 멘탈 관리에 신경 쓰세요.' },
    luckyMonth: '6월, 12월',
    unluckyMonth: '3월',
    luckyColor: '레드',
    luckyNumber: 9,
    advice: '힘든 시간도 지나갑니다. 포기하지 않으면 반드시 빛이 보일 것입니다.',
    caution: '혼자 끙끙 앓지 말고 주변에 도움을 요청하세요. 함께하면 이겨낼 수 있습니다.',
  },
  'transform-year': {
    type: 'transform-year',
    title: '변화와 전환의 해',
    emoji: '🦋',
    overallLuck: 78,
    description: '2025년은 인생의 터닝포인트가 될 수 있는 해입니다! 큰 변화가 찾아오고, 새로운 시작을 할 수 있는 시기입니다. 변화를 두려워하지 말고 받아들이세요.',
    keywords: ['변화', '전환', '새 출발', '도전'],
    loveLuck: { score: 75, description: '새로운 인연이 들어오거나, 기존 관계에 변화가 있을 수 있습니다.' },
    moneyLuck: { score: 72, description: '수입원의 변화가 있을 수 있어요. 새로운 기회를 잡으세요.' },
    careerLuck: { score: 80, description: '이직, 전직, 창업 등 커리어 전환의 좋은 시기입니다.' },
    healthLuck: { score: 78, description: '새로운 운동이나 건강 습관을 시작하기 좋은 해.' },
    luckyMonth: '3월, 7월',
    unluckyMonth: '9월',
    luckyColor: '퍼플',
    luckyNumber: 5,
    advice: '변화는 성장의 기회입니다. 두려워하지 말고 새로운 것에 도전하세요.',
    caution: '너무 급격한 변화는 피하세요. 한 번에 하나씩 천천히 바꿔나가세요.',
  },
  'rest-recharge': {
    type: 'rest-recharge',
    title: '충전과 회복의 해',
    emoji: '🔋',
    overallLuck: 70,
    description: '2025년은 쉬어가며 재충전하는 해입니다. 그동안 열심히 달려왔다면 이제 잠시 멈춰 숨을 고를 시간입니다. 휴식도 중요한 성장의 일부입니다.',
    keywords: ['휴식', '충전', '회복', '힐링'],
    loveLuck: { score: 70, description: '조용하고 편안한 연애가 좋습니다. 무리하지 마세요.' },
    moneyLuck: { score: 68, description: '큰 소비보다 저축과 절약이 필요한 시기입니다.' },
    careerLuck: { score: 65, description: '급하게 앞서기보다 실력을 다지는 시간으로 활용하세요.' },
    healthLuck: { score: 90, description: '건강을 되찾고 에너지를 충전하기 좋은 해입니다.' },
    luckyMonth: '8월, 11월',
    unluckyMonth: '2월',
    luckyColor: '스카이블루',
    luckyNumber: 3,
    advice: '쉬는 것도 능력입니다. 충분히 쉬어야 다시 달릴 수 있어요.',
    caution: '너무 오래 쉬다 보면 무기력해질 수 있어요. 적절한 활동도 필요합니다.',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): Luck2025Result {
  const scores: Record<LuckType, number> = {
    'super-lucky': 0,
    'career-rising': 0,
    'love-bloom': 0,
    'wealth-coming': 0,
    'stable-growth': 0,
    'challenge-overcome': 0,
    'transform-year': 0,
    'rest-recharge': 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as LuckType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: LuckType = 'stable-growth';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as LuckType;
    }
  });

  return results[resultType];
}
