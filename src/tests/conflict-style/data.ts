// 갈등 대처 스타일 테스트 - 갈등 상황에서 나의 유형

export const questions = [
  {
    id: 1,
    question: "친구와 의견이 다를 때 나는?",
    options: [
      { text: "내 의견을 끝까지 주장함", type: "competing" },
      { text: "서로 양보해서 중간점 찾음", type: "compromising" },
      { text: "친구 의견에 따름", type: "accommodating" },
      { text: "대화로 둘 다 만족하는 방법 찾음", type: "collaborating" },
      { text: "그냥 그 주제 피함", type: "avoiding" },
    ],
  },
  {
    id: 2,
    question: "직장에서 상사와 갈등이 생기면?",
    options: [
      { text: "내 입장을 논리적으로 설명", type: "competing" },
      { text: "적당히 조율해서 합의점 찾음", type: "compromising" },
      { text: "상사 의견을 따름", type: "accommodating" },
      { text: "함께 최선의 방법을 모색", type: "collaborating" },
      { text: "시간이 해결해주길 기다림", type: "avoiding" },
    ],
  },
  {
    id: 3,
    question: "연인과 다툴 때 나는?",
    options: [
      { text: "내가 옳다고 확실히 주장", type: "competing" },
      { text: "서로 조금씩 양보", type: "compromising" },
      { text: "먼저 사과하고 맞춰줌", type: "accommodating" },
      { text: "깊이 대화해서 해결", type: "collaborating" },
      { text: "일단 거리를 둠", type: "avoiding" },
    ],
  },
  {
    id: 4,
    question: "팀 프로젝트에서 의견 충돌이 있으면?",
    options: [
      { text: "내 아이디어가 최고라고 설득", type: "competing" },
      { text: "각자 의견을 조금씩 반영", type: "compromising" },
      { text: "다수 의견을 따름", type: "accommodating" },
      { text: "모두가 동의하는 새 방안 모색", type: "collaborating" },
      { text: "갈등 상황 자체를 피함", type: "avoiding" },
    ],
  },
  {
    id: 5,
    question: "가족과 갈등이 생기면?",
    options: [
      { text: "내 생각을 분명히 말함", type: "competing" },
      { text: "서로 타협점을 찾음", type: "compromising" },
      { text: "가족 화합을 위해 양보", type: "accommodating" },
      { text: "대화로 모두 이해시킴", type: "collaborating" },
      { text: "갈등을 피해 자리를 뜸", type: "avoiding" },
    ],
  },
  {
    id: 6,
    question: "갈등 상황에서 가장 중요한 것은?",
    options: [
      { text: "내 목표 달성", type: "competing" },
      { text: "공정한 해결", type: "compromising" },
      { text: "관계 유지", type: "accommodating" },
      { text: "모두의 만족", type: "collaborating" },
      { text: "평화 유지", type: "avoiding" },
    ],
  },
  {
    id: 7,
    question: "상대가 강하게 주장하면?",
    options: [
      { text: "나도 강하게 맞섬", type: "competing" },
      { text: "중간 지점을 제안", type: "compromising" },
      { text: "일단 수용함", type: "accommodating" },
      { text: "왜 그런지 경청 후 대화", type: "collaborating" },
      { text: "피하거나 미룸", type: "avoiding" },
    ],
  },
  {
    id: 8,
    question: "내가 양보하면?",
    options: [
      { text: "약해 보일까 봐 싫음", type: "competing" },
      { text: "상대도 양보해야 공평", type: "compromising" },
      { text: "관계를 위해 괜찮음", type: "accommodating" },
      { text: "더 좋은 결과 위해 필요하면 OK", type: "collaborating" },
      { text: "양보해서라도 갈등 끝내고 싶음", type: "avoiding" },
    ],
  },
  {
    id: 9,
    question: "갈등 해결 후 기분은?",
    options: [
      { text: "이겨야 속이 시원함", type: "competing" },
      { text: "50:50이면 만족", type: "compromising" },
      { text: "상대가 만족하면 나도 OK", type: "accommodating" },
      { text: "서로 만족하면 뿌듯함", type: "collaborating" },
      { text: "끝났다는 것 자체가 안도", type: "avoiding" },
    ],
  },
  {
    id: 10,
    question: "갈등이 길어지면?",
    options: [
      { text: "끝까지 내 입장 고수", type: "competing" },
      { text: "빨리 타협점을 찾으려 함", type: "compromising" },
      { text: "내가 먼저 양보", type: "accommodating" },
      { text: "시간 들여 근본 해결", type: "collaborating" },
      { text: "지쳐서 포기하거나 피함", type: "avoiding" },
    ],
  },
  {
    id: 11,
    question: "갈등을 대하는 나의 태도는?",
    options: [
      { text: "이기고 싶다", type: "competing" },
      { text: "공정하게 나누고 싶다", type: "compromising" },
      { text: "상대를 배려하고 싶다", type: "accommodating" },
      { text: "함께 해결하고 싶다", type: "collaborating" },
      { text: "피하고 싶다", type: "avoiding" },
    ],
  },
  {
    id: 12,
    question: "갈등에 대한 생각은?",
    options: [
      { text: "승자와 패자가 있다", type: "competing" },
      { text: "서로 조금씩 손해 보는 것", type: "compromising" },
      { text: "관계가 더 중요하다", type: "accommodating" },
      { text: "성장의 기회가 될 수 있다", type: "collaborating" },
      { text: "가능하면 없었으면 좋겠다", type: "avoiding" },
    ],
  },
];

