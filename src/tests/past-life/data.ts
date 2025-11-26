// 전생 테스트 질문 및 결과 데이터

export interface PastLifeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface PastLifeResult {
  type: string;
  title: string;
  emoji: string;
  era: string;
  occupation: string;
  description: string;
  personality: string[];
  lifestyle: string;
  lesson: string;
  currentInfluence: string;
  famousExample: string;
}

// 전생 유형
export const pastLifeTypes = [
  'royalty', 'warrior', 'artist', 'scholar', 'merchant', 
  'healer', 'explorer', 'monk', 'rebel', 'craftsman'
] as const;
export type PastLifeType = typeof pastLifeTypes[number];

// 질문 데이터 (10문항)
export const questions: PastLifeQuestion[] = [
  {
    id: 1,
    question: "어렸을 때 자주 했던 상상은?",
    options: [
      { text: "화려한 궁전에서 사는 상상", scores: { royalty: 2, merchant: 1 } },
      { text: "먼 곳을 여행하는 상상", scores: { explorer: 2, merchant: 1 } },
      { text: "전쟁터에서 싸우는 영웅 상상", scores: { warrior: 2, rebel: 1 } },
      { text: "숲속 오두막에서 조용히 사는 상상", scores: { monk: 2, healer: 1 } },
    ],
  },
  {
    id: 2,
    question: "처음 가본 곳인데 묘하게 익숙한 느낌이 드는 장소는?",
    options: [
      { text: "고풍스러운 성당이나 사찰", scores: { monk: 2, scholar: 1 } },
      { text: "오래된 시장이나 항구", scores: { merchant: 2, explorer: 1 } },
      { text: "박물관이나 고성", scores: { royalty: 2, warrior: 1 } },
      { text: "자연 속 고요한 장소", scores: { healer: 2, artist: 1 } },
    ],
  },
  {
    id: 3,
    question: "어떤 역사 시대에 끌리나요?",
    options: [
      { text: "화려한 르네상스 시대", scores: { artist: 2, royalty: 1 } },
      { text: "대항해 시대", scores: { explorer: 2, merchant: 1 } },
      { text: "고대 철학자들의 시대", scores: { scholar: 2, monk: 1 } },
      { text: "혁명과 변화의 시대", scores: { rebel: 2, warrior: 1 } },
    ],
  },
  {
    id: 4,
    question: "꿈에서 자주 보는 장면은?",
    options: [
      { text: "넓은 들판이나 전쟁터", scores: { warrior: 2, rebel: 1 } },
      { text: "알 수 없는 문자나 책", scores: { scholar: 2, monk: 1 } },
      { text: "아름다운 음악이나 예술 작품", scores: { artist: 2, royalty: 1 } },
      { text: "약초나 치료하는 장면", scores: { healer: 2, craftsman: 1 } },
    ],
  },
  {
    id: 5,
    question: "설명할 수 없이 두려움을 느끼는 것은?",
    options: [
      { text: "높은 곳이나 떨어지는 것", scores: { craftsman: 2, rebel: 1 } },
      { text: "갇히거나 속박당하는 것", scores: { rebel: 2, explorer: 1 } },
      { text: "배신당하거나 무시당하는 것", scores: { royalty: 2, warrior: 1 } },
      { text: "실패하거나 무능해지는 것", scores: { scholar: 2, artist: 1 } },
    ],
  },
  {
    id: 6,
    question: "타고난 재능이라고 느끼는 것은?",
    options: [
      { text: "사람들을 이끄는 능력", scores: { royalty: 2, warrior: 1 } },
      { text: "손으로 무언가를 만드는 것", scores: { craftsman: 2, artist: 1 } },
      { text: "다른 사람의 아픔을 치유하는 것", scores: { healer: 2, monk: 1 } },
      { text: "새로운 것을 발견하고 배우는 것", scores: { explorer: 2, scholar: 1 } },
    ],
  },
  {
    id: 7,
    question: "어떤 물건에 이유 없이 끌리나요?",
    options: [
      { text: "오래된 검이나 갑옷", scores: { warrior: 2, rebel: 1 } },
      { text: "골동품 장신구나 보석", scores: { royalty: 2, merchant: 1 } },
      { text: "오래된 책이나 지도", scores: { scholar: 2, explorer: 1 } },
      { text: "악기나 미술 도구", scores: { artist: 2, craftsman: 1 } },
    ],
  },
  {
    id: 8,
    question: "삶에서 가장 중요하게 여기는 가치는?",
    options: [
      { text: "자유와 모험", scores: { explorer: 2, rebel: 1 } },
      { text: "지식과 지혜", scores: { scholar: 2, monk: 1 } },
      { text: "사랑과 아름다움", scores: { artist: 2, healer: 1 } },
      { text: "명예와 정의", scores: { warrior: 2, royalty: 1 } },
    ],
  },
  {
    id: 9,
    question: "사람들에게 어떤 존재로 기억되고 싶나요?",
    options: [
      { text: "위대한 업적을 남긴 사람", scores: { royalty: 2, warrior: 1 } },
      { text: "세상을 바꾼 혁신가", scores: { rebel: 2, explorer: 1 } },
      { text: "많은 이들을 도운 치유자", scores: { healer: 2, monk: 1 } },
      { text: "아름다운 작품을 남긴 사람", scores: { artist: 2, craftsman: 1 } },
    ],
  },
  {
    id: 10,
    question: "이상적인 삶의 방식은?",
    options: [
      { text: "부와 권력을 누리며 영향력 행사", scores: { royalty: 2, merchant: 1 } },
      { text: "세상을 떠돌며 새로운 경험 추구", scores: { explorer: 2, rebel: 1 } },
      { text: "조용히 수행하며 내면의 평화 추구", scores: { monk: 2, scholar: 1 } },
      { text: "손으로 무언가를 창조하며 살기", scores: { craftsman: 2, artist: 1 } },
    ],
  },
];

