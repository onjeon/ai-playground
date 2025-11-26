// 소울 애니멀 테스트 질문 및 결과 데이터

export interface SoulAnimalQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>; // animal type -> score
  }[];
}

export interface SoulAnimalResult {
  type: string;
  animal: string;
  emoji: string;
  title: string;
  description: string;
  traits: string[];
  compatibility: string[];
  incompatibility: string[];
}

// 동물 유형
export const animalTypes = ['wolf', 'cat', 'bear', 'fox', 'owl', 'dolphin', 'rabbit', 'lion'] as const;
export type AnimalType = typeof animalTypes[number];

// 질문 데이터
export const questions: SoulAnimalQuestion[] = [
  {
    id: 1,
    question: "주말에 가장 하고 싶은 것은?",
    options: [
      { text: "친구들과 신나게 놀기", scores: { wolf: 2, dolphin: 2, lion: 1 } },
      { text: "혼자 집에서 책이나 영화 보기", scores: { cat: 2, owl: 2, bear: 1 } },
      { text: "새로운 장소 탐험하기", scores: { fox: 2, wolf: 1, dolphin: 1 } },
      { text: "푹 자기", scores: { bear: 2, cat: 1, rabbit: 1 } },
    ],
  },
  {
    id: 2,
    question: "친구가 갑자기 고민 상담을 요청했을 때 나는?",
    options: [
      { text: "즉시 달려가서 들어준다", scores: { dolphin: 2, rabbit: 2, wolf: 1 } },
      { text: "일단 상황을 파악하고 해결책을 제시한다", scores: { owl: 2, fox: 2 } },
      { text: "같이 술 마시면서 기분 풀게 해준다", scores: { bear: 2, lion: 1 } },
      { text: "적당히 들어주고 혼자 해결하도록 한다", scores: { cat: 2, fox: 1 } },
    ],
  },
  {
    id: 3,
    question: "처음 보는 사람들과 어울릴 때 나는?",
    options: [
      { text: "먼저 다가가서 말을 건다", scores: { dolphin: 2, lion: 2, wolf: 1 } },
      { text: "누군가 말 걸어주길 기다린다", scores: { rabbit: 2, cat: 1, bear: 1 } },
      { text: "일단 관찰하다가 흥미로운 사람에게 접근한다", scores: { fox: 2, owl: 2 } },
      { text: "가능하면 빨리 자리를 피하고 싶다", scores: { cat: 2, bear: 1, owl: 1 } },
    ],
  },
  {
    id: 4,
    question: "나의 가장 큰 장점은?",
    options: [
      { text: "리더십과 추진력", scores: { lion: 2, wolf: 2 } },
      { text: "공감 능력과 친화력", scores: { dolphin: 2, rabbit: 2 } },
      { text: "분석력과 논리력", scores: { owl: 2, fox: 1 } },
      { text: "인내심과 안정감", scores: { bear: 2, cat: 1 } },
    ],
  },
  {
    id: 5,
    question: "스트레스를 받으면 어떻게 하나요?",
    options: [
      { text: "운동이나 활동적인 것으로 푼다", scores: { wolf: 2, lion: 2, dolphin: 1 } },
      { text: "혼자만의 시간을 갖는다", scores: { cat: 2, bear: 2, owl: 1 } },
      { text: "친한 사람에게 털어놓는다", scores: { rabbit: 2, dolphin: 2 } },
      { text: "뭔가 몰두할 수 있는 일을 한다", scores: { fox: 2, owl: 1 } },
    ],
  },
  {
    id: 6,
    question: "일을 할 때 나는?",
    options: [
      { text: "계획을 세우고 체계적으로 진행한다", scores: { owl: 2, fox: 1 } },
      { text: "그때그때 유연하게 대처한다", scores: { fox: 2, dolphin: 1, cat: 1 } },
      { text: "팀과 협력하며 함께 해결한다", scores: { wolf: 2, dolphin: 2 } },
      { text: "내 페이스대로 묵묵히 한다", scores: { bear: 2, cat: 2 } },
    ],
  },
  {
    id: 7,
    question: "나에게 이상적인 휴가는?",
    options: [
      { text: "액티비티가 가득한 여행", scores: { wolf: 2, dolphin: 2, fox: 1 } },
      { text: "조용한 자연 속에서의 힐링", scores: { bear: 2, cat: 2, owl: 1 } },
      { text: "새로운 문화와 사람을 만나는 여행", scores: { fox: 2, lion: 1, dolphin: 1 } },
      { text: "집에서 아무것도 안 하기", scores: { cat: 2, rabbit: 1, bear: 1 } },
    ],
  },
  {
    id: 8,
    question: "어려운 결정을 내릴 때 나는?",
    options: [
      { text: "직감을 믿고 빠르게 결정한다", scores: { lion: 2, wolf: 1, fox: 1 } },
      { text: "충분히 분석하고 신중하게 결정한다", scores: { owl: 2, fox: 2 } },
      { text: "주변 사람들의 의견을 구한다", scores: { rabbit: 2, dolphin: 2 } },
      { text: "일단 미뤄두고 자연스럽게 해결되길 기다린다", scores: { bear: 2, cat: 1 } },
    ],
  },
  {
    id: 9,
    question: "나의 감정 표현 방식은?",
    options: [
      { text: "감정을 솔직하고 적극적으로 표현한다", scores: { dolphin: 2, lion: 2, wolf: 1 } },
      { text: "가까운 사람에게만 표현한다", scores: { rabbit: 2, bear: 1, cat: 1 } },
      { text: "잘 표현하지 않는 편이다", scores: { cat: 2, owl: 2 } },
      { text: "상황에 따라 다르다", scores: { fox: 2, bear: 1 } },
    ],
  },
  {
    id: 10,
    question: "친구들 사이에서 나의 역할은?",
    options: [
      { text: "분위기 메이커, 리더", scores: { lion: 2, wolf: 2, dolphin: 1 } },
      { text: "들어주는 상담사", scores: { rabbit: 2, dolphin: 1, owl: 1 } },
      { text: "아이디어뱅크, 참모", scores: { fox: 2, owl: 2 } },
      { text: "묵묵한 서포터", scores: { bear: 2, cat: 1 } },
    ],
  },
  {
    id: 11,
    question: "화가 났을 때 나는?",
    options: [
      { text: "바로 표현하고 해결하려 한다", scores: { lion: 2, wolf: 1 } },
      { text: "혼자 삭이면서 정리한다", scores: { cat: 2, bear: 2, owl: 1 } },
      { text: "신뢰하는 사람에게 이야기한다", scores: { rabbit: 2, dolphin: 1 } },
      { text: "다른 활동으로 전환한다", scores: { fox: 2, dolphin: 1 } },
    ],
  },
  {
    id: 12,
    question: "새로운 것을 배울 때 나는?",
    options: [
      { text: "일단 해보면서 배운다", scores: { wolf: 2, fox: 2, lion: 1 } },
      { text: "체계적으로 기초부터 공부한다", scores: { owl: 2, bear: 1 } },
      { text: "관심 가는 것만 깊게 판다", scores: { cat: 2, fox: 1 } },
      { text: "다른 사람에게 배우는 걸 좋아한다", scores: { rabbit: 2, dolphin: 1 } },
    ],
  },
];

