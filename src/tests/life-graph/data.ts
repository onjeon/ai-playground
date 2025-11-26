// 인생 그래프 테스트 - 당신의 인생 패턴은?

export const questions = [
  {
    id: 1,
    question: "어린 시절(0-12세)은 어땠나요?",
    options: [
      { text: "매우 행복했다", type: "happy_early", score: 5 },
      { text: "대체로 좋았다", type: "stable_early", score: 4 },
      { text: "보통이었다", type: "normal_early", score: 3 },
      { text: "힘든 시기였다", type: "tough_early", score: 1 },
    ],
  },
  {
    id: 2,
    question: "학창시절(13-18세)은?",
    options: [
      { text: "인생 최고의 시절", type: "peak_teen", score: 5 },
      { text: "좋았던 편", type: "good_teen", score: 4 },
      { text: "평범했다", type: "normal_teen", score: 3 },
      { text: "암흑기였다", type: "dark_teen", score: 1 },
    ],
  },
  {
    id: 3,
    question: "20대 초반은?",
    options: [
      { text: "도전과 성장의 시기", type: "growth", score: 5 },
      { text: "방황했지만 배웠다", type: "learning", score: 4 },
      { text: "흘러가는 대로", type: "flowing", score: 3 },
      { text: "힘들었다", type: "struggle", score: 1 },
    ],
  },
  {
    id: 4,
    question: "인생에서 가장 행복했던 때는?",
    options: [
      { text: "어린 시절", type: "early_peak", score: 1 },
      { text: "학창 시절", type: "teen_peak", score: 2 },
      { text: "20대", type: "young_peak", score: 3 },
      { text: "지금이 최고", type: "now_peak", score: 5 },
    ],
  },
  {
    id: 5,
    question: "인생에서 가장 힘들었던 때는?",
    options: [
      { text: "어린 시절", type: "early_low", score: 1 },
      { text: "학창 시절", type: "teen_low", score: 2 },
      { text: "20대", type: "young_low", score: 3 },
      { text: "최근", type: "recent_low", score: 4 },
    ],
  },
  {
    id: 6,
    question: "현재 삶의 만족도는?",
    options: [
      { text: "매우 만족", type: "very_satisfied", score: 5 },
      { text: "대체로 만족", type: "satisfied", score: 4 },
      { text: "보통", type: "normal", score: 3 },
      { text: "불만족", type: "dissatisfied", score: 1 },
    ],
  },
  {
    id: 7,
    question: "미래에 대한 기대는?",
    options: [
      { text: "매우 기대된다", type: "hopeful", score: 5 },
      { text: "긍정적이다", type: "positive", score: 4 },
      { text: "모르겠다", type: "uncertain", score: 2 },
      { text: "걱정된다", type: "worried", score: 1 },
    ],
  },
  {
    id: 8,
    question: "인생의 전환점이 된 사건은?",
    options: [
      { text: "긍정적인 기회였다", type: "positive_turn", score: 5 },
      { text: "힘들었지만 성장했다", type: "growth_turn", score: 4 },
      { text: "별다른 전환점 없음", type: "stable", score: 3 },
      { text: "아직 회복 중", type: "recovering", score: 1 },
    ],
  },
  {
    id: 9,
    question: "인생의 굴곡은?",
    options: [
      { text: "꾸준히 상승 중", type: "rising", score: 5 },
      { text: "오르락내리락", type: "wave", score: 3 },
      { text: "평탄하다", type: "flat", score: 2 },
      { text: "하락하는 느낌", type: "declining", score: 1 },
    ],
  },
  {
    id: 10,
    question: "인생의 목표 달성도는?",
    options: [
      { text: "순조롭게 달성 중", type: "achieving", score: 5 },
      { text: "천천히 가는 중", type: "slow", score: 4 },
      { text: "목표가 바뀌는 중", type: "changing", score: 3 },
      { text: "아직 멀었다", type: "far", score: 1 },
    ],
  },
  {
    id: 11,
    question: "지금까지 인생에 점수를 준다면?",
    options: [
      { text: "90점 이상", type: "excellent", score: 5 },
      { text: "70-89점", type: "good", score: 4 },
      { text: "50-69점", type: "average", score: 3 },
      { text: "50점 미만", type: "low", score: 1 },
    ],
  },
  {
    id: 12,
    question: "10년 후 나는?",
    options: [
      { text: "지금보다 훨씬 행복할 것", type: "much_better", score: 5 },
      { text: "조금 더 나아질 것", type: "better", score: 4 },
      { text: "비슷할 것", type: "same", score: 3 },
      { text: "불확실하다", type: "uncertain", score: 2 },
    ],
  },
];

export interface LifeGraphResult {
  type: string;
  title: string;
  emoji: string;
  graphPattern: string;
  description: string;
  currentPhase: string;
  pastAnalysis: string;
  futureOutlook: string;
  lifeScore: number;
  keyMoments: string[];
  strengths: string[];
  advice: string[];
  affirmation: string;
}

