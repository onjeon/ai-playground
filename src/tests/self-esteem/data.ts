// 자존감 테스트 - 나의 자존감 수준과 유형 분석

export const questions = [
  {
    id: 1,
    question: "거울 속 나를 볼 때 어떤 생각이 드나요?",
    options: [
      { text: "괜찮은데? 나 좀 멋진걸", score: 5 },
      { text: "오늘은 좀 나은 것 같아", score: 4 },
      { text: "별로다... 어디가 문제지?", score: 2 },
      { text: "보기 싫어서 거울 자주 안 봄", score: 1 },
    ],
  },
  {
    id: 2,
    question: "칭찬을 받으면?",
    options: [
      { text: "고마워! (기분 좋게 받아들임)", score: 5 },
      { text: "에이~ 뭘 (내심 기쁨)", score: 4 },
      { text: "진심일까? 빈말 아닐까?", score: 2 },
      { text: "나 같은 게 뭘... (부정)", score: 1 },
    ],
  },
  {
    id: 3,
    question: "실수를 했을 때 나는?",
    options: [
      { text: "누구나 실수해, 다음엔 잘하자", score: 5 },
      { text: "좀 아쉽지만 괜찮아", score: 4 },
      { text: "역시 나는 안 되나봐...", score: 2 },
      { text: "자책이 며칠간 계속됨", score: 1 },
    ],
  },
  {
    id: 4,
    question: "다른 사람과 비교될 때?",
    options: [
      { text: "나는 나, 남은 남이지", score: 5 },
      { text: "자극받아서 더 열심히 해야지", score: 4 },
      { text: "나만 못한 것 같아 우울해짐", score: 2 },
      { text: "비교당하면 무너짐", score: 1 },
    ],
  },
  {
    id: 5,
    question: "새로운 도전을 앞두고?",
    options: [
      { text: "해봐야 알지, 일단 도전!", score: 5 },
      { text: "좀 걱정되지만 해볼게", score: 4 },
      { text: "내가 할 수 있을까...", score: 2 },
      { text: "분명 실패할 거야, 안 해", score: 1 },
    ],
  },
  {
    id: 6,
    question: "누군가 나를 비판하면?",
    options: [
      { text: "참고할 건 참고하고 넘김", score: 5 },
      { text: "좀 상처받지만 괜찮아", score: 4 },
      { text: "한동안 그 말이 머릿속을 맴돌음", score: 2 },
      { text: "나라는 사람 자체가 부정당한 느낌", score: 1 },
    ],
  },
  {
    id: 7,
    question: "내 의견이 다수와 다를 때?",
    options: [
      { text: "당당하게 내 의견을 말함", score: 5 },
      { text: "조심스럽게 의견을 제시함", score: 4 },
      { text: "내가 틀린 건가? 하고 의심", score: 2 },
      { text: "그냥 다수 의견에 따름", score: 1 },
    ],
  },
  {
    id: 8,
    question: "나의 성과에 대해?",
    options: [
      { text: "열심히 한 만큼 자랑스러워", score: 5 },
      { text: "나름 잘했지만 더 잘할 수 있었어", score: 4 },
      { text: "운이 좋았던 거야", score: 2 },
      { text: "남들은 더 잘하는데...", score: 1 },
    ],
  },
  {
    id: 9,
    question: "모임에서 나는?",
    options: [
      { text: "편하게 대화하고 즐김", score: 5 },
      { text: "아는 사람들이랑은 괜찮아", score: 4 },
      { text: "사람들이 나를 어떻게 볼지 신경 쓰임", score: 2 },
      { text: "나 같은 사람이 끼어도 되나...", score: 1 },
    ],
  },
  {
    id: 10,
    question: "연애/관계에서 나는?",
    options: [
      { text: "나도 충분히 사랑받을 자격이 있어", score: 5 },
      { text: "노력하면 사랑받을 수 있어", score: 4 },
      { text: "상대가 더 좋은 사람 만날 수 있을 텐데", score: 2 },
      { text: "나 같은 사람을 좋아할 리 없어", score: 1 },
    ],
  },
  {
    id: 11,
    question: "하루를 마무리할 때 드는 생각은?",
    options: [
      { text: "오늘도 나름 잘 보냈어", score: 5 },
      { text: "평범한 하루였네", score: 4 },
      { text: "오늘 뭘 했지... 허무해", score: 2 },
      { text: "또 아무것도 못 했어, 난 왜 이럴까", score: 1 },
    ],
  },
  {
    id: 12,
    question: "내 미래에 대해?",
    options: [
      { text: "잘 될 거야, 나를 믿어", score: 5 },
      { text: "열심히 하면 괜찮겠지", score: 4 },
      { text: "잘 모르겠어, 불안해", score: 2 },
      { text: "뭘 해도 안 될 것 같아", score: 1 },
    ],
  },
  {
    id: 13,
    question: "나의 단점에 대해?",
    options: [
      { text: "있지, 근데 장점도 많아", score: 5 },
      { text: "고치려고 노력 중이야", score: 4 },
      { text: "단점이 너무 많아...", score: 2 },
      { text: "장점보다 단점이 훨씬 많음", score: 1 },
    ],
  },
  {
    id: 14,
    question: "도움을 요청하는 것은?",
    options: [
      { text: "필요하면 당연히 요청해", score: 5 },
      { text: "좀 어렵지만 필요하면 해", score: 4 },
      { text: "부담 주는 것 같아 어려워", score: 2 },
      { text: "절대 안 해, 민폐니까", score: 1 },
    ],
  },
  {
    id: 15,
    question: "'나는 가치 있는 사람이다'라는 말에?",
    options: [
      { text: "당연하지! 나 소중해", score: 5 },
      { text: "음... 그런 것 같기도", score: 4 },
      { text: "잘 모르겠어", score: 2 },
      { text: "전혀 공감이 안 돼", score: 1 },
    ],
  },
];