// 결과 데이터
export const results: Record<AnimalType, SoulAnimalResult> = {
  wolf: {
    type: 'wolf',
    animal: '늑대',
    emoji: '🐺',
    title: '카리스마 넘치는 늑대',
    description: '당신은 강한 유대감과 팀워크를 중시하는 늑대 유형입니다. 가족과 친구에 대한 충성심이 강하고, 목표를 향해 끈질기게 나아가는 추진력이 있습니다. 리더십이 있으면서도 협력을 중시하는 균형 잡힌 성격의 소유자입니다.',
    traits: ['충성심', '리더십', '팀워크', '끈기', '보호본능'],
    compatibility: ['사자', '돌고래', '곰'],
    incompatibility: ['고양이'],
  },
  cat: {
    type: 'cat',
    animal: '고양이',
    emoji: '🐱',
    title: '독립적인 고양이',
    description: '당신은 자유롭고 독립적인 고양이 유형입니다. 혼자만의 시간을 소중히 여기고, 자신만의 세계가 뚜렷합니다. 겉으로는 쿨해 보이지만, 마음을 연 사람에게는 한없이 따뜻한 모습을 보여주는 반전 매력의 소유자입니다.',
    traits: ['독립심', '자유로움', '신비로움', '직관력', '우아함'],
    compatibility: ['부엉이', '곰', '토끼'],
    incompatibility: ['늑대', '사자'],
  },
  bear: {
    type: 'bear',
    animal: '곰',
    emoji: '🐻',
    title: '듬직한 곰',
    description: '당신은 편안하고 듬직한 곰 유형입니다. 느긋하고 여유로운 성격으로 주변 사람들에게 안정감을 줍니다. 겉으로는 느려 보여도 중요한 순간에 강한 힘을 발휘하며, 가족과 소중한 사람들을 지키는 수호자 같은 존재입니다.',
    traits: ['안정감', '인내심', '포용력', '여유로움', '보호본능'],
    compatibility: ['토끼', '고양이', '늑대'],
    incompatibility: ['여우'],
  },
  fox: {
    type: 'fox',
    animal: '여우',
    emoji: '🦊',
    title: '영리한 여우',
    description: '당신은 영리하고 적응력이 뛰어난 여우 유형입니다. 상황 판단이 빠르고 유연하게 대처하는 능력이 있습니다. 호기심이 많아 새로운 것을 탐구하길 좋아하며, 창의적인 해결책을 찾아내는 데 탁월합니다.',
    traits: ['영리함', '적응력', '호기심', '창의성', '관찰력'],
    compatibility: ['부엉이', '돌고래', '사자'],
    incompatibility: ['곰'],
  },
  owl: {
    type: 'owl',
    animal: '부엉이',
    emoji: '🦉',
    title: '지혜로운 부엉이',
    description: '당신은 깊은 사고와 지혜를 가진 부엉이 유형입니다. 분석적이고 논리적인 사고를 하며, 조용히 관찰하고 핵심을 꿰뚫어 봅니다. 지식에 대한 갈증이 있고, 깊이 있는 대화를 즐깁니다.',
    traits: ['지혜', '분석력', '신중함', '통찰력', '독립성'],
    compatibility: ['여우', '고양이', '곰'],
    incompatibility: ['돌고래'],
  },
  dolphin: {
    type: 'dolphin',
    animal: '돌고래',
    emoji: '🐬',
    title: '사교적인 돌고래',
    description: '당신은 밝고 사교적인 돌고래 유형입니다. 사람들과 어울리는 것을 좋아하고, 긍정적인 에너지로 주변을 환하게 만듭니다. 공감 능력이 뛰어나 다른 사람의 감정을 잘 이해하며, 유머 감각도 탁월합니다.',
    traits: ['사교성', '긍정적', '공감능력', '유머감각', '지능'],
    compatibility: ['늑대', '여우', '토끼'],
    incompatibility: ['부엉이'],
  },
  rabbit: {
    type: 'rabbit',
    animal: '토끼',
    emoji: '🐰',
    title: '온화한 토끼',
    description: '당신은 온화하고 다정한 토끼 유형입니다. 섬세하고 배려심이 깊어 주변 사람들의 마음을 잘 헤아립니다. 평화를 사랑하고 다툼을 싫어하며, 조용하지만 사람들에게 깊은 인상을 남기는 타입입니다.',
    traits: ['온화함', '섬세함', '배려심', '평화주의', '감수성'],
    compatibility: ['곰', '돌고래', '고양이'],
    incompatibility: ['사자'],
  },
  lion: {
    type: 'lion',
    animal: '사자',
    emoji: '🦁',
    title: '당당한 사자',
    description: '당신은 자신감 넘치고 당당한 사자 유형입니다. 타고난 리더십과 카리스마로 사람들을 이끄는 힘이 있습니다. 도전을 두려워하지 않고, 자신의 영역에서 최고가 되려는 열정이 있습니다.',
    traits: ['자신감', '리더십', '카리스마', '용기', '야망'],
    compatibility: ['늑대', '여우', '돌고래'],
    incompatibility: ['고양이', '토끼'],
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): SoulAnimalResult {
  const scores: Record<AnimalType, number> = {
    wolf: 0,
    cat: 0,
    bear: 0,
    fox: 0,
    owl: 0,
    dolphin: 0,
    rabbit: 0,
    lion: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([animal, score]) => {
        scores[animal as AnimalType] += score;
      });
    }
  });

  // 가장 높은 점수의 동물 찾기
  let maxScore = 0;
  let resultType: AnimalType = 'wolf';

  Object.entries(scores).forEach(([animal, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = animal as AnimalType;
    }
  });

  return results[resultType];
}
