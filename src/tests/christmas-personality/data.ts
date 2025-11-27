// 크리스마스 성격 테스트

export const questions = [
  {
    id: 1,
    question: "크리스마스 시즌이 다가오면 나는?",
    options: [
      { text: "벌써부터 들뜨고 설렌다!", scores: { festive: 3, romantic: 1 } },
      { text: "트리 장식하고 분위기 내는 게 좋다", scores: { cozy: 3, traditional: 1 } },
      { text: "그냥 평소와 다름없다", scores: { chill: 3, practical: 1 } },
      { text: "연말 모임 일정 조율이 바쁘다", scores: { social: 3, festive: 1 } },
    ],
  },
  {
    id: 2,
    question: "크리스마스에 가장 하고 싶은 것은?",
    options: [
      { text: "연인과 로맨틱한 데이트", scores: { romantic: 3, festive: 1 } },
      { text: "가족과 따뜻한 시간", scores: { traditional: 3, cozy: 1 } },
      { text: "친구들과 신나는 파티", scores: { social: 3, festive: 1 } },
      { text: "집에서 혼자 푹 쉬기", scores: { chill: 3, cozy: 1 } },
    ],
  },
  {
    id: 3,
    question: "크리스마스 선물을 고를 때 나는?",
    options: [
      { text: "받는 사람 취향을 철저히 분석", scores: { practical: 3, traditional: 1 } },
      { text: "의미 있고 감동적인 선물을 찾음", scores: { romantic: 3, traditional: 1 } },
      { text: "유행하는 인기 아이템 위주로", scores: { social: 3, festive: 1 } },
      { text: "현금이나 기프티콘이 최고", scores: { chill: 3, practical: 1 } },
    ],
  },
  {
    id: 4,
    question: "크리스마스 캐롤이 들리면?",
    options: [
      { text: "따라 부르며 기분이 업된다", scores: { festive: 3, social: 1 } },
      { text: "추억에 잠기며 감성적이 된다", scores: { romantic: 3, cozy: 1 } },
      { text: "그냥 배경음악일 뿐", scores: { chill: 3, practical: 1 } },
      { text: "좀 시끄럽다고 느낄 때도 있다", scores: { practical: 3, chill: 1 } },
    ],
  },
  {
    id: 5,
    question: "크리스마스 장식 스타일은?",
    options: [
      { text: "화려하고 반짝반짝하게!", scores: { festive: 3, social: 1 } },
      { text: "따뜻하고 아늑한 분위기로", scores: { cozy: 3, traditional: 1 } },
      { text: "심플하고 미니멀하게", scores: { practical: 3, chill: 1 } },
      { text: "장식은 별로 안 한다", scores: { chill: 3, practical: 1 } },
    ],
  },
  {
    id: 6,
    question: "크리스마스 음식하면 떠오르는 것은?",
    options: [
      { text: "치킨! 크리스마스엔 치킨이지", scores: { social: 3, festive: 1 } },
      { text: "케이크와 핫초코", scores: { romantic: 3, cozy: 1 } },
      { text: "정성스러운 홈파티 음식", scores: { traditional: 3, cozy: 1 } },
      { text: "그냥 평소처럼 먹는다", scores: { chill: 3, practical: 1 } },
    ],
  },
  {
    id: 7,
    question: "크리스마스 영화를 본다면?",
    options: [
      { text: "나홀로 집에 같은 코미디", scores: { festive: 3, social: 1 } },
      { text: "러브 액츄얼리 같은 로맨스", scores: { romantic: 3, cozy: 1 } },
      { text: "해리포터 같은 판타지", scores: { cozy: 3, traditional: 1 } },
      { text: "크리스마스 영화는 잘 안 본다", scores: { chill: 3, practical: 1 } },
    ],
  },
  {
    id: 8,
    question: "크리스마스 이브에 눈이 온다면?",
    options: [
      { text: "완벽한 화이트 크리스마스! 밖으로 나가야지", scores: { festive: 3, romantic: 1 } },
      { text: "창밖 눈 구경하며 따뜻한 음료 마시기", scores: { cozy: 3, romantic: 1 } },
      { text: "출퇴근 걱정부터 된다", scores: { practical: 3, chill: 1 } },
      { text: "그냥 날씨일 뿐", scores: { chill: 3, practical: 1 } },
    ],
  },
  {
    id: 9,
    question: "산타클로스에 대해 어떻게 생각해?",
    options: [
      { text: "동심을 지켜주는 아름다운 전통", scores: { traditional: 3, romantic: 1 } },
      { text: "아이들에게 꿈을 주는 존재", scores: { cozy: 3, traditional: 1 } },
      { text: "상업적으로 이용되는 캐릭터", scores: { practical: 3, chill: 1 } },
      { text: "별 생각 없다", scores: { chill: 3, practical: 1 } },
    ],
  },
  {
    id: 10,
    question: "크리스마스에 가장 중요한 것은?",
    options: [
      { text: "사랑하는 사람과 함께하는 시간", scores: { romantic: 3, traditional: 2 } },
      { text: "즐거운 분위기와 축제의 기쁨", scores: { festive: 3, social: 2 } },
      { text: "한 해를 마무리하는 의미", scores: { traditional: 3, practical: 2 } },
      { text: "그냥 연휴라 쉴 수 있는 것", scores: { chill: 3, practical: 2 } },
    ],
  },
];

