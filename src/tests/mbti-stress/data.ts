// MBTI 스트레스 반응 테스트 - 스트레스 받으면 어떻게 변하나요?

export interface MbtiStressQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface MbtiStressResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  normalState: string;
  stressState: string;
  description: string;
  stressTriggers: string[];
  stressReactions: string[];
  warningSignals: string[];
  recoveryMethods: string[];
  supportTips: string[];
  avoidWhenStressed: string[];
}

export const stressTypes = ['exploder', 'withdrawer', 'overthinker', 'controller', 'pleaser', 'avoider', 'perfectionist', 'rebel'] as const;
export type StressType = typeof stressTypes[number];

export const questions: MbtiStressQuestion[] = [
  {
    id: 1,
    question: "스트레스 받으면 가장 먼저 나타나는 반응은?",
    options: [
      { text: "짜증이 폭발하고 말이 거칠어진다", scores: { exploder: 3, rebel: 1 } },
      { text: "혼자 있고 싶고 모든 연락을 끊는다", scores: { withdrawer: 3, avoider: 1 } },
      { text: "머릿속이 복잡해지고 잠이 안 온다", scores: { overthinker: 3, perfectionist: 1 } },
      { text: "뭐라도 통제하려고 한다", scores: { controller: 3, perfectionist: 1 } },
    ],
  },
  {
    id: 2,
    question: "업무나 과제가 산더미처럼 쌓이면?",
    options: [
      { text: "화가 나서 왜 이렇게 됐는지 따진다", scores: { exploder: 3 } },
      { text: "현실 도피... 유튜브나 게임에 빠진다", scores: { avoider: 3, withdrawer: 1 } },
      { text: "밤새워서라도 완벽하게 해내려 한다", scores: { perfectionist: 3 } },
      { text: "다른 사람들한테 도움을 구한다", scores: { pleaser: 2, controller: 1 } },
    ],
  },
  {
    id: 3,
    question: "갈등 상황에서 스트레스 받으면?",
    options: [
      { text: "직접적으로 말하고 해결하려 한다", scores: { exploder: 2, controller: 1 } },
      { text: "그냥 피해버린다, 싸우기 싫다", scores: { avoider: 3, withdrawer: 1 } },
      { text: "상대방 입장에서 계속 생각한다", scores: { pleaser: 2, overthinker: 1 } },
      { text: "내가 잘못한 건 없는지 분석한다", scores: { overthinker: 2, perfectionist: 1 } },
    ],
  },
  {
    id: 4,
    question: "스트레스가 극에 달하면 하는 행동은?",
    options: [
      { text: "폭식, 폭음, 충동구매 등 폭발적 행동", scores: { exploder: 2, rebel: 2 } },
      { text: "방에 틀어박혀 아무도 안 만남", scores: { withdrawer: 3 } },
      { text: "잠을 못 자고 계속 걱정함", scores: { overthinker: 3 } },
      { text: "모든 걸 리스트업하고 정리하려 함", scores: { controller: 2, perfectionist: 1 } },
    ],
  },
  {
    id: 5,
    question: "주변 사람들이 스트레스 받은 나를 보면?",
    options: [
      { text: "무섭다, 화나 보인다고 함", scores: { exploder: 3 } },
      { text: "어디 갔냐, 연락이 안 된다고 함", scores: { withdrawer: 3 } },
      { text: "요즘 예민하다, 피곤해 보인다고 함", scores: { overthinker: 2, perfectionist: 1 } },
      { text: "너무 열심히 한다, 쉬라고 함", scores: { controller: 2, pleaser: 1 } },
    ],
  },
  {
    id: 6,
    question: "스트레스 해소법으로 가장 끌리는 것은?",
    options: [
      { text: "운동, 노래방 등 에너지 발산", scores: { exploder: 2, rebel: 1 } },
      { text: "넷플릭스 정주행, 혼자만의 시간", scores: { withdrawer: 2, avoider: 1 } },
      { text: "일기 쓰기, 정리하기, 계획 세우기", scores: { overthinker: 2, controller: 1 } },
      { text: "친구들과 수다, 맛있는 것 먹기", scores: { pleaser: 2, avoider: 1 } },
    ],
  },
  {
    id: 7,
    question: "스트레스 상황에서 자주 하는 생각은?",
    options: [
      { text: "왜 다들 일을 이따위로 하지?", scores: { exploder: 2, controller: 1 } },
      { text: "그냥 다 때려치우고 싶다", scores: { avoider: 2, rebel: 1 } },
      { text: "내가 뭘 잘못한 걸까?", scores: { pleaser: 2, overthinker: 1 } },
      { text: "어떻게 하면 해결될까?", scores: { controller: 2, perfectionist: 1 } },
    ],
  },
  {
    id: 8,
    question: "스트레스가 쌓이면 나타나는 신체 증상은?",
    options: [
      { text: "두통, 어깨 결림, 이갈이", scores: { exploder: 2, controller: 1 } },
      { text: "무기력, 과수면, 의욕 저하", scores: { withdrawer: 2, avoider: 1 } },
      { text: "불면증, 소화불량, 가슴 답답", scores: { overthinker: 2, perfectionist: 1 } },
      { text: "폭식, 피부 트러블, 면역력 저하", scores: { pleaser: 2, rebel: 1 } },
    ],
  },
  {
    id: 9,
    question: "스트레스 받을 때 가장 듣기 싫은 말은?",
    options: [
      { text: "진정해, 왜 그렇게 화를 내", scores: { exploder: 3 } },
      { text: "밖에 좀 나와, 사람들 좀 만나", scores: { withdrawer: 3 } },
      { text: "너무 생각 많이 하지 마", scores: { overthinker: 3 } },
      { text: "대충대충 해, 완벽할 필요 없어", scores: { perfectionist: 3 } },
    ],
  },
  {
    id: 10,
    question: "스트레스 받은 상태에서 일하면?",
    options: [
      { text: "실수도 많고 예민해서 분위기가 험악해짐", scores: { exploder: 2, rebel: 1 } },
      { text: "최소한만 하고 빨리 끝내려 함", scores: { withdrawer: 2, avoider: 1 } },
      { text: "오히려 더 꼼꼼해지고 야근함", scores: { perfectionist: 2, controller: 1 } },
      { text: "다른 사람 눈치 보면서 일함", scores: { pleaser: 2, overthinker: 1 } },
    ],
  },
  {
    id: 11,
    question: "스트레스에서 회복되는 데 걸리는 시간은?",
    options: [
      { text: "화 한번 내면 금방 풀림", scores: { exploder: 3 } },
      { text: "혼자 시간 있으면 서서히 회복", scores: { withdrawer: 2, avoider: 1 } },
      { text: "해결되기 전까지 계속 끌고 감", scores: { overthinker: 2, controller: 1 } },
      { text: "누군가 위로해주면 빨리 회복", scores: { pleaser: 3 } },
    ],
  },
  {
    id: 12,
    question: "극심한 스트레스에서 벗어난 후 느끼는 감정은?",
    options: [
      { text: "왜 그렇게 화냈나 후회됨", scores: { exploder: 3 } },
      { text: "사람들한테 미안함, 연락해야지", scores: { withdrawer: 2, pleaser: 1 } },
      { text: "이제야 마음이 편해짐, 잠 좀 자야지", scores: { overthinker: 2, perfectionist: 1 } },
      { text: "해냈다는 성취감, 뿌듯함", scores: { controller: 2, perfectionist: 1 } },
    ],
  },
];

