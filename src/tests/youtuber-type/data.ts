// 유튜버 유형 테스트 - 내가 유튜브를 한다면 어떤 유튜버?

export interface YoutuberTypeQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface YoutuberTypeResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  channelName: string;
  contentStyle: string[];
  strengths: string[];
  weaknesses: string[];
  equipment: string[];
  uploadFrequency: string;
  targetAudience: string;
  growthTips: string[];
  famousExample: string[];
  expectedSubscribers: string;
  hashtags: string[];
}

export const youtuberTypes = ['entertainer', 'educator', 'vlogger', 'gamer', 'reviewer', 'creator', 'mukbang', 'asmr'] as const;
export type YoutuberType = typeof youtuberTypes[number];

export const questions: YoutuberTypeQuestion[] = [
  {
    id: 1,
    question: "사람들과 있을 때 나는?",
    options: [
      { text: "분위기 메이커, 웃음 담당", scores: { entertainer: 3 } },
      { text: "지식이나 정보 공유하는 걸 좋아함", scores: { educator: 3 } },
      { text: "내 이야기 하는 걸 좋아함", scores: { vlogger: 3 } },
      { text: "조용히 있거나 관찰하는 편", scores: { asmr: 2, creator: 1 } },
    ],
  },
  {
    id: 2,
    question: "가장 오래 할 수 있는 것은?",
    options: [
      { text: "게임하기", scores: { gamer: 3 } },
      { text: "영상 편집/창작 활동", scores: { creator: 3 } },
      { text: "맛집 탐방/먹방", scores: { mukbang: 3 } },
      { text: "새로운 제품/서비스 써보기", scores: { reviewer: 3 } },
    ],
  },
  {
    id: 3,
    question: "카메라 앞에서 나는?",
    options: [
      { text: "자연스럽게 말하고 리액션함", scores: { entertainer: 2, vlogger: 1 } },
      { text: "준비한 내용 설명하는 건 잘함", scores: { educator: 2, reviewer: 1 } },
      { text: "조금 어색하지만 적응됨", scores: { gamer: 2, mukbang: 1 } },
      { text: "얼굴 안 나와도 되는 게 좋음", scores: { asmr: 2, creator: 1 } },
    ],
  },
  {
    id: 4,
    question: "콘텐츠를 만든다면 중요한 건?",
    options: [
      { text: "재미와 웃음", scores: { entertainer: 3 } },
      { text: "유용한 정보와 인사이트", scores: { educator: 2, reviewer: 1 } },
      { text: "감성과 공감", scores: { vlogger: 2, asmr: 1 } },
      { text: "퀄리티와 완성도", scores: { creator: 3 } },
    ],
  },
  {
    id: 5,
    question: "주로 보는 유튜브 콘텐츠는?",
    options: [
      { text: "예능/웃긴 영상", scores: { entertainer: 3 } },
      { text: "정보/교육 영상", scores: { educator: 3 } },
      { text: "브이로그/일상", scores: { vlogger: 3 } },
      { text: "게임/리뷰/먹방", scores: { gamer: 1, reviewer: 1, mukbang: 1 } },
    ],
  },
  {
    id: 6,
    question: "나의 말하기 스타일은?",
    options: [
      { text: "빠르고 에너지 넘침", scores: { entertainer: 2, gamer: 1 } },
      { text: "차분하고 논리적", scores: { educator: 2, reviewer: 1 } },
      { text: "친근하고 수다스러움", scores: { vlogger: 2, mukbang: 1 } },
      { text: "조용하고 차분함/말 적음", scores: { asmr: 2, creator: 1 } },
    ],
  },
  {
    id: 7,
    question: "영상 편집에 대한 생각?",
    options: [
      { text: "화려하고 빠른 편집이 좋음", scores: { entertainer: 2, gamer: 1 } },
      { text: "깔끔하고 정돈된 편집", scores: { educator: 2, reviewer: 1 } },
      { text: "자연스럽고 감성적인 편집", scores: { vlogger: 2, asmr: 1 } },
      { text: "편집 자체가 작품이어야 함", scores: { creator: 3 } },
    ],
  },
  {
    id: 8,
    question: "구독자와의 소통은?",
    options: [
      { text: "적극적으로 소통하고 싶음", scores: { entertainer: 2, vlogger: 1 } },
      { text: "댓글로 질문 답변 정도", scores: { educator: 2, reviewer: 1 } },
      { text: "라이브로 함께 놀고 싶음", scores: { gamer: 2, mukbang: 1 } },
      { text: "콘텐츠로 소통하는 게 좋음", scores: { creator: 2, asmr: 1 } },
    ],
  },
  {
    id: 9,
    question: "평소 관심 있는 분야는?",
    options: [
      { text: "트렌드/이슈/연예", scores: { entertainer: 2, vlogger: 1 } },
      { text: "기술/과학/지식", scores: { educator: 2, reviewer: 1 } },
      { text: "요리/맛집/음식", scores: { mukbang: 3 } },
      { text: "예술/디자인/창작", scores: { creator: 2, asmr: 1 } },
    ],
  },
  {
    id: 10,
    question: "유튜브 성공의 기준은?",
    options: [
      { text: "조회수와 인기", scores: { entertainer: 2, mukbang: 1 } },
      { text: "구독자들의 성장/변화", scores: { educator: 3 } },
      { text: "나의 일상 기록/추억", scores: { vlogger: 3 } },
      { text: "작품성과 완성도 인정", scores: { creator: 3 } },
    ],
  },
  {
    id: 11,
    question: "영상 촬영 선호 환경은?",
    options: [
      { text: "스튜디오/세팅된 공간", scores: { entertainer: 2, educator: 1 } },
      { text: "밖에서 다양한 장소", scores: { vlogger: 2, mukbang: 1 } },
      { text: "내 방/편한 공간", scores: { gamer: 2, asmr: 1 } },
      { text: "촬영보다 편집/제작에 집중", scores: { creator: 3 } },
    ],
  },
  {
    id: 12,
    question: "유튜브를 하는 가장 큰 이유?",
    options: [
      { text: "사람들을 웃기고 즐겁게 해주고 싶음", scores: { entertainer: 3 } },
      { text: "내가 아는 걸 알려주고 싶음", scores: { educator: 3 } },
      { text: "내 삶을 기록하고 공유하고 싶음", scores: { vlogger: 3 } },
      { text: "좋아하는 걸 하면서 수익도 내고 싶음", scores: { gamer: 1, mukbang: 1, reviewer: 1 } },
    ],
  },
];