export interface ChristmasPersonalityResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  christmasStyle: string;
  giftStyle: string;
  partyRole: string;
  perfectDate: string;
  movieRecommend: string;
  songRecommend: string;
  tips: string[];
  compatibility: string[];
  incompatibility: string[];
}

export const results: Record<string, ChristmasPersonalityResult> = {
  festive: {
    type: "festive",
    title: "축제의 요정",
    emoji: "🎄",
    subtitle: "크리스마스가 1년 중 가장 신나는 날!",
    description: "크리스마스 시즌이 되면 누구보다 들뜨고 신나는 당신! 캐롤을 따라 부르고, 장식을 하고, 파티를 기획하는 것이 너무 좋아요. 당신이 있으면 주변 사람들도 덩달아 크리스마스 분위기에 빠져듭니다. 어린아이 같은 순수한 설렘을 간직한 당신은 크리스마스의 진정한 요정이에요!",
    christmasStyle: "화려한 트리, 반짝이는 조명, 크리스마스 소품으로 가득 찬 공간을 좋아해요",
    giftStyle: "서프라이즈를 좋아하고, 선물 포장도 화려하게! 받는 사람의 반응을 기대하며 고르는 타입",
    partyRole: "파티 분위기 메이커! 게임을 제안하고 모두를 웃게 만드는 역할",
    perfectDate: "크리스마스 마켓 구경 후 야외 아이스링크에서 스케이트 타기",
    movieRecommend: "엘프 (Elf), 폴라 익스프레스",
    songRecommend: "All I Want for Christmas Is You - Mariah Carey",
    tips: [
      "흥에 취해 과소비하지 않도록 예산을 정해두세요",
      "혼자 조용히 보내고 싶은 사람도 있다는 걸 기억하세요",
      "파티 준비에 지치지 않도록 적당히 휴식도 취하세요",
    ],
    compatibility: ["로맨틱 드리머", "소셜 파티러"],
    incompatibility: ["쿨한 현실주의자"],
  },
  romantic: {
    type: "romantic",
    title: "로맨틱 드리머",
    emoji: "💝",
    subtitle: "크리스마스는 사랑을 확인하는 날",
    description: "크리스마스하면 로맨틱한 분위기가 먼저 떠오르는 당신! 사랑하는 사람과 함께하는 특별한 순간을 꿈꾸고, 의미 있는 선물과 따뜻한 말로 마음을 전하고 싶어해요. 눈 내리는 거리, 따뜻한 불빛, 그리고 사랑하는 사람... 영화 같은 크리스마스를 원하는 당신은 진정한 로맨티스트예요!",
    christmasStyle: "캔들, 따뜻한 조명, 아늑한 분위기를 연출하는 것을 좋아해요",
    giftStyle: "의미 있는 선물을 좋아해요. 커플 아이템이나 추억이 담긴 것을 선호",
    partyRole: "분위기 있는 대화를 이끌고, 소수의 친한 사람들과 깊은 시간을 보내는 타입",
    perfectDate: "눈 오는 날 카페에서 따뜻한 음료 마시며 이야기 나누기",
    movieRecommend: "러브 액츄얼리, 라스트 크리스마스",
    songRecommend: "Last Christmas - Wham!",
    tips: [
      "혼자인 크리스마스도 충분히 의미 있을 수 있어요",
      "기대가 너무 크면 실망도 클 수 있으니 현실적인 기대를 가져보세요",
      "로맨스 외에도 가족, 친구와의 사랑도 소중해요",
    ],
    compatibility: ["축제의 요정", "포근한 힐러"],
    incompatibility: ["쿨한 현실주의자"],
  },
  cozy: {
    type: "cozy",
    title: "포근한 힐러",
    emoji: "🧣",
    subtitle: "따뜻하고 아늑한 크리스마스가 최고",
    description: "화려한 파티보다는 따뜻한 담요, 핫초코, 그리고 좋아하는 사람들과 함께하는 조용한 시간을 좋아하는 당신! 크리스마스는 일 년 동안 열심히 달려온 자신을 쉬게 해주는 특별한 시간이에요. 당신의 따뜻한 에너지는 주변 사람들에게 편안함과 위로를 줍니다.",
    christmasStyle: "니트, 양말, 담요 등 따뜻한 소품들로 아늑한 공간을 만들어요",
    giftStyle: "실용적이면서도 따뜻한 마음이 담긴 선물. 직접 만든 것도 좋아해요",
    partyRole: "음식 준비를 돕거나, 조용히 대화하며 사람들을 편안하게 해주는 역할",
    perfectDate: "집에서 함께 요리하고 영화 보며 조용히 보내기",
    movieRecommend: "해리포터 시리즈, 작은 아씨들",
    songRecommend: "Have Yourself a Merry Little Christmas - Frank Sinatra",
    tips: [
      "가끔은 밖으로 나가 새로운 경험을 해보는 것도 좋아요",
      "타인을 돌보느라 자신을 너무 지치게 하지 마세요",
      "조용한 시간도 좋지만 활기찬 모임도 즐거울 수 있어요",
    ],
    compatibility: ["로맨틱 드리머", "전통주의자"],
    incompatibility: ["소셜 파티러"],
  },
  social: {
    type: "social",
    title: "소셜 파티러",
    emoji: "🥳",
    subtitle: "크리스마스는 다 같이 놀아야 제맛!",
    description: "크리스마스는 친구들과 신나게 즐겨야 한다고 생각하는 당신! 파티, 모임, 연말 행사... 사람들과 함께하는 순간이 가장 행복해요. SNS에 크리스마스 사진 올리는 것도 좋아하고, 트렌디한 크리스마스를 즐기는 타입이에요. 당신이 있으면 모임이 더 즐거워집니다!",
    christmasStyle: "인스타그래머블한 포토존, 트렌디한 장식을 좋아해요",
    giftStyle: "요즘 뜨는 아이템, 인기 있는 브랜드 제품을 선물하는 타입",
    partyRole: "파티를 기획하고, 사람들을 모으고, SNS에 기록하는 역할",
    perfectDate: "핫한 팝업스토어나 크리스마스 이벤트 방문",
    movieRecommend: "나 홀로 집에, 그린치",
    songRecommend: "Jingle Bell Rock - Bobby Helms",
    tips: [
      "조용히 쉬는 시간도 필요해요",
      "SNS보다 실제 순간을 즐기는 데 집중해보세요",
      "모든 모임에 참석하려 하지 말고 우선순위를 정하세요",
    ],
    compatibility: ["축제의 요정", "쿨한 현실주의자"],
    incompatibility: ["포근한 힐러"],
  },
  traditional: {
    type: "traditional",
    title: "전통주의자",
    emoji: "🎅",
    subtitle: "크리스마스는 가족과 함께하는 날",
    description: "크리스마스의 전통적인 의미를 소중히 여기는 당신! 가족과 함께 식사하고, 선물을 교환하고, 한 해를 돌아보는 시간을 중요하게 생각해요. 산타클로스, 크리스마스 트리, 캐롤... 전통적인 크리스마스 요소들이 주는 따뜻함을 사랑하는 타입이에요.",
    christmasStyle: "클래식한 빨강-초록 크리스마스 장식, 진짜 트리를 선호해요",
    giftStyle: "정성이 담긴 선물, 가족에게는 매년 선물을 꼭 준비하는 타입",
    partyRole: "가족 모임을 챙기고, 전통적인 크리스마스 분위기를 만드는 역할",
    perfectDate: "성당/교회 미사 참석 후 가족과 저녁 식사",
    movieRecommend: "34번가의 기적, 크리스마스 캐롤",
    songRecommend: "White Christmas - Bing Crosby",
    tips: [
      "새로운 크리스마스 경험도 열린 마음으로 받아들여 보세요",
      "가족이 없어도 의미 있는 크리스마스를 보낼 수 있어요",
      "전통도 좋지만 변화도 때로는 필요해요",
    ],
    compatibility: ["포근한 힐러", "로맨틱 드리머"],
    incompatibility: ["쿨한 현실주의자"],
  },
  practical: {
    type: "practical",
    title: "실용주의자",
    emoji: "🎁",
    subtitle: "크리스마스도 계획적으로!",
    description: "크리스마스를 효율적으로 보내고 싶은 당신! 선물은 실용적인 것으로, 파티는 잘 계획해서, 연휴는 알차게 보내는 것을 좋아해요. 감성보다는 이성적으로 크리스마스를 즐기는 타입이지만, 그 안에서도 나름의 즐거움을 찾는 당신이에요.",
    christmasStyle: "심플하고 정돈된 장식, 미니멀한 스타일을 선호해요",
    giftStyle: "받는 사람이 정말 필요한 것, 실용적인 아이템을 선물하는 타입",
    partyRole: "예약, 일정 조율, 정산 등 실무적인 역할을 맡아요",
    perfectDate: "연말 세일에서 필요한 물건 쇼핑하기",
    movieRecommend: "다이하드, 배드 산타",
    songRecommend: "Santa Claus Is Coming to Town - Bruce Springsteen",
    tips: [
      "가끔은 비효율적인 것에서 오는 즐거움도 있어요",
      "감성적인 부분도 조금 열어두면 더 풍요로워져요",
      "크리스마스만큼은 계획에서 벗어나도 괜찮아요",
    ],
    compatibility: ["쿨한 현실주의자", "전통주의자"],
    incompatibility: ["축제의 요정"],
  },
  chill: {
    type: "chill",
    title: "쿨한 현실주의자",
    emoji: "❄️",
    subtitle: "크리스마스? 그냥 연휴일 뿐",
    description: "크리스마스에 특별히 들뜨지 않는 당신! 그렇다고 싫어하는 건 아니지만, 그냥 평소처럼 보내는 것이 편해요. 쉴 수 있는 연휴라서 좋고, 굳이 특별한 이벤트 없이도 충분히 만족스러운 크리스마스를 보낼 수 있는 타입이에요. 자기만의 방식으로 여유롭게 보내는 것을 좋아해요.",
    christmasStyle: "장식은 거의 안 하거나 최소한으로, 있어도 그만 없어도 그만",
    giftStyle: "현금, 기프티콘 등 실패 없는 선물을 선호. 선물 교환 자체를 귀찮아할 수도",
    partyRole: "참석은 하지만 조용히 있다가 적당히 빠지는 타입",
    perfectDate: "집에서 좋아하는 콘텐츠 보며 쉬기",
    movieRecommend: "크리스마스와 상관없는 내가 보고 싶은 영화",
    songRecommend: "크리스마스 캐롤 대신 평소 듣던 음악",
    tips: [
      "주변 사람들의 크리스마스 설렘을 이해해주세요",
      "가끔은 분위기에 함께 빠져보는 것도 새로운 경험이에요",
      "혼자만의 시간도 좋지만 소중한 사람들과의 시간도 만들어보세요",
    ],
    compatibility: ["실용주의자", "소셜 파티러"],
    incompatibility: ["축제의 요정", "로맨틱 드리머"],
  },
};

export function calculateResult(answers: number[]): ChristmasPersonalityResult {
  const scores: Record<string, number> = {
    festive: 0,
    romantic: 0,
    cozy: 0,
    social: 0,
    traditional: 0,
    practical: 0,
    chill: 0,
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const selectedScores = question.options[answerIndex].scores;
      Object.entries(selectedScores).forEach(([type, score]) => {
        scores[type] = (scores[type] || 0) + score;
      });
    }
  });

  const maxType = Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  return results[maxType];
}
