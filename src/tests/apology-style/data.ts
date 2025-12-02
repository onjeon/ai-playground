// 사과 스타일 테스트 데이터

export interface ApologyQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    type: ApologyType;
  }[];
}

export interface ApologyResult {
  type: string;
  title: string;
  emoji: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  characteristics: string[];
  advice: string[];
  compatibility: string[];
}

export const apologyTypes = ['direct', 'avoidant', 'compensatory', 'analytical'] as const;
export type ApologyType = typeof apologyTypes[number];

// 질문 데이터 (10문항)
export const questions: ApologyQuestion[] = [
  {
    id: 1,
    question: "실수로 친구와의 약속을 잊어버렸다면?",
    options: [
      { text: "바로 전화해서 '정말 미안해!'라고 말한다", type: 'direct' },
      { text: "일단 연락을 피하고 나중에 슬쩍 말한다", type: 'avoidant' },
      { text: "다음에 맛있는 거 사줄게! 하며 보상을 제안한다", type: 'compensatory' },
      { text: "왜 잊었는지 상황을 먼저 설명한다", type: 'analytical' },
    ],
  },
  {
    id: 2,
    question: "직장에서 실수로 동료의 파일을 삭제했다면?",
    options: [
      { text: "즉시 동료에게 가서 솔직하게 말하고 사과한다", type: 'direct' },
      { text: "혼자 복구를 시도해보고, 안되면 나중에 말한다", type: 'avoidant' },
      { text: "복구해주고 커피라도 사드린다", type: 'compensatory' },
      { text: "어떻게 이런 일이 일어났는지 경위를 설명한다", type: 'analytical' },
    ],
  },
  {
    id: 3,
    question: "연인에게 상처 주는 말을 했다면?",
    options: [
      { text: "바로 '내가 잘못했어, 미안해'라고 말한다", type: 'direct' },
      { text: "분위기가 풀릴 때까지 시간을 둔다", type: 'avoidant' },
      { text: "좋아하는 음식이나 선물을 준비한다", type: 'compensatory' },
      { text: "왜 그런 말을 했는지 내 상황을 먼저 이야기한다", type: 'analytical' },
    ],
  },
  {
    id: 4,
    question: "부모님께 실수를 했을 때 나는?",
    options: [
      { text: "바로 부모님께 가서 죄송하다고 말씀드린다", type: 'direct' },
      { text: "일단 조용히 있다가 분위기 봐서 말한다", type: 'avoidant' },
      { text: "용돈을 드리거나 집안일을 도와드린다", type: 'compensatory' },
      { text: "사정이 있었다며 이유를 먼저 설명드린다", type: 'analytical' },
    ],
  },
  {
    id: 5,
    question: "그룹 프로젝트에서 내 실수로 팀이 피해를 봤다면?",
    options: [
      { text: "팀원들에게 내 잘못이라고 바로 인정한다", type: 'direct' },
      { text: "일단 지켜보다 누가 언급하면 그때 말한다", type: 'avoidant' },
      { text: "야근이나 추가 작업으로 만회하겠다고 한다", type: 'compensatory' },
      { text: "문제가 발생한 원인을 분석해서 공유한다", type: 'analytical' },
    ],
  },
  {
    id: 6,
    question: "친구의 비밀을 실수로 다른 사람에게 말해버렸다면?",
    options: [
      { text: "친구에게 바로 연락해서 솔직하게 사과한다", type: 'direct' },
      { text: "들킬 때까지 일단 모르는 척 한다", type: 'avoidant' },
      { text: "친구가 좋아하는 것으로 기분을 풀어준다", type: 'compensatory' },
      { text: "어쩌다 그렇게 됐는지 상황을 먼저 설명한다", type: 'analytical' },
    ],
  },
  {
    id: 7,
    question: "약속 시간에 30분 늦었을 때?",
    options: [
      { text: "'늦어서 정말 미안!' 하고 바로 사과한다", type: 'direct' },
      { text: "아무 말 없이 자연스럽게 합류한다", type: 'avoidant' },
      { text: "'밥 내가 살게!'라며 보상을 제안한다", type: 'compensatory' },
      { text: "왜 늦었는지 교통 상황부터 설명한다", type: 'analytical' },
    ],
  },
  {
    id: 8,
    question: "온라인에서 실수로 잘못된 정보를 공유했다면?",
    options: [
      { text: "바로 정정 글을 올리고 사과한다", type: 'direct' },
      { text: "조용히 삭제하고 없던 일로 한다", type: 'avoidant' },
      { text: "정확한 정보와 함께 유용한 자료를 추가로 공유한다", type: 'compensatory' },
      { text: "왜 그 정보를 믿었는지 경위를 설명한다", type: 'analytical' },
    ],
  },
  {
    id: 9,
    question: "후배/동생에게 심하게 혼을 냈는데, 알고보니 내 착각이었다면?",
    options: [
      { text: "바로 찾아가서 내가 틀렸다고 사과한다", type: 'direct' },
      { text: "다음에 잘 대해주는 걸로 만회한다", type: 'avoidant' },
      { text: "맛있는 거 사주면서 풀어준다", type: 'compensatory' },
      { text: "왜 그렇게 생각했는지 오해의 경위를 설명한다", type: 'analytical' },
    ],
  },
  {
    id: 10,
    question: "고객/클라이언트에게 잘못된 안내를 했다면?",
    options: [
      { text: "바로 연락드려 정중하게 사과한다", type: 'direct' },
      { text: "문제가 생기면 그때 대응한다", type: 'avoidant' },
      { text: "추가 서비스나 할인으로 보상해드린다", type: 'compensatory' },
      { text: "시스템 오류 등 원인을 먼저 설명드린다", type: 'analytical' },
    ],
  },
];