export const results: Record<StressType, MbtiStressResult> = {
  exploder: {
    type: 'exploder',
    title: '폭발형',
    emoji: '🌋',
    subtitle: '화산처럼 폭발하는 타입',
    normalState: '평소에는 에너지 넘치고 활발함',
    stressState: '스트레스 받으면 화가 폭발하고 공격적으로 변함',
    description: '당신은 스트레스를 받으면 화산처럼 폭발하는 타입이에요. 평소에는 괜찮다가도 한계를 넘으면 감정이 터져버리죠. 하지만 한번 터지고 나면 금방 회복하는 편이에요.',
    stressTriggers: ['불공정한 상황', '무능력한 사람들', '통제 불가 상황', '무시당할 때'],
    stressReactions: ['말이 거칠어짐', '짜증과 화 표출', '충동적 행동', '과격한 표현'],
    warningSignals: ['작은 일에 짜증', '목소리가 커짐', '인내심 바닥', '예민해짐'],
    recoveryMethods: ['격렬한 운동', '노래방', '드라이브', '혼자만의 시간'],
    supportTips: ['화낼 공간을 줘요', '논리적으로 설득하지 마세요', '감정 먼저 인정해주세요'],
    avoidWhenStressed: ['진정하라는 말', '논리적 반박', '감정 무시'],
  },
  withdrawer: {
    type: 'withdrawer',
    title: '은둔형',
    emoji: '🐚',
    subtitle: '껍데기 속으로 숨는 타입',
    normalState: '평소에는 사교적이고 활발함',
    stressState: '스트레스 받으면 모든 관계를 차단하고 혼자가 됨',
    description: '당신은 스트레스를 받으면 소라게처럼 껍데기 속으로 숨는 타입이에요. 연락을 끊고 혼자만의 시간을 가지며 에너지를 충전하죠. 회복되면 다시 나타나요.',
    stressTriggers: ['과도한 사회적 요구', '갈등 상황', '에너지 고갈', '감정 소모'],
    stressReactions: ['연락 두절', '방 틀어박힘', '약속 취소', '혼자 있기'],
    warningSignals: ['답장이 늦어짐', '만남 거절', '말수가 줄어듦', '표정이 없어짐'],
    recoveryMethods: ['완전한 혼자 시간', '넷플릭스 정주행', '게임', '산책'],
    supportTips: ['혼자 있게 해주세요', '기다려주세요', '연락해도 된다고 알려주세요'],
    avoidWhenStressed: ['강제로 밖에 끌어내기', '계속 연락하기', '왜 그러냐고 캐묻기'],
  },
  overthinker: {
    type: 'overthinker',
    title: '과잉사고형',
    emoji: '🌀',
    subtitle: '생각의 소용돌이에 빠지는 타입',
    normalState: '평소에는 분석적이고 신중함',
    stressState: '스트레스 받으면 끝없는 걱정과 생각에 빠짐',
    description: '당신은 스트레스를 받으면 머릿속이 쉴 틈 없이 돌아가는 타입이에요. 모든 가능성을 분석하고, 최악의 시나리오를 상상하며, 잠도 못 이루죠.',
    stressTriggers: ['불확실한 상황', '중요한 결정', '실수했을 때', '미래 걱정'],
    stressReactions: ['끝없는 생각', '불면증', '최악 상상', '분석 마비'],
    warningSignals: ['잠을 못 잠', '식욕 변화', '집중력 저하', '피로감'],
    recoveryMethods: ['글쓰기/일기', '명상', '운동', '누군가와 대화'],
    supportTips: ['들어주세요', '해결책보다 공감을', '정리하도록 도와주세요'],
    avoidWhenStressed: ['생각 많이 하지 말라는 말', '별거 아니라는 말', '결정 재촉'],
  },
  controller: {
    type: 'controller',
    title: '통제형',
    emoji: '🎛️',
    subtitle: '모든 걸 컨트롤하려는 타입',
    normalState: '평소에는 계획적이고 체계적임',
    stressState: '스트레스 받으면 더 많은 것을 통제하려 함',
    description: '당신은 스트레스를 받으면 오히려 더 많은 것을 통제하려는 타입이에요. 정리하고, 계획 세우고, 리스트 만들고... 뭔가를 컨트롤해야 안심이 되죠.',
    stressTriggers: ['통제 불가 상황', '예상 못한 변수', '무질서', '비효율'],
    stressReactions: ['과도한 계획', '리스트 작성', '청소/정리', '마이크로매니징'],
    warningSignals: ['융통성 저하', '완벽주의 심화', '타인 통제', '예민해짐'],
    recoveryMethods: ['계획대로 진행되는 경험', '작은 성취', '정리 정돈', '운동'],
    supportTips: ['계획을 존중해주세요', '예측 가능하게 해주세요', '작은 것부터 맡겨주세요'],
    avoidWhenStressed: ['갑작스러운 변경', '대충 하라는 말', '통제권 빼앗기'],
  },
  pleaser: {
    type: 'pleaser',
    title: '희생형',
    emoji: '🎭',
    subtitle: '남을 위해 자신을 숨기는 타입',
    normalState: '평소에는 배려심 있고 따뜻함',
    stressState: '스트레스 받아도 티 안 내고 남을 먼저 생각함',
    description: '당신은 스트레스를 받아도 겉으로 티를 안 내는 타입이에요. 오히려 다른 사람을 더 챙기고, 자신의 감정은 뒤로 미루죠. 그래서 나중에 한꺼번에 터지기도 해요.',
    stressTriggers: ['거절해야 할 때', '갈등 상황', '비판 받을 때', '기대에 못 미칠 때'],
    stressReactions: ['감정 숨김', '과도한 배려', '자기 희생', '무리한 수용'],
    warningSignals: ['과도한 yes', '자기 시간 없음', '지쳐 보임', '수동공격'],
    recoveryMethods: ['신뢰하는 사람과 대화', '자기만의 시간', '작은 거절 연습', '취미 활동'],
    supportTips: ['먼저 물어봐 주세요', '괜찮지 않아도 된다고 해주세요', '부담 없이 들어주세요'],
    avoidWhenStressed: ['당연하게 부탁하기', '감정 무시', '더 요구하기'],
  },
  avoider: {
    type: 'avoider',
    title: '회피형',
    emoji: '🏃',
    subtitle: '문제에서 도망치는 타입',
    normalState: '평소에는 긍정적이고 여유로움',
    stressState: '스트레스 받으면 문제를 피하고 현실 도피함',
    description: '당신은 스트레스를 받으면 문제에서 도망치는 타입이에요. 유튜브, 게임, 쇼핑 등으로 현실을 잊으려 하고, 해결은 나중으로 미루죠.',
    stressTriggers: ['책임져야 할 때', '어려운 대화', '복잡한 문제', '갈등 상황'],
    stressReactions: ['미루기', '현실 도피', '변명', '딴 생각'],
    warningSignals: ['할 일 미룸', 'SNS/게임 과다', '약속 펑크', '변명 늘어남'],
    recoveryMethods: ['작은 것부터 해결', '현실 직시 연습', '운동', '환경 바꾸기'],
    supportTips: ['작은 단계로 나눠주세요', '함께 해주세요', '비난하지 마세요'],
    avoidWhenStressed: ['책임 추궁', '큰 결정 요구', '비난과 질책'],
  },
  perfectionist: {
    type: 'perfectionist',
    title: '완벽주의형',
    emoji: '💎',
    subtitle: '더 완벽해지려는 타입',
    normalState: '평소에도 높은 기준과 꼼꼼함',
    stressState: '스트레스 받으면 더 완벽하려고 자신을 몰아붙임',
    description: '당신은 스트레스를 받으면 오히려 더 완벽해지려는 타입이에요. 밤새 일하고, 사소한 것도 못 넘어가고, 자신에게 더 가혹해지죠. 번아웃 위험이 높아요.',
    stressTriggers: ['실수했을 때', '기대에 못 미칠 때', '비교당할 때', '시간 부족'],
    stressReactions: ['야근/밤샘', '과도한 점검', '자기 비판', '타인 비판'],
    warningSignals: ['수면 부족', '식사 거름', '예민해짐', '자기 비하'],
    recoveryMethods: ['80%도 괜찮다 인정', '충분한 휴식', '취미 활동', '운동'],
    supportTips: ['충분히 잘하고 있다고 해주세요', '휴식을 권해주세요', '작은 실수 괜찮다고 해주세요'],
    avoidWhenStressed: ['더 잘하라는 말', '비교', '완벽하지 않은 점 지적'],
  },
  rebel: {
    type: 'rebel',
    title: '반항형',
    emoji: '🔥',
    subtitle: '규칙을 깨버리는 타입',
    normalState: '평소에는 자유롭고 개성적임',
    stressState: '스트레스 받으면 모든 규칙과 기대를 거부함',
    description: '당신은 스트레스를 받으면 반항적으로 변하는 타입이에요. 규칙을 어기고, 기대를 저버리고, 자신만의 방식을 고집하죠. 속박에서 벗어나고 싶은 마음의 표현이에요.',
    stressTriggers: ['속박당할 때', '부당한 권위', '자유 제한', '선택권 없음'],
    stressReactions: ['규칙 무시', '반대로 행동', '충동적 결정', '도전적 태도'],
    warningSignals: ['무례해짐', '약속 무시', '독단적', '충동 구매/행동'],
    recoveryMethods: ['자유로운 시간', '창의적 활동', '새로운 시도', '여행'],
    supportTips: ['선택권을 주세요', '자유를 존중해주세요', '통제하려 하지 마세요'],
    avoidWhenStressed: ['강제와 명령', '규칙 강조', '비교와 압박'],
  },
};

export function calculateResult(answers: number[]): MbtiStressResult {
  const scores: Record<StressType, number> = {
    exploder: 0,
    withdrawer: 0,
    overthinker: 0,
    controller: 0,
    pleaser: 0,
    avoider: 0,
    perfectionist: 0,
    rebel: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as StressType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: StressType = 'overthinker';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as StressType;
    }
  });

  return results[resultType];
}