const resultTypes: Record<string, LifeGraphResult> = {
  ascending: {
    type: 'ascending',
    title: '상승 곡선형',
    emoji: '📈',
    graphPattern: '꾸준히 상승하는 그래프',
    description: '당신의 인생은 꾸준히 좋아지고 있어요! 과거의 경험이 현재의 기반이 되고, 미래는 더 밝을 거예요. 긍정적인 성장 패턴을 보여주고 있습니다.',
    currentPhase: '성장과 발전의 시기',
    pastAnalysis: '어려움을 딛고 성장해왔습니다',
    futureOutlook: '매우 긍정적, 계속 상승할 것',
    lifeScore: 85,
    keyMoments: ['성장의 전환점', '깨달음의 순간', '도약의 기회'],
    strengths: ['회복력', '성장 마인드셋', '긍정성'],
    advice: ['현재 모멘텀 유지하기', '감사하는 마음', '다음 목표 설정'],
    affirmation: '당신은 계속 성장하고 있습니다. 믿음을 가지세요!',
  },
  wave: {
    type: 'wave',
    title: '파도형',
    emoji: '🌊',
    graphPattern: '오르락내리락 파도 같은 그래프',
    description: '당신의 인생은 파도처럼 굴곡이 있어요. 좋을 때와 힘들 때가 번갈아 오지만, 그게 인생이에요. 매번 더 강해지고 있습니다.',
    currentPhase: '새로운 파도를 준비하는 시기',
    pastAnalysis: '기복이 있었지만 그게 당신을 만들었습니다',
    futureOutlook: '굴곡은 있겠지만 대처할 수 있음',
    lifeScore: 70,
    keyMoments: ['높은 파도 위', '골짜기에서 버틴 순간', '다시 일어선 때'],
    strengths: ['적응력', '회복력', '경험'],
    advice: ['좋을 때 대비하기', '힘들 때 버티기', '패턴 인식하기'],
    affirmation: '파도가 있어야 서핑을 할 수 있어요. 당신은 서퍼입니다!',
  },
  plateau: {
    type: 'plateau',
    title: '고원형',
    emoji: '🏔️',
    graphPattern: '안정적인 평탄한 그래프',
    description: '당신의 인생은 안정적인 고원 위에 있어요. 극적인 변화는 없지만, 안정감 있는 삶을 유지하고 있습니다. 때로는 변화가 필요할 수도 있어요.',
    currentPhase: '안정과 유지의 시기',
    pastAnalysis: '크게 좋지도 나쁘지도 않은 안정적인 삶',
    futureOutlook: '안정적이지만 새로운 도전도 고려',
    lifeScore: 65,
    keyMoments: ['안정을 찾은 순간', '균형을 이룬 때'],
    strengths: ['안정감', '꾸준함', '인내심'],
    advice: ['새로운 도전 시도', '작은 변화 만들기', '목표 재설정'],
    affirmation: '안정은 소중해요. 하지만 가끔은 새로운 봉우리를 향해 도전해보세요!',
  },
  valley: {
    type: 'valley',
    title: '골짜기 탈출형',
    emoji: '🌅',
    graphPattern: '힘든 시기를 지나 상승하는 그래프',
    description: '당신은 힘든 시기를 지나고 있거나 막 벗어나고 있어요. 골짜기가 깊을수록 정상은 더 빛날 거예요. 당신은 강합니다.',
    currentPhase: '회복과 재도약의 시기',
    pastAnalysis: '어려운 시기를 견뎌왔습니다',
    futureOutlook: '힘들었던 만큼 좋아질 것',
    lifeScore: 55,
    keyMoments: ['가장 힘들었던 순간', '버틴 것 자체가 승리', '빛이 보이기 시작'],
    strengths: ['인내', '강인함', '생존력'],
    advice: ['자신을 인정하기', '작은 것에 감사', '도움 받기 주저하지 않기'],
    affirmation: '골짜기를 지나는 중이에요. 곧 해가 뜰 거예요. 조금만 더 버텨요!',
  },
  earlyPeak: {
    type: 'earlyPeak',
    title: '과거 전성기형',
    emoji: '🌟',
    graphPattern: '과거에 정점을 찍은 그래프',
    description: '당신은 과거에 빛나는 시절이 있었어요. 그 기억이 소중하지만, 새로운 정점을 만들 수 있어요. 제2의 전성기는 당신 손에 있습니다.',
    currentPhase: '새로운 정점을 준비하는 시기',
    pastAnalysis: '빛나던 시절의 경험이 자산입니다',
    futureOutlook: '새로운 전성기를 만들 수 있음',
    lifeScore: 60,
    keyMoments: ['황금기', '빛나던 순간', '성취의 기쁨'],
    strengths: ['경험', '가능성 확인', '자신감의 근거'],
    advice: ['과거에 머물지 않기', '새 목표 설정', '다른 영역 도전'],
    affirmation: '과거의 빛남은 당신이 다시 빛날 수 있다는 증거예요!',
  },
};

export function calculateLifeGraphResult(answers: number[]): LifeGraphResult {
  let totalScore = 0;
  let earlyScore = 0;
  let recentScore = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const score = question.options[answerIndex].score;
      totalScore += score;
      
      if (questionIndex < 4) earlyScore += score;
      if (questionIndex >= 5) recentScore += score;
    }
  });

  const maxScore = questions.length * 5;
  const percentage = (totalScore / maxScore) * 100;

  // 패턴 분석
  if (recentScore > earlyScore && percentage >= 70) {
    return resultTypes.ascending;
  } else if (earlyScore > recentScore && percentage < 60) {
    return resultTypes.earlyPeak;
  } else if (percentage < 45) {
    return resultTypes.valley;
  } else if (percentage >= 50 && percentage < 65) {
    return resultTypes.plateau;
  } else {
    return resultTypes.wave;
  }
}