export interface ConflictStyleResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  whenToUse: string;
  whenToAvoid: string;
  improvementTips: string[];
  bestMatch: string;
  challengeMatch: string;
}

const resultTypes: Record<string, ConflictStyleResult> = {
  competing: {
    type: 'competing',
    title: '경쟁형',
    emoji: '🏆',
    subtitle: '이기는 게 중요해!',
    description: '당신은 갈등 상황에서 자신의 목표와 주장을 관철시키려는 경쟁형입니다. 승부욕이 강하고, 자기 의견에 확신이 있어요. 리더십이 필요한 상황에서 빛을 발합니다.',
    characteristics: ['강한 주장', '목표 지향', '승부욕', '자기 확신'],
    strengths: ['빠른 결정', '리더십', '목표 달성', '명확한 입장'],
    weaknesses: ['관계 손상', '타협 어려움', '상대 무시', '갈등 심화'],
    whenToUse: '긴급한 결정이 필요하거나, 중요한 이슈에서 확고한 입장이 필요할 때',
    whenToAvoid: '장기적 관계가 중요하거나, 상대의 협력이 필요할 때',
    improvementTips: ['상대 입장 경청하기', '윈윈 해결책 모색', '관계도 고려하기'],
    bestMatch: '협력형 (균형을 잡아줌)',
    challengeMatch: '같은 경쟁형 (충돌 심화)',
  },
  compromising: {
    type: 'compromising',
    title: '타협형',
    emoji: '🤝',
    subtitle: '중간 지점을 찾자!',
    description: '당신은 갈등 상황에서 서로 양보하여 중간 지점을 찾는 타협형입니다. 공정함을 중시하고, 빠른 해결을 선호해요. 실용적이고 현실적인 해결책을 찾습니다.',
    characteristics: ['양보 능력', '공정성 추구', '실용적', '빠른 해결'],
    strengths: ['효율적 해결', '공정함', '관계 유지', '현실적'],
    weaknesses: ['최선이 아닐 수 있음', '근본 해결 어려움', '양쪽 불만족'],
    whenToUse: '시간이 부족하거나, 양측 힘이 비슷할 때',
    whenToAvoid: '중요한 가치가 걸려 있거나, 창의적 해결이 필요할 때',
    improvementTips: ['때로는 더 깊이 파고들기', '윈윈 가능성 탐색', '장기적 관점 고려'],
    bestMatch: '협력형 (더 나은 해결책 도출)',
    challengeMatch: '회피형 (타협점 찾기 어려움)',
  },
  accommodating: {
    type: 'accommodating',
    title: '수용형',
    emoji: '💝',
    subtitle: '관계가 더 중요해!',
    description: '당신은 갈등 상황에서 상대를 배려하고 양보하는 수용형입니다. 관계 유지를 가장 중시하고, 화합을 위해 자신을 희생하기도 해요. 따뜻하고 배려심이 깊습니다.',
    characteristics: ['배려심', '관계 중시', '양보', '화합 추구'],
    strengths: ['관계 유지', '좋은 분위기', '팀워크', '갈등 완화'],
    weaknesses: ['자기 희생', '이용당할 수 있음', '불만 축적', '자존감 저하'],
    whenToUse: '관계가 결과보다 중요하거나, 내가 틀렸을 때',
    whenToAvoid: '중요한 이슈이거나, 상대가 이용할 때',
    improvementTips: ['자기 의견도 표현하기', '한계 설정', '셀프 케어'],
    bestMatch: '경쟁형 (균형 맞춤)',
    challengeMatch: '같은 수용형 (결정 어려움)',
  },
  collaborating: {
    type: 'collaborating',
    title: '협력형',
    emoji: '🌟',
    subtitle: '함께 최선을 찾자!',
    description: '당신은 갈등 상황에서 모두가 만족하는 해결책을 찾는 협력형입니다. 시간이 걸려도 윈윈을 추구하고, 깊이 있는 대화를 중시해요. 창의적이고 성숙한 갈등 해결 방식입니다.',
    characteristics: ['윈윈 추구', '깊은 대화', '창의적 해결', '상호 존중'],
    strengths: ['최선의 결과', '관계 강화', '근본 해결', '성장'],
    weaknesses: ['시간 소요', '에너지 소모', '모든 상황에 적용 어려움'],
    whenToUse: '중요한 이슈이고, 관계와 결과 모두 중요할 때',
    whenToAvoid: '긴급하거나, 사소한 문제일 때',
    improvementTips: ['효율성도 고려', '때로는 타협 수용', '에너지 관리'],
    bestMatch: '모든 유형 (조율 가능)',
    challengeMatch: '회피형 (대화 자체가 어려움)',
  },
  avoiding: {
    type: 'avoiding',
    title: '회피형',
    emoji: '🕊️',
    subtitle: '갈등은 싫어...',
    description: '당신은 갈등 상황을 피하거나 미루는 회피형입니다. 평화를 사랑하고, 충돌이 불편해요. 때로는 현명한 선택이지만, 문제가 해결되지 않고 쌓일 수 있어요.',
    characteristics: ['갈등 회피', '평화 추구', '미루기', '중립'],
    strengths: ['평화 유지', '감정 조절', '시간 벌기', '사소한 것 넘김'],
    weaknesses: ['문제 미해결', '축적된 불만', '소극적', '발언권 약화'],
    whenToUse: '사소한 문제이거나, 냉각 시간이 필요할 때',
    whenToAvoid: '중요한 이슈이거나, 피할수록 커지는 문제일 때',
    improvementTips: ['작은 것부터 말하기 연습', '갈등을 성장 기회로 보기', '자기 주장 훈련'],
    bestMatch: '수용형 (충돌 최소화)',
    challengeMatch: '경쟁형 (압도당할 수 있음)',
  },
};

export function calculateConflictStyleResult(answers: number[]): ConflictStyleResult {
  const typeScores: Record<string, number> = {
    competing: 0,
    compromising: 0,
    accommodating: 0,
    collaborating: 0,
    avoiding: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeScores[type] += 1;
    }
  });

  let maxType = 'compromising';
  let maxScore = 0;

  Object.entries(typeScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return resultTypes[maxType];
}
