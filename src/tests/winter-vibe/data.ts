// 겨울 감성 테스트 - 당신의 겨울 바이브는?

export const questions = [
  {
    id: 1,
    question: "겨울 아침, 창밖에 눈이 내리고 있다면?",
    options: [
      { text: "이불 속에서 더 뒹굴거린다", scores: { cozy: 3, melancholy: 1 } },
      { text: "바로 밖으로 나가서 눈 맞기", scores: { playful: 3, romantic: 1 } },
      { text: "따뜻한 음료 내려서 창밖 구경", scores: { romantic: 3, cozy: 1 } },
      { text: "출근/등교 걱정부터 한다", scores: { practical: 3, cozy: 1 } },
    ],
  },
  {
    id: 2,
    question: "가장 좋아하는 겨울 음료는?",
    options: [
      { text: "따뜻한 핫초코", scores: { cozy: 3, playful: 1 } },
      { text: "아메리카노 (차가워도 상관없음)", scores: { practical: 3, minimalist: 1 } },
      { text: "와인이나 뱅쇼", scores: { romantic: 3, melancholy: 1 } },
      { text: "생강차나 유자차", scores: { minimalist: 3, cozy: 1 } },
    ],
  },
  {
    id: 3,
    question: "이상적인 겨울 데이트는?",
    options: [
      { text: "눈썰매장이나 스키장", scores: { playful: 3, romantic: 1 } },
      { text: "따뜻한 카페에서 수다", scores: { cozy: 3, romantic: 1 } },
      { text: "불멍 때리며 고기 굽기", scores: { romantic: 3, cozy: 1 } },
      { text: "집에서 영화 정주행", scores: { minimalist: 3, cozy: 1 } },
    ],
  },
  {
    id: 4,
    question: "겨울 패션 스타일은?",
    options: [
      { text: "포근한 니트와 머플러", scores: { cozy: 3, romantic: 1 } },
      { text: "깔끔한 코트 스타일", scores: { minimalist: 3, practical: 1 } },
      { text: "패딩! 따뜻함이 최고", scores: { practical: 3, playful: 1 } },
      { text: "겨울에도 멋은 포기 못해", scores: { romantic: 3, minimalist: 1 } },
    ],
  },
  {
    id: 5,
    question: "겨울밤 하고 싶은 것은?",
    options: [
      { text: "따뜻한 이불 속에서 넷플릭스", scores: { cozy: 3, minimalist: 1 } },
      { text: "친구들과 술 한잔", scores: { playful: 3, romantic: 1 } },
      { text: "혼자 음악 들으며 감성에 빠지기", scores: { melancholy: 3, romantic: 1 } },
      { text: "밀린 일 정리하기", scores: { practical: 3, minimalist: 1 } },
    ],
  },
  {
    id: 6,
    question: "겨울에 가장 그리운 것은?",
    options: [
      { text: "따뜻한 햇살과 봄", scores: { practical: 3, playful: 1 } },
      { text: "첫눈 올 때의 설렘", scores: { romantic: 3, playful: 1 } },
      { text: "가족이 함께한 어린 시절 겨울", scores: { melancholy: 3, cozy: 1 } },
      { text: "특별히 그리운 건 없다", scores: { minimalist: 3, practical: 1 } },
    ],
  },
  {
    id: 7,
    question: "겨울에 어울리는 노래는?",
    options: [
      { text: "신나는 크리스마스 캐롤", scores: { playful: 3, cozy: 1 } },
      { text: "잔잔한 어쿠스틱", scores: { romantic: 3, minimalist: 1 } },
      { text: "감성적인 발라드", scores: { melancholy: 3, romantic: 1 } },
      { text: "평소 듣던 노래", scores: { minimalist: 3, practical: 1 } },
    ],
  },
  {
    id: 8,
    question: "겨울이 좋은 이유는?",
    options: [
      { text: "이불 밖이 위험하니까 합법적으로 집콕", scores: { cozy: 3, minimalist: 1 } },
      { text: "눈 오는 풍경이 예뻐서", scores: { romantic: 3, melancholy: 1 } },
      { text: "겨울 액티비티(스키, 보드) 때문에", scores: { playful: 3, practical: 1 } },
      { text: "솔직히 겨울은 별로...", scores: { practical: 3, minimalist: 1 } },
    ],
  },
  {
    id: 9,
    question: "겨울 음식하면 떠오르는 것은?",
    options: [
      { text: "뜨끈한 국물 (찌개, 라면, 탕)", scores: { cozy: 3, practical: 1 } },
      { text: "호빵, 붕어빵 같은 간식", scores: { playful: 3, cozy: 1 } },
      { text: "와인과 어울리는 스테이크", scores: { romantic: 3, minimalist: 1 } },
      { text: "따로 겨울 음식이랄 건 없다", scores: { minimalist: 3, practical: 1 } },
    ],
  },
  {
    id: 10,
    question: "겨울에 나를 표현하는 단어는?",
    options: [
      { text: "따뜻함", scores: { cozy: 3, romantic: 1 } },
      { text: "활기", scores: { playful: 3, practical: 1 } },
      { text: "고요함", scores: { minimalist: 3, melancholy: 1 } },
      { text: "감성", scores: { melancholy: 3, romantic: 1 } },
    ],
  },
];

