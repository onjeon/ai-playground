// 동화 속 역할 테스트 - 동화에서 당신은 어떤 역할?

export interface FairytaleRoleQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface FairytaleRoleResult {
  type: string;
  title: string;
  emoji: string;
  fairytale: string;
  description: string;
  characteristics: string[];
  strengths: string[];
  weaknesses: string[];
  famousCharacters: string[];
  lifeLesson: string;
  loveStyle: string;
  advice: string;
}

export const fairytaleRoleTypes = ['hero', 'princess', 'sidekick', 'villain', 'fairy', 'wise-elder'] as const;
export type FairytaleRoleType = typeof fairytaleRoleTypes[number];

export const questions: FairytaleRoleQuestion[] = [
  {
    id: 1,
    question: "위험에 처한 사람을 보면?",
    options: [
      { text: "당장 뛰어가서 구해야지!", scores: { hero: 3 } },
      { text: "도와줄 사람을 찾아봐야겠다", scores: { princess: 2, sidekick: 1 } },
      { text: "내가 도우면 뭘 얻을 수 있지?", scores: { villain: 3 } },
      { text: "마법이나 지혜로 도울 방법을 찾아", scores: { fairy: 2, 'wise-elder': 1 } },
    ],
  },
  {
    id: 2,
    question: "모험을 떠난다면 나는?",
    options: [
      { text: "앞장서서 이끄는 리더", scores: { hero: 3 } },
      { text: "중요한 열쇠를 가진 핵심 인물", scores: { princess: 3 } },
      { text: "주인공 옆에서 돕는 든든한 조력자", scores: { sidekick: 3 } },
      { text: "뒤에서 계획을 짜는 두뇌", scores: { villain: 2, 'wise-elder': 1 } },
    ],
  },
  {
    id: 3,
    question: "내가 가진 특별한 능력은?",
    options: [
      { text: "용기와 정의감", scores: { hero: 3 } },
      { text: "사람들의 마음을 움직이는 매력", scores: { princess: 3 } },
      { text: "유머와 충성심", scores: { sidekick: 3 } },
      { text: "지혜와 마법 (혹은 전략)", scores: { fairy: 2, 'wise-elder': 2 } },
    ],
  },
  {
    id: 4,
    question: "동화에서 나의 등장 장면은?",
    options: [
      { text: "멋지게 악당과 대면하는 장면", scores: { hero: 3 } },
      { text: "운명적인 만남의 장면", scores: { princess: 3 } },
      { text: "긴장감 풀어주는 코믹한 장면", scores: { sidekick: 3 } },
      { text: "반전을 알리는 충격적인 장면", scores: { villain: 2, fairy: 1 } },
    ],
  },
  {
    id: 5,
    question: "갈등 상황에서 나는?",
    options: [
      { text: "정면 돌파! 맞서 싸운다", scores: { hero: 3 } },
      { text: "협상하고 중재하려 한다", scores: { princess: 2, 'wise-elder': 1 } },
      { text: "주인공이 해결하도록 서포트", scores: { sidekick: 3 } },
      { text: "계략으로 상황을 뒤집는다", scores: { villain: 3 } },
    ],
  },
  {
    id: 6,
    question: "가장 중요하게 생각하는 가치는?",
    options: [
      { text: "정의와 명예", scores: { hero: 3 } },
      { text: "사랑과 희망", scores: { princess: 3 } },
      { text: "우정과 충성", scores: { sidekick: 3 } },
      { text: "힘과 성공", scores: { villain: 3 } },
    ],
  },
  {
    id: 7,
    question: "마법 능력이 생긴다면?",
    options: [
      { text: "초인적인 힘이나 무적 방어", scores: { hero: 3 } },
      { text: "동물/자연과 교감하는 능력", scores: { princess: 3 } },
      { text: "변신이나 투명화 능력", scores: { sidekick: 2, fairy: 1 } },
      { text: "마음을 조종하는 능력", scores: { villain: 3 } },
    ],
  },
  {
    id: 8,
    question: "동화의 결말에서 나는?",
    options: [
      { text: "악을 물리치고 영웅이 된다", scores: { hero: 3 } },
      { text: "진정한 사랑을 찾는다", scores: { princess: 3 } },
      { text: "주인공 곁에서 행복하게", scores: { sidekick: 3 } },
      { text: "반전 속에서 새로운 계획을...", scores: { villain: 3 } },
    ],
  },
  {
    id: 9,
    question: "어린 시절 꿈꿨던 모습은?",
    options: [
      { text: "세상을 구하는 영웅", scores: { hero: 3 } },
      { text: "모두에게 사랑받는 존재", scores: { princess: 3 } },
      { text: "멋진 사람 곁의 조력자", scores: { sidekick: 3 } },
      { text: "모든 것을 가진 성공한 사람", scores: { villain: 2, 'wise-elder': 1 } },
    ],
  },
  {
    id: 10,
    question: "힘든 상황에서 나의 반응은?",
    options: [
      { text: "포기하지 않고 끝까지 싸운다", scores: { hero: 3 } },
      { text: "희망을 잃지 않고 기다린다", scores: { princess: 3 } },
      { text: "유머로 분위기를 풀려 한다", scores: { sidekick: 3 } },
      { text: "이 상황을 이용할 방법을 찾는다", scores: { villain: 3 } },
    ],
  },
  {
    id: 11,
    question: "동화 속 나의 약점은?",
    options: [
      { text: "너무 정의로워서 위험에 빠짐", scores: { hero: 3 } },
      { text: "순수해서 속기 쉬움", scores: { princess: 3 } },
      { text: "주목받지 못해 서운함", scores: { sidekick: 3 } },
      { text: "욕심 때문에 결국 실패", scores: { villain: 3 } },
    ],
  },
  {
    id: 12,
    question: "동화가 끝나고 나는?",
    options: [
      { text: "새로운 모험을 떠난다", scores: { hero: 3 } },
      { text: "행복한 일상을 보낸다", scores: { princess: 3 } },
      { text: "영웅의 이야기를 전하는 사람이 된다", scores: { sidekick: 2, 'wise-elder': 1 } },
      { text: "은밀히 재기를 노린다", scores: { villain: 3 } },
    ],
  },
];

