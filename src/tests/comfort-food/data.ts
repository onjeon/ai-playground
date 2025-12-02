// 위로 음식 테스트 - 힘들 때 당신이 찾는 음식으로 보는 성격

export interface ComfortFoodQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

export interface ComfortFoodResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  comfortFoods: string[];
  personality: string[];
  stressRelief: string;
  innerNeeds: string;
  socialStyle: string;
  recommendations: string[];
  advice: string;
  hashtags: string[];
}

export const comfortTypes = ['chicken', 'ramen', 'tteokbokki', 'samgyeopsal', 'pizza', 'icecream'] as const;
export type ComfortType = typeof comfortTypes[number];

export const questions: ComfortFoodQuestion[] = [
  {
    id: 1,
    question: "힘든 하루를 보내고 집에 왔다. 가장 먼저 떠오르는 음식은?",
    options: [
      { text: "바삭한 치킨 한 마리 배달시켜야지", scores: { chicken: 3 } },
      { text: "뜨끈한 라면 하나 끓여야겠다", scores: { ramen: 3 } },
      { text: "매콤한 떡볶이가 당긴다", scores: { tteokbokki: 3 } },
      { text: "고기... 삼겹살이 먹고 싶다", scores: { samgyeopsal: 3 } },
    ],
  },
  {
    id: 2,
    question: "스트레스를 받으면 어떻게 풀고 싶어?",
    options: [
      { text: "친구 불러서 맥주 한잔하며 수다", scores: { chicken: 3, samgyeopsal: 1 } },
      { text: "혼자 조용히 뭔가를 먹으며 영상 보기", scores: { ramen: 2, icecream: 1 } },
      { text: "자극적인 맛으로 스트레스 날리기", scores: { tteokbokki: 3 } },
      { text: "푸짐하게 배부를 때까지 먹기", scores: { samgyeopsal: 2, pizza: 1 } },
    ],
  },
  {
    id: 3,
    question: "위로받고 싶을 때 선호하는 음식 스타일은?",
    options: [
      { text: "여럿이 나눠먹는 음식", scores: { chicken: 2, pizza: 2 } },
      { text: "빠르고 간편하게 먹을 수 있는 음식", scores: { ramen: 3 } },
      { text: "매운맛으로 정신 번쩍!", scores: { tteokbokki: 3 } },
      { text: "달콤하고 부드러운 음식", scores: { icecream: 3 } },
    ],
  },
  {
    id: 4,
    question: "기분이 안 좋을 때 음식을 먹는 패턴은?",
    options: [
      { text: "배달 앱 열고 고민 없이 치킨!", scores: { chicken: 3 } },
      { text: "냉장고 열고 있는 재료로 후다닥", scores: { ramen: 3 } },
      { text: "매운 걸 먹어서 기분전환", scores: { tteokbokki: 2, ramen: 1 } },
      { text: "많이 먹어서 배부르게", scores: { samgyeopsal: 2, pizza: 1 } },
    ],
  },
  {
    id: 5,
    question: "힘들 때 누구와 함께 먹고 싶어?",
    options: [
      { text: "친한 친구들과 시끌벅적하게", scores: { chicken: 3, samgyeopsal: 1 } },
      { text: "혼자서 조용히", scores: { ramen: 2, icecream: 2 } },
      { text: "연인이나 가까운 한 사람과", scores: { pizza: 2, icecream: 1 } },
      { text: "가족과 함께 든든하게", scores: { samgyeopsal: 3 } },
    ],
  },
  {
    id: 6,
    question: "음식에서 가장 위로받는 포인트는?",
    options: [
      { text: "바삭바삭, 아삭아삭 식감", scores: { chicken: 3 } },
      { text: "뜨끈한 국물의 온기", scores: { ramen: 3 } },
      { text: "매콤달콤 자극적인 맛", scores: { tteokbokki: 3 } },
      { text: "고소하고 든든한 포만감", scores: { samgyeopsal: 2, pizza: 1 } },
    ],
  },
  {
    id: 7,
    question: "우울할 때 어떤 맛이 당겨?",
    options: [
      { text: "짭짤하고 고소한 맛", scores: { chicken: 2, samgyeopsal: 2 } },
      { text: "맵고 얼큰한 맛", scores: { ramen: 2, tteokbokki: 2 } },
      { text: "달콤하고 부드러운 맛", scores: { icecream: 3 } },
      { text: "치즈나 여러 맛이 섞인 복합적인 맛", scores: { pizza: 3 } },
    ],
  },
  {
    id: 8,
    question: "스트레스 해소 음식 먹을 때 중요한 건?",
    options: [
      { text: "분위기! 좋은 사람들과 함께", scores: { chicken: 2, samgyeopsal: 2 } },
      { text: "속도! 빨리 먹고 해결", scores: { ramen: 3 } },
      { text: "강도! 확실하게 자극적으로", scores: { tteokbokki: 3 } },
      { text: "양! 푸짐하게 배부르게", scores: { pizza: 2, samgyeopsal: 1 } },
    ],
  },
  {
    id: 9,
    question: "힘든 날 먹는 음식과 함께 하고 싶은 것은?",
    options: [
      { text: "맥주나 음료와 함께 수다", scores: { chicken: 3 } },
      { text: "유튜브나 드라마 보며 먹기", scores: { ramen: 2, icecream: 2 } },
      { text: "친구들과 SNS 공유하며", scores: { tteokbokki: 2, pizza: 1 } },
      { text: "맛에만 집중! 대화 나중에", scores: { samgyeopsal: 3 } },
    ],
  },
  {
    id: 10,
    question: "위로 음식 먹은 후의 이상적인 상태는?",
    options: [
      { text: "친구들과 웃으며 기분 전환 완료!", scores: { chicken: 3 } },
      { text: "따뜻하게 배 채우고 잠들기", scores: { ramen: 3 } },
      { text: "스트레스 날리고 개운한 기분", scores: { tteokbokki: 3 } },
      { text: "든든하게 배불러서 안정감", scores: { samgyeopsal: 2, pizza: 2 } },
    ],
  },
];