// 결과 데이터
export const results: Record<PastLifeType, PastLifeResult> = {
  royalty: {
    type: 'royalty',
    title: '고귀한 왕족',
    emoji: '👑',
    era: '중세 유럽 또는 고대 왕국',
    occupation: '왕자/공주 또는 귀족',
    description: '당신의 전생은 화려한 궁전에서 태어난 왕족이었습니다. 사람들의 존경을 받으며 살았고, 많은 이들의 운명을 결정하는 위치에 있었습니다. 당신은 태어날 때부터 특별한 운명을 짊어졌고, 그 책임감이 현재에도 남아있습니다.',
    personality: ['카리스마', '책임감', '우아함', '결단력'],
    lifestyle: '금은보화로 장식된 궁전에서 하인들의 시중을 받으며 살았습니다. 연회와 무도회, 외교 활동으로 바쁜 나날을 보냈습니다.',
    lesson: '진정한 리더십은 권력이 아닌 섬김에서 온다는 것',
    currentInfluence: '현재 삶에서 자연스럽게 리더 역할을 맡게 되고, 사람들이 당신의 의견을 존중합니다.',
    famousExample: '클레오파트라, 엘리자베스 1세',
  },
  warrior: {
    type: 'warrior',
    title: '용맹한 전사',
    emoji: '⚔️',
    era: '고대 또는 중세 전쟁의 시대',
    occupation: '기사 또는 장군',
    description: '당신의 전생은 전장을 누비던 용맹한 전사였습니다. 검을 들고 정의를 위해 싸웠으며, 동료들의 신뢰를 한 몸에 받았습니다. 전투의 긴장감과 승리의 환희, 그리고 패배의 아픔을 모두 경험했습니다.',
    personality: ['용기', '충성심', '정의감', '인내력'],
    lifestyle: '전쟁터와 훈련장을 오가며 전투 기술을 연마했습니다. 전우들과의 우정은 그 무엇보다 소중했습니다.',
    lesson: '진정한 힘은 약자를 지키는 데 사용해야 한다는 것',
    currentInfluence: '현재 삶에서 불의를 참지 못하고, 어려운 상황에서도 쉽게 물러서지 않습니다.',
    famousExample: '잔 다르크, 알렉산더 대왕',
  },
  artist: {
    type: 'artist',
    title: '열정적인 예술가',
    emoji: '🎨',
    era: '르네상스 또는 낭만주의 시대',
    occupation: '화가, 음악가, 또는 시인',
    description: '당신의 전생은 아름다움을 추구한 예술가였습니다. 캔버스와 붓, 또는 악기와 펜을 통해 영혼을 표현했습니다. 세상의 아름다움과 슬픔을 예술로 승화시켰고, 후대에 영감을 남겼습니다.',
    personality: ['감수성', '창의력', '열정', '자유로움'],
    lifestyle: '작업실에서 밤을 새워 작품을 만들고, 예술가들과 교류하며 영감을 나눴습니다. 가난했지만 정신적으로 풍요로웠습니다.',
    lesson: '아름다움은 완벽함이 아닌 진정성에서 나온다는 것',
    currentInfluence: '현재 삶에서 예술과 아름다움에 자연스럽게 끌리고, 창의적인 표현을 갈망합니다.',
    famousExample: '레오나르도 다빈치, 쇼팽',
  },
  scholar: {
    type: 'scholar',
    title: '현명한 학자',
    emoji: '📚',
    era: '고대 그리스 또는 동양의 학문 전성기',
    occupation: '철학자 또는 학자',
    description: '당신의 전생은 지식을 탐구하던 학자였습니다. 도서관과 서재에서 진리를 찾아 헤맸고, 제자들에게 지혜를 전수했습니다. 세상의 이치를 이해하려는 끝없는 호기심이 있었습니다.',
    personality: ['지혜', '분석력', '인내심', '겸손'],
    lifestyle: '책과 문서에 둘러싸여 살았으며, 토론과 강의로 하루를 보냈습니다. 물질보다 정신적 가치를 중시했습니다.',
    lesson: '지식의 진정한 가치는 나누는 데 있다는 것',
    currentInfluence: '현재 삶에서 배움에 대한 강한 열망이 있고, 깊이 있는 사고를 즐깁니다.',
    famousExample: '소크라테스, 공자',
  },
  merchant: {
    type: 'merchant',
    title: '영리한 상인',
    emoji: '💰',
    era: '실크로드 시대 또는 대항해 시대',
    occupation: '무역상 또는 사업가',
    description: '당신의 전생은 세상을 누비던 상인이었습니다. 동서양을 오가며 물건을 거래하고, 사람들과 협상하며 부를 쌓았습니다. 기회를 포착하는 눈과 협상의 달인이었습니다.',
    personality: ['영리함', '사교성', '기회포착', '실용적'],
    lifestyle: '시장과 항구, 대상 행렬과 함께 여행하며 살았습니다. 다양한 문화와 사람들을 만나며 세계관을 넓혔습니다.',
    lesson: '진정한 부는 관계에서 온다는 것',
    currentInfluence: '현재 삶에서 사업 감각이 뛰어나고, 사람들과의 네트워크를 중시합니다.',
    famousExample: '마르코 폴로, 메디치 가문',
  },
  healer: {
    type: 'healer',
    title: '자비로운 치유자',
    emoji: '🌿',
    era: '고대 또는 중세 마을',
    occupation: '약초사, 의원, 또는 산파',
    description: '당신의 전생은 사람들의 아픔을 치유하던 치유자였습니다. 약초의 비밀을 알았고, 손길 하나로 고통을 덜어주었습니다. 마을 사람들의 존경과 신뢰를 받았습니다.',
    personality: ['자비심', '직관력', '인내심', '헌신'],
    lifestyle: '자연 속에서 약초를 캐고, 환자를 돌보며 살았습니다. 물질적 보상보다 타인의 회복에서 기쁨을 찾았습니다.',
    lesson: '치유는 몸뿐 아니라 마음에서도 일어난다는 것',
    currentInfluence: '현재 삶에서 타인의 감정을 잘 읽고, 자연스럽게 돌봄의 역할을 맡습니다.',
    famousExample: '히포크라테스, 나이팅게일',
  },
  explorer: {
    type: 'explorer',
    title: '대담한 탐험가',
    emoji: '🧭',
    era: '대항해 시대',
    occupation: '항해사 또는 탐험대장',
    description: '당신의 전생은 미지의 세계를 탐험하던 탐험가였습니다. 새로운 땅을 발견하고, 위험을 무릅쓰고 모험을 떠났습니다. 호기심과 용기가 당신의 원동력이었습니다.',
    personality: ['모험심', '호기심', '독립심', '적응력'],
    lifestyle: '배를 타고 바다를 건너거나, 낯선 땅을 걸으며 살았습니다. 집보다 길 위에서 더 편안함을 느꼈습니다.',
    lesson: '가장 큰 발견은 자기 자신이라는 것',
    currentInfluence: '현재 삶에서 새로운 경험에 대한 갈망이 강하고, 한 곳에 정착하기 어려워합니다.',
    famousExample: '콜럼버스, 마젤란',
  },
  monk: {
    type: 'monk',
    title: '깨달은 수행자',
    emoji: '🙏',
    era: '고대 동양 또는 중세 유럽',
    occupation: '승려 또는 수도사',
    description: '당신의 전생은 깨달음을 추구하던 수행자였습니다. 세속을 떠나 정신적 성장에 전념했고, 명상과 기도로 내면의 평화를 찾았습니다. 적은 것에 만족하며 높은 정신적 경지에 도달했습니다.',
    personality: ['평화로움', '지혜', '절제', '통찰력'],
    lifestyle: '사찰이나 수도원에서 명상과 기도, 봉사로 하루를 보냈습니다. 물질적 풍요보다 정신적 평화를 추구했습니다.',
    lesson: '진정한 자유는 욕망에서 벗어나는 것이라는 것',
    currentInfluence: '현재 삶에서 내면의 평화를 중시하고, 명상이나 영적인 것에 끌립니다.',
    famousExample: '달라이 라마, 토마스 머튼',
  },
  rebel: {
    type: 'rebel',
    title: '혁명의 투사',
    emoji: '✊',
    era: '혁명과 변화의 시대',
    occupation: '혁명가 또는 사회운동가',
    description: '당신의 전생은 불의에 맞서 싸운 혁명가였습니다. 기존 질서에 의문을 품고, 더 나은 세상을 위해 목숨을 걸었습니다. 많은 이들에게 영감을 주었고, 변화의 씨앗을 뿌렸습니다.',
    personality: ['정의감', '용기', '열정', '독립심'],
    lifestyle: '비밀 모임과 연설, 때로는 투옥과 도피로 점철된 삶이었습니다. 개인의 안위보다 대의를 위해 살았습니다.',
    lesson: '진정한 변화는 한 사람의 용기에서 시작된다는 것',
    currentInfluence: '현재 삶에서 불공정에 민감하고, 변화를 두려워하지 않습니다.',
    famousExample: '체 게바라, 간디',
  },
  craftsman: {
    type: 'craftsman',
    title: '숙련된 장인',
    emoji: '🔨',
    era: '중세 길드 시대',
    occupation: '대장장이, 목공, 또는 도예가',
    description: '당신의 전생은 손으로 걸작을 만들어낸 장인이었습니다. 수년간의 수련 끝에 기술을 완성했고, 당신이 만든 작품은 세대를 넘어 남았습니다. 완벽을 추구하는 장인정신이 있었습니다.',
    personality: ['인내심', '집중력', '완벽주의', '실용성'],
    lifestyle: '작업장에서 하루 종일 망치를 두드리거나 물레를 돌렸습니다. 결과물을 통해 자신의 존재를 증명했습니다.',
    lesson: '진정한 명작은 시간과 정성이 만든다는 것',
    currentInfluence: '현재 삶에서 손으로 무언가를 만드는 것에 만족감을 느끼고, 디테일에 집착합니다.',
    famousExample: '스트라디바리, 베르나르도 부온탈렌티',
  },
};

// 점수 계산 함수
export function calculateResult(answers: number[]): PastLifeResult {
  const scores: Record<PastLifeType, number> = {
    royalty: 0,
    warrior: 0,
    artist: 0,
    scholar: 0,
    merchant: 0,
    healer: 0,
    explorer: 0,
    monk: 0,
    rebel: 0,
    craftsman: 0,
  };

  // 각 질문의 선택에 따른 점수 합산
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as PastLifeType] += score;
      });
    }
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType: PastLifeType = 'scholar';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as PastLifeType;
    }
  });

  return results[resultType];
}