export const results: Record<FairytaleRoleType, FairytaleRoleResult> = {
  hero: {
    type: 'hero',
    title: '용감한 영웅',
    emoji: '⚔️',
    fairytale: '모든 모험담의 주인공',
    description: '당신은 동화 속 영웅! 정의를 위해 싸우고, 약자를 보호하며, 어떤 어려움도 포기하지 않는 용기의 상징입니다. 세상을 더 나은 곳으로 만들고 싶은 마음이 가득해요.',
    characteristics: [
      '정의감이 강함',
      '용기와 결단력',
      '리더십',
      '희생 정신',
    ],
    strengths: [
      '어떤 상황에서도 포기하지 않음',
      '사람들에게 영감을 줌',
      '행동력이 뛰어남',
      '신뢰를 주는 존재',
    ],
    weaknesses: [
      '무모하게 위험에 뛰어들 수 있음',
      '모든 것을 혼자 해결하려 함',
      '완벽주의적 성향',
    ],
    famousCharacters: ['잭과 콩나무의 잭', '헨젤과 그레텔', '빨간망토'],
    lifeLesson: '영웅은 완벽한 사람이 아니라, 두려움에도 불구하고 행동하는 사람이에요.',
    loveStyle: '연인을 지키고 보호하는 헌신적인 사랑',
    advice: '혼자서 모든 짐을 질 필요 없어요. 도움을 받는 것도 용기예요.',
  },
  princess: {
    type: 'princess',
    title: '고귀한 프린세스/프린스',
    emoji: '👑',
    fairytale: '아름다운 로맨스의 주인공',
    description: '당신은 동화 속 왕자/공주님! 아름다운 마음과 고귀한 품성으로 주변 사람들에게 희망을 주는 존재입니다. 진정한 사랑과 행복을 믿는 낭만주의자예요.',
    characteristics: [
      '순수하고 아름다운 마음',
      '희망과 낙관',
      '매력적인 카리스마',
      '사람들을 이끄는 힘',
    ],
    strengths: [
      '어디서든 사랑받음',
      '긍정적인 영향력',
      '진정성 있는 관계 형성',
      '어려움 속에서도 희망 유지',
    ],
    weaknesses: [
      '순진해서 이용당할 수 있음',
      '현실과 이상의 괴리',
      '스스로 결정하기 어려울 때',
    ],
    famousCharacters: ['신데렐라', '백설공주', '잠자는 숲속의 공주'],
    lifeLesson: '진정한 왕족은 태어나는 것이 아니라, 마음으로 만들어지는 거예요.',
    loveStyle: '운명적이고 로맨틱한 사랑을 믿음',
    advice: '스스로의 힘으로 일어설 수 있다는 것을 기억하세요. 당신은 이미 충분히 강해요.',
  },
  sidekick: {
    type: 'sidekick',
    title: '든든한 조력자',
    emoji: '🤝',
    fairytale: '영웅 옆의 진정한 친구',
    description: '당신은 동화 속 든든한 조력자! 주인공 곁에서 함께 웃고 울며, 결정적인 순간에 빛나는 진정한 친구입니다. 유머와 충성심으로 모험을 빛나게 해요.',
    characteristics: [
      '충성심과 우정',
      '유머 감각',
      '위기 대처 능력',
      '겸손함',
    ],
    strengths: [
      '든든한 지원군 역할',
      '분위기를 밝게 만듦',
      '위기 상황에서 결정적 도움',
      '진실된 우정을 나눔',
    ],
    weaknesses: [
      '자신을 과소평가할 수 있음',
      '주목받지 못해 서운함',
      '늘 2인자라는 생각',
    ],
    famousCharacters: ['당나귀 동키(슈렉)', '티몬과 품바', '피노키오의 귀뚜라미'],
    lifeLesson: '영웅은 혼자 만들어지지 않아요. 당신 같은 친구가 있어야 완성돼요.',
    loveStyle: '우정에서 시작되는 깊고 편안한 사랑',
    advice: '당신도 충분히 주인공이에요. 당신만의 이야기를 써보세요.',
  },
  villain: {
    type: 'villain',
    title: '카리스마 빌런',
    emoji: '🖤',
    fairytale: '매력적인 악역',
    description: '당신은 동화 속 빌런! 하지만 단순한 악역이 아니라, 야망과 카리스마를 가진 복잡한 캐릭터입니다. 원하는 것을 위해 전략적으로 움직이고, 목표 달성에 대한 의지가 강해요.',
    characteristics: [
      '야망과 욕심',
      '전략적 사고',
      '카리스마',
      '목표 지향적',
    ],
    strengths: [
      '강한 추진력',
      '전략적 계획 능력',
      '결단력과 실행력',
      '두려움 없는 도전',
    ],
    weaknesses: [
      '지나친 욕심으로 자멸할 수 있음',
      '신뢰 관계 형성 어려움',
      '고독함',
    ],
    famousCharacters: ['말레피센트', '백설공주의 왕비', '럼펠스틸츠킨'],
    lifeLesson: '빌런이 되는 건 선택이에요. 그 야망을 선한 방향으로 쓸 수도 있어요.',
    loveStyle: '강렬하고 소유욕 강한 사랑',
    advice: '목표를 향한 열정은 좋지만, 과정에서 소중한 것을 잃지 않도록 조심하세요.',
  },
  fairy: {
    type: 'fairy',
    title: '신비로운 요정',
    emoji: '✨',
    fairytale: '마법과 기적의 존재',
    description: '당신은 동화 속 요정! 마법 같은 도움을 주고, 기적을 만들어내는 신비로운 존재입니다. 조용히 뒤에서 도와주고, 결정적인 순간에 나타나 희망을 선사해요.',
    characteristics: [
      '신비로운 매력',
      '도움을 주는 마음',
      '지혜와 통찰력',
      '순수한 마음',
    ],
    strengths: [
      '결정적 순간의 조력자',
      '창의적 문제 해결',
      '직관력',
      '치유의 능력',
    ],
    weaknesses: [
      '직접 나서지 않으려 함',
      '존재감이 약할 수 있음',
      '규칙에 얽매임',
    ],
    famousCharacters: ['신데렐라의 대모 요정', '피터팬의 팅커벨', '피노키오의 푸른 요정'],
    lifeLesson: '기적은 특별한 마법이 아니라, 작은 친절에서 시작돼요.',
    loveStyle: '조건 없이 주는 사랑, 수호천사 같은 존재',
    advice: '당신의 도움은 소중하지만, 가끔은 받는 법도 배워보세요.',
  },
  'wise-elder': {
    type: 'wise-elder',
    title: '현명한 멘토',
    emoji: '🧙',
    fairytale: '지혜를 전하는 현자',
    description: '당신은 동화 속 현명한 멘토! 깊은 지혜와 경험으로 주인공을 올바른 길로 인도하는 존재입니다. 답을 직접 주지 않고, 스스로 깨달을 수 있게 이끌어요.',
    characteristics: [
      '깊은 지혜',
      '인내심',
      '가르침의 재능',
      '통찰력',
    ],
    strengths: [
      '신뢰받는 조언자',
      '냉철한 판단력',
      '장기적 안목',
      '감정적 안정',
    ],
    weaknesses: [
      '직접 행동하지 않으려 함',
      '고리타분하게 보일 수 있음',
      '세대 차이 느낄 수 있음',
    ],
    famousCharacters: ['간달프', '덤블도어', '이상한 나라의 체셔캣'],
    lifeLesson: '지혜는 나누면 나눌수록 커져요.',
    loveStyle: '깊고 성숙한 사랑, 인생의 동반자',
    advice: '가르침도 좋지만, 때로는 학생이 되어보세요. 배움에는 끝이 없어요.',
  },
};

export function calculateResult(answers: number[]): FairytaleRoleResult {
  const scores: Record<FairytaleRoleType, number> = {
    hero: 0,
    princess: 0,
    sidekick: 0,
    villain: 0,
    fairy: 0,
    'wise-elder': 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as FairytaleRoleType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: FairytaleRoleType = 'hero';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as FairytaleRoleType;
    }
  });

  return results[resultType];
}
