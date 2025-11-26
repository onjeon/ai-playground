// 호그와트 기숙사 테스트 - 나는 어느 기숙사?

export interface HogwartsHouseQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface HogwartsHouseResult {
  type: string;
  title: string;
  emoji: string;
  house: string;
  founder: string;
  animal: string;
  colors: string;
  element: string;
  description: string;
  characteristics: string[];
  values: string[];
  famousMembers: string[];
  commonRoom: string;
  ghostName: string;
  strengths: string[];
  challenges: string[];
  bestMatch: string;
  worstMatch: string;
  advice: string;
}

export const hogwartsHouseTypes = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'] as const;
export type HogwartsHouseType = typeof hogwartsHouseTypes[number];

export const questions: HogwartsHouseQuestion[] = [
  {
    id: 1,
    question: "위험한 상황에 처하면?",
    options: [
      { text: "두려워도 맞서 싸운다!", scores: { gryffindor: 3 } },
      { text: "상황을 분석하고 최선의 방법을 찾는다", scores: { ravenclaw: 3 } },
      { text: "함께할 친구들을 찾는다", scores: { hufflepuff: 3 } },
      { text: "나에게 유리한 방향으로 이끈다", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 2,
    question: "가장 중요하게 생각하는 가치는?",
    options: [
      { text: "용기와 정의", scores: { gryffindor: 3 } },
      { text: "지혜와 창의성", scores: { ravenclaw: 3 } },
      { text: "충성과 공정", scores: { hufflepuff: 3 } },
      { text: "야망과 성취", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 3,
    question: "친구를 고를 때 가장 중요한 것은?",
    options: [
      { text: "함께 모험할 수 있는 용감함", scores: { gryffindor: 3 } },
      { text: "지적인 대화가 가능한 똑똒함", scores: { ravenclaw: 3 } },
      { text: "믿을 수 있는 진실된 마음", scores: { hufflepuff: 3 } },
      { text: "함께 성공할 수 있는 능력", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 4,
    question: "마법 능력이 생긴다면?",
    options: [
      { text: "세상을 지키는 데 쓴다", scores: { gryffindor: 3 } },
      { text: "마법의 원리를 연구한다", scores: { ravenclaw: 3 } },
      { text: "사람들을 돕는 데 쓴다", scores: { hufflepuff: 3 } },
      { text: "나의 목표를 이루는 데 쓴다", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 5,
    question: "꿈에서 본 장면은?",
    options: [
      { text: "불꽃 속에서 영웅처럼 싸우는 나", scores: { gryffindor: 3 } },
      { text: "도서관에서 고대 마법서를 읽는 나", scores: { ravenclaw: 3 } },
      { text: "친구들과 웃으며 정원을 거니는 나", scores: { hufflepuff: 3 } },
      { text: "왕좌에 앉아 모든 것을 이룬 나", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 6,
    question: "시험 전날 나는?",
    options: [
      { text: "에이 어떻게든 되겠지!", scores: { gryffindor: 3 } },
      { text: "이미 완벽하게 공부 끝", scores: { ravenclaw: 3 } },
      { text: "친구들이랑 같이 공부", scores: { hufflepuff: 3 } },
      { text: "전략적으로 나올 것만 공부", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 7,
    question: "규칙을 어겨야 할 상황이라면?",
    options: [
      { text: "옳은 일이라면 규칙 따윈!", scores: { gryffindor: 3 } },
      { text: "규칙의 허점을 찾아 합법적으로", scores: { ravenclaw: 2, slytherin: 1 } },
      { text: "규칙은 지켜야지... 고민됨", scores: { hufflepuff: 3 } },
      { text: "나에게 이득이라면 어길 수 있어", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 8,
    question: "팀 프로젝트에서 나의 역할은?",
    options: [
      { text: "앞장서서 이끄는 리더", scores: { gryffindor: 3 } },
      { text: "아이디어 내고 전략 짜는 두뇌", scores: { ravenclaw: 3 } },
      { text: "모두를 챙기는 조율자", scores: { hufflepuff: 3 } },
      { text: "결과를 내기 위해 밀어붙이는 추진자", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 9,
    question: "가장 두려운 것은?",
    options: [
      { text: "비겁하다는 소리 듣는 것", scores: { gryffindor: 3 } },
      { text: "무식하다는 소리 듣는 것", scores: { ravenclaw: 3 } },
      { text: "외톨이가 되는 것", scores: { hufflepuff: 3 } },
      { text: "실패하는 것", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 10,
    question: "성공의 정의는?",
    options: [
      { text: "옳은 일을 해내는 것", scores: { gryffindor: 3 } },
      { text: "진리를 깨닫는 것", scores: { ravenclaw: 3 } },
      { text: "함께 행복한 것", scores: { hufflepuff: 3 } },
      { text: "목표를 달성하는 것", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 11,
    question: "마법 물약을 만든다면?",
    options: [
      { text: "용기를 주는 물약", scores: { gryffindor: 3 } },
      { text: "지혜를 높이는 물약", scores: { ravenclaw: 3 } },
      { text: "행복을 주는 물약", scores: { hufflepuff: 3 } },
      { text: "성공을 부르는 물약", scores: { slytherin: 3 } },
    ],
  },
  {
    id: 12,
    question: "호그와트에서 가장 하고 싶은 것은?",
    options: [
      { text: "퀴디치 선수로 활약!", scores: { gryffindor: 3 } },
      { text: "금지된 구역 탐험과 연구", scores: { ravenclaw: 3 } },
      { text: "모든 기숙사와 친구 되기", scores: { hufflepuff: 3 } },
      { text: "최고의 마법사가 되기", scores: { slytherin: 3 } },
    ],
  },
];

export const results: Record<HogwartsHouseType, HogwartsHouseResult> = {
  gryffindor: {
    type: 'gryffindor',
    title: '그리핀도르 (Gryffindor)',
    emoji: '🦁',
    house: '그리핀도르',
    founder: '고드릭 그리핀도르',
    animal: '사자',
    colors: '빨강과 금색',
    element: '불',
    description: '용기와 기사도를 중시하는 그리핀도르! 두려움에 맞서고, 옳은 일을 위해 행동하는 당신은 진정한 용사예요. 정의로운 마음으로 세상을 밝히세요.',
    characteristics: [
      '용감하고 대담함',
      '기사도 정신',
      '정의감이 강함',
      '모험을 즐김',
    ],
    values: ['용기', '결단력', '기사도', '정의'],
    famousMembers: ['해리 포터', '헤르미온느 그레인저', '론 위즐리', '알버스 덤블도어'],
    commonRoom: '그리핀도르 탑 (뚱보 여인 초상화 뒤)',
    ghostName: '목 없는 닉',
    strengths: [
      '위기 상황에서 빛나는 용기',
      '리더십',
      '정의를 위한 행동력',
      '충성심',
    ],
    challenges: [
      '무모할 수 있음',
      '규칙을 어기는 경향',
      '충동적인 결정',
    ],
    bestMatch: '허플푸프 (서로를 보완)',
    worstMatch: '슬리데린 (가치관 충돌)',
    advice: '용기는 두려움이 없는 것이 아니라, 두려움에도 행동하는 거예요.',
  },
  slytherin: {
    type: 'slytherin',
    title: '슬리데린 (Slytherin)',
    emoji: '🐍',
    house: '슬리데린',
    founder: '살라자르 슬리데린',
    animal: '뱀',
    colors: '초록과 은색',
    element: '물',
    description: '야망과 리더십의 슬리데린! 목표를 향해 전략적으로 나아가는 당신은 큰 성취를 이룰 잠재력이 있어요. 당신의 야망을 긍정적으로 펼치세요.',
    characteristics: [
      '야망이 크고 목표지향적',
      '전략적 사고',
      '리더십',
      '자기 보존 본능',
    ],
    values: ['야망', '교활함', '리더십', '형제애'],
    famousMembers: ['세베루스 스네이프', '드라코 말포이', '멀린', '호라스 슬러그혼'],
    commonRoom: '지하 감옥 (호수 아래)',
    ghostName: '피의 남작',
    strengths: [
      '목표 달성 능력',
      '전략적 사고',
      '결단력',
      '리더십',
    ],
    challenges: [
      '수단과 방법 가리지 않음',
      '이기적으로 보일 수 있음',
      '신뢰받기 어려울 수 있음',
    ],
    bestMatch: '래번클로 (지적 파트너)',
    worstMatch: '그리핀도르 (가치관 충돌)',
    advice: '위대함은 좋은 것이지만, 선함도 위대함이에요.',
  },
  ravenclaw: {
    type: 'ravenclaw',
    title: '래번클로 (Ravenclaw)',
    emoji: '🦅',
    house: '래번클로',
    founder: '로웨나 래번클로',
    animal: '독수리',
    colors: '파랑과 청동색',
    element: '공기',
    description: '지혜와 창의성의 래번클로! 호기심 가득하고 지적인 당신은 끊임없이 배우고 성장해요. 당신의 지식으로 세상을 밝히세요.',
    characteristics: [
      '지적 호기심',
      '창의적',
      '독립적 사고',
      '지혜를 추구',
    ],
    values: ['지혜', '창의성', '학습', '재치'],
    famousMembers: ['루나 러브굿', '조 창', '길데로이 록허트', '피우스 싱크니스'],
    commonRoom: '래번클로 탑 (수수께끼 풀어야 입장)',
    ghostName: '회색 숙녀',
    strengths: [
      '뛰어난 분석력',
      '창의적 문제 해결',
      '독립적 사고',
      '지식 습득력',
    ],
    challenges: [
      '실용성 부족할 수 있음',
      '감정보다 이성 우선',
      '고립될 수 있음',
    ],
    bestMatch: '슬리데린 (전략적 파트너)',
    worstMatch: '허플푸프 (가치관 차이)',
    advice: '지식도 중요하지만, 마음의 지혜도 함께 키우세요.',
  },
  hufflepuff: {
    type: 'hufflepuff',
    title: '허플푸프 (Hufflepuff)',
    emoji: '🦡',
    house: '허플푸프',
    founder: '헬가 허플푸프',
    animal: '오소리',
    colors: '노랑과 검정',
    element: '땅',
    description: '충성과 공정의 허플푸프! 진실되고 따뜻한 당신은 모든 사람을 존중하고 포용해요. 당신의 친절함이 세상을 따뜻하게 해요.',
    characteristics: [
      '충성스럽고 진실됨',
      '공정함',
      '인내심',
      '포용력',
    ],
    values: ['공정', '충성', '인내', '근면'],
    famousMembers: ['뉴트 스캐맨더', '세드릭 디고리', '님파도라 통스', '포모나 스프라우트'],
    commonRoom: '주방 근처 지하 (통 두드리기)',
    ghostName: '뚱뚱한 수사',
    strengths: [
      '신뢰할 수 있음',
      '공평한 판단',
      '모든 사람과 친해짐',
      '꾸준한 노력',
    ],
    challenges: [
      '자기 주장이 약할 수 있음',
      '저평가 받을 수 있음',
      '갈등 회피 경향',
    ],
    bestMatch: '그리핀도르 (서로 보완)',
    worstMatch: '래번클로 (가치관 차이)',
    advice: '당신의 친절함은 강점이에요. 자신의 가치를 믿으세요.',
  },
};

export function calculateResult(answers: number[]): HogwartsHouseResult {
  const scores: Record<HogwartsHouseType, number> = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as HogwartsHouseType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: HogwartsHouseType = 'gryffindor';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as HogwartsHouseType;
    }
  });

  return results[resultType];
}