export interface SelfEsteemResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  score: number;
  maxScore: number;
  percentage: number;
  level: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
  growthTips: string[];
  dailyAffirmations: string[];
  recommendedActions: string[];
  warningSign: string;
}

function getResultByScore(percentage: number): Omit<SelfEsteemResult, 'score' | 'maxScore' | 'percentage'> {
  if (percentage >= 85) {
    return {
      type: 'high',
      title: '자존감 부자',
      emoji: '👑',
      subtitle: '나를 사랑하는 달인',
      description: '당신은 자기 자신을 있는 그대로 사랑하고 인정하는 높은 자존감의 소유자입니다! 실패해도 크게 흔들리지 않고, 타인의 평가에 휘둘리지 않아요. 자신의 가치를 알고, 당당하게 살아가는 멋진 사람입니다.',
      level: '매우 높음',
      characteristics: ['자기 확신', '긍정적 자아상', '회복탄력성', '독립적'],
      strengths: ['자기 수용', '건강한 자신감', '안정적 정서', '주체적 삶'],
      challenges: ['자만으로 보일 수 있음', '타인 이해 부족할 수 있음'],
      growthTips: ['겸손함도 챙기기', '타인 공감하기', '현재 상태 유지'],
      dailyAffirmations: ['나는 있는 그대로 충분해', '나는 사랑받을 자격이 있어', '나의 가치는 변하지 않아'],
      recommendedActions: ['멘토 역할 해보기', '주변 사람 응원하기', '새로운 도전 시작'],
      warningSign: '자신감과 자만심의 경계를 잘 지키세요',
    };
  } else if (percentage >= 65) {
    return {
      type: 'stable',
      title: '안정적 자존감',
      emoji: '🌟',
      subtitle: '균형 잡힌 자기 인식',
      description: '당신은 대체로 건강한 자존감을 가지고 있어요. 때로는 흔들릴 수 있지만, 금방 회복하는 힘이 있습니다. 자신의 장단점을 균형 있게 바라보고, 성장하려는 의지가 있어요.',
      level: '양호',
      characteristics: ['균형감', '자기 인식', '성장 지향', '적응력'],
      strengths: ['현실적 자기 평가', '발전 의지', '회복력', '유연성'],
      challenges: ['가끔 흔들림', '외부 평가에 영향받음'],
      growthTips: ['성공 경험 기록하기', '자기 칭찬 연습', '부정적 생각 전환'],
      dailyAffirmations: ['나는 매일 성장하고 있어', '나는 충분히 잘하고 있어', '실수해도 괜찮아'],
      recommendedActions: ['강점 목록 만들기', '작은 성공 축하하기', '긍정 일기 쓰기'],
      warningSign: '힘들 때 자신을 너무 몰아세우지 마세요',
    };
  } else if (percentage >= 45) {
    return {
      type: 'fluctuating',
      title: '롤러코스터 자존감',
      emoji: '🎢',
      subtitle: '기복이 있는 상태',
      description: '당신의 자존감은 상황에 따라 오르락내리락합니다. 잘 될 때는 자신감이 넘치지만, 조금만 어려워지면 쉽게 무너져요. 타인의 평가나 외부 상황에 많이 영향을 받는 편입니다.',
      level: '보통',
      characteristics: ['기복 있음', '외부 의존적', '민감함', '불안정'],
      strengths: ['자각 능력', '감수성', '발전 가능성'],
      challenges: ['일관성 부족', '타인 시선 의식', '쉽게 상처받음'],
      growthTips: ['자기 기준 세우기', '외부 평가 거리두기', '꾸준한 자기 돌봄'],
      dailyAffirmations: ['내 가치는 상황에 따라 변하지 않아', '나는 나답게 살 거야', '타인의 말이 나를 정의하지 않아'],
      recommendedActions: ['성공 일기 쓰기', '자기 대화 연습', '지지 그룹 찾기'],
      warningSign: '자존감이 낮아질 때 혼자 끙끙 앓지 마세요',
    };
  } else {
    return {
      type: 'low',
      title: '회복이 필요한 자존감',
      emoji: '💝',
      subtitle: '지금은 힘들지만 괜찮아질 거예요',
      description: '지금 당신의 자존감은 많이 낮은 상태입니다. 자신을 부정적으로 보고, 스스로를 가치 없다고 느끼고 있어요. 하지만 이건 영원한 게 아니에요. 작은 것부터 자신을 인정하는 연습을 시작해보세요.',
      level: '낮음',
      characteristics: ['자기 비하', '부정적 자아상', '의존적', '회피적'],
      strengths: ['변화 의지', '감수성', '타인 이해'],
      challenges: ['자기 부정', '비교 습관', '완벽주의', '자책'],
      growthTips: ['작은 것부터 인정하기', '비교 멈추기', '전문 상담 고려'],
      dailyAffirmations: ['나는 있는 그대로 충분해', '나도 행복할 자격이 있어', '나는 조금씩 나아지고 있어'],
      recommendedActions: ['셀프 케어 루틴 만들기', '전문가 상담', '지지자 찾기', '작은 성공 경험하기'],
      warningSign: '힘들면 꼭 전문가의 도움을 받으세요. 혼자 감당하지 않아도 돼요.',
    };
  }
}

export function calculateSelfEsteemResult(answers: number[]): SelfEsteemResult {
  let totalScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const result = getResultByScore(percentage);

  return {
    ...result,
    score: totalScore,
    maxScore,
    percentage,
  };
}