export interface WinterVibeResult {
  type: string;
  title: string;
  emoji: string;
  subtitle: string;
  description: string;
  winterStyle: string;
  bestPlace: string;
  bestActivity: string;
  musicPlaylist: string[];
  movieRecommend: string;
  foodRecommend: string;
  tips: string[];
  compatibility: string[];
  incompatibility: string[];
}

export const results: Record<string, WinterVibeResult> = {
  cozy: {
    type: "cozy",
    title: "포근한 겨울 곰돌이",
    emoji: "🧸",
    subtitle: "이불 밖은 위험해! 집이 최고야",
    description: "겨울은 집에서 따뜻하게 보내는 게 최고라고 생각하는 당신! 포근한 담요, 따뜻한 음료, 좋아하는 영화... 이것만 있으면 완벽한 겨울이에요. 당신 주변에 있으면 덩달아 따뜻해지는 느낌이 들어요.",
    winterStyle: "집에서 편안한 니트와 수면 양말, 밖에선 두툼한 패딩",
    bestPlace: "따뜻한 집, 아늑한 카페, 온돌이 있는 한옥 스테이",
    bestActivity: "이불 속에서 영화 마라톤, 따뜻한 차 마시며 독서",
    musicPlaylist: ["잔잔한 재즈", "어쿠스틱 팝", "클래식 명곡"],
    movieRecommend: "해리포터 시리즈, 나홀로 집에",
    foodRecommend: "따끈한 부대찌개, 핫초코와 마시멜로",
    tips: [
      "가끔은 밖으로 나가 신선한 공기를 마셔보세요",
      "움직임이 줄어드니 스트레칭을 자주 해주세요",
      "사람들과 연락도 종종 하세요",
    ],
    compatibility: ["로맨틱 겨울 감성러", "미니멀 겨울족"],
    incompatibility: ["액티브 겨울러"],
  },
  playful: {
    type: "playful",
    title: "액티브 겨울러",
    emoji: "⛷️",
    subtitle: "겨울은 놀기 좋은 계절!",
    description: "눈이 오면 눈싸움하고, 스키장 가고, 친구들과 신나게 놀고 싶은 당신! 추워도 밖에서 노는 게 좋아요. 겨울이라고 집에만 있으면 아깝다고 생각하는 에너지 넘치는 타입이에요.",
    winterStyle: "기능성 아우터, 따뜻하면서도 활동적인 스타일",
    bestPlace: "스키장, 눈썰매장, 야외 아이스링크",
    bestActivity: "스키/보드, 눈싸움, 겨울 캠핑",
    musicPlaylist: ["신나는 EDM", "업템포 팝", "응원가"],
    movieRecommend: "겨울왕국, 남극 대모험",
    foodRecommend: "스키장 컵라면, 뜨끈한 어묵",
    tips: [
      "너무 무리하면 부상 위험! 준비운동 필수",
      "에너지 소모가 크니 충분히 먹고 활동하세요",
      "조용한 사람들도 배려해주세요",
    ],
    compatibility: ["로맨틱 겨울 감성러", "현실적 겨울 생존러"],
    incompatibility: ["우울한 겨울 시인"],
  },
  romantic: {
    type: "romantic",
    title: "로맨틱 겨울 감성러",
    emoji: "❄️",
    subtitle: "겨울엔 로맨스가 피어나죠",
    description: "첫눈 오는 날의 설렘, 눈 내리는 거리, 따뜻한 불빛... 겨울의 로맨틱한 분위기를 사랑하는 당신! 사랑하는 사람과 함께라면 추위도 아무렇지 않아요. 감성적이고 따뜻한 마음의 소유자예요.",
    winterStyle: "로맨틱한 코트, 예쁜 머플러, 감성적인 컬러",
    bestPlace: "눈 오는 거리, 불빛 가득한 카페, 온천 여행지",
    bestActivity: "연인과 눈길 산책, 크리스마스 마켓 구경",
    musicPlaylist: ["겨울 발라드", "러브송", "영화 OST"],
    movieRecommend: "러브 액츄얼리, 이프 온리",
    foodRecommend: "뱅쇼와 치즈 플래터, 따뜻한 수프",
    tips: [
      "혼자여도 충분히 로맨틱한 겨울을 보낼 수 있어요",
      "너무 감성에 빠지면 현실을 놓칠 수 있어요",
      "로맨스 외의 겨울 즐거움도 찾아보세요",
    ],
    compatibility: ["포근한 겨울 곰돌이", "액티브 겨울러"],
    incompatibility: ["현실적 겨울 생존러"],
  },
  melancholy: {
    type: "melancholy",
    title: "우울한 겨울 시인",
    emoji: "🌨️",
    subtitle: "겨울은 생각이 많아지는 계절",
    description: "겨울이 되면 왠지 감성적이 되고, 지난 일들이 생각나는 당신. 창밖에 내리는 눈을 보며 사색에 잠기고, 혼자만의 시간을 즐기는 타입이에요. 그 깊은 감성이 예술적인 영혼을 만들어요.",
    winterStyle: "차분한 톤의 옷, 편안하면서도 감각적인 스타일",
    bestPlace: "창가 자리 카페, 조용한 도서관, 눈 오는 골목",
    bestActivity: "일기 쓰기, 음악 듣기, 혼자 산책",
    musicPlaylist: ["슬픈 발라드", "재즈", "클래식"],
    movieRecommend: "이터널 선샤인, 어바웃 타임",
    foodRecommend: "따뜻한 차 한 잔, 와인",
    tips: [
      "너무 오래 혼자 있지 말고 사람들을 만나보세요",
      "우울감이 심해지면 전문가와 상담해보세요",
      "햇빛을 쬐는 것이 도움이 돼요",
    ],
    compatibility: ["미니멀 겨울족", "포근한 겨울 곰돌이"],
    incompatibility: ["액티브 겨울러"],
  },
  practical: {
    type: "practical",
    title: "현실적 겨울 생존러",
    emoji: "🧥",
    subtitle: "춥긴 추운데, 할 건 해야지",
    description: "겨울이라고 특별할 건 없다고 생각하는 실용적인 당신! 추우면 따뜻하게 입고, 미끄러우면 조심하고, 일상을 꾸준히 유지하는 타입이에요. 감성보다 실용성을 추구하는 현실주의자예요.",
    winterStyle: "기능성 좋은 패딩, 실용적인 부츠",
    bestPlace: "따뜻한 실내 어디든, 출퇴근길",
    bestActivity: "평소와 다름없는 일상 유지",
    musicPlaylist: ["평소 듣던 음악", "팟캐스트", "오디오북"],
    movieRecommend: "장르 상관없이 보고 싶은 영화",
    foodRecommend: "계절과 상관없이 좋아하는 음식",
    tips: [
      "가끔은 겨울 분위기에 빠져보는 것도 좋아요",
      "감성적인 것도 삶의 재미가 될 수 있어요",
      "계절을 즐기는 마음의 여유를 가져보세요",
    ],
    compatibility: ["미니멀 겨울족", "액티브 겨울러"],
    incompatibility: ["로맨틱 겨울 감성러"],
  },
  minimalist: {
    type: "minimalist",
    title: "미니멀 겨울족",
    emoji: "🏔️",
    subtitle: "고요하고 심플한 겨울이 좋아",
    description: "북적북적한 것보다 조용하고 심플한 겨울을 좋아하는 당신. 눈 덮인 풍경의 고요함, 불필요한 것을 덜어낸 깔끔함... 겨울의 미니멀한 아름다움을 아는 사람이에요.",
    winterStyle: "깔끔한 라인의 코트, 모노톤 컬러",
    bestPlace: "눈 덮인 산, 조용한 전원, 미니멀한 카페",
    bestActivity: "명상, 요가, 조용한 독서",
    musicPlaylist: ["앰비언트", "피아노 곡", "자연의 소리"],
    movieRecommend: "노르웨이 숲, 미나리",
    foodRecommend: "담백한 한식, 따뜻한 차",
    tips: [
      "가끔은 화려한 것도 즐겨보세요",
      "사람들과 어울리는 시간도 필요해요",
      "미니멀이 고립이 되지 않도록 주의하세요",
    ],
    compatibility: ["우울한 겨울 시인", "포근한 겨울 곰돌이"],
    incompatibility: ["액티브 겨울러"],
  },
};

export function calculateResult(answers: number[]): WinterVibeResult {
  const scores: Record<string, number> = {
    cozy: 0,
    playful: 0,
    romantic: 0,
    melancholy: 0,
    practical: 0,
    minimalist: 0,
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