// 결과 데이터
export const results: Record<ApologyType, ApologyResult> = {
  direct: {
    type: 'direct',
    title: '직진 사과러',
    emoji: '🎯',
    description: '잘못을 인지하면 바로 사과하는 솔직담백한 타입입니다. 문제를 미루지 않고 즉각적으로 대처하며, 상대방에게 진심을 전달하는 데 거리낌이 없습니다. 당신의 사과는 꾸밈없이 진솔해서 상대방이 쉽게 용서하게 됩니다.',
    strengths: [
      '빠른 문제 해결 능력',
      '진솔한 감정 전달',
      '관계 회복이 빠름',
      '신뢰감을 주는 태도',
      '갈등 상황을 오래 끌지 않음',
    ],
    weaknesses: [
      '때로는 성급해 보일 수 있음',
      '상대방이 준비되기 전에 사과할 수 있음',
      '감정 정리 시간이 부족할 수 있음',
    ],
    characteristics: [
      '실수를 인정하는 데 두려움이 없다',
      '미안하면 미안하다고 바로 말한다',
      '변명보다 사과가 먼저다',
      '눈을 마주치며 진심을 전한다',
    ],
    advice: [
      '상대방의 감정 상태도 살펴보세요',
      '때로는 상대방에게 감정 정리 시간을 주는 것도 좋아요',
      '사과 후에도 행동으로 보여주면 더 좋습니다',
    ],
    compatibility: ['direct', 'compensatory'],
  },
  avoidant: {
    type: 'avoidant',
    title: '신중한 회피러',
    emoji: '🐢',
    description: '사과를 해야 할 때 시간을 두고 상황을 지켜보는 타입입니다. 충돌을 피하고 싶은 마음이 크고, 분위기가 나아지길 기다리는 경향이 있습니다. 섣불리 나서지 않는 신중함이 있지만, 때로는 문제가 커지기도 합니다.',
    strengths: [
      '신중한 판단력',
      '감정적 충돌 회피',
      '차분한 대처 능력',
      '상황 관찰력이 뛰어남',
      '불필요한 갈등을 만들지 않음',
    ],
    weaknesses: [
      '문제가 장기화될 수 있음',
      '상대방이 무시당한다고 느낄 수 있음',
      '오해가 쌓일 수 있음',
      '관계가 서서히 멀어질 수 있음',
    ],
    characteristics: [
      '일단 시간을 두고 본다',
      '분위기가 좋아지면 자연스럽게 넘어간다',
      '직접적인 대면을 부담스러워한다',
      '갈등 상황 자체를 피하고 싶어한다',
    ],
    advice: [
      '피하는 것은 해결이 아니에요',
      '작은 사과도 빨리 하면 관계가 좋아져요',
      '용기를 내서 먼저 다가가 보세요',
      '문자나 편지로 시작해도 괜찮아요',
    ],
    compatibility: ['avoidant', 'analytical'],
  },
  compensatory: {
    type: 'compensatory',
    title: '행동파 보상러',
    emoji: '🎁',
    description: '말보다 행동으로 미안함을 표현하는 타입입니다. 선물, 맛있는 음식, 특별한 행동으로 잘못을 만회하려 합니다. 마음을 표현하는 방식이 독특하고, 상대방을 기쁘게 해주고 싶은 마음이 큽니다.',
    strengths: [
      '실질적인 보상 제공',
      '행동력이 뛰어남',
      '상대방을 기쁘게 하는 능력',
      '성의 있는 태도',
      '창의적인 화해 방법',
    ],
    weaknesses: [
      '진심이 전달되지 않을 수 있음',
      '물질로 해결하려 한다는 오해를 받을 수 있음',
      '근본적인 문제 해결이 안 될 수 있음',
      '상대방이 원하는 것은 말 한마디일 수 있음',
    ],
    characteristics: [
      '선물이나 음식으로 마음을 표현한다',
      '"내가 쏠게"가 입버릇이다',
      '행동으로 보여주려 한다',
      '상대방이 좋아하는 것을 잘 기억한다',
    ],
    advice: [
      '보상과 함께 진심 어린 말도 전해보세요',
      '가끔은 "미안해"라는 말이 선물보다 값져요',
      '상대방이 원하는 것이 무엇인지 먼저 물어보세요',
      '행동과 말을 함께 하면 더 완벽해요',
    ],
    compatibility: ['compensatory', 'direct'],
  },
  analytical: {
    type: 'analytical',
    title: '논리적 설명러',
    emoji: '🔍',
    description: '상황을 분석하고 설명하는 것을 우선시하는 타입입니다. 왜 그런 일이 일어났는지 맥락을 전달하는 것이 중요하다고 생각합니다. 논리적이고 체계적이지만, 상대방은 변명처럼 느낄 수도 있습니다.',
    strengths: [
      '상황 분석 능력',
      '논리적 설명력',
      '재발 방지 의지',
      '문제의 원인을 파악함',
      '체계적인 사고방식',
    ],
    weaknesses: [
      '변명으로 들릴 수 있음',
      '상대방의 감정보다 논리를 앞세움',
      '사과보다 설명이 길어질 수 있음',
      '공감이 부족해 보일 수 있음',
    ],
    characteristics: [
      '일단 상황 설명부터 한다',
      '"사실은..."으로 말을 시작한다',
      '원인과 경위를 밝히는 것이 중요하다고 생각한다',
      '오해가 없도록 명확하게 전달하려 한다',
    ],
    advice: [
      '설명 전에 먼저 "미안해"를 말해보세요',
      '상대방의 감정을 먼저 인정해주세요',
      '길게 설명하기보다 핵심만 짧게 전달하세요',
      '논리보다 공감이 먼저일 때가 있어요',
    ],
    compatibility: ['analytical', 'avoidant'],
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): ApologyResult {
  const scores: Record<ApologyType, number> = {
    direct: 0,
    avoidant: 0,
    compensatory: 0,
    analytical: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedType = question.options[answerIndex].type;
      scores[selectedType]++;
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: ApologyType = 'direct';

  (Object.keys(scores) as ApologyType[]).forEach((type) => {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = type;
    }
  });

  return results[resultType];
}