export const results: Record<YoutuberType, YoutuberTypeResult> = {
  entertainer: {
    type: 'entertainer',
    title: '예능 유튜버',
    emoji: '🎭',
    subtitle: '웃음 폭탄 예능인',
    description: '당신은 타고난 엔터테이너! 카메라 앞에서 자연스럽게 재미를 만들어내고, 사람들을 웃기는 데 천부적인 재능이 있어요. 유행어도 만들고, 밈도 양산하는 인기 유튜버가 될 수 있어요.',
    channelName: '○○의 웃긴세상',
    contentStyle: ['코미디 콘텐츠', '몰래카메라', '챌린지', '리액션', '패러디'],
    strengths: ['순발력', '리액션', '분위기 장악', '입담'],
    weaknesses: ['컨디션 기복', '아이디어 고갈', '체력 소모'],
    equipment: ['좋은 마이크', '조명', '편집 프로그램'],
    uploadFrequency: '주 2-3회',
    targetAudience: '10-30대 전 연령',
    growthTips: [
      '트렌드를 빠르게 캐치하세요',
      '썸네일/제목이 승부처예요',
      '꾸준한 업로드가 핵심이에요',
      '시그니처 인사/유행어를 만드세요',
    ],
    famousExample: ['침착맨', '주호민', '피식대학', '빠니보틀'],
    expectedSubscribers: '10만~100만+',
    hashtags: ['#예능', '#웃김', '#꿀잼', '#병맛'],
  },
  educator: {
    type: 'educator',
    title: '지식/교육 유튜버',
    emoji: '📚',
    subtitle: '알려주는 게 행복한 선생님',
    description: '당신은 지식을 전달하는 데 열정이 있어요! 복잡한 것도 쉽게 설명하고, 사람들이 뭔가 배워가는 걸 보면 뿌듯해하는 타입이에요. 전문성 있는 교육 채널을 운영할 수 있어요.',
    channelName: '○○분 지식',
    contentStyle: ['강의', '해설', '분석', '팁/노하우', 'How-to'],
    strengths: ['전문성', '설명력', '신뢰감', '꾸준함'],
    weaknesses: ['재미 요소 부족', '딱딱해 보일 수 있음'],
    equipment: ['화이트보드/태블릿', '좋은 마이크', '화면 녹화'],
    uploadFrequency: '주 1-2회',
    targetAudience: '배우고 싶은 사람들',
    growthTips: [
      '전문 분야를 확실히 정하세요',
      '검색되는 키워드를 공략하세요',
      'SEO 최적화가 중요해요',
      '시리즈물로 구독 유도하세요',
    ],
    famousExample: ['슈카월드', '안될과학', '셜록현준', '김미경TV'],
    expectedSubscribers: '5만~50만',
    hashtags: ['#지식', '#교육', '#배움', '#정보'],
  },
  vlogger: {
    type: 'vlogger',
    title: '브이로거',
    emoji: '📹',
    subtitle: '일상이 콘텐츠인 사람',
    description: '당신의 일상 자체가 콘텐츠예요! 평범한 하루도 감성적으로 담아내고, 사람들과 삶을 공유하는 걸 좋아해요. 친근하고 공감가는 채널을 만들 수 있어요.',
    channelName: '○○의 하루',
    contentStyle: ['일상 브이로그', '여행', '자취생활', 'Get Ready With Me', '카페/장소'],
    strengths: ['친근함', '감성', '공감력', '꾸준함'],
    weaknesses: ['소재 고갈', '프라이버시 노출', '비교당하기 쉬움'],
    equipment: ['카메라/폰', '짐벌', '감성 BGM', '색보정'],
    uploadFrequency: '주 1-2회',
    targetAudience: '20-30대, 감성 좋아하는 분들',
    growthTips: [
      '나만의 감성/톤을 만드세요',
      '브랜딩이 중요해요',
      '인스타와 연계하세요',
      '꾸준함이 생명이에요',
    ],
    famousExample: ['햄지', '곽튜브', '소근커플', '도티'],
    expectedSubscribers: '1만~30만',
    hashtags: ['#브이로그', '#일상', '#데일리', '#감성'],
  },
  gamer: {
    type: 'gamer',
    title: '게임 유튜버',
    emoji: '🎮',
    subtitle: '게임이 곧 직업',
    description: '당신은 게임을 하면서 사람들과 소통하는 게 즐거운 타입이에요! 게임 실력이든 예능감이든, 게임을 콘텐츠로 만들 수 있는 잠재력이 있어요.',
    channelName: '○○겜스',
    contentStyle: ['게임 플레이', '공략', '리뷰', '하이라이트', '라이브'],
    strengths: ['게임 실력', '리액션', '소통력', '꾸준함'],
    weaknesses: ['게임 유행 변화', '경쟁 치열', '번아웃'],
    equipment: ['고성능 PC', '캡쳐보드', '좋은 마이크', '웹캠'],
    uploadFrequency: '주 3-5회 + 라이브',
    targetAudience: '10-30대 게이머',
    growthTips: [
      '특정 게임 전문가가 되세요',
      '라이브와 영상을 병행하세요',
      '트위치도 고려해보세요',
      '밈/하이라이트를 잘 뽑으세요',
    ],
    famousExample: ['풍월량', '김블루', '우왁굳', '침착맨'],
    expectedSubscribers: '5만~100만+',
    hashtags: ['#게임', '#겜스', '#플레이', '#공략'],
  },
  reviewer: {
    type: 'reviewer',
    title: '리뷰 유튜버',
    emoji: '⭐',
    subtitle: '솔직한 리뷰어',
    description: '당신은 새로운 제품이나 서비스를 써보고 평가하는 걸 좋아해요! 객관적이고 꼼꼼한 분석으로 사람들의 구매 결정에 도움을 줄 수 있는 리뷰어예요.',
    channelName: '○○리뷰',
    contentStyle: ['제품 리뷰', '비교 분석', '언박싱', '추천/비추천'],
    strengths: ['분석력', '객관성', '꼼꼼함', '신뢰감'],
    weaknesses: ['협찬 압박', '객관성 유지 어려움'],
    equipment: ['좋은 카메라', '조명', '깔끔한 배경'],
    uploadFrequency: '주 1-2회',
    targetAudience: '구매 고민 중인 사람들',
    growthTips: [
      '특정 분야 전문가가 되세요',
      '솔직함을 유지하세요',
      '검색 최적화가 중요해요',
      '협찬도 솔직하게 밝히세요',
    ],
    famousExample: ['잇섭', 'IT섭', '리뷰엉이', '용호수'],
    expectedSubscribers: '3만~30만',
    hashtags: ['#리뷰', '#언박싱', '#추천', '#솔직리뷰'],
  },
  creator: {
    type: 'creator',
    title: '크리에이터/아티스트',
    emoji: '🎨',
    subtitle: '작품을 만드는 예술가',
    description: '당신은 영상 자체를 하나의 작품으로 만드는 크리에이터예요! 편집, 영상미, 스토리텔링에 진심이고, 퀄리티 높은 콘텐츠를 만들어내요.',
    channelName: '○○스튜디오',
    contentStyle: ['시네마틱', '단편영화', '모션그래픽', 'VFX', '뮤직비디오'],
    strengths: ['영상미', '창의성', '기술력', '완성도'],
    weaknesses: ['제작 시간 오래 걸림', '조회수 낮을 수 있음'],
    equipment: ['전문 카메라', '편집 장비', 'After Effects'],
    uploadFrequency: '월 1-2회',
    targetAudience: '영상/예술 좋아하는 분들',
    growthTips: [
      '포트폴리오로 활용하세요',
      '콜라보로 노출을 늘리세요',
      '쇼츠로 유입을 만드세요',
      'B롤/메이킹도 콘텐츠예요',
    ],
    famousExample: ['스튜디오 룰루랄라', 'Every Frame a Painting', 'MSCHF'],
    expectedSubscribers: '1만~20만',
    hashtags: ['#영상미', '#시네마틱', '#크리에이터', '#아트'],
  },
  mukbang: {
    type: 'mukbang',
    title: '먹방 유튜버',
    emoji: '🍜',
    subtitle: '맛있게 먹는 게 재능',
    description: '당신은 먹는 모습 자체가 콘텐츠인 먹방 유튜버 타입이에요! 맛있게 먹는 모습, 음식 리뷰, 맛집 탐방으로 사람들의 대리만족을 채워줄 수 있어요.',
    channelName: '○○먹방',
    contentStyle: ['먹방', '맛집 탐방', '쿡방', '편의점 털기', 'ASMR 먹방'],
    strengths: ['먹는 모습', '리액션', '음식 지식', '친근함'],
    weaknesses: ['건강 관리', '음식값', '체중 관리'],
    equipment: ['좋은 마이크(ASMR)', '조명', '음식이 맛있어 보이는 세팅'],
    uploadFrequency: '주 2-4회',
    targetAudience: '음식 좋아하는 모든 분들',
    growthTips: [
      '차별화 포인트를 만드세요',
      'ASMR 요소를 넣어보세요',
      '맛 표현력을 키우세요',
      '쇼츠로 하이라이트 뽑으세요',
    ],
    famousExample: ['밴쯔', '쯔양', '히밥', '먹어볼래'],
    expectedSubscribers: '10만~100만+',
    hashtags: ['#먹방', '#맛집', '#야식', '#대리만족'],
  },
  asmr: {
    type: 'asmr',
    title: 'ASMR/힐링 유튜버',
    emoji: '🎧',
    subtitle: '귀를 녹이는 힐러',
    description: '당신은 조용하고 차분한 콘텐츠로 사람들에게 힐링을 주는 타입이에요! ASMR, 백색소음, 명상 등 편안함을 주는 채널을 운영할 수 있어요.',
    channelName: '○○ASMR',
    contentStyle: ['ASMR', '백색소음', '릴렉싱', '수면유도', '롤플레이'],
    strengths: ['차분함', '섬세함', '감성', '기술력'],
    weaknesses: ['얼굴 노출 부담 적음', '성장 느림', '니치 시장'],
    equipment: ['고급 마이크(필수)', '방음', '소품'],
    uploadFrequency: '주 1-2회',
    targetAudience: '수면/힐링 필요한 분들',
    growthTips: [
      '마이크에 투자하세요',
      '특정 ASMR 장르를 정하세요',
      '긴 영상도 잘 돼요',
      '해외 시장도 노려보세요',
    ],
    famousExample: ['ASMR유은', 'Latte ASMR', 'PPOMO ASMR'],
    expectedSubscribers: '5만~50만',
    hashtags: ['#ASMR', '#힐링', '#수면', '#릴렉스'],
  },
};

export function calculateResult(answers: number[]): YoutuberTypeResult {
  const scores: Record<YoutuberType, number> = {
    entertainer: 0,
    educator: 0,
    vlogger: 0,
    gamer: 0,
    reviewer: 0,
    creator: 0,
    mukbang: 0,
    asmr: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as YoutuberType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: YoutuberType = 'vlogger';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as YoutuberType;
    }
  });

  return results[resultType];
}
