// 연말 결산 테스트 - 올해의 나는 어떤 한 해를 보냈을까?

export const questions = [
  {
    id: 1,
    question: "올해 가장 많이 느꼈던 감정은?",
    options: [
      { text: "성취감과 뿌듯함", scores: { achiever: 3, growth: 1 } },
      { text: "도전과 설렘", scores: { adventurer: 3, growth: 1 } },
      { text: "피곤함과 지침", scores: { survivor: 3, reflector: 1 } },
      { text: "평온함과 안정감", scores: { balancer: 3, healer: 1 } },
      { text: "혼란과 방황", scores: { seeker: 3, reflector: 1 } },
    ],
  },
  {
    id: 2,
    question: "올해 세웠던 목표는?",
    options: [
      { text: "대부분 달성했다!", scores: { achiever: 3, growth: 1 } },
      { text: "절반 정도 달성", scores: { balancer: 3, growth: 1 } },
      { text: "목표가 바뀌어서 새로운 것을 했다", scores: { adventurer: 3, seeker: 1 } },
      { text: "생존하는 것 자체가 목표였다", scores: { survivor: 3, healer: 1 } },
      { text: "뚜렷한 목표가 없었다", scores: { seeker: 3, reflector: 1 } },
    ],
  },
  {
    id: 3,
    question: "올해 인간관계는 어땠나요?",
    options: [
      { text: "소중한 사람들과 더 깊어졌다", scores: { healer: 3, balancer: 1 } },
      { text: "새로운 인연을 많이 만났다", scores: { adventurer: 3, growth: 1 } },
      { text: "정리가 필요한 관계를 정리했다", scores: { growth: 3, reflector: 1 } },
      { text: "사람에게 지쳐서 혼자 시간이 많았다", scores: { survivor: 3, seeker: 1 } },
      { text: "큰 변화 없이 유지했다", scores: { balancer: 3, healer: 1 } },
    ],
  },
  {
    id: 4,
    question: "올해 가장 큰 변화는?",
    options: [
      { text: "직장/학교에서의 성장", scores: { achiever: 3, growth: 1 } },
      { text: "새로운 취미/관심사 발견", scores: { adventurer: 3, growth: 1 } },
      { text: "내면의 성숙과 깨달음", scores: { reflector: 3, growth: 1 } },
      { text: "생활 패턴/환경의 변화", scores: { seeker: 3, balancer: 1 } },
      { text: "특별한 변화 없이 안정적", scores: { balancer: 3, healer: 1 } },
    ],
  },
  {
    id: 5,
    question: "올해 자신에게 하고 싶은 말은?",
    options: [
      { text: "정말 수고했어, 대단해!", scores: { achiever: 3, survivor: 1 } },
      { text: "새로운 도전 멋졌어!", scores: { adventurer: 3, growth: 1 } },
      { text: "잘 버텨줬어, 고마워", scores: { survivor: 3, healer: 1 } },
      { text: "내년엔 더 잘할 수 있어", scores: { growth: 3, seeker: 1 } },
      { text: "이대로도 충분해, 괜찮아", scores: { balancer: 3, healer: 1 } },
    ],
  },
  {
    id: 6,
    question: "올해 가장 후회되는 것은?",
    options: [
      { text: "시작하지 못한 것들", scores: { seeker: 3, growth: 1 } },
      { text: "건강 관리를 소홀히 한 것", scores: { survivor: 3, healer: 1 } },
      { text: "인간관계에서의 실수", scores: { reflector: 3, healer: 1 } },
      { text: "기회를 놓친 것", scores: { adventurer: 3, achiever: 1 } },
      { text: "딱히 후회는 없다", scores: { balancer: 3, achiever: 1 } },
    ],
  },
  {
    id: 7,
    question: "올해 돈 관리는 어땠나요?",
    options: [
      { text: "목표한 만큼 저축했다", scores: { achiever: 3, balancer: 1 } },
      { text: "경험에 투자를 많이 했다", scores: { adventurer: 3, growth: 1 } },
      { text: "생활비가 빠듯했다", scores: { survivor: 3, seeker: 1 } },
      { text: "계획 없이 썼지만 후회 없다", scores: { balancer: 3, healer: 1 } },
      { text: "돈 생각할 여유가 없었다", scores: { survivor: 3, reflector: 1 } },
    ],
  },
  {
    id: 8,
    question: "내년에 가장 하고 싶은 것은?",
    options: [
      { text: "커리어에서 한 단계 성장", scores: { achiever: 3, growth: 1 } },
      { text: "새로운 경험과 여행", scores: { adventurer: 3, seeker: 1 } },
      { text: "건강과 휴식 챙기기", scores: { healer: 3, survivor: 1 } },
      { text: "나 자신을 더 알아가기", scores: { reflector: 3, growth: 1 } },
      { text: "지금처럼 꾸준히 살기", scores: { balancer: 3, healer: 1 } },
    ],
  },
  {
    id: 9,
    question: "올해를 한 단어로 표현한다면?",
    options: [
      { text: "도전", scores: { adventurer: 3, growth: 1 } },
      { text: "성장", scores: { growth: 3, achiever: 1 } },
      { text: "회복", scores: { healer: 3, survivor: 1 } },
      { text: "탐색", scores: { seeker: 3, reflector: 1 } },
      { text: "균형", scores: { balancer: 3, healer: 1 } },
    ],
  },
  {
    id: 10,
    question: "올해의 점수를 매긴다면?",
    options: [
      { text: "90점 이상! 최고의 해", scores: { achiever: 3, growth: 1 } },
      { text: "70-80점, 만족스러운 해", scores: { balancer: 3, growth: 1 } },
      { text: "60점대, 아쉬움이 남는 해", scores: { seeker: 3, reflector: 1 } },
      { text: "50점, 그냥 그런 해", scores: { survivor: 3, balancer: 1 } },
      { text: "점수보다 경험이 중요해", scores: { reflector: 3, healer: 1 } },
    ],
  },
];