export const results: Record<ComfortType, ComfortFoodResult> = {
  chicken: {
    type: 'chicken',
    title: '치킨형',
    emoji: '🍗',
    subtitle: '사람들과 함께하는 치킨 파티형',
    description: '힘들 때 사람이 필요한 당신! 혼자보다는 친구들과 치맥하며 수다 떠는 게 최고의 위로예요. 사교적이고 밝은 에너지를 가진 당신은 함께 나누는 것에서 행복을 찾아요.',
    comfortFoods: ['후라이드 치킨', '양념 치킨', '치킨 + 맥주', '파닭'],
    personality: ['사교적', '밝은 에너지', '공유를 좋아함', '분위기 메이커'],
    stressRelief: '친구들과 시끌벅적하게 수다 떨며 치맥',
    innerNeeds: '사람들과의 연결, 소속감과 우정',
    socialStyle: '힘들 땐 바로 친구에게 연락하는 능동적 타입',
    recommendations: ['BBQ 황금올리브', '교촌 허니콤보', '굽네 고추바사삭', 'BHC 뿌링클'],
    advice: '가끔은 혼자만의 시간도 필요해요. 스스로를 돌보는 시간도 가져보세요.',
    hashtags: ['#치킨파티', '#치맥러', '#함께라서좋아', '#사교적인나'],
  },
  ramen: {
    type: 'ramen',
    title: '라면형',
    emoji: '🍜',
    subtitle: '빠르고 간단한 해결을 좋아하는 실용파',
    description: '힘들 때 복잡한 건 싫고 간단하게 해결하고 싶은 당신! 라면 끓이듯 스트레스도 빠르게 처리하고 넘기는 효율적인 성격이에요. 혼자만의 시간이 충전의 핵심!',
    comfortFoods: ['신라면', '진라면', '너구리', '짜파게티'],
    personality: ['실용적', '효율 중시', '독립적', '자기만의 세계'],
    stressRelief: '혼자 조용히 라면 끓여먹으며 영상 시청',
    innerNeeds: '빠른 해결, 혼자만의 평화로운 시간',
    socialStyle: '힘들 때 일단 혼자 정리하고 나중에 공유하는 타입',
    recommendations: ['신라면 블랙', '짜파구리', '불닭볶음면', '열라면'],
    advice: '가끔은 시간을 들여 제대로 해결해야 할 문제도 있어요. 조금 여유를 가져보세요.',
    hashtags: ['#라면러버', '#혼밥', '#실용주의', '#효율갑'],
  },
  tteokbokki: {
    type: 'tteokbokki',
    title: '떡볶이형',
    emoji: '🌶️',
    subtitle: '자극적이고 열정적인 스트레스 해소파',
    description: '스트레스를 매운맛으로 날리는 당신! 감정을 숨기기보다 확실하게 표현하고 해소하는 열정적인 타입이에요. 매콤한 자극이 기분 전환의 핵심 포인트!',
    comfortFoods: ['떡볶이', '엽기떡볶이', '신전떡볶이', '로제떡볶이'],
    personality: ['열정적', '감정 표현 솔직', '화끈함', '적극적'],
    stressRelief: '매운 걸 먹으며 스트레스 확실히 날리기',
    innerNeeds: '감정의 해소, 확실한 기분 전환',
    socialStyle: '힘들면 바로 표현하고 해결하려는 직설적 타입',
    recommendations: ['엽기떡볶이 오리지널', '신전떡볶이', '응급실떡볶이', '죠스떡볶이'],
    advice: '가끔은 차분하게 감정을 정리하는 시간도 필요해요. 매운맛만이 답은 아니에요.',
    hashtags: ['#떡볶이러버', '#맵찔이아님', '#스트레스해소', '#열정가득'],
  },
  samgyeopsal: {
    type: 'samgyeopsal',
    title: '삼겹살형',
    emoji: '🥓',
    subtitle: '든든함과 안정을 추구하는 안정파',
    description: '힘들 때 든든하게 배를 채우고 싶은 당신! 고기 굽는 소리와 함께 마음의 평화를 찾아요. 안정적이고 가정적인 성향으로 가까운 사람들과 함께하는 것을 좋아해요.',
    comfortFoods: ['삼겹살', '목살', '소고기', '갈비'],
    personality: ['안정 추구', '든든함', '가정적', '신뢰감'],
    stressRelief: '가족이나 친한 친구와 고기 구워먹기',
    innerNeeds: '안정감, 든든한 포만감과 마음의 평화',
    socialStyle: '힘들 때 가까운 사람에게 기대는 의지형 타입',
    recommendations: ['숙성 삼겹살', '대패삼겹살', '항정살', '가브리살'],
    advice: '스스로 해결하는 힘도 키워보세요. 혼자서도 든든해질 수 있어요.',
    hashtags: ['#삼겹살사랑', '#고기는진리', '#든든한위로', '#안정지향'],
  },
  pizza: {
    type: 'pizza',
    title: '피자형',
    emoji: '🍕',
    subtitle: '다양성을 추구하는 멀티플레이어',
    description: '한 가지로는 만족 못하는 당신! 여러 토핑이 조화된 피자처럼 다양한 경험과 선택지를 좋아해요. 유연하고 적응력 있는 성격으로 어디서든 잘 어울려요.',
    comfortFoods: ['콤비네이션 피자', '페퍼로니 피자', '고구마 피자', '하프앤하프'],
    personality: ['다양성 추구', '유연함', '적응력', '열린 마음'],
    stressRelief: '친구나 연인과 피자 주문해서 다양하게 맛보기',
    innerNeeds: '선택의 다양성, 새로운 경험에 대한 욕구',
    socialStyle: '힘들 때 상황에 따라 유연하게 대처하는 타입',
    recommendations: ['도미노 포테이토', '피자헛 치즈크러스트', '파파존스 페퍼로니', '미스터피자 콤비네이션'],
    advice: '가끔은 하나에 집중하는 것도 좋아요. 선택 장애를 줄여보세요.',
    hashtags: ['#피자러버', '#다양성추구', '#유연한성격', '#선택장애'],
  },
  icecream: {
    type: 'icecream',
    title: '아이스크림형',
    emoji: '🍦',
    subtitle: '달콤함과 위로가 필요한 감성파',
    description: '힘들 때 달콤한 것이 당기는 당신! 차갑고 달콤한 아이스크림으로 마음을 달래는 감성적인 타입이에요. 부드러운 위로와 따뜻한 공감이 필요한 섬세한 성격이에요.',
    comfortFoods: ['바닐라 아이스크림', '초콜릿 아이스크림', '딸기 아이스크림', '민트초코'],
    personality: ['감성적', '섬세함', '로맨틱', '예술적 감각'],
    stressRelief: '달콤한 아이스크림으로 기분 전환',
    innerNeeds: '부드러운 위로, 감정적 공감과 이해',
    socialStyle: '힘들 때 감정을 느끼고 위로받고 싶은 타입',
    recommendations: ['하겐다즈 벨기에초콜릿', '배스킨라빈스 민트초코', '나뚜루 스트로베리', '편의점 투게더'],
    advice: '달콤함도 좋지만 감정을 직접 표현하고 해소하는 것도 중요해요.',
    hashtags: ['#아이스크림러버', '#달달한위로', '#감성충만', '#당충전'],
  },
};

export function calculateResult(answers: number[]): ComfortFoodResult {
  const scores: Record<ComfortType, number> = {
    chicken: 0,
    ramen: 0,
    tteokbokki: 0,
    samgyeopsal: 0,
    pizza: 0,
    icecream: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      Object.entries(optionScores).forEach(([type, score]) => {
        scores[type as ComfortType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: ComfortType = 'chicken';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as ComfortType;
    }
  });

  return results[resultType];
}
