// text-interpretation 테스트 데이터
export const questions = [
  {
    id: 1,
    text: '"ㅇㅇ" 이 답장의 의미는?',
    options: [
      { text: '긍정적 동의, 알겠다는 뜻', type: 'optimist' },
      { text: '귀찮아서 대충 답한 것', type: 'realist' },
      { text: '화났거나 관심 없다는 신호', type: 'pessimist' },
      { text: '상황에 따라 다름', type: 'analyst' },
    ],
  },
  {
    id: 2,
    text: '"ㅋ" 하나만 왔을 때?',
    options: [
      { text: '진짜 웃긴 건 아닌데 리액션 해준 것', type: 'realist' },
      { text: '대화 끝내고 싶다는 신호', type: 'pessimist' },
      { text: '짧게 웃음을 표현한 것', type: 'optimist' },
      { text: '"ㅋ"의 개수로 판단해야 함', type: 'analyst' },
    ],
  },
  {
    id: 3,
    text: '읽씹 후 몇 시간 뒤 답장이 왔다면?',
    options: [
      { text: '바빴구나, 이해함', type: 'optimist' },
      { text: '우선순위에서 밀린 느낌', type: 'realist' },
      { text: '나한테 관심 없는 거 확실', type: 'pessimist' },
      { text: '답장 내용으로 판단해야 함', type: 'analyst' },
    ],
  },
  {
    id: 4,
    text: '"아 ㅋㅋㅋㅋ 그랬구나"의 의미는?',
    options: [
      { text: '공감하면서 들어주는 중', type: 'optimist' },
      { text: '할 말이 없어서 대충 맞장구', type: 'realist' },
      { text: '관심 없고 대화 끝내고 싶음', type: 'pessimist' },
      { text: '"ㅋ" 개수가 많으니 괜찮음', type: 'analyst' },
    ],
  },
  {
    id: 5,
    text: '"알겠어"와 "알겠어요"의 차이는?',
    options: [
      { text: '별 차이 없음, 존댓말이냐 반말이냐', type: 'optimist' },
      { text: '"알겠어"가 더 친근함', type: 'realist' },
      { text: '"알겠어요"는 거리두기 느낌', type: 'pessimist' },
      { text: '평소 말투와 비교해봐야 함', type: 'analyst' },
    ],
  },
  {
    id: 6,
    text: '물음표 없이 "밥 먹었어"라고 오면?',
    options: [
      { text: '안부 인사, 따뜻한 관심', type: 'optimist' },
      { text: '대화 시작용 멘트', type: 'realist' },
      { text: '할 말 없어서 던진 말', type: 'pessimist' },
      { text: '톤앤매너로 판단해야 함', type: 'analyst' },
    ],
  },
  {
    id: 7,
    text: '"나중에 밥 한번 먹자~"의 진짜 의미?',
    options: [
      { text: '진짜 밥 먹고 싶은 것', type: 'optimist' },
      { text: '사교적 인사, 실현 가능성 50%', type: 'realist' },
      { text: '그냥 하는 말, 연락 안 올 것', type: 'pessimist' },
      { text: '구체적 날짜 제안 여부로 판단', type: 'analyst' },
    ],
  },
  {
    id: 8,
    text: '답장에 이모티콘/이모지가 없으면?',
    options: [
      { text: '원래 이모티콘 안 쓰는 스타일', type: 'optimist' },
      { text: '평소보다 텐션이 낮은 상태', type: 'realist' },
      { text: '기분이 안 좋거나 나한테 화남', type: 'pessimist' },
      { text: '평소 패턴과 비교 필요', type: 'analyst' },
    ],
  },
  {
    id: 9,
    text: '"그래서?"라는 답장이 오면?',
    options: [
      { text: '궁금해서 더 듣고 싶은 것', type: 'optimist' },
      { text: '좀 날카롭지만 대화는 이어가는 중', type: 'realist' },
      { text: '짜증났거나 별로 관심 없음', type: 'pessimist' },
      { text: '맥락에 따라 다름', type: 'analyst' },
    ],
  },
  {
    id: 10,
    text: '마침표를 꼭 찍는 사람의 메시지 의미?',
    options: [
      { text: '꼼꼼하고 정확한 성격', type: 'optimist' },
      { text: '습관이거나 공식적 느낌', type: 'realist' },
      { text: '차갑고 딱딱한 느낌, 거리감', type: 'pessimist' },
      { text: '세대 차이일 수도 있음', type: 'analyst' },
    ],
  },
];

export const results: Record<string, {
  title: string;
  emoji: string;
  description: string;
  strength: string;
  weakness: string;
  advice: string;
}> = {
  optimist: {
    title: '긍정 해석러',
    emoji: '🌈',
    description: '메시지를 좋게 해석하는 편! "ㅋ" 하나도 웃음으로 받아들이고, 읽씹도 바쁜 거라 이해해주는 넓은 마음의 소유자입니다.',
    strength: '관계에서 불필요한 갈등이 적고, 상대방도 편하게 느낌',
    weakness: '가끔 상대의 진심을 놓치거나, 경고 신호를 무시할 수 있음',
    advice: '좋게 보는 것도 좋지만, 패턴이 반복되면 한 번쯤 점검해보세요!',
  },
  realist: {
    title: '현실 판독러',
    emoji: '🔍',
    description: '메시지를 있는 그대로 해석하는 균형 잡힌 타입! 과하게 좋게도, 나쁘게도 보지 않고 상황을 객관적으로 파악합니다.',
    strength: '합리적 판단력, 감정적 소모 적음',
    weakness: '가끔 미묘한 감정 신호를 놓칠 수 있음',
    advice: '때로는 감정적 뉘앙스도 읽어보세요. 텍스트 뒤에 숨은 마음이 있을 수도!',
  },
  pessimist: {
    title: '예민 탐지러',
    emoji: '🎯',
    description: '메시지 속 미묘한 변화를 귀신같이 캐치! "ㅋ" 개수 변화, 답장 시간, 이모티콘 유무까지 모두 분석합니다.',
    strength: '상대방의 감정 변화를 빠르게 감지',
    weakness: '없는 의미도 만들어내서 혼자 상처받을 수 있음',
    advice: '모든 메시지가 숨은 뜻을 가진 건 아니에요. 확대 해석 주의!',
  },
  analyst: {
    title: '맥락 분석러',
    emoji: '📊',
    description: 'A메시지 하나로 판단하지 않고, 평소 패턴/상황/맥락을 종합해서 해석하는 논리적 타입입니다.',
    strength: '오해가 적고, 정확한 상황 판단',
    weakness: '너무 분석하느라 즉흥적 반응이 어려울 수 있음',
    advice: '가끔은 직감도 믿어보세요. 모든 걸 분석할 필요는 없어요!',
  },
};

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {
    optimist: 0,
    realist: 0,
    pessimist: 0,
    analyst: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      scores[type]++;
    }
  });

  return Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}