export interface YearEndReviewResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  yearSummary: string;
  achievements: string[];
  lessonsLearned: string[];
  nextYearAdvice: string;
  luckyMonth: string;
  keyword2025: string;
  celebMessage: string;
  compatibility: string[];
}

export const results: Record<string, YearEndReviewResult> = {
  achiever: {
    type: "achiever",
    title: "목표 달성자",
    emoji: "🏆",
    subtitle: "세웠던 목표를 이뤄낸 성취의 해!",
    description: "올해 당신은 정말 열심히 달려왔어요! 세웠던 목표를 하나하나 이뤄나가며 성취감을 맛본 한 해였습니다. 일이든 공부든, 혹은 개인적인 목표든 당신의 노력은 결실을 맺었어요. 스스로를 칭찬해주세요!",
    yearSummary: "목표를 향해 꾸준히 노력하고 결과를 만들어낸 알찬 한 해",
    achievements: [
      "설정한 목표의 대부분을 달성함",
      "자기 분야에서의 성장과 발전",
      "주변의 인정과 신뢰를 얻음",
    ],
    lessonsLearned: [
      "꾸준함의 힘을 알게 됨",
      "목표 설정의 중요성 깨달음",
      "자신의 능력에 대한 자신감 상승",
    ],
    nextYearAdvice: "성취도 좋지만, 내년에는 가끔 쉬어가는 여유도 가져보세요. 번아웃 없이 지속 가능한 성장이 진정한 성공이에요.",
    luckyMonth: "3월, 새로운 기회가 찾아올 거예요",
    keyword2025: "균형",
    celebMessage: "당신의 노력과 성취에 박수를 보내요! 🎉",
    compatibility: ["성장러", "균형주의자"],
  },
  adventurer: {
    type: "adventurer",
    title: "도전하는 모험가",
    emoji: "🚀",
    subtitle: "새로운 것에 뛰어든 도전의 해!",
    description: "올해 당신은 안전지대를 벗어나 새로운 도전을 했어요! 두려움을 무릅쓰고 시작한 것들이 당신을 한층 성장시켰습니다. 결과와 상관없이 도전 자체가 빛나는 경험이었어요.",
    yearSummary: "새로운 시도와 경험으로 가득 찬 모험의 한 해",
    achievements: [
      "새로운 분야에 도전함",
      "comfort zone을 벗어난 경험",
      "다양한 사람들을 만남",
    ],
    lessonsLearned: [
      "실패해도 괜찮다는 것",
      "새로운 경험이 주는 성장",
      "두려움을 넘어서는 용기",
    ],
    nextYearAdvice: "도전 정신은 유지하되, 하나에 깊이 집중하는 시간도 가져보세요. 넓이와 깊이의 균형이 필요해요.",
    luckyMonth: "5월, 큰 모험이 성공할 때",
    keyword2025: "집중",
    celebMessage: "용감한 도전에 경의를 표해요! 🌟",
    compatibility: ["성장러", "탐색가"],
  },
  survivor: {
    type: "survivor",
    title: "끈질긴 생존자",
    emoji: "💪",
    subtitle: "힘든 시간을 버텨낸 인내의 해!",
    description: "올해는 쉽지 않은 한 해였을 거예요. 하지만 당신은 포기하지 않고 여기까지 왔습니다. 그 자체가 대단한 성취예요. 버티는 것도 능력이고, 당신은 그것을 해냈어요.",
    yearSummary: "어려움 속에서도 포기하지 않고 버텨낸 한 해",
    achievements: [
      "힘든 상황에서 무너지지 않음",
      "자신의 한계를 알게 됨",
      "진정한 강인함을 발견함",
    ],
    lessonsLearned: [
      "도움을 요청해도 괜찮다는 것",
      "쉬어가는 것의 중요성",
      "작은 것에 감사하는 마음",
    ],
    nextYearAdvice: "내년은 당신이 회복하고 충전하는 해가 되길. 자신을 더 아끼고 돌봐주세요. 당신은 충분히 가치 있는 사람이에요.",
    luckyMonth: "7월, 휴식이 힐링이 될 때",
    keyword2025: "회복",
    celebMessage: "여기까지 버텨준 당신, 정말 수고했어요 💝",
    compatibility: ["힐러", "균형주의자"],
  },
  growth: {
    type: "growth",
    title: "성장러",
    emoji: "🌱",
    subtitle: "내면과 외면 모두 성장한 해!",
    description: "올해 당신은 눈에 띄게 성장했어요! 새로운 것을 배우고, 잘못을 인정하고, 더 나은 사람이 되기 위해 노력했습니다. 연초의 당신과 지금의 당신은 분명히 달라요.",
    yearSummary: "배움과 깨달음으로 한 단계 레벨업한 한 해",
    achievements: [
      "새로운 스킬이나 지식 습득",
      "과거의 실수에서 교훈을 얻음",
      "더 나은 버전의 나로 변화",
    ],
    lessonsLearned: [
      "성장에는 불편함이 따른다는 것",
      "실패도 성장의 일부",
      "배움에는 끝이 없다는 것",
    ],
    nextYearAdvice: "성장도 좋지만, 지금의 자신도 충분히 괜찮다는 걸 기억하세요. 완벽하지 않아도 사랑받을 자격이 있어요.",
    luckyMonth: "9월, 노력의 결실을 볼 때",
    keyword2025: "완성",
    celebMessage: "꾸준히 성장하는 당신이 자랑스러워요! 🌿",
    compatibility: ["목표 달성자", "도전하는 모험가"],
  },
  balancer: {
    type: "balancer",
    title: "균형주의자",
    emoji: "⚖️",
    subtitle: "일상을 안정적으로 유지한 해!",
    description: "올해 당신은 큰 파도 없이 안정적인 한 해를 보냈어요. 화려하지 않아도, 꾸준히 일상을 유지하는 것도 대단한 능력이에요. 균형 잡힌 삶을 사는 당신이 멋져요.",
    yearSummary: "안정과 평화 속에서 일상을 지켜낸 한 해",
    achievements: [
      "일과 생활의 균형 유지",
      "소중한 관계 지속",
      "무리 없는 안정적인 생활",
    ],
    lessonsLearned: [
      "평범한 일상의 소중함",
      "균형을 유지하는 것의 가치",
      "작은 행복의 중요성",
    ],
    nextYearAdvice: "안정도 좋지만, 가끔은 작은 변화를 시도해보세요. 새로운 자극이 삶에 활력을 줄 거예요.",
    luckyMonth: "4월, 새로운 시작에 좋은 때",
    keyword2025: "도전",
    celebMessage: "꾸준함의 힘을 보여준 당신, 멋져요! ✨",
    compatibility: ["힐러", "끈질긴 생존자"],
  },
  seeker: {
    type: "seeker",
    title: "탐색가",
    emoji: "🔍",
    subtitle: "방향을 찾아 헤맸던 탐색의 해!",
    description: "올해는 '나는 뭘 원하는 걸까?' 하는 질문을 많이 했을 거예요. 방황처럼 보여도, 그것은 자신을 찾아가는 중요한 과정이에요. 길을 찾고 있다는 건 포기하지 않았다는 뜻이니까요.",
    yearSummary: "자신의 방향과 정체성을 탐색한 한 해",
    achievements: [
      "자기 자신에 대해 더 알게 됨",
      "원하지 않는 것을 알게 됨",
      "새로운 가능성을 발견함",
    ],
    lessonsLearned: [
      "답을 못 찾아도 괜찮다는 것",
      "과정도 의미 있다는 것",
      "서두르지 않아도 된다는 것",
    ],
    nextYearAdvice: "정답을 찾으려 하기보다, 지금 하고 싶은 것을 해보세요. 행동하다 보면 방향이 보일 거예요.",
    luckyMonth: "2월, 힌트를 얻을 수 있는 때",
    keyword2025: "행동",
    celebMessage: "길을 찾는 여정도 가치 있어요. 응원해요! 🧭",
    compatibility: ["도전하는 모험가", "성찰가"],
  },
  healer: {
    type: "healer",
    title: "힐러",
    emoji: "💚",
    subtitle: "자신과 주변을 돌본 치유의 해!",
    description: "올해 당신은 자신을 돌보고, 주변 사람들에게 따뜻함을 나눴어요. 힘든 사람에게 위로가 되어주고, 자신도 쉬어가는 법을 배웠습니다. 당신의 따뜻한 에너지가 많은 사람을 살렸어요.",
    yearSummary: "자기 자신과 주변을 돌보며 회복한 한 해",
    achievements: [
      "자기 돌봄의 중요성 실천",
      "주변 사람들에게 위로가 됨",
      "마음의 평화를 찾음",
    ],
    lessonsLearned: [
      "나를 먼저 돌봐야 남도 돌볼 수 있다는 것",
      "휴식도 생산적이라는 것",
      "천천히 가도 괜찮다는 것",
    ],
    nextYearAdvice: "다른 사람을 돌보느라 자신을 소홀히 하지 마세요. 당신의 에너지도 소중해요. 받는 것도 연습하세요.",
    luckyMonth: "6월, 에너지가 충전되는 때",
    keyword2025: "경계",
    celebMessage: "따뜻한 당신의 존재 자체가 선물이에요 💝",
    compatibility: ["균형주의자", "끈질긴 생존자"],
  },
  reflector: {
    type: "reflector",
    title: "성찰가",
    emoji: "🪞",
    subtitle: "깊이 생각하고 돌아본 사색의 해!",
    description: "올해 당신은 많은 생각을 했어요. 지난 일들을 돌아보고, 의미를 찾고, 앞으로의 방향을 고민했습니다. 깊이 있는 사색은 당신을 더 지혜롭게 만들었어요.",
    yearSummary: "자신을 돌아보고 의미를 찾은 성찰의 한 해",
    achievements: [
      "삶의 의미에 대해 깊이 생각함",
      "과거를 정리하고 받아들임",
      "더 넓은 시야를 갖게 됨",
    ],
    lessonsLearned: [
      "모든 경험에는 의미가 있다는 것",
      "받아들이는 것의 힘",
      "지금 이 순간의 소중함",
    ],
    nextYearAdvice: "생각만큼 행동도 중요해요. 내년에는 머릿속 계획을 실제로 옮겨보세요. 완벽하지 않아도 시작해보세요.",
    luckyMonth: "11월, 깨달음이 찾아올 때",
    keyword2025: "실행",
    celebMessage: "깊이 있는 당신의 사색이 빛나는 해였어요 🌙",
    compatibility: ["탐색가", "성장러"],
  },
};

export function calculateResult(answers: number[]): YearEndReviewResult {
  const scores: Record<string, number> = {
    achiever: 0,
    adventurer: 0,
    survivor: 0,
    growth: 0,
    balancer: 0,
    seeker: 0,
    healer: 0,
    reflector: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedScores = question.options[answerIndex].scores;
      Object.entries(selectedScores).forEach(([type, score]) => {
        scores[type] = (scores[type] || 0) + score;
      });
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return results[maxType];
}
